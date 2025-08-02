# BudgetDetailResponseData

## Example Usage

```typescript
import { BudgetDetailResponseData } from "ynab-ts/models";

let value: BudgetDetailResponseData = {
  budget: {
    id: "5269af24-8b35-4141-8db7-7d6d17229d25",
    name: "<value>",
  },
  serverKnowledge: 360456,
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `budget`                                         | [models.BudgetDetail](../models/budgetdetail.md) | :heavy_check_mark:                               | N/A                                              |
| `serverKnowledge`                                | *number*                                         | :heavy_check_mark:                               | The knowledge of the server                      |