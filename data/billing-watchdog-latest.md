## Billing watchdog — 2026-08-18

**MTD net: $4428.66** (gross $4443.74) — yesterday: $310.81 — GHEC seats: 230 — Copilot seats: 587

```
ghec: $3187.26
copilot: $691.97
ghas: $542.16
code_quality: $4.19
codespaces: $3.08
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$8901.49** |
| → Our Azure sub (enterprise default) | $4428.66 |
| → Cost centers (prepaid credit pools) | $4472.83 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|
| labcluster-POC10-5k-13sep26 | $5000 | $4472.83 | 89% | $527 | 25d |
| labcluster-POC11-83k-expiry13Sep26 | $83000 | $0.00 | 0% | $83000 | 25d |

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| CL-Labs-04 | 1952.2 | $11.69 |
| Cloudlabs-Enterprises | 426 | $2.53 |
| ghas-bootcamp-2026-08-05-2343091 | 76 | $0.46 |
| Cloudlabs-GH-Copilot | 49 | $0.29 |
| ghas-bootcamp-2026-07-22-2323169 | 15 | $0.09 |

### 👤 Identity & licenses

SCIM-provisioned identities: **340** — active licenses: **230** — inactive/suspended (est.): **110**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $4151.66** — yesterday: $0.31 — GitHub charges: $4145.92

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $4428.66 |
| Azure sub charge — our account (customer-13304750) | $4116.5 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $312.16 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$29.42 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $4116.5
customer-6174522 (EXTERNAL): $19.61
customer-13061039 (EXTERNAL): $9.81
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- External GitHub enterprise(s) charging this Azure sub $29.42 MTD (not customer-13304750): customer-6174522 $19.61, customer-13061039 $9.81, customer-12238363 $0

