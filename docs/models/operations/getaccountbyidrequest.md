# GetAccountByIdRequest

## Example Usage

```typescript
import { GetAccountByIdRequest } from "ynab-ts/models/operations";

let value: GetAccountByIdRequest = {
  planId: "<id>",
  accountId: "073e6d8a-0d2a-4ab5-b855-91f7e6b2b3da",
};
```

## Fields

| Field                                                                                                                                                                                     | Type                                                                                                                                                                                      | Required                                                                                                                                                                                  | Description                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `planId`                                                                                                                                                                                  | *string*                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                        | The id of the plan. "last-used" can be used to specify the last used plan and "default" can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan). |
| `accountId`                                                                                                                                                                               | *string*                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                        | The id of the account                                                                                                                                                                     |