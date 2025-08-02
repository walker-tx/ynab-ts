# UpdateMonthCategoryRequest

## Example Usage

```typescript
import { UpdateMonthCategoryRequest } from "ynab-ts/models/operations";
import { RFCDate } from "ynab-ts/types";

let value: UpdateMonthCategoryRequest = {
  budgetId: "<id>",
  month: new RFCDate("2024-10-06"),
  categoryId: "<id>",
  patchMonthCategoryWrapper: {
    category: {
      budgeted: 109722,
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                             | Type                                                                                                                                                                                              | Required                                                                                                                                                                                          | Description                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `budgetId`                                                                                                                                                                                        | *string*                                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                | The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget). |
| `month`                                                                                                                                                                                           | [RFCDate](../../types/rfcdate.md)                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                | The budget month in ISO format (e.g. 2016-12-01) ("current" can also be used to specify the current calendar month (UTC))                                                                         |
| `categoryId`                                                                                                                                                                                      | *string*                                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                | The id of the category                                                                                                                                                                            |
| `patchMonthCategoryWrapper`                                                                                                                                                                       | [models.PatchMonthCategoryWrapper](../../models/patchmonthcategorywrapper.md)                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                | The category to update.  Only `budgeted` amount can be updated and any other fields specified will be ignored.                                                                                    |