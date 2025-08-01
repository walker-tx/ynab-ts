# MonthSummary

## Example Usage

```typescript
import { MonthSummary } from "ynab-ts/models";
import { RFCDate } from "ynab-ts/types";

let value: MonthSummary = {
  month: new RFCDate("2025-07-18"),
  income: 903938,
  budgeted: 118492,
  activity: 207115,
  toBeBudgeted: 419681,
  deleted: false,
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `month`                                                                                                 | [RFCDate](../types/rfcdate.md)                                                                          | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `note`                                                                                                  | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `income`                                                                                                | *number*                                                                                                | :heavy_check_mark:                                                                                      | The total amount of transactions categorized to 'Inflow: Ready to Assign' in the month                  |
| `budgeted`                                                                                              | *number*                                                                                                | :heavy_check_mark:                                                                                      | The total amount budgeted in the month                                                                  |
| `activity`                                                                                              | *number*                                                                                                | :heavy_check_mark:                                                                                      | The total amount of transactions in the month, excluding those categorized to 'Inflow: Ready to Assign' |
| `toBeBudgeted`                                                                                          | *number*                                                                                                | :heavy_check_mark:                                                                                      | The available amount for 'Ready to Assign'                                                              |
| `ageOfMoney`                                                                                            | *number*                                                                                                | :heavy_minus_sign:                                                                                      | The Age of Money as of the month                                                                        |
| `deleted`                                                                                               | *boolean*                                                                                               | :heavy_check_mark:                                                                                      | Whether or not the month has been deleted.  Deleted months will only be included in delta requests.     |