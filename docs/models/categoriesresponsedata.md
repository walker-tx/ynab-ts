# CategoriesResponseData

## Example Usage

```typescript
import { CategoriesResponseData } from "ynab-ts/models";

let value: CategoriesResponseData = {
  categoryGroups: [],
  serverKnowledge: 207380,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `categoryGroups`                                                                 | [models.CategoryGroupWithCategories](../models/categorygroupwithcategories.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |
| `serverKnowledge`                                                                | *number*                                                                         | :heavy_check_mark:                                                               | The knowledge of the server                                                      |