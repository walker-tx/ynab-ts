# MonthSummariesResponseData

## Example Usage

```typescript
import { MonthSummariesResponseData } from "ynab-ts/models";
import { RFCDate } from "ynab-ts/types";

let value: MonthSummariesResponseData = {
  months: [
    {
      month: new RFCDate("2025-04-05"),
      income: 701986,
      budgeted: 544473,
      activity: 653510,
      toBeBudgeted: 838567,
      deleted: true,
    },
  ],
  serverKnowledge: 520571,
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `months`                                           | [models.MonthSummary](../models/monthsummary.md)[] | :heavy_check_mark:                                 | N/A                                                |
| `serverKnowledge`                                  | *number*                                           | :heavy_check_mark:                                 | The knowledge of the server                        |