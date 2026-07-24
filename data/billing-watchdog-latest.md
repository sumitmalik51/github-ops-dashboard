## Billing watchdog — 2026-07-24

**MTD net: $10952.22** (gross $11654.38) — yesterday: $931.81 — GHEC seats: 194 — Copilot seats: 886

```
ghec: $6581.81
copilot: $3306
ghas: $1063.77
codespaces: $0.63
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$10963.74** |
| → Our Azure sub (enterprise default) | $10952.22 |
| → Cost centers (prepaid credit pools) | $11.52 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|
| labcluster-POC09-10k-expiry09aug26 | $10000 | $11.52 | 0% | $9988 | 15d |
| labcluster-POC10-5k-13sep26 | $5000 | $0.00 | 0% | $5000 | 50d |
| labcluster-POC11-83k-expiry13Sep26 | $83000 | $0.00 | 0% | $83000 | 50d |

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| Cloudlabs-Enterprises | 7082.2 | $40.13 |
| ghas-bootcamp-2026-07-22-2323169 | 105 | $0.63 |
| Cloudlabs-GH-Copilot | 60 | $0.36 |
| ghas-bootcamp-2026-06-10-2269853 | 23 | $0.14 |
| ghas-bootcamp-2026-06-10-2269869 | 18 | $0.11 |
| ghas-bootcamp-2026-06-11-2270450 | 17 | $0.1 |

### 👤 Identity & licenses

SCIM-provisioned identities: **300** — active licenses: **194** — inactive/suspended (est.): **106**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $17994.28** — yesterday: $0.34 — GitHub charges: $17986.41

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $10952.22 |
| Azure sub charge — our account (customer-13304750) | $9390.73 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $1561.49 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$8595.68 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $9390.73
customer-3863811 (EXTERNAL): $8595.68
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- External GitHub enterprise(s) charging this Azure sub $8595.68 MTD (not customer-13304750): customer-3863811 $8595.68, customer-12238363 $0

