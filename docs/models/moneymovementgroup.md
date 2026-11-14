# MoneyMovementGroup

## Example Usage

```typescript
import { MoneyMovementGroup } from "ynab-ts/models";
import { RFCDate } from "ynab-ts/types";

let value: MoneyMovementGroup = {
  id: "b1aee841-3efa-4daf-ab2d-19eb38735bd7",
  groupCreatedAt: new Date("2025-08-14T23:34:56.080Z"),
  month: new RFCDate("2025-04-03"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `groupCreatedAt`                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the money movement group was created                                                     |
| `month`                                                                                       | [RFCDate](../types/rfcdate.md)                                                                | :heavy_check_mark:                                                                            | The month of the money movement group in ISO format (e.g. 2024-01-01)                         |
| `note`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `performedByUserId`                                                                           | *string*                                                                                      | :heavy_minus_sign:                                                                            | The id of the user who performed the money movement group                                     |