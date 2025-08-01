# TransactionsResponseData

## Example Usage

```typescript
import { TransactionsResponseData } from "ynab-ts/models";
import { RFCDate } from "ynab-ts/types";

let value: TransactionsResponseData = {
  transactions: [
    {
      id: "<id>",
      date: new RFCDate("2025-10-25"),
      amount: 478027,
      cleared: "cleared",
      approved: true,
      accountId: "2e1cef00-ea26-48cd-967c-0f5bf9847295",
      deleted: true,
      accountName: "<value>",
      subtransactions: [],
    },
  ],
  serverKnowledge: 917422,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `transactions`                                               | [models.TransactionDetail](../models/transactiondetail.md)[] | :heavy_check_mark:                                           | N/A                                                          |
| `serverKnowledge`                                            | *number*                                                     | :heavy_check_mark:                                           | The knowledge of the server                                  |