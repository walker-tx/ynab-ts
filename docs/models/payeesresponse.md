# PayeesResponse

## Example Usage

```typescript
import { PayeesResponse } from "ynab-ts/models";

let value: PayeesResponse = {
  data: {
    payees: [
      {
        id: "47029738-aa3e-4786-adae-1fbe9c3e99bb",
        name: "<value>",
        deleted: true,
      },
    ],
    serverKnowledge: 986125,
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `data`                                                       | [models.PayeesResponseData](../models/payeesresponsedata.md) | :heavy_check_mark:                                           | N/A                                                          |