# CreateAccountRequest

## Example Usage

```typescript
import { CreateAccountRequest } from "ynab-ts/models/operations";

let value: CreateAccountRequest = {
  planId: "<id>",
  postAccountWrapper: {
    account: {
      name: "<value>",
      type: "savings",
      balance: 828776,
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                    | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `planId`                                                                                                                                                                                 | *string*                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                       | The id of the plan ("last-used" can be used to specify the last used plan and "default" can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan) |
| `postAccountWrapper`                                                                                                                                                                     | [models.PostAccountWrapper](../../models/postaccountwrapper.md)                                                                                                                          | :heavy_check_mark:                                                                                                                                                                       | The account to create.                                                                                                                                                                   |