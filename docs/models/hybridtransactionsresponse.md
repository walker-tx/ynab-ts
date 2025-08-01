# HybridTransactionsResponse

## Example Usage

```typescript
import { HybridTransactionsResponse } from "ynab-ts/models";
import { RFCDate } from "ynab-ts/types";

let value: HybridTransactionsResponse = {
  data: {
    transactions: [
      {
        id: "<id>",
        date: new RFCDate("2024-01-11"),
        amount: 299627,
        cleared: "reconciled",
        approved: false,
        accountId: "04e0edce-ac92-4068-b22e-af1a3bc87367",
        deleted: false,
        type: "subtransaction",
        accountName: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `data`                                                                               | [models.HybridTransactionsResponseData](../models/hybridtransactionsresponsedata.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |