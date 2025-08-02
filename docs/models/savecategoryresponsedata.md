# SaveCategoryResponseData

## Example Usage

```typescript
import { SaveCategoryResponseData } from "ynab-ts/models";

let value: SaveCategoryResponseData = {
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
  serverKnowledge: 311299,
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `category`                               | [models.Category](../models/category.md) | :heavy_check_mark:                       | N/A                                      |
| `serverKnowledge`                        | *number*                                 | :heavy_check_mark:                       | The knowledge of the server              |