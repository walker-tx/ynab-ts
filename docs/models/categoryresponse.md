# CategoryResponse

## Example Usage

```typescript
import { CategoryResponse } from "ynab-ts/models";

let value: CategoryResponse = {
  data: {
    category: {
      id: "c918abb1-80a5-4e11-a6be-a299e061a503",
      categoryGroupId: "21b36303-d7d6-45d1-a0eb-c02ade2d251f",
      name: "<value>",
      hidden: true,
      budgeted: 373182,
      activity: 396964,
      balance: 944990,
      deleted: false,
    },
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `data`                                                           | [models.CategoryResponseData](../models/categoryresponsedata.md) | :heavy_check_mark:                                               | N/A                                                              |