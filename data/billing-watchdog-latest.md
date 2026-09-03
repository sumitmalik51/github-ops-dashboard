## Billing watchdog — 2026-09-03

**MTD net: $172.87** (gross $172.87) — yesterday: $126.47 — GHEC seats: 49 — Copilot seats: 210

```
ghec: $91.7
copilot: $77.9
ghas: $3.27
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$571.20** |
| → Our Azure sub (enterprise default) | $172.87 |
| → Cost centers (prepaid credit pools) | $398.33 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|
| labcluster-POC11-83k-expiry13Sep26 | $83000 | $1626.11 | 2% | $81374 | 9d |

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| ghas-bootcamp-2026-08-30-2369284 | 0 | $0 |

### 👤 Identity & licenses

SCIM-provisioned identities: **166** — active licenses: **49** — inactive/suspended (est.): **117**

### 🚨 Alerts
- Anomaly: copilot spent $57.63 yesterday vs $0.54/day 7-day average (>2x)
- Anomaly: ghec spent $67.2 yesterday vs $0.8/day 7-day average (>2x)
- GHAS billing active outside bootcamp orgs: CL-Labs-04/odl-user-2369650_clabs
- Cost center 'labcluster-POC11-83k-expiry13Sep26' expires in 9d with $81374 of $83000 still unused (2% consumed)

