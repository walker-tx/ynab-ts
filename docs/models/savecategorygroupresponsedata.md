# SaveCategoryGroupResponseData

## Example Usage

```typescript
import { SaveCategoryGroupResponseData } from "ynab-ts/models";

let value: SaveCategoryGroupResponseData = {
  categoryGroup: {
    id: "197d65b9-088f-48a1-9818-fab7cf81b6ef",
    name: "<value>",
    hidden: false,
    internal: false,
    deleted: true,
  },
  serverKnowledge: 467155,
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `categoryGroup`                                    | [models.CategoryGroup](../models/categorygroup.md) | :heavy_check_mark:                                 | N/A                                                |
| `serverKnowledge`                                  | *number*                                           | :heavy_check_mark:                                 | The knowledge of the server                        |