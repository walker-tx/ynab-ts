# GetTransactionsByPayeeType

If specified, only transactions of the specified type will be included. "uncategorized" and "unapproved" are currently supported.

## Example Usage

```typescript
import { GetTransactionsByPayeeType } from "ynab-ts/models/operations";

let value: GetTransactionsByPayeeType = "unapproved";
```

## Values

```typescript
"uncategorized" | "unapproved"
```