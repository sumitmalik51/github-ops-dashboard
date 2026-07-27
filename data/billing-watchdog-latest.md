## Billing watchdog — 2026-07-27

**MTD net: $14402.96** (gross $15122.97) — yesterday: $1269.29 — GHEC seats: 197 — Copilot seats: 889

```
ghec: $8265.87
copilot: $4792.9
ghas: $1343.55
codespaces: $0.63
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$14714.25** |
| → Our Azure sub (enterprise default) | $14402.96 |
| → Cost centers (prepaid credit pools) | $311.29 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|
| labcluster-POC09-10k-expiry09aug26 | $10000 | $311.29 | 3% | $9689 | 12d |
| labcluster-POC10-5k-13sep26 | $5000 | $0.00 | 0% | $5000 | 47d |
| labcluster-POC11-83k-expiry13Sep26 | $83000 | $0.00 | 0% | $83000 | 47d |

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| Cloudlabs-Enterprises | 7145.8 | $40.51 |
| ghas-bootcamp-2026-07-22-2323169 | 105 | $0.63 |
| Cloudlabs-GH-Copilot | 87 | $0.52 |
| ghas-bootcamp-2026-06-10-2269853 | 23 | $0.14 |
| CL-Labs-04 | 19.6 | $0.11 |
| ghas-bootcamp-2026-06-10-2269869 | 18 | $0.11 |

### 👤 Identity & licenses

SCIM-provisioned identities: **303** — active licenses: **197** — inactive/suspended (est.): **106**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $20690.05** — yesterday: $0.34 — GitHub charges: $20681.22

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $14402.96 |
| Azure sub charge — our account (customer-13304750) | $12085.54 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $2317.42 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$8595.68 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $12085.54
customer-3863811 (EXTERNAL): $8595.68
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- Cost center 'labcluster-POC09-10k-expiry09aug26' expires in 12d with $9689 of $10000 still unused (3% consumed)
- External GitHub enterprise(s) charging this Azure sub $8595.68 MTD (not customer-13304750): customer-3863811 $8595.68, customer-12238363 $0

