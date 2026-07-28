## Billing watchdog — 2026-07-28

**MTD net: $15676.12** (gross $16417.87) — yesterday: $1271.19 — GHEC seats: 196 — Copilot seats: 891

```
ghec: $8948.71
copilot: $5289.97
ghas: $1436.81
codespaces: $0.63
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$16092.89** |
| → Our Azure sub (enterprise default) | $15676.12 |
| → Cost centers (prepaid credit pools) | $416.77 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|
| labcluster-POC09-10k-expiry09aug26 | $10000 | $416.77 | 4% | $9583 | 11d |
| labcluster-POC10-5k-13sep26 | $5000 | $0.00 | 0% | $5000 | 46d |
| labcluster-POC11-83k-expiry13Sep26 | $83000 | $0.00 | 0% | $83000 | 46d |

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| Cloudlabs-Enterprises | 7270 | $41.45 |
| Public-sector-hacks-Org | 1086 | $6.52 |
| CL-Labs-04 | 134.8 | $0.8 |
| ghas-bootcamp-2026-07-22-2323169 | 123 | $0.74 |
| Cloudlabs-GH-Copilot | 94 | $0.56 |
| ghas-bootcamp-2026-06-10-2269853 | 23 | $0.14 |

### 👤 Identity & licenses

SCIM-provisioned identities: **302** — active licenses: **196** — inactive/suspended (est.): **106**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $22454.9** — yesterday: $0.34 — GitHub charges: $22445.73

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $15676.12 |
| Azure sub charge — our account (customer-13304750) | $13850.05 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $1826.07 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$8595.68 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $13850.05
customer-3863811 (EXTERNAL): $8595.68
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- Cost center 'labcluster-POC09-10k-expiry09aug26' expires in 11d with $9583 of $10000 still unused (4% consumed)
- External GitHub enterprise(s) charging this Azure sub $8595.68 MTD (not customer-13304750): customer-3863811 $8595.68, customer-12238363 $0

