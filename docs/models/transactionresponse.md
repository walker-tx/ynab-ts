# TransactionResponse

## Example Usage

```typescript
import { TransactionResponse } from "ynab-ts/models";
import { RFCDate } from "ynab-ts/types";

let value: TransactionResponse = {
  data: {
    transaction: {
      id: "<id>",
      date: new RFCDate("2025-04-28"),
      amount: 965869,
      cleared: "uncleared",
      approved: true,
      accountId: "bbee3163-2f52-4be6-9f63-80d510832081",
      deleted: false,
      accountName: "<value>",
      subtransactions: [
        {
          id: "<id>",
          transactionId: "<id>",
          amount: 239600,
          deleted: true,
        },
      ],
    },
    serverKnowledge: 589849,
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `data`                                                                 | [models.TransactionResponseData](../models/transactionresponsedata.md) | :heavy_check_mark:                                                     | N/A                                                                    |