## Billing watchdog — 2026-09-25

**MTD net: $20919.73** (gross $24424.6) — yesterday: $2284.94 — GHEC seats: 290 — Copilot seats: 1554

```
ghec: $10312.4
copilot: $8721
ghas: $1785.23
codespaces: $74.1
code_quality: $27
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$20919.73** |
| → Our Azure sub (enterprise default) | $20919.73 |
| → Cost centers (prepaid credit pools) | $0 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| CL-Labs-04 | 7344.1 | $43.95 |
| Cloudlabs-Enterprises | 2167.3 | $12.99 |
| Cloudlabs-GH-Copilot | 151 | $0.91 |
| Public-sector-hacks-Org | 98 | $0.59 |
| ghas-bootcamp-2026-08-30-2369284 | 10 | $0.06 |
| i333TEST | 3 | $0.02 |

### 👤 Identity & licenses

SCIM-provisioned identities: **517** — active licenses: **290** — inactive/suspended (est.): **227**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $18472.89** — yesterday: $0.34 — GitHub charges: $18464.59

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $20919.73 |
| Azure sub charge — our account (customer-13304750) | $18420.89 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $2498.84 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$43.7 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $18420.89
customer-6174522 (EXTERNAL): $29.13
customer-13061039 (EXTERNAL): $14.57
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- Copilot seats grew by 313 since last run (1241 -> 1554) (~$5947/mo run-rate)
- GHAS billing active outside bootcamp orgs: CL-Labs-04/odl-user-2382236_clabs
- GHAS billing active outside bootcamp orgs: Cloudlabs-Enterprises/aiw-devops-with-github-lab-files-new
- GHAS billing active outside bootcamp orgs: Cloudlabs-Enterprises/-aiw-devops-with-github-lab-files
- GHAS billing active outside bootcamp orgs: Cloudlabs-Enterprises/aiw-devops-with-github-lab-files-2399689
- Unknown org detected (matches no known pattern): CL-Lab-RAM
- Unknown org detected (matches no known pattern): i333TEST
- Unknown org detected (matches no known pattern): M-sOrg
- External GitHub enterprise(s) charging this Azure sub $43.7 MTD (not customer-13304750): customer-6174522 $29.13, customer-13061039 $14.57, customer-12238363 $0

