# Categories
(*categories*)

## Overview

The categories for a budget

### Available Operations

* [list](#list) - List categories
* [get](#get) - Single category
* [update](#update) - Update a category
* [getByMonth](#getbymonth) - Single category for a specific budget month
* [updateMonth](#updatemonth) - Update a category for a specific month

## list

Returns all categories grouped by category group.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCategories" method="get" path="/budgets/{budget_id}/categories" -->
```typescript
import { Ynab } from "ynab-ts";

const ynab = new Ynab({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const result = await ynab.categories.list({
    budgetId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { YnabCore } from "ynab-ts/core.js";
import { categoriesList } from "ynab-ts/funcs/categoriesList.js";

// Use `YnabCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ynab = new YnabCore({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const res = await categoriesList(ynab, {
    budgetId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("categoriesList failed:", res.error);
  }
}

run();
```

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Query hooks for fetching data.
  useCategoriesList,
  useCategoriesListSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchCategoriesList,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateCategoriesList,
  invalidateAllCategoriesList,
} from "ynab-ts/react-query/categoriesList.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCategoriesRequest](../../models/operations/getcategoriesrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CategoriesResponse](../../models/categoriesresponse.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorResponse    | 404                     | application/json        |
| errors.ErrorResponse    | default                 | application/json        |
| errors.YnabDefaultError | 4XX, 5XX                | \*/\*                   |

## get

Returns a single category.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCategoryById" method="get" path="/budgets/{budget_id}/categories/{category_id}" -->
```typescript
import { Ynab } from "ynab-ts";

const ynab = new Ynab({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const result = await ynab.categories.get({
    budgetId: "<id>",
    categoryId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { YnabCore } from "ynab-ts/core.js";
import { categoriesGet } from "ynab-ts/funcs/categoriesGet.js";

// Use `YnabCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ynab = new YnabCore({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const res = await categoriesGet(ynab, {
    budgetId: "<id>",
    categoryId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("categoriesGet failed:", res.error);
  }
}

run();
```

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Query hooks for fetching data.
  useCategoriesGet,
  useCategoriesGetSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchCategoriesGet,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateCategoriesGet,
  invalidateAllCategoriesGet,
} from "ynab-ts/react-query/categoriesGet.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCategoryByIdRequest](../../models/operations/getcategorybyidrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CategoryResponse](../../models/categoryresponse.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorResponse    | 404                     | application/json        |
| errors.ErrorResponse    | default                 | application/json        |
| errors.YnabDefaultError | 4XX, 5XX                | \*/\*                   |

## update

Update a category

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateCategory" method="patch" path="/budgets/{budget_id}/categories/{category_id}" -->
```typescript
import { Ynab } from "ynab-ts";

const ynab = new Ynab({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const result = await ynab.categories.update({
    budgetId: "<id>",
    categoryId: "<id>",
    patchCategoryWrapper: {
      category: {},
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { YnabCore } from "ynab-ts/core.js";
import { categoriesUpdate } from "ynab-ts/funcs/categoriesUpdate.js";

// Use `YnabCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ynab = new YnabCore({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const res = await categoriesUpdate(ynab, {
    budgetId: "<id>",
    categoryId: "<id>",
    patchCategoryWrapper: {
      category: {},
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("categoriesUpdate failed:", res.error);
  }
}

run();
```

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Mutation hook for triggering the API call.
  useCategoriesUpdateMutation
} from "ynab-ts/react-query/categoriesUpdate.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateCategoryRequest](../../models/operations/updatecategoryrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SaveCategoryResponse](../../models/savecategoryresponse.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorResponse    | 400                     | application/json        |
| errors.YnabDefaultError | 4XX, 5XX                | \*/\*                   |

## getByMonth

Returns a single category for a specific budget month.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getMonthCategoryById" method="get" path="/budgets/{budget_id}/months/{month}/categories/{category_id}" -->
```typescript
import { Ynab } from "ynab-ts";
import { RFCDate } from "ynab-ts/types";

const ynab = new Ynab({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const result = await ynab.categories.getByMonth({
    budgetId: "<id>",
    month: new RFCDate("2025-10-27"),
    categoryId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { YnabCore } from "ynab-ts/core.js";
import { categoriesGetByMonth } from "ynab-ts/funcs/categoriesGetByMonth.js";
import { RFCDate } from "ynab-ts/types";

// Use `YnabCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ynab = new YnabCore({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const res = await categoriesGetByMonth(ynab, {
    budgetId: "<id>",
    month: new RFCDate("2025-10-27"),
    categoryId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("categoriesGetByMonth failed:", res.error);
  }
}

run();
```

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Query hooks for fetching data.
  useCategoriesGetByMonth,
  useCategoriesGetByMonthSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchCategoriesGetByMonth,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateCategoriesGetByMonth,
  invalidateAllCategoriesGetByMonth,
} from "ynab-ts/react-query/categoriesGetByMonth.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMonthCategoryByIdRequest](../../models/operations/getmonthcategorybyidrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CategoryResponse](../../models/categoryresponse.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorResponse    | 404                     | application/json        |
| errors.ErrorResponse    | default                 | application/json        |
| errors.YnabDefaultError | 4XX, 5XX                | \*/\*                   |

## updateMonth

Update a category for a specific month.  Only `budgeted` amount can be updated.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateMonthCategory" method="patch" path="/budgets/{budget_id}/months/{month}/categories/{category_id}" -->
```typescript
import { Ynab } from "ynab-ts";
import { RFCDate } from "ynab-ts/types";

const ynab = new Ynab({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const result = await ynab.categories.updateMonth({
    budgetId: "<id>",
    month: new RFCDate("2023-01-08"),
    categoryId: "<id>",
    patchMonthCategoryWrapper: {
      category: {
        budgeted: 147664,
      },
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { YnabCore } from "ynab-ts/core.js";
import { categoriesUpdateMonth } from "ynab-ts/funcs/categoriesUpdateMonth.js";
import { RFCDate } from "ynab-ts/types";

// Use `YnabCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ynab = new YnabCore({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const res = await categoriesUpdateMonth(ynab, {
    budgetId: "<id>",
    month: new RFCDate("2023-01-08"),
    categoryId: "<id>",
    patchMonthCategoryWrapper: {
      category: {
        budgeted: 147664,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("categoriesUpdateMonth failed:", res.error);
  }
}

run();
```

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Mutation hook for triggering the API call.
  useCategoriesUpdateMonthMutation
} from "ynab-ts/react-query/categoriesUpdateMonth.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateMonthCategoryRequest](../../models/operations/updatemonthcategoryrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SaveCategoryResponse](../../models/savecategoryresponse.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorResponse    | 400                     | application/json        |
| errors.YnabDefaultError | 4XX, 5XX                | \*/\*                   |