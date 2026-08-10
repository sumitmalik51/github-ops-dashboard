## Billing watchdog — 2026-08-10

**MTD net: $2056.79** (gross $2071.86) — yesterday: $474.87 — GHEC seats: 192 — Copilot seats: 534

```
ghec: $1144.84
copilot: $691.97
ghas: $214.97
codespaces: $3.08
code_quality: $1.94
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$2522.19** |
| → Our Azure sub (enterprise default) | $2056.79 |
| → Cost centers (prepaid credit pools) | $465.40 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|
| labcluster-POC10-5k-13sep26 | $5000 | $465.40 | 9% | $4535 | 33d |
| labcluster-POC11-83k-expiry13Sep26 | $83000 | $0.00 | 0% | $83000 | 33d |

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| CL-Labs-04 | 1952.2 | $11.69 |
| Cloudlabs-Enterprises | 426 | $2.53 |
| ghas-bootcamp-2026-08-05-2343091 | 76 | $0.46 |
| Cloudlabs-GH-Copilot | 49 | $0.29 |
| ghas-bootcamp-2026-07-22-2323169 | 15 | $0.09 |

### 👤 Identity & licenses

SCIM-provisioned identities: **300** — active licenses: **192** — inactive/suspended (est.): **108**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $1523.86** — yesterday: $0.34 — GitHub charges: $1520.66

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $2056.79 |
| Azure sub charge — our account (customer-13304750) | $1505.95 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $550.84 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$14.71 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $1505.95
customer-6174522 (EXTERNAL): $9.81
customer-13061039 (EXTERNAL): $4.9
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- Anomaly: copilot spent $178.97 yesterday vs $73.2/day 7-day average (>2x)
- Anomaly: ghec spent $251.32 yesterday vs $120.39/day 7-day average (>2x)
- External GitHub enterprise(s) charging this Azure sub $14.71 MTD (not customer-13304750): customer-6174522 $9.81, customer-13061039 $4.9, customer-12238363 $0

