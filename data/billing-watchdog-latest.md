## Billing watchdog — 2026-10-14

**MTD net: $4835.56** (gross $9829.76) — yesterday: $658.47 — GHEC seats: 235 — Copilot seats: 469

```
ghec: $2734.74
copilot: $2077.13
codespaces: $23.69
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$4835.56** |
| → Our Azure sub (enterprise default) | $4835.56 |
| → Cost centers (prepaid credit pools) | $0 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| CL-Labs-04 | 1319.9 | $7.63 |
| Cloudlabs-Enterprises | 833.4 | $4.98 |
| Cloudlabs-GH-Copilot | 167 | $1 |
| Public-sector-hacks-Org | 10 | $0.06 |

### 👤 Identity & licenses

SCIM-provisioned identities: **342** — active licenses: **235** — inactive/suspended (est.): **107**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $7519.25** — yesterday: $1293.96 — GitHub charges: $4190.72

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $4835.56 |
| Azure sub charge — our account (customer-13304750) | $4168.66 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $666.90 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$22.06 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $4168.66
customer-6174522 (EXTERNAL): $14.71
customer-13061039 (EXTERNAL): $7.35
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- External GitHub enterprise(s) charging this Azure sub $22.06 MTD (not customer-13304750): customer-6174522 $14.71, customer-13061039 $7.35, customer-12238363 $0

