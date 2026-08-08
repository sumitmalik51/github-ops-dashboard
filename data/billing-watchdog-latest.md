## Billing watchdog — 2026-08-08

**MTD net: $1219.76** (gross $1234.62) — yesterday: $470.67 — GHEC seats: 186 — Copilot seats: 532

```
ghec: $601.55
copilot: $513
ghas: $101.16
codespaces: $3.08
code_quality: $0.97
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$2851.11** |
| → Our Azure sub (enterprise default) | $1219.76 |
| → Cost centers (prepaid credit pools) | $1631.35 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|
| labcluster-POC09-10k-expiry09aug26 | $10000 | $2385.26 | 24% | $7615 | 0d |
| labcluster-POC10-5k-13sep26 | $5000 | $0.00 | 0% | $5000 | 35d |
| labcluster-POC11-83k-expiry13Sep26 | $83000 | $0.00 | 0% | $83000 | 35d |

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| CL-Labs-04 | 1936.3 | $11.6 |
| Cloudlabs-Enterprises | 421.8 | $2.51 |
| ghas-bootcamp-2026-08-05-2343091 | 74 | $0.44 |
| Cloudlabs-GH-Copilot | 37 | $0.22 |
| ghas-bootcamp-2026-07-22-2323169 | 13 | $0.08 |

### 👤 Identity & licenses

SCIM-provisioned identities: **293** — active licenses: **186** — inactive/suspended (est.): **107**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $581.53** — yesterday: $0.31 — GitHub charges: $579.18

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $1219.76 |
| Azure sub charge — our account (customer-13304750) | $568.15 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $651.61 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$11.03 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $568.15
customer-6174522 (EXTERNAL): $7.35
customer-13061039 (EXTERNAL): $3.68
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- Anomaly: copilot spent $175.9 yesterday vs $22.5/day 7-day average (>2x)
- Anomaly: ghec spent $249.29 yesterday vs $50.13/day 7-day average (>2x)
- Cost center 'labcluster-POC09-10k-expiry09aug26' expires in 0d with $7615 of $10000 still unused (24% consumed)
- External GitHub enterprise(s) charging this Azure sub $11.03 MTD (not customer-13304750): customer-6174522 $7.35, customer-13061039 $3.68, customer-12238363 $0

