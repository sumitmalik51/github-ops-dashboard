## Billing watchdog — 2026-09-05

**MTD net: $663.13** (gross $663.18) — yesterday: $252.3 — GHEC seats: 42 — Copilot seats: 219

```
ghec: $340.9
copilot: $296.4
ghas: $24.5
code_quality: $1.33
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$1188.85** |
| → Our Azure sub (enterprise default) | $663.13 |
| → Cost centers (prepaid credit pools) | $525.72 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|
| labcluster-POC11-83k-expiry13Sep26 | $83000 | $1753.50 | 2% | $81246 | 7d |

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| ghas-bootcamp-2026-08-30-2369284 | 7 | $0.04 |

### 👤 Identity & licenses

SCIM-provisioned identities: **149** — active licenses: **42** — inactive/suspended (est.): **107**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $382.52** — yesterday: $0.32 — GitHub charges: $381.17

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $663.13 |
| Azure sub charge — our account (customer-13304750) | $375.47 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $287.66 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$5.7 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $375.47
customer-6174522 (EXTERNAL): $3.8
customer-13061039 (EXTERNAL): $1.9
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- Anomaly: copilot spent $112.1 yesterday vs $23.98/day 7-day average (>2x)
- Anomaly: ghec spent $128.1 yesterday vs $27.7/day 7-day average (>2x)
- Cost center 'labcluster-POC11-83k-expiry13Sep26' expires in 7d with $81246 of $83000 still unused (2% consumed)
- External GitHub enterprise(s) charging this Azure sub $5.7 MTD (not customer-13304750): customer-6174522 $3.8, customer-13061039 $1.9, customer-12238363 $0

