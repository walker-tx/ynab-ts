# GetScheduledTransactionByIdResponse


## Supported Types

### `models.ScheduledTransactionResponse`

```typescript
const value: models.ScheduledTransactionResponse = {
  data: {
    scheduledTransaction: {
      id: "3491b8d6-174a-48dc-84cf-470e80834b63",
      dateFirst: new RFCDate("2025-10-18"),
      dateNext: new RFCDate("2024-02-03"),
      frequency: "every4Months",
      amount: 409372,
      accountId: "10c59b05-f683-43a0-b116-26ac13b6c342",
      deleted: true,
      accountName: "<value>",
      subtransactions: [],
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

