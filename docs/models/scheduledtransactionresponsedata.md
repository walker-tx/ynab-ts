# ScheduledTransactionResponseData

## Example Usage

```typescript
import { ScheduledTransactionResponseData } from "ynab-ts/models";
import { RFCDate } from "ynab-ts/types";

let value: ScheduledTransactionResponseData = {
  scheduledTransaction: {
    id: "3491b8d6-174a-48dc-84cf-470e80834b63",
    dateFirst: new RFCDate("2025-10-18"),
    dateNext: new RFCDate("2024-02-03"),
    frequency: "every4Months",
    amount: 409372,
    accountId: "10c59b05-f683-43a0-b116-26ac13b6c342",
    deleted: true,
    accountName: "<value>",
    subtransactions: [],
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `scheduledTransaction`                                                       | [models.ScheduledTransactionDetail](../models/scheduledtransactiondetail.md) | :heavy_check_mark:                                                           | N/A                                                                          |