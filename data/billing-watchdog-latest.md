## Billing watchdog — 2026-10-10

**MTD net: $2812.59** (gross $6416.26) — yesterday: $455.71 — GHEC seats: 143 — Copilot seats: 308

```
ghec: $1581.1
copilot: $1211.1
codespaces: $20.39
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$2812.59** |
| → Our Azure sub (enterprise default) | $2812.59 |
| → Cost centers (prepaid credit pools) | $0 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| CL-Labs-04 | 1184 | $6.89 |
| Cloudlabs-Enterprises | 638.1 | $3.81 |
| Cloudlabs-GH-Copilot | 119 | $0.71 |
| Public-sector-hacks-Org | 10 | $0.06 |

### 👤 Identity & licenses

SCIM-provisioned identities: **250** — active licenses: **143** — inactive/suspended (est.): **107**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $4396.46** — yesterday: $0.32 — GitHub charges: $2364.36

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $2812.59 |
| Azure sub charge — our account (customer-13304750) | $2349.65 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $462.94 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$14.71 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $2349.65
customer-6174522 (EXTERNAL): $9.81
customer-13061039 (EXTERNAL): $4.9
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- External GitHub enterprise(s) charging this Azure sub $14.71 MTD (not customer-13304750): customer-6174522 $9.81, customer-13061039 $4.9, customer-12238363 $0

