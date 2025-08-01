# PutScheduledTransactionWrapper

## Example Usage

```typescript
import { PutScheduledTransactionWrapper } from "ynab-ts/models";
import { RFCDate } from "ynab-ts/types";

let value: PutScheduledTransactionWrapper = {
  scheduledTransaction: {
    accountId: "01919e7e-076b-4fe6-a47a-bc40351e2a56",
    date: new RFCDate("2023-04-11"),
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `scheduledTransaction`                                                   | [models.SaveScheduledTransaction](../models/savescheduledtransaction.md) | :heavy_check_mark:                                                       | N/A                                                                      |