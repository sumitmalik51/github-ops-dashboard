## Billing watchdog — 2026-10-06

**MTD net: $1229.38** (gross $3308.64) — yesterday: $267.21 — GHEC seats: 147 — Copilot seats: 191

```
ghec: $696.39
copilot: $525.87
codespaces: $7.12
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$1229.38** |
| → Our Azure sub (enterprise default) | $1229.38 |
| → Cost centers (prepaid credit pools) | $0 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| CL-Labs-04 | 384.7 | $2.19 |
| Cloudlabs-Enterprises | 90.7 | $0.53 |
| Cloudlabs-GH-Copilot | 64 | $0.38 |
| Public-sector-hacks-Org | 10 | $0.06 |

### 👤 Identity & licenses

SCIM-provisioned identities: **253** — active licenses: **147** — inactive/suspended (est.): **106**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $2012.19** — yesterday: $590.31 — GitHub charges: $962.1

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $1229.38 |
| Azure sub charge — our account (customer-13304750) | $954.75 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $274.63 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$7.35 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $954.75
customer-6174522 (EXTERNAL): $4.9
customer-13061039 (EXTERNAL): $2.45
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- External GitHub enterprise(s) charging this Azure sub $7.35 MTD (not customer-13304750): customer-6174522 $4.9, customer-13061039 $2.45, customer-12238363 $0

