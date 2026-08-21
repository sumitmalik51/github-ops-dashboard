## Billing watchdog — 2026-08-21

**MTD net: $6289.98** (gross $6305.06) — yesterday: $754.9 — GHEC seats: 294 — Copilot seats: 1015

```
ghec: $4276.55
copilot: $1301.81
ghas: $703.39
code_quality: $5.16
codespaces: $3.08
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$12007.18** |
| → Our Azure sub (enterprise default) | $6289.98 |
| → Cost centers (prepaid credit pools) | $5717.20 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|
| labcluster-POC10-5k-13sep26 | $5000 | $5717.20 | 114% | $-717 | 22d |
| labcluster-POC11-83k-expiry13Sep26 | $83000 | $0.00 | 0% | $83000 | 22d |

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| CL-Labs-04 | 1952.2 | $11.69 |
| Cloudlabs-Enterprises | 426 | $2.53 |
| ghas-bootcamp-2026-08-05-2343091 | 76 | $0.46 |
| Cloudlabs-GH-Copilot | 49 | $0.29 |
| ghas-bootcamp-2026-07-22-2323169 | 15 | $0.09 |

### 👤 Identity & licenses

SCIM-provisioned identities: **495** — active licenses: **294** — inactive/suspended (est.): **201**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $5570.33** — yesterday: $0.31 — GitHub charges: $5563.57

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $6289.98 |
| Azure sub charge — our account (customer-13304750) | $5528.63 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $761.35 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$34.94 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $5528.63
customer-6174522 (EXTERNAL): $23.29
customer-13061039 (EXTERNAL): $11.65
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- Anomaly: copilot spent $305.23 yesterday vs $43.08/day 7-day average (>2x)
- Copilot seats grew by 197 since last run (818 -> 1015) (~$3743/mo run-rate)
- External GitHub enterprise(s) charging this Azure sub $34.94 MTD (not customer-13304750): customer-6174522 $23.29, customer-13061039 $11.65, customer-12238363 $0

