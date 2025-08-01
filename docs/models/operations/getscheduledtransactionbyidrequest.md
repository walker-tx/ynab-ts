# GetScheduledTransactionByIdRequest

## Example Usage

```typescript
import { GetScheduledTransactionByIdRequest } from "ynab-ts/models/operations";

let value: GetScheduledTransactionByIdRequest = {
  budgetId: "<id>",
  scheduledTransactionId: "<id>",
};
```

## Fields

| Field                                                                                                                                                                                             | Type                                                                                                                                                                                              | Required                                                                                                                                                                                          | Description                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `budgetId`                                                                                                                                                                                        | *string*                                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                | The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget). |
| `scheduledTransactionId`                                                                                                                                                                          | *string*                                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                | The id of the scheduled transaction                                                                                                                                                               |