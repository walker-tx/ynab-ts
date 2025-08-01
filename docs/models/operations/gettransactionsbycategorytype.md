# GetTransactionsByCategoryType

If specified, only transactions of the specified type will be included. "uncategorized" and "unapproved" are currently supported.

## Example Usage

```typescript
import { GetTransactionsByCategoryType } from "ynab-ts/models/operations";

let value: GetTransactionsByCategoryType = "unapproved";
```

## Values

```typescript
"uncategorized" | "unapproved"
```