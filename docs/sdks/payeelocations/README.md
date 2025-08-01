# PayeeLocations
(*payeeLocations*)

## Overview

### Available Operations

* [list](#list) - List payee locations
* [get](#get) - Single payee location
* [listByPayee](#listbypayee) - List locations for a payee

## list

Returns all payee locations

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getPayeeLocations" method="get" path="/budgets/{budget_id}/payee_locations" -->
```typescript
import { Ynab } from "ynab-ts";

const ynab = new Ynab({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const result = await ynab.payeeLocations.list({
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
import { payeeLocationsList } from "ynab-ts/funcs/payeeLocationsList.js";

// Use `YnabCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ynab = new YnabCore({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const res = await payeeLocationsList(ynab, {
    budgetId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("payeeLocationsList failed:", res.error);
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
  usePayeeLocationsList,
  usePayeeLocationsListSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchPayeeLocationsList,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidatePayeeLocationsList,
  invalidateAllPayeeLocationsList,
} from "ynab-ts/react-query/payeeLocationsList.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPayeeLocationsRequest](../../models/operations/getpayeelocationsrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetPayeeLocationsResponse](../../models/operations/getpayeelocationsresponse.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorResponse    | 404                     | application/json        |
| errors.YnabDefaultError | 4XX, 5XX                | \*/\*                   |

## get

Returns a single payee location

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getPayeeLocationById" method="get" path="/budgets/{budget_id}/payee_locations/{payee_location_id}" -->
```typescript
import { Ynab } from "ynab-ts";

const ynab = new Ynab({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const result = await ynab.payeeLocations.get({
    budgetId: "<id>",
    payeeLocationId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { YnabCore } from "ynab-ts/core.js";
import { payeeLocationsGet } from "ynab-ts/funcs/payeeLocationsGet.js";

// Use `YnabCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ynab = new YnabCore({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const res = await payeeLocationsGet(ynab, {
    budgetId: "<id>",
    payeeLocationId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("payeeLocationsGet failed:", res.error);
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
  usePayeeLocationsGet,
  usePayeeLocationsGetSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchPayeeLocationsGet,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidatePayeeLocationsGet,
  invalidateAllPayeeLocationsGet,
} from "ynab-ts/react-query/payeeLocationsGet.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPayeeLocationByIdRequest](../../models/operations/getpayeelocationbyidrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetPayeeLocationByIdResponse](../../models/operations/getpayeelocationbyidresponse.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorResponse    | 404                     | application/json        |
| errors.YnabDefaultError | 4XX, 5XX                | \*/\*                   |

## listByPayee

Returns all payee locations for a specified payee

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getPayeeLocationsByPayee" method="get" path="/budgets/{budget_id}/payees/{payee_id}/payee_locations" -->
```typescript
import { Ynab } from "ynab-ts";

const ynab = new Ynab({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const result = await ynab.payeeLocations.listByPayee({
    budgetId: "<id>",
    payeeId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { YnabCore } from "ynab-ts/core.js";
import { payeeLocationsListByPayee } from "ynab-ts/funcs/payeeLocationsListByPayee.js";

// Use `YnabCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ynab = new YnabCore({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const res = await payeeLocationsListByPayee(ynab, {
    budgetId: "<id>",
    payeeId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("payeeLocationsListByPayee failed:", res.error);
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
  usePayeeLocationsListByPayee,
  usePayeeLocationsListByPayeeSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchPayeeLocationsListByPayee,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidatePayeeLocationsListByPayee,
  invalidateAllPayeeLocationsListByPayee,
} from "ynab-ts/react-query/payeeLocationsListByPayee.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPayeeLocationsByPayeeRequest](../../models/operations/getpayeelocationsbypayeerequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetPayeeLocationsByPayeeResponse](../../models/operations/getpayeelocationsbypayeeresponse.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorResponse    | 404                     | application/json        |
| errors.YnabDefaultError | 4XX, 5XX                | \*/\*                   |