# GetTransactionsByMonthType

If specified, only transactions of the specified type will be included. "uncategorized" and "unapproved" are currently supported.

## Example Usage

```typescript
import { GetTransactionsByMonthType } from "ynab-ts/models/operations";

let value: GetTransactionsByMonthType = "uncategorized";
```

## Values

```typescript
"uncategorized" | "unapproved"
```