# SaveCategoryResponse

## Example Usage

```typescript
import { SaveCategoryResponse } from "ynab-ts/models";

let value: SaveCategoryResponse = {
  data: {
    category: {
      id: "44e829ea-9c29-41e5-8539-b7d5e9ea271a",
      categoryGroupId: "92b282d6-38ca-4386-a9bc-31e503f2c0f2",
      name: "<value>",
      hidden: true,
      internal: true,
      budgeted: 971696,
      activity: 109157,
      balance: 656143,
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