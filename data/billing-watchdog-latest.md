## Billing watchdog — 2026-08-27

**MTD net: $12898.66** (gross $12913.74) — yesterday: $1211.81 — GHEC seats: 274 — Copilot seats: 1148

```
ghec: $7635.19
copilot: $4040.26
ghas: $1210.77
code_quality: $9.35
codespaces: $3.08
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$21002.16** |
| → Our Azure sub (enterprise default) | $12898.66 |
| → Cost centers (prepaid credit pools) | $8103.50 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|
| labcluster-POC10-5k-13sep26 | $5000 | $8103.50 | 162% | $-3104 | 16d |
| labcluster-POC11-83k-expiry13Sep26 | $83000 | $0.00 | 0% | $83000 | 16d |

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| CL-Labs-04 | 1952.2 | $11.69 |
| Cloudlabs-Enterprises | 426 | $2.53 |
| ghas-bootcamp-2026-08-05-2343091 | 76 | $0.46 |
| Cloudlabs-GH-Copilot | 49 | $0.29 |
| ghas-bootcamp-2026-07-22-2323169 | 15 | $0.09 |

### 👤 Identity & licenses

SCIM-provisioned identities: **388** — active licenses: **274** — inactive/suspended (est.): **114**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $11558.52** — yesterday: $0.34 — GitHub charges: $11549.66

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $12898.66 |
| Azure sub charge — our account (customer-13304750) | $11503.69 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $1394.97 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$45.97 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $11503.69
customer-6174522 (EXTERNAL): $30.65
customer-13061039 (EXTERNAL): $15.32
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- External GitHub enterprise(s) charging this Azure sub $45.97 MTD (not customer-13304750): customer-6174522 $30.65, customer-13061039 $15.32, customer-12238363 $0

