## Billing watchdog — 2026-07-23

**MTD net: $10143.7** (gross $10829.6) — yesterday: $928.87 — GHEC seats: 254 — Copilot seats: 886

```
ghec: $6006.68
copilot: $3088.42
ghas: $1047.97
codespaces: $0.63
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$12658.60** |
| → Our Azure sub (enterprise default) | $10143.7 |
| → Cost centers (prepaid credit pools) | $2514.90 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|
| labcluster-AzGHCredits01-3k-expiry23July26 | $3000 | $2514.90 | 84% | $485 | 0d |
| labcluster-AzGHCredits02-4k-expiry23July26 | $4000 | $0.00 | 0% | $4000 | 0d |
| labcluster-AzGHCredits05-5k-expiry23July26 | $5000 | $0.00 | 0% | $5000 | 0d |
| labcluster-POC09-10k-expiry09aug26 | $10000 | $0.00 | 0% | $10000 | 16d |
| labcluster-POC10-5k-13sep26 | $5000 | $0.00 | 0% | $5000 | 51d |
| labcluster-POC11-83k-expiry13Sep26 | $83000 | $0.00 | 0% | $83000 | 51d |

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| Cloudlabs-Enterprises | 7062.1 | $40.01 |
| ghas-bootcamp-2026-07-22-2323169 | 105 | $0.63 |
| Cloudlabs-GH-Copilot | 29 | $0.17 |
| ghas-bootcamp-2026-06-10-2269853 | 23 | $0.14 |
| ghas-bootcamp-2026-06-10-2269869 | 18 | $0.11 |
| ghas-bootcamp-2026-06-11-2270450 | 17 | $0.1 |

### 👤 Identity & licenses

SCIM-provisioned identities: **360** — active licenses: **254** — inactive/suspended (est.): **106**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $17065.15** — yesterday: $0.34 — GitHub charges: $17057.54

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $10143.7 |
| Azure sub charge — our account (customer-13304750) | $8461.86 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $1681.84 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$8595.68 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-3863811 (EXTERNAL): $8595.68
customer-13304750 (ours): $8461.86
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- Cost center 'labcluster-AzGHCredits01-3k-expiry23July26' expires in 0d with $485 of $3000 still unused (84% consumed)
- Cost center 'labcluster-AzGHCredits02-4k-expiry23July26' expires in 0d with $4000 of $4000 still unused (0% consumed)
- Cost center 'labcluster-AzGHCredits05-5k-expiry23July26' expires in 0d with $5000 of $5000 still unused (0% consumed)
- External GitHub enterprise(s) charging this Azure sub $8595.68 MTD (not customer-13304750): customer-3863811 $8595.68, customer-12238363 $0

