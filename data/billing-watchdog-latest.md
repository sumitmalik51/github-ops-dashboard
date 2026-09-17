## Billing watchdog — 2026-09-17

**MTD net: $7269.39** (gross $8311.72) — yesterday: $1060.45 — GHEC seats: 167 — Copilot seats: 719

```
ghec: $3549.7
copilot: $3102.07
ghas: $597.8
code_quality: $14.67
codespaces: $5.16
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$7269.39** |
| → Our Azure sub (enterprise default) | $7269.39 |
| → Cost centers (prepaid credit pools) | $0 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| CL-Labs-04 | 1276.8 | $7.65 |
| Cloudlabs-Enterprises | 310.7 | $1.86 |
| Cloudlabs-GH-Copilot | 35 | $0.21 |
| ghas-bootcamp-2026-08-30-2369284 | 10 | $0.06 |
| First-Org-2376342 | 1 | $0.01 |

### 👤 Identity & licenses

SCIM-provisioned identities: **325** — active licenses: **167** — inactive/suspended (est.): **158**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $n/a** — yesterday: $n/a — GitHub charges: $6195.03

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $7269.39 |
| Azure sub charge — our account (customer-13304750) | $6166.53 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $1102.86 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$28.5 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $6166.53
customer-6174522 (EXTERNAL): $19
customer-13061039 (EXTERNAL): $9.5
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- GHAS billing active outside bootcamp orgs: CL-Labs-04/odl-user-2382236_clabs
- External GitHub enterprise(s) charging this Azure sub $28.5 MTD (not customer-13304750): customer-6174522 $19, customer-13061039 $9.5, customer-12238363 $0

