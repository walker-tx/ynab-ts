# GetTransactionsByMonthResponse


## Supported Types

### `models.HybridTransactionsResponse`

```typescript
const value: models.HybridTransactionsResponse = {
  data: {
    transactions: [
      {
        id: "<id>",
        date: new RFCDate("2024-01-11"),
        amount: 299627,
        cleared: "reconciled",
        approved: false,
        accountId: "04e0edce-ac92-4068-b22e-af1a3bc87367",
        deleted: false,
        type: "subtransaction",
        accountName: "<value>",
      },
    ],
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

