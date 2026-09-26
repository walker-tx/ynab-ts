# SaveAccount

## Example Usage

```typescript
import { SaveAccount } from "ynab-ts/models";

let value: SaveAccount = {
  name: "<value>",
  type: "cash",
  balance: 40508,
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `name`                                                  | *string*                                                | :heavy_check_mark:                                      | The name of the account                                 |
| `type`                                                  | [models.SaveAccountType](../models/saveaccounttype.md)  | :heavy_check_mark:                                      | The type of account to create or update                 |
| `balance`                                               | *number*                                                | :heavy_check_mark:                                      | The current balance of the account in milliunits format |