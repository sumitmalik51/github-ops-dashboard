## Billing watchdog — 2026-09-21

**MTD net: $13164.95** (gross $14998.97) — yesterday: $1484.73 — GHEC seats: 167 — Copilot seats: 990

```
ghec: $6493.2
copilot: $5592.97
ghas: $1032.27
codespaces: $26.52
code_quality: $20
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$13164.95** |
| → Our Azure sub (enterprise default) | $13164.95 |
| → Cost centers (prepaid credit pools) | $0 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| CL-Labs-04 | 2919 | $17.41 |
| Cloudlabs-Enterprises | 1112 | $6.66 |
| Cloudlabs-GH-Copilot | 95 | $0.57 |
| Public-sector-hacks-Org | 80 | $0.48 |
| ghas-bootcamp-2026-08-30-2369284 | 10 | $0.06 |
| First-Org-2376342 | 1 | $0.01 |

### 👤 Identity & licenses

SCIM-provisioned identities: **275** — active licenses: **167** — inactive/suspended (est.): **108**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $11674.66** — yesterday: $0.32 — GitHub charges: $11667.75

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $13164.95 |
| Azure sub charge — our account (customer-13304750) | $11631.65 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $1533.30 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$36.1 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $11631.65
customer-6174522 (EXTERNAL): $24.07
customer-13061039 (EXTERNAL): $12.03
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- GHAS billing active outside bootcamp orgs: CL-Labs-04/odl-user-2382236_clabs
- GHAS billing active outside bootcamp orgs: Cloudlabs-Enterprises/aiw-devops-with-github-lab-files-new
- GHAS billing active outside bootcamp orgs: CL-Labs-04/odl-user-2392643_clabs
- External GitHub enterprise(s) charging this Azure sub $36.1 MTD (not customer-13304750): customer-6174522 $24.07, customer-13061039 $12.03, customer-12238363 $0

