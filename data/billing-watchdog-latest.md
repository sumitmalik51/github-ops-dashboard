## Billing watchdog — 2026-09-24

**MTD net: $18492.37** (gross $21331.68) — yesterday: $1955.64 — GHEC seats: 187 — Copilot seats: 1241

```
ghec: $9120.3
copilot: $7741.23
ghas: $1559.83
codespaces: $46.33
code_quality: $24.67
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$18492.37** |
| → Our Azure sub (enterprise default) | $18492.37 |
| → Cost centers (prepaid credit pools) | $0 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| CL-Labs-04 | 5776 | $34.49 |
| Cloudlabs-Enterprises | 1866.9 | $11.18 |
| Cloudlabs-GH-Copilot | 134 | $0.8 |
| Public-sector-hacks-Org | 98 | $0.59 |
| ghas-bootcamp-2026-08-30-2369284 | 10 | $0.06 |
| i333TEST | 3 | $0.02 |

### 👤 Identity & licenses

SCIM-provisioned identities: **294** — active licenses: **187** — inactive/suspended (est.): **107**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $16515** — yesterday: $0.33 — GitHub charges: $16507.05

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $18492.37 |
| Azure sub charge — our account (customer-13304750) | $16465.25 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $2027.12 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$41.8 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $16465.25
customer-6174522 (EXTERNAL): $27.87
customer-13061039 (EXTERNAL): $13.93
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- GHAS billing active outside bootcamp orgs: CL-Labs-04/odl-user-2382236_clabs
- GHAS billing active outside bootcamp orgs: Cloudlabs-Enterprises/aiw-devops-with-github-lab-files-new
- GHAS billing active outside bootcamp orgs: Cloudlabs-Enterprises/-aiw-devops-with-github-lab-files
- GHAS billing active outside bootcamp orgs: Cloudlabs-Enterprises/aiw-devops-with-github-lab-files-2399689
- Unknown org detected (matches no known pattern): CL-Lab-RAM
- Unknown org detected (matches no known pattern): i333TEST
- Unknown org detected (matches no known pattern): M-sOrg
- External GitHub enterprise(s) charging this Azure sub $41.8 MTD (not customer-13304750): customer-6174522 $27.87, customer-13061039 $13.93, customer-12238363 $0

