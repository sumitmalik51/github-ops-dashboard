## Billing watchdog — 2026-07-26

**MTD net: $13132.44** (gross $13847.9) — yesterday: $1268.61 — GHEC seats: 196 — Copilot seats: 887

```
ghec: $7585.06
copilot: $4296.45
ghas: $1250.29
codespaces: $0.63
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$13338.79** |
| → Our Azure sub (enterprise default) | $13132.44 |
| → Cost centers (prepaid credit pools) | $206.35 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|
| labcluster-POC09-10k-expiry09aug26 | $10000 | $206.35 | 2% | $9794 | 13d |
| labcluster-POC10-5k-13sep26 | $5000 | $0.00 | 0% | $5000 | 48d |
| labcluster-POC11-83k-expiry13Sep26 | $83000 | $0.00 | 0% | $83000 | 48d |

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| Cloudlabs-Enterprises | 7131.6 | $40.43 |
| ghas-bootcamp-2026-07-22-2323169 | 105 | $0.63 |
| Cloudlabs-GH-Copilot | 82 | $0.49 |
| ghas-bootcamp-2026-06-10-2269853 | 23 | $0.14 |
| ghas-bootcamp-2026-06-10-2269869 | 18 | $0.11 |
| ghas-bootcamp-2026-06-11-2270450 | 17 | $0.1 |

### 👤 Identity & licenses

SCIM-provisioned identities: **302** — active licenses: **196** — inactive/suspended (est.): **106**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $19916.34** — yesterday: $0.34 — GitHub charges: $19907.83

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $13132.44 |
| Azure sub charge — our account (customer-13304750) | $11312.15 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $1820.29 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$8595.68 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $11312.15
customer-3863811 (EXTERNAL): $8595.68
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- Anomaly: copilot spent $495.23 yesterday vs $217.58/day 7-day average (>2x)
- Cost center 'labcluster-POC09-10k-expiry09aug26' expires in 13d with $9794 of $10000 still unused (2% consumed)
- External GitHub enterprise(s) charging this Azure sub $8595.68 MTD (not customer-13304750): customer-3863811 $8595.68, customer-12238363 $0

