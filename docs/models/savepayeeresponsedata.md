# SavePayeeResponseData

## Example Usage

```typescript
import { SavePayeeResponseData } from "ynab-ts/models";

let value: SavePayeeResponseData = {
  payee: {
    id: "72c83b58-6a5c-4474-931d-93a26344e3ae",
    name: "<value>",
    deleted: true,
  },
  serverKnowledge: 501080,
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `payee`                            | [models.Payee](../models/payee.md) | :heavy_check_mark:                 | N/A                                |
| `serverKnowledge`                  | *number*                           | :heavy_check_mark:                 | The knowledge of the server        |