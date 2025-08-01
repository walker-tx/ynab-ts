# ErrorResponse

## Example Usage

```typescript
import { ErrorResponse } from "ynab-ts/models";

let value: ErrorResponse = {
  error: {
    id: "<id>",
    name: "<value>",
    detail: "<value>",
  },
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `error`                                        | [models.ErrorDetail](../models/errordetail.md) | :heavy_check_mark:                             | N/A                                            |