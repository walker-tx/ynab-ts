# MonthDetailResponseData

## Example Usage

```typescript
import { MonthDetailResponseData } from "ynab-ts/models";
import { RFCDate } from "ynab-ts/types";

let value: MonthDetailResponseData = {
  month: {
    month: new RFCDate("2025-01-02"),
    income: 142295,
    budgeted: 801655,
    activity: 568347,
    toBeBudgeted: 623956,
    deleted: true,
    categories: [],
  },
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `month`                                        | [models.MonthDetail](../models/monthdetail.md) | :heavy_check_mark:                             | N/A                                            |