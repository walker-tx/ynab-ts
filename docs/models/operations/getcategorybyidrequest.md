# GetCategoryByIdRequest

## Example Usage

```typescript
import { GetCategoryByIdRequest } from "ynab-ts/models/operations";

let value: GetCategoryByIdRequest = {
  budgetId: "<id>",
  categoryId: "<id>",
};
```

## Fields

| Field                                                                                                                                                                                             | Type                                                                                                                                                                                              | Required                                                                                                                                                                                          | Description                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `budgetId`                                                                                                                                                                                        | *string*                                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                | The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget). |
| `categoryId`                                                                                                                                                                                      | *string*                                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                | The id of the category                                                                                                                                                                            |