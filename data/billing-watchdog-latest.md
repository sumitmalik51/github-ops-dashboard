## Billing watchdog — 2026-09-29

**MTD net: $31362.04** (gross $36560.24) — yesterday: $2622.42 — GHEC seats: 187 — Copilot seats: 1688

```
ghec: $15445.5
copilot: $12945.97
ghas: $2851.8
codespaces: $82.44
code_quality: $36.33
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$31362.04** |
| → Our Azure sub (enterprise default) | $31362.04 |
| → Cost centers (prepaid credit pools) | $0 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| CL-Labs-04 | 8877.4 | $53.05 |
| Cloudlabs-Enterprises | 2826.6 | $16.93 |
| Cloudlabs-GH-Copilot | 203 | $1.22 |
| Public-sector-hacks-Org | 98 | $0.59 |
| ghas-bootcamp-2026-08-30-2369284 | 10 | $0.06 |
| First-Org-2394817 | 4 | $0.02 |

### 👤 Identity & licenses

SCIM-provisioned identities: **294** — active licenses: **187** — inactive/suspended (est.): **107**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $28584.94** — yesterday: $0.32 — GitHub charges: $28575.27

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $31362.04 |
| Azure sub charge — our account (customer-13304750) | $28523.97 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $2838.07 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$51.3 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $28523.97
customer-6174522 (EXTERNAL): $34.2
customer-13061039 (EXTERNAL): $17.1
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- Yesterday (2026-09-28) net spend $2622.42 exceeds DAILY_LIMIT $2500
- GHAS billing active outside bootcamp orgs: CL-Labs-04/odl-user-2382236_clabs
- GHAS billing active outside bootcamp orgs: Cloudlabs-Enterprises/aiw-devops-with-github-lab-files-new
- GHAS billing active outside bootcamp orgs: Cloudlabs-Enterprises/-aiw-devops-with-github-lab-files
- GHAS billing active outside bootcamp orgs: Cloudlabs-Enterprises/aiw-devops-with-github-lab-files-2399689
- GHAS billing active outside bootcamp orgs: Cloudlabs-Enterprises/aiw-devops-with-github-lab-files-2402014
- GHAS billing active outside bootcamp orgs: Cloudlabs-Enterprises/aiw-devops-with-github-lab-files-2405918
- Unknown org detected (matches no known pattern): CL-Lab-RAM
- Unknown org detected (matches no known pattern): i333TEST
- Unknown org detected (matches no known pattern): M-sOrg
- External GitHub enterprise(s) charging this Azure sub $51.3 MTD (not customer-13304750): customer-6174522 $34.2, customer-13061039 $17.1, customer-12238363 $0

