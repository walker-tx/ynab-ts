# TransactionSummaryBaseDebtTransactionType

If the transaction is a debt/loan account transaction, the type of transaction

## Example Usage

```typescript
import { TransactionSummaryBaseDebtTransactionType } from "ynab-ts/models";

let value: TransactionSummaryBaseDebtTransactionType = "fee";
```

## Values

```typescript
"payment" | "refund" | "fee" | "interest" | "escrow" | "balanceAdjustment" | "credit" | "charge"
```