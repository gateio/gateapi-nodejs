# SpotApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listCurrencyPairs**](SpotApi.md#listCurrencyPairs) | **GET** /spot/currency_pairs | List all currency pairs supported
[**getCurrencyPair**](SpotApi.md#getCurrencyPair) | **GET** /spot/currency_pairs/{currency_pair} | Get detail of one single order
[**listTickers**](SpotApi.md#listTickers) | **GET** /spot/tickers | Retrieve ticker information
[**listOrderBook**](SpotApi.md#listOrderBook) | **GET** /spot/order_book | Retrieve order book
[**listTrades**](SpotApi.md#listTrades) | **GET** /spot/trades | Retrieve market trades
[**listCandlesticks**](SpotApi.md#listCandlesticks) | **GET** /spot/candlesticks | Market candlesticks
[**getFee**](SpotApi.md#getFee) | **GET** /spot/fee | Query user trading fee rates
[**listSpotAccounts**](SpotApi.md#listSpotAccounts) | **GET** /spot/accounts | List spot accounts
[**createBatchOrders**](SpotApi.md#createBatchOrders) | **POST** /spot/batch_orders | Create a batch of orders
[**listAllOpenOrders**](SpotApi.md#listAllOpenOrders) | **GET** /spot/open_orders | List all open orders
[**listOrders**](SpotApi.md#listOrders) | **GET** /spot/orders | List orders
[**createOrder**](SpotApi.md#createOrder) | **POST** /spot/orders | Create an order
[**cancelOrders**](SpotApi.md#cancelOrders) | **DELETE** /spot/orders | Cancel all &#x60;open&#x60; orders in specified currency pair
[**cancelBatchOrders**](SpotApi.md#cancelBatchOrders) | **POST** /spot/cancel_batch_orders | Cancel a batch of orders with an ID list
[**getOrder**](SpotApi.md#getOrder) | **GET** /spot/orders/{order_id} | Get a single order
[**cancelOrder**](SpotApi.md#cancelOrder) | **DELETE** /spot/orders/{order_id} | Cancel a single order
[**listMyTrades**](SpotApi.md#listMyTrades) | **GET** /spot/my_trades | List personal trading history


## listCurrencyPairs

> Promise<{ response: http.IncomingMessage; body: Array<CurrencyPair>; }> listCurrencyPairs()

List all currency pairs supported

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.SpotApi(client);
api.listCurrencyPairs()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: Array<CurrencyPair>; }> [CurrencyPair](CurrencyPair.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getCurrencyPair

> Promise<{ response: http.IncomingMessage; body: CurrencyPair; }> getCurrencyPair(currencyPair)

Get detail of one single order

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.SpotApi(client);
const currencyPair = "ETH_BTC"; // string | Currency pair
api.getCurrencyPair(currencyPair)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **string**| Currency pair | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: CurrencyPair; }> [CurrencyPair](CurrencyPair.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listTickers

> Promise<{ response: http.IncomingMessage; body: Array<Ticker>; }> listTickers(opts)

Retrieve ticker information

Return only related data if &#x60;currency_pair&#x60; is specified; otherwise return all of them

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.SpotApi(client);
const opts = {
  'currencyPair': "BTC_USDT" // string | Currency pair
};
api.listTickers(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **string**| Currency pair | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<Ticker>; }> [Ticker](Ticker.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listOrderBook

> Promise<{ response: http.IncomingMessage; body: OrderBook; }> listOrderBook(currencyPair, opts)

Retrieve order book

Order book will be sorted by price from high to low on bids; reversed on asks

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.SpotApi(client);
const currencyPair = "BTC_USDT"; // string | Currency pair
const opts = {
  'interval': '0', // string | Order depth. 0 means no aggregation is applied. default to 0
  'limit': 10, // number | Maximum number of order depth data in asks or bids
  'withId': false // boolean | Return order book ID
};
api.listOrderBook(currencyPair, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **string**| Currency pair | [default to undefined]
 **interval** | **string**| Order depth. 0 means no aggregation is applied. default to 0 | [optional] [default to &#39;0&#39;]
 **limit** | **number**| Maximum number of order depth data in asks or bids | [optional] [default to 10]
 **withId** | **boolean**| Return order book ID | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: OrderBook; }> [OrderBook](OrderBook.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listTrades

> Promise<{ response: http.IncomingMessage; body: Array<Trade>; }> listTrades(currencyPair, opts)

Retrieve market trades

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.SpotApi(client);
const currencyPair = "BTC_USDT"; // string | Currency pair
const opts = {
  'limit': 100, // number | Maximum number of records returned in one list
  'lastId': "12345", // string | Specify list staring point using the `id` of last record in previous list-query results
  'reverse': true // boolean | Whether to retrieve records whose IDs are smaller than `last_id`\'s. Default to larger ones.  When `last_id` is specified. Set `reverse` to `true` to trace back trading history; `false` to retrieve latest tradings.  No effect if `last_id` is not specified.
};
api.listTrades(currencyPair, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **string**| Currency pair | [default to undefined]
 **limit** | **number**| Maximum number of records returned in one list | [optional] [default to 100]
 **lastId** | **string**| Specify list staring point using the &#x60;id&#x60; of last record in previous list-query results | [optional] [default to undefined]
 **reverse** | **boolean**| Whether to retrieve records whose IDs are smaller than &#x60;last_id&#x60;\&#39;s. Default to larger ones.  When &#x60;last_id&#x60; is specified. Set &#x60;reverse&#x60; to &#x60;true&#x60; to trace back trading history; &#x60;false&#x60; to retrieve latest tradings.  No effect if &#x60;last_id&#x60; is not specified. | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<Trade>; }> [Trade](Trade.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCandlesticks

> Promise<{ response: http.IncomingMessage; body: Array<Array<string>>; }> listCandlesticks(currencyPair, opts)

Market candlesticks

Maximum of 1000 points are returned in one query. Be sure not to exceed the limit when specifying &#x60;from&#x60;, &#x60;to&#x60; and &#x60;interval&#x60;

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.SpotApi(client);
const currencyPair = "BTC_USDT"; // string | Currency pair
const opts = {
  'limit': 100, // number | Maximum recent data points returned. `limit` is conflicted with `from` and `to`. If either `from` or `to` is specified, request will be rejected.
  'from': 1546905600, // number | Start time of candlesticks, formatted in Unix timestamp in seconds. Default to`to - 100 * interval` if not specified
  'to': 1546935600, // number | End time of candlesticks, formatted in Unix timestamp in seconds. Default to current time
  'interval': '30m' // '10s' | '1m' | '5m' | '15m' | '30m' | '1h' | '4h' | '8h' | '1d' | '7d' | Interval time between data points
};
api.listCandlesticks(currencyPair, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **string**| Currency pair | [default to undefined]
 **limit** | **number**| Maximum recent data points returned. &#x60;limit&#x60; is conflicted with &#x60;from&#x60; and &#x60;to&#x60;. If either &#x60;from&#x60; or &#x60;to&#x60; is specified, request will be rejected. | [optional] [default to 100]
 **from** | **number**| Start time of candlesticks, formatted in Unix timestamp in seconds. Default to&#x60;to - 100 * interval&#x60; if not specified | [optional] [default to undefined]
 **to** | **number**| End time of candlesticks, formatted in Unix timestamp in seconds. Default to current time | [optional] [default to undefined]
 **interval** | **Interval**| Interval time between data points | [optional] [default to &#39;30m&#39;]

### Return type

Promise<{ response: AxiosResponse; body: Array<Array<string>>; }> [Array](Array.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getFee

> Promise<{ response: http.IncomingMessage; body: TradeFee; }> getFee(opts)

Query user trading fee rates

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.SpotApi(client);
const opts = {
  'currencyPair': "BTC_USDT" // string | Specify a currency pair to retrieve precise fee rate  This field is optional. In most cases, the fee rate is identical among all currency pairs
};
api.getFee(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **string**| Specify a currency pair to retrieve precise fee rate  This field is optional. In most cases, the fee rate is identical among all currency pairs | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: TradeFee; }> [TradeFee](TradeFee.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listSpotAccounts

> Promise<{ response: http.IncomingMessage; body: Array<SpotAccount>; }> listSpotAccounts(opts)

List spot accounts

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.SpotApi(client);
const opts = {
  'currency': "BTC" // string | Retrieved specified currency related data
};
api.listSpotAccounts(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Retrieved specified currency related data | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<SpotAccount>; }> [SpotAccount](SpotAccount.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createBatchOrders

> Promise<{ response: http.IncomingMessage; body: Array<BatchOrder>; }> createBatchOrders(order)

Create a batch of orders

Batch orders requirements:  1. custom order field &#x60;text&#x60; is required 2. At most 4 currency pairs, maximum 10 orders each, are allowed in one request 3. No mixture of spot orders and margin orders, i.e. &#x60;account&#x60; must be identical for all orders 

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.SpotApi(client);
const order = [new Order()]; // Array<Order> | 
api.createBatchOrders(order)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order** | [**Array&lt;Order&gt;**](Order.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: Array<BatchOrder>; }> [BatchOrder](BatchOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## listAllOpenOrders

> Promise<{ response: http.IncomingMessage; body: Array<OpenOrders>; }> listAllOpenOrders(opts)

List all open orders

List open orders in all currency pairs.  Note that pagination parameters affect record number in each currency pair\&#39;s open order list. No pagination is applied to the number of currency pairs returned. All currency pairs with open orders will be returned

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.SpotApi(client);
const opts = {
  'page': 1, // number | Page number
  'limit': 100 // number | Maximum number of records returned in one page in each currency pair
};
api.listAllOpenOrders(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **number**| Page number | [optional] [default to 1]
 **limit** | **number**| Maximum number of records returned in one page in each currency pair | [optional] [default to 100]

### Return type

Promise<{ response: AxiosResponse; body: Array<OpenOrders>; }> [OpenOrders](OpenOrders.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listOrders

> Promise<{ response: http.IncomingMessage; body: Array<Order>; }> listOrders(currencyPair, status, opts)

List orders

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.SpotApi(client);
const currencyPair = "BTC_USDT"; // string | Currency pair
const status = "open"; // 'open' | 'finished' | List orders based on status  `open` - order is waiting to be filled `finished` - order has been filled or cancelled 
const opts = {
  'page': 1, // number | Page number
  'limit': 100 // number | Maximum number of records returned. If `status` is `open`, maximum of `limit` is 100
};
api.listOrders(currencyPair, status, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **string**| Currency pair | [default to undefined]
 **status** | **Status**| List orders based on status  &#x60;open&#x60; - order is waiting to be filled &#x60;finished&#x60; - order has been filled or cancelled  | [default to undefined]
 **page** | **number**| Page number | [optional] [default to 1]
 **limit** | **number**| Maximum number of records returned. If &#x60;status&#x60; is &#x60;open&#x60;, maximum of &#x60;limit&#x60; is 100 | [optional] [default to 100]

### Return type

Promise<{ response: AxiosResponse; body: Array<Order>; }> [Order](Order.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createOrder

> Promise<{ response: http.IncomingMessage; body: Order; }> createOrder(order)

Create an order

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.SpotApi(client);
const order = new Order(); // Order | 
api.createOrder(order)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order** | [**Order**](Order.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: Order; }> [Order](Order.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## cancelOrders

> Promise<{ response: http.IncomingMessage; body: Array<Order>; }> cancelOrders(currencyPair, opts)

Cancel all &#x60;open&#x60; orders in specified currency pair

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.SpotApi(client);
const currencyPair = "BTC_USDT"; // string | Currency pair
const opts = {
  'side': "sell", // 'buy' | 'sell' | All bids or asks. Both included in not specified
  'account': "spot" // 'spot' | 'margin' | Specify account type. Default to all account types being included
};
api.cancelOrders(currencyPair, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **string**| Currency pair | [default to undefined]
 **side** | **Side**| All bids or asks. Both included in not specified | [optional] [default to undefined]
 **account** | **Account**| Specify account type. Default to all account types being included | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<Order>; }> [Order](Order.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## cancelBatchOrders

> Promise<{ response: http.IncomingMessage; body: Array<CancelOrderResult>; }> cancelBatchOrders(cancelOrder)

Cancel a batch of orders with an ID list

Multiple currency pairs can be specified, but maximum 20 orders are allowed per request

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.SpotApi(client);
const cancelOrder = [new CancelOrder()]; // Array<CancelOrder> | 
api.cancelBatchOrders(cancelOrder)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cancelOrder** | [**Array&lt;CancelOrder&gt;**](CancelOrder.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: Array<CancelOrderResult>; }> [CancelOrderResult](CancelOrderResult.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## getOrder

> Promise<{ response: http.IncomingMessage; body: Order; }> getOrder(orderId, currencyPair)

Get a single order

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.SpotApi(client);
const orderId = "12345"; // string | ID returned on order successfully being created
const currencyPair = "BTC_USDT"; // string | Currency pair
api.getOrder(orderId, currencyPair)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **string**| ID returned on order successfully being created | [default to undefined]
 **currencyPair** | **string**| Currency pair | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Order; }> [Order](Order.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## cancelOrder

> Promise<{ response: http.IncomingMessage; body: Order; }> cancelOrder(orderId, currencyPair)

Cancel a single order

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.SpotApi(client);
const orderId = "12345"; // string | ID returned on order successfully being created
const currencyPair = "BTC_USDT"; // string | Currency pair
api.cancelOrder(orderId, currencyPair)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **string**| ID returned on order successfully being created | [default to undefined]
 **currencyPair** | **string**| Currency pair | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Order; }> [Order](Order.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listMyTrades

> Promise<{ response: http.IncomingMessage; body: Array<Trade>; }> listMyTrades(currencyPair, opts)

List personal trading history

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.SpotApi(client);
const currencyPair = "BTC_USDT"; // string | Currency pair
const opts = {
  'limit': 100, // number | Maximum number of records returned in one list
  'page': 1, // number | Page number
  'orderId': "12345" // string | List all trades of specified order
};
api.listMyTrades(currencyPair, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **string**| Currency pair | [default to undefined]
 **limit** | **number**| Maximum number of records returned in one list | [optional] [default to 100]
 **page** | **number**| Page number | [optional] [default to 1]
 **orderId** | **string**| List all trades of specified order | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<Trade>; }> [Trade](Trade.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
