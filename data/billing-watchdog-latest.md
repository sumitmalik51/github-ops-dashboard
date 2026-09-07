## Billing watchdog — 2026-09-07

**MTD net: $1177.2** (gross $1177.26) — yesterday: $257.7 — GHEC seats: 43 — Copilot seats: 221

```
ghec: $603.4
copilot: $523.77
ghas: $47.37
code_quality: $2.67
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$1816.39** |
| → Our Azure sub (enterprise default) | $1177.2 |
| → Cost centers (prepaid credit pools) | $639.19 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|
| labcluster-POC11-83k-expiry13Sep26 | $83000 | $1866.97 | 2% | $81133 | 5d |

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| ghas-bootcamp-2026-08-30-2369284 | 10 | $0.06 |

### 👤 Identity & licenses

SCIM-provisioned identities: **150** — active licenses: **43** — inactive/suspended (est.): **107**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $n/a** — yesterday: $n/a — GitHub charges: $893.63

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $1177.2 |
| Azure sub charge — our account (customer-13304750) | $884.13 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $293.07 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$9.5 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $884.13
customer-6174522 (EXTERNAL): $6.33
customer-13061039 (EXTERNAL): $3.17
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- Anomaly: copilot spent $114 yesterday vs $56.19/day 7-day average (>2x)
- Anomaly: ghec spent $131.6 yesterday vs $64.7/day 7-day average (>2x)
- Cost center 'labcluster-POC11-83k-expiry13Sep26' expires in 5d with $81133 of $83000 still unused (2% consumed)
- External GitHub enterprise(s) charging this Azure sub $9.5 MTD (not customer-13304750): customer-6174522 $6.33, customer-13061039 $3.17, customer-12238363 $0

