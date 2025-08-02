# TransactionsResponseData

## Example Usage

```typescript
import { TransactionsResponseData } from "ynab-ts/models";
import { RFCDate } from "ynab-ts/types";

let value: TransactionsResponseData = {
  transactions: [
    {
      id: "<id>",
      date: new RFCDate("2025-10-02"),
      amount: 417843,
      cleared: "reconciled",
      approved: false,
      accountId: "45621025-b16f-4b7b-8805-ac8a3c6588b2",
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
  ],
  serverKnowledge: 376433,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `transactions`                                               | [models.TransactionDetail](../models/transactiondetail.md)[] | :heavy_check_mark:                                           | N/A                                                          |
| `serverKnowledge`                                            | *number*                                                     | :heavy_check_mark:                                           | The knowledge of the server                                  |