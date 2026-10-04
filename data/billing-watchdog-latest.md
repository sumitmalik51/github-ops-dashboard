## Billing watchdog — 2026-10-04

**MTD net: $707.17** (gross $1770.1) — yesterday: $247.96 — GHEC seats: 133 — Copilot seats: 174

```
ghec: $401.03
copilot: $301.55
codespaces: $4.59
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$707.17** |
| → Our Azure sub (enterprise default) | $707.17 |
| → Cost centers (prepaid credit pools) | $0 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| CL-Labs-04 | 265.1 | $1.52 |
| Cloudlabs-Enterprises | 55.1 | $0.32 |
| Cloudlabs-GH-Copilot | 46 | $0.28 |
| Public-sector-hacks-Org | 10 | $0.06 |

### 👤 Identity & licenses

SCIM-provisioned identities: **239** — active licenses: **133** — inactive/suspended (est.): **106**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $462.23** — yesterday: $0.34 — GitHub charges: $461.21

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $707.17 |
| Azure sub charge — our account (customer-13304750) | $457.53 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $249.64 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$3.68 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $457.53
customer-6174522 (EXTERNAL): $2.45
customer-13061039 (EXTERNAL): $1.23
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- Anomaly: copilot spent $106.65 yesterday vs $27.84/day 7-day average (>2x)
- Anomaly: ghec spent $140.23 yesterday vs $37.06/day 7-day average (>2x)
- External GitHub enterprise(s) charging this Azure sub $3.68 MTD (not customer-13304750): customer-6174522 $2.45, customer-13061039 $1.23, customer-12238363 $0

