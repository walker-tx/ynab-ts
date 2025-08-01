# BudgetDetailResponseData

## Example Usage

```typescript
import { BudgetDetailResponseData } from "ynab-ts/models";

let value: BudgetDetailResponseData = {
  budget: {
    id: "a109ef23-ef1e-4e58-8678-671dac1e684d",
    name: "<value>",
  },
  serverKnowledge: 356463,
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `budget`                                         | [models.BudgetDetail](../models/budgetdetail.md) | :heavy_check_mark:                               | N/A                                              |
| `serverKnowledge`                                | *number*                                         | :heavy_check_mark:                               | The knowledge of the server                      |