# PlanSummaryResponseData

## Example Usage

```typescript
import { PlanSummaryResponseData } from "ynab-ts/models";

let value: PlanSummaryResponseData = {
  plans: [
    {
      id: "638102b7-817a-4138-929c-a8e7a8547eee",
      name: "<value>",
    },
  ],
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `plans`                                          | [models.PlanSummary](../models/plansummary.md)[] | :heavy_check_mark:                               | N/A                                              |
| `defaultPlan`                                    | [models.DefaultPlan](../models/defaultplan.md)   | :heavy_minus_sign:                               | N/A                                              |