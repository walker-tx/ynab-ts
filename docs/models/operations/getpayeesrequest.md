# GetPayeesRequest

## Example Usage

```typescript
import { GetPayeesRequest } from "ynab-ts/models/operations";

let value: GetPayeesRequest = {
  budgetId: "<id>",
};
```

## Fields

| Field                                                                                                                                                                                             | Type                                                                                                                                                                                              | Required                                                                                                                                                                                          | Description                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `budgetId`                                                                                                                                                                                        | *string*                                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                | The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget). |
| `lastKnowledgeOfServer`                                                                                                                                                                           | *number*                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                | The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.                                                                   |