# MoneyMovements

## Overview

Money movements record money moved between two categories, or between a category and Ready to Assign, within a plan month. Movements performed together as a single action are linked by a money movement group.

### Available Operations

* [getMoneyMovements](#getmoneymovements) - Get all money movements
* [getMoneyMovementsByMonth](#getmoneymovementsbymonth) - Get money movements for a plan month
* [getMoneyMovementGroups](#getmoneymovementgroups) - Get all money movement groups
* [getMoneyMovementGroupsByMonth](#getmoneymovementgroupsbymonth) - Get money movement groups for a plan month

## getMoneyMovements

Returns all money movements

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getMoneyMovements" method="get" path="/plans/{plan_id}/money_movements" -->
```typescript
import { Ynab } from "ynab-ts";

const ynab = new Ynab({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const result = await ynab.moneyMovements.getMoneyMovements({
    planId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { YnabCore } from "ynab-ts/core.js";
import { moneyMovementsGetMoneyMovements } from "ynab-ts/funcs/moneyMovementsGetMoneyMovements.js";

// Use `YnabCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ynab = new YnabCore({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const res = await moneyMovementsGetMoneyMovements(ynab, {
    planId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("moneyMovementsGetMoneyMovements failed:", res.error);
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
  useMoneyMovementsGetMoneyMovements,
  useMoneyMovementsGetMoneyMovementsSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchMoneyMovementsGetMoneyMovements,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateMoneyMovementsGetMoneyMovements,
  invalidateAllMoneyMovementsGetMoneyMovements,
} from "ynab-ts/react-query/moneyMovementsGetMoneyMovements.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMoneyMovementsRequest](../../models/operations/getmoneymovementsrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.MoneyMovementsResponse](../../models/moneymovementsresponse.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorResponse    | 404                     | application/json        |
| errors.YnabDefaultError | 4XX, 5XX                | \*/\*                   |

## getMoneyMovementsByMonth

Returns all money movements for a specific month

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getMoneyMovementsByMonth" method="get" path="/plans/{plan_id}/months/{month}/money_movements" -->
```typescript
import { Ynab } from "ynab-ts";
import { RFCDate } from "ynab-ts/types";

const ynab = new Ynab({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const result = await ynab.moneyMovements.getMoneyMovementsByMonth({
    planId: "<id>",
    month: new RFCDate("2024-10-28"),
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { YnabCore } from "ynab-ts/core.js";
import { moneyMovementsGetMoneyMovementsByMonth } from "ynab-ts/funcs/moneyMovementsGetMoneyMovementsByMonth.js";
import { RFCDate } from "ynab-ts/types";

// Use `YnabCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ynab = new YnabCore({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const res = await moneyMovementsGetMoneyMovementsByMonth(ynab, {
    planId: "<id>",
    month: new RFCDate("2024-10-28"),
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("moneyMovementsGetMoneyMovementsByMonth failed:", res.error);
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
  useMoneyMovementsGetMoneyMovementsByMonth,
  useMoneyMovementsGetMoneyMovementsByMonthSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchMoneyMovementsGetMoneyMovementsByMonth,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateMoneyMovementsGetMoneyMovementsByMonth,
  invalidateAllMoneyMovementsGetMoneyMovementsByMonth,
} from "ynab-ts/react-query/moneyMovementsGetMoneyMovementsByMonth.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMoneyMovementsByMonthRequest](../../models/operations/getmoneymovementsbymonthrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.MoneyMovementsResponse](../../models/moneymovementsresponse.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorResponse    | 404                     | application/json        |
| errors.YnabDefaultError | 4XX, 5XX                | \*/\*                   |

## getMoneyMovementGroups

Returns all money movement groups

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getMoneyMovementGroups" method="get" path="/plans/{plan_id}/money_movement_groups" -->
```typescript
import { Ynab } from "ynab-ts";

const ynab = new Ynab({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const result = await ynab.moneyMovements.getMoneyMovementGroups({
    planId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { YnabCore } from "ynab-ts/core.js";
import { moneyMovementsGetMoneyMovementGroups } from "ynab-ts/funcs/moneyMovementsGetMoneyMovementGroups.js";

// Use `YnabCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ynab = new YnabCore({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const res = await moneyMovementsGetMoneyMovementGroups(ynab, {
    planId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("moneyMovementsGetMoneyMovementGroups failed:", res.error);
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
  useMoneyMovementsGetMoneyMovementGroups,
  useMoneyMovementsGetMoneyMovementGroupsSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchMoneyMovementsGetMoneyMovementGroups,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateMoneyMovementsGetMoneyMovementGroups,
  invalidateAllMoneyMovementsGetMoneyMovementGroups,
} from "ynab-ts/react-query/moneyMovementsGetMoneyMovementGroups.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMoneyMovementGroupsRequest](../../models/operations/getmoneymovementgroupsrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.MoneyMovementGroupsResponse](../../models/moneymovementgroupsresponse.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorResponse    | 404                     | application/json        |
| errors.YnabDefaultError | 4XX, 5XX                | \*/\*                   |

## getMoneyMovementGroupsByMonth

Returns all money movement groups for a specific month

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getMoneyMovementGroupsByMonth" method="get" path="/plans/{plan_id}/months/{month}/money_movement_groups" -->
```typescript
import { Ynab } from "ynab-ts";
import { RFCDate } from "ynab-ts/types";

const ynab = new Ynab({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const result = await ynab.moneyMovements.getMoneyMovementGroupsByMonth({
    planId: "<id>",
    month: new RFCDate("2026-11-26"),
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { YnabCore } from "ynab-ts/core.js";
import { moneyMovementsGetMoneyMovementGroupsByMonth } from "ynab-ts/funcs/moneyMovementsGetMoneyMovementGroupsByMonth.js";
import { RFCDate } from "ynab-ts/types";

// Use `YnabCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ynab = new YnabCore({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const res = await moneyMovementsGetMoneyMovementGroupsByMonth(ynab, {
    planId: "<id>",
    month: new RFCDate("2026-11-26"),
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("moneyMovementsGetMoneyMovementGroupsByMonth failed:", res.error);
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
  useMoneyMovementsGetMoneyMovementGroupsByMonth,
  useMoneyMovementsGetMoneyMovementGroupsByMonthSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchMoneyMovementsGetMoneyMovementGroupsByMonth,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateMoneyMovementsGetMoneyMovementGroupsByMonth,
  invalidateAllMoneyMovementsGetMoneyMovementGroupsByMonth,
} from "ynab-ts/react-query/moneyMovementsGetMoneyMovementGroupsByMonth.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMoneyMovementGroupsByMonthRequest](../../models/operations/getmoneymovementgroupsbymonthrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.MoneyMovementGroupsResponse](../../models/moneymovementgroupsresponse.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorResponse    | 404                     | application/json        |
| errors.YnabDefaultError | 4XX, 5XX                | \*/\*                   |