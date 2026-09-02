## Billing watchdog — 2026-09-02

**MTD net: $21.7** (gross $21.7) — yesterday: $11.03 — GHEC seats: 152 — Copilot seats: 170

```
ghec: $11.2
copilot: $8.87
ghas: $1.63
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$273.04** |
| → Our Azure sub (enterprise default) | $21.7 |
| → Cost centers (prepaid credit pools) | $251.34 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|
| labcluster-POC11-83k-expiry13Sep26 | $83000 | $1479.12 | 2% | $81521 | 10d |

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| ghas-bootcamp-2026-08-30-2369284 | 0 | $0 |

### 👤 Identity & licenses

SCIM-provisioned identities: **271** — active licenses: **152** — inactive/suspended (est.): **119**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $n/a** — yesterday: $n/a — GitHub charges: $0

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $21.7 |
| Azure sub charge — our account (customer-13304750) | $0 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $21.70 |

GitHub charges by billing account (MTD):
```

```

### 🚨 Alerts
- GHAS billing active outside bootcamp orgs: CL-Labs-04/odl-user-2369650_clabs
- Cost center 'labcluster-POC11-83k-expiry13Sep26' expires in 10d with $81521 of $83000 still unused (2% consumed)

