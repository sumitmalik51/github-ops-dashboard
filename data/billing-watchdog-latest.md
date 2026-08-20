## Billing watchdog — 2026-08-20

**MTD net: $5535.08** (gross $5550.15) — yesterday: $746.48 — GHEC seats: 287 — Copilot seats: 818

```
ghec: $3885.68
copilot: $996.58
ghas: $644.9
code_quality: $4.84
codespaces: $3.08
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$10609.55** |
| → Our Azure sub (enterprise default) | $5535.08 |
| → Cost centers (prepaid credit pools) | $5074.47 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|
| labcluster-POC10-5k-13sep26 | $5000 | $5074.47 | 101% | $-74 | 23d |
| labcluster-POC11-83k-expiry13Sep26 | $83000 | $0.00 | 0% | $83000 | 23d |

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| CL-Labs-04 | 1952.2 | $11.69 |
| Cloudlabs-Enterprises | 426 | $2.53 |
| ghas-bootcamp-2026-08-05-2343091 | 76 | $0.46 |
| Cloudlabs-GH-Copilot | 49 | $0.29 |
| ghas-bootcamp-2026-07-22-2323169 | 15 | $0.09 |

### 👤 Identity & licenses

SCIM-provisioned identities: **396** — active licenses: **287** — inactive/suspended (est.): **109**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $4821.67** — yesterday: $0.32 — GitHub charges: $4815.24

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $5535.08 |
| Azure sub charge — our account (customer-13304750) | $4782.15 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $752.93 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$33.09 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $4782.15
customer-6174522 (EXTERNAL): $22.06
customer-13061039 (EXTERNAL): $11.03
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- Anomaly: copilot spent $301.55 yesterday vs $0/day 7-day average (>2x)
- External GitHub enterprise(s) charging this Azure sub $33.09 MTD (not customer-13304750): customer-6174522 $22.06, customer-13061039 $11.03, customer-12238363 $0

