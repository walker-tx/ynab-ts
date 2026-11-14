# CreateCategoryRequest

## Example Usage

```typescript
import { CreateCategoryRequest } from "ynab-ts/models/operations";

let value: CreateCategoryRequest = {
  planId: "<id>",
  postCategoryWrapper: {
    category: {
      name: "<value>",
      categoryGroupId: "66625b5e-be5d-4c71-93e7-5084a420214d",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                    | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `planId`                                                                                                                                                                                 | *string*                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                       | The id of the plan ("last-used" can be used to specify the last used plan and "default" can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan) |
| `postCategoryWrapper`                                                                                                                                                                    | [models.PostCategoryWrapper](../../models/postcategorywrapper.md)                                                                                                                        | :heavy_check_mark:                                                                                                                                                                       | The category to create.                                                                                                                                                                  |