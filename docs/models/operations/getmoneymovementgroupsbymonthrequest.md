# GetMoneyMovementGroupsByMonthRequest

## Example Usage

```typescript
import { GetMoneyMovementGroupsByMonthRequest } from "ynab-ts/models/operations";
import { RFCDate } from "ynab-ts/types";

let value: GetMoneyMovementGroupsByMonthRequest = {
  planId: "<id>",
  month: new RFCDate("2025-10-23"),
};
```

## Fields

| Field                                                                                                                                                                                     | Type                                                                                                                                                                                      | Required                                                                                                                                                                                  | Description                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `planId`                                                                                                                                                                                  | *string*                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                        | The id of the plan. "last-used" can be used to specify the last used plan and "default" can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan). |
| `month`                                                                                                                                                                                   | [RFCDate](../../types/rfcdate.md)                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                        | The plan month in ISO format (e.g. 2016-12-01) ("current" can also be used to specify the current calendar month (UTC))                                                                   |