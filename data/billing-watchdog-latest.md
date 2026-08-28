## Billing watchdog — 2026-08-28

**MTD net: $14140.98** (gross $14156.48) — yesterday: $1242.32 — GHEC seats: 272 — Copilot seats: 1361

```
ghec: $8262.48
copilot: $4556.32
ghas: $1308.77
code_quality: $10.32
codespaces: $3.08
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$22896.99** |
| → Our Azure sub (enterprise default) | $14140.98 |
| → Cost centers (prepaid credit pools) | $8756.01 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|
| labcluster-POC10-5k-13sep26 | $5000 | $8756.01 | 175% | $-3756 | 15d |
| labcluster-POC11-83k-expiry13Sep26 | $83000 | $0.00 | 0% | $83000 | 15d |

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| CL-Labs-04 | 1952.2 | $11.69 |
| Cloudlabs-Enterprises | 426 | $2.53 |
| ghas-bootcamp-2026-08-05-2343091 | 76 | $0.46 |
| ghas-bootcamp-2026-08-27-2366237 | 70 | $0.42 |
| Cloudlabs-GH-Copilot | 49 | $0.29 |
| ghas-bootcamp-2026-07-22-2323169 | 15 | $0.09 |

### 👤 Identity & licenses

SCIM-provisioned identities: **498** — active licenses: **272** — inactive/suspended (est.): **226**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $12772.47** — yesterday: $0.34 — GitHub charges: $12763.31

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $14140.98 |
| Azure sub charge — our account (customer-13304750) | $12715.5 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $1425.48 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$47.81 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $12715.5
customer-6174522 (EXTERNAL): $31.87
customer-13061039 (EXTERNAL): $15.94
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- Copilot seats grew by 213 since last run (1148 -> 1361) (~$4047/mo run-rate)
- External GitHub enterprise(s) charging this Azure sub $47.81 MTD (not customer-13304750): customer-6174522 $31.87, customer-13061039 $15.94, customer-12238363 $0

