## Billing watchdog — 2026-08-14

**MTD net: $3187.47** (gross $3202.54) — yesterday: $306.74 — GHEC seats: 223 — Copilot seats: 575

```
ghec: $2124.39
copilot: $691.97
ghas: $365.13
codespaces: $3.08
code_quality: $2.9
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$5602.09** |
| → Our Azure sub (enterprise default) | $3187.47 |
| → Cost centers (prepaid credit pools) | $2414.62 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|
| labcluster-POC10-5k-13sep26 | $5000 | $2414.62 | 48% | $2585 | 29d |
| labcluster-POC11-83k-expiry13Sep26 | $83000 | $0.00 | 0% | $83000 | 29d |

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| CL-Labs-04 | 1952.2 | $11.69 |
| Cloudlabs-Enterprises | 426 | $2.53 |
| ghas-bootcamp-2026-08-05-2343091 | 76 | $0.46 |
| Cloudlabs-GH-Copilot | 49 | $0.29 |
| ghas-bootcamp-2026-07-22-2323169 | 15 | $0.09 |

### 👤 Identity & licenses

SCIM-provisioned identities: **333** — active licenses: **223** — inactive/suspended (est.): **110**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $2905.85** — yesterday: $0.34 — GitHub charges: $2901.43

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $3187.47 |
| Azure sub charge — our account (customer-13304750) | $2879.37 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $308.10 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$22.06 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $2879.37
customer-6174522 (EXTERNAL): $14.71
customer-13061039 (EXTERNAL): $7.35
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- External GitHub enterprise(s) charging this Azure sub $22.06 MTD (not customer-13304750): customer-6174522 $14.71, customer-13061039 $7.35, customer-12238363 $0

