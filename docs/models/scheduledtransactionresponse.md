# ScheduledTransactionResponse

## Example Usage

```typescript
import { ScheduledTransactionResponse } from "ynab-ts/models";
import { RFCDate } from "ynab-ts/types";

let value: ScheduledTransactionResponse = {
  data: {
    scheduledTransaction: {
      id: "e8ea8b08-921e-4876-bf05-020942749962",
      dateFirst: new RFCDate("2024-03-11"),
      dateNext: new RFCDate("2025-10-25"),
      frequency: "everyOtherWeek",
      amount: 326076,
      accountId: "8d8179b9-604a-4c88-9fe3-6d6851daf56e",
      deleted: false,
      accountName: "<value>",
      subtransactions: [],
    },
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `data`                                                                                   | [models.ScheduledTransactionResponseData](../models/scheduledtransactionresponsedata.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |