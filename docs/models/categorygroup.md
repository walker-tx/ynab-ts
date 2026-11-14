# CategoryGroup

## Example Usage

```typescript
import { CategoryGroup } from "ynab-ts/models";

let value: CategoryGroup = {
  id: "353816fa-1eb8-4fbf-b981-b7699f54af9f",
  name: "<value>",
  hidden: true,
  internal: false,
  deleted: true,
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                  | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `name`                                                                                                                | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `hidden`                                                                                                              | *boolean*                                                                                                             | :heavy_check_mark:                                                                                                    | Whether or not the category group is hidden                                                                           |
| `internal`                                                                                                            | *boolean*                                                                                                             | :heavy_check_mark:                                                                                                    | Whether or not the category group is internal                                                                         |
| `deleted`                                                                                                             | *boolean*                                                                                                             | :heavy_check_mark:                                                                                                    | Whether or not the category group has been deleted.  Deleted category groups will only be included in delta requests. |