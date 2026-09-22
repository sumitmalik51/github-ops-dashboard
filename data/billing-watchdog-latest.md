## Billing watchdog — 2026-09-22

**MTD net: $14722.54** (gross $16726.61) — yesterday: $1561.03 — GHEC seats: 199 — Copilot seats: 1005

```
ghec: $7268.8
copilot: $6229.47
ghas: $1169.47
codespaces: $33.47
code_quality: $21.33
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$14722.54** |
| → Our Azure sub (enterprise default) | $14722.54 |
| → Cost centers (prepaid credit pools) | $0 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| CL-Labs-04 | 3135 | $18.69 |
| Cloudlabs-Enterprises | 1321.3 | $7.91 |
| Cloudlabs-GH-Copilot | 110 | $0.66 |
| Public-sector-hacks-Org | 95 | $0.57 |
| ghas-bootcamp-2026-08-30-2369284 | 10 | $0.06 |
| i333TEST | 3 | $0.02 |

### 👤 Identity & licenses

SCIM-provisioned identities: **307** — active licenses: **199** — inactive/suspended (est.): **108**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $13161.64** — yesterday: $0.33 — GitHub charges: $13154.38

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $14722.54 |
| Azure sub charge — our account (customer-13304750) | $13116.38 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $1606.16 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$38 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $13116.38
customer-6174522 (EXTERNAL): $25.33
customer-13061039 (EXTERNAL): $12.67
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
- External GitHub enterprise(s) charging this Azure sub $38 MTD (not customer-13304750): customer-6174522 $25.33, customer-13061039 $12.67, customer-12238363 $0

