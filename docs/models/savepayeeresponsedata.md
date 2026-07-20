# SavePayeeResponseData

## Example Usage

```typescript
import { SavePayeeResponseData } from "ynab-ts/models";

let value: SavePayeeResponseData = {
  payee: {
    id: "8eee0446-116d-4b1f-96f3-a15dbc3e4095",
    name: "<value>",
    deleted: true,
  },
  serverKnowledge: 16971,
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `payee`                            | [models.Payee](../models/payee.md) | :heavy_check_mark:                 | N/A                                |
| `serverKnowledge`                  | *number*                           | :heavy_check_mark:                 | The knowledge of the server        |