# MonthDetailBase

## Example Usage

```typescript
import { MonthDetailBase } from "ynab-ts/models";
import { RFCDate } from "ynab-ts/types";

let value: MonthDetailBase = {
  month: new RFCDate("2026-12-25"),
  income: 528017,
  budgeted: 402110,
  activity: 631598,
  toBeBudgeted: 361347,
  deleted: false,
  categories: [],
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `month`                                                                                                                  | [RFCDate](../types/rfcdate.md)                                                                                           | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `note`                                                                                                                   | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `income`                                                                                                                 | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | The total amount of transactions categorized to 'Inflow: Ready to Assign' in the month                                   |
| `budgeted`                                                                                                               | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | The total amount assigned (budgeted) in the month                                                                        |
| `activity`                                                                                                               | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | The total amount of transactions in the month, excluding those categorized to 'Inflow: Ready to Assign'                  |
| `toBeBudgeted`                                                                                                           | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | The available amount for 'Ready to Assign'                                                                               |
| `ageOfMoney`                                                                                                             | *number*                                                                                                                 | :heavy_minus_sign:                                                                                                       | The Age of Money as of the month                                                                                         |
| `deleted`                                                                                                                | *boolean*                                                                                                                | :heavy_check_mark:                                                                                                       | Whether or not the month has been deleted.  Deleted months will only be included in delta requests.                      |
| `categories`                                                                                                             | [models.CategoryBase](../models/categorybase.md)[]                                                                       | :heavy_check_mark:                                                                                                       | The plan month categories.  Amounts (budgeted, activity, balance, etc.) are specific to the {month} parameter specified. |