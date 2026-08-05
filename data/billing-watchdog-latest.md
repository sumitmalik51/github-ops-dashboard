## Billing watchdog — 2026-08-05

**MTD net: $144.77** (gross $155.52) — yesterday: $59.32 — GHEC seats: 175 — Copilot seats: 348

```
copilot: $83.97
ghec: $60.29
codespaces: $0.51
actions: $0
code_quality: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$836.18** |
| → Our Azure sub (enterprise default) | $144.77 |
| → Cost centers (prepaid credit pools) | $691.41 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|
| labcluster-POC09-10k-expiry09aug26 | $10000 | $1445.32 | 14% | $8555 | 3d |
| labcluster-POC10-5k-13sep26 | $5000 | $0.00 | 0% | $5000 | 38d |
| labcluster-POC11-83k-expiry13Sep26 | $83000 | $0.00 | 0% | $83000 | 38d |

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| CL-Labs-04 | 1507.2 | $9.04 |
| Cloudlabs-Enterprises | 251.6 | $1.5 |
| Cloudlabs-GH-Copilot | 25 | $0.15 |
| ghas-bootcamp-2026-07-22-2323169 | 9 | $0.05 |

### 👤 Identity & licenses

SCIM-provisioned identities: **281** — active licenses: **175** — inactive/suspended (est.): **106**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $19.32** — yesterday: $0.34 — GitHub charges: $17.97

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $144.77 |
| Azure sub charge — our account (customer-13304750) | $12.45 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $132.32 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$5.52 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $12.45
customer-6174522 (EXTERNAL): $3.68
customer-13061039 (EXTERNAL): $1.84
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- Anomaly: ghec spent $50.13 yesterday vs $1.35/day 7-day average (>2x)
- Copilot seats grew by 264 since last run (84 -> 348) (~$5016/mo run-rate)
- Cost center 'labcluster-POC09-10k-expiry09aug26' expires in 3d with $8555 of $10000 still unused (14% consumed)
- External GitHub enterprise(s) charging this Azure sub $5.52 MTD (not customer-13304750): customer-6174522 $3.68, customer-13061039 $1.84, customer-12238363 $0

