# SavePayeeResponseData

## Example Usage

```typescript
import { SavePayeeResponseData } from "ynab-ts/models";

let value: SavePayeeResponseData = {
  payee: {
    id: "ad31d49d-acd9-4ea8-9e6e-f16ca4138335",
    name: "<value>",
    deleted: false,
  },
  serverKnowledge: 501080,
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `payee`                            | [models.Payee](../models/payee.md) | :heavy_check_mark:                 | N/A                                |
| `serverKnowledge`                  | *number*                           | :heavy_check_mark:                 | The knowledge of the server        |