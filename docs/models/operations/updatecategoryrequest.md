# UpdateCategoryRequest

## Example Usage

```typescript
import { UpdateCategoryRequest } from "ynab-ts/models/operations";

let value: UpdateCategoryRequest = {
  budgetId: "<id>",
  categoryId: "<id>",
  patchCategoryWrapper: {
    category: {},
  },
};
```

## Fields

| Field                                                                                                                                                                                             | Type                                                                                                                                                                                              | Required                                                                                                                                                                                          | Description                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `budgetId`                                                                                                                                                                                        | *string*                                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                | The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget). |
| `categoryId`                                                                                                                                                                                      | *string*                                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                | The id of the category                                                                                                                                                                            |
| `patchCategoryWrapper`                                                                                                                                                                            | [models.PatchCategoryWrapper](../../models/patchcategorywrapper.md)                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                | The category to update                                                                                                                                                                            |