# GetTransactionByIdResponse


## Supported Types

### `models.TransactionResponse`

```typescript
const value: models.TransactionResponse = {
  data: {
    transaction: {
      id: "<id>",
      date: new RFCDate("2023-01-26"),
      amount: 678323,
      cleared: "uncleared",
      approved: true,
      accountId: "7c5529a9-76ef-4e14-8974-dfbadd3085ff",
      deleted: true,
      accountName: "<value>",
      subtransactions: [
        {
          id: "<id>",
          transactionId: "<id>",
          amount: 666160,
          deleted: true,
        },
      ],
    },
    serverKnowledge: 791544,
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

