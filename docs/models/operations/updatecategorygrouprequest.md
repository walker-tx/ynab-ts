# UpdateCategoryGroupRequest

## Example Usage

```typescript
import { UpdateCategoryGroupRequest } from "ynab-ts/models/operations";

let value: UpdateCategoryGroupRequest = {
  planId: "<id>",
  categoryGroupId: "<id>",
  patchCategoryGroupWrapper: {
    categoryGroup: {
      name: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                     | Type                                                                                                                                                                                      | Required                                                                                                                                                                                  | Description                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `planId`                                                                                                                                                                                  | *string*                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                        | The id of the plan. "last-used" can be used to specify the last used plan and "default" can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan). |
| `categoryGroupId`                                                                                                                                                                         | *string*                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                        | The id of the category group                                                                                                                                                              |
| `patchCategoryGroupWrapper`                                                                                                                                                               | [models.PatchCategoryGroupWrapper](../../models/patchcategorygroupwrapper.md)                                                                                                             | :heavy_check_mark:                                                                                                                                                                        | The category group to update                                                                                                                                                              |