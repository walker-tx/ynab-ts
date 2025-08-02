# ScheduledTransactions
(*scheduledTransactions*)

## Overview

### Available Operations

* [list](#list) - List scheduled transactions
* [create](#create) - Create a single scheduled transaction
* [get](#get) - Single scheduled transaction
* [update](#update) - Updates an existing scheduled transaction
* [delete](#delete) - Deletes an existing scheduled transaction

## list

Returns all scheduled transactions

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getScheduledTransactions" method="get" path="/budgets/{budget_id}/scheduled_transactions" -->
```typescript
import { Ynab } from "ynab-ts";

const ynab = new Ynab({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const result = await ynab.scheduledTransactions.list({
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
import { scheduledTransactionsList } from "ynab-ts/funcs/scheduledTransactionsList.js";

// Use `YnabCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ynab = new YnabCore({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const res = await scheduledTransactionsList(ynab, {
    budgetId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("scheduledTransactionsList failed:", res.error);
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
  useScheduledTransactionsList,
  useScheduledTransactionsListSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchScheduledTransactionsList,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateScheduledTransactionsList,
  invalidateAllScheduledTransactionsList,
} from "ynab-ts/react-query/scheduledTransactionsList.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetScheduledTransactionsRequest](../../models/operations/getscheduledtransactionsrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ScheduledTransactionsResponse](../../models/scheduledtransactionsresponse.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorResponse    | 404                     | application/json        |
| errors.ErrorResponse    | default                 | application/json        |
| errors.YnabDefaultError | 4XX, 5XX                | \*/\*                   |

## create

Creates a single scheduled transaction (a transaction with a future date).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createScheduledTransaction" method="post" path="/budgets/{budget_id}/scheduled_transactions" -->
```typescript
import { Ynab } from "ynab-ts";
import { RFCDate } from "ynab-ts/types";

const ynab = new Ynab({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const result = await ynab.scheduledTransactions.create({
    budgetId: "<id>",
    postScheduledTransactionWrapper: {
      scheduledTransaction: {
        accountId: "1cb7f54b-9ed5-48fd-8642-a56bd5ee2fca",
        date: new RFCDate("2024-04-15"),
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
import { scheduledTransactionsCreate } from "ynab-ts/funcs/scheduledTransactionsCreate.js";
import { RFCDate } from "ynab-ts/types";

// Use `YnabCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ynab = new YnabCore({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const res = await scheduledTransactionsCreate(ynab, {
    budgetId: "<id>",
    postScheduledTransactionWrapper: {
      scheduledTransaction: {
        accountId: "1cb7f54b-9ed5-48fd-8642-a56bd5ee2fca",
        date: new RFCDate("2024-04-15"),
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("scheduledTransactionsCreate failed:", res.error);
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
  useScheduledTransactionsCreateMutation
} from "ynab-ts/react-query/scheduledTransactionsCreate.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateScheduledTransactionRequest](../../models/operations/createscheduledtransactionrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ScheduledTransactionResponse](../../models/scheduledtransactionresponse.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorResponse    | 400                     | application/json        |
| errors.YnabDefaultError | 4XX, 5XX                | \*/\*                   |

## get

Returns a single scheduled transaction

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getScheduledTransactionById" method="get" path="/budgets/{budget_id}/scheduled_transactions/{scheduled_transaction_id}" -->
```typescript
import { Ynab } from "ynab-ts";

const ynab = new Ynab({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const result = await ynab.scheduledTransactions.get({
    budgetId: "<id>",
    scheduledTransactionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { YnabCore } from "ynab-ts/core.js";
import { scheduledTransactionsGet } from "ynab-ts/funcs/scheduledTransactionsGet.js";

// Use `YnabCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ynab = new YnabCore({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const res = await scheduledTransactionsGet(ynab, {
    budgetId: "<id>",
    scheduledTransactionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("scheduledTransactionsGet failed:", res.error);
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
  useScheduledTransactionsGet,
  useScheduledTransactionsGetSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchScheduledTransactionsGet,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateScheduledTransactionsGet,
  invalidateAllScheduledTransactionsGet,
} from "ynab-ts/react-query/scheduledTransactionsGet.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetScheduledTransactionByIdRequest](../../models/operations/getscheduledtransactionbyidrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ScheduledTransactionResponse](../../models/scheduledtransactionresponse.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorResponse    | 404                     | application/json        |
| errors.ErrorResponse    | default                 | application/json        |
| errors.YnabDefaultError | 4XX, 5XX                | \*/\*                   |

## update

Updates a single scheduled transaction

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateScheduledTransaction" method="put" path="/budgets/{budget_id}/scheduled_transactions/{scheduled_transaction_id}" -->
```typescript
import { Ynab } from "ynab-ts";
import { RFCDate } from "ynab-ts/types";

const ynab = new Ynab({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const result = await ynab.scheduledTransactions.update({
    budgetId: "<id>",
    scheduledTransactionId: "<id>",
    putScheduledTransactionWrapper: {
      scheduledTransaction: {
        accountId: "8ca52c3e-66a2-43a1-82f1-fa05cadf8245",
        date: new RFCDate("2025-01-04"),
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
import { scheduledTransactionsUpdate } from "ynab-ts/funcs/scheduledTransactionsUpdate.js";
import { RFCDate } from "ynab-ts/types";

// Use `YnabCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ynab = new YnabCore({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const res = await scheduledTransactionsUpdate(ynab, {
    budgetId: "<id>",
    scheduledTransactionId: "<id>",
    putScheduledTransactionWrapper: {
      scheduledTransaction: {
        accountId: "8ca52c3e-66a2-43a1-82f1-fa05cadf8245",
        date: new RFCDate("2025-01-04"),
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("scheduledTransactionsUpdate failed:", res.error);
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
  useScheduledTransactionsUpdateMutation
} from "ynab-ts/react-query/scheduledTransactionsUpdate.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateScheduledTransactionRequest](../../models/operations/updatescheduledtransactionrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ScheduledTransactionResponse](../../models/scheduledtransactionresponse.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorResponse    | 400                     | application/json        |
| errors.YnabDefaultError | 4XX, 5XX                | \*/\*                   |

## delete

Deletes a scheduled transaction

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteScheduledTransaction" method="delete" path="/budgets/{budget_id}/scheduled_transactions/{scheduled_transaction_id}" -->
```typescript
import { Ynab } from "ynab-ts";

const ynab = new Ynab({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const result = await ynab.scheduledTransactions.delete({
    budgetId: "<id>",
    scheduledTransactionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { YnabCore } from "ynab-ts/core.js";
import { scheduledTransactionsDelete } from "ynab-ts/funcs/scheduledTransactionsDelete.js";

// Use `YnabCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ynab = new YnabCore({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const res = await scheduledTransactionsDelete(ynab, {
    budgetId: "<id>",
    scheduledTransactionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("scheduledTransactionsDelete failed:", res.error);
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
  useScheduledTransactionsDeleteMutation
} from "ynab-ts/react-query/scheduledTransactionsDelete.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteScheduledTransactionRequest](../../models/operations/deletescheduledtransactionrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ScheduledTransactionResponse](../../models/scheduledtransactionresponse.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorResponse    | 404                     | application/json        |
| errors.YnabDefaultError | 4XX, 5XX                | \*/\*                   |