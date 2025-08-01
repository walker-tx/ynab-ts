# GetTransactionsByAccountType

If specified, only transactions of the specified type will be included. "uncategorized" and "unapproved" are currently supported.

## Example Usage

```typescript
import { GetTransactionsByAccountType } from "ynab-ts/models/operations";

let value: GetTransactionsByAccountType = "unapproved";
```

## Values

```typescript
"uncategorized" | "unapproved"
```