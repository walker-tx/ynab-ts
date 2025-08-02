# ynab-ts

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *ynab-ts* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=ynab-ts&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


<br /><br />
> [!IMPORTANT]
> This SDK is not yet ready for production use. To complete setup please follow the steps outlined in your [workspace](https://app.speakeasy.com/org/speakeasy-self/speakeasy-self). Delete this section before > publishing to a package manager.

<!-- Start Summary [summary] -->
## Summary

YNAB API Endpoints: Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [ynab-ts](#ynab-ts)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [React hooks with TanStack Query](#react-hooks-with-tanstack-query)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add ynab-ts
# Install optional peer dependencies if you plan to use React hooks
npm add @tanstack/react-query react react-dom
```

### PNPM

```bash
pnpm add ynab-ts
# Install optional peer dependencies if you plan to use React hooks
pnpm add @tanstack/react-query react react-dom
```

### Bun

```bash
bun add ynab-ts
# Install optional peer dependencies if you plan to use React hooks
bun add @tanstack/react-query react react-dom
```

### Yarn

```bash
yarn add ynab-ts zod
# Install optional peer dependencies if you plan to use React hooks
yarn add @tanstack/react-query react react-dom

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

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
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name     | Type | Scheme      | Environment Variable |
| -------- | ---- | ----------- | -------------------- |
| `bearer` | http | HTTP Bearer | `YNAB_BEARER`        |

To authenticate with the API the `bearer` parameter must be set when initializing the SDK client instance. For example:
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
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [accounts](docs/sdks/accounts/README.md)

* [list](docs/sdks/accounts/README.md#list) - Account list
* [create](docs/sdks/accounts/README.md#create) - Create a new account
* [get](docs/sdks/accounts/README.md#get) - Single account

### [budgets](docs/sdks/budgets/README.md)

* [list](docs/sdks/budgets/README.md#list) - List budgets
* [get](docs/sdks/budgets/README.md#get) - Single budget
* [getSettings](docs/sdks/budgets/README.md#getsettings) - Budget Settings

### [categories](docs/sdks/categories/README.md)

* [list](docs/sdks/categories/README.md#list) - List categories
* [get](docs/sdks/categories/README.md#get) - Single category
* [update](docs/sdks/categories/README.md#update) - Update a category
* [getByMonth](docs/sdks/categories/README.md#getbymonth) - Single category for a specific budget month
* [updateMonth](docs/sdks/categories/README.md#updatemonth) - Update a category for a specific month

### [months](docs/sdks/months/README.md)

* [list](docs/sdks/months/README.md#list) - List budget months
* [get](docs/sdks/months/README.md#get) - Single budget month

### [payeeLocations](docs/sdks/payeelocations/README.md)

* [list](docs/sdks/payeelocations/README.md#list) - List payee locations
* [get](docs/sdks/payeelocations/README.md#get) - Single payee location
* [listByPayee](docs/sdks/payeelocations/README.md#listbypayee) - List locations for a payee

### [payees](docs/sdks/payees/README.md)

* [list](docs/sdks/payees/README.md#list) - List payees
* [get](docs/sdks/payees/README.md#get) - Single payee
* [update](docs/sdks/payees/README.md#update) - Update a payee

### [scheduledTransactions](docs/sdks/scheduledtransactions/README.md)

* [list](docs/sdks/scheduledtransactions/README.md#list) - List scheduled transactions
* [create](docs/sdks/scheduledtransactions/README.md#create) - Create a single scheduled transaction
* [get](docs/sdks/scheduledtransactions/README.md#get) - Single scheduled transaction
* [update](docs/sdks/scheduledtransactions/README.md#update) - Updates an existing scheduled transaction
* [delete](docs/sdks/scheduledtransactions/README.md#delete) - Deletes an existing scheduled transaction

### [transactions](docs/sdks/transactions/README.md)

* [list](docs/sdks/transactions/README.md#list) - List transactions
* [create](docs/sdks/transactions/README.md#create) - Create a single transaction or multiple transactions
* [updateMany](docs/sdks/transactions/README.md#updatemany) - Update multiple transactions
* [import](docs/sdks/transactions/README.md#import) - Import transactions
* [get](docs/sdks/transactions/README.md#get) - Single transaction
* [updateOne](docs/sdks/transactions/README.md#updateone) - Updates an existing transaction
* [delete](docs/sdks/transactions/README.md#delete) - Deletes an existing transaction
* [listByAccount](docs/sdks/transactions/README.md#listbyaccount) - List account transactions
* [listByCategory](docs/sdks/transactions/README.md#listbycategory) - List category transactions, excluding any pending transactions
* [listByPayee](docs/sdks/transactions/README.md#listbypayee) - List payee transactions, excluding any pending transactions
* [listByMonth](docs/sdks/transactions/README.md#listbymonth) - List transactions in month, excluding any pending transactions

### [user](docs/sdks/user/README.md)

* [get](docs/sdks/user/README.md#get) - User info


</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`accountsCreate`](docs/sdks/accounts/README.md#create) - Create a new account
- [`accountsGet`](docs/sdks/accounts/README.md#get) - Single account
- [`accountsList`](docs/sdks/accounts/README.md#list) - Account list
- [`budgetsGet`](docs/sdks/budgets/README.md#get) - Single budget
- [`budgetsGetSettings`](docs/sdks/budgets/README.md#getsettings) - Budget Settings
- [`budgetsList`](docs/sdks/budgets/README.md#list) - List budgets
- [`categoriesGet`](docs/sdks/categories/README.md#get) - Single category
- [`categoriesGetByMonth`](docs/sdks/categories/README.md#getbymonth) - Single category for a specific budget month
- [`categoriesList`](docs/sdks/categories/README.md#list) - List categories
- [`categoriesUpdate`](docs/sdks/categories/README.md#update) - Update a category
- [`categoriesUpdateMonth`](docs/sdks/categories/README.md#updatemonth) - Update a category for a specific month
- [`monthsGet`](docs/sdks/months/README.md#get) - Single budget month
- [`monthsList`](docs/sdks/months/README.md#list) - List budget months
- [`payeeLocationsGet`](docs/sdks/payeelocations/README.md#get) - Single payee location
- [`payeeLocationsList`](docs/sdks/payeelocations/README.md#list) - List payee locations
- [`payeeLocationsListByPayee`](docs/sdks/payeelocations/README.md#listbypayee) - List locations for a payee
- [`payeesGet`](docs/sdks/payees/README.md#get) - Single payee
- [`payeesList`](docs/sdks/payees/README.md#list) - List payees
- [`payeesUpdate`](docs/sdks/payees/README.md#update) - Update a payee
- [`scheduledTransactionsCreate`](docs/sdks/scheduledtransactions/README.md#create) - Create a single scheduled transaction
- [`scheduledTransactionsDelete`](docs/sdks/scheduledtransactions/README.md#delete) - Deletes an existing scheduled transaction
- [`scheduledTransactionsGet`](docs/sdks/scheduledtransactions/README.md#get) - Single scheduled transaction
- [`scheduledTransactionsList`](docs/sdks/scheduledtransactions/README.md#list) - List scheduled transactions
- [`scheduledTransactionsUpdate`](docs/sdks/scheduledtransactions/README.md#update) - Updates an existing scheduled transaction
- [`transactionsCreate`](docs/sdks/transactions/README.md#create) - Create a single transaction or multiple transactions
- [`transactionsDelete`](docs/sdks/transactions/README.md#delete) - Deletes an existing transaction
- [`transactionsGet`](docs/sdks/transactions/README.md#get) - Single transaction
- [`transactionsImport`](docs/sdks/transactions/README.md#import) - Import transactions
- [`transactionsList`](docs/sdks/transactions/README.md#list) - List transactions
- [`transactionsListByAccount`](docs/sdks/transactions/README.md#listbyaccount) - List account transactions
- [`transactionsListByCategory`](docs/sdks/transactions/README.md#listbycategory) - List category transactions, excluding any pending transactions
- [`transactionsListByMonth`](docs/sdks/transactions/README.md#listbymonth) - List transactions in month, excluding any pending transactions
- [`transactionsListByPayee`](docs/sdks/transactions/README.md#listbypayee) - List payee transactions, excluding any pending transactions
- [`transactionsUpdateMany`](docs/sdks/transactions/README.md#updatemany) - Update multiple transactions
- [`transactionsUpdateOne`](docs/sdks/transactions/README.md#updateone) - Updates an existing transaction
- [`userGet`](docs/sdks/user/README.md#get) - User info

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start React hooks with TanStack Query [react-query] -->
## React hooks with TanStack Query

React hooks built on [TanStack Query][tanstack-query] are included in this SDK.
These hooks and the utility functions provided alongside them can be used to
build rich applications that pull data from the API using one of the most
popular asynchronous state management library.

[tanstack-query]: https://tanstack.com/query/v5/docs/framework/react/overview

To learn about this feature and how to get started, check
[REACT_QUERY.md](./REACT_QUERY.md).

> [!WARNING]
>
> This feature is currently in **preview** and is subject to breaking changes
> within the current major version of the SDK as we gather user feedback on it.

<details>

<summary>Available React hooks</summary>

- [`useAccountsCreateMutation`](docs/sdks/accounts/README.md#create) - Create a new account
- [`useAccountsGet`](docs/sdks/accounts/README.md#get) - Single account
- [`useAccountsList`](docs/sdks/accounts/README.md#list) - Account list
- [`useBudgetsGet`](docs/sdks/budgets/README.md#get) - Single budget
- [`useBudgetsGetSettings`](docs/sdks/budgets/README.md#getsettings) - Budget Settings
- [`useBudgetsList`](docs/sdks/budgets/README.md#list) - List budgets
- [`useCategoriesGet`](docs/sdks/categories/README.md#get) - Single category
- [`useCategoriesGetByMonth`](docs/sdks/categories/README.md#getbymonth) - Single category for a specific budget month
- [`useCategoriesList`](docs/sdks/categories/README.md#list) - List categories
- [`useCategoriesUpdateMonthMutation`](docs/sdks/categories/README.md#updatemonth) - Update a category for a specific month
- [`useCategoriesUpdateMutation`](docs/sdks/categories/README.md#update) - Update a category
- [`useMonthsGet`](docs/sdks/months/README.md#get) - Single budget month
- [`useMonthsList`](docs/sdks/months/README.md#list) - List budget months
- [`usePayeeLocationsGet`](docs/sdks/payeelocations/README.md#get) - Single payee location
- [`usePayeeLocationsList`](docs/sdks/payeelocations/README.md#list) - List payee locations
- [`usePayeeLocationsListByPayee`](docs/sdks/payeelocations/README.md#listbypayee) - List locations for a payee
- [`usePayeesGet`](docs/sdks/payees/README.md#get) - Single payee
- [`usePayeesList`](docs/sdks/payees/README.md#list) - List payees
- [`usePayeesUpdateMutation`](docs/sdks/payees/README.md#update) - Update a payee
- [`useScheduledTransactionsCreateMutation`](docs/sdks/scheduledtransactions/README.md#create) - Create a single scheduled transaction
- [`useScheduledTransactionsDeleteMutation`](docs/sdks/scheduledtransactions/README.md#delete) - Deletes an existing scheduled transaction
- [`useScheduledTransactionsGet`](docs/sdks/scheduledtransactions/README.md#get) - Single scheduled transaction
- [`useScheduledTransactionsList`](docs/sdks/scheduledtransactions/README.md#list) - List scheduled transactions
- [`useScheduledTransactionsUpdateMutation`](docs/sdks/scheduledtransactions/README.md#update) - Updates an existing scheduled transaction
- [`useTransactionsCreateMutation`](docs/sdks/transactions/README.md#create) - Create a single transaction or multiple transactions
- [`useTransactionsDeleteMutation`](docs/sdks/transactions/README.md#delete) - Deletes an existing transaction
- [`useTransactionsGet`](docs/sdks/transactions/README.md#get) - Single transaction
- [`useTransactionsImportMutation`](docs/sdks/transactions/README.md#import) - Import transactions
- [`useTransactionsList`](docs/sdks/transactions/README.md#list) - List transactions
- [`useTransactionsListByAccount`](docs/sdks/transactions/README.md#listbyaccount) - List account transactions
- [`useTransactionsListByCategory`](docs/sdks/transactions/README.md#listbycategory) - List category transactions, excluding any pending transactions
- [`useTransactionsListByMonth`](docs/sdks/transactions/README.md#listbymonth) - List transactions in month, excluding any pending transactions
- [`useTransactionsListByPayee`](docs/sdks/transactions/README.md#listbypayee) - List payee transactions, excluding any pending transactions
- [`useTransactionsUpdateManyMutation`](docs/sdks/transactions/README.md#updatemany) - Update multiple transactions
- [`useTransactionsUpdateOneMutation`](docs/sdks/transactions/README.md#updateone) - Updates an existing transaction
- [`useUserGet`](docs/sdks/user/README.md#get) - User info

</details>
<!-- End React hooks with TanStack Query [react-query] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Ynab } from "ynab-ts";

const ynab = new Ynab({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const result = await ynab.user.get({
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Ynab } from "ynab-ts";

const ynab = new Ynab({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const result = await ynab.user.get();

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`YnabError`](./src/models/errors/ynaberror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { Ynab } from "ynab-ts";
import * as errors from "ynab-ts/models/errors";

const ynab = new Ynab({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  try {
    const result = await ynab.user.get();

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.YnabError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.ErrorResponse) {
        console.log(error.data$.error); // models.ErrorDetail
      }
    }
  }
}

run();

```

### Error Classes
**Primary errors:**
* [`YnabError`](./src/models/errors/ynaberror.ts): The base class for HTTP error responses.
  * [`ErrorResponse`](./src/models/errors/errorresponse.ts): Generic error.

<details><summary>Less common errors (6)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`YnabError`](./src/models/errors/ynaberror.ts)**:
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Ynab } from "ynab-ts";

const ynab = new Ynab({
  serverURL: "https://api.ynab.com/v1",
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const result = await ynab.user.get();

  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Ynab } from "ynab-ts";
import { HTTPClient } from "ynab-ts/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Ynab({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Ynab } from "ynab-ts";

const sdk = new Ynab({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `YNAB_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=ynab-ts&utm_campaign=typescript)
