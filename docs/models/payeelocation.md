# PayeeLocation

## Example Usage

```typescript
import { PayeeLocation } from "ynab-ts/models";

let value: PayeeLocation = {
  id: "7dbebd56-dfe9-4628-a561-27daaa7789c9",
  payeeId: "d1e15c54-4e68-4515-8b74-b0c17a66aaa9",
  latitude: "80.8037",
  longitude: "-25.5383",
  deleted: true,
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                  | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `payeeId`                                                                                                             | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `latitude`                                                                                                            | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `longitude`                                                                                                           | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `deleted`                                                                                                             | *boolean*                                                                                                             | :heavy_check_mark:                                                                                                    | Whether or not the payee location has been deleted.  Deleted payee locations will only be included in delta requests. |