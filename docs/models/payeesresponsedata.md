# PayeesResponseData

## Example Usage

```typescript
import { PayeesResponseData } from "ynab-ts/models";

let value: PayeesResponseData = {
  payees: [],
  serverKnowledge: 793081,
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `payees`                             | [models.Payee](../models/payee.md)[] | :heavy_check_mark:                   | N/A                                  |
| `serverKnowledge`                    | *number*                             | :heavy_check_mark:                   | The knowledge of the server          |