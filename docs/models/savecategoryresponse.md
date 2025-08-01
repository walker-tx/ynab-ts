# SaveCategoryResponse

## Example Usage

```typescript
import { SaveCategoryResponse } from "ynab-ts/models";

let value: SaveCategoryResponse = {
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
    serverKnowledge: 860475,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `data`                                                                   | [models.SaveCategoryResponseData](../models/savecategoryresponsedata.md) | :heavy_check_mark:                                                       | N/A                                                                      |