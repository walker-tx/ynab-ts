# UpdateTransactionRequest

## Example Usage

```typescript
import { UpdateTransactionRequest } from "ynab-ts/models/operations";

let value: UpdateTransactionRequest = {
  planId: "<id>",
  transactionId: "<id>",
  putTransactionWrapper: {
    transaction: {},
  },
};
```

## Fields

| Field                                                                                                                                                                                     | Type                                                                                                                                                                                      | Required                                                                                                                                                                                  | Description                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `planId`                                                                                                                                                                                  | *string*                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                        | The id of the plan. "last-used" can be used to specify the last used plan and "default" can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan). |
| `transactionId`                                                                                                                                                                           | *string*                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                        | The id of the transaction                                                                                                                                                                 |
| `putTransactionWrapper`                                                                                                                                                                   | [models.PutTransactionWrapper](../../models/puttransactionwrapper.md)                                                                                                                     | :heavy_check_mark:                                                                                                                                                                        | The transaction to update                                                                                                                                                                 |