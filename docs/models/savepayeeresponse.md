# SavePayeeResponse

## Example Usage

```typescript
import { SavePayeeResponse } from "ynab-ts/models";

let value: SavePayeeResponse = {
  data: {
    payee: {
      id: "ad31d49d-acd9-4ea8-9e6e-f16ca4138335",
      name: "<value>",
      deleted: false,
    },
    serverKnowledge: 470553,
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `data`                                                             | [models.SavePayeeResponseData](../models/savepayeeresponsedata.md) | :heavy_check_mark:                                                 | N/A                                                                |