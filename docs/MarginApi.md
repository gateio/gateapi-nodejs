# MarginApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listMarginAccounts**](MarginApi.md#listMarginAccounts) | **GET** /margin/accounts | Margin account list
[**listMarginAccountBook**](MarginApi.md#listMarginAccountBook) | **GET** /margin/account_book | Query margin account balance change history
[**listFundingAccounts**](MarginApi.md#listFundingAccounts) | **GET** /margin/funding_accounts | Funding account list
[**getAutoRepayStatus**](MarginApi.md#getAutoRepayStatus) | **GET** /margin/auto_repay | Query user auto repayment settings
[**setAutoRepay**](MarginApi.md#setAutoRepay) | **POST** /margin/auto_repay | Update user auto repayment settings
[**getMarginTransferable**](MarginApi.md#getMarginTransferable) | **GET** /margin/transferable | Get maximum transferable amount for isolated margin
[**getUserMarginTier**](MarginApi.md#getUserMarginTier) | **GET** /margin/user/loan_margin_tiers | Query user\&#39;s own leverage lending tiers in current market
[**getMarketMarginTier**](MarginApi.md#getMarketMarginTier) | **GET** /margin/loan_margin_tiers | Query current market leverage lending tiers
[**setUserMarketLeverage**](MarginApi.md#setUserMarketLeverage) | **POST** /margin/leverage/user_market_setting | Set user market leverage multiplier
[**listMarginUserAccount**](MarginApi.md#listMarginUserAccount) | **GET** /margin/user/account | Query user\&#39;s isolated margin account list
[**listCrossMarginLoans**](MarginApi.md#listCrossMarginLoans) | **GET** /margin/cross/loans | Query cross margin borrow history (deprecated)
[**listCrossMarginRepayments**](MarginApi.md#listCrossMarginRepayments) | **GET** /margin/cross/repayments | Retrieve cross margin repayments. (deprecated)


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

Query margin account balance change history

Currently only provides transfer history to and from margin accounts. Query time range cannot exceed 30 days

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
  'currency': "currency_example", // string | Query history for specified currency. If `currency` is specified, `currency_pair` must also be specified.
  'currencyPair': "currencyPair_example", // string | Specify margin account currency pair. Used in combination with `currency`. Ignored if `currency` is not specified
  'type': "lend", // string | Query by specified account change type. If not specified, all change types will be included.
  'from': 1627706330, // number | Start timestamp for the query
  'to': 1635329650, // number | End timestamp for the query, defaults to current time if not specified
  'page': 1, // number | Page number
  'limit': 100 // number | Maximum number of records returned in a single list
};
api.listMarginAccountBook(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Query history for specified currency. If &#x60;currency&#x60; is specified, &#x60;currency_pair&#x60; must also be specified. | [optional] [default to undefined]
 **currencyPair** | **string**| Specify margin account currency pair. Used in combination with &#x60;currency&#x60;. Ignored if &#x60;currency&#x60; is not specified | [optional] [default to undefined]
 **type** | **string**| Query by specified account change type. If not specified, all change types will be included. | [optional] [default to undefined]
 **from** | **number**| Start timestamp for the query | [optional] [default to undefined]
 **to** | **number**| End timestamp for the query, defaults to current time if not specified | [optional] [default to undefined]
 **page** | **number**| Page number | [optional] [default to 1]
 **limit** | **number**| Maximum number of records returned in a single list | [optional] [default to 100]

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
  'currency': "BTC" // string | Query by specified currency name
};
api.listFundingAccounts(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Query by specified currency name | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<FundingAccount>; }> [FundingAccount](FundingAccount.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getAutoRepayStatus

> Promise<{ response: http.IncomingMessage; body: AutoRepaySetting; }> getAutoRepayStatus()

Query user auto repayment settings

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

Update user auto repayment settings

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginApi(client);
const status = "on"; // string | Whether to enable auto repayment: `on` - enabled, `off` - disabled
api.setAutoRepay(status)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **string**| Whether to enable auto repayment: &#x60;on&#x60; - enabled, &#x60;off&#x60; - disabled | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: AutoRepaySetting; }> [AutoRepaySetting](AutoRepaySetting.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getMarginTransferable

> Promise<{ response: http.IncomingMessage; body: MarginTransferable; }> getMarginTransferable(currency, opts)

Get maximum transferable amount for isolated margin

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginApi(client);
const currency = "BTC"; // string | Query by specified currency name
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
 **currency** | **string**| Query by specified currency name | [default to undefined]
 **currencyPair** | **string**| Currency pair | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: MarginTransferable; }> [MarginTransferable](MarginTransferable.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getUserMarginTier

> Promise<{ response: http.IncomingMessage; body: Array<MarginLeverageTier>; }> getUserMarginTier(currencyPair)

Query user\&#39;s own leverage lending tiers in current market

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginApi(client);
const currencyPair = "BTC_USDT"; // string | Currency pair
api.getUserMarginTier(currencyPair)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **string**| Currency pair | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<MarginLeverageTier>; }> [MarginLeverageTier](MarginLeverageTier.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getMarketMarginTier

> Promise<{ response: http.IncomingMessage; body: Array<MarginLeverageTier>; }> getMarketMarginTier(currencyPair)

Query current market leverage lending tiers

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.MarginApi(client);
const currencyPair = "BTC_USDT"; // string | Currency pair
api.getMarketMarginTier(currencyPair)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **string**| Currency pair | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<MarginLeverageTier>; }> [MarginLeverageTier](MarginLeverageTier.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## setUserMarketLeverage

> Promise<{ response: http.IncomingMessage; body?: any; }> setUserMarketLeverage(marginMarketLeverage)

Set user market leverage multiplier

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginApi(client);
const marginMarketLeverage = new MarginMarketLeverage(); // MarginMarketLeverage | 
api.setUserMarketLeverage(marginMarketLeverage)
   .then(value => console.log('API called successfully.'),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marginMarketLeverage** | [**MarginMarketLeverage**](MarginMarketLeverage.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body?: any; }> 

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

## listMarginUserAccount

> Promise<{ response: http.IncomingMessage; body: Array<MarginAccount>; }> listMarginUserAccount(opts)

Query user\&#39;s isolated margin account list

Supports querying risk ratio isolated accounts and margin ratio isolated accounts

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
api.listMarginUserAccount(opts)
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

## listCrossMarginLoans

> Promise<{ response: http.IncomingMessage; body: Array<CrossMarginLoan>; }> listCrossMarginLoans(status, opts)

Query cross margin borrow history (deprecated)

Sorted by creation time in descending order by default. Set &#x60;reverse&#x3D;false&#x60; for ascending order

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
  'currency': "currency_example", // string | Query by specified currency, includes all currencies if not specified
  'limit': 100, // number | Maximum number of records returned in a single list
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
 **currency** | **string**| Query by specified currency, includes all currencies if not specified | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records returned in a single list | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0 | [optional] [default to 0]
 **reverse** | **boolean**| Whether to sort in descending order, which is the default. Set &#x60;reverse&#x3D;false&#x60; to return ascending results | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<CrossMarginLoan>; }> [CrossMarginLoan](CrossMarginLoan.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCrossMarginRepayments

> Promise<{ response: http.IncomingMessage; body: Array<CrossMarginRepayment>; }> listCrossMarginRepayments(opts)

Retrieve cross margin repayments. (deprecated)

Sorted by creation time in descending order by default. Set &#x60;reverse&#x3D;false&#x60; for ascending order

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
  'limit': 100, // number | Maximum number of records returned in a single list
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
 **limit** | **number**| Maximum number of records returned in a single list | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0 | [optional] [default to 0]
 **reverse** | **boolean**| Whether to sort in descending order, which is the default. Set &#x60;reverse&#x3D;false&#x60; to return ascending results | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<CrossMarginRepayment>; }> [CrossMarginRepayment](CrossMarginRepayment.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
