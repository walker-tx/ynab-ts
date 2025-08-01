# MonthSummariesResponseData

## Example Usage

```typescript
import { MonthSummariesResponseData } from "ynab-ts/models";
import { RFCDate } from "ynab-ts/types";

let value: MonthSummariesResponseData = {
  months: [
    {
      month: new RFCDate("2023-06-08"),
      income: 646984,
      budgeted: 814414,
      activity: 295873,
      toBeBudgeted: 17631,
      deleted: false,
    },
  ],
  serverKnowledge: 753336,
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `months`                                           | [models.MonthSummary](../models/monthsummary.md)[] | :heavy_check_mark:                                 | N/A                                                |
| `serverKnowledge`                                  | *number*                                           | :heavy_check_mark:                                 | The knowledge of the server                        |