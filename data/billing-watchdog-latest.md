## Billing watchdog — 2026-10-24

**MTD net: $16508.31** (gross $28903.23) — yesterday: $2137.81 — GHEC seats: 639 — Copilot seats: 1291

```
ghec: $8843.71
copilot: $7602.42
codespaces: $26.37
code_quality: $20
ghas: $15.81
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$16508.31** |
| → Our Azure sub (enterprise default) | $16508.31 |
| → Cost centers (prepaid credit pools) | $0 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| CL-Labs-04 | 2912 | $16.94 |
| Cloudlabs-Enterprises | 1544.9 | $9.22 |
| Cloudlabs-GH-Copilot | 294 | $1.76 |
| Public-sector-hacks-Org | 10 | $0.06 |

### 👤 Identity & licenses

SCIM-provisioned identities: **799** — active licenses: **639** — inactive/suspended (est.): **160**

### 🚨 Alerts
- Anomaly: copilot spent $1184.26 yesterday vs $522.08/day 7-day average (>2x)
- GHEC license consumption grew by 204 since last run (435 -> 639) — a large lab may have onboarded (~$4284/mo run-rate)
- Copilot seats grew by 204 since last run (1087 -> 1291) (~$3876/mo run-rate)
- GHAS billing active outside bootcamp orgs: odl-user-2417469_clabs/pod4
- GHAS billing active outside bootcamp orgs: odl-user-2425484_clabs/authbridge
- GHAS billing active outside bootcamp orgs: odl-user-2425511_clabs/zipit
- GHAS billing active outside bootcamp orgs: odl-user-2425520_clabs/counterpart
- Unknown org detected (matches no known pattern): PPCC-Workshop

