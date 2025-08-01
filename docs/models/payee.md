# Payee

## Example Usage

```typescript
import { Payee } from "ynab-ts/models";

let value: Payee = {
  id: "f6e3cc95-53a3-4718-9d44-4e40121a0362",
  name: "<value>",
  deleted: false,
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `id`                                                                                                | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `name`                                                                                              | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `transferAccountId`                                                                                 | *string*                                                                                            | :heavy_minus_sign:                                                                                  | If a transfer payee, the `account_id` to which this payee transfers to                              |
| `deleted`                                                                                           | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | Whether or not the payee has been deleted.  Deleted payees will only be included in delta requests. |