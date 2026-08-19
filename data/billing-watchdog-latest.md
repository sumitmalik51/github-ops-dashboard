## Billing watchdog — 2026-08-19

**MTD net: $4787.31** (gross $4802.38) — yesterday: $354.84 — GHEC seats: 193 — Copilot seats: 716

```
ghec: $3498.87
copilot: $694.42
ghas: $586.42
code_quality: $4.52
codespaces: $3.08
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$9490.56** |
| → Our Azure sub (enterprise default) | $4787.31 |
| → Cost centers (prepaid credit pools) | $4703.25 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|
| labcluster-POC10-5k-13sep26 | $5000 | $4703.25 | 94% | $297 | 24d |
| labcluster-POC11-83k-expiry13Sep26 | $83000 | $0.00 | 0% | $83000 | 24d |

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| CL-Labs-04 | 1952.2 | $11.69 |
| Cloudlabs-Enterprises | 426 | $2.53 |
| ghas-bootcamp-2026-08-05-2343091 | 76 | $0.46 |
| Cloudlabs-GH-Copilot | 49 | $0.29 |
| ghas-bootcamp-2026-07-22-2323169 | 15 | $0.09 |

### 👤 Identity & licenses

SCIM-provisioned identities: **305** — active licenses: **193** — inactive/suspended (est.): **112**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $4464.65** — yesterday: $0.31 — GitHub charges: $4458.57

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $4787.31 |
| Azure sub charge — our account (customer-13304750) | $4427.31 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $360.00 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$31.26 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $4427.31
customer-6174522 (EXTERNAL): $20.84
customer-13061039 (EXTERNAL): $10.42
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- External GitHub enterprise(s) charging this Azure sub $31.26 MTD (not customer-13304750): customer-6174522 $20.84, customer-13061039 $10.42, customer-12238363 $0

