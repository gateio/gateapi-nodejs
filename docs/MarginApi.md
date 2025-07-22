# MarginApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listMarginAccounts**](MarginApi.md#listMarginAccounts) | **GET** /margin/accounts | Margin account list.
[**listMarginAccountBook**](MarginApi.md#listMarginAccountBook) | **GET** /margin/account_book | List margin account balance change history.
[**listFundingAccounts**](MarginApi.md#listFundingAccounts) | **GET** /margin/funding_accounts | Funding account list.
[**getAutoRepayStatus**](MarginApi.md#getAutoRepayStatus) | **GET** /margin/auto_repay | Retrieve user auto repayment setting.
[**setAutoRepay**](MarginApi.md#setAutoRepay) | **POST** /margin/auto_repay | Update user\&#39;s auto repayment setting.
[**getMarginTransferable**](MarginApi.md#getMarginTransferable) | **GET** /margin/transferable | Get the max transferable amount for a specific margin currency.
[**getUserMarginTier**](MarginApi.md#getUserMarginTier) | **GET** /margin/user/loan_margin_tiers | Check the user\&#39;s own leverage lending gradient in the current market.
[**getMarketMarginTier**](MarginApi.md#getMarketMarginTier) | **GET** /margin/loan_margin_tiers | Query the current market leverage lending gradient.
[**setUserMarketLeverage**](MarginApi.md#setUserMarketLeverage) | **POST** /margin/leverage/user_market_setting | Set the user market leverage multiple.
[**listMarginUserAccount**](MarginApi.md#listMarginUserAccount) | **GET** /margin/user/account | Query the user\&#39;s leverage account list.
[**listCrossMarginLoans**](MarginApi.md#listCrossMarginLoans) | **GET** /margin/cross/loans | List cross margin borrow history. (deprecated).
[**listCrossMarginRepayments**](MarginApi.md#listCrossMarginRepayments) | **GET** /margin/cross/repayments | Retrieve cross margin repayments. (deprecated).


## listMarginAccounts

> Promise<{ response: http.IncomingMessage; body: Array<MarginAccount>; }> listMarginAccounts(opts)

Margin account list.

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
  'currencyPair': "BTC_USDT" // string | Currency pair.
};
api.listMarginAccounts(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **string**| Currency pair. | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<MarginAccount>; }> [MarginAccount](MarginAccount.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listMarginAccountBook

> Promise<{ response: http.IncomingMessage; body: Array<MarginAccountBook>; }> listMarginAccountBook(opts)

List margin account balance change history.

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
  'from': 1627706330, // number | Start timestamp of the query.
  'to': 1635329650, // number | Time range ending, default to current time.
  'page': 1, // number | Page number.
  'limit': 100 // number | Maximum number of records to be returned in a single list.
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
 **from** | **number**| Start timestamp of the query. | [optional] [default to undefined]
 **to** | **number**| Time range ending, default to current time. | [optional] [default to undefined]
 **page** | **number**| Page number. | [optional] [default to 1]
 **limit** | **number**| Maximum number of records to be returned in a single list. | [optional] [default to 100]

### Return type

Promise<{ response: AxiosResponse; body: Array<MarginAccountBook>; }> [MarginAccountBook](MarginAccountBook.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listFundingAccounts

> Promise<{ response: http.IncomingMessage; body: Array<FundingAccount>; }> listFundingAccounts(opts)

Funding account list.

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
  'currency': "BTC" // string | Retrieve data of the specified currency.
};
api.listFundingAccounts(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Retrieve data of the specified currency. | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<FundingAccount>; }> [FundingAccount](FundingAccount.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getAutoRepayStatus

> Promise<{ response: http.IncomingMessage; body: AutoRepaySetting; }> getAutoRepayStatus()

Retrieve user auto repayment setting.

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

Update user\&#39;s auto repayment setting.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginApi(client);
const status = "on"; // string | New auto repayment status. `on` - enabled, `off` - disabled.
api.setAutoRepay(status)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **string**| New auto repayment status. &#x60;on&#x60; - enabled, &#x60;off&#x60; - disabled. | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: AutoRepaySetting; }> [AutoRepaySetting](AutoRepaySetting.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getMarginTransferable

> Promise<{ response: http.IncomingMessage; body: MarginTransferable; }> getMarginTransferable(currency, opts)

Get the max transferable amount for a specific margin currency.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginApi(client);
const currency = "BTC"; // string | Retrieve data of the specified currency.
const opts = {
  'currencyPair': "BTC_USDT" // string | Currency pair.
};
api.getMarginTransferable(currency, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Retrieve data of the specified currency. | [default to undefined]
 **currencyPair** | **string**| Currency pair. | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: MarginTransferable; }> [MarginTransferable](MarginTransferable.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getUserMarginTier

> Promise<{ response: http.IncomingMessage; body: Array<MarginLeverageTier>; }> getUserMarginTier(currencyPair)

Check the user\&#39;s own leverage lending gradient in the current market.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginApi(client);
const currencyPair = "BTC_USDT"; // string | Currency pair.
api.getUserMarginTier(currencyPair)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **string**| Currency pair. | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<MarginLeverageTier>; }> [MarginLeverageTier](MarginLeverageTier.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getMarketMarginTier

> Promise<{ response: http.IncomingMessage; body: Array<MarginLeverageTier>; }> getMarketMarginTier(currencyPair)

Query the current market leverage lending gradient.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.MarginApi(client);
const currencyPair = "BTC_USDT"; // string | Currency pair.
api.getMarketMarginTier(currencyPair)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **string**| Currency pair. | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<MarginLeverageTier>; }> [MarginLeverageTier](MarginLeverageTier.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## setUserMarketLeverage

> Promise<{ response: http.IncomingMessage; body?: any; }> setUserMarketLeverage(marginMarketLeverage)

Set the user market leverage multiple.

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

Query the user\&#39;s leverage account list.

Support querying risk rate per position account and margin rate per position account

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
  'currencyPair': "BTC_USDT" // string | Currency pair.
};
api.listMarginUserAccount(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **string**| Currency pair. | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<MarginAccount>; }> [MarginAccount](MarginAccount.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCrossMarginLoans

> Promise<{ response: http.IncomingMessage; body: Array<CrossMarginLoan>; }> listCrossMarginLoans(status, opts)

List cross margin borrow history. (deprecated).

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
const status = 56; // number | Filter by status. Supported values are 2 and 3. (deprecated.).
const opts = {
  'currency': "currency_example", // string | Filter by currency.
  'limit': 100, // number | Maximum number of records to be returned in a single list.
  'offset': 0, // number | List offset, starting from 0.
  'reverse': True // boolean | Whether to sort in descending order, which is the default. Set `reverse=false` to return ascending results
};
api.listCrossMarginLoans(status, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **number**| Filter by status. Supported values are 2 and 3. (deprecated.). | [default to undefined]
 **currency** | **string**| Filter by currency. | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list. | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0. | [optional] [default to 0]
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

Retrieve cross margin repayments. (deprecated).

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
  'limit': 100, // number | Maximum number of records to be returned in a single list.
  'offset': 0, // number | List offset, starting from 0.
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
 **limit** | **number**| Maximum number of records to be returned in a single list. | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0. | [optional] [default to 0]
 **reverse** | **boolean**| Whether to sort in descending order, which is the default. Set &#x60;reverse&#x3D;false&#x60; to return ascending results | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<CrossMarginRepayment>; }> [CrossMarginRepayment](CrossMarginRepayment.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
