# PlanSummaryResponse

## Example Usage

```typescript
import { PlanSummaryResponse } from "ynab-ts/models";

let value: PlanSummaryResponse = {
  data: {
    plans: [
      {
        id: "638102b7-817a-4138-929c-a8e7a8547eee",
        name: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `data`                                                                 | [models.PlanSummaryResponseData](../models/plansummaryresponsedata.md) | :heavy_check_mark:                                                     | N/A                                                                    |