# HybridTransactionsResponseData

## Example Usage

```typescript
import { HybridTransactionsResponseData } from "ynab-ts/models";
import { RFCDate } from "ynab-ts/types";

let value: HybridTransactionsResponseData = {
  transactions: [
    {
      id: "<id>",
      date: new RFCDate("2024-09-07"),
      amount: 170634,
      cleared: "uncleared",
      approved: true,
      accountId: "b4b825b7-4526-49ce-9d3d-55ee42f53038",
      deleted: false,
      type: "transaction",
      accountName: "<value>",
    },
  ],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `transactions`                                               | [models.HybridTransaction](../models/hybridtransaction.md)[] | :heavy_check_mark:                                           | N/A                                                          |
| `serverKnowledge`                                            | *number*                                                     | :heavy_minus_sign:                                           | The knowledge of the server                                  |