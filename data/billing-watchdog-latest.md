## Billing watchdog — 2026-10-05

**MTD net: $956.38** (gross $2298.22) — yesterday: $249.25 — GHEC seats: 133 — Copilot seats: 175

```
ghec: $541.94
copilot: $408.81
codespaces: $5.64
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$956.38** |
| → Our Azure sub (enterprise default) | $956.38 |
| → Cost centers (prepaid credit pools) | $0 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| CL-Labs-04 | 269 | $1.52 |
| Cloudlabs-Enterprises | 62.4 | $0.37 |
| Cloudlabs-GH-Copilot | 55 | $0.33 |
| Public-sector-hacks-Org | 10 | $0.06 |

### 👤 Identity & licenses

SCIM-provisioned identities: **239** — active licenses: **133** — inactive/suspended (est.): **106**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $1099.41** — yesterday: $387.38 — GitHub charges: $711.02

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $956.38 |
| Azure sub charge — our account (customer-13304750) | $705.5 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $250.88 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$5.52 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $705.5
customer-6174522 (EXTERNAL): $3.68
customer-13061039 (EXTERNAL): $1.84
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- Anomaly: copilot spent $107.26 yesterday vs $43.08/day 7-day average (>2x)
- Anomaly: ghec spent $140.9 yesterday vs $57.1/day 7-day average (>2x)
- External GitHub enterprise(s) charging this Azure sub $5.52 MTD (not customer-13304750): customer-6174522 $3.68, customer-13061039 $1.84, customer-12238363 $0

