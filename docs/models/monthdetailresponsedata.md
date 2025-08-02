# MonthDetailResponseData

## Example Usage

```typescript
import { MonthDetailResponseData } from "ynab-ts/models";
import { RFCDate } from "ynab-ts/types";

let value: MonthDetailResponseData = {
  month: {
    month: new RFCDate("2024-04-19"),
    income: 588542,
    budgeted: 63736,
    activity: 236819,
    toBeBudgeted: 916783,
    deleted: false,
    categories: [],
  },
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `month`                                        | [models.MonthDetail](../models/monthdetail.md) | :heavy_check_mark:                             | N/A                                            |