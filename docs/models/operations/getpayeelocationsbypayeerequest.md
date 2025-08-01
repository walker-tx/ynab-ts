# GetPayeeLocationsByPayeeRequest

## Example Usage

```typescript
import { GetPayeeLocationsByPayeeRequest } from "ynab-ts/models/operations";

let value: GetPayeeLocationsByPayeeRequest = {
  budgetId: "<id>",
  payeeId: "<id>",
};
```

## Fields

| Field                                                                                                                                                                                             | Type                                                                                                                                                                                              | Required                                                                                                                                                                                          | Description                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `budgetId`                                                                                                                                                                                        | *string*                                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                | The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget). |
| `payeeId`                                                                                                                                                                                         | *string*                                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                | id of payee                                                                                                                                                                                       |