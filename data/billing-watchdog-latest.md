## Billing watchdog — 2026-08-09

**MTD net: $1685.6** (gross $1700.6) — yesterday: $467.13 — GHEC seats: 185 — Copilot seats: 532

```
ghec: $845.42
copilot: $691.97
ghas: $143.84
codespaces: $3.08
code_quality: $1.29
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$3599.21** |
| → Our Azure sub (enterprise default) | $1685.6 |
| → Cost centers (prepaid credit pools) | $1913.61 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|
| labcluster-POC09-10k-expiry09aug26 | $10000 | $2667.52 | 27% | $7332 | 0d |
| labcluster-POC10-5k-13sep26 | $5000 | $0.00 | 0% | $5000 | 34d |
| labcluster-POC11-83k-expiry13Sep26 | $83000 | $0.00 | 0% | $83000 | 34d |

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| CL-Labs-04 | 1950 | $11.68 |
| Cloudlabs-Enterprises | 426 | $2.53 |
| ghas-bootcamp-2026-08-05-2343091 | 74 | $0.44 |
| Cloudlabs-GH-Copilot | 43 | $0.26 |
| ghas-bootcamp-2026-07-22-2323169 | 13 | $0.08 |

### 👤 Identity & licenses

SCIM-provisioned identities: **292** — active licenses: **185** — inactive/suspended (est.): **107**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $1054.42** — yesterday: $0.34 — GitHub charges: $1051.69

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $1685.6 |
| Azure sub charge — our account (customer-13304750) | $1038.82 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $646.78 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$12.87 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $1038.82
customer-6174522 (EXTERNAL): $8.58
customer-13061039 (EXTERNAL): $4.29
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- Anomaly: copilot spent $179.58 yesterday vs $47.63/day 7-day average (>2x)
- Anomaly: ghec spent $244.55 yesterday vs $85.74/day 7-day average (>2x)
- Cost center 'labcluster-POC09-10k-expiry09aug26' expires in 0d with $7332 of $10000 still unused (27% consumed)
- External GitHub enterprise(s) charging this Azure sub $12.87 MTD (not customer-13304750): customer-6174522 $8.58, customer-13061039 $4.29, customer-12238363 $0

