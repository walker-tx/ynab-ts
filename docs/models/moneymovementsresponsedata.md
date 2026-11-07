# MoneyMovementsResponseData

## Example Usage

```typescript
import { MoneyMovementsResponseData } from "ynab-ts/models";

let value: MoneyMovementsResponseData = {
  moneyMovements: [],
  serverKnowledge: 106609,
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `moneyMovements`                                     | [models.MoneyMovement](../models/moneymovement.md)[] | :heavy_check_mark:                                   | N/A                                                  |
| `serverKnowledge`                                    | *number*                                             | :heavy_check_mark:                                   | The knowledge of the server                          |