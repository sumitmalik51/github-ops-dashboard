## Billing watchdog — 2026-10-08

**MTD net: $1951.43** (gross $4666.63) — yesterday: $399.74 — GHEC seats: 183 — Copilot seats: 289

```
ghec: $1098.77
copilot: $843.35
codespaces: $9.31
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$1951.43** |
| → Our Azure sub (enterprise default) | $1951.43 |
| → Cost centers (prepaid credit pools) | $0 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| CL-Labs-04 | 1071.9 | $6.27 |
| Cloudlabs-Enterprises | 101.4 | $0.59 |
| Cloudlabs-GH-Copilot | 89 | $0.53 |
| Public-sector-hacks-Org | 10 | $0.06 |

### 👤 Identity & licenses

SCIM-provisioned identities: **289** — active licenses: **183** — inactive/suspended (est.): **106**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $3586.72** — yesterday: $248.96 — GitHub charges: $1555.3

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $1951.43 |
| Azure sub charge — our account (customer-13304750) | $1544.27 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $407.16 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$11.03 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $1544.27
customer-6174522 (EXTERNAL): $7.35
customer-13061039 (EXTERNAL): $3.68
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- External GitHub enterprise(s) charging this Azure sub $11.03 MTD (not customer-13304750): customer-6174522 $7.35, customer-13061039 $3.68, customer-12238363 $0

