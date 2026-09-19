## Billing watchdog — 2026-09-19

**MTD net: $10201.64** (gross $11891.4) — yesterday: $1466.2 — GHEC seats: 167 — Copilot seats: 980

```
ghec: $5014.1
copilot: $4341.5
ghas: $813.4
code_quality: $17.33
codespaces: $15.31
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$10201.64** |
| → Our Azure sub (enterprise default) | $10201.64 |
| → Cost centers (prepaid credit pools) | $0 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| CL-Labs-04 | 2827.9 | $16.91 |
| Cloudlabs-Enterprises | 1032.3 | $6.19 |
| Cloudlabs-GH-Copilot | 68 | $0.41 |
| Public-sector-hacks-Org | 29 | $0.17 |
| ghas-bootcamp-2026-08-30-2369284 | 10 | $0.06 |
| First-Org-2376342 | 1 | $0.01 |

### 👤 Identity & licenses

SCIM-provisioned identities: **275** — active licenses: **167** — inactive/suspended (est.): **108**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $n/a** — yesterday: $n/a — GitHub charges: $8725.22

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $10201.64 |
| Azure sub charge — our account (customer-13304750) | $8692.92 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $1508.72 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$32.3 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $8692.92
customer-6174522 (EXTERNAL): $21.53
customer-13061039 (EXTERNAL): $10.77
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- GHAS billing active outside bootcamp orgs: CL-Labs-04/odl-user-2382236_clabs
- GHAS billing active outside bootcamp orgs: Cloudlabs-Enterprises/aiw-devops-with-github-lab-files-new
- GHAS billing active outside bootcamp orgs: CL-Labs-04/odl-user-2392643_clabs
- External GitHub enterprise(s) charging this Azure sub $32.3 MTD (not customer-13304750): customer-6174522 $21.53, customer-13061039 $10.77, customer-12238363 $0

