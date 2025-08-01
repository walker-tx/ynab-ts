# AccountResponseData

## Example Usage

```typescript
import { AccountResponseData } from "ynab-ts/models";

let value: AccountResponseData = {
  account: {
    id: "e1a74a36-dbc6-476d-9fa1-22682cacf3b5",
    name: "<value>",
    type: "otherDebt",
    onBudget: true,
    closed: true,
    balance: 754665,
    clearedBalance: 623725,
    unclearedBalance: 443438,
    transferPayeeId: "b3cb70e8-2b57-442c-86d8-0e2d9ae5b2f2",
    deleted: true,
  },
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `account`                              | [models.Account](../models/account.md) | :heavy_check_mark:                     | N/A                                    |