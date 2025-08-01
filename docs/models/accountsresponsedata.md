# AccountsResponseData

## Example Usage

```typescript
import { AccountsResponseData } from "ynab-ts/models";

let value: AccountsResponseData = {
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
  serverKnowledge: 437984,
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `accounts`                               | [models.Account](../models/account.md)[] | :heavy_check_mark:                       | N/A                                      |
| `serverKnowledge`                        | *number*                                 | :heavy_check_mark:                       | The knowledge of the server              |