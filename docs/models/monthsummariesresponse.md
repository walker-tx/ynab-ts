# MonthSummariesResponse

## Example Usage

```typescript
import { MonthSummariesResponse } from "ynab-ts/models";
import { RFCDate } from "ynab-ts/types";

let value: MonthSummariesResponse = {
  data: {
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
    serverKnowledge: 124299,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `data`                                                                       | [models.MonthSummariesResponseData](../models/monthsummariesresponsedata.md) | :heavy_check_mark:                                                           | N/A                                                                          |