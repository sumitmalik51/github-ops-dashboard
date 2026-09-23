## Billing watchdog — 2026-09-23

**MTD net: $16531.71** (gross $19178.61) — yesterday: $1787.83 — GHEC seats: 206 — Copilot seats: 1151

```
ghec: $8148.7
copilot: $6957.17
ghas: $1363.83
codespaces: $39.01
code_quality: $23
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$16531.71** |
| → Our Azure sub (enterprise default) | $16531.71 |
| → Cost centers (prepaid credit pools) | $0 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| CL-Labs-04 | 5696.1 | $34.03 |
| Cloudlabs-Enterprises | 1517.6 | $9.09 |
| Cloudlabs-GH-Copilot | 122 | $0.73 |
| Public-sector-hacks-Org | 98 | $0.59 |
| ghas-bootcamp-2026-08-30-2369284 | 10 | $0.06 |
| i333TEST | 3 | $0.02 |

### 👤 Identity & licenses

SCIM-provisioned identities: **321** — active licenses: **206** — inactive/suspended (est.): **115**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $14724.91** — yesterday: $0.32 — GitHub charges: $14717.32

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $16531.71 |
| Azure sub charge — our account (customer-13304750) | $14677.42 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $1854.29 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$39.9 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $14677.42
customer-6174522 (EXTERNAL): $26.6
customer-13061039 (EXTERNAL): $13.3
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- GHAS billing active outside bootcamp orgs: CL-Labs-04/odl-user-2382236_clabs
- GHAS billing active outside bootcamp orgs: Cloudlabs-Enterprises/aiw-devops-with-github-lab-files-new
- GHAS billing active outside bootcamp orgs: First-Org-2394793/First-Repo-2394793
- GHAS billing active outside bootcamp orgs: First-Org-2394800/First-Repo-2394800
- GHAS billing active outside bootcamp orgs: First-Org-2394795/First-Repo-2394795
- GHAS billing active outside bootcamp orgs: First-Org-2394799/First-Repo-2394799
- GHAS billing active outside bootcamp orgs: First-Org-2394806/First-Repo-2394806
- GHAS billing active outside bootcamp orgs: First-Org-2394804/-First-Repo-2394804
- GHAS billing active outside bootcamp orgs: First-Org-2394808/First-Repo-2394808
- GHAS billing active outside bootcamp orgs: First-Org-2394810/First-Repo-2394810
- GHAS billing active outside bootcamp orgs: First-Org-2394817/First-Repo-2394817
- GHAS billing active outside bootcamp orgs: First-Org-2394811/First-Repo-2394811
- GHAS billing active outside bootcamp orgs: First-Org-2394821/j
- GHAS billing active outside bootcamp orgs: First-Org-2394822/First-Repo-2394822
- GHAS billing active outside bootcamp orgs: First-Org-2394835/First-Repo-2394835
- GHAS billing active outside bootcamp orgs: i333TEST/First-Repo-2394830
- GHAS billing active outside bootcamp orgs: First-Org-2394832/First-Repo-2394832
- GHAS billing active outside bootcamp orgs: First-Org-2394833/First-Repo-2394833
- GHAS billing active outside bootcamp orgs: Cloudlabs-Enterprises/-aiw-devops-with-github-lab-files
- Unknown org detected (matches no known pattern): CL-Lab-RAM
- Unknown org detected (matches no known pattern): i333TEST
- Unknown org detected (matches no known pattern): M-sOrg
- External GitHub enterprise(s) charging this Azure sub $39.9 MTD (not customer-13304750): customer-6174522 $26.6, customer-13061039 $13.3, customer-12238363 $0

