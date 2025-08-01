# UpdateTransactionRequest

## Example Usage

```typescript
import { UpdateTransactionRequest } from "ynab-ts/models/operations";

let value: UpdateTransactionRequest = {
  budgetId: "<id>",
  transactionId: "<id>",
  putTransactionWrapper: {
    transaction: {},
  },
};
```

## Fields

| Field                                                                                                                                                                                             | Type                                                                                                                                                                                              | Required                                                                                                                                                                                          | Description                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `budgetId`                                                                                                                                                                                        | *string*                                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                | The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget). |
| `transactionId`                                                                                                                                                                                   | *string*                                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                | The id of the transaction                                                                                                                                                                         |
| `putTransactionWrapper`                                                                                                                                                                           | [models.PutTransactionWrapper](../../models/puttransactionwrapper.md)                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                | The transaction to update                                                                                                                                                                         |