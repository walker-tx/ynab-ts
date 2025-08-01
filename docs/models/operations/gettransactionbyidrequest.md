# GetTransactionByIdRequest

## Example Usage

```typescript
import { GetTransactionByIdRequest } from "ynab-ts/models/operations";

let value: GetTransactionByIdRequest = {
  budgetId: "<id>",
  transactionId: "<id>",
};
```

## Fields

| Field                                                                                                                                                                                             | Type                                                                                                                                                                                              | Required                                                                                                                                                                                          | Description                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `budgetId`                                                                                                                                                                                        | *string*                                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                | The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget). |
| `transactionId`                                                                                                                                                                                   | *string*                                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                | The id of the transaction                                                                                                                                                                         |