# GetTransactionByIdRequest

## Example Usage

```typescript
import { GetTransactionByIdRequest } from "ynab-ts/models/operations";

let value: GetTransactionByIdRequest = {
  planId: "<id>",
  transactionId: "<id>",
};
```

## Fields

| Field                                                                                                                                                                                     | Type                                                                                                                                                                                      | Required                                                                                                                                                                                  | Description                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `planId`                                                                                                                                                                                  | *string*                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                        | The id of the plan. "last-used" can be used to specify the last used plan and "default" can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan). |
| `transactionId`                                                                                                                                                                           | *string*                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                        | The id of the transaction                                                                                                                                                                 |