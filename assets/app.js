const DASH = (() => {
  const REPO = 'Cloudlabs-GH-Copilot/org-reaper';
  const WFS = [
    { file: 'daily-ops.yml', label: 'all monitors', inputs: {} },
  ];
  const NAV = [
    { id: 'overview', file: 'index.html', label: 'Overview' },
    { id: 'cost', file: 'cost.html', label: 'Cost' },
    { id: 'seats', file: 'seats.html', label: 'Seats & licenses' },
    { id: 'pools', file: 'pools.html', label: 'Credit pools' },
    { id: 'orgs', file: 'orgs.html', label: 'Orgs & ops' },
    { id: 'users', file: 'users.html', label: 'Users' },
  ];
  const state = { userPeriod: 'month', userSearch: '', users: [], usersGen: null, userShowAll: false };

  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const usd = v => '$' + Math.round(v ?? 0).toLocaleString();
  const usdc = v => '$' + (v ?? 0).toLocaleString(undefined, { maximumFractionDigits: 0 });
  const num = v => (v ?? 0).toLocaleString();

  async function fetchJson(p) { try { const r = await fetch(p + '?t=' + Date.now()); return r.ok ? await r.json() : null; } catch { return null; } }
  async function fetchText(p) { try { const r = await fetch(p + '?t=' + Date.now()); return r.ok ? await r.text() : null; } catch { return null; } }

  function spark(values, color) {
    if (!values || values.length < 2) return '';
    const w = 300, h = 36, mx = Math.max(...values, 1), mn = Math.min(...values, 0);
    const pts = values.map((v, i) => `${(i / (values.length - 1) * w).toFixed(1)},${(h - 3 - (v - mn) / (mx - mn || 1) * (h - 6)).toFixed(1)}`).join(' ');
    return `<svg class="spark" width="${w}" height="${h}"><polyline fill="none" stroke="${color}" stroke-width="1.5" points="${pts}"/></svg>`;
  }
  function barChart(rows, curMonth) {
    if (!rows || !rows.length) return '';
    const mx = Math.max(...rows.map(r => r.net), 1);
    return '<div class="bars">' + rows.map(r => {
      const hh = Math.max(2, Math.round(r.net / mx * 100));
      const cur = r.month === curMonth ? ' cur' : '';
      const lbl = r.month.slice(2).replace('-', '/');
      const val = r.net >= 1000 ? '$' + Math.round(r.net / 1000) + 'k' : '$' + Math.round(r.net);
      return `<div class="bar${cur}"><div class="bv">${val}</div><div class="col" style="height:${hh}%"></div><div class="bl">${lbl}</div></div>`;
    }).join('') + '</div>';
  }
  function mdToHtml(md) {
    const lines = md.split('\n'); let html = '', inCode = false, inTable = false, inList = false;
    const flush = () => { if (inTable) { html += '</table>'; inTable = false; } if (inList) { html += '</ul>'; inList = false; } };
    for (let raw of lines) {
      if (raw.startsWith('```')) { flush(); html += inCode ? '</pre>' : '<pre>'; inCode = !inCode; continue; }
      if (inCode) { html += esc(raw) + '\n'; continue; }
      let l = esc(raw).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/`(.+?)`/g, '<code>$1</code>');
      if (/^\|[\s:\-|]+\|$/.test(raw.trim())) continue;
      if (raw.trim().startsWith('|')) {
        const cells = l.trim().replace(/^\||\|$/g, '').split('|').map(c => c.trim());
        if (!inTable) { flush(); html += '<table><tr>' + cells.map(c => `<th>${c}</th>`).join('') + '</tr>'; inTable = true; }
        else html += '<tr>' + cells.map(c => `<td>${c}</td>`).join('') + '</tr>';
        continue;
      }
      if (raw.startsWith('### ')) { flush(); html += `<h3>${l.slice(4)}</h3>`; continue; }
      if (raw.startsWith('## ')) { flush(); html += `<h2>${l.slice(3)}</h2>`; continue; }
      if (raw.startsWith('- ')) { if (!inList) { flush(); html += '<ul>'; inList = true; } html += `<li>${l.slice(2)}</li>`; continue; }
      flush();
      if (raw.trim() !== '') html += `<p>${l}</p>`;
    }
    flush(); if (inCode) html += '</pre>';
    return html;
  }

  let DATA = null;
  async function loadData(force) {
    if (DATA && !force) return DATA;
    const [bh, sh, oh, smd, omd] = await Promise.all([
      fetchJson('data/billing-watchdog-history.json'),
      fetchJson('data/copilot-seat-reaper-history.json'),
      fetchJson('data/org-reaper-history.json'),
      fetchText('data/copilot-seat-reaper-latest.md'),
      fetchText('data/org-reaper-latest.md'),
    ]);
    DATA = {
      bh: bh || [], sh: sh || [], oh: oh || [], smd, omd,
      b: (bh && bh.length) ? bh[bh.length - 1] : {},
      s: (sh && sh.length) ? sh[sh.length - 1] : {},
      o: (oh && oh.length) ? oh[oh.length - 1] : {},
    };
    return DATA;
  }

  // ---------- shared computations ----------
  function efficiency(d) {
    const cs = d.b.copilot_stats || {};
    const copTotal = cs.total ?? d.s.total ?? d.b.copilot ?? 0;
    const copActive = cs.active ?? d.s.active ?? 0;
    const copUtil = cs.utilization ?? (copTotal > 0 ? Math.round(copActive / copTotal * 100) : 0);
    const poolCommitted = (d.b.cost_centers || []).reduce((a, c) => a + (c.pool || 0), 0);
    const poolUsed = (d.b.cost_centers || []).reduce((a, c) => a + (c.cumulative || 0), 0);
    const poolUtil = poolCommitted > 0 ? Math.round(poolUsed / poolCommitted * 100) : 0;
    return { copTotal, copActive, copUtil, poolCommitted, poolUsed, poolUtil };
  }
  function savings(d) {
    const expiringUnused = (d.b.cost_centers || []).filter(c => c.days_left != null && c.days_left <= 30).reduce((a, c) => a + (c.remaining || 0), 0);
    const cs = d.b.copilot_stats || {};
    const reclaimSeats = cs.candidates ?? d.s.candidates ?? 0;
    return { expiringUnused, reclaimSeats, reclaimUsd: reclaimSeats * 19, total: expiringUnused + reclaimSeats * 19 };
  }

  // ---------- page renderers ----------
  function overview(d) {
    const b = d.b, e = efficiency(d), sv = savings(d);
    const bv = b.budget_variance || [];
    const totalBudget = bv.reduce((a, x) => a + (x.budget || 0), 0);
    const projLin = b.proj_month_end ?? 0, projTr = b.proj_trailing ?? projLin;
    const projLo = Math.min(projLin, projTr), projHi = Math.max(projLin, projTr);
    const proj = projHi; // conservative for budget check
    const budgetPct = totalBudget > 0 ? Math.round(proj / totalBudget * 100) : 0;
    const bcls = budgetPct > 100 ? 'neg' : budgetPct > 85 ? 'warn' : 'pos';
    const curMonth = (b.monthly && b.monthly.length) ? b.monthly[b.monthly.length - 1].month : '';
    let h = `<div class="krow">
      <div class="kpi"><div class="v">${usd(projLo)}–${usd(projHi)}</div><div class="l">Projected month-end</div><div class="sub2 muted2">linear ${usd(projLin)} · 7-day-rate ${usd(projTr)}</div></div>
      <div class="kpi"><div class="v ${bcls}">${budgetPct}%</div><div class="l">of budget (${usd(totalBudget)})</div><div class="sub2 ${bcls}">worst-case ${budgetPct > 100 ? 'over' : 'under'} by ${usd(Math.abs(proj - totalBudget))}</div></div>
      <div class="kpi"><div class="v ${e.copUtil < 40 ? 'neg' : e.copUtil < 70 ? 'warn' : 'pos'}">${e.copUtil}%</div><div class="l">Copilot utilization</div><div class="sub2 muted2">${e.copActive}/${e.copTotal} seats</div></div>
      <div class="kpi"><div class="v ${e.poolUtil < 20 ? 'warn' : 'pos'}">${e.poolUtil}%</div><div class="l">Pool utilization</div><div class="sub2 muted2">${usd(e.poolUsed)}/${usd(e.poolCommitted)}</div></div>
      <div class="kpi"><div class="v ${sv.total > 1000 ? 'warn' : 'pos'}">${usd(sv.total)}</div><div class="l">Identified savings</div><div class="sub2 muted2">expiring credit + idle seats</div></div>
    </div>`;
    if (b.alerts && b.alerts.length) h += `<div class="extbox"><b class="alert">🚨 ${b.alerts.length} active alert${b.alerts.length > 1 ? 's' : ''}</b><ul style="margin:6px 0 0;padding-left:18px">${b.alerts.map(a => `<li>${esc(a)}</li>`).join('')}</ul></div>`;
    h += `<div class="grid">
      <div class="card"><h2>💰 Cost <a href="cost.html">detail →</a></h2><div class="stats">
        <div class="stat"><b>${usd(b.mtd)}</b><span>MTD net</span></div>
        <div class="stat"><b>${usd(b.github_total)}</b><span>incl. cost centers</span></div>
        <div class="stat"><b>${usd(b.yday)}</b><span>yesterday</span></div>
      </div>${spark(d.bh.map(x => x.yday ?? 0), '#58a6ff')}</div>
      <div class="card"><h2>🪑 Seats <a href="seats.html">detail →</a></h2><div class="stats">
        <div class="stat"><b>${(d.b.copilot_stats && d.b.copilot_stats.total) ?? d.s.total ?? '—'}</b><span>seats</span></div>
        <div class="stat"><b class="ok">${(d.b.copilot_stats && d.b.copilot_stats.active) ?? d.s.active ?? '—'}</b><span>active</span></div>
        <div class="stat"><b>${(d.b.copilot_stats && d.b.copilot_stats.pending_cancel) ?? d.s.pending_cancel ?? '—'}</b><span>pending cancel</span></div>
      </div>${spark(d.bh.map(x => (x.copilot_stats && x.copilot_stats.active) || 0), '#3fb950')}</div>
      <div class="card"><h2>🗑️ Orgs <a href="orgs.html">detail →</a></h2><div class="stats">
        <div class="stat"><b>${d.o.orgs ?? '—'}</b><span>orgs</span></div>
        <div class="stat"><b>${d.o.kept ?? 0}</b><span>in grace</span></div>
        <div class="stat"><b>${d.o.dry_run === 'true' ? 'DRY-RUN' : 'ARMED'}</b><span>reaper</span></div>
      </div>${spark(d.oh.map(x => x.orgs ?? 0), '#d29922')}</div>
    </div>`;
    h += `<h3 style="margin-top:18px">Month-over-month (net)</h3>${barChart(b.monthly, curMonth)}<div class="muted2">Prev month ${usd(b.prev_month_total)}; current projecting ${usd(projLo)}–${usd(projHi)}. Lab spend is event-driven, so the range widens mid-month.</div>`;
    // Alert history from the daily series
    const seen = {};
    (d.bh || []).forEach(e => (e.alerts || []).forEach(a => { const k = a.slice(0, 70); if (!seen[k]) seen[k] = { days: 0, last: e.date }; seen[k].days++; seen[k].last = e.date; }));
    const rows = Object.entries(seen).sort((a, b2) => b2[1].days - a[1].days).slice(0, 10);
    h += `<h3 style="margin-top:18px">Alert history (last ${(d.bh || []).length} runs)</h3>${spark((d.bh || []).map(x => x.alert_count ?? 0), '#f85149')}`;
    if (rows.length) h += `<table class="cmp"><tr><th>Alert</th><th>Runs seen</th><th>Last</th></tr>${rows.map(([k, v]) => `<tr><td>${esc(k)}…</td><td>${v.days}</td><td><small>${v.last ? v.last.slice(0, 10) : ''}</small></td></tr>`).join('')}</table>`;
    else h += `<div class="muted2">No alerts recorded in the retained history.</div>`;
    return h;
  }

  function cost(d) {
    const b = d.b;
    const curMonth = (b.monthly && b.monthly.length) ? b.monthly[b.monthly.length - 1].month : '';
    let h = `<div class="stats">
      <div class="stat"><b>${usd(b.github_total)}</b><span>total GitHub</span></div>
      <div class="stat"><b>${usd(b.mtd)}</b><span>our sub</span></div>
      <div class="stat"><b>${usd(b.cc_total_mtd)}</b><span>cost centers</span></div>
      <div class="stat"><b>${usd(b.yday)}</b><span>yesterday</span></div>
      <div class="stat"><b>${usd(b.gross)}</b><span>gross</span></div>
    </div>${spark(d.bh.map(x => x.yday ?? 0), '#58a6ff')}`;
    h += `<div class="grid">`;
    h += `<div class="card"><h3>Spend by product (MTD net)</h3><table class="cmp"><tr><th>Product</th><th>MTD net</th></tr>${(b.by_product || []).map(p => `<tr><td>${p.product}</td><td>${usd(p.net)}</td></tr>`).join('')}</table></div>`;
    h += `<div class="card"><h3>Spend by org (MTD net)</h3><table class="cmp"><tr><th>Org</th><th>MTD net</th></tr>${(b.by_org || []).map(o => `<tr><td>${esc(o.org)}</td><td>${usd(o.net)}</td></tr>`).join('')}</table></div>`;
    h += `<div class="card"><h3>💵 Cost routing</h3><table class="cmp"><tr><th>Destination</th><th>MTD</th></tr>
      <tr class="delta"><td>Total GitHub</td><td>${usd(b.github_total)}</td></tr>
      <tr><td>→ Our Azure sub</td><td>${usd(b.mtd)}</td></tr>
      <tr><td>→ Cost centers</td><td>${usd(b.cc_total_mtd)}</td></tr></table></div>`;
    h += `<div class="card"><h3>Budget variance</h3><table class="cmp"><tr><th>Product</th><th>Actual</th><th>Projected</th><th>Budget</th><th></th></tr>${(b.budget_variance || []).map(x => { const over = x.budget != null && x.projected > x.budget; return `<tr><td>${x.product}</td><td>${usd(x.actual)}</td><td>${usd(x.projected)}</td><td>${x.budget != null ? usd(x.budget) : '—'}</td><td>${x.budget == null ? '' : over ? '<span class="neg">over</span>' : '<span class="pos">ok</span>'}</td></tr>`; }).join('')}</table></div>`;
    if (b.azure_gh_total != null) {
      const ghApi = b.mtd ?? 0, azOur = b.azure_our ?? 0;
      const pctMatch = azOur > 0 ? Math.round((Math.min(ghApi, azOur) / Math.max(ghApi, azOur)) * 100) : 0;
      let a = `<div class="card"><h3>☁️ GitHub ↔ Azure reconciliation</h3><table class="cmp"><tr><th></th><th>MTD</th></tr>
        <tr><td>GitHub billing API (net)</td><td>${usd(ghApi)}</td></tr>
        <tr><td>Azure sub — our account</td><td>${usd(azOur)}</td></tr>
        <tr class="delta"><td>Difference <small>(lag)</small></td><td>${usd(ghApi - azOur)}</td></tr></table>
        <div class="matchbar"><div class="matchfill" style="width:${pctMatch}%"></div></div>
        <div class="muted2">${pctMatch}% reconciled — Azure posts with 1–2 day lag.</div>`;
      const ext = b.azure_external ?? 0;
      if (ext > 0 && b.azure_accounts) a += `<div class="extbox"><b class="alert">⚠️ ${usd(ext)} on this sub is NOT your enterprise</b><table class="cmp">${b.azure_accounts.filter(x => !x.ours).map(x => `<tr><td>${x.account}</td><td>${usd(x.amount)}</td></tr>`).join('')}</table></div>`;
      a += `<table class="cmp"><tr><th>Billing account</th><th>MTD</th><th></th></tr>${(b.azure_accounts || []).map(x => `<tr><td>${x.account}</td><td>${usd(x.amount)}</td><td>${x.ours ? '<span class="ok">ours</span>' : '<span class="alert">external</span>'}</td></tr>`).join('')}</table></div>`;
      h += a;
    }
    h += `</div>`;
    h += `<h3 style="margin-top:18px">Month-over-month (net)</h3>${barChart(b.monthly, curMonth)}`;
    return h;
  }

  function seats(d) {
    const b = d.b, e = efficiency(d);
    const cs = b.copilot_stats || {};
    const copNet = (b.by_product || []).find(p => p.product === 'copilot')?.net ?? 0;
    const perActive = e.copActive > 0 ? copNet / e.copActive : 0;
    let h = `<div class="krow">
      <div class="kpi"><div class="v">${cs.total ?? d.s.total ?? '—'}</div><div class="l">Copilot seats</div></div>
      <div class="kpi"><div class="v ok">${cs.active ?? d.s.active ?? '—'}</div><div class="l">active (30d)</div></div>
      <div class="kpi"><div class="v">${cs.never ?? ((d.s.never_in_grace ?? 0) + (d.s.never_old ?? 0))}</div><div class="l">never used</div></div>
      <div class="kpi"><div class="v">${cs.pending_cancel ?? d.s.pending_cancel ?? '—'}</div><div class="l">pending cancel</div></div>
      <div class="kpi"><div class="v ${e.copUtil < 40 ? 'neg' : e.copUtil < 70 ? 'warn' : 'pos'}">${e.copUtil}%</div><div class="l">utilization</div></div>
    </div>${spark(d.bh.map(x => (x.copilot_stats && x.copilot_stats.active) || 0), '#3fb950')}
    <div class="muted2">All Copilot figures on this page are from one snapshot (the billing monitor's latest run), so they reconcile with the provisioning numbers below.</div>`;
    const pv = b.provisioning;
    if (pv) {
      h += `<h3 style="margin-top:6px">📈 This month's provisioning (${pv.month})</h3>
      <div class="krow">
        <div class="kpi"><div class="v">${num(pv.copilot_added_month)}</div><div class="l">Copilot seats provisioned this month</div><div class="sub2 muted2">lab intake</div></div>
        <div class="kpi"><div class="v warn">${num(pv.copilot_pending_cancel)}</div><div class="l">scheduled to cancel (${b.user_segments && b.user_segments.cancel_date ? b.user_segments.cancel_date : 'cycle end'})</div></div>
        <div class="kpi"><div class="v ok">${num(pv.copilot_net_after_cancel)}</div><div class="l">Copilot seats remaining after</div></div>
        <div class="kpi"><div class="v">${num(b.member_count)}</div><div class="l">active GHEC members now</div></div>
      </div>
      <div class="muted2" style="margin-bottom:12px">Why Copilot (${num(pv.copilot_total)}) &gt; GHEC members (${num(b.member_count)}): GHEC counts <b>active members right now</b>, while Copilot still includes the ${num(pv.copilot_pending_cancel)} seats winding down from this month's lab intake. After cancellations on ${b.user_segments && b.user_segments.cancel_date ? b.user_segments.cancel_date : 'the cycle date'}, Copilot settles near ${num(pv.copilot_net_after_cancel)}.</div>`;
    }
    h += `<div class="grid">
      <div class="card"><h3>📐 Unit economics</h3><table class="cmp">
        <tr><td>Cost per active Copilot user (MTD)</td><td>${usd(perActive)}</td></tr>
        <tr><td>Copilot list price</td><td>$19</td></tr>
        <tr><td>GHEC active licenses</td><td>${b.active_licenses ?? '—'}</td></tr>
        <tr><td>Reap candidates (idle ≥30d)</td><td>${d.s.candidates ?? 0}</td></tr>
      </table><div class="muted2">Effective cost below list = mid-cycle proration. Low utilization = paying for idle seats.</div></div>
      <div class="card"><h3>👤 Identity & licenses</h3><div class="stats">
        <div class="stat"><b>${b.member_count ?? '—'}</b><span>ent. members</span></div>
        <div class="stat"><b class="ok">${b.active_licenses ?? '—'}</b><span>consuming license</span></div>
        <div class="stat"><b>${b.scim_total ?? '—'}</b><span>SCIM provisioned</span></div>
        <div class="stat"><b>${b.inactive_est ?? '—'}</b><span>provisioned, no license</span></div>
      </div>${spark(d.bh.map(x => x.active_licenses ?? 0), '#3fb950')}
      <div class="muted2">Members and license-consumers are the billable population. Suspended lab accounts that were deprovisioned from Entra aren't SCIM-listed and consume no license — they don't appear here and cost nothing.</div></div>
    </div>`;
    const seg = b.user_segments;
    if (seg) {
      const cd = seg.cancel_date || 'cycle end';
      const defs = [
        { k: 'gh_only', label: 'GitHub only', cost: 21 },
        { k: 'gh_cop', label: 'GitHub + Copilot', cost: 40 },
        { k: 'gh_ghas', label: 'GitHub + GHAS', cost: 70 },
        { k: 'gh_ghas_cop', label: 'GitHub + GHAS + Copilot', cost: 89 },
        { k: 'cop_no_ghec_pending', label: `Removed from enterprise — cancels ${cd}`, cost: 19, winding: true },
        { k: 'cop_no_ghec_active', label: 'Removed but NOT scheduled to cancel — still billing', cost: 19, warn: true },
        { k: 'ghas_no_ghec', label: 'GHAS committer — not a member', cost: 49, warn: true },
      ];
      let totalEst = 0;
      const rows = defs.map(dd => { const n = seg[dd.k] || 0; const est = n * dd.cost; totalEst += est; return { ...dd, n, est }; });
      h += `<h3 style="margin-top:18px">🧩 Product entitlement & per-user cost</h3>
        <table class="cmp"><tr><th>Segment</th><th>Users</th><th>$/user-mo (list)</th><th>Est. monthly</th></tr>
        ${rows.map(r => { const bg = r.warn && r.n > 0 ? ' style="background:rgba(248,81,73,0.10)"' : r.winding && r.n > 0 ? ' style="background:rgba(139,148,158,0.08)"' : ''; const tag = r.warn && r.n > 0 ? ' <span class="neg">⚠ still billing</span>' : r.winding && r.n > 0 ? ' <span class="muted2">↓ scheduled</span>' : ''; return `<tr${bg}><td>${r.label}${tag}</td><td>${r.n}</td><td>$${r.cost}</td><td>${usd(r.est)}</td></tr>`; }).join('')}
        <tr class="delta"><td>Total (list-price basis)</td><td>${seg.universe}</td><td></td><td>${usd(totalEst)}</td></tr>
        </table>
        <div class="muted2">Universe = ${seg.universe} distinct users across all paid products. GHEC ${seg.ghec_total} · Copilot ${seg.copilot_total} · GHAS committers ${seg.ghas_total}. List prices ($21 GHEC / $19 Copilot / $49 GHAS committer); actuals are prorated.</div>`;
      const active = seg.cop_no_ghec_active || 0, pending = seg.cop_no_ghec_pending || 0;
      if (active > 0) {
        h += `<div class="extbox"><b class="alert">⚠ ${active} Copilot seats on removed users are NOT scheduled to cancel</b><div class="muted2">These users are no longer enterprise members, but their Copilot seats have no pending cancellation — so they will keep billing (~${usd(active * 19)}/mo) until removed manually. This is the actionable leak; the seat reaper targets exactly these.</div></div>`;
      } else if (pending > 0) {
        h += `<div class="extbox" style="border-color:var(--green);background:rgba(63,185,80,0.08)"><b class="ok">✓ All ${pending} non-member Copilot seats are scheduled to cancel on ${cd}</b><div class="muted2">These removed lab users' seats (~${usd(pending * 19)}/mo) will drop automatically at the cycle date — no action needed. Verify Copilot cost falls by roughly that much on the next invoice.</div></div>`;
      }
    }
    if (d.smd) h += `<div class="card" style="margin-top:16px"><div class="md">${mdToHtml(d.smd)}</div></div>`;
    return h;
  }

  function pools(d) {
    const b = d.b, e = efficiency(d);
    const cc = b.cost_centers || [];
    let h = `<div class="krow">
      <div class="kpi"><div class="v">${usd(e.poolCommitted)}</div><div class="l">total committed</div></div>
      <div class="kpi"><div class="v">${usd(e.poolUsed)}</div><div class="l">used</div></div>
      <div class="kpi"><div class="v ${e.poolUtil < 20 ? 'warn' : 'pos'}">${e.poolUtil}%</div><div class="l">utilization</div></div>
      <div class="kpi"><div class="v warn">${usd(savings(d).expiringUnused)}</div><div class="l">expiring ≤30d, unused</div></div>
    </div>`;
    h += `<table class="cmp"><tr><th>Cost center</th><th>Pool</th><th>Used</th><th></th><th>Remaining</th><th>Expires</th><th>Azure sub</th></tr>`;
    cc.forEach(c => {
      const near = c.days_left != null && c.days_left <= 14;
      const idle = c.pct < 10 && c.pool >= 10000;
      const barcol = c.pct >= 80 ? 'var(--red)' : c.pct >= 40 ? 'var(--yellow)' : 'var(--green)';
      h += `<tr><td>${esc(c.name.replace(/^labcluster-/, ''))}${idle ? ' <span class="alert">idle</span>' : ''}</td>
        <td>${usd(c.pool)}</td><td>${usd(c.cumulative)}</td>
        <td style="min-width:90px"><div class="matchbar"><div class="matchfill" style="width:${Math.min(c.pct, 100)}%;background:${barcol}"></div></div>${c.pct}%</td>
        <td>${usd(c.remaining)}</td><td class="${near ? 'alert' : ''}">${c.days_left == null ? '—' : c.days_left + 'd'}</td>
        <td><small>${c.azure_sub ? esc(c.azure_sub.slice(0, 8)) + '…' : '—'}</small></td></tr>`;
    });
    h += `</table>`;
    h += `<h3 style="margin-top:16px">Allocation — what each pool covers</h3><div class="grid">`;
    cc.forEach(c => {
      h += `<div class="card"><h3>${esc(c.name.replace(/^labcluster-/, ''))}</h3>
        <div class="muted2">Pool ${usd(c.pool)} · ${c.pct}% used · ${c.days_left == null ? 'no expiry' : c.days_left + 'd left'}${c.azure_sub ? ' · sub ' + esc(c.azure_sub.slice(0, 8)) + '…' : ''}</div>
        <ul style="padding-left:18px;margin:4px 0">${(c.resources || []).length ? c.resources.map(r => `<li>${esc(r)}</li>`).join('') : '<li class="muted2">no resources attached</li>'}</ul></div>`;
    });
    h += `</div><div class="muted2" style="margin-top:8px">Attaching an org/team/user to a pool routes its GHEC + Copilot + GHAS cost to that prepaid credit instead of the pay-as-you-go sub. Idle pools near expiry are wasted prepaid credit.</div>`;
    return h;
  }

  function orgs(d) {
    const b = d.b;
    let h = `<div class="krow">
      <div class="kpi"><div class="v">${d.o.orgs ?? '—'}</div><div class="l">orgs in enterprise</div></div>
      <div class="kpi"><div class="v">${d.o.kept ?? 0}</div><div class="l">candidates in grace</div></div>
      <div class="kpi"><div class="v ${(d.o.deleted ?? 0) > 0 ? 'alert' : 'ok'}">${d.o.deleted ?? 0}</div><div class="l">deleted / would</div></div>
      <div class="kpi"><div class="v">${d.o.dry_run === 'true' ? 'DRY-RUN' : 'ARMED'}</div><div class="l">reaper mode</div></div>
    </div>`;
    h += `<div class="grid">`;
    h += `<div class="card"><h3>⚙️ Actions consumption by org (MTD)</h3><table class="cmp"><tr><th>Org</th><th>Minutes</th><th>Gross</th></tr>${(b.actions_by_org || []).map(a => `<tr><td>${esc(a.org)}</td><td>${num(a.minutes)}</td><td>${usd(a.gross)}</td></tr>`).join('')}</table></div>`;
    const tokCls = (b.token_status && b.token_status.includes('no-expiration')) ? 'warn' : (b.token_status && b.token_status.includes('expires in') && parseInt(b.token_status.match(/\d+/)) <= 14 ? 'neg' : 'ok');
    h += `<div class="card"><h3>🔑 Automation token</h3><table class="cmp">
      <tr><td>Status</td><td class="${tokCls}">${esc(b.token_status || 'unknown')}</td></tr>
      </table><div class="muted2">${b.token_status && b.token_status.includes('no-expiration') ? 'Token never expires — convenient but a standing risk. Consider a rotation schedule.' : 'All monitors authenticate with this token; renew before expiry to avoid silent failure.'}</div></div>`;
    if (d.omd) h += `<div class="card"><div class="md">${mdToHtml(d.omd)}</div></div>`;
    h += `</div>`;
    return h;
  }

  async function users(d) {
    const [data, hist] = await Promise.all([fetchJson('data/users.json'), fetchJson('data/users-history.json')]);
    const base = (data && data.users) || [];
    const H = (hist && hist.users) || {};
    const AL = (hist && hist.aliases) || {};   // hash-login -> canonical (odl-user) from user.rename
    state.usersHistGen = hist && hist.generated;
    const canon = login => AL[login] || login;
    // 1) Collapse renamed duplicates: group current-entitlement rows by canonical identity.
    const byCanon = {};
    base.forEach(u => {
      const c = canon(u.login);
      const g = byCanon[c] || (byCanon[c] = { login: c, ghec: false, copilot: false, ghas: false, cop_created: null, cop_last: null, cop_cancel: null, akaSeats: [] });
      g.ghec = g.ghec || u.ghec; g.copilot = g.copilot || u.copilot; g.ghas = g.ghas || u.ghas;
      g.cop_created = g.cop_created || u.cop_created; g.cop_last = u.cop_last || g.cop_last; g.cop_cancel = g.cop_cancel || u.cop_cancel;
      if (u.login !== c) g.akaSeats.push(u.login);
    });
    // 2) Merge audit-log history (authoritative added/removed/member_days + verified GHEC billing).
    Object.values(byCanon).forEach(g => {
      const h = H[g.login] || {};
      g.added = h.added || null; g.removed = h.removed || null; g.member_days = h.member_days;
      g.ghec_billed = h.ghec_billed_eom != null ? h.ghec_billed_eom : (g.ghec ? 21 : 0);  // GHEC add->month-end
      g.copilot_cost = g.copilot ? 19 : 0;
      g.ghas_cost = g.ghas ? 49 : 0;
      g.total_month = g.ghec_billed + g.copilot_cost + g.ghas_cost;
      g.aka = (h.aka || []).concat(g.akaSeats).filter((v, i, a) => a.indexOf(v) === i).slice(0, 4);
      // active GHEC member now => the stale mid-month remove was a re-add; don't show "left"
      if (g.ghec) g.removed = null;
    });
    // 3) Add history-only humans (members this month, no current entitlement seat).
    Object.keys(H).forEach(login => {
      if (!byCanon[login]) {
        const h = H[login];
        byCanon[login] = { login, ghec: true, copilot: false, ghas: false, cop_created: null, cop_last: null, cop_cancel: null, aka: (h.aka || []).slice(0, 4), added: h.added, removed: h.removed, member_days: h.member_days, ghec_billed: h.ghec_billed_eom != null ? h.ghec_billed_eom : 0, copilot_cost: 0, ghas_cost: 0, total_month: h.ghec_billed_eom || 0, removed_only: true };
      }
    });
    state.users = Object.values(byCanon).sort((a, b2) => b2.total_month - a.total_month);
    state.usersGen = data && data.generated;
    state.userSearch = '';
    if (!state.users.length) return '<p class="alert">No per-user data yet — publishes with the daily / 3-day runs.</p>';
    setTimeout(renderUsersTable, 0);
    return `<h3>Per-user cost (identity-deduped, verified billing model)</h3>
      <div class="muted2">${state.users.length} distinct people this month, after collapsing deprovisioning renames (a lab user's <code>odl-user-*</code> and its later hash login are one person). GHEC bills each seat <b>from its add date through month-end</b> (removal gives no in-month credit — verified in the June audit); only the add date is prorated. Copilot bills the full seat to cycle-end. Entitlement as of ${state.usersGen || '—'}; membership history as of ${state.usersHistGen || '—'}.</div>
      <div class="muted2" style="margin-bottom:8px"><b>Columns:</b> GHEC (mo) = billed for this month at month-end (add-date prorated); Copilot/GHAS = full seat rate; Total = sum. "aka" shows the user's renamed logins now merged into one row.</div>
      <div class="refreshbar" style="margin-top:8px">
        <input id="userSearch" placeholder="filter by login…" oninput="DASH.userSearchInput(this.value)" style="background:var(--bg);border:1px solid var(--border);color:var(--fg);border-radius:6px;padding:6px 10px;font-size:13px">
      </div>
      <div id="usersTable">loading…</div>`;
  }
  function renderUsersTable() {
    const el = document.getElementById('usersTable'); if (!el) return;
    const now = new Date(), cutoff30 = now.getTime() - 30 * 864e5;
    const q = (state.userSearch || '').toLowerCase();
    let list = state.users;
    if (q) list = list.filter(u => u.login.toLowerCase().includes(q) || (u.aka || []).some(a => a.toLowerCase().includes(q)));
    const totGhec = list.reduce((a, u) => a + (u.ghec_billed || 0), 0);
    const totCop = list.reduce((a, u) => a + (u.copilot_cost || 0), 0);
    const totAll = list.reduce((a, u) => a + (u.total_month || 0), 0);
    const cap = state.userShowAll ? list.length : 300;
    const shown = list.slice(0, cap);
    const badge = u => [u.ghec ? '<span class="bdg gh">GHEC</span>' : '', u.copilot ? '<span class="bdg cop">Copilot</span>' : '', u.ghas ? '<span class="bdg ghas">GHAS</span>' : ''].join('');
    const status = u => {
      const bits = [];
      if (u.removed) bits.push(`<span class="warn">left ${u.removed}</span>`);
      if (u.cop_cancel) bits.push(`<span class="muted2">seat→${u.cop_cancel}</span>`);
      if (bits.length) return bits.join(' ');
      if (u.copilot && u.cop_last) return (new Date(u.cop_last).getTime() >= cutoff30) ? '<span class="ok">active</span>' : '<span class="muted2">idle</span>';
      if (u.copilot && !u.cop_last) return '<span class="muted2">never used</span>';
      return '<span class="muted2">member</span>';
    };
    const addedCell = u => u.added ? esc(u.added) : (u.cop_created ? esc(u.cop_created.slice(0, 10)) + ' <span class="muted2">(seat)</span>' : (u.ghec ? '<span class="muted2">before month</span>' : '—'));
    el.innerHTML = `<div class="muted2" style="margin:8px 0">Showing ${shown.length} of ${list.length}${q ? ' matching' : ''} — month total ${usd(totAll)} (GHEC ${usd(totGhec)} + Copilot ${usd(totCop)}); billed to month-end.</div>
      <table class="cmp"><tr><th>User (canonical login)</th><th>Products</th><th>Added</th><th>Removed</th><th>Member days</th><th>GHEC (mo)</th><th>Copilot (mo)</th><th>Total (mo)</th><th>Status</th></tr>
      ${shown.map(u => `<tr><td>${esc(u.login)}${(u.aka && u.aka.length) ? ` <span class="muted2" title="${esc(u.aka.join(', '))}">+${u.aka.length} aka</span>` : ''}</td><td>${badge(u)}</td><td>${addedCell(u)}</td><td>${u.removed ? '<span class="warn">' + esc(u.removed) + '</span>' : '—'}</td><td>${u.member_days != null ? u.member_days : '—'}</td><td>${usd(u.ghec_billed)}</td><td>${u.copilot_cost ? usd(u.copilot_cost) : '—'}</td><td><b>${usd(u.total_month)}</b></td><td>${status(u)}</td></tr>`).join('')}
      </table>
      ${list.length > 300 ? `<div class="muted2" style="margin-top:8px"><button class="link" onclick="DASH.userToggleAll()">${state.userShowAll ? 'Show top 300 only' : 'Show all ' + list.length + ' →'}</button> · or export CSV for the full list</div>` : ''}`;
  }
  function userSearchInput(v) { state.userSearch = v; renderUsersTable(); }
  function userToggleAll() { state.userShowAll = !state.userShowAll; renderUsersTable(); }

  const PAGES = { overview, cost, seats, pools, orgs, users };

  // ---------- nav + shell ----------
  function stamp(d) {
    const t = (d.bh && d.bh.length) ? d.bh[d.bh.length - 1].date : '—';
    const el = document.getElementById('stamp'); if (el) el.textContent = 'last data: ' + t;
  }
  function renderNav(active) {
    const nav = NAV.map(n => `<a href="${n.file}" class="${n.id === active ? 'active' : ''}">${n.label}</a>`).join('');
    document.getElementById('nav').innerHTML = `
      <div class="topbar">
        <div class="row1"><h1>CloudLabs GitHub Ops</h1><span class="sub">Enterprise: cloudlabs-organizations · <span id="stamp"></span></span></div>
        <div id="freshness"></div>
        <nav>${nav}</nav>
        <div class="refreshbar">
          <button id="refreshBtn" onclick="DASH.refreshAll()">🔄 Refresh data now</button>
          <span class="muted2">Runs all monitors (read-only / dry-run) and reloads when done.</span>
          <button class="link" onclick="DASH.exportCSV()">⬇ export CSV</button>
          <button class="link" onclick="DASH.setToken()">set token</button>
          <div id="progress" class="progress"></div>
        </div>
      </div>`;
  }
  function freshnessBanner(d) {
    const el = document.getElementById('freshness'); if (!el) return;
    const dt = d.b && d.b.date ? new Date(d.b.date) : null;
    if (!dt) { el.innerHTML = ''; return; }
    const ageH = (Date.now() - dt.getTime()) / 3.6e6;
    const stale = ageH > 36;
    const age = ageH < 1 ? '<1h' : Math.round(ageH) + 'h';
    el.innerHTML = `<div class="fresh ${stale ? 'staleN' : 'freshN'}">${stale ? '⚠ STALE' : '● live'} — data ${age} old (${dt.toLocaleString()})${stale ? ' · a monitor may have stopped' : ''}</div>`;
  }
  async function page(name) {
    renderNav(name);
    const d = await loadData();
    freshnessBanner(d);
    document.getElementById('content').innerHTML = await PAGES[name](d);
    stamp(d);
    window.__page = name;
  }

  // ---------- refresh (trigger + poll) ----------
  function getToken() { return localStorage.getItem('gh_pat') || ''; }
  function setToken() {
    const t = prompt('Paste a GitHub token with Actions read/write on ' + REPO + '.\nStored only in this browser (localStorage); sent only to api.github.com.');
    if (t !== null) { localStorage.setItem('gh_pat', t.trim()); alert('Token saved in this browser.'); }
  }
  async function gh(path, method, body) {
    return fetch('https://api.github.com/' + path, {
      method: method || 'GET',
      headers: { 'Authorization': 'Bearer ' + getToken(), 'Accept': 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' },
      body: body ? JSON.stringify(body) : undefined,
    });
  }
  function setChips(states) {
    document.getElementById('progress').innerHTML = states.map(s =>
      `<span class="pchip ${s.cls}">${s.cls === 'run' ? '<span class="spin">↻</span> ' : s.cls === 'done' ? '✓ ' : s.cls === 'fail' ? '✕ ' : ''}${s.label}: ${s.text}</span>`).join('');
  }
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  async function refreshAll() {
    const btn = document.getElementById('refreshBtn');
    if (!getToken()) { setToken(); if (!getToken()) return; }
    btn.disabled = true;
    const startISO = new Date(Date.now() - 15000).toISOString();
    try {
      setChips(WFS.map(w => ({ label: w.label, cls: 'run', text: 'starting…' })));
      for (const w of WFS) {
        const r = await gh(`repos/${REPO}/actions/workflows/${w.file}/dispatches`, 'POST', { ref: 'main', inputs: w.inputs });
        if (r.status === 401) { localStorage.removeItem('gh_pat'); throw new Error('Token rejected (401). Click “set token”.'); }
        if (r.status !== 204) throw new Error(`Dispatch ${w.file}: HTTP ${r.status}`);
      }
      const done = {};
      for (let tick = 0; tick < 120; tick++) {
        await sleep(5000);
        const states = [];
        for (const w of WFS) {
          if (done[w.file]) { states.push(done[w.file]); continue; }
          const r = await gh(`repos/${REPO}/actions/workflows/${w.file}/runs?event=workflow_dispatch&per_page=3`);
          const runs = r.ok ? (await r.json()).workflow_runs || [] : [];
          const run = runs.find(x => x.created_at >= startISO) || runs[0];
          if (!run) { states.push({ label: w.label, cls: 'run', text: 'queued' }); continue; }
          if (run.status === 'completed') { const st = { label: w.label, cls: run.conclusion === 'success' ? 'done' : 'fail', text: run.conclusion }; done[w.file] = st; states.push(st); }
          else states.push({ label: w.label, cls: 'run', text: run.status });
        }
        if (Object.keys(done).length === WFS.length) {
          const pr = await gh(`repos/${REPO}/actions/workflows/publish-public.yml/runs?per_page=3`);
          const pruns = pr.ok ? (await pr.json()).workflow_runs || [] : [];
          const prun = pruns.find(x => x.created_at >= startISO);
          if (prun && prun.status === 'completed') { states.push({ label: 'publish', cls: prun.conclusion === 'success' ? 'done' : 'fail', text: prun.conclusion }); setChips(states); break; }
          states.push({ label: 'publish', cls: 'run', text: prun ? prun.status : 'pending' });
        }
        setChips(states);
      }
      setChips([{ label: 'reloading', cls: 'run', text: '…' }]);
      await sleep(4000);
      await loadData(true);
      await page(window.__page || 'overview');
      document.getElementById('progress').innerHTML = '<span class="pchip done">✓ updated ' + new Date().toLocaleTimeString() + '</span>';
    } catch (e) {
      document.getElementById('progress').innerHTML = '<span class="pchip fail">✕ ' + esc(e.message) + '</span>';
    } finally { btn.disabled = false; }
  }

  async function exportCSV() {
    const d = await loadData();
    const b = d.b;
    const rows = [];
    const push = (section, k, v) => rows.push([section, k, v]);
    push('summary', 'as_of', b.date || '');
    push('summary', 'github_total_mtd', b.github_total); push('summary', 'our_sub_mtd', b.mtd); push('summary', 'cost_centers_mtd', b.cc_total_mtd);
    push('summary', 'yesterday', b.yday); push('summary', 'proj_linear', b.proj_month_end); push('summary', 'proj_trailing', b.proj_trailing);
    push('summary', 'members', b.member_count); push('summary', 'active_licenses', b.active_licenses); push('summary', 'scim_provisioned', b.scim_total);
    push('summary', 'copilot_seats', b.copilot); push('summary', 'copilot_active', d.s.active);
    (b.by_product || []).forEach(p => push('by_product', p.product, p.net));
    (b.by_org || []).forEach(o => push('by_org', o.org, o.net));
    (b.monthly || []).forEach(m => push('monthly', m.month, m.net));
    (b.budget_variance || []).forEach(x => rows.push(['budget', x.product, x.actual, x.projected, x.budget]));
    (b.cost_centers || []).forEach(c => rows.push(['cost_center', c.name, c.pool, c.cumulative, c.remaining, c.pct + '%', c.days_left, (c.resources || []).join('; ')]));
    (b.azure_accounts || []).forEach(a => rows.push(['azure_account', a.account, a.amount, a.ours ? 'ours' : 'external']));
    (b.alerts || []).forEach(a => push('alert', '', a));
    // Per-user rows: use the identity-deduped + verified-billing model already built for the Users page.
    if (window.__page === 'users' && state.users && state.users.length) {
      state.users.forEach(u => rows.push(['user', u.login, u.total_month,
        [u.ghec ? 'GHEC' : '', u.copilot ? 'Copilot' : '', u.ghas ? 'GHAS' : ''].filter(Boolean).join('+'),
        u.added || '', u.removed || '', u.member_days != null ? u.member_days : '', u.ghec_billed, u.copilot_cost]));
    } else {
      const [ud, uh] = await Promise.all([fetchJson('data/users.json'), fetchJson('data/users-history.json')]);
      const H = (uh && uh.users) || {}, AL = (uh && uh.aliases) || {}, byC = {};
      (ud && ud.users || []).forEach(u => { const c = AL[u.login] || u.login; const g = byC[c] || (byC[c] = { c, ghec: false, copilot: false, ghas: false }); g.ghec |= u.ghec; g.copilot |= u.copilot; g.ghas |= u.ghas; });
      Object.keys(H).forEach(c => { byC[c] = byC[c] || { c, ghec: true, copilot: false, ghas: false }; });
      Object.values(byC).forEach(g => { const h = H[g.c] || {}; const ghec = h.ghec_billed_eom != null ? h.ghec_billed_eom : (g.ghec ? 21 : 0); const cop = g.copilot ? 19 : 0; const ghas = g.ghas ? 49 : 0;
        rows.push(['user', g.c, ghec + cop + ghas, [g.ghec ? 'GHEC' : '', g.copilot ? 'Copilot' : '', g.ghas ? 'GHAS' : ''].filter(Boolean).join('+'), h.added || '', h.removed || '', h.member_days != null ? h.member_days : '', ghec, cop]); });
    }
    const csv = rows.map(r => r.map(c => { const s = String(c ?? ''); return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; }).join(',')).join('\n');
    const blob = new Blob(['section,key,value,extra1,extra2,extra3,extra4,extra5\n' + csv], { type: 'text/csv' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'cloudlabs-github-ops-' + (b.date ? b.date.slice(0, 10) : 'export') + '.csv';
    a.click(); URL.revokeObjectURL(a.href);
  }

  return { page, refreshAll, setToken, exportCSV, userSearchInput, userToggleAll };
})();
