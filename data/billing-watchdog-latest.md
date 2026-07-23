## Billing watchdog — 2026-07-23

**MTD net: $10143.7** (gross $10829.54) — yesterday: $928.87 — GHEC seats: 253 — Copilot seats: 885

```
ghec: $6006.68
copilot: $3088.42
ghas: $1047.97
codespaces: $0.63
actions: $0
```

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $17065.15** — yesterday: $0.34 — GitHub charges: $17057.54

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $10143.7 |
| Azure sub charge — our account (customer-13304750) | $8461.86 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $1681.84 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$8595.68 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-3863811 (EXTERNAL): $8595.68
customer-13304750 (ours): $8461.86
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- Cost center 'labcluster-AzGHCredits01-3k-expiry23July26' credit pool expires in 0d
- Cost center 'labcluster-AzGHCredits02-4k-expiry23July26' credit pool expires in 0d
- Cost center 'labcluster-AzGHCredits05-5k-expiry23July26' credit pool expires in 0d
- External GitHub enterprise(s) charging this Azure sub $8595.68 MTD (not customer-13304750): customer-3863811 $8595.68, customer-12238363 $0

