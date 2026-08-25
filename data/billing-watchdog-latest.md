## Billing watchdog — 2026-08-25

**MTD net: $10405.44** (gross $10420.51) — yesterday: $1032.9 — GHEC seats: 294 — Copilot seats: 1049

```
ghec: $6370.45
copilot: $2998.32
ghas: $1025.84
code_quality: $7.74
codespaces: $3.08
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$17670.40** |
| → Our Azure sub (enterprise default) | $10405.44 |
| → Cost centers (prepaid credit pools) | $7264.96 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|
| labcluster-POC10-5k-13sep26 | $5000 | $7264.96 | 145% | $-2265 | 18d |
| labcluster-POC11-83k-expiry13Sep26 | $83000 | $0.00 | 0% | $83000 | 18d |

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| CL-Labs-04 | 1952.2 | $11.69 |
| Cloudlabs-Enterprises | 426 | $2.53 |
| ghas-bootcamp-2026-08-05-2343091 | 76 | $0.46 |
| Cloudlabs-GH-Copilot | 49 | $0.29 |
| ghas-bootcamp-2026-07-22-2323169 | 15 | $0.09 |

### 👤 Identity & licenses

SCIM-provisioned identities: **405** — active licenses: **294** — inactive/suspended (est.): **111**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $9416.52** — yesterday: $0.34 — GitHub charges: $9408.37

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $10405.44 |
| Azure sub charge — our account (customer-13304750) | $9366.08 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $1039.36 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$42.29 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $9366.08
customer-6174522 (EXTERNAL): $28.19
customer-13061039 (EXTERNAL): $14.1
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- External GitHub enterprise(s) charging this Azure sub $42.29 MTD (not customer-13304750): customer-6174522 $28.19, customer-13061039 $14.1, customer-12238363 $0

