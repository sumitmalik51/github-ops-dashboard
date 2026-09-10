## Billing watchdog — 2026-09-10

**MTD net: $2153.23** (gross $2153.3) — yesterday: $444.3 — GHEC seats: 143 — Copilot seats: 446

```
ghec: $1082.9
copilot: $939.23
ghas: $125.77
code_quality: $5.33
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$3301.83** |
| → Our Azure sub (enterprise default) | $2153.23 |
| → Cost centers (prepaid credit pools) | $1148.60 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|
| labcluster-POC11-83k-expiry13Sep26 | $83000 | $2376.38 | 3% | $80624 | 2d |

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| ghas-bootcamp-2026-08-30-2369284 | 10 | $0.06 |
| First-Org-2376342 | 1 | $0.01 |

### 👤 Identity & licenses

SCIM-provisioned identities: **250** — active licenses: **143** — inactive/suspended (est.): **107**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $1691.86** — yesterday: $0.32 — GitHub charges: $1688.77

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $2153.23 |
| Azure sub charge — our account (customer-13304750) | $1673.57 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $479.66 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$15.2 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $1673.57
customer-6174522 (EXTERNAL): $10.13
customer-13061039 (EXTERNAL): $5.07
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- Anomaly: ghas spent $50.63 yesterday vs $10.5/day 7-day average (>2x)
- GHAS billing active outside bootcamp orgs: First-Org-2376342/First-Repo-2376342
- Cost center 'labcluster-POC11-83k-expiry13Sep26' expires in 2d with $80624 of $83000 still unused (3% consumed)
- External GitHub enterprise(s) charging this Azure sub $15.2 MTD (not customer-13304750): customer-6174522 $10.13, customer-13061039 $5.07, customer-12238363 $0

