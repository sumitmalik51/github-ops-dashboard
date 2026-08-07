## Billing watchdog — 2026-08-07

**MTD net: $745.41** (gross $759.58) — yesterday: $262.39 — GHEC seats: 186 — Copilot seats: 525

```
ghec: $352.26
copilot: $333.42
ghas: $56.9
codespaces: $2.19
code_quality: $0.65
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$2102.03** |
| → Our Azure sub (enterprise default) | $745.41 |
| → Cost centers (prepaid credit pools) | $1356.62 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|
| labcluster-POC09-10k-expiry09aug26 | $10000 | $2110.53 | 21% | $7889 | 1d |
| labcluster-POC10-5k-13sep26 | $5000 | $0.00 | 0% | $5000 | 36d |
| labcluster-POC11-83k-expiry13Sep26 | $83000 | $0.00 | 0% | $83000 | 36d |

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| CL-Labs-04 | 1904.7 | $11.41 |
| Cloudlabs-Enterprises | 339.1 | $2.02 |
| ghas-bootcamp-2026-08-05-2343091 | 74 | $0.44 |
| Cloudlabs-GH-Copilot | 34 | $0.2 |
| ghas-bootcamp-2026-07-22-2323169 | 13 | $0.08 |

### 👤 Identity & licenses

SCIM-provisioned identities: **382** — active licenses: **186** — inactive/suspended (est.): **196**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $317.01** — yesterday: $0.34 — GitHub charges: $314.96

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $745.41 |
| Azure sub charge — our account (customer-13304750) | $305.77 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $439.64 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$9.19 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $305.77
customer-6174522 (EXTERNAL): $6.13
customer-13061039 (EXTERNAL): $3.06
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- Anomaly: copilot spent $73.55 yesterday vs $12/day 7-day average (>2x)
- Anomaly: ghec spent $159.19 yesterday vs $27.39/day 7-day average (>2x)
- Copilot seats grew by 173 since last run (352 -> 525) (~$3287/mo run-rate)
- Cost center 'labcluster-POC09-10k-expiry09aug26' expires in 1d with $7889 of $10000 still unused (21% consumed)
- External GitHub enterprise(s) charging this Azure sub $9.19 MTD (not customer-13304750): customer-6174522 $6.13, customer-13061039 $3.06, customer-12238363 $0

