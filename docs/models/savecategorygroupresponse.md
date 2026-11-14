# SaveCategoryGroupResponse

## Example Usage

```typescript
import { SaveCategoryGroupResponse } from "ynab-ts/models";

let value: SaveCategoryGroupResponse = {
  data: {
    categoryGroup: {
      id: "197d65b9-088f-48a1-9818-fab7cf81b6ef",
      name: "<value>",
      hidden: false,
      internal: false,
      deleted: true,
    },
    serverKnowledge: 337431,
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `data`                                                                             | [models.SaveCategoryGroupResponseData](../models/savecategorygroupresponsedata.md) | :heavy_check_mark:                                                                 | N/A                                                                                |