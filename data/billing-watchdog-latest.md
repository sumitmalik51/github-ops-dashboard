## Billing watchdog — 2026-09-11

**MTD net: $2621.83** (gross $2621.9) — yesterday: $468.6 — GHEC seats: 144 — Copilot seats: 547

```
ghec: $1304.1
copilot: $1133.03
ghas: $178.03
code_quality: $6.67
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$4111.88** |
| → Our Azure sub (enterprise default) | $2621.83 |
| → Cost centers (prepaid credit pools) | $1490.05 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|
| labcluster-POC11-83k-expiry13Sep26 | $83000 | $2717.83 | 3% | $80282 | 1d |

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| ghas-bootcamp-2026-08-30-2369284 | 10 | $0.06 |
| First-Org-2376342 | 1 | $0.01 |

### 👤 Identity & licenses

SCIM-provisioned identities: **252** — active licenses: **144** — inactive/suspended (est.): **108**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $n/a** — yesterday: $n/a — GitHub charges: $2134.97

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $2621.83 |
| Azure sub charge — our account (customer-13304750) | $2117.87 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $503.96 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$17.1 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $2117.87
customer-6174522 (EXTERNAL): $11.4
customer-13061039 (EXTERNAL): $5.7
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- Anomaly: ghas spent $52.27 yesterday vs $17.5/day 7-day average (>2x)
- GHAS billing active outside bootcamp orgs: First-Org-2376342/First-Repo-2376342
- GHAS billing active outside bootcamp orgs: CL-Labs-04/odl-user-2382236_clabs
- Cost center 'labcluster-POC11-83k-expiry13Sep26' expires in 1d with $80282 of $83000 still unused (3% consumed)
- External GitHub enterprise(s) charging this Azure sub $17.1 MTD (not customer-13304750): customer-6174522 $11.4, customer-13061039 $5.7, customer-12238363 $0

