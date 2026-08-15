## Billing watchdog — 2026-08-15

**MTD net: $3496.24** (gross $3511.32) — yesterday: $308.77 — GHEC seats: 227 — Copilot seats: 581

```
ghec: $2388.58
copilot: $691.97
ghas: $409.39
code_quality: $3.23
codespaces: $3.08
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$6423.89** |
| → Our Azure sub (enterprise default) | $3496.24 |
| → Cost centers (prepaid credit pools) | $2927.65 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|
| labcluster-POC10-5k-13sep26 | $5000 | $2927.65 | 59% | $2072 | 28d |
| labcluster-POC11-83k-expiry13Sep26 | $83000 | $0.00 | 0% | $83000 | 28d |

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

**Total sub MTD: $3214.75** — yesterday: $0.32 — GitHub charges: $3210.02

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $3496.24 |
| Azure sub charge — our account (customer-13304750) | $3186.11 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $310.13 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$23.91 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $3186.11
customer-6174522 (EXTERNAL): $15.94
customer-13061039 (EXTERNAL): $7.97
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- External GitHub enterprise(s) charging this Azure sub $23.91 MTD (not customer-13304750): customer-6174522 $15.94, customer-13061039 $7.97, customer-12238363 $0

