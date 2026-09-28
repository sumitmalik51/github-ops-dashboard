## Billing watchdog — 2026-09-28

**MTD net: $28738.29** (gross $33854.27) — yesterday: $2605.28 — GHEC seats: 185 — Copilot seats: 1680

```
ghec: $14154.7
copilot: $11885.77
ghas: $2583.93
codespaces: $79.89
code_quality: $34
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$28738.29** |
| → Our Azure sub (enterprise default) | $28738.29 |
| → Cost centers (prepaid credit pools) | $0 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| CL-Labs-04 | 8704.3 | $52.04 |
| Cloudlabs-Enterprises | 2539.3 | $15.21 |
| Cloudlabs-GH-Copilot | 191 | $1.15 |
| Public-sector-hacks-Org | 98 | $0.59 |
| ghas-bootcamp-2026-08-30-2369284 | 10 | $0.06 |
| First-Org-2394817 | 4 | $0.02 |

### 👤 Identity & licenses

SCIM-provisioned identities: **291** — active licenses: **185** — inactive/suspended (est.): **106**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $25977.42** — yesterday: $0.32 — GitHub charges: $25968.09

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $28738.29 |
| Azure sub charge — our account (customer-13304750) | $25918.69 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $2819.60 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$49.4 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $25918.69
customer-6174522 (EXTERNAL): $32.93
customer-13061039 (EXTERNAL): $16.47
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- Yesterday (2026-09-27) net spend $2605.28 exceeds DAILY_LIMIT $2500
- GHAS billing active outside bootcamp orgs: CL-Labs-04/odl-user-2382236_clabs
- GHAS billing active outside bootcamp orgs: Cloudlabs-Enterprises/aiw-devops-with-github-lab-files-new
- GHAS billing active outside bootcamp orgs: Cloudlabs-Enterprises/-aiw-devops-with-github-lab-files
- GHAS billing active outside bootcamp orgs: Cloudlabs-Enterprises/aiw-devops-with-github-lab-files-2399689
- GHAS billing active outside bootcamp orgs: Cloudlabs-Enterprises/aiw-devops-with-github-lab-files-2402014
- Unknown org detected (matches no known pattern): CL-Lab-RAM
- Unknown org detected (matches no known pattern): i333TEST
- Unknown org detected (matches no known pattern): M-sOrg
- External GitHub enterprise(s) charging this Azure sub $49.4 MTD (not customer-13304750): customer-6174522 $32.93, customer-13061039 $16.47, customer-12238363 $0

