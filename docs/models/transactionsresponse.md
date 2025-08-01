# TransactionsResponse

## Example Usage

```typescript
import { TransactionsResponse } from "ynab-ts/models";
import { RFCDate } from "ynab-ts/types";

let value: TransactionsResponse = {
  data: {
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
    serverKnowledge: 292111,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `data`                                                                   | [models.TransactionsResponseData](../models/transactionsresponsedata.md) | :heavy_check_mark:                                                       | N/A                                                                      |