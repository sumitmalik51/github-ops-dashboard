## Billing watchdog — 2026-09-04

**MTD net: $410.83** (gross $410.88) — yesterday: $237.97 — GHEC seats: 47 — Copilot seats: 216

```
ghec: $212.8
copilot: $184.3
ghas: $13.07
code_quality: $0.67
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$877.60** |
| → Our Azure sub (enterprise default) | $410.83 |
| → Cost centers (prepaid credit pools) | $466.77 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|
| labcluster-POC11-83k-expiry13Sep26 | $83000 | $1694.55 | 2% | $81305 | 8d |

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| ghas-bootcamp-2026-08-30-2369284 | 7 | $0.04 |

### 👤 Identity & licenses

SCIM-provisioned identities: **154** — active licenses: **47** — inactive/suspended (est.): **107**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $n/a** — yesterday: $n/a — GitHub charges: $141.3

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $410.83 |
| Azure sub charge — our account (customer-13304750) | $137.5 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $273.33 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$3.8 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $137.5
customer-6174522 (EXTERNAL): $2.53
customer-13061039 (EXTERNAL): $1.27
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- Anomaly: copilot spent $106.4 yesterday vs $8.78/day 7-day average (>2x)
- Anomaly: ghec spent $121.1 yesterday vs $10.4/day 7-day average (>2x)
- Cost center 'labcluster-POC11-83k-expiry13Sep26' expires in 8d with $81305 of $83000 still unused (2% consumed)
- External GitHub enterprise(s) charging this Azure sub $3.8 MTD (not customer-13304750): customer-6174522 $2.53, customer-13061039 $1.27, customer-12238363 $0

