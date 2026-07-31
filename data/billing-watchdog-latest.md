## Billing watchdog — 2026-07-31

**MTD net: $19733.42** (gross $20509.52) — yesterday: $1371.68 — GHEC seats: 146 — Copilot seats: 940

```
ghec: $11119.84
copilot: $6893.94
ghas: $1718.16
codespaces: $1.49
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$20429.52** |
| → Our Azure sub (enterprise default) | $19733.42 |
| → Cost centers (prepaid credit pools) | $696.10 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|
| labcluster-POC09-10k-expiry09aug26 | $10000 | $696.10 | 7% | $9304 | 8d |
| labcluster-POC10-5k-13sep26 | $5000 | $0.00 | 0% | $5000 | 43d |
| labcluster-POC11-83k-expiry13Sep26 | $83000 | $0.00 | 0% | $83000 | 43d |

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| Cloudlabs-Enterprises | 7385.6 | $42.14 |
| Public-sector-hacks-Org | 1086 | $6.52 |
| CL-Labs-04 | 573.4 | $3.43 |
| ghas-bootcamp-2026-07-22-2323169 | 128 | $0.77 |
| Cloudlabs-GH-Copilot | 107 | $0.64 |
| ghas-bootcamp-2026-06-10-2269853 | 23 | $0.14 |

### 👤 Identity & licenses

SCIM-provisioned identities: **267** — active licenses: **146** — inactive/suspended (est.): **121**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $26354.28** — yesterday: $0.34 — GitHub charges: $26344.1

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $19733.42 |
| Azure sub charge — our account (customer-13304750) | $17746.58 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $1986.84 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$8597.52 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $17746.58
customer-3863811 (EXTERNAL): $8595.68
customer-6174522 (EXTERNAL): $1.23
customer-13061039 (EXTERNAL): $0.61
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- Cost center 'labcluster-POC09-10k-expiry09aug26' expires in 8d with $9304 of $10000 still unused (7% consumed)
- External GitHub enterprise(s) charging this Azure sub $8597.52 MTD (not customer-13304750): customer-3863811 $8595.68, customer-6174522 $1.23, customer-13061039 $0.61, customer-12238363 $0

