## Billing watchdog — 2026-09-27

**MTD net: $26131.68** (gross $31167.23) — yesterday: $2604.58 — GHEC seats: 184 — Copilot seats: 1679

```
ghec: $12873
copilot: $10830.63
ghas: $2317.7
codespaces: $78.68
code_quality: $31.67
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$26131.68** |
| → Our Azure sub (enterprise default) | $26131.68 |
| → Cost centers (prepaid credit pools) | $0 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| CL-Labs-04 | 8634.2 | $51.64 |
| Cloudlabs-Enterprises | 2513.9 | $15.06 |
| Cloudlabs-GH-Copilot | 173 | $1.04 |
| Public-sector-hacks-Org | 98 | $0.59 |
| ghas-bootcamp-2026-08-30-2369284 | 10 | $0.06 |
| First-Org-2394817 | 4 | $0.02 |

### 👤 Identity & licenses

SCIM-provisioned identities: **290** — active licenses: **184** — inactive/suspended (est.): **106**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $23370.59** — yesterday: $0.32 — GitHub charges: $23361.62

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $26131.68 |
| Azure sub charge — our account (customer-13304750) | $23314.12 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $2817.56 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$47.5 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $23314.12
customer-6174522 (EXTERNAL): $31.67
customer-13061039 (EXTERNAL): $15.83
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- Yesterday (2026-09-26) net spend $2604.58 exceeds DAILY_LIMIT $2500
- GHAS billing active outside bootcamp orgs: CL-Labs-04/odl-user-2382236_clabs
- GHAS billing active outside bootcamp orgs: Cloudlabs-Enterprises/aiw-devops-with-github-lab-files-new
- GHAS billing active outside bootcamp orgs: Cloudlabs-Enterprises/-aiw-devops-with-github-lab-files
- GHAS billing active outside bootcamp orgs: Cloudlabs-Enterprises/aiw-devops-with-github-lab-files-2399689
- GHAS billing active outside bootcamp orgs: Cloudlabs-Enterprises/aiw-devops-with-github-lab-files-2402014
- Unknown org detected (matches no known pattern): CL-Lab-RAM
- Unknown org detected (matches no known pattern): i333TEST
- Unknown org detected (matches no known pattern): M-sOrg
- External GitHub enterprise(s) charging this Azure sub $47.5 MTD (not customer-13304750): customer-6174522 $31.67, customer-13061039 $15.83, customer-12238363 $0

