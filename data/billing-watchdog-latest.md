## Billing watchdog — 2026-08-04

**MTD net: $22.32** (gross $25) — yesterday: $7.16 — GHEC seats: 73 — Copilot seats: 84

```
copilot: $11.65
ghec: $10.16
codespaces: $0.51
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$315.97** |
| → Our Azure sub (enterprise default) | $22.32 |
| → Cost centers (prepaid credit pools) | $293.65 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|
| labcluster-POC09-10k-expiry09aug26 | $10000 | $1047.56 | 10% | $8952 | 4d |
| labcluster-POC10-5k-13sep26 | $5000 | $0.00 | 0% | $5000 | 39d |
| labcluster-POC11-83k-expiry13Sep26 | $83000 | $0.00 | 0% | $83000 | 39d |

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| CL-Labs-04 | 237.7 | $1.42 |
| Cloudlabs-Enterprises | 180.9 | $1.08 |
| Cloudlabs-GH-Copilot | 21 | $0.13 |
| ghas-bootcamp-2026-07-22-2323169 | 9 | $0.05 |

### 👤 Identity & licenses

SCIM-provisioned identities: **179** — active licenses: **73** — inactive/suspended (est.): **106**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $9.99** — yesterday: $0.34 — GitHub charges: $8.97

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $22.32 |
| Azure sub charge — our account (customer-13304750) | $5.29 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $17.03 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$3.68 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $5.29
customer-6174522 (EXTERNAL): $2.45
customer-13061039 (EXTERNAL): $1.23
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- Cost center 'labcluster-POC09-10k-expiry09aug26' expires in 4d with $8952 of $10000 still unused (10% consumed)
- External GitHub enterprise(s) charging this Azure sub $3.68 MTD (not customer-13304750): customer-6174522 $2.45, customer-13061039 $1.23, customer-12238363 $0

