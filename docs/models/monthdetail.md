# MonthDetail

## Example Usage

```typescript
import { MonthDetail } from "ynab-ts/models";
import { RFCDate } from "ynab-ts/types";

let value: MonthDetail = {
  month: new RFCDate("2025-04-22"),
  income: 577129,
  budgeted: 163068,
  activity: 651562,
  toBeBudgeted: 765286,
  deleted: true,
  categories: [],
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `month`                                                                                                                    | [RFCDate](../types/rfcdate.md)                                                                                             | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `note`                                                                                                                     | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `income`                                                                                                                   | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | The total amount of transactions categorized to 'Inflow: Ready to Assign' in the month                                     |
| `budgeted`                                                                                                                 | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | The total amount budgeted in the month                                                                                     |
| `activity`                                                                                                                 | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | The total amount of transactions in the month, excluding those categorized to 'Inflow: Ready to Assign'                    |
| `toBeBudgeted`                                                                                                             | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | The available amount for 'Ready to Assign'                                                                                 |
| `ageOfMoney`                                                                                                               | *number*                                                                                                                   | :heavy_minus_sign:                                                                                                         | The Age of Money as of the month                                                                                           |
| `deleted`                                                                                                                  | *boolean*                                                                                                                  | :heavy_check_mark:                                                                                                         | Whether or not the month has been deleted.  Deleted months will only be included in delta requests.                        |
| `categories`                                                                                                               | [models.Category](../models/category.md)[]                                                                                 | :heavy_check_mark:                                                                                                         | The budget month categories.  Amounts (budgeted, activity, balance, etc.) are specific to the {month} parameter specified. |