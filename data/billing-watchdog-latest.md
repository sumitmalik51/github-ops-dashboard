## Billing watchdog — 2026-07-29

**MTD net: $16980.22** (gross $17754.66) — yesterday: $1281.84 — GHEC seats: 198 — Copilot seats: 931

```
ghec: $9639
copilot: $5811.55
ghas: $1528.48
codespaces: $1.18
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$17531.16** |
| → Our Azure sub (enterprise default) | $16980.22 |
| → Cost centers (prepaid credit pools) | $550.94 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|
| labcluster-POC09-10k-expiry09aug26 | $10000 | $550.94 | 6% | $9449 | 10d |
| labcluster-POC10-5k-13sep26 | $5000 | $0.00 | 0% | $5000 | 45d |
| labcluster-POC11-83k-expiry13Sep26 | $83000 | $0.00 | 0% | $83000 | 45d |

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| Cloudlabs-Enterprises | 7341.2 | $41.88 |
| Public-sector-hacks-Org | 1086 | $6.52 |
| CL-Labs-04 | 559 | $3.35 |
| ghas-bootcamp-2026-07-22-2323169 | 123 | $0.74 |
| Cloudlabs-GH-Copilot | 97 | $0.58 |
| ghas-bootcamp-2026-06-10-2269853 | 23 | $0.14 |

### 👤 Identity & licenses

SCIM-provisioned identities: **304** — active licenses: **198** — inactive/suspended (est.): **106**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $22455.24** — yesterday: $0.34 — GitHub charges: $22445.73

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $16980.22 |
| Azure sub charge — our account (customer-13304750) | $13850.05 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $3130.17 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$8595.68 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $13850.05
customer-3863811 (EXTERNAL): $8595.68
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- Cost center 'labcluster-POC09-10k-expiry09aug26' expires in 10d with $9449 of $10000 still unused (6% consumed)
- External GitHub enterprise(s) charging this Azure sub $8595.68 MTD (not customer-13304750): customer-3863811 $8595.68, customer-12238363 $0

