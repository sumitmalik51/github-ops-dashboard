## Billing watchdog — 2026-08-01

**MTD net: $1.29** (gross $1.37) — yesterday: $0 — GHEC seats: 64 — Copilot seats: 61

```
ghec: $0.68
copilot: $0.61
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$38.86** |
| → Our Azure sub (enterprise default) | $1.29 |
| → Cost centers (prepaid credit pools) | $37.57 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|
| labcluster-POC09-10k-expiry09aug26 | $10000 | $791.48 | 8% | $9209 | 7d |
| labcluster-POC10-5k-13sep26 | $5000 | $0.00 | 0% | $5000 | 42d |
| labcluster-POC11-83k-expiry13Sep26 | $83000 | $0.00 | 0% | $83000 | 42d |

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| Cloudlabs-Enterprises | 11.1 | $0.07 |
| Cloudlabs-GH-Copilot | 3 | $0.02 |
| CL-Labs-04 | 0.1 | $0 |
| ghas-bootcamp-2026-07-22-2323169 | 0 | $0 |

### 👤 Identity & licenses

SCIM-provisioned identities: **178** — active licenses: **64** — inactive/suspended (est.): **114**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $0.01** — yesterday: $0 — GitHub charges: $0

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $1.29 |
| Azure sub charge — our account (customer-13304750) | $0 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $1.29 |

GitHub charges by billing account (MTD):
```

```

### 🚨 Alerts
- Cost center 'labcluster-POC09-10k-expiry09aug26' expires in 7d with $9209 of $10000 still unused (8% consumed)

