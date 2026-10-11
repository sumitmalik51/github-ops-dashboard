## Billing watchdog — 2026-10-11

**MTD net: $3256.9** (gross $6860.69) — yesterday: $445.69 — GHEC seats: 139 — Copilot seats: 308

```
ghec: $1836.48
copilot: $1399.87
codespaces: $20.55
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$3256.90** |
| → Our Azure sub (enterprise default) | $3256.9 |
| → Cost centers (prepaid credit pools) | $0 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| CL-Labs-04 | 1188.1 | $6.9 |
| Cloudlabs-Enterprises | 646.5 | $3.86 |
| Cloudlabs-GH-Copilot | 130 | $0.78 |
| Public-sector-hacks-Org | 10 | $0.06 |

### 👤 Identity & licenses

SCIM-provisioned identities: **245** — active licenses: **139** — inactive/suspended (est.): **106**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $4854.35** — yesterday: $0.32 — GitHub charges: $2821.91

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $3256.9 |
| Azure sub charge — our account (customer-13304750) | $2805.36 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $451.54 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$16.55 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $2805.36
customer-6174522 (EXTERNAL): $11.03
customer-13061039 (EXTERNAL): $5.52
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- External GitHub enterprise(s) charging this Azure sub $16.55 MTD (not customer-13304750): customer-6174522 $11.03, customer-13061039 $5.52, customer-12238363 $0

