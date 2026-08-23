## Billing watchdog — 2026-08-23

**MTD net: $8424.11** (gross $8439.19) — yesterday: $1029.03 — GHEC seats: 294 — Copilot seats: 1019

```
ghec: $5321.13
copilot: $2148.23
ghas: $945.23
code_quality: $6.45
codespaces: $3.08
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$14894.43** |
| → Our Azure sub (enterprise default) | $8424.11 |
| → Cost centers (prepaid credit pools) | $6470.32 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|
| labcluster-POC10-5k-13sep26 | $5000 | $6470.32 | 129% | $-1470 | 20d |
| labcluster-POC11-83k-expiry13Sep26 | $83000 | $0.00 | 0% | $83000 | 20d |

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| CL-Labs-04 | 1952.2 | $11.69 |
| Cloudlabs-Enterprises | 426 | $2.53 |
| ghas-bootcamp-2026-08-05-2343091 | 76 | $0.46 |
| Cloudlabs-GH-Copilot | 49 | $0.29 |
| ghas-bootcamp-2026-07-22-2323169 | 15 | $0.09 |

### 👤 Identity & licenses

SCIM-provisioned identities: **403** — active licenses: **294** — inactive/suspended (est.): **109**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $7354.1** — yesterday: $0.34 — GitHub charges: $7346.63

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $8424.11 |
| Azure sub charge — our account (customer-13304750) | $7308.02 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $1116.09 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$38.61 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $7308.02
customer-6174522 (EXTERNAL): $25.74
customer-13061039 (EXTERNAL): $12.87
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- Anomaly: copilot spent $424.13 yesterday vs $147.01/day 7-day average (>2x)
- External GitHub enterprise(s) charging this Azure sub $38.61 MTD (not customer-13304750): customer-6174522 $25.74, customer-13061039 $12.87, customer-12238363 $0

