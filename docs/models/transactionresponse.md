# TransactionResponse

## Example Usage

```typescript
import { TransactionResponse } from "ynab-ts/models";
import { RFCDate } from "ynab-ts/types";

let value: TransactionResponse = {
  data: {
    transaction: {
      id: "<id>",
      date: new RFCDate("2023-01-26"),
      amount: 678323,
      cleared: "uncleared",
      approved: true,
      accountId: "7c5529a9-76ef-4e14-8974-dfbadd3085ff",
      deleted: true,
      accountName: "<value>",
      subtransactions: [
        {
          id: "<id>",
          transactionId: "<id>",
          amount: 666160,
          deleted: true,
        },
      ],
    },
    serverKnowledge: 791544,
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `data`                                                                 | [models.TransactionResponseData](../models/transactionresponsedata.md) | :heavy_check_mark:                                                     | N/A                                                                    |