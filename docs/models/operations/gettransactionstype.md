# GetTransactionsType

If specified, only transactions of the specified type will be included. "uncategorized" and "unapproved" are currently supported.

## Example Usage

```typescript
import { GetTransactionsType } from "ynab-ts/models/operations";

let value: GetTransactionsType = "uncategorized";
```

## Values

```typescript
"uncategorized" | "unapproved"
```