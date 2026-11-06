## Billing watchdog — 2026-11-06

**MTD net: $4122.45** (gross $6198.59) — yesterday: $1512.27 — GHEC seats: 650 — Copilot seats: 1120

```
ghec: $2156.7
copilot: $1933.57
ghas: $24.5
code_quality: $4.67
codespaces: $3.02
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$4122.45** |
| → Our Azure sub (enterprise default) | $4122.45 |
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
| CL-Labs-04 | 2056.5 | $12.21 |
| Cloudlabs-Enterprises | 392.6 | $2.41 |
| Cloudlabs-GH-Copilot | 59 | $0.35 |
| ghas-bootcamp-2026-11-05-2460398 | 41 | $0.25 |
| ghas-bootcamp-2026-10-29-2449778 | 23.2 | $0.14 |
| ghas-bootcamp-2026-11-04-2457726 | 11 | $0.07 |

### 👤 Identity & licenses

SCIM-provisioned identities: **1229** — active licenses: **650** — inactive/suspended (est.): **579**

### 🚨 Alerts
- Anomaly: copilot spent $708.7 yesterday vs $163.49/day 7-day average (>2x)
- Anomaly: ghec spent $791.7 yesterday vs $182.5/day 7-day average (>2x)
- GHEC license consumption grew by 262 since last run (388 -> 650) — a large lab may have onboarded (~$5502/mo run-rate)
- Copilot seats grew by 262 since last run (858 -> 1120) (~$4978/mo run-rate)
- GHAS billing active outside bootcamp orgs: Cloudlabs-Enterprises/github-action-2455848
- Unknown org detected (matches no known pattern): devops-org-20261104-2458551
- Unknown org detected (matches no known pattern): devops-org-20261104-2458594
- Unknown org detected (matches no known pattern): devops-org-20261105-2460647
- Unknown org detected (matches no known pattern): PPCC-Workshop

