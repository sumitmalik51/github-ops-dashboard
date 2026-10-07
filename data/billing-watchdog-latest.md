## Billing watchdog — 2026-10-07

**MTD net: $1551.7** (gross $3875.98) — yesterday: $322.32 — GHEC seats: 179 — Copilot seats: 229

```
ghec: $877.26
copilot: $666.23
codespaces: $8.21
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$1551.70** |
| → Our Azure sub (enterprise default) | $1551.7 |
| → Cost centers (prepaid credit pools) | $0 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| CL-Labs-04 | 1026.8 | $6.02 |
| Cloudlabs-Enterprises | 100.1 | $0.59 |
| Cloudlabs-GH-Copilot | 79 | $0.47 |
| Public-sector-hacks-Org | 10 | $0.06 |

### 👤 Identity & licenses

SCIM-provisioned identities: **286** — active licenses: **179** — inactive/suspended (est.): **107**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $2941.42** — yesterday: $589.16 — GitHub charges: $1231.15

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $1551.7 |
| Azure sub charge — our account (customer-13304750) | $1221.96 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $329.74 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$9.19 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $1221.96
customer-6174522 (EXTERNAL): $6.13
customer-13061039 (EXTERNAL): $3.06
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- External GitHub enterprise(s) charging this Azure sub $9.19 MTD (not customer-13304750): customer-6174522 $6.13, customer-13061039 $3.06, customer-12238363 $0

