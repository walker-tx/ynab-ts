# PlanDetailResponseData

## Example Usage

```typescript
import { PlanDetailResponseData } from "ynab-ts/models";

let value: PlanDetailResponseData = {
  plan: {
    id: "665bbfe8-9bf1-45b7-bbba-74c9f2ed5ff3",
    name: "<value>",
  },
  serverKnowledge: 2301,
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `plan`                                       | [models.PlanDetail](../models/plandetail.md) | :heavy_check_mark:                           | N/A                                          |
| `serverKnowledge`                            | *number*                                     | :heavy_check_mark:                           | The knowledge of the server                  |