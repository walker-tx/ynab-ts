# GetAccountsResponse


## Supported Types

### `models.AccountsResponse`

```typescript
const value: models.AccountsResponse = {
  data: {
    accounts: [
      {
        id: "bb235fdd-d3d0-486c-9ea3-dfe130fa1c29",
        name: "<value>",
        type: "studentLoan",
        onBudget: true,
        closed: true,
        balance: 922620,
        clearedBalance: 209076,
        unclearedBalance: 659,
        transferPayeeId: "5ded6d04-1fec-4726-b26c-04ed7a6afc6a",
        deleted: false,
      },
    ],
    serverKnowledge: 946382,
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

