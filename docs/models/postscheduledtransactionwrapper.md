# PostScheduledTransactionWrapper

## Example Usage

```typescript
import { PostScheduledTransactionWrapper } from "ynab-ts/models";
import { RFCDate } from "ynab-ts/types";

let value: PostScheduledTransactionWrapper = {
  scheduledTransaction: {
    accountId: "770d6e29-0239-40f0-97c4-dd8017c801e0",
    date: new RFCDate("2025-12-31"),
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `scheduledTransaction`                                                   | [models.SaveScheduledTransaction](../models/savescheduledtransaction.md) | :heavy_check_mark:                                                       | N/A                                                                      |