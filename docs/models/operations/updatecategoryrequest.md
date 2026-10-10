# UpdateCategoryRequest

## Example Usage

```typescript
import { UpdateCategoryRequest } from "ynab-ts/models/operations";

let value: UpdateCategoryRequest = {
  planId: "<id>",
  categoryId: "<id>",
  patchCategoryWrapper: {
    category: {},
  },
};
```

## Fields

| Field                                                                                                                                                                                     | Type                                                                                                                                                                                      | Required                                                                                                                                                                                  | Description                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `planId`                                                                                                                                                                                  | *string*                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                        | The id of the plan. "last-used" can be used to specify the last used plan and "default" can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan). |
| `categoryId`                                                                                                                                                                              | *string*                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                        | The id of the category                                                                                                                                                                    |
| `patchCategoryWrapper`                                                                                                                                                                    | [models.PatchCategoryWrapper](../../models/patchcategorywrapper.md)                                                                                                                       | :heavy_check_mark:                                                                                                                                                                        | The category to update                                                                                                                                                                    |