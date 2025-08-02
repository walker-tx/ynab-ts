# SavePayeeResponse

## Example Usage

```typescript
import { SavePayeeResponse } from "ynab-ts/models";

let value: SavePayeeResponse = {
  data: {
    payee: {
      id: "72c83b58-6a5c-4474-931d-93a26344e3ae",
      name: "<value>",
      deleted: true,
    },
    serverKnowledge: 470553,
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `data`                                                             | [models.SavePayeeResponseData](../models/savepayeeresponsedata.md) | :heavy_check_mark:                                                 | N/A                                                                |