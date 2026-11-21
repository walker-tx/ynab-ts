# GetPlanByIdRequest

## Example Usage

```typescript
import { GetPlanByIdRequest } from "ynab-ts/models/operations";

let value: GetPlanByIdRequest = {
  planId: "<id>",
};
```

## Fields

| Field                                                                                                                                                                                     | Type                                                                                                                                                                                      | Required                                                                                                                                                                                  | Description                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `planId`                                                                                                                                                                                  | *string*                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                        | The id of the plan. "last-used" can be used to specify the last used plan and "default" can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan). |
| `lastKnowledgeOfServer`                                                                                                                                                                   | *number*                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                        | The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.                                                           |