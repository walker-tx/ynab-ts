# BudgetSummaryResponseData

## Example Usage

```typescript
import { BudgetSummaryResponseData } from "ynab-ts/models";

let value: BudgetSummaryResponseData = {
  budgets: [
    {
      id: "e543211a-f628-4437-aba3-db6ac39a8ee8",
      name: "<value>",
    },
  ],
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `budgets`                                            | [models.BudgetSummary](../models/budgetsummary.md)[] | :heavy_check_mark:                                   | N/A                                                  |
| `defaultBudget`                                      | [models.BudgetSummary](../models/budgetsummary.md)   | :heavy_minus_sign:                                   | N/A                                                  |