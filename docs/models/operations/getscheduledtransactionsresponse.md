# GetScheduledTransactionsResponse


## Supported Types

### `models.ScheduledTransactionsResponse`

```typescript
const value: models.ScheduledTransactionsResponse = {
  data: {
    scheduledTransactions: [
      {
        id: "728365b4-8b10-49d5-bec1-c3eb86a97388",
        dateFirst: new RFCDate("2025-05-31"),
        dateNext: new RFCDate("2024-05-03"),
        frequency: "every4Weeks",
        amount: 792338,
        accountId: "8c3a49db-ed0c-4e78-9f3e-d85434b633cc",
        deleted: true,
        accountName: "<value>",
        subtransactions: [],
      },
    ],
    serverKnowledge: 913257,
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

