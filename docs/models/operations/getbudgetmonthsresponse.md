# GetBudgetMonthsResponse


## Supported Types

### `models.MonthSummariesResponse`

```typescript
const value: models.MonthSummariesResponse = {
  data: {
    months: [
      {
        month: new RFCDate("2023-06-08"),
        income: 646984,
        budgeted: 814414,
        activity: 295873,
        toBeBudgeted: 17631,
        deleted: false,
      },
    ],
    serverKnowledge: 124299,
  },
};
```

### `models.ErrorResponse`

```typescript
const value: models.ErrorResponse = {
  error: {
    id: "<id>",
    name: "<value>",
    detail: "<value>",
  },
};
```

