## Billing watchdog — 2026-09-13

**MTD net: $3865.03** (gross $3865.1) — yesterday: $623.6 — GHEC seats: 161 — Copilot seats: 568

```
ghec: $1890
copilot: $1650.47
ghas: $315.23
code_quality: $9.33
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$5788.26** |
| → Our Azure sub (enterprise default) | $3865.03 |
| → Cost centers (prepaid credit pools) | $1923.23 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|
| labcluster-POC11-83k-expiry13Sep26 | $83000 | $3151.01 | 4% | $79849 | 0d |

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| ghas-bootcamp-2026-08-30-2369284 | 10 | $0.06 |
| First-Org-2376342 | 1 | $0.01 |

### 👤 Identity & licenses

SCIM-provisioned identities: **269** — active licenses: **161** — inactive/suspended (est.): **108**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $n/a** — yesterday: $n/a — GitHub charges: $3226.97

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $3865.03 |
| Azure sub charge — our account (customer-13304750) | $3206.07 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $658.96 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$20.9 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $3206.07
customer-6174522 (EXTERNAL): $13.93
customer-13061039 (EXTERNAL): $6.97
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- Anomaly: ghas spent $68.6 yesterday vs $31.73/day 7-day average (>2x)
- GHAS billing active outside bootcamp orgs: First-Org-2376342/First-Repo-2376342
- GHAS billing active outside bootcamp orgs: CL-Labs-04/odl-user-2382236_clabs
- Cost center 'labcluster-POC11-83k-expiry13Sep26' expires in 0d with $79849 of $83000 still unused (4% consumed)
- External GitHub enterprise(s) charging this Azure sub $20.9 MTD (not customer-13304750): customer-6174522 $13.93, customer-13061039 $6.97, customer-12238363 $0

