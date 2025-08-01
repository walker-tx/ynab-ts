# CurrencyFormat

The currency format setting for the budget.  In some cases the format will not be available and will be specified as null.

## Example Usage

```typescript
import { CurrencyFormat } from "ynab-ts/models";

let value: CurrencyFormat = {
  isoCode: "<value>",
  exampleFormat: "<value>",
  decimalDigits: 684274,
  decimalSeparator: "<value>",
  symbolFirst: true,
  groupSeparator: "<value>",
  currencySymbol: "C$",
  displaySymbol: true,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `isoCode`          | *string*           | :heavy_check_mark: | N/A                |
| `exampleFormat`    | *string*           | :heavy_check_mark: | N/A                |
| `decimalDigits`    | *number*           | :heavy_check_mark: | N/A                |
| `decimalSeparator` | *string*           | :heavy_check_mark: | N/A                |
| `symbolFirst`      | *boolean*          | :heavy_check_mark: | N/A                |
| `groupSeparator`   | *string*           | :heavy_check_mark: | N/A                |
| `currencySymbol`   | *string*           | :heavy_check_mark: | N/A                |
| `displaySymbol`    | *boolean*          | :heavy_check_mark: | N/A                |