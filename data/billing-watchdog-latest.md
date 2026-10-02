## Billing watchdog — 2026-10-02

**MTD net: $212.05** (gross $1003.97) — yesterday: $210.46 — GHEC seats: 133 — Copilot seats: 145

```
ghec: $121.26
copilot: $88.87
codespaces: $1.92
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$212.05** |
| → Our Azure sub (enterprise default) | $212.05 |
| → Cost centers (prepaid credit pools) | $0 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| CL-Labs-04 | 238.9 | $1.41 |
| Cloudlabs-Enterprises | 26.4 | $0.16 |
| Cloudlabs-GH-Copilot | 21 | $0.13 |
| Public-sector-hacks-Org | 10 | $0.06 |

### 👤 Identity & licenses

SCIM-provisioned identities: **241** — active licenses: **133** — inactive/suspended (est.): **108**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $0.32** — yesterday: $0.32 — GitHub charges: $0

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $212.05 |
| Azure sub charge — our account (customer-13304750) | $0 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $212.05 |

GitHub charges by billing account (MTD):
```

```

### 🚨 Alerts
- Anomaly: copilot spent $88.87 yesterday vs $0/day 7-day average (>2x)
- Anomaly: ghec spent $119.9 yesterday vs $0/day 7-day average (>2x)

