## Billing watchdog — 2026-10-12

**MTD net: $3703.75** (gross $7697.66) — yesterday: $446.85 — GHEC seats: 138 — Copilot seats: 309

```
ghec: $2093.9
copilot: $1589.26
codespaces: $20.59
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$3703.75** |
| → Our Azure sub (enterprise default) | $3703.75 |
| → Cost centers (prepaid credit pools) | $0 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| CL-Labs-04 | 1210.1 | $7.01 |
| Cloudlabs-Enterprises | 656.8 | $3.92 |
| Cloudlabs-GH-Copilot | 141 | $0.85 |
| Public-sector-hacks-Org | 10 | $0.06 |

### 👤 Identity & licenses

SCIM-provisioned identities: **244** — active licenses: **138** — inactive/suspended (est.): **106**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $5302.22** — yesterday: $0.33 — GitHub charges: $3269.45

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $3703.75 |
| Azure sub charge — our account (customer-13304750) | $3251.06 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $452.69 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$18.39 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $3251.06
customer-6174522 (EXTERNAL): $12.26
customer-13061039 (EXTERNAL): $6.13
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- External GitHub enterprise(s) charging this Azure sub $18.39 MTD (not customer-13304750): customer-6174522 $12.26, customer-13061039 $6.13, customer-12238363 $0

