# GetBudgetMonthResponse


## Supported Types

### `models.MonthDetailResponse`

```typescript
const value: models.MonthDetailResponse = {
  data: {
    month: {
      month: new RFCDate("2025-01-02"),
      income: 142295,
      budgeted: 801655,
      activity: 568347,
      toBeBudgeted: 623956,
      deleted: true,
      categories: [],
    },
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

