## Billing watchdog — 2026-10-03

**MTD net: $459.11** (gross $1521.91) — yesterday: $247.07 — GHEC seats: 133 — Copilot seats: 173

```
ghec: $260.81
copilot: $194.9
codespaces: $3.41
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$459.11** |
| → Our Azure sub (enterprise default) | $459.11 |
| → Cost centers (prepaid credit pools) | $0 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| CL-Labs-04 | 260.8 | $1.51 |
| Cloudlabs-Enterprises | 46.7 | $0.28 |
| Cloudlabs-GH-Copilot | 31 | $0.19 |
| Public-sector-hacks-Org | 10 | $0.06 |

### 👤 Identity & licenses

SCIM-provisioned identities: **239** — active licenses: **133** — inactive/suspended (est.): **106**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $212.96** — yesterday: $0.32 — GitHub charges: $212.3

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $459.11 |
| Azure sub charge — our account (customer-13304750) | $210.46 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $248.65 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$1.84 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $210.46
customer-6174522 (EXTERNAL): $1.23
customer-13061039 (EXTERNAL): $0.61
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- Anomaly: copilot spent $106.03 yesterday vs $12.7/day 7-day average (>2x)
- Anomaly: ghec spent $139.55 yesterday vs $17.13/day 7-day average (>2x)
- External GitHub enterprise(s) charging this Azure sub $1.84 MTD (not customer-13304750): customer-6174522 $1.23, customer-13061039 $0.61, customer-12238363 $0

