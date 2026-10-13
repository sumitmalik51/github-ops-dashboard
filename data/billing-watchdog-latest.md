## Billing watchdog — 2026-10-13

**MTD net: $4174.51** (gross $8869.88) — yesterday: $470.75 — GHEC seats: 145 — Copilot seats: 327

```
ghec: $2364.19
copilot: $1789.68
codespaces: $20.63
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$4174.51** |
| → Our Azure sub (enterprise default) | $4174.51 |
| → Cost centers (prepaid credit pools) | $0 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| CL-Labs-04 | 1215.2 | $7.01 |
| Cloudlabs-Enterprises | 668.2 | $3.99 |
| Cloudlabs-GH-Copilot | 157 | $0.94 |
| Public-sector-hacks-Org | 10 | $0.06 |

### 👤 Identity & licenses

SCIM-provisioned identities: **251** — active licenses: **145** — inactive/suspended (est.): **106**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $5752.65** — yesterday: $1.73 — GitHub charges: $3718.13

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $4174.51 |
| Azure sub charge — our account (customer-13304750) | $3697.91 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $476.60 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$20.22 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $3697.91
customer-6174522 (EXTERNAL): $13.48
customer-13061039 (EXTERNAL): $6.74
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- External GitHub enterprise(s) charging this Azure sub $20.22 MTD (not customer-13304750): customer-6174522 $13.48, customer-13061039 $6.74, customer-12238363 $0

