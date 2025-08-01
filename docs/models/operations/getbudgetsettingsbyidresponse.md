# GetBudgetSettingsByIdResponse


## Supported Types

### `models.BudgetSettingsResponse`

```typescript
const value: models.BudgetSettingsResponse = {
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

### `models.ErrorResponse`

```typescript
const value: models.ErrorResponse = {
  error: {
    id: "<id>",
    name: "<value>",
    detail: "<value>",
  },
};
```

