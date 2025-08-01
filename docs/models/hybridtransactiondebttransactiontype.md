# HybridTransactionDebtTransactionType

If the transaction is a debt/loan account transaction, the type of transaction

## Example Usage

```typescript
import { HybridTransactionDebtTransactionType } from "ynab-ts/models";

let value: HybridTransactionDebtTransactionType = "refund";
```

## Values

```typescript
"payment" | "refund" | "fee" | "interest" | "escrow" | "balanceAdjustment" | "credit" | "charge"
```