## Billing watchdog — 2026-10-09

**MTD net: $2357.08** (gross $5301.79) — yesterday: $405.64 — GHEC seats: 182 — Copilot seats: 292

```
ghec: $1324.35
copilot: $1022.32
codespaces: $10.4
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$2357.08** |
| → Our Azure sub (enterprise default) | $2357.08 |
| → Cost centers (prepaid credit pools) | $0 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| CL-Labs-04 | 1169.9 | $6.83 |
| Cloudlabs-Enterprises | 102.7 | $0.6 |
| Cloudlabs-GH-Copilot | 99 | $0.59 |
| Public-sector-hacks-Org | 10 | $0.06 |

### 👤 Identity & licenses

SCIM-provisioned identities: **288** — active licenses: **182** — inactive/suspended (est.): **106**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $3988.64** — yesterday: $0.32 — GitHub charges: $1956.88

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $2357.08 |
| Azure sub charge — our account (customer-13304750) | $1944.01 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $413.07 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$12.87 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $1944.01
customer-6174522 (EXTERNAL): $8.58
customer-13061039 (EXTERNAL): $4.29
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- External GitHub enterprise(s) charging this Azure sub $12.87 MTD (not customer-13304750): customer-6174522 $8.58, customer-13061039 $4.29, customer-12238363 $0

