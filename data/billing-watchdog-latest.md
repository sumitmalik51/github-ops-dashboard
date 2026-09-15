## Billing watchdog — 2026-09-15

**MTD net: $5341.21** (gross $5363.8) — yesterday: $849.14 — GHEC seats: 161 — Copilot seats: 576

```
ghec: $2598.4
copilot: $2275.57
ghas: $454.07
code_quality: $12
codespaces: $1.18
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$5341.21** |
| → Our Azure sub (enterprise default) | $5341.21 |
| → Cost centers (prepaid credit pools) | $0 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| CL-Labs-04 | 145 | $0.87 |
| Cloudlabs-Enterprises | 52.2 | $0.31 |
| ghas-bootcamp-2026-08-30-2369284 | 10 | $0.06 |
| Cloudlabs-GH-Copilot | 4 | $0.02 |
| First-Org-2376342 | 1 | $0.01 |

### 👤 Identity & licenses

SCIM-provisioned identities: **269** — active licenses: **161** — inactive/suspended (est.): **108**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $n/a** — yesterday: $n/a — GitHub charges: $4478.67

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $5341.21 |
| Azure sub charge — our account (customer-13304750) | $4453.97 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $887.24 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$24.7 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $4453.97
customer-6174522 (EXTERNAL): $16.47
customer-13061039 (EXTERNAL): $8.23
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- GHAS billing active outside bootcamp orgs: CL-Labs-04/odl-user-2382236_clabs
- External GitHub enterprise(s) charging this Azure sub $24.7 MTD (not customer-13304750): customer-6174522 $16.47, customer-13061039 $8.23, customer-12238363 $0

