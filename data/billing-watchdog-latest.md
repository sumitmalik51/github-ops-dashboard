## Billing watchdog — 2026-09-06

**MTD net: $919.5** (gross $919.56) — yesterday: $256.37 — GHEC seats: 44 — Copilot seats: 221

```
ghec: $471.8
copilot: $409.77
ghas: $35.93
code_quality: $2
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$1502.62** |
| → Our Azure sub (enterprise default) | $919.5 |
| → Cost centers (prepaid credit pools) | $583.12 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|
| labcluster-POC11-83k-expiry13Sep26 | $83000 | $1810.90 | 2% | $81189 | 6d |

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| ghas-bootcamp-2026-08-30-2369284 | 10 | $0.06 |

### 👤 Identity & licenses

SCIM-provisioned identities: **151** — active licenses: **44** — inactive/suspended (est.): **107**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $n/a** — yesterday: $n/a — GitHub charges: $635.37

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $919.5 |
| Azure sub charge — our account (customer-13304750) | $627.77 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $291.73 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$7.6 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $627.77
customer-6174522 (EXTERNAL): $5.07
customer-13061039 (EXTERNAL): $2.53
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- Anomaly: copilot spent $113.37 yesterday vs $39.99/day 7-day average (>2x)
- Anomaly: ghec spent $130.9 yesterday vs $46/day 7-day average (>2x)
- Cost center 'labcluster-POC11-83k-expiry13Sep26' expires in 6d with $81189 of $83000 still unused (2% consumed)
- External GitHub enterprise(s) charging this Azure sub $7.6 MTD (not customer-13304750): customer-6174522 $5.07, customer-13061039 $2.53, customer-12238363 $0

