# CreateScheduledTransactionRequest

## Example Usage

```typescript
import { CreateScheduledTransactionRequest } from "ynab-ts/models/operations";
import { RFCDate } from "ynab-ts/types";

let value: CreateScheduledTransactionRequest = {
  budgetId: "<id>",
  postScheduledTransactionWrapper: {
    scheduledTransaction: {
      accountId: "770d6e29-0239-40f0-97c4-dd8017c801e0",
      date: new RFCDate("2025-12-31"),
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                             | Type                                                                                                                                                                                              | Required                                                                                                                                                                                          | Description                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `budgetId`                                                                                                                                                                                        | *string*                                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                | The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget). |
| `postScheduledTransactionWrapper`                                                                                                                                                                 | [models.PostScheduledTransactionWrapper](../../models/postscheduledtransactionwrapper.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                                                | The scheduled transaction to create                                                                                                                                                               |