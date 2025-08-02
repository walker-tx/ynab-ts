# Payees
(*payees*)

## Overview

The payees for a budget

### Available Operations

* [list](#list) - List payees
* [get](#get) - Single payee
* [update](#update) - Update a payee

## list

Returns all payees

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getPayees" method="get" path="/budgets/{budget_id}/payees" -->
```typescript
import { Ynab } from "ynab-ts";

const ynab = new Ynab({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const result = await ynab.payees.list({
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
import { payeesList } from "ynab-ts/funcs/payeesList.js";

// Use `YnabCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ynab = new YnabCore({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const res = await payeesList(ynab, {
    budgetId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("payeesList failed:", res.error);
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
  usePayeesList,
  usePayeesListSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchPayeesList,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidatePayeesList,
  invalidateAllPayeesList,
} from "ynab-ts/react-query/payeesList.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPayeesRequest](../../models/operations/getpayeesrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PayeesResponse](../../models/payeesresponse.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorResponse    | 404                     | application/json        |
| errors.ErrorResponse    | default                 | application/json        |
| errors.YnabDefaultError | 4XX, 5XX                | \*/\*                   |

## get

Returns a single payee

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getPayeeById" method="get" path="/budgets/{budget_id}/payees/{payee_id}" -->
```typescript
import { Ynab } from "ynab-ts";

const ynab = new Ynab({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const result = await ynab.payees.get({
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
import { payeesGet } from "ynab-ts/funcs/payeesGet.js";

// Use `YnabCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ynab = new YnabCore({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const res = await payeesGet(ynab, {
    budgetId: "<id>",
    payeeId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("payeesGet failed:", res.error);
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
  usePayeesGet,
  usePayeesGetSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchPayeesGet,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidatePayeesGet,
  invalidateAllPayeesGet,
} from "ynab-ts/react-query/payeesGet.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPayeeByIdRequest](../../models/operations/getpayeebyidrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PayeeResponse](../../models/payeeresponse.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorResponse    | 404                     | application/json        |
| errors.ErrorResponse    | default                 | application/json        |
| errors.YnabDefaultError | 4XX, 5XX                | \*/\*                   |

## update

Update a payee

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updatePayee" method="patch" path="/budgets/{budget_id}/payees/{payee_id}" -->
```typescript
import { Ynab } from "ynab-ts";

const ynab = new Ynab({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const result = await ynab.payees.update({
    budgetId: "<id>",
    payeeId: "<id>",
    patchPayeeWrapper: {
      payee: {},
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
import { payeesUpdate } from "ynab-ts/funcs/payeesUpdate.js";

// Use `YnabCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ynab = new YnabCore({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const res = await payeesUpdate(ynab, {
    budgetId: "<id>",
    payeeId: "<id>",
    patchPayeeWrapper: {
      payee: {},
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("payeesUpdate failed:", res.error);
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
  usePayeesUpdateMutation
} from "ynab-ts/react-query/payeesUpdate.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdatePayeeRequest](../../models/operations/updatepayeerequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SavePayeeResponse](../../models/savepayeeresponse.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorResponse    | 400                     | application/json        |
| errors.YnabDefaultError | 4XX, 5XX                | \*/\*                   |