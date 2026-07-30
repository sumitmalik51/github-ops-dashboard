## Billing watchdog — 2026-07-30

**MTD net: $18331** (gross $19106.93) — yesterday: $1343.5 — GHEC seats: 186 — Copilot seats: 935

```
ghec: $10365.19
copilot: $6341.1
ghas: $1623.32
codespaces: $1.39
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$18976.48** |
| → Our Azure sub (enterprise default) | $18331 |
| → Cost centers (prepaid credit pools) | $645.48 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|
| labcluster-POC09-10k-expiry09aug26 | $10000 | $645.48 | 6% | $9355 | 9d |
| labcluster-POC10-5k-13sep26 | $5000 | $0.00 | 0% | $5000 | 44d |
| labcluster-POC11-83k-expiry13Sep26 | $83000 | $0.00 | 0% | $83000 | 44d |

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| Cloudlabs-Enterprises | 7367.4 | $42.03 |
| Public-sector-hacks-Org | 1086 | $6.52 |
| CL-Labs-04 | 571.2 | $3.42 |
| ghas-bootcamp-2026-07-22-2323169 | 128 | $0.77 |
| Cloudlabs-GH-Copilot | 100 | $0.6 |
| ghas-bootcamp-2026-06-10-2269853 | 23 | $0.14 |

### 👤 Identity & licenses

SCIM-provisioned identities: **295** — active licenses: **186** — inactive/suspended (est.): **109**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $23726.77** — yesterday: $0.34 — GitHub charges: $23716.93

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $18331 |
| Azure sub charge — our account (customer-13304750) | $15121.25 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $3209.75 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$8595.68 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $15121.25
customer-3863811 (EXTERNAL): $8595.68
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- Cost center 'labcluster-POC09-10k-expiry09aug26' expires in 9d with $9355 of $10000 still unused (6% consumed)
- External GitHub enterprise(s) charging this Azure sub $8595.68 MTD (not customer-13304750): customer-3863811 $8595.68, customer-12238363 $0

