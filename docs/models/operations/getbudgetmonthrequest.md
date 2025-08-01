# GetBudgetMonthRequest

## Example Usage

```typescript
import { GetBudgetMonthRequest } from "ynab-ts/models/operations";
import { RFCDate } from "ynab-ts/types";

let value: GetBudgetMonthRequest = {
  budgetId: "<id>",
  month: new RFCDate("2024-03-14"),
};
```

## Fields

| Field                                                                                                                                                                                             | Type                                                                                                                                                                                              | Required                                                                                                                                                                                          | Description                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `budgetId`                                                                                                                                                                                        | *string*                                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                | The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget). |
| `month`                                                                                                                                                                                           | [RFCDate](../../types/rfcdate.md)                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                | The budget month in ISO format (e.g. 2016-12-01) ("current" can also be used to specify the current calendar month (UTC))                                                                         |