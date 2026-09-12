## Billing watchdog — 2026-09-12

**MTD net: $3241.43** (gross $3241.5) — yesterday: $619.6 — GHEC seats: 161 — Copilot seats: 568

```
ghec: $1596
copilot: $1390.8
ghas: $246.63
code_quality: $8
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$4950.03** |
| → Our Azure sub (enterprise default) | $3241.43 |
| → Cost centers (prepaid credit pools) | $1708.60 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|
| labcluster-POC11-83k-expiry13Sep26 | $83000 | $2936.38 | 4% | $80064 | 0d |

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| ghas-bootcamp-2026-08-30-2369284 | 10 | $0.06 |
| First-Org-2376342 | 1 | $0.01 |

### 👤 Identity & licenses

SCIM-provisioned identities: **268** — active licenses: **161** — inactive/suspended (est.): **107**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $2609.25** — yesterday: $0.32 — GitHub charges: $2605.47

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $3241.43 |
| Azure sub charge — our account (customer-13304750) | $2586.47 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $654.96 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$19 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $2586.47
customer-6174522 (EXTERNAL): $12.67
customer-13061039 (EXTERNAL): $6.33
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- Anomaly: ghas spent $68.6 yesterday vs $23.57/day 7-day average (>2x)
- GHAS billing active outside bootcamp orgs: First-Org-2376342/First-Repo-2376342
- GHAS billing active outside bootcamp orgs: CL-Labs-04/odl-user-2382236_clabs
- Cost center 'labcluster-POC11-83k-expiry13Sep26' expires in 0d with $80064 of $83000 still unused (4% consumed)
- External GitHub enterprise(s) charging this Azure sub $19 MTD (not customer-13304750): customer-6174522 $12.67, customer-13061039 $6.33, customer-12238363 $0

