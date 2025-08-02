# PayeeLocationsResponse

## Example Usage

```typescript
import { PayeeLocationsResponse } from "ynab-ts/models";

let value: PayeeLocationsResponse = {
  data: {
    payeeLocations: [
      {
        id: "a338ff8d-1da5-4734-82e6-e617b6844828",
        payeeId: "eb6bdddc-9122-4660-bd20-eb4b13c674c2",
        latitude: "-7.8587",
        longitude: "139.0737",
        deleted: true,
      },
    ],
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `data`                                                                       | [models.PayeeLocationsResponseData](../models/payeelocationsresponsedata.md) | :heavy_check_mark:                                                           | N/A                                                                          |