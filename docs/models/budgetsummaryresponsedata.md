# BudgetSummaryResponseData

## Example Usage

```typescript
import { BudgetSummaryResponseData } from "ynab-ts/models";

let value: BudgetSummaryResponseData = {
  budgets: [
    {
      id: "9f01d3ad-0a21-4eb0-80b5-de0cdeff7cfc",
      name: "<value>",
    },
  ],
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `budgets`                                            | [models.BudgetSummary](../models/budgetsummary.md)[] | :heavy_check_mark:                                   | N/A                                                  |
| `defaultBudget`                                      | [models.DefaultBudget](../models/defaultbudget.md)   | :heavy_minus_sign:                                   | N/A                                                  |