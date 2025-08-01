# GetTransactionsByAccountResponse


## Supported Types

### `models.TransactionsResponse`

```typescript
const value: models.TransactionsResponse = {
  data: {
    transactions: [
      {
        id: "<id>",
        date: new RFCDate("2025-10-25"),
        amount: 478027,
        cleared: "cleared",
        approved: true,
        accountId: "2e1cef00-ea26-48cd-967c-0f5bf9847295",
        deleted: true,
        accountName: "<value>",
        subtransactions: [],
      },
    ],
    serverKnowledge: 292111,
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

