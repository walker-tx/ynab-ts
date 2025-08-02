# PayeeLocationResponse

## Example Usage

```typescript
import { PayeeLocationResponse } from "ynab-ts/models";

let value: PayeeLocationResponse = {
  data: {
    payeeLocation: {
      id: "30c05c1e-64ef-486c-94a7-14356778332c",
      payeeId: "63109a2b-e9b7-453e-9114-bf11365dbbf3",
      latitude: "-35.5473",
      longitude: "-105.7897",
      deleted: true,
    },
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `data`                                                                     | [models.PayeeLocationResponseData](../models/payeelocationresponsedata.md) | :heavy_check_mark:                                                         | N/A                                                                        |