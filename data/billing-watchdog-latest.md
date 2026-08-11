## Billing watchdog — 2026-08-11

**MTD net: $2277.4** (gross $2292.48) — yesterday: $295.9 — GHEC seats: 193 — Copilot seats: 536

```
ghec: $1348.06
copilot: $691.97
ghas: $232.35
codespaces: $3.08
code_quality: $1.94
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$3188.85** |
| → Our Azure sub (enterprise default) | $2277.4 |
| → Cost centers (prepaid credit pools) | $911.45 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|
| labcluster-POC10-5k-13sep26 | $5000 | $911.45 | 18% | $4089 | 32d |
| labcluster-POC11-83k-expiry13Sep26 | $83000 | $0.00 | 0% | $83000 | 32d |

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| CL-Labs-04 | 1952.2 | $11.69 |
| Cloudlabs-Enterprises | 426 | $2.53 |
| ghas-bootcamp-2026-08-05-2343091 | 76 | $0.46 |
| Cloudlabs-GH-Copilot | 49 | $0.29 |
| ghas-bootcamp-2026-07-22-2323169 | 15 | $0.09 |

### 👤 Identity & licenses

SCIM-provisioned identities: **303** — active licenses: **193** — inactive/suspended (est.): **110**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $2000.77** — yesterday: $0.34 — GitHub charges: $1997.37

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $2277.4 |
| Azure sub charge — our account (customer-13304750) | $1980.82 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $296.58 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$16.55 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $1980.82
customer-6174522 (EXTERNAL): $11.03
customer-13061039 (EXTERNAL): $5.52
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- External GitHub enterprise(s) charging this Azure sub $16.55 MTD (not customer-13304750): customer-6174522 $11.03, customer-13061039 $5.52, customer-12238363 $0

