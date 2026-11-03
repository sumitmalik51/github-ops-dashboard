## Billing watchdog — 2026-11-03

**MTD net: $625.03** (gross $954.55) — yesterday: $458 — GHEC seats: 338 — Copilot seats: 346

```
ghec: $326.9
copilot: $293.23
ghas: $4.9
codespaces: $0
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$625.03** |
| → Our Azure sub (enterprise default) | $625.03 |
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
| CL-Labs-04 | 27 | $0.11 |
| Cloudlabs-GH-Copilot | 25 | $0.15 |
| ghas-bootcamp-2026-10-29-2449778 | 19 | $0.11 |
| Cloudlabs-Enterprises | 6.7 | $0.04 |

### 👤 Identity & licenses

SCIM-provisioned identities: **1030** — active licenses: **338** — inactive/suspended (est.): **692**

### 🚨 Alerts
- Anomaly: copilot spent $215.33 yesterday vs $2.53/day 7-day average (>2x)
- Anomaly: ghec spent $239.4 yesterday vs $3/day 7-day average (>2x)
- GHEC license consumption grew by 225 since last run (113 -> 338) — a large lab may have onboarded (~$4725/mo run-rate)
- Copilot seats grew by 229 since last run (117 -> 346) (~$4351/mo run-rate)
- Unknown org detected (matches no known pattern): PPCC-Workshop

