## Billing watchdog — 2026-09-09

**MTD net: $1708.93** (gross $1709) — yesterday: $270.37 — GHEC seats: 45 — Copilot seats: 331

```
ghec: $873.6
copilot: $756.2
ghas: $75.13
code_quality: $4
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$2644.52** |
| → Our Azure sub (enterprise default) | $1708.93 |
| → Cost centers (prepaid credit pools) | $935.59 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|
| labcluster-POC11-83k-expiry13Sep26 | $83000 | $2163.37 | 3% | $80837 | 3d |

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| ghas-bootcamp-2026-08-30-2369284 | 10 | $0.06 |
| First-Org-2376342 | 1 | $0.01 |

### 👤 Identity & licenses

SCIM-provisioned identities: **153** — active licenses: **45** — inactive/suspended (est.): **108**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $n/a** — yesterday: $n/a — GitHub charges: $1416.5

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $1708.93 |
| Azure sub charge — our account (customer-13304750) | $1403.2 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $305.73 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$13.3 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $1403.2
customer-6174522 (EXTERNAL): $8.87
customer-13061039 (EXTERNAL): $4.43
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- GHAS billing active outside bootcamp orgs: First-Org-2376342/First-Repo-2376342
- Cost center 'labcluster-POC11-83k-expiry13Sep26' expires in 3d with $80837 of $83000 still unused (3% consumed)
- External GitHub enterprise(s) charging this Azure sub $13.3 MTD (not customer-13304750): customer-6174522 $8.87, customer-13061039 $4.43, customer-12238363 $0

