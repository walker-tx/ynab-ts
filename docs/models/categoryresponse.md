# CategoryResponse

## Example Usage

```typescript
import { CategoryResponse } from "ynab-ts/models";

let value: CategoryResponse = {
  data: {
    category: {
      id: "89356df0-343f-4d82-ba7c-6df8c1bc3c2e",
      categoryGroupId: "aaecf2a3-9cdf-47d6-8c37-6205d9168f19",
      name: "<value>",
      hidden: false,
      budgeted: 161155,
      activity: 322573,
      balance: 254364,
      deleted: false,
    },
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `data`                                                           | [models.CategoryResponseData](../models/categoryresponsedata.md) | :heavy_check_mark:                                               | N/A                                                              |