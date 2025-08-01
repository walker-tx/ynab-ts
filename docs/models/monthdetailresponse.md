# MonthDetailResponse

## Example Usage

```typescript
import { MonthDetailResponse } from "ynab-ts/models";
import { RFCDate } from "ynab-ts/types";

let value: MonthDetailResponse = {
  data: {
    month: {
      month: new RFCDate("2025-01-02"),
      income: 142295,
      budgeted: 801655,
      activity: 568347,
      toBeBudgeted: 623956,
      deleted: true,
      categories: [],
    },
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `data`                                                                 | [models.MonthDetailResponseData](../models/monthdetailresponsedata.md) | :heavy_check_mark:                                                     | N/A                                                                    |