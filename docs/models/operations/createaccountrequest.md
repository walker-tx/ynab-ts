# CreateAccountRequest

## Example Usage

```typescript
import { CreateAccountRequest } from "ynab-ts/models/operations";

let value: CreateAccountRequest = {
  budgetId: "<id>",
  postAccountWrapper: {
    account: {
      name: "<value>",
      type: "cash",
      balance: 828776,
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                            | Type                                                                                                                                                                                             | Required                                                                                                                                                                                         | Description                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `budgetId`                                                                                                                                                                                       | *string*                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                               | The id of the budget ("last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget) |
| `postAccountWrapper`                                                                                                                                                                             | [models.PostAccountWrapper](../../models/postaccountwrapper.md)                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                               | The account to create.                                                                                                                                                                           |