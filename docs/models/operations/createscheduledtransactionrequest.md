# CreateScheduledTransactionRequest

## Example Usage

```typescript
import { CreateScheduledTransactionRequest } from "ynab-ts/models/operations";
import { RFCDate } from "ynab-ts/types";

let value: CreateScheduledTransactionRequest = {
  planId: "<id>",
  postScheduledTransactionWrapper: {
    scheduledTransaction: {
      accountId: "770d6e29-0239-40f0-97c4-dd8017c801e0",
      date: new RFCDate("2026-12-31"),
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                     | Type                                                                                                                                                                                      | Required                                                                                                                                                                                  | Description                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `planId`                                                                                                                                                                                  | *string*                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                        | The id of the plan. "last-used" can be used to specify the last used plan and "default" can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan). |
| `postScheduledTransactionWrapper`                                                                                                                                                         | [models.PostScheduledTransactionWrapper](../../models/postscheduledtransactionwrapper.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                                        | The scheduled transaction to create                                                                                                                                                       |