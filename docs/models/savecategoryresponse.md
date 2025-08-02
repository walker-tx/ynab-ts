# SaveCategoryResponse

## Example Usage

```typescript
import { SaveCategoryResponse } from "ynab-ts/models";

let value: SaveCategoryResponse = {
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
    serverKnowledge: 860475,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `data`                                                                   | [models.SaveCategoryResponseData](../models/savecategoryresponsedata.md) | :heavy_check_mark:                                                       | N/A                                                                      |