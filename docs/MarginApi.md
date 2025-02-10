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
[**listCrossMarginCurrencies**](MarginApi.md#listCrossMarginCurrencies) | **GET** /margin/cross/currencies | Currencies supported by cross margin.(deprecated)
[**getCrossMarginCurrency**](MarginApi.md#getCrossMarginCurrency) | **GET** /margin/cross/currencies/{currency} | Retrieve detail of one single currency supported by cross margin. (deprecated)
[**getCrossMarginAccount**](MarginApi.md#getCrossMarginAccount) | **GET** /margin/cross/accounts | Retrieve cross margin account. (deprecated)
[**listCrossMarginAccountBook**](MarginApi.md#listCrossMarginAccountBook) | **GET** /margin/cross/account_book | Retrieve cross margin account change history. (deprecated)
[**listCrossMarginLoans**](MarginApi.md#listCrossMarginLoans) | **GET** /margin/cross/loans | List cross margin borrow history. (deprecated)
[**createCrossMarginLoan**](MarginApi.md#createCrossMarginLoan) | **POST** /margin/cross/loans | Create a cross margin borrow loan. (deprecated)
[**getCrossMarginLoan**](MarginApi.md#getCrossMarginLoan) | **GET** /margin/cross/loans/{loan_id} | Retrieve single borrow loan detail. (deprecated)
[**listCrossMarginRepayments**](MarginApi.md#listCrossMarginRepayments) | **GET** /margin/cross/repayments | Retrieve cross margin repayments. (deprecated)
[**repayCrossMarginLoan**](MarginApi.md#repayCrossMarginLoan) | **POST** /margin/cross/repayments | Cross margin repayments. (deprecated)
[**getCrossMarginInterestRecords**](MarginApi.md#getCrossMarginInterestRecords) | **GET** /margin/cross/interest_records | Interest records for the cross margin account. (deprecated)
[**getCrossMarginTransferable**](MarginApi.md#getCrossMarginTransferable) | **GET** /margin/cross/transferable | Get the max transferable amount for a specific cross margin currency. (deprecated)
[**getCrossMarginEstimateRate**](MarginApi.md#getCrossMarginEstimateRate) | **GET** /margin/cross/estimate_rate | Estimated interest rates. (deprecated)
[**getCrossMarginBorrowable**](MarginApi.md#getCrossMarginBorrowable) | **GET** /margin/cross/borrowable | Get the max borrowable amount for a specific cross margin currency. (deprecated)


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

## listCrossMarginCurrencies

> Promise<{ response: http.IncomingMessage; body: Array<CrossMarginCurrency>; }> listCrossMarginCurrencies()

Currencies supported by cross margin.(deprecated)

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

Retrieve detail of one single currency supported by cross margin. (deprecated)

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

Retrieve cross margin account. (deprecated)

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

Retrieve cross margin account change history. (deprecated)

The record query time range is not allowed to exceed 30 days.  When using the limit&amp;page paging function to retrieve data, the maximum number of pages is 100,000, that is, (limit page - 1) &lt;&#x3D; 100000.

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

List cross margin borrow history. (deprecated)

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

Create a cross margin borrow loan. (deprecated)

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

Retrieve single borrow loan detail. (deprecated)

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

Retrieve cross margin repayments. (deprecated)

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

Cross margin repayments. (deprecated)

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

Interest records for the cross margin account. (deprecated)

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
  'limit': 100, // number | Maximum response items.  Default: 100, minimum: 1, Maximum: 100
  'from': 1547706332, // number | Start timestamp
  'to': 1547706332 // number | End timestamp
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
 **from** | **number**| Start timestamp | [optional] [default to undefined]
 **to** | **number**| End timestamp | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<UniLoanInterestRecord>; }> [UniLoanInterestRecord](UniLoanInterestRecord.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getCrossMarginTransferable

> Promise<{ response: http.IncomingMessage; body: CrossMarginTransferable; }> getCrossMarginTransferable(currency)

Get the max transferable amount for a specific cross margin currency. (deprecated)

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

Estimated interest rates. (deprecated)

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

> Promise<{ response: http.IncomingMessage; body: UnifiedBorrowable; }> getCrossMarginBorrowable(currency)

Get the max borrowable amount for a specific cross margin currency. (deprecated)

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

Promise<{ response: AxiosResponse; body: UnifiedBorrowable; }> [UnifiedBorrowable](UnifiedBorrowable.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
