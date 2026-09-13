# UpdateScheduledTransactionRequest

## Example Usage

```typescript
import { UpdateScheduledTransactionRequest } from "ynab-ts/models/operations";
import { RFCDate } from "ynab-ts/types";

let value: UpdateScheduledTransactionRequest = {
  planId: "<id>",
  scheduledTransactionId: "<id>",
  putScheduledTransactionWrapper: {
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
| `scheduledTransactionId`                                                                                                                                                                  | *string*                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                        | The id of the scheduled transaction                                                                                                                                                       |
| `putScheduledTransactionWrapper`                                                                                                                                                          | [models.PutScheduledTransactionWrapper](../../models/putscheduledtransactionwrapper.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                                        | The scheduled transaction to update                                                                                                                                                       |