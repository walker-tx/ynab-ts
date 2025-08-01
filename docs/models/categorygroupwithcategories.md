# CategoryGroupWithCategories

## Example Usage

```typescript
import { CategoryGroupWithCategories } from "ynab-ts/models";

let value: CategoryGroupWithCategories = {
  id: "4bf2dff1-9fb1-4c85-83d8-f915f61f54f3",
  name: "<value>",
  hidden: true,
  deleted: true,
  categories: [],
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                    | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `name`                                                                                                                  | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `hidden`                                                                                                                | *boolean*                                                                                                               | :heavy_check_mark:                                                                                                      | Whether or not the category group is hidden                                                                             |
| `deleted`                                                                                                               | *boolean*                                                                                                               | :heavy_check_mark:                                                                                                      | Whether or not the category group has been deleted.  Deleted category groups will only be included in delta requests.   |
| `categories`                                                                                                            | [models.Category](../models/category.md)[]                                                                              | :heavy_check_mark:                                                                                                      | Category group categories.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC). |