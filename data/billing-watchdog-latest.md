## Billing watchdog — 2026-08-06

**MTD net: $380.67** (gross $392.26) — yesterday: $234 — GHEC seats: 178 — Copilot seats: 352

```
ghec: $193.06
copilot: $157.52
ghas: $28.45
codespaces: $1.31
code_quality: $0.32
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$1363.26** |
| → Our Azure sub (enterprise default) | $380.67 |
| → Cost centers (prepaid credit pools) | $982.59 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|
| labcluster-POC09-10k-expiry09aug26 | $10000 | $1736.50 | 17% | $8264 | 2d |
| labcluster-POC10-5k-13sep26 | $5000 | $0.00 | 0% | $5000 | 37d |
| labcluster-POC11-83k-expiry13Sep26 | $83000 | $0.00 | 0% | $83000 | 37d |

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| CL-Labs-04 | 1522 | $9.12 |
| Cloudlabs-Enterprises | 297.3 | $1.77 |
| ghas-bootcamp-2026-08-05-2343091 | 74 | $0.44 |
| Cloudlabs-GH-Copilot | 28 | $0.17 |
| ghas-bootcamp-2026-07-22-2323169 | 13 | $0.08 |

### 👤 Identity & licenses

SCIM-provisioned identities: **284** — active licenses: **178** — inactive/suspended (est.): **106**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $80.83** — yesterday: $0.34 — GitHub charges: $79.12

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $380.67 |
| Azure sub charge — our account (customer-13304750) | $71.77 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $308.90 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$7.35 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $71.77
customer-6174522 (EXTERNAL): $4.9
customer-13061039 (EXTERNAL): $2.45
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- Anomaly: copilot spent $72.32 yesterday vs $1.66/day 7-day average (>2x)
- Anomaly: ghec spent $132.1 yesterday vs $8.52/day 7-day average (>2x)
- Cost center 'labcluster-POC09-10k-expiry09aug26' expires in 2d with $8264 of $10000 still unused (17% consumed)
- External GitHub enterprise(s) charging this Azure sub $7.35 MTD (not customer-13304750): customer-6174522 $4.9, customer-13061039 $2.45, customer-12238363 $0

