# User
(*user*)

## Overview

### Available Operations

* [get](#get) - User info

## get

Returns authenticated user information

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getUser" method="get" path="/user" -->
```typescript
import { Ynab } from "ynab-ts";

const ynab = new Ynab({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const result = await ynab.user.get();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { YnabCore } from "ynab-ts/core.js";
import { userGet } from "ynab-ts/funcs/userGet.js";

// Use `YnabCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ynab = new YnabCore({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const res = await userGet(ynab);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userGet failed:", res.error);
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
  useUserGet,
  useUserGetSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchUserGet,
  
  // Utility to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateAllUserGet,
} from "ynab-ts/react-query/userGet.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.UserResponse](../../models/userresponse.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorResponse    | default                 | application/json        |
| errors.YnabDefaultError | 4XX, 5XX                | \*/\*                   |