# PlanSettings

## Example Usage

```typescript
import { PlanSettings } from "ynab-ts/models";

let value: PlanSettings = {
  dateFormat: {
    format: "<value>",
  },
  currencyFormat: {
    isoCode: "<value>",
    exampleFormat: "<value>",
    decimalDigits: 627942,
    decimalSeparator: "<value>",
    symbolFirst: true,
    groupSeparator: "<value>",
    currencySymbol: "NT$",
    displaySymbol: false,
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `dateFormat`                                                                                                             | [models.DateFormat](../models/dateformat.md)                                                                             | :heavy_check_mark:                                                                                                       | The date format setting for the plan.  In some cases the format will not be available and will be specified as null.     |
| `currencyFormat`                                                                                                         | [models.CurrencyFormat](../models/currencyformat.md)                                                                     | :heavy_check_mark:                                                                                                       | The currency format setting for the plan.  In some cases the format will not be available and will be specified as null. |