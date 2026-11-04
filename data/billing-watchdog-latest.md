## Billing watchdog — 2026-11-04

**MTD net: $1455.21** (gross $2451.88) — yesterday: $824.84 — GHEC seats: 250 — Copilot seats: 615

```
ghec: $760.9
copilot: $682.73
ghas: $9.8
code_quality: $1.33
codespaces: $0.45
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$1455.21** |
| → Our Azure sub (enterprise default) | $1455.21 |
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
| CL-Labs-04 | 1302.1 | $7.74 |
| Cloudlabs-Enterprises | 272.1 | $1.69 |
| Cloudlabs-GH-Copilot | 39 | $0.23 |
| ghas-bootcamp-2026-10-29-2449778 | 23.1 | $0.14 |

### 👤 Identity & licenses

SCIM-provisioned identities: **1105** — active licenses: **250** — inactive/suspended (est.): **855**

### 🚨 Alerts
- Anomaly: copilot spent $386.97 yesterday vs $33.3/day 7-day average (>2x)
- Anomaly: ghec spent $431.2 yesterday vs $37.2/day 7-day average (>2x)
- Copilot seats grew by 269 since last run (346 -> 615) (~$5111/mo run-rate)
- GHAS billing active outside bootcamp orgs: Cloudlabs-Enterprises/github-action-2455848
- Unknown org detected (matches no known pattern): devops-org-20261103-2455848
- Unknown org detected (matches no known pattern): PPCC-Workshop

