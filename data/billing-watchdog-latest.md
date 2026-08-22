## Billing watchdog — 2026-08-22

**MTD net: $7314.47** (gross $7329.54) — yesterday: $1024.48 — GHEC seats: 294 — Copilot seats: 1019

```
ghec: $4797.48
copilot: $1724.1
ghas: $784
code_quality: $5.81
codespaces: $3.08
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$13410.69** |
| → Our Azure sub (enterprise default) | $7314.47 |
| → Cost centers (prepaid credit pools) | $6096.22 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|
| labcluster-POC10-5k-13sep26 | $5000 | $6096.22 | 122% | $-1096 | 21d |
| labcluster-POC11-83k-expiry13Sep26 | $83000 | $0.00 | 0% | $83000 | 21d |

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| CL-Labs-04 | 1952.2 | $11.69 |
| Cloudlabs-Enterprises | 426 | $2.53 |
| ghas-bootcamp-2026-08-05-2343091 | 76 | $0.46 |
| Cloudlabs-GH-Copilot | 49 | $0.29 |
| ghas-bootcamp-2026-07-22-2323169 | 15 | $0.09 |

### 👤 Identity & licenses

SCIM-provisioned identities: **404** — active licenses: **294** — inactive/suspended (est.): **110**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $6327.41** — yesterday: $0.31 — GitHub charges: $6320.31

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $7314.47 |
| Azure sub charge — our account (customer-13304750) | $6283.53 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $1030.94 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$36.78 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $6283.53
customer-6174522 (EXTERNAL): $24.52
customer-13061039 (EXTERNAL): $12.26
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- Anomaly: copilot spent $422.29 yesterday vs $86.68/day 7-day average (>2x)
- External GitHub enterprise(s) charging this Azure sub $36.78 MTD (not customer-13304750): customer-6174522 $24.52, customer-13061039 $12.26, customer-12238363 $0

