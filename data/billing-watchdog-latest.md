## Billing watchdog — 2026-08-24

**MTD net: $9372.53** (gross $9387.61) — yesterday: $1029.03 — GHEC seats: 293 — Copilot seats: 1021

```
ghec: $5844.77
copilot: $2572.35
ghas: $945.23
code_quality: $7.1
codespaces: $3.08
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$16219.54** |
| → Our Azure sub (enterprise default) | $9372.53 |
| → Cost centers (prepaid credit pools) | $6847.01 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|
| labcluster-POC10-5k-13sep26 | $5000 | $6847.01 | 137% | $-1847 | 19d |
| labcluster-POC11-83k-expiry13Sep26 | $83000 | $0.00 | 0% | $83000 | 19d |

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| CL-Labs-04 | 1952.2 | $11.69 |
| Cloudlabs-Enterprises | 426 | $2.53 |
| ghas-bootcamp-2026-08-05-2343091 | 76 | $0.46 |
| Cloudlabs-GH-Copilot | 49 | $0.29 |
| ghas-bootcamp-2026-07-22-2323169 | 15 | $0.09 |

### 👤 Identity & licenses

SCIM-provisioned identities: **402** — active licenses: **293** — inactive/suspended (est.): **109**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $8385.31** — yesterday: $0.34 — GitHub charges: $8377.5

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $9372.53 |
| Azure sub charge — our account (customer-13304750) | $8337.05 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $1035.48 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$40.45 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $8337.05
customer-6174522 (EXTERNAL): $26.97
customer-13061039 (EXTERNAL): $13.48
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- Anomaly: copilot spent $424.13 yesterday vs $207.6/day 7-day average (>2x)
- External GitHub enterprise(s) charging this Azure sub $40.45 MTD (not customer-13304750): customer-6174522 $26.97, customer-13061039 $13.48, customer-12238363 $0

