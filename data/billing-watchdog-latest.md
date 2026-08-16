## Billing watchdog — 2026-08-16

**MTD net: $3807.05** (gross $3822.12) — yesterday: $310.81 — GHEC seats: 227 — Copilot seats: 581

```
ghec: $2654.81
copilot: $691.97
ghas: $453.65
code_quality: $3.55
codespaces: $3.08
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$7245.44** |
| → Our Azure sub (enterprise default) | $3807.05 |
| → Cost centers (prepaid credit pools) | $3438.39 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|
| labcluster-POC10-5k-13sep26 | $5000 | $3438.39 | 69% | $1562 | 27d |
| labcluster-POC11-83k-expiry13Sep26 | $83000 | $0.00 | 0% | $83000 | 27d |

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| CL-Labs-04 | 1952.2 | $11.69 |
| Cloudlabs-Enterprises | 426 | $2.53 |
| ghas-bootcamp-2026-08-05-2343091 | 76 | $0.46 |
| Cloudlabs-GH-Copilot | 49 | $0.29 |
| ghas-bootcamp-2026-07-22-2323169 | 15 | $0.09 |

### 👤 Identity & licenses

SCIM-provisioned identities: **336** — active licenses: **227** — inactive/suspended (est.): **109**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $n/a** — yesterday: $n/a — GitHub charges: $3520.63

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $3807.05 |
| Azure sub charge — our account (customer-13304750) | $3494.89 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $312.16 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$25.74 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $3494.89
customer-6174522 (EXTERNAL): $17.16
customer-13061039 (EXTERNAL): $8.58
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- External GitHub enterprise(s) charging this Azure sub $25.74 MTD (not customer-13304750): customer-6174522 $17.16, customer-13061039 $8.58, customer-12238363 $0

