# SavePayeeResponse

## Example Usage

```typescript
import { SavePayeeResponse } from "ynab-ts/models";

let value: SavePayeeResponse = {
  data: {
    payee: {
      id: "8eee0446-116d-4b1f-96f3-a15dbc3e4095",
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