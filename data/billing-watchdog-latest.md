## Billing watchdog — 2026-11-05

**MTD net: $2609.37** (gross $3931.63) — yesterday: $1118.86 — GHEC seats: 388 — Copilot seats: 858

```
ghec: $1365
copilot: $1224.23
ghas: $16.33
code_quality: $3
codespaces: $0.81
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$2609.37** |
| → Our Azure sub (enterprise default) | $2609.37 |
| → Cost centers (prepaid credit pools) | $0.00 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|
| PPCC2000 | $0 | $0.00 | 0% | $0 | — |
| PPCC2500 | $0 | $1221.94 | 0% | $0 | — |
| PPCC3000 | $0 | $0.00 | 0% | $0 | — |
| PPCC7500 | $0 | $1408.18 | 0% | $0 | — |

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| CL-Labs-04 | 1910.6 | $11.36 |
| Cloudlabs-Enterprises | 343.4 | $2.11 |
| Cloudlabs-GH-Copilot | 49 | $0.29 |
| ghas-bootcamp-2026-10-29-2449778 | 23.1 | $0.14 |
| ghas-bootcamp-2026-11-04-2457726 | 11 | $0.07 |
| devops-org-20261103-2455848 | 4 | $0.02 |

### 👤 Identity & licenses

SCIM-provisioned identities: **1155** — active licenses: **388** — inactive/suspended (est.): **767**

### 🚨 Alerts
- Anomaly: copilot spent $524.4 yesterday vs $88.58/day 7-day average (>2x)
- Anomaly: ghec spent $585.9 yesterday vs $98.8/day 7-day average (>2x)
- Copilot seats grew by 243 since last run (615 -> 858) (~$4617/mo run-rate)
- GHAS billing active outside bootcamp orgs: Cloudlabs-Enterprises/github-action-2455848
- Unknown org detected (matches no known pattern): devops-org-20261104-2458551
- Unknown org detected (matches no known pattern): devops-org-20261104-2458594
- Unknown org detected (matches no known pattern): PPCC-Workshop

