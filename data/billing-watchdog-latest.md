## Billing watchdog — 2026-08-02

**MTD net: $3.94** (gross $4.3) — yesterday: $2.65 — GHEC seats: 64 — Copilot seats: 61

```
ghec: $2.71
copilot: $1.23
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$119.62** |
| → Our Azure sub (enterprise default) | $3.94 |
| → Cost centers (prepaid credit pools) | $115.68 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|
| labcluster-POC09-10k-expiry09aug26 | $10000 | $869.59 | 9% | $9130 | 6d |
| labcluster-POC10-5k-13sep26 | $5000 | $0.00 | 0% | $5000 | 41d |
| labcluster-POC11-83k-expiry13Sep26 | $83000 | $0.00 | 0% | $83000 | 41d |

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| Cloudlabs-Enterprises | 49.2 | $0.29 |
| Cloudlabs-GH-Copilot | 6 | $0.04 |
| CL-Labs-04 | 5.3 | $0.03 |
| ghas-bootcamp-2026-07-22-2323169 | 0 | $0 |

### 👤 Identity & licenses

SCIM-provisioned identities: **170** — active licenses: **64** — inactive/suspended (est.): **106**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $0.34** — yesterday: $0.34 — GitHub charges: $0

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $3.94 |
| Azure sub charge — our account (customer-13304750) | $0 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $3.94 |

GitHub charges by billing account (MTD):
```

```

### 🚨 Alerts
- Cost center 'labcluster-POC09-10k-expiry09aug26' expires in 6d with $9130 of $10000 still unused (9% consumed)

