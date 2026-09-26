## Billing watchdog — 2026-09-26

**MTD net: $23527.1** (gross $28557.91) — yesterday: $2608.29 — GHEC seats: 185 — Copilot seats: 1679

```
ghec: $11592.7
copilot: $9776.13
ghas: $2051.47
codespaces: $77.47
code_quality: $29.33
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$23527.10** |
| → Our Azure sub (enterprise default) | $23527.1 |
| → Cost centers (prepaid credit pools) | $0 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| CL-Labs-04 | 8556.1 | $51.2 |
| Cloudlabs-Enterprises | 2475.6 | $14.83 |
| Cloudlabs-GH-Copilot | 161 | $0.97 |
| Public-sector-hacks-Org | 98 | $0.59 |
| ghas-bootcamp-2026-08-30-2369284 | 10 | $0.06 |
| i333TEST | 3 | $0.02 |

### 👤 Identity & licenses

SCIM-provisioned identities: **444** — active licenses: **185** — inactive/suspended (est.): **259**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $20760.06** — yesterday: $0.32 — GitHub charges: $20751.42

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $23527.1 |
| Azure sub charge — our account (customer-13304750) | $20705.82 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $2821.28 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$45.6 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $20705.82
customer-6174522 (EXTERNAL): $30.4
customer-13061039 (EXTERNAL): $15.2
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- Yesterday (2026-09-25) net spend $2608.29 exceeds DAILY_LIMIT $2500
- GHAS billing active outside bootcamp orgs: CL-Labs-04/odl-user-2382236_clabs
- GHAS billing active outside bootcamp orgs: Cloudlabs-Enterprises/aiw-devops-with-github-lab-files-new
- GHAS billing active outside bootcamp orgs: Cloudlabs-Enterprises/-aiw-devops-with-github-lab-files
- GHAS billing active outside bootcamp orgs: Cloudlabs-Enterprises/aiw-devops-with-github-lab-files-2399689
- GHAS billing active outside bootcamp orgs: Cloudlabs-Enterprises/aiw-devops-with-github-lab-files-2402014
- Unknown org detected (matches no known pattern): CL-Lab-RAM
- Unknown org detected (matches no known pattern): i333TEST
- Unknown org detected (matches no known pattern): M-sOrg
- External GitHub enterprise(s) charging this Azure sub $45.6 MTD (not customer-13304750): customer-6174522 $30.4, customer-13061039 $15.2, customer-12238363 $0

