# MoneyMovementGroupsResponseData

## Example Usage

```typescript
import { MoneyMovementGroupsResponseData } from "ynab-ts/models";
import { RFCDate } from "ynab-ts/types";

let value: MoneyMovementGroupsResponseData = {
  moneyMovementGroups: [
    {
      id: "e9c0ce08-f420-4853-a706-e6d948ac6a59",
      groupCreatedAt: new Date("2026-01-18T05:26:14.643Z"),
      month: new RFCDate("2026-06-22"),
    },
  ],
  serverKnowledge: 251591,
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `moneyMovementGroups`                                          | [models.MoneyMovementGroup](../models/moneymovementgroup.md)[] | :heavy_check_mark:                                             | N/A                                                            |
| `serverKnowledge`                                              | *number*                                                       | :heavy_check_mark:                                             | The knowledge of the server                                    |