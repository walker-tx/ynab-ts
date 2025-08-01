# UpdatePayeeRequest

## Example Usage

```typescript
import { UpdatePayeeRequest } from "ynab-ts/models/operations";

let value: UpdatePayeeRequest = {
  budgetId: "<id>",
  payeeId: "<id>",
  patchPayeeWrapper: {
    payee: {},
  },
};
```

## Fields

| Field                                                                                                                                                                                             | Type                                                                                                                                                                                              | Required                                                                                                                                                                                          | Description                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `budgetId`                                                                                                                                                                                        | *string*                                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                | The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget). |
| `payeeId`                                                                                                                                                                                         | *string*                                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                | The id of the payee                                                                                                                                                                               |
| `patchPayeeWrapper`                                                                                                                                                                               | [models.PatchPayeeWrapper](../../models/patchpayeewrapper.md)                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                | The payee to update                                                                                                                                                                               |