# AccountResponse

## Example Usage

```typescript
import { AccountResponse } from "ynab-ts/models";

let value: AccountResponse = {
  data: {
    account: {
      id: "648fd228-74a6-47fc-aec4-c95585053739",
      name: "<value>",
      type: "studentLoan",
      onBudget: true,
      closed: true,
      balance: 453980,
      clearedBalance: 450513,
      unclearedBalance: 728335,
      transferPayeeId: "273636e6-0a3d-46b7-b20e-ca039dd894fe",
      deleted: false,
    },
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `data`                                                         | [models.AccountResponseData](../models/accountresponsedata.md) | :heavy_check_mark:                                             | N/A                                                            |