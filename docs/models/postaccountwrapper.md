# PostAccountWrapper

## Example Usage

```typescript
import { PostAccountWrapper } from "ynab-ts/models";

let value: PostAccountWrapper = {
  account: {
    name: "<value>",
    type: "cash",
    balance: 828776,
  },
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `account`                                      | [models.SaveAccount](../models/saveaccount.md) | :heavy_check_mark:                             | N/A                                            |