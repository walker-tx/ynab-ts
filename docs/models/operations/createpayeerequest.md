# CreatePayeeRequest

## Example Usage

```typescript
import { CreatePayeeRequest } from "ynab-ts/models/operations";

let value: CreatePayeeRequest = {
  planId: "<id>",
  postPayeeWrapper: {
    payee: {
      name: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                     | Type                                                                                                                                                                                      | Required                                                                                                                                                                                  | Description                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `planId`                                                                                                                                                                                  | *string*                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                        | The id of the plan. "last-used" can be used to specify the last used plan and "default" can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan). |
| `postPayeeWrapper`                                                                                                                                                                        | [models.PostPayeeWrapper](../../models/postpayeewrapper.md)                                                                                                                               | :heavy_check_mark:                                                                                                                                                                        | The payee to create                                                                                                                                                                       |