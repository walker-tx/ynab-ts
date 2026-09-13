# ScheduledTransactions

## Overview

The scheduled transactions for a plan; upcoming and recurring transactions that have not yet been entered into an account. Each has a frequency along with the first and next dates it will occur (date_first and date_next).

### Available Operations

* [getScheduledTransactions](#getscheduledtransactions) - Get all scheduled transactions
* [createScheduledTransaction](#createscheduledtransaction) - Create a scheduled transaction
* [getScheduledTransactionById](#getscheduledtransactionbyid) - Get a scheduled transaction
* [updateScheduledTransaction](#updatescheduledtransaction) - Update a scheduled transaction
* [deleteScheduledTransaction](#deletescheduledtransaction) - Delete a scheduled transaction

## getScheduledTransactions

Returns all scheduled transactions

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getScheduledTransactions" method="get" path="/plans/{plan_id}/scheduled_transactions" -->
```typescript
import { Ynab } from "ynab-ts";

const ynab = new Ynab({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const result = await ynab.scheduledTransactions.getScheduledTransactions({
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
import { scheduledTransactionsGetScheduledTransactions } from "ynab-ts/funcs/scheduledTransactionsGetScheduledTransactions.js";

// Use `YnabCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ynab = new YnabCore({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const res = await scheduledTransactionsGetScheduledTransactions(ynab, {
    planId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("scheduledTransactionsGetScheduledTransactions failed:", res.error);
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
  useScheduledTransactionsGetScheduledTransactions,
  useScheduledTransactionsGetScheduledTransactionsSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchScheduledTransactionsGetScheduledTransactions,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateScheduledTransactionsGetScheduledTransactions,
  invalidateAllScheduledTransactionsGetScheduledTransactions,
} from "ynab-ts/react-query/scheduledTransactionsGetScheduledTransactions.js";
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
| errors.YnabDefaultError | 4XX, 5XX                | \*/\*                   |

## createScheduledTransaction

Creates a single scheduled transaction (a transaction with a future date).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createScheduledTransaction" method="post" path="/plans/{plan_id}/scheduled_transactions" -->
```typescript
import { Ynab } from "ynab-ts";
import { RFCDate } from "ynab-ts/types";

const ynab = new Ynab({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const result = await ynab.scheduledTransactions.createScheduledTransaction({
    planId: "<id>",
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
import { scheduledTransactionsCreateScheduledTransaction } from "ynab-ts/funcs/scheduledTransactionsCreateScheduledTransaction.js";
import { RFCDate } from "ynab-ts/types";

// Use `YnabCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ynab = new YnabCore({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const res = await scheduledTransactionsCreateScheduledTransaction(ynab, {
    planId: "<id>",
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
    console.log("scheduledTransactionsCreateScheduledTransaction failed:", res.error);
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
  useScheduledTransactionsCreateScheduledTransactionMutation
} from "ynab-ts/react-query/scheduledTransactionsCreateScheduledTransaction.js";
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

## getScheduledTransactionById

Returns a single scheduled transaction

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getScheduledTransactionById" method="get" path="/plans/{plan_id}/scheduled_transactions/{scheduled_transaction_id}" -->
```typescript
import { Ynab } from "ynab-ts";

const ynab = new Ynab({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const result = await ynab.scheduledTransactions.getScheduledTransactionById({
    planId: "<id>",
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
import { scheduledTransactionsGetScheduledTransactionById } from "ynab-ts/funcs/scheduledTransactionsGetScheduledTransactionById.js";

// Use `YnabCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ynab = new YnabCore({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const res = await scheduledTransactionsGetScheduledTransactionById(ynab, {
    planId: "<id>",
    scheduledTransactionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("scheduledTransactionsGetScheduledTransactionById failed:", res.error);
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
  useScheduledTransactionsGetScheduledTransactionById,
  useScheduledTransactionsGetScheduledTransactionByIdSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchScheduledTransactionsGetScheduledTransactionById,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateScheduledTransactionsGetScheduledTransactionById,
  invalidateAllScheduledTransactionsGetScheduledTransactionById,
} from "ynab-ts/react-query/scheduledTransactionsGetScheduledTransactionById.js";
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
| errors.YnabDefaultError | 4XX, 5XX                | \*/\*                   |

## updateScheduledTransaction

Updates a single scheduled transaction

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateScheduledTransaction" method="put" path="/plans/{plan_id}/scheduled_transactions/{scheduled_transaction_id}" -->
```typescript
import { Ynab } from "ynab-ts";
import { RFCDate } from "ynab-ts/types";

const ynab = new Ynab({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const result = await ynab.scheduledTransactions.updateScheduledTransaction({
    planId: "<id>",
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
import { scheduledTransactionsUpdateScheduledTransaction } from "ynab-ts/funcs/scheduledTransactionsUpdateScheduledTransaction.js";
import { RFCDate } from "ynab-ts/types";

// Use `YnabCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ynab = new YnabCore({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const res = await scheduledTransactionsUpdateScheduledTransaction(ynab, {
    planId: "<id>",
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
    console.log("scheduledTransactionsUpdateScheduledTransaction failed:", res.error);
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
  useScheduledTransactionsUpdateScheduledTransactionMutation
} from "ynab-ts/react-query/scheduledTransactionsUpdateScheduledTransaction.js";
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

## deleteScheduledTransaction

Deletes a scheduled transaction

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteScheduledTransaction" method="delete" path="/plans/{plan_id}/scheduled_transactions/{scheduled_transaction_id}" -->
```typescript
import { Ynab } from "ynab-ts";

const ynab = new Ynab({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const result = await ynab.scheduledTransactions.deleteScheduledTransaction({
    planId: "<id>",
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
import { scheduledTransactionsDeleteScheduledTransaction } from "ynab-ts/funcs/scheduledTransactionsDeleteScheduledTransaction.js";

// Use `YnabCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ynab = new YnabCore({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const res = await scheduledTransactionsDeleteScheduledTransaction(ynab, {
    planId: "<id>",
    scheduledTransactionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("scheduledTransactionsDeleteScheduledTransaction failed:", res.error);
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
  useScheduledTransactionsDeleteScheduledTransactionMutation
} from "ynab-ts/react-query/scheduledTransactionsDeleteScheduledTransaction.js";
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