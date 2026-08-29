## Billing watchdog — 2026-08-29

**MTD net: $15522.66** (gross $15538.16) — yesterday: $1549.48 — GHEC seats: 270 — Copilot seats: 1361

```
ghec: $8947.35
copilot: $5125.71
ghas: $1435.23
code_quality: $11.29
codespaces: $3.08
actions: $0
```

### 💵 GitHub cost routing (MTD)

| Destination | MTD net |
|---|---|
| **Total GitHub enterprise** | **$15847.80** |
| → Our Azure sub (enterprise default) | $15522.66 |
| → Cost centers (prepaid credit pools) | $325.14 |

#### Credit-pool burn-down

| Cost center | Pool | Used (cum.) | % | Remaining | Expires in |
|---|---|---|---|---|---|
| labcluster-POC11-83k-expiry13Sep26 | $83000 | $325.14 | 0% | $82675 | 14d |

### ⚙️ Actions consumption by org (MTD)

| Org | Minutes | Gross |
|---|---|---|
| CL-Labs-04 | 1952.2 | $11.69 |
| Cloudlabs-Enterprises | 426 | $2.53 |
| ghas-bootcamp-2026-08-05-2343091 | 76 | $0.46 |
| ghas-bootcamp-2026-08-27-2366237 | 70 | $0.42 |
| Cloudlabs-GH-Copilot | 49 | $0.29 |
| ghas-bootcamp-2026-07-22-2323169 | 15 | $0.09 |

### 👤 Identity & licenses

SCIM-provisioned identities: **380** — active licenses: **270** — inactive/suspended (est.): **110**

### ☁️ Azure subscription (GitHub billing sub)

**Total sub MTD: $n/a** — yesterday: $n/a — GitHub charges: $14007.47

#### GitHub ↔ Azure reconciliation (our enterprise)

| Source | MTD |
|---|---|
| GitHub billing API (net, enterprise default) | $15522.66 |
| Azure sub charge — our account (customer-13304750) | $13957.82 |
| Difference (GitHub today's accrual not yet posted + reporting lag) | $1564.84 |

#### ⚠️ External GitHub cost on this subscription (NOT our enterprise)

**$49.65 MTD** is billed to this Azure subscription by GitHub enterprise account(s) that are **not** `customer-13304750`:

GitHub charges by billing account (MTD):
```
customer-13304750 (ours): $13957.82
customer-6174522 (EXTERNAL): $33.1
customer-13061039 (EXTERNAL): $16.55
customer-12238363 (EXTERNAL): $0
```

### 🚨 Alerts
- Cost center 'labcluster-POC11-83k-expiry13Sep26' expires in 14d with $82675 of $83000 still unused (0% consumed)
- External GitHub enterprise(s) charging this Azure sub $49.65 MTD (not customer-13304750): customer-6174522 $33.1, customer-13061039 $16.55, customer-12238363 $0

