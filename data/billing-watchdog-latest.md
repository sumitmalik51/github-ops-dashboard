## Billing watchdog — 2026-09-14

**MTD net: $4490.67** (gross $4490.73) — yesterday: $624.3 — GHEC seats: 160 — Copilot seats: 568

```
ghec: $2185.4
copilot: $1910.77
ghas: $383.83
code_quality: $10.67
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$6626.29** |
| → Our Azure sub (enterprise default) | $4490.67 |
| → Cost centers (prepaid credit pools) | $2135.62 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|
| labcluster-POC11-83k-expiry13Sep26 | $83000 | $3363.40 | 4% | $79637 | -1d |

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| ghas-bootcamp-2026-08-30-2369284 | 10 | $0.06 |
| First-Org-2376342 | 1 | $0.01 |

### 👤 Identity & licenses

SCIM-provisioned identities: **268** — active licenses: **160** — inactive/suspended (est.): **108**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $n/a** — yesterday: $n/a — GitHub charges: $3852.47

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $4490.67 |
| Azure sub charge — our account (customer-13304750) | $3829.67 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $661.00 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$22.8 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $3829.67
customer-6174522 (EXTERNAL): $15.2
customer-13061039 (EXTERNAL): $7.6
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- GHAS billing active outside bootcamp orgs: First-Org-2376342/First-Repo-2376342
- GHAS billing active outside bootcamp orgs: CL-Labs-04/odl-user-2382236_clabs
- Cost center 'labcluster-POC11-83k-expiry13Sep26' expires in -1d with $79637 of $83000 still unused (4% consumed)
- External GitHub enterprise(s) charging this Azure sub $22.8 MTD (not customer-13304750): customer-6174522 $15.2, customer-13061039 $7.6, customer-12238363 $0

