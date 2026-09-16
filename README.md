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

YNAB API Endpoints: Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.

Read the [API Documentation](https://api.ynab.com) for more information about the API, including how to obtain an access token and how to use it to make requests.
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
yarn add ynab-ts
# Install optional peer dependencies if you plan to use React hooks
yarn add @tanstack/react-query react react-dom
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

### [Accounts](docs/sdks/accounts/README.md)

* [getAccounts](docs/sdks/accounts/README.md#getaccounts) - Get all accounts
* [createAccount](docs/sdks/accounts/README.md#createaccount) - Create an account
* [getAccountById](docs/sdks/accounts/README.md#getaccountbyid) - Get an account

### [Categories](docs/sdks/categories/README.md)

* [getCategories](docs/sdks/categories/README.md#getcategories) - Get all categories
* [createCategory](docs/sdks/categories/README.md#createcategory) - Create a category
* [getCategoryById](docs/sdks/categories/README.md#getcategorybyid) - Get a category
* [updateCategory](docs/sdks/categories/README.md#updatecategory) - Update a category
* [getMonthCategoryById](docs/sdks/categories/README.md#getmonthcategorybyid) - Get a category for a specific plan month
* [updateMonthCategory](docs/sdks/categories/README.md#updatemonthcategory) - Update a category for a specific month
* [createCategoryGroup](docs/sdks/categories/README.md#createcategorygroup) - Create a category group
* [updateCategoryGroup](docs/sdks/categories/README.md#updatecategorygroup) - Update a category group

### [MoneyMovements](docs/sdks/moneymovements/README.md)

* [getMoneyMovements](docs/sdks/moneymovements/README.md#getmoneymovements) - Get all money movements
* [getMoneyMovementsByMonth](docs/sdks/moneymovements/README.md#getmoneymovementsbymonth) - Get money movements for a plan month
* [getMoneyMovementGroups](docs/sdks/moneymovements/README.md#getmoneymovementgroups) - Get all money movement groups
* [getMoneyMovementGroupsByMonth](docs/sdks/moneymovements/README.md#getmoneymovementgroupsbymonth) - Get money movement groups for a plan month

### [Months](docs/sdks/months/README.md)

* [getPlanMonths](docs/sdks/months/README.md#getplanmonths) - Get all plan months
* [getPlanMonth](docs/sdks/months/README.md#getplanmonth) - Get a plan month

### [PayeeLocations](docs/sdks/payeelocations/README.md)

* [getPayeeLocations](docs/sdks/payeelocations/README.md#getpayeelocations) - Get all payee locations
* [getPayeeLocationById](docs/sdks/payeelocations/README.md#getpayeelocationbyid) - Get a payee location
* [getPayeeLocationsByPayee](docs/sdks/payeelocations/README.md#getpayeelocationsbypayee) - Get all locations for a payee

### [Payees](docs/sdks/payees/README.md)

* [getPayees](docs/sdks/payees/README.md#getpayees) - Get all payees
* [createPayee](docs/sdks/payees/README.md#createpayee) - Create a payee
* [getPayeeById](docs/sdks/payees/README.md#getpayeebyid) - Get a payee
* [updatePayee](docs/sdks/payees/README.md#updatepayee) - Update a payee

### [Plans](docs/sdks/plans/README.md)

* [getPlans](docs/sdks/plans/README.md#getplans) - Get all plans
* [getPlanById](docs/sdks/plans/README.md#getplanbyid) - Get a plan
* [getPlanSettingsById](docs/sdks/plans/README.md#getplansettingsbyid) - Get plan settings

### [ScheduledTransactions](docs/sdks/scheduledtransactions/README.md)

* [getScheduledTransactions](docs/sdks/scheduledtransactions/README.md#getscheduledtransactions) - Get all scheduled transactions
* [createScheduledTransaction](docs/sdks/scheduledtransactions/README.md#createscheduledtransaction) - Create a scheduled transaction
* [getScheduledTransactionById](docs/sdks/scheduledtransactions/README.md#getscheduledtransactionbyid) - Get a scheduled transaction
* [updateScheduledTransaction](docs/sdks/scheduledtransactions/README.md#updatescheduledtransaction) - Update a scheduled transaction
* [deleteScheduledTransaction](docs/sdks/scheduledtransactions/README.md#deletescheduledtransaction) - Delete a scheduled transaction

### [Transactions](docs/sdks/transactions/README.md)

* [getTransactions](docs/sdks/transactions/README.md#gettransactions) - Get transactions
* [createTransaction](docs/sdks/transactions/README.md#createtransaction) - Create a single transaction or multiple transactions
* [updateTransactions](docs/sdks/transactions/README.md#updatetransactions) - Update multiple transactions
* [importTransactions](docs/sdks/transactions/README.md#importtransactions) - Import transactions
* [getTransactionById](docs/sdks/transactions/README.md#gettransactionbyid) - Get a transaction
* [updateTransaction](docs/sdks/transactions/README.md#updatetransaction) - Update a transaction
* [deleteTransaction](docs/sdks/transactions/README.md#deletetransaction) - Delete a transaction
* [getTransactionsByAccount](docs/sdks/transactions/README.md#gettransactionsbyaccount) - Get account transactions
* [getTransactionsByCategory](docs/sdks/transactions/README.md#gettransactionsbycategory) - Get category transactions
* [getTransactionsByPayee](docs/sdks/transactions/README.md#gettransactionsbypayee) - Get payee transactions
* [getTransactionsByMonth](docs/sdks/transactions/README.md#gettransactionsbymonth) - Get plan month transactions

### [User](docs/sdks/user/README.md)

* [get](docs/sdks/user/README.md#get) - Get user

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

- [`accountsCreateAccount`](docs/sdks/accounts/README.md#createaccount) - Create an account
- [`accountsGetAccountById`](docs/sdks/accounts/README.md#getaccountbyid) - Get an account
- [`accountsGetAccounts`](docs/sdks/accounts/README.md#getaccounts) - Get all accounts
- [`categoriesCreateCategory`](docs/sdks/categories/README.md#createcategory) - Create a category
- [`categoriesCreateCategoryGroup`](docs/sdks/categories/README.md#createcategorygroup) - Create a category group
- [`categoriesGetCategories`](docs/sdks/categories/README.md#getcategories) - Get all categories
- [`categoriesGetCategoryById`](docs/sdks/categories/README.md#getcategorybyid) - Get a category
- [`categoriesGetMonthCategoryById`](docs/sdks/categories/README.md#getmonthcategorybyid) - Get a category for a specific plan month
- [`categoriesUpdateCategory`](docs/sdks/categories/README.md#updatecategory) - Update a category
- [`categoriesUpdateCategoryGroup`](docs/sdks/categories/README.md#updatecategorygroup) - Update a category group
- [`categoriesUpdateMonthCategory`](docs/sdks/categories/README.md#updatemonthcategory) - Update a category for a specific month
- [`moneyMovementsGetMoneyMovementGroups`](docs/sdks/moneymovements/README.md#getmoneymovementgroups) - Get all money movement groups
- [`moneyMovementsGetMoneyMovementGroupsByMonth`](docs/sdks/moneymovements/README.md#getmoneymovementgroupsbymonth) - Get money movement groups for a plan month
- [`moneyMovementsGetMoneyMovements`](docs/sdks/moneymovements/README.md#getmoneymovements) - Get all money movements
- [`moneyMovementsGetMoneyMovementsByMonth`](docs/sdks/moneymovements/README.md#getmoneymovementsbymonth) - Get money movements for a plan month
- [`monthsGetPlanMonth`](docs/sdks/months/README.md#getplanmonth) - Get a plan month
- [`monthsGetPlanMonths`](docs/sdks/months/README.md#getplanmonths) - Get all plan months
- [`payeeLocationsGetPayeeLocationById`](docs/sdks/payeelocations/README.md#getpayeelocationbyid) - Get a payee location
- [`payeeLocationsGetPayeeLocations`](docs/sdks/payeelocations/README.md#getpayeelocations) - Get all payee locations
- [`payeeLocationsGetPayeeLocationsByPayee`](docs/sdks/payeelocations/README.md#getpayeelocationsbypayee) - Get all locations for a payee
- [`payeesCreatePayee`](docs/sdks/payees/README.md#createpayee) - Create a payee
- [`payeesGetPayeeById`](docs/sdks/payees/README.md#getpayeebyid) - Get a payee
- [`payeesGetPayees`](docs/sdks/payees/README.md#getpayees) - Get all payees
- [`payeesUpdatePayee`](docs/sdks/payees/README.md#updatepayee) - Update a payee
- [`plansGetPlanById`](docs/sdks/plans/README.md#getplanbyid) - Get a plan
- [`plansGetPlans`](docs/sdks/plans/README.md#getplans) - Get all plans
- [`plansGetPlanSettingsById`](docs/sdks/plans/README.md#getplansettingsbyid) - Get plan settings
- [`scheduledTransactionsCreateScheduledTransaction`](docs/sdks/scheduledtransactions/README.md#createscheduledtransaction) - Create a scheduled transaction
- [`scheduledTransactionsDeleteScheduledTransaction`](docs/sdks/scheduledtransactions/README.md#deletescheduledtransaction) - Delete a scheduled transaction
- [`scheduledTransactionsGetScheduledTransactionById`](docs/sdks/scheduledtransactions/README.md#getscheduledtransactionbyid) - Get a scheduled transaction
- [`scheduledTransactionsGetScheduledTransactions`](docs/sdks/scheduledtransactions/README.md#getscheduledtransactions) - Get all scheduled transactions
- [`scheduledTransactionsUpdateScheduledTransaction`](docs/sdks/scheduledtransactions/README.md#updatescheduledtransaction) - Update a scheduled transaction
- [`transactionsCreateTransaction`](docs/sdks/transactions/README.md#createtransaction) - Create a single transaction or multiple transactions
- [`transactionsDeleteTransaction`](docs/sdks/transactions/README.md#deletetransaction) - Delete a transaction
- [`transactionsGetTransactionById`](docs/sdks/transactions/README.md#gettransactionbyid) - Get a transaction
- [`transactionsGetTransactions`](docs/sdks/transactions/README.md#gettransactions) - Get transactions
- [`transactionsGetTransactionsByAccount`](docs/sdks/transactions/README.md#gettransactionsbyaccount) - Get account transactions
- [`transactionsGetTransactionsByCategory`](docs/sdks/transactions/README.md#gettransactionsbycategory) - Get category transactions
- [`transactionsGetTransactionsByMonth`](docs/sdks/transactions/README.md#gettransactionsbymonth) - Get plan month transactions
- [`transactionsGetTransactionsByPayee`](docs/sdks/transactions/README.md#gettransactionsbypayee) - Get payee transactions
- [`transactionsImportTransactions`](docs/sdks/transactions/README.md#importtransactions) - Import transactions
- [`transactionsUpdateTransaction`](docs/sdks/transactions/README.md#updatetransaction) - Update a transaction
- [`transactionsUpdateTransactions`](docs/sdks/transactions/README.md#updatetransactions) - Update multiple transactions
- [`userGet`](docs/sdks/user/README.md#get) - Get user

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

- [`useAccountsCreateAccountMutation`](docs/sdks/accounts/README.md#createaccount) - Create an account
- [`useAccountsGetAccountById`](docs/sdks/accounts/README.md#getaccountbyid) - Get an account
- [`useAccountsGetAccounts`](docs/sdks/accounts/README.md#getaccounts) - Get all accounts
- [`useCategoriesCreateCategoryGroupMutation`](docs/sdks/categories/README.md#createcategorygroup) - Create a category group
- [`useCategoriesCreateCategoryMutation`](docs/sdks/categories/README.md#createcategory) - Create a category
- [`useCategoriesGetCategories`](docs/sdks/categories/README.md#getcategories) - Get all categories
- [`useCategoriesGetCategoryById`](docs/sdks/categories/README.md#getcategorybyid) - Get a category
- [`useCategoriesGetMonthCategoryById`](docs/sdks/categories/README.md#getmonthcategorybyid) - Get a category for a specific plan month
- [`useCategoriesUpdateCategoryGroupMutation`](docs/sdks/categories/README.md#updatecategorygroup) - Update a category group
- [`useCategoriesUpdateCategoryMutation`](docs/sdks/categories/README.md#updatecategory) - Update a category
- [`useCategoriesUpdateMonthCategoryMutation`](docs/sdks/categories/README.md#updatemonthcategory) - Update a category for a specific month
- [`useMoneyMovementsGetMoneyMovementGroups`](docs/sdks/moneymovements/README.md#getmoneymovementgroups) - Get all money movement groups
- [`useMoneyMovementsGetMoneyMovementGroupsByMonth`](docs/sdks/moneymovements/README.md#getmoneymovementgroupsbymonth) - Get money movement groups for a plan month
- [`useMoneyMovementsGetMoneyMovements`](docs/sdks/moneymovements/README.md#getmoneymovements) - Get all money movements
- [`useMoneyMovementsGetMoneyMovementsByMonth`](docs/sdks/moneymovements/README.md#getmoneymovementsbymonth) - Get money movements for a plan month
- [`useMonthsGetPlanMonth`](docs/sdks/months/README.md#getplanmonth) - Get a plan month
- [`useMonthsGetPlanMonths`](docs/sdks/months/README.md#getplanmonths) - Get all plan months
- [`usePayeeLocationsGetPayeeLocationById`](docs/sdks/payeelocations/README.md#getpayeelocationbyid) - Get a payee location
- [`usePayeeLocationsGetPayeeLocations`](docs/sdks/payeelocations/README.md#getpayeelocations) - Get all payee locations
- [`usePayeeLocationsGetPayeeLocationsByPayee`](docs/sdks/payeelocations/README.md#getpayeelocationsbypayee) - Get all locations for a payee
- [`usePayeesCreatePayeeMutation`](docs/sdks/payees/README.md#createpayee) - Create a payee
- [`usePayeesGetPayeeById`](docs/sdks/payees/README.md#getpayeebyid) - Get a payee
- [`usePayeesGetPayees`](docs/sdks/payees/README.md#getpayees) - Get all payees
- [`usePayeesUpdatePayeeMutation`](docs/sdks/payees/README.md#updatepayee) - Update a payee
- [`usePlansGetPlanById`](docs/sdks/plans/README.md#getplanbyid) - Get a plan
- [`usePlansGetPlans`](docs/sdks/plans/README.md#getplans) - Get all plans
- [`usePlansGetPlanSettingsById`](docs/sdks/plans/README.md#getplansettingsbyid) - Get plan settings
- [`useScheduledTransactionsCreateScheduledTransactionMutation`](docs/sdks/scheduledtransactions/README.md#createscheduledtransaction) - Create a scheduled transaction
- [`useScheduledTransactionsDeleteScheduledTransactionMutation`](docs/sdks/scheduledtransactions/README.md#deletescheduledtransaction) - Delete a scheduled transaction
- [`useScheduledTransactionsGetScheduledTransactionById`](docs/sdks/scheduledtransactions/README.md#getscheduledtransactionbyid) - Get a scheduled transaction
- [`useScheduledTransactionsGetScheduledTransactions`](docs/sdks/scheduledtransactions/README.md#getscheduledtransactions) - Get all scheduled transactions
- [`useScheduledTransactionsUpdateScheduledTransactionMutation`](docs/sdks/scheduledtransactions/README.md#updatescheduledtransaction) - Update a scheduled transaction
- [`useTransactionsCreateTransactionMutation`](docs/sdks/transactions/README.md#createtransaction) - Create a single transaction or multiple transactions
- [`useTransactionsDeleteTransactionMutation`](docs/sdks/transactions/README.md#deletetransaction) - Delete a transaction
- [`useTransactionsGetTransactionById`](docs/sdks/transactions/README.md#gettransactionbyid) - Get a transaction
- [`useTransactionsGetTransactions`](docs/sdks/transactions/README.md#gettransactions) - Get transactions
- [`useTransactionsGetTransactionsByAccount`](docs/sdks/transactions/README.md#gettransactionsbyaccount) - Get account transactions
- [`useTransactionsGetTransactionsByCategory`](docs/sdks/transactions/README.md#gettransactionsbycategory) - Get category transactions
- [`useTransactionsGetTransactionsByMonth`](docs/sdks/transactions/README.md#gettransactionsbymonth) - Get plan month transactions
- [`useTransactionsGetTransactionsByPayee`](docs/sdks/transactions/README.md#gettransactionsbypayee) - Get payee transactions
- [`useTransactionsImportTransactionsMutation`](docs/sdks/transactions/README.md#importtransactions) - Import transactions
- [`useTransactionsUpdateTransactionMutation`](docs/sdks/transactions/README.md#updatetransaction) - Update a transaction
- [`useTransactionsUpdateTransactionsMutation`](docs/sdks/transactions/README.md#updatetransactions) - Update multiple transactions
- [`useUserGet`](docs/sdks/user/README.md#get) - Get user

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
    const result = await ynab.plans.getPlans();

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
  * [`ErrorResponse`](./src/models/errors/errorresponse.ts): *

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

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
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

The following example shows how to:
- route requests through a proxy server using [undici](https://www.npmjs.com/package/undici)'s ProxyAgent
- use the `"beforeRequest"` hook to add a custom header and a timeout to requests
- use the `"requestError"` hook to log errors

```typescript
import { Ynab } from "ynab-ts";
import { ProxyAgent } from "undici";
import { HTTPClient } from "ynab-ts/lib/http";

const dispatcher = new ProxyAgent("http://proxy.example.com:8080");

const httpClient = new HTTPClient({
  // 'fetcher' takes a function that has the same signature as native 'fetch'.
  fetcher: (input, init) =>
    // 'dispatcher' is specific to undici and not part of the standard Fetch API.
    fetch(input, { ...init, dispatcher } as RequestInit),
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

const sdk = new Ynab({ httpClient: httpClient });
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
