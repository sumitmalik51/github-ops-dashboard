## Billing watchdog — 2026-08-17

**MTD net: $4117.86** (gross $4132.93) — yesterday: $310.81 — GHEC seats: 228 — Copilot seats: 582

```
ghec: $2921.03
copilot: $691.97
ghas: $497.9
code_quality: $3.87
codespaces: $3.08
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$8068.29** |
| → Our Azure sub (enterprise default) | $4117.86 |
| → Cost centers (prepaid credit pools) | $3950.43 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|
| labcluster-POC10-5k-13sep26 | $5000 | $3950.43 | 79% | $1050 | 26d |
| labcluster-POC11-83k-expiry13Sep26 | $83000 | $0.00 | 0% | $83000 | 26d |

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| CL-Labs-04 | 1952.2 | $11.69 |
| Cloudlabs-Enterprises | 426 | $2.53 |
| ghas-bootcamp-2026-08-05-2343091 | 76 | $0.46 |
| Cloudlabs-GH-Copilot | 49 | $0.29 |
| ghas-bootcamp-2026-07-22-2323169 | 15 | $0.09 |

### 👤 Identity & licenses

SCIM-provisioned identities: **337** — active licenses: **228** — inactive/suspended (est.): **109**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $3838.71** — yesterday: $0.34 — GitHub charges: $3833.27

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $4117.86 |
| Azure sub charge — our account (customer-13304750) | $3805.69 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $312.17 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$27.58 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $3805.69
customer-6174522 (EXTERNAL): $18.39
customer-13061039 (EXTERNAL): $9.19
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- External GitHub enterprise(s) charging this Azure sub $27.58 MTD (not customer-13304750): customer-6174522 $18.39, customer-13061039 $9.19, customer-12238363 $0

