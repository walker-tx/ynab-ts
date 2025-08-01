# TransactionsImportResponseData

## Example Usage

```typescript
import { TransactionsImportResponseData } from "ynab-ts/models";

let value: TransactionsImportResponseData = {
  transactionIds: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `transactionIds`                                | *string*[]                                      | :heavy_check_mark:                              | The list of transaction ids that were imported. |