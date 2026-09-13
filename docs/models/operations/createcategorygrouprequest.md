# CreateCategoryGroupRequest

## Example Usage

```typescript
import { CreateCategoryGroupRequest } from "ynab-ts/models/operations";

let value: CreateCategoryGroupRequest = {
  planId: "<id>",
  postCategoryGroupWrapper: {
    categoryGroup: {
      name: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                    | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `planId`                                                                                                                                                                                 | *string*                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                       | The id of the plan ("last-used" can be used to specify the last used plan and "default" can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan) |
| `postCategoryGroupWrapper`                                                                                                                                                               | [models.PostCategoryGroupWrapper](../../models/postcategorygroupwrapper.md)                                                                                                              | :heavy_check_mark:                                                                                                                                                                       | The category group to create.                                                                                                                                                            |