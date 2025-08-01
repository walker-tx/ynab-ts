# CreateScheduledTransactionRequest

## Example Usage

```typescript
import { CreateScheduledTransactionRequest } from "ynab-ts/models/operations";
import { RFCDate } from "ynab-ts/types";

let value: CreateScheduledTransactionRequest = {
  budgetId: "<id>",
  postScheduledTransactionWrapper: {
    scheduledTransaction: {
      accountId: "01919e7e-076b-4fe6-a47a-bc40351e2a56",
      date: new RFCDate("2023-04-11"),
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                             | Type                                                                                                                                                                                              | Required                                                                                                                                                                                          | Description                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `budgetId`                                                                                                                                                                                        | *string*                                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                | The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget). |
| `postScheduledTransactionWrapper`                                                                                                                                                                 | [models.PostScheduledTransactionWrapper](../../models/postscheduledtransactionwrapper.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                                                | The scheduled transaction to create                                                                                                                                                               |