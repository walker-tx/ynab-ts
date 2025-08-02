# AccountsResponseData

## Example Usage

```typescript
import { AccountsResponseData } from "ynab-ts/models";

let value: AccountsResponseData = {
  accounts: [
    {
      id: "77ab0c13-ffed-4066-9d18-2ee2ba1d3c0a",
      name: "<value>",
      type: "otherAsset",
      onBudget: true,
      closed: false,
      balance: 894252,
      clearedBalance: 804212,
      unclearedBalance: 616499,
      transferPayeeId: null,
      deleted: false,
    },
  ],
  serverKnowledge: 199723,
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `accounts`                               | [models.Account](../models/account.md)[] | :heavy_check_mark:                       | N/A                                      |
| `serverKnowledge`                        | *number*                                 | :heavy_check_mark:                       | The knowledge of the server              |