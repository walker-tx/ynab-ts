# ScheduledTransactionsResponseData

## Example Usage

```typescript
import { ScheduledTransactionsResponseData } from "ynab-ts/models";

let value: ScheduledTransactionsResponseData = {
  scheduledTransactions: [],
  serverKnowledge: 742499,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `scheduledTransactions`                                                        | [models.ScheduledTransactionDetail](../models/scheduledtransactiondetail.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |
| `serverKnowledge`                                                              | *number*                                                                       | :heavy_check_mark:                                                             | The knowledge of the server                                                    |