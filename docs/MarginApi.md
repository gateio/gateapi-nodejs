# MarginApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listMarginAccounts**](MarginApi.md#listMarginAccounts) | **GET** /margin/accounts | Margin account list
[**listMarginAccountBook**](MarginApi.md#listMarginAccountBook) | **GET** /margin/account_book | List margin account balance change history
[**listFundingAccounts**](MarginApi.md#listFundingAccounts) | **GET** /margin/funding_accounts | Funding account list
[**getAutoRepayStatus**](MarginApi.md#getAutoRepayStatus) | **GET** /margin/auto_repay | Retrieve user auto repayment setting
[**setAutoRepay**](MarginApi.md#setAutoRepay) | **POST** /margin/auto_repay | Update user\&#39;s auto repayment setting
[**getMarginTransferable**](MarginApi.md#getMarginTransferable) | **GET** /margin/transferable | Get the max transferable amount for a specific margin currency
[**listMarginCurrencyPairs**](MarginApi.md#listMarginCurrencyPairs) | **GET** /margin/currency_pairs | List all supported currency pairs supported in margin trading(Deprecated)
[**getMarginCurrencyPair**](MarginApi.md#getMarginCurrencyPair) | **GET** /margin/currency_pairs/{currency_pair} | Query one single margin currency pair(Deprecated)
[**listFundingBook**](MarginApi.md#listFundingBook) | **GET** /margin/funding_book | Order book of lending loans(Deprecated)
[**listLoans**](MarginApi.md#listLoans) | **GET** /margin/loans | List all loans(Deprecated)
[**createLoan**](MarginApi.md#createLoan) | **POST** /margin/loans | Lend or borrow(Deprecated)
[**mergeLoans**](MarginApi.md#mergeLoans) | **POST** /margin/merged_loans | Merge multiple lending loans(Deprecated)
[**getLoan**](MarginApi.md#getLoan) | **GET** /margin/loans/{loan_id} | Retrieve one single loan detail(Deprecated)
[**cancelLoan**](MarginApi.md#cancelLoan) | **DELETE** /margin/loans/{loan_id} | Cancel lending loan(Deprecated)
[**updateLoan**](MarginApi.md#updateLoan) | **PATCH** /margin/loans/{loan_id} | Modify a loan(Deprecated)
[**listLoanRepayments**](MarginApi.md#listLoanRepayments) | **GET** /margin/loans/{loan_id}/repayment | List loan repayment records(Deprecated)
[**repayLoan**](MarginApi.md#repayLoan) | **POST** /margin/loans/{loan_id}/repayment | Repay a loan(Deprecated)
[**listLoanRecords**](MarginApi.md#listLoanRecords) | **GET** /margin/loan_records | List repayment records of a specific loan(Deprecated)
[**getLoanRecord**](MarginApi.md#getLoanRecord) | **GET** /margin/loan_records/{loan_record_id} | Get one single loan record(Deprecated)
[**updateLoanRecord**](MarginApi.md#updateLoanRecord) | **PATCH** /margin/loan_records/{loan_record_id} | Modify a loan record(Deprecated)
[**getMarginBorrowable**](MarginApi.md#getMarginBorrowable) | **GET** /margin/borrowable | Get the max borrowable amount for a specific margin currency(Deprecated)
[**listCrossMarginCurrencies**](MarginApi.md#listCrossMarginCurrencies) | **GET** /margin/cross/currencies | Currencies supported by cross margin.
[**getCrossMarginCurrency**](MarginApi.md#getCrossMarginCurrency) | **GET** /margin/cross/currencies/{currency} | Retrieve detail of one single currency supported by cross margin
[**getCrossMarginAccount**](MarginApi.md#getCrossMarginAccount) | **GET** /margin/cross/accounts | Retrieve cross margin account
[**listCrossMarginAccountBook**](MarginApi.md#listCrossMarginAccountBook) | **GET** /margin/cross/account_book | Retrieve cross margin account change history
[**listCrossMarginLoans**](MarginApi.md#listCrossMarginLoans) | **GET** /margin/cross/loans | List cross margin borrow history
[**createCrossMarginLoan**](MarginApi.md#createCrossMarginLoan) | **POST** /margin/cross/loans | Create a cross margin borrow loan
[**getCrossMarginLoan**](MarginApi.md#getCrossMarginLoan) | **GET** /margin/cross/loans/{loan_id} | Retrieve single borrow loan detail
[**listCrossMarginRepayments**](MarginApi.md#listCrossMarginRepayments) | **GET** /margin/cross/repayments | Retrieve cross margin repayments
[**repayCrossMarginLoan**](MarginApi.md#repayCrossMarginLoan) | **POST** /margin/cross/repayments | Cross margin repayments
[**getCrossMarginInterestRecords**](MarginApi.md#getCrossMarginInterestRecords) | **GET** /margin/cross/interest_records | Interest records for the cross margin account
[**getCrossMarginTransferable**](MarginApi.md#getCrossMarginTransferable) | **GET** /margin/cross/transferable | Get the max transferable amount for a specific cross margin currency
[**getCrossMarginEstimateRate**](MarginApi.md#getCrossMarginEstimateRate) | **GET** /margin/cross/estimate_rate | Estimated interest rates
[**getCrossMarginBorrowable**](MarginApi.md#getCrossMarginBorrowable) | **GET** /margin/cross/borrowable | Get the max borrowable amount for a specific cross margin currency


## listMarginAccounts

> Promise<{ response: http.IncomingMessage; body: Array<MarginAccount>; }> listMarginAccounts(opts)

Margin account list

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginApi(client);
const opts = {
  'currencyPair': "BTC_USDT" // string | Currency pair
};
api.listMarginAccounts(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **string**| Currency pair | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<MarginAccount>; }> [MarginAccount](MarginAccount.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listMarginAccountBook

> Promise<{ response: http.IncomingMessage; body: Array<MarginAccountBook>; }> listMarginAccountBook(opts)

List margin account balance change history

Only transferals from and to margin account are provided for now. Time range allows 30 days at most

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginApi(client);
const opts = {
  'currency': "currency_example", // string | List records related to specified currency only. If specified, `currency_pair` is also required.
  'currencyPair': "currencyPair_example", // string | List records related to specified currency pair. Used in combination with `currency`. Ignored if `currency` is not provided
  'type': "lend", // string | Only retrieve changes of the specified type. All types will be returned if not specified.
  'from': 1627706330, // number | Start timestamp of the query
  'to': 1635329650, // number | Time range ending, default to current time
  'page': 1, // number | Page number
  'limit': 100 // number | Maximum number of records to be returned in a single list
};
api.listMarginAccountBook(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| List records related to specified currency only. If specified, &#x60;currency_pair&#x60; is also required. | [optional] [default to undefined]
 **currencyPair** | **string**| List records related to specified currency pair. Used in combination with &#x60;currency&#x60;. Ignored if &#x60;currency&#x60; is not provided | [optional] [default to undefined]
 **type** | **string**| Only retrieve changes of the specified type. All types will be returned if not specified. | [optional] [default to undefined]
 **from** | **number**| Start timestamp of the query | [optional] [default to undefined]
 **to** | **number**| Time range ending, default to current time | [optional] [default to undefined]
 **page** | **number**| Page number | [optional] [default to 1]
 **limit** | **number**| Maximum number of records to be returned in a single list | [optional] [default to 100]

### Return type

Promise<{ response: AxiosResponse; body: Array<MarginAccountBook>; }> [MarginAccountBook](MarginAccountBook.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listFundingAccounts

> Promise<{ response: http.IncomingMessage; body: Array<FundingAccount>; }> listFundingAccounts(opts)

Funding account list

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginApi(client);
const opts = {
  'currency': "BTC" // string | Retrieve data of the specified currency
};
api.listFundingAccounts(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Retrieve data of the specified currency | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<FundingAccount>; }> [FundingAccount](FundingAccount.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getAutoRepayStatus

> Promise<{ response: http.IncomingMessage; body: AutoRepaySetting; }> getAutoRepayStatus()

Retrieve user auto repayment setting

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginApi(client);
api.getAutoRepayStatus()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: AutoRepaySetting; }> [AutoRepaySetting](AutoRepaySetting.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## setAutoRepay

> Promise<{ response: http.IncomingMessage; body: AutoRepaySetting; }> setAutoRepay(status)

Update user\&#39;s auto repayment setting

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginApi(client);
const status = "on"; // string | New auto repayment status. `on` - enabled, `off` - disabled
api.setAutoRepay(status)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **string**| New auto repayment status. &#x60;on&#x60; - enabled, &#x60;off&#x60; - disabled | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: AutoRepaySetting; }> [AutoRepaySetting](AutoRepaySetting.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getMarginTransferable

> Promise<{ response: http.IncomingMessage; body: MarginTransferable; }> getMarginTransferable(currency, opts)

Get the max transferable amount for a specific margin currency

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginApi(client);
const currency = "BTC"; // string | Retrieve data of the specified currency
const opts = {
  'currencyPair': "BTC_USDT" // string | Currency pair
};
api.getMarginTransferable(currency, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Retrieve data of the specified currency | [default to undefined]
 **currencyPair** | **string**| Currency pair | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: MarginTransferable; }> [MarginTransferable](MarginTransferable.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listMarginCurrencyPairs

> Promise<{ response: http.IncomingMessage; body: Array<MarginCurrencyPair>; }> listMarginCurrencyPairs()

List all supported currency pairs supported in margin trading(Deprecated)

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.MarginApi(client);
api.listMarginCurrencyPairs()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: Array<MarginCurrencyPair>; }> [MarginCurrencyPair](MarginCurrencyPair.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getMarginCurrencyPair

> Promise<{ response: http.IncomingMessage; body: MarginCurrencyPair; }> getMarginCurrencyPair(currencyPair)

Query one single margin currency pair(Deprecated)

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.MarginApi(client);
const currencyPair = "BTC_USDT"; // string | Margin currency pair
api.getMarginCurrencyPair(currencyPair)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **string**| Margin currency pair | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: MarginCurrencyPair; }> [MarginCurrencyPair](MarginCurrencyPair.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listFundingBook

> Promise<{ response: http.IncomingMessage; body: Array<FundingBookItem>; }> listFundingBook(currency)

Order book of lending loans(Deprecated)

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.MarginApi(client);
const currency = "BTC"; // string | Retrieve data of the specified currency
api.listFundingBook(currency)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Retrieve data of the specified currency | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<FundingBookItem>; }> [FundingBookItem](FundingBookItem.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listLoans

> Promise<{ response: http.IncomingMessage; body: Array<Loan>; }> listLoans(status, side, opts)

List all loans(Deprecated)

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginApi(client);
const status = "open"; // 'open' | 'loaned' | 'finished' | 'auto_repaid' | Loan status
const side = "lend"; // 'lend' | 'borrow' | Lend or borrow
const opts = {
  'currency': "BTC", // string | Retrieve data of the specified currency
  'currencyPair': "BTC_USDT", // string | Currency pair
  'sortBy': "rate", // 'create_time' | 'rate' | Specify which field is used to sort. `create_time` or `rate` is supported. Default to `create_time`
  'reverseSort': false, // boolean | Whether to sort in descending order. Default to `true`
  'page': 1, // number | Page number
  'limit': 100 // number | Maximum number of records to be returned in a single list
};
api.listLoans(status, side, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **Status**| Loan status | [default to undefined]
 **side** | **Side**| Lend or borrow | [default to undefined]
 **currency** | **string**| Retrieve data of the specified currency | [optional] [default to undefined]
 **currencyPair** | **string**| Currency pair | [optional] [default to undefined]
 **sortBy** | **SortBy**| Specify which field is used to sort. &#x60;create_time&#x60; or &#x60;rate&#x60; is supported. Default to &#x60;create_time&#x60; | [optional] [default to undefined]
 **reverseSort** | **boolean**| Whether to sort in descending order. Default to &#x60;true&#x60; | [optional] [default to undefined]
 **page** | **number**| Page number | [optional] [default to 1]
 **limit** | **number**| Maximum number of records to be returned in a single list | [optional] [default to 100]

### Return type

Promise<{ response: AxiosResponse; body: Array<Loan>; }> [Loan](Loan.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createLoan

> Promise<{ response: http.IncomingMessage; body: Loan; }> createLoan(loan)

Lend or borrow(Deprecated)

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginApi(client);
const loan = new Loan(); // Loan | 
api.createLoan(loan)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loan** | [**Loan**](Loan.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: Loan; }> [Loan](Loan.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## mergeLoans

> Promise<{ response: http.IncomingMessage; body: Loan; }> mergeLoans(currency, ids)

Merge multiple lending loans(Deprecated)

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginApi(client);
const currency = "BTC"; // string | Retrieve data of the specified currency
const ids = "123,234,345"; // string | A comma-separated (,) list of IDs of the loans lent. Maximum of 20 IDs are allowed in a request
api.mergeLoans(currency, ids)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Retrieve data of the specified currency | [default to undefined]
 **ids** | **string**| A comma-separated (,) list of IDs of the loans lent. Maximum of 20 IDs are allowed in a request | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Loan; }> [Loan](Loan.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getLoan

> Promise<{ response: http.IncomingMessage; body: Loan; }> getLoan(loanId, side)

Retrieve one single loan detail(Deprecated)

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginApi(client);
const loanId = "12345"; // string | Loan ID
const side = "lend"; // 'lend' | 'borrow' | Lend or borrow
api.getLoan(loanId, side)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loanId** | **string**| Loan ID | [default to undefined]
 **side** | **Side**| Lend or borrow | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Loan; }> [Loan](Loan.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## cancelLoan

> Promise<{ response: http.IncomingMessage; body: Loan; }> cancelLoan(loanId, currency)

Cancel lending loan(Deprecated)

Only lent loans can be cancelled

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginApi(client);
const loanId = "12345"; // string | Loan ID
const currency = "BTC"; // string | Retrieve data of the specified currency
api.cancelLoan(loanId, currency)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loanId** | **string**| Loan ID | [default to undefined]
 **currency** | **string**| Retrieve data of the specified currency | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Loan; }> [Loan](Loan.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateLoan

> Promise<{ response: http.IncomingMessage; body: Loan; }> updateLoan(loanId, loanPatch)

Modify a loan(Deprecated)

Only &#x60;auto_renew&#x60; modification is supported currently

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginApi(client);
const loanId = "12345"; // string | Loan ID
const loanPatch = new LoanPatch(); // LoanPatch | 
api.updateLoan(loanId, loanPatch)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loanId** | **string**| Loan ID | [default to undefined]
 **loanPatch** | [**LoanPatch**](LoanPatch.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: Loan; }> [Loan](Loan.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## listLoanRepayments

> Promise<{ response: http.IncomingMessage; body: Array<Repayment>; }> listLoanRepayments(loanId)

List loan repayment records(Deprecated)

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginApi(client);
const loanId = "12345"; // string | Loan ID
api.listLoanRepayments(loanId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loanId** | **string**| Loan ID | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<Repayment>; }> [Repayment](Repayment.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## repayLoan

> Promise<{ response: http.IncomingMessage; body: Loan; }> repayLoan(loanId, repayRequest)

Repay a loan(Deprecated)

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginApi(client);
const loanId = "12345"; // string | Loan ID
const repayRequest = new RepayRequest(); // RepayRequest | 
api.repayLoan(loanId, repayRequest)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loanId** | **string**| Loan ID | [default to undefined]
 **repayRequest** | [**RepayRequest**](RepayRequest.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: Loan; }> [Loan](Loan.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## listLoanRecords

> Promise<{ response: http.IncomingMessage; body: Array<LoanRecord>; }> listLoanRecords(loanId, opts)

List repayment records of a specific loan(Deprecated)

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginApi(client);
const loanId = "12345"; // string | Loan ID
const opts = {
  'status': "loaned", // 'loaned' | 'finished' | Loan record status
  'page': 1, // number | Page number
  'limit': 100 // number | Maximum number of records to be returned in a single list
};
api.listLoanRecords(loanId, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loanId** | **string**| Loan ID | [default to undefined]
 **status** | **Status**| Loan record status | [optional] [default to undefined]
 **page** | **number**| Page number | [optional] [default to 1]
 **limit** | **number**| Maximum number of records to be returned in a single list | [optional] [default to 100]

### Return type

Promise<{ response: AxiosResponse; body: Array<LoanRecord>; }> [LoanRecord](LoanRecord.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getLoanRecord

> Promise<{ response: http.IncomingMessage; body: LoanRecord; }> getLoanRecord(loanRecordId, loanId)

Get one single loan record(Deprecated)

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginApi(client);
const loanRecordId = "12345"; // string | Loan record ID
const loanId = "12345"; // string | Loan ID
api.getLoanRecord(loanRecordId, loanId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loanRecordId** | **string**| Loan record ID | [default to undefined]
 **loanId** | **string**| Loan ID | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: LoanRecord; }> [LoanRecord](LoanRecord.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateLoanRecord

> Promise<{ response: http.IncomingMessage; body: LoanRecord; }> updateLoanRecord(loanRecordId, loanPatch)

Modify a loan record(Deprecated)

Only &#x60;auto_renew&#x60; modification is supported currently

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginApi(client);
const loanRecordId = "12345"; // string | Loan record ID
const loanPatch = new LoanPatch(); // LoanPatch | 
api.updateLoanRecord(loanRecordId, loanPatch)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loanRecordId** | **string**| Loan record ID | [default to undefined]
 **loanPatch** | [**LoanPatch**](LoanPatch.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: LoanRecord; }> [LoanRecord](LoanRecord.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## getMarginBorrowable

> Promise<{ response: http.IncomingMessage; body: MarginBorrowable; }> getMarginBorrowable(currency, opts)

Get the max borrowable amount for a specific margin currency(Deprecated)

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginApi(client);
const currency = "BTC"; // string | Retrieve data of the specified currency
const opts = {
  'currencyPair': "BTC_USDT" // string | Currency pair
};
api.getMarginBorrowable(currency, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Retrieve data of the specified currency | [default to undefined]
 **currencyPair** | **string**| Currency pair | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: MarginBorrowable; }> [MarginBorrowable](MarginBorrowable.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCrossMarginCurrencies

> Promise<{ response: http.IncomingMessage; body: Array<CrossMarginCurrency>; }> listCrossMarginCurrencies()

Currencies supported by cross margin.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.MarginApi(client);
api.listCrossMarginCurrencies()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: Array<CrossMarginCurrency>; }> [CrossMarginCurrency](CrossMarginCurrency.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getCrossMarginCurrency

> Promise<{ response: http.IncomingMessage; body: CrossMarginCurrency; }> getCrossMarginCurrency(currency)

Retrieve detail of one single currency supported by cross margin

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.MarginApi(client);
const currency = "BTC"; // string | Currency name
api.getCrossMarginCurrency(currency)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Currency name | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: CrossMarginCurrency; }> [CrossMarginCurrency](CrossMarginCurrency.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getCrossMarginAccount

> Promise<{ response: http.IncomingMessage; body: CrossMarginAccount; }> getCrossMarginAccount()

Retrieve cross margin account

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginApi(client);
api.getCrossMarginAccount()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: CrossMarginAccount; }> [CrossMarginAccount](CrossMarginAccount.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCrossMarginAccountBook

> Promise<{ response: http.IncomingMessage; body: Array<CrossMarginAccountBook>; }> listCrossMarginAccountBook(opts)

Retrieve cross margin account change history

Record time range cannot exceed 30 days

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginApi(client);
const opts = {
  'currency': "currency_example", // string | Filter by currency
  'from': 1627706330, // number | Start timestamp of the query
  'to': 1635329650, // number | Time range ending, default to current time
  'page': 1, // number | Page number
  'limit': 100, // number | Maximum number of records to be returned in a single list
  'type': "borrow" // string | Only retrieve changes of the specified type. All types will be returned if not specified.
};
api.listCrossMarginAccountBook(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Filter by currency | [optional] [default to undefined]
 **from** | **number**| Start timestamp of the query | [optional] [default to undefined]
 **to** | **number**| Time range ending, default to current time | [optional] [default to undefined]
 **page** | **number**| Page number | [optional] [default to 1]
 **limit** | **number**| Maximum number of records to be returned in a single list | [optional] [default to 100]
 **type** | **string**| Only retrieve changes of the specified type. All types will be returned if not specified. | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<CrossMarginAccountBook>; }> [CrossMarginAccountBook](CrossMarginAccountBook.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCrossMarginLoans

> Promise<{ response: http.IncomingMessage; body: Array<CrossMarginLoan>; }> listCrossMarginLoans(status, opts)

List cross margin borrow history

Sort by creation time in descending order by default. Set &#x60;reverse&#x3D;false&#x60; to return ascending results.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginApi(client);
const status = 56; // number | Filter by status. Supported values are 2 and 3. (deprecated.)
const opts = {
  'currency': "currency_example", // string | Filter by currency
  'limit': 100, // number | Maximum number of records to be returned in a single list
  'offset': 0, // number | List offset, starting from 0
  'reverse': True // boolean | Whether to sort in descending order, which is the default. Set `reverse=false` to return ascending results
};
api.listCrossMarginLoans(status, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **number**| Filter by status. Supported values are 2 and 3. (deprecated.) | [default to undefined]
 **currency** | **string**| Filter by currency | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0 | [optional] [default to 0]
 **reverse** | **boolean**| Whether to sort in descending order, which is the default. Set &#x60;reverse&#x3D;false&#x60; to return ascending results | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<CrossMarginLoan>; }> [CrossMarginLoan](CrossMarginLoan.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createCrossMarginLoan

> Promise<{ response: http.IncomingMessage; body: CrossMarginLoan; }> createCrossMarginLoan(crossMarginLoan)

Create a cross margin borrow loan

Borrow amount cannot be less than currency minimum borrow amount

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginApi(client);
const crossMarginLoan = new CrossMarginLoan(); // CrossMarginLoan | 
api.createCrossMarginLoan(crossMarginLoan)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **crossMarginLoan** | [**CrossMarginLoan**](CrossMarginLoan.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: CrossMarginLoan; }> [CrossMarginLoan](CrossMarginLoan.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## getCrossMarginLoan

> Promise<{ response: http.IncomingMessage; body: CrossMarginLoan; }> getCrossMarginLoan(loanId)

Retrieve single borrow loan detail

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginApi(client);
const loanId = "12345"; // string | Borrow loan ID
api.getCrossMarginLoan(loanId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loanId** | **string**| Borrow loan ID | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: CrossMarginLoan; }> [CrossMarginLoan](CrossMarginLoan.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCrossMarginRepayments

> Promise<{ response: http.IncomingMessage; body: Array<CrossMarginRepayment>; }> listCrossMarginRepayments(opts)

Retrieve cross margin repayments

Sort by creation time in descending order by default. Set &#x60;reverse&#x3D;false&#x60; to return ascending results.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginApi(client);
const opts = {
  'currency': "BTC", // string | 
  'loanId': "12345", // string | 
  'limit': 100, // number | Maximum number of records to be returned in a single list
  'offset': 0, // number | List offset, starting from 0
  'reverse': True // boolean | Whether to sort in descending order, which is the default. Set `reverse=false` to return ascending results
};
api.listCrossMarginRepayments(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**|  | [optional] [default to undefined]
 **loanId** | **string**|  | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0 | [optional] [default to 0]
 **reverse** | **boolean**| Whether to sort in descending order, which is the default. Set &#x60;reverse&#x3D;false&#x60; to return ascending results | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<CrossMarginRepayment>; }> [CrossMarginRepayment](CrossMarginRepayment.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## repayCrossMarginLoan

> Promise<{ response: http.IncomingMessage; body: Array<CrossMarginLoan>; }> repayCrossMarginLoan(crossMarginRepayRequest)

Cross margin repayments

When the liquidity of the currency is insufficient and the transaction risk is high, the currency will be disabled, and funds cannot be transferred.When the available balance of cross-margin is insufficient, the balance of the spot account can be used for repayment. Please ensure that the balance of the spot account is sufficient, and system uses cross-margin account for repayment first

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginApi(client);
const crossMarginRepayRequest = new CrossMarginRepayRequest(); // CrossMarginRepayRequest | 
api.repayCrossMarginLoan(crossMarginRepayRequest)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **crossMarginRepayRequest** | [**CrossMarginRepayRequest**](CrossMarginRepayRequest.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: Array<CrossMarginLoan>; }> [CrossMarginLoan](CrossMarginLoan.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## getCrossMarginInterestRecords

> Promise<{ response: http.IncomingMessage; body: Array<UniLoanInterestRecord>; }> getCrossMarginInterestRecords(opts)

Interest records for the cross margin account

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginApi(client);
const opts = {
  'currency': "BTC", // string | Retrieve data of the specified currency
  'page': 1, // number | Page number
  'limit': 100 // number | Maximum response items.  Default: 100, minimum: 1, Maximum: 100
};
api.getCrossMarginInterestRecords(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Retrieve data of the specified currency | [optional] [default to undefined]
 **page** | **number**| Page number | [optional] [default to 1]
 **limit** | **number**| Maximum response items.  Default: 100, minimum: 1, Maximum: 100 | [optional] [default to 100]

### Return type

Promise<{ response: AxiosResponse; body: Array<UniLoanInterestRecord>; }> [UniLoanInterestRecord](UniLoanInterestRecord.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getCrossMarginTransferable

> Promise<{ response: http.IncomingMessage; body: CrossMarginTransferable; }> getCrossMarginTransferable(currency)

Get the max transferable amount for a specific cross margin currency

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginApi(client);
const currency = "BTC"; // string | Retrieve data of the specified currency
api.getCrossMarginTransferable(currency)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Retrieve data of the specified currency | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: CrossMarginTransferable; }> [CrossMarginTransferable](CrossMarginTransferable.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getCrossMarginEstimateRate

> Promise<{ response: http.IncomingMessage; body: { [key: string]: string; }; }> getCrossMarginEstimateRate(currencies)

Estimated interest rates

Please note that the interest rates are subject to change based on the borrowing and lending demand, and therefore, the provided rates may not be entirely accurate.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginApi(client);
const currencies = [["BTC","GT"]]; // Array<string> | An array of up to 10 specifying the currency name
api.getCrossMarginEstimateRate(currencies)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencies** | [**Array&lt;string&gt;**](string.md)| An array of up to 10 specifying the currency name | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: { [key: string]: string; }; }> [string](string.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getCrossMarginBorrowable

> Promise<{ response: http.IncomingMessage; body: PortfolioBorrowable; }> getCrossMarginBorrowable(currency)

Get the max borrowable amount for a specific cross margin currency

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginApi(client);
const currency = "BTC"; // string | Retrieve data of the specified currency
api.getCrossMarginBorrowable(currency)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Retrieve data of the specified currency | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: PortfolioBorrowable; }> [PortfolioBorrowable](PortfolioBorrowable.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
