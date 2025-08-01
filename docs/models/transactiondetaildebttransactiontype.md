# TransactionDetailDebtTransactionType

If the transaction is a debt/loan account transaction, the type of transaction

## Example Usage

```typescript
import { TransactionDetailDebtTransactionType } from "ynab-ts/models";

let value: TransactionDetailDebtTransactionType = "interest";
```

## Values

```typescript
"payment" | "refund" | "fee" | "interest" | "escrow" | "balanceAdjustment" | "credit" | "charge"
```