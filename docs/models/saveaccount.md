# SaveAccount

## Example Usage

```typescript
import { SaveAccount } from "ynab-ts/models";

let value: SaveAccount = {
  name: "<value>",
  type: "otherAsset",
  balance: 40508,
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `name`                                                  | *string*                                                | :heavy_check_mark:                                      | The name of the account                                 |
| `type`                                                  | [models.AccountType](../models/accounttype.md)          | :heavy_check_mark:                                      | The type of account                                     |
| `balance`                                               | *number*                                                | :heavy_check_mark:                                      | The current balance of the account in milliunits format |