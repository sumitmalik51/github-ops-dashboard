## Billing watchdog — 2026-08-12

**MTD net: $2577.37** (gross $2592.45) — yesterday: $299.29 — GHEC seats: 217 — Copilot seats: 561

```
ghec: $1603.45
copilot: $691.97
ghas: $276.61
codespaces: $3.08
code_quality: $2.26
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$3987.16** |
| → Our Azure sub (enterprise default) | $2577.37 |
| → Cost centers (prepaid credit pools) | $1409.79 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|
| labcluster-POC10-5k-13sep26 | $5000 | $1409.79 | 28% | $3590 | 31d |
| labcluster-POC11-83k-expiry13Sep26 | $83000 | $0.00 | 0% | $83000 | 31d |

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| CL-Labs-04 | 1952.2 | $11.69 |
| Cloudlabs-Enterprises | 426 | $2.53 |
| ghas-bootcamp-2026-08-05-2343091 | 76 | $0.46 |
| Cloudlabs-GH-Copilot | 49 | $0.29 |
| ghas-bootcamp-2026-07-22-2323169 | 15 | $0.09 |

### 👤 Identity & licenses

SCIM-provisioned identities: **326** — active licenses: **217** — inactive/suspended (est.): **109**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $2298.82** — yesterday: $0.31 — GitHub charges: $2295.12

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $2577.37 |
| Azure sub charge — our account (customer-13304750) | $2276.73 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $300.64 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$18.39 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $2276.73
customer-6174522 (EXTERNAL): $12.26
customer-13061039 (EXTERNAL): $6.13
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- External GitHub enterprise(s) charging this Azure sub $18.39 MTD (not customer-13304750): customer-6174522 $12.26, customer-13061039 $6.13, customer-12238363 $0

