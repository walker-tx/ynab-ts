# BudgetSettingsResponse

## Example Usage

```typescript
import { BudgetSettingsResponse } from "ynab-ts/models";

let value: BudgetSettingsResponse = {
  data: {
    settings: {
      dateFormat: {
        format: "<value>",
      },
      currencyFormat: {
        isoCode: "<value>",
        exampleFormat: "<value>",
        decimalDigits: 868621,
        decimalSeparator: "<value>",
        symbolFirst: true,
        groupSeparator: "<value>",
        currencySymbol: "ƒ",
        displaySymbol: true,
      },
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `data`                                                                       | [models.BudgetSettingsResponseData](../models/budgetsettingsresponsedata.md) | :heavy_check_mark:                                                           | N/A                                                                          |