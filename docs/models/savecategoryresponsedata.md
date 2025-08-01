# SaveCategoryResponseData

## Example Usage

```typescript
import { SaveCategoryResponseData } from "ynab-ts/models";

let value: SaveCategoryResponseData = {
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
  serverKnowledge: 311299,
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `category`                               | [models.Category](../models/category.md) | :heavy_check_mark:                       | N/A                                      |
| `serverKnowledge`                        | *number*                                 | :heavy_check_mark:                       | The knowledge of the server              |