## Billing watchdog — 2026-09-18

**MTD net: $8735.33** (gross $10267.56) — yesterday: $1465.94 — GHEC seats: 170 — Copilot seats: 977

```
ghec: $4280.5
copilot: $3720.83
ghas: $703.97
code_quality: $16
codespaces: $14.03
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$8735.33** |
| → Our Azure sub (enterprise default) | $8735.33 |
| → Cost centers (prepaid credit pools) | $0 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| CL-Labs-04 | 2732.8 | $16.36 |
| Cloudlabs-Enterprises | 721 | $4.32 |
| Cloudlabs-GH-Copilot | 52 | $0.31 |
| Public-sector-hacks-Org | 29 | $0.17 |
| ghas-bootcamp-2026-08-30-2369284 | 10 | $0.06 |
| First-Org-2376342 | 1 | $0.01 |

### 👤 Identity & licenses

SCIM-provisioned identities: **457** — active licenses: **170** — inactive/suspended (est.): **287**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $7263.25** — yesterday: $0.33 — GitHub charges: $7257.38

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $8735.33 |
| Azure sub charge — our account (customer-13304750) | $7226.98 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $1508.35 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$30.4 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $7226.98
customer-6174522 (EXTERNAL): $20.27
customer-13061039 (EXTERNAL): $10.13
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- Anomaly: copilot spent $618.77 yesterday vs $308.7/day 7-day average (>2x)
- Anomaly: ghec spent $730.8 yesterday vs $351.9/day 7-day average (>2x)
- Copilot seats grew by 258 since last run (719 -> 977) (~$4902/mo run-rate)
- GHAS billing active outside bootcamp orgs: CL-Labs-04/odl-user-2382236_clabs
- External GitHub enterprise(s) charging this Azure sub $30.4 MTD (not customer-13304750): customer-6174522 $20.27, customer-13061039 $10.13, customer-12238363 $0

