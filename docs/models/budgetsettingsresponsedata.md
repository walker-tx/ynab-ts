# BudgetSettingsResponseData

## Example Usage

```typescript
import { BudgetSettingsResponseData } from "ynab-ts/models";

let value: BudgetSettingsResponseData = {
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
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `settings`                                           | [models.BudgetSettings](../models/budgetsettings.md) | :heavy_check_mark:                                   | N/A                                                  |