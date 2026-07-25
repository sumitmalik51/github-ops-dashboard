## Billing watchdog — 2026-07-25

**MTD net: $11861.57** (gross $12576.82) — yesterday: $989.61 — GHEC seats: 196 — Copilot seats: 887

```
ghec: $6904.26
copilot: $3801.23
ghas: $1155.45
codespaces: $0.63
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$11963.73** |
| → Our Azure sub (enterprise default) | $11861.57 |
| → Cost centers (prepaid credit pools) | $102.16 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|
| labcluster-POC09-10k-expiry09aug26 | $10000 | $102.16 | 1% | $9898 | 14d |
| labcluster-POC10-5k-13sep26 | $5000 | $0.00 | 0% | $5000 | 49d |
| labcluster-POC11-83k-expiry13Sep26 | $83000 | $0.00 | 0% | $83000 | 49d |

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| Cloudlabs-Enterprises | 7105.4 | $40.27 |
| ghas-bootcamp-2026-07-22-2323169 | 105 | $0.63 |
| Cloudlabs-GH-Copilot | 78 | $0.47 |
| ghas-bootcamp-2026-06-10-2269853 | 23 | $0.14 |
| ghas-bootcamp-2026-06-10-2269869 | 18 | $0.11 |
| ghas-bootcamp-2026-06-11-2270450 | 17 | $0.1 |

### 👤 Identity & licenses

SCIM-provisioned identities: **302** — active licenses: **196** — inactive/suspended (est.): **106**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $18708.78** — yesterday: $0.34 — GitHub charges: $18700.64

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $11861.57 |
| Azure sub charge — our account (customer-13304750) | $10104.96 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $1756.61 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$8595.68 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $10104.96
customer-3863811 (EXTERNAL): $8595.68
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- Cost center 'labcluster-POC09-10k-expiry09aug26' expires in 14d with $9898 of $10000 still unused (1% consumed)
- External GitHub enterprise(s) charging this Azure sub $8595.68 MTD (not customer-13304750): customer-3863811 $8595.68, customer-12238363 $0

