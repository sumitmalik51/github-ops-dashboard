## Billing watchdog — 2026-09-30

**MTD net: $34007.3** (gross $39611.48) — yesterday: $2643.92 — GHEC seats: 189 — Copilot seats: 1700

```
ghec: $16749.6
copilot: $14013.77
ghas: $3121.3
codespaces: $83.97
code_quality: $38.67
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$34007.30** |
| → Our Azure sub (enterprise default) | $34007.3 |
| → Cost centers (prepaid credit pools) | $0 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| CL-Labs-04 | 9578.5 | $57.24 |
| Cloudlabs-Enterprises | 2894.9 | $17.34 |
| Cloudlabs-GH-Copilot | 214 | $1.28 |
| Public-sector-hacks-Org | 98 | $0.59 |
| ghas-bootcamp-2026-08-30-2369284 | 10 | $0.06 |
| First-Org-2394817 | 4 | $0.02 |

### 👤 Identity & licenses

SCIM-provisioned identities: **296** — active licenses: **189** — inactive/suspended (est.): **107**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $31209.62** — yesterday: $0.32 — GitHub charges: $31199.59

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $34007.3 |
| Azure sub charge — our account (customer-13304750) | $31146.39 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $2860.91 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$53.2 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $31146.39
customer-6174522 (EXTERNAL): $35.47
customer-13061039 (EXTERNAL): $17.73
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- Yesterday (2026-09-29) net spend $2643.92 exceeds DAILY_LIMIT $2500
- External GitHub enterprise(s) charging this Azure sub $53.2 MTD (not customer-13304750): customer-6174522 $35.47, customer-13061039 $17.73, customer-12238363 $0

