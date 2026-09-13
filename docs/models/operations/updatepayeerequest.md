# UpdatePayeeRequest

## Example Usage

```typescript
import { UpdatePayeeRequest } from "ynab-ts/models/operations";

let value: UpdatePayeeRequest = {
  planId: "<id>",
  payeeId: "<id>",
  patchPayeeWrapper: {
    payee: {},
  },
};
```

## Fields

| Field                                                                                                                                                                                     | Type                                                                                                                                                                                      | Required                                                                                                                                                                                  | Description                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `planId`                                                                                                                                                                                  | *string*                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                        | The id of the plan. "last-used" can be used to specify the last used plan and "default" can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan). |
| `payeeId`                                                                                                                                                                                 | *string*                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                        | The id of the payee                                                                                                                                                                       |
| `patchPayeeWrapper`                                                                                                                                                                       | [models.PatchPayeeWrapper](../../models/patchpayeewrapper.md)                                                                                                                             | :heavy_check_mark:                                                                                                                                                                        | The payee to update                                                                                                                                                                       |