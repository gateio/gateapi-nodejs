# AlphaApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listAlphaAccounts**](AlphaApi.md#listAlphaAccounts) | **GET** /alpha/accounts | API for Alpha Accounts
[**listAlphaAccountBook**](AlphaApi.md#listAlphaAccountBook) | **GET** /alpha/account_book | Alpha Asset Transaction API
[**quoteAlphaOrder**](AlphaApi.md#quoteAlphaOrder) | **POST** /alpha/quote | Alpha Quotation API
[**listAlphaOrder**](AlphaApi.md#listAlphaOrder) | **GET** /alpha/orders | Alpha 查询订单列表接口
[**placeAlphaOrder**](AlphaApi.md#placeAlphaOrder) | **POST** /alpha/orders | Alpha Order Placement API
[**getAlphaOrder**](AlphaApi.md#getAlphaOrder) | **GET** /alpha/order | Alpha 查询单个订单接口
[**listAlphaCurrencies**](AlphaApi.md#listAlphaCurrencies) | **GET** /alpha/currencies | 查询币种信息
[**listAlphaTickers**](AlphaApi.md#listAlphaTickers) | **GET** /alpha/tickers | 查询币种ticker


## listAlphaAccounts

> Promise<{ response: http.IncomingMessage; body: Array<AccountsResponse>; }> listAlphaAccounts()

API for Alpha Accounts

Query Position Assets

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.AlphaApi(client);
api.listAlphaAccounts()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: Array<AccountsResponse>; }> [AccountsResponse](AccountsResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listAlphaAccountBook

> Promise<{ response: http.IncomingMessage; body: Array<AccountBookResponse>; }> listAlphaAccountBook(from, opts)

Alpha Asset Transaction API

Query Asset Transactions

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.AlphaApi(client);
const from = 56; // number | Start timestamp of the query
const opts = {
  'to': 56, // number | Time range ending, default to current time
  'page': 56, // number | Page number
  'limit': 56 // number | The maximum number of items per page is 100
};
api.listAlphaAccountBook(from, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | **number**| Start timestamp of the query | [default to undefined]
 **to** | **number**| Time range ending, default to current time | [optional] [default to undefined]
 **page** | **number**| Page number | [optional] [default to undefined]
 **limit** | **number**| The maximum number of items per page is 100 | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<AccountBookResponse>; }> [AccountBookResponse](AccountBookResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## quoteAlphaOrder

> Promise<{ response: http.IncomingMessage; body: QuoteResponse; }> quoteAlphaOrder(quoteRequest)

Alpha Quotation API

The quote_id returned by the quotation API is valid for one minute.You must place the order within this time window;otherwise, the quote will expire and a new quotation request is required

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.AlphaApi(client);
const quoteRequest = new QuoteRequest(); // QuoteRequest | 
api.quoteAlphaOrder(quoteRequest)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quoteRequest** | [**QuoteRequest**](QuoteRequest.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: QuoteResponse; }> [QuoteResponse](QuoteResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## listAlphaOrder

> Promise<{ response: http.IncomingMessage; body: Array<OrderResponse>; }> listAlphaOrder(currency, side, status, opts)

Alpha 查询订单列表接口

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.AlphaApi(client);
const currency = "memeboxsst"; // string | Trading Symbol
const side = "buy"; // string | 买单或者卖单 - buy - sell
const status = 2; // number | Order Status - `0` : All - `1` : Processing - `2` : Successful - `3` : Failed - `4` : Canceled - `5` : Buy order placed but transfer not completed - `6` : Cancelled order with transfer not complete
const opts = {
  'from': 1627706330, // number | 查询订单的起始时间
  'to': 1635329650, // number | 查询订单的结束时间，不指定则默认为当前时间
  'limit': 100, // number | Maximum response items.  Default: 100, minimum: 1, Maximum: 100
  'page': 1 // number | Page number
};
api.listAlphaOrder(currency, side, status, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Trading Symbol | [default to undefined]
 **side** | **string**| 买单或者卖单 - buy - sell | [default to undefined]
 **status** | **number**| Order Status - &#x60;0&#x60; : All - &#x60;1&#x60; : Processing - &#x60;2&#x60; : Successful - &#x60;3&#x60; : Failed - &#x60;4&#x60; : Canceled - &#x60;5&#x60; : Buy order placed but transfer not completed - &#x60;6&#x60; : Cancelled order with transfer not complete | [default to undefined]
 **from** | **number**| 查询订单的起始时间 | [optional] [default to undefined]
 **to** | **number**| 查询订单的结束时间，不指定则默认为当前时间 | [optional] [default to undefined]
 **limit** | **number**| Maximum response items.  Default: 100, minimum: 1, Maximum: 100 | [optional] [default to 100]
 **page** | **number**| Page number | [optional] [default to 1]

### Return type

Promise<{ response: AxiosResponse; body: Array<OrderResponse>; }> [OrderResponse](OrderResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## placeAlphaOrder

> Promise<{ response: http.IncomingMessage; body: PlaceOrderResponse; }> placeAlphaOrder(placeOrderRequest)

Alpha Order Placement API

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.AlphaApi(client);
const placeOrderRequest = new PlaceOrderRequest(); // PlaceOrderRequest | 
api.placeAlphaOrder(placeOrderRequest)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **placeOrderRequest** | [**PlaceOrderRequest**](PlaceOrderRequest.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: PlaceOrderResponse; }> [PlaceOrderResponse](PlaceOrderResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## getAlphaOrder

> Promise<{ response: http.IncomingMessage; body: OrderResponse; }> getAlphaOrder(orderId)

Alpha 查询单个订单接口

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.AlphaApi(client);
const orderId = "fdaf12321"; // string | Order ID
api.getAlphaOrder(orderId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **string**| Order ID | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: OrderResponse; }> [OrderResponse](OrderResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listAlphaCurrencies

> Promise<{ response: http.IncomingMessage; body: Array<Currency2>; }> listAlphaCurrencies(opts)

查询币种信息

When the currency parameter is provided, query and return information for the specified currency. When the currency parameter is not provided, return a paginated list of currencies.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.AlphaApi(client);
const opts = {
  'currency': "memeboxtrump", // string | 根据币种符号查询币种信息
  'limit': 100, // number | Maximum number of records to be returned in a single list
  'page': 1 // number | Page number
};
api.listAlphaCurrencies(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| 根据币种符号查询币种信息 | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list | [optional] [default to 100]
 **page** | **number**| Page number | [optional] [default to 1]

### Return type

Promise<{ response: AxiosResponse; body: Array<Currency2>; }> [Currency2](Currency2.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listAlphaTickers

> Promise<{ response: http.IncomingMessage; body: Array<Ticker2>; }> listAlphaTickers(opts)

查询币种ticker

When the currency parameter is provided, query and return information for the specified ticker, When the currency parameter is not provided, return a paginated list of tickers.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.AlphaApi(client);
const opts = {
  'currency': "memeboxtrump", // string | Retrieve data of the specified currency
  'limit': 100, // number | Maximum number of records to be returned in a single list
  'page': 1 // number | Page number
};
api.listAlphaTickers(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Retrieve data of the specified currency | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list | [optional] [default to 100]
 **page** | **number**| Page number | [optional] [default to 1]

### Return type

Promise<{ response: AxiosResponse; body: Array<Ticker2>; }> [Ticker2](Ticker2.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
