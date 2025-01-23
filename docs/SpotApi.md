# SpotApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listCurrencies**](SpotApi.md#listCurrencies) | **GET** /spot/currencies | List all currencies\&#39; details
[**getCurrency**](SpotApi.md#getCurrency) | **GET** /spot/currencies/{currency} | Get details of a specific currency
[**listCurrencyPairs**](SpotApi.md#listCurrencyPairs) | **GET** /spot/currency_pairs | List all currency pairs supported
[**getCurrencyPair**](SpotApi.md#getCurrencyPair) | **GET** /spot/currency_pairs/{currency_pair} | Get details of a specifc currency pair
[**listTickers**](SpotApi.md#listTickers) | **GET** /spot/tickers | Retrieve ticker information
[**listOrderBook**](SpotApi.md#listOrderBook) | **GET** /spot/order_book | Retrieve order book
[**listTrades**](SpotApi.md#listTrades) | **GET** /spot/trades | Retrieve market trades
[**listCandlesticks**](SpotApi.md#listCandlesticks) | **GET** /spot/candlesticks | Market candlesticks
[**getFee**](SpotApi.md#getFee) | **GET** /spot/fee | Query user trading fee rates
[**getBatchSpotFee**](SpotApi.md#getBatchSpotFee) | **GET** /spot/batch_fee | Query a batch of user trading fee rates
[**listSpotAccounts**](SpotApi.md#listSpotAccounts) | **GET** /spot/accounts | List spot accounts
[**listSpotAccountBook**](SpotApi.md#listSpotAccountBook) | **GET** /spot/account_book | Query account book
[**createBatchOrders**](SpotApi.md#createBatchOrders) | **POST** /spot/batch_orders | Create a batch of orders
[**listAllOpenOrders**](SpotApi.md#listAllOpenOrders) | **GET** /spot/open_orders | List all open orders
[**createCrossLiquidateOrder**](SpotApi.md#createCrossLiquidateOrder) | **POST** /spot/cross_liquidate_orders | close position when cross-currency is disabled
[**listOrders**](SpotApi.md#listOrders) | **GET** /spot/orders | List orders
[**createOrder**](SpotApi.md#createOrder) | **POST** /spot/orders | Create an order
[**cancelOrders**](SpotApi.md#cancelOrders) | **DELETE** /spot/orders | Cancel all &#x60;open&#x60; orders in specified currency pair
[**cancelBatchOrders**](SpotApi.md#cancelBatchOrders) | **POST** /spot/cancel_batch_orders | Cancel a batch of orders with an ID list
[**getOrder**](SpotApi.md#getOrder) | **GET** /spot/orders/{order_id} | Get a single order
[**cancelOrder**](SpotApi.md#cancelOrder) | **DELETE** /spot/orders/{order_id} | Cancel a single order
[**amendOrder**](SpotApi.md#amendOrder) | **PATCH** /spot/orders/{order_id} | Amend an order
[**listMyTrades**](SpotApi.md#listMyTrades) | **GET** /spot/my_trades | List personal trading history
[**getSystemTime**](SpotApi.md#getSystemTime) | **GET** /spot/time | Get server current time
[**countdownCancelAllSpot**](SpotApi.md#countdownCancelAllSpot) | **POST** /spot/countdown_cancel_all | Countdown cancel orders
[**amendBatchOrders**](SpotApi.md#amendBatchOrders) | **POST** /spot/amend_batch_orders | Batch modification of orders
[**getSpotInsuranceHistory**](SpotApi.md#getSpotInsuranceHistory) | **GET** /spot/insurance_history | 查询现货保险基金历史数据
[**listSpotPriceTriggeredOrders**](SpotApi.md#listSpotPriceTriggeredOrders) | **GET** /spot/price_orders | Retrieve running auto order list
[**createSpotPriceTriggeredOrder**](SpotApi.md#createSpotPriceTriggeredOrder) | **POST** /spot/price_orders | Create a price-triggered order
[**cancelSpotPriceTriggeredOrderList**](SpotApi.md#cancelSpotPriceTriggeredOrderList) | **DELETE** /spot/price_orders | Cancel all open orders
[**getSpotPriceTriggeredOrder**](SpotApi.md#getSpotPriceTriggeredOrder) | **GET** /spot/price_orders/{order_id} | Get a price-triggered order
[**cancelSpotPriceTriggeredOrder**](SpotApi.md#cancelSpotPriceTriggeredOrder) | **DELETE** /spot/price_orders/{order_id} | cancel a price-triggered order


## listCurrencies

> Promise<{ response: http.IncomingMessage; body: Array<Currency>; }> listCurrencies()

List all currencies\&#39; details

Currency has two forms:  1. Only currency name, e.g., BTC, USDT 2. &#x60;&lt;currency&gt;_&lt;chain&gt;&#x60;, e.g., &#x60;HT_ETH&#x60;  The latter one occurs when one currency has multiple chains. Currency detail contains a &#x60;chain&#x60; field whatever the form is. To retrieve all chains of one currency, you can use use all the details which has the name of the currency or name starting with &#x60;&lt;currency&gt;_&#x60;.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.SpotApi(client);
api.listCurrencies()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: Array<Currency>; }> [Currency](Currency.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getCurrency

> Promise<{ response: http.IncomingMessage; body: Currency; }> getCurrency(currency)

Get details of a specific currency

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.SpotApi(client);
const currency = "GT"; // string | Currency name
api.getCurrency(currency)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Currency name | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Currency; }> [Currency](Currency.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

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

Get details of a specifc currency pair

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
  'currencyPair': "BTC_USDT", // string | Currency pair
  'timezone': "utc0" // 'utc0' | 'utc8' | 'all' | Timezone
};
api.listTickers(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **string**| Currency pair | [optional] [default to undefined]
 **timezone** | **Timezone**| Timezone | [optional] [default to undefined]

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

Order book will be sorted by price from high to low on bids; low to high on asks

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

支持指定 &#x60;from&#x60; 和 &#x60;to&#x60; 按时间范围查询或基于 &#x60;last_id&#x60; 的翻页查询。默认按时间范围查询,查询范围为最近30天。  基于 &#x60;last_id&#x60; 翻页的查询方式不再推荐继续使用。如果指定 &#x60;last_id&#x60; ，时间范围查询参数会被忽略。  使用 limit&amp;page分页功能检索数据时最大分页数量为100,000条，即 (limit * page - 1) &lt;&#x3D; 100000。

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.SpotApi(client);
const currencyPair = "BTC_USDT"; // string | Currency pair
const opts = {
  'limit': 100, // number | Maximum number of records to be returned in a single list.  Default: 100, Minimum: 1, Maximum: 1000
  'lastId': "12345", // string | Specify list staring point using the `id` of last record in previous list-query results
  'reverse': true, // boolean | Whether the id of records to be retrieved should be less than the last_id specified. Default to false.  When `last_id` is specified. Set `reverse` to `true` to trace back trading history; `false` to retrieve latest tradings.  No effect if `last_id` is not specified.
  'from': 1627706330, // number | Start timestamp of the query
  'to': 1635329650, // number | Time range ending, default to current time
  'page': 1 // number | Page number
};
api.listTrades(currencyPair, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **string**| Currency pair | [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list.  Default: 100, Minimum: 1, Maximum: 1000 | [optional] [default to 100]
 **lastId** | **string**| Specify list staring point using the &#x60;id&#x60; of last record in previous list-query results | [optional] [default to undefined]
 **reverse** | **boolean**| Whether the id of records to be retrieved should be less than the last_id specified. Default to false.  When &#x60;last_id&#x60; is specified. Set &#x60;reverse&#x60; to &#x60;true&#x60; to trace back trading history; &#x60;false&#x60; to retrieve latest tradings.  No effect if &#x60;last_id&#x60; is not specified. | [optional] [default to undefined]
 **from** | **number**| Start timestamp of the query | [optional] [default to undefined]
 **to** | **number**| Time range ending, default to current time | [optional] [default to undefined]
 **page** | **number**| Page number | [optional] [default to 1]

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

Maximum of 1000 points can be returned in a query. Be sure not to exceed the limit when specifying from, to and interval

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.SpotApi(client);
const currencyPair = "BTC_USDT"; // string | Currency pair
const opts = {
  'limit': 100, // number | Maximum recent data points to return. `limit` is conflicted with `from` and `to`. If either `from` or `to` is specified, request will be rejected.
  'from': 1546905600, // number | Start time of candlesticks, formatted in Unix timestamp in seconds. Default to`to - 100 * interval` if not specified
  'to': 1546935600, // number | End time of candlesticks, formatted in Unix timestamp in seconds. Default to current time
  'interval': '30m' // '10s' | '1m' | '5m' | '15m' | '30m' | '1h' | '4h' | '8h' | '1d' | '7d' | '30d' | Interval time between data points. Note that `30d` means 1 natual month, not 30 days
};
api.listCandlesticks(currencyPair, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **string**| Currency pair | [default to undefined]
 **limit** | **number**| Maximum recent data points to return. &#x60;limit&#x60; is conflicted with &#x60;from&#x60; and &#x60;to&#x60;. If either &#x60;from&#x60; or &#x60;to&#x60; is specified, request will be rejected. | [optional] [default to 100]
 **from** | **number**| Start time of candlesticks, formatted in Unix timestamp in seconds. Default to&#x60;to - 100 * interval&#x60; if not specified | [optional] [default to undefined]
 **to** | **number**| End time of candlesticks, formatted in Unix timestamp in seconds. Default to current time | [optional] [default to undefined]
 **interval** | **Interval**| Interval time between data points. Note that &#x60;30d&#x60; means 1 natual month, not 30 days | [optional] [default to &#39;30m&#39;]

### Return type

Promise<{ response: AxiosResponse; body: Array<Array<string>>; }> [Array](Array.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getFee

> Promise<{ response: http.IncomingMessage; body: SpotFee; }> getFee(opts)

Query user trading fee rates

This API is deprecated in favour of new fee retrieving API &#x60;/wallet/fee&#x60;.

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

Promise<{ response: AxiosResponse; body: SpotFee; }> [SpotFee](SpotFee.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getBatchSpotFee

> Promise<{ response: http.IncomingMessage; body: { [key: string]: SpotFee; }; }> getBatchSpotFee(currencyPairs)

Query a batch of user trading fee rates

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.SpotApi(client);
const currencyPairs = "BTC_USDT,ETH_USDT"; // string | A request can only query up to 50 currency pairs
api.getBatchSpotFee(currencyPairs)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPairs** | **string**| A request can only query up to 50 currency pairs | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: { [key: string]: SpotFee; }; }> [SpotFee](SpotFee.md)

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
  'currency': "BTC" // string | Retrieve data of the specified currency
};
api.listSpotAccounts(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Retrieve data of the specified currency | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<SpotAccount>; }> [SpotAccount](SpotAccount.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listSpotAccountBook

> Promise<{ response: http.IncomingMessage; body: Array<SpotAccountBook>; }> listSpotAccountBook(opts)

Query account book

记录查询时间范围不允许超过 30 天。  使用 limit&amp;page分页功能检索数据时最大分页数量为100,000条，即 (limit * page - 1) &lt;&#x3D; 100000。

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
  'currency': "BTC", // string | Retrieve data of the specified currency
  'from': 1627706330, // number | Start timestamp of the query
  'to': 1635329650, // number | Time range ending, default to current time
  'page': 1, // number | Page number
  'limit': 100, // number | Maximum number of records to be returned in a single list
  'type': "lend" // string | Only retrieve changes of the specified type. All types will be returned if not specified.
};
api.listSpotAccountBook(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Retrieve data of the specified currency | [optional] [default to undefined]
 **from** | **number**| Start timestamp of the query | [optional] [default to undefined]
 **to** | **number**| Time range ending, default to current time | [optional] [default to undefined]
 **page** | **number**| Page number | [optional] [default to 1]
 **limit** | **number**| Maximum number of records to be returned in a single list | [optional] [default to 100]
 **type** | **string**| Only retrieve changes of the specified type. All types will be returned if not specified. | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<SpotAccountBook>; }> [SpotAccountBook](SpotAccountBook.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createBatchOrders

> Promise<{ response: http.IncomingMessage; body: Array<BatchOrder>; }> createBatchOrders(order, opts)

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
const opts = {
  'xGateExptime': 1689560679123 // number | 指定过期时间(毫秒); 如果 Gate 收到请求的时间大于过期时间, 请求将被拒绝
};
api.createBatchOrders(order, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order** | [**Array&lt;Order&gt;**](Order.md)|  | 
 **xGateExptime** | **number**| 指定过期时间(毫秒); 如果 Gate 收到请求的时间大于过期时间, 请求将被拒绝 | [optional] [default to undefined]

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

List open orders in all currency pairs.  Note that pagination parameters affect record number in each currency pair\&#39;s open order list. No pagination is applied to the number of currency pairs returned. All currency pairs with open orders will be returned.  Spot,portfolio and margin orders are returned by default. To list cross margin orders, &#x60;account&#x60; must be set to &#x60;cross_margin&#x60;

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
  'limit': 100, // number | Maximum number of records returned in one page in each currency pair
  'account': "cross_margin" // string | Specify operation account. Default to spot ,portfolio and margin account if not specified. Set to `cross_margin` to operate against margin account.  Portfolio margin account must set to `cross_margin` only
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
 **account** | **string**| Specify operation account. Default to spot ,portfolio and margin account if not specified. Set to &#x60;cross_margin&#x60; to operate against margin account.  Portfolio margin account must set to &#x60;cross_margin&#x60; only | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<OpenOrders>; }> [OpenOrders](OpenOrders.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createCrossLiquidateOrder

> Promise<{ response: http.IncomingMessage; body: Order; }> createCrossLiquidateOrder(liquidateOrder)

close position when cross-currency is disabled

Currently, only cross-margin accounts are supported to close position when cross currencies are disabled.  Maximum buy quantity &#x3D; (unpaid principal and interest - currency balance - the amount of the currency in the order book) / 0.998

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.SpotApi(client);
const liquidateOrder = new LiquidateOrder(); // LiquidateOrder | 
api.createCrossLiquidateOrder(liquidateOrder)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **liquidateOrder** | [**LiquidateOrder**](LiquidateOrder.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: Order; }> [Order](Order.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## listOrders

> Promise<{ response: http.IncomingMessage; body: Array<Order>; }> listOrders(currencyPair, status, opts)

List orders

Spot, portfolio and margin orders are returned by default. If cross margin orders are needed, &#x60;account&#x60; must be set to &#x60;cross_margin&#x60;  When &#x60;status&#x60; is &#x60;open&#x60;, i.e., listing open orders, only pagination parameters &#x60;page&#x60; and &#x60;limit&#x60; are supported and &#x60;limit&#x60; cannot be larger than 100. Query by &#x60;side&#x60; and time range parameters &#x60;from&#x60; and &#x60;to&#x60; are not supported.  When &#x60;status&#x60; is &#x60;finished&#x60;, i.e., listing finished orders, pagination parameters, time range parameters &#x60;from&#x60; and &#x60;to&#x60;, and &#x60;side&#x60; parameters are all supported. Time range parameters are handled as order finish time.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.SpotApi(client);
const currencyPair = "BTC_USDT"; // string | Retrieve results with specified currency pair. It is required for open orders, but optional for finished ones.
const status = "open"; // string | List orders based on status  `open` - order is waiting to be filled `finished` - order has been filled or cancelled 
const opts = {
  'page': 1, // number | Page number
  'limit': 100, // number | Maximum number of records to be returned. If `status` is `open`, maximum of `limit` is 100
  'account': "cross_margin", // string | Specify operation account. Default to spot ,portfolio and margin account if not specified. Set to `cross_margin` to operate against margin account.  Portfolio margin account must set to `cross_margin` only
  'from': 1627706330, // number | Start timestamp of the query
  'to': 1635329650, // number | Time range ending, default to current time
  'side': "sell" // string | All bids or asks. Both included if not specified
};
api.listOrders(currencyPair, status, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **string**| Retrieve results with specified currency pair. It is required for open orders, but optional for finished ones. | [default to undefined]
 **status** | **string**| List orders based on status  &#x60;open&#x60; - order is waiting to be filled &#x60;finished&#x60; - order has been filled or cancelled  | [default to undefined]
 **page** | **number**| Page number | [optional] [default to 1]
 **limit** | **number**| Maximum number of records to be returned. If &#x60;status&#x60; is &#x60;open&#x60;, maximum of &#x60;limit&#x60; is 100 | [optional] [default to 100]
 **account** | **string**| Specify operation account. Default to spot ,portfolio and margin account if not specified. Set to &#x60;cross_margin&#x60; to operate against margin account.  Portfolio margin account must set to &#x60;cross_margin&#x60; only | [optional] [default to undefined]
 **from** | **number**| Start timestamp of the query | [optional] [default to undefined]
 **to** | **number**| Time range ending, default to current time | [optional] [default to undefined]
 **side** | **string**| All bids or asks. Both included if not specified | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<Order>; }> [Order](Order.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createOrder

> Promise<{ response: http.IncomingMessage; body: Order; }> createOrder(order, opts)

Create an order

支持现货、保证金、杠杆、全仓杠杆下单。通过 &#x60;account&#x60; 字段来使用不同的账户，默认为 &#x60;spot&#x60; ，即使用现货账户下单，如果用户是 &#x60;unified&#x60; 账户，默认是用统一账户下单  使用杠杆账户交易，即 &#x60;account&#x60; 设置为 &#x60;margin&#x60; 的时候，可以设置 &#x60;auto_borrow&#x60; 为 &#x60;true&#x60;， 在账户余额不足的情况，由系统自动执行 &#x60;POST /margin/uni/loans&#x60; 借入不足部分。 杠杆下单成交之后的获取到的资产是否自动用于归还逐仓杠杆账户的借入单，取决于用户逐仓杠杆**账户**的自动还款设置， 该账户自动还款设置可以通过 &#x60;/margin/auto_repay&#x60; 来查询和设置。  使用全仓杠杆账户交易，即 &#x60;account&#x60; 设置为 &#x60;cross_margin&#x60; 的时候，同样可以启用 &#x60;auto_borrow&#x60; 来实现自动借入不足部分，但是与逐仓杠杆账户不同的是，全仓杠杆账户的委托是否自动还款取决于下单时的 &#x60;auto_repay&#x60; 设置，该设置只对当前委托生效，即只有该委托成交之后获取到的资产会用来还款全仓杠杆账户的借入单。 全仓杠杆账户下单目前支持同时开启 &#x60;auto_borrow&#x60; 和 &#x60;auto_repay&#x60;。  自动还款会在订单结束时触发，即 &#x60;status&#x60; 为 &#x60;cancelled&#x60; 或者 &#x60;closed&#x60; 。  **委托状态**  挂单中的委托状态是 &#x60;open&#x60; ，在数量全部成交之前保持为 &#x60;open&#x60; 。如果被全部吃掉，则订单结束，状态变成 &#x60;closed&#x60; 。 假如全部成交之前，订单被撤销，不管是否有部分成交，状态都会变为 &#x60;cancelled&#x60;  **冰山委托**  &#x60;iceberg&#x60; 用来设置冰山委托显示的数量，如果需要完全隐藏，设置为 &#x60;-1&#x60; 。注意隐藏部分成交时按照 taker 的手续费率收取。  **限制用户自成交**  设置 &#x60;stp_act&#x60; 来决定使用限制用户自成交的策略

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
const opts = {
  'xGateExptime': 1689560679123 // number | 指定过期时间(毫秒); 如果 Gate 收到请求的时间大于过期时间, 请求将被拒绝
};
api.createOrder(order, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order** | [**Order**](Order.md)|  | 
 **xGateExptime** | **number**| 指定过期时间(毫秒); 如果 Gate 收到请求的时间大于过期时间, 请求将被拒绝 | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Order; }> [Order](Order.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## cancelOrders

> Promise<{ response: http.IncomingMessage; body: Array<OrderCancel>; }> cancelOrders(opts)

Cancel all &#x60;open&#x60; orders in specified currency pair

不指定 &#x60;account&#x60; 参数时，包括现货、保证金、逐仓杠杆和全仓杠杆在内的所有挂单都会执行撤销操作。 不指定 &#x60;currency_pair&#x60;时，会撤销所有交易对的挂单 可以单独指定某一种账户，撤销指定账户下的所有挂单

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
  'currencyPair': "BTC_USDT", // string | Currency pair
  'side': "sell", // string | All bids or asks. Both included if not specified
  'account': "spot", // string | 指定账户类型  - 经典账户：不指定则全部包含   - 统一账户：指定`unified` - 统一账户(旧)：只能指定`cross_margin`
  'actionMode': "ACK", // string | Processing Mode  When placing an order, different fields are returned based on the action_mode  - ACK: Asynchronous mode, returns only key order fields - RESULT: No clearing information - FULL: Full mode (default)
  'xGateExptime': 1689560679123 // number | 指定过期时间(毫秒); 如果 Gate 收到请求的时间大于过期时间, 请求将被拒绝
};
api.cancelOrders(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **string**| Currency pair | [optional] [default to undefined]
 **side** | **string**| All bids or asks. Both included if not specified | [optional] [default to undefined]
 **account** | **string**| 指定账户类型  - 经典账户：不指定则全部包含   - 统一账户：指定&#x60;unified&#x60; - 统一账户(旧)：只能指定&#x60;cross_margin&#x60; | [optional] [default to undefined]
 **actionMode** | **string**| Processing Mode  When placing an order, different fields are returned based on the action_mode  - ACK: Asynchronous mode, returns only key order fields - RESULT: No clearing information - FULL: Full mode (default) | [optional] [default to undefined]
 **xGateExptime** | **number**| 指定过期时间(毫秒); 如果 Gate 收到请求的时间大于过期时间, 请求将被拒绝 | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<OrderCancel>; }> [OrderCancel](OrderCancel.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## cancelBatchOrders

> Promise<{ response: http.IncomingMessage; body: Array<CancelOrderResult>; }> cancelBatchOrders(cancelBatchOrder, opts)

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
const cancelBatchOrder = [new CancelBatchOrder()]; // Array<CancelBatchOrder> | 
const opts = {
  'xGateExptime': 1689560679123 // number | 指定过期时间(毫秒); 如果 Gate 收到请求的时间大于过期时间, 请求将被拒绝
};
api.cancelBatchOrders(cancelBatchOrder, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cancelBatchOrder** | [**Array&lt;CancelBatchOrder&gt;**](CancelBatchOrder.md)|  | 
 **xGateExptime** | **number**| 指定过期时间(毫秒); 如果 Gate 收到请求的时间大于过期时间, 请求将被拒绝 | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<CancelOrderResult>; }> [CancelOrderResult](CancelOrderResult.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## getOrder

> Promise<{ response: http.IncomingMessage; body: Order; }> getOrder(orderId, currencyPair, opts)

Get a single order

Spot, portfolio and margin orders are queried by default. If cross margin orders are needed or portfolio margin account are used, account must be set to cross_margin.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.SpotApi(client);
const orderId = "12345"; // string | Order ID returned, or user custom ID(i.e., `text` field). Operations based on custom ID can only be checked when the order is in orderbook.  When the order is finished, it can be checked within 1 hour after the end of the order.  After that, only order ID is accepted.
const currencyPair = "BTC_USDT"; // string | 指定交易对查询。如果查询挂单的记录，该字段必选。如果查询已成交的记录，该字段可以不指定
const opts = {
  'account': "cross_margin" // string | Specify operation account. Default to spot ,portfolio and margin account if not specified. Set to `cross_margin` to operate against margin account.  Portfolio margin account must set to `cross_margin` only
};
api.getOrder(orderId, currencyPair, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **string**| Order ID returned, or user custom ID(i.e., &#x60;text&#x60; field). Operations based on custom ID can only be checked when the order is in orderbook.  When the order is finished, it can be checked within 1 hour after the end of the order.  After that, only order ID is accepted. | [default to undefined]
 **currencyPair** | **string**| 指定交易对查询。如果查询挂单的记录，该字段必选。如果查询已成交的记录，该字段可以不指定 | [default to undefined]
 **account** | **string**| Specify operation account. Default to spot ,portfolio and margin account if not specified. Set to &#x60;cross_margin&#x60; to operate against margin account.  Portfolio margin account must set to &#x60;cross_margin&#x60; only | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Order; }> [Order](Order.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## cancelOrder

> Promise<{ response: http.IncomingMessage; body: Order; }> cancelOrder(orderId, currencyPair, opts)

Cancel a single order

Spot,portfolio and margin orders are cancelled by default. If trying to cancel cross margin orders or portfolio margin account are used, account must be set to cross_margin

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.SpotApi(client);
const orderId = "12345"; // string | Order ID returned, or user custom ID(i.e., `text` field). Operations based on custom ID can only be checked when the order is in orderbook.  When the order is finished, it can be checked within 1 hour after the end of the order.  After that, only order ID is accepted.
const currencyPair = "BTC_USDT"; // string | Currency pair
const opts = {
  'account': "cross_margin", // string | Specify operation account. Default to spot ,portfolio and margin account if not specified. Set to `cross_margin` to operate against margin account.  Portfolio margin account must set to `cross_margin` only
  'actionMode': "ACK", // string | Processing Mode  When placing an order, different fields are returned based on the action_mode  - ACK: Asynchronous mode, returns only key order fields - RESULT: No clearing information - FULL: Full mode (default)
  'xGateExptime': 1689560679123 // number | 指定过期时间(毫秒); 如果 Gate 收到请求的时间大于过期时间, 请求将被拒绝
};
api.cancelOrder(orderId, currencyPair, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **string**| Order ID returned, or user custom ID(i.e., &#x60;text&#x60; field). Operations based on custom ID can only be checked when the order is in orderbook.  When the order is finished, it can be checked within 1 hour after the end of the order.  After that, only order ID is accepted. | [default to undefined]
 **currencyPair** | **string**| Currency pair | [default to undefined]
 **account** | **string**| Specify operation account. Default to spot ,portfolio and margin account if not specified. Set to &#x60;cross_margin&#x60; to operate against margin account.  Portfolio margin account must set to &#x60;cross_margin&#x60; only | [optional] [default to undefined]
 **actionMode** | **string**| Processing Mode  When placing an order, different fields are returned based on the action_mode  - ACK: Asynchronous mode, returns only key order fields - RESULT: No clearing information - FULL: Full mode (default) | [optional] [default to undefined]
 **xGateExptime** | **number**| 指定过期时间(毫秒); 如果 Gate 收到请求的时间大于过期时间, 请求将被拒绝 | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Order; }> [Order](Order.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## amendOrder

> Promise<{ response: http.IncomingMessage; body: Order; }> amendOrder(orderId, orderPatch, opts)

Amend an order

默认修改现货、保证金和逐仓杠杆账户的订单，如果需要修改全仓杠杆账户订单，必须指定 &#x60;account&#x60; 为 &#x60;cross_margin&#x60;，统一账户 &#x60;account&#x60; 只能指定为 &#x60;cross_margin&#x60;。  目前请求体和query都支持currency_pair和account传参，但请求体优先级更高  currency_pair必须在请求体或query中二选一填入  目前只支持修改价格或数量（二选一）  关于限速：修改订单和创建订单共享限速规则  关于匹配优先级：只修改数量变小不影响匹配优先级，修改价格或修改数量变大则优先级将调整到新价格最后面    注意事项:修改数量小于已成交数量会触发撤单操作

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.SpotApi(client);
const orderId = "12345"; // string | Order ID returned, or user custom ID(i.e., `text` field). Operations based on custom ID can only be checked when the order is in orderbook.  When the order is finished, it can be checked within 1 hour after the end of the order.  After that, only order ID is accepted.
const orderPatch = new OrderPatch(); // OrderPatch | 
const opts = {
  'currencyPair': "BTC_USDT", // string | Currency pair
  'account': "cross_margin", // string | Specify operation account. Default to spot ,portfolio and margin account if not specified. Set to `cross_margin` to operate against margin account.  Portfolio margin account must set to `cross_margin` only
  'xGateExptime': 1689560679123 // number | 指定过期时间(毫秒); 如果 Gate 收到请求的时间大于过期时间, 请求将被拒绝
};
api.amendOrder(orderId, orderPatch, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **string**| Order ID returned, or user custom ID(i.e., &#x60;text&#x60; field). Operations based on custom ID can only be checked when the order is in orderbook.  When the order is finished, it can be checked within 1 hour after the end of the order.  After that, only order ID is accepted. | [default to undefined]
 **orderPatch** | [**OrderPatch**](OrderPatch.md)|  | 
 **currencyPair** | **string**| Currency pair | [optional] [default to undefined]
 **account** | **string**| Specify operation account. Default to spot ,portfolio and margin account if not specified. Set to &#x60;cross_margin&#x60; to operate against margin account.  Portfolio margin account must set to &#x60;cross_margin&#x60; only | [optional] [default to undefined]
 **xGateExptime** | **number**| 指定过期时间(毫秒); 如果 Gate 收到请求的时间大于过期时间, 请求将被拒绝 | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Order; }> [Order](Order.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## listMyTrades

> Promise<{ response: http.IncomingMessage; body: Array<Trade>; }> listMyTrades(opts)

List personal trading history

默认查询现货、保证金和逐仓杠杆账户的成交记录，如果需要查询全仓杠杆账户的成交记录，必须指定 &#x60;account&#x60; 为 &#x60;cross_margin&#x60; 。  可以通过指定 &#x60;from&#x60; 或(和) &#x60;to&#x60; 来查询指定时间范围内的历史。  - 如果不指定任何时间参数，只能获取最近 7 天的数据。 - 如果只指定 &#x60;from&#x60; 或 &#x60;to&#x60; 的任一参数，也同样只返回指定时间开始（或结束）的 7 天范围的数据。 - &#x60;from&#x60; 和 &#x60;to&#x60; 的范围不允许超过 30 天 。  时间范围筛选的参数均是按订单**结束**时间来处理。  使用 limit&amp;page分页功能检索数据时最大分页数量为100,000条，即 (limit * page - 1) &lt;&#x3D; 100000。

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
  'currencyPair': "BTC_USDT", // string | Retrieve results with specified currency pair
  'limit': 100, // number | Maximum number of records to be returned in a single list.  Default: 100, Minimum: 1, Maximum: 1000
  'page': 1, // number | Page number
  'orderId': "12345", // string | Filter trades with specified order ID. `currency_pair` is also required if this field is present
  'account': "cross_margin", // string | Specify operation account. Default to spot ,portfolio and margin account if not specified. Set to `cross_margin` to operate against margin account.  Portfolio margin account must set to `cross_margin` only
  'from': 1627706330, // number | Start timestamp of the query
  'to': 1635329650 // number | Time range ending, default to current time
};
api.listMyTrades(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **string**| Retrieve results with specified currency pair | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list.  Default: 100, Minimum: 1, Maximum: 1000 | [optional] [default to 100]
 **page** | **number**| Page number | [optional] [default to 1]
 **orderId** | **string**| Filter trades with specified order ID. &#x60;currency_pair&#x60; is also required if this field is present | [optional] [default to undefined]
 **account** | **string**| Specify operation account. Default to spot ,portfolio and margin account if not specified. Set to &#x60;cross_margin&#x60; to operate against margin account.  Portfolio margin account must set to &#x60;cross_margin&#x60; only | [optional] [default to undefined]
 **from** | **number**| Start timestamp of the query | [optional] [default to undefined]
 **to** | **number**| Time range ending, default to current time | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<Trade>; }> [Trade](Trade.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getSystemTime

> Promise<{ response: http.IncomingMessage; body: SystemTime; }> getSystemTime()

Get server current time

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.SpotApi(client);
api.getSystemTime()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: SystemTime; }> [SystemTime](SystemTime.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## countdownCancelAllSpot

> Promise<{ response: http.IncomingMessage; body: TriggerTime; }> countdownCancelAllSpot(countdownCancelAllSpotTask)

Countdown cancel orders

When the timeout set by the user is reached, if there is no cancel or set a new countdown, the related pending orders will be automatically cancelled.  This endpoint can be called repeatedly to set a new countdown or cancel the countdown. For example, call this endpoint at 30s intervals, each countdown&#x60;timeout&#x60; is set to 30s. If this endpoint is not called again within 30 seconds, all pending orders on the specified &#x60;market&#x60; will be automatically cancelled, if no &#x60;market&#x60; is specified, all market pending orders will be cancelled. If the &#x60;timeout&#x60; is set to 0 within 30 seconds, the countdown timer will expire and the cacnel function will be cancelled.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.SpotApi(client);
const countdownCancelAllSpotTask = new CountdownCancelAllSpotTask(); // CountdownCancelAllSpotTask | 
api.countdownCancelAllSpot(countdownCancelAllSpotTask)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **countdownCancelAllSpotTask** | [**CountdownCancelAllSpotTask**](CountdownCancelAllSpotTask.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: TriggerTime; }> [TriggerTime](TriggerTime.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## amendBatchOrders

> Promise<{ response: http.IncomingMessage; body: Array<BatchOrder>; }> amendBatchOrders(batchAmendItem, opts)

Batch modification of orders

Default modification of orders for spot, portfolio, and margin accounts. To modify orders for a cross margin account, the &#x60;account&#x60; parameter must be specified as &#x60;cross_margin&#x60;.  For portfolio margin accounts, the &#x60;account&#x60; parameter can only be specified as &#x60;cross_margin&#x60;. Currently, only modifications to price or quantity (choose one) are supported. When modifying unfinished orders, a maximum of 5 orders can be batch-modified in one request. The request parameters should be passed in an array format. During batch modification, if one order modification fails, the modification process will continue with the next order. After execution, the response will include corresponding failure information for the failed orders. The sequence of calling for batch order modification should be consistent with the order in the order list. The response content order for batch order modification will also be consistent with the order in the order list.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.SpotApi(client);
const batchAmendItem = [new BatchAmendItem()]; // Array<BatchAmendItem> | 
const opts = {
  'xGateExptime': 1689560679123 // number | 指定过期时间(毫秒); 如果 Gate 收到请求的时间大于过期时间, 请求将被拒绝
};
api.amendBatchOrders(batchAmendItem, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batchAmendItem** | [**Array&lt;BatchAmendItem&gt;**](BatchAmendItem.md)|  | 
 **xGateExptime** | **number**| 指定过期时间(毫秒); 如果 Gate 收到请求的时间大于过期时间, 请求将被拒绝 | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<BatchOrder>; }> [BatchOrder](BatchOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## getSpotInsuranceHistory

> Promise<{ response: http.IncomingMessage; body: Array<SpotInsuranceHistory>; }> getSpotInsuranceHistory(business, currency, from, to, opts)

查询现货保险基金历史数据

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.SpotApi(client);
const business = "margin"; // string | 杠杆业务，margin - 逐仓；unified - 统一账户
const currency = "BTC"; // string | Currency
const from = 1547706332; // number | 起始时间戳，秒级
const to = 1547706332; // number | 终止时间戳，秒级
const opts = {
  'page': 1, // number | Page number
  'limit': 30 // number | 列表返回的最大数量, 默认值30
};
api.getSpotInsuranceHistory(business, currency, from, to, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **business** | **string**| 杠杆业务，margin - 逐仓；unified - 统一账户 | [default to undefined]
 **currency** | **string**| Currency | [default to undefined]
 **from** | **number**| 起始时间戳，秒级 | [default to undefined]
 **to** | **number**| 终止时间戳，秒级 | [default to undefined]
 **page** | **number**| Page number | [optional] [default to 1]
 **limit** | **number**| 列表返回的最大数量, 默认值30 | [optional] [default to 30]

### Return type

Promise<{ response: AxiosResponse; body: Array<SpotInsuranceHistory>; }> [SpotInsuranceHistory](SpotInsuranceHistory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listSpotPriceTriggeredOrders

> Promise<{ response: http.IncomingMessage; body: Array<SpotPriceTriggeredOrder>; }> listSpotPriceTriggeredOrders(status, opts)

Retrieve running auto order list

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.SpotApi(client);
const status = "status_example"; // 'open' | 'finished' | Only list the orders with this status
const opts = {
  'market': "BTC_USDT", // string | Currency pair
  'account': "account_example", // 'normal' | 'margin' | 'cross_margin' | Trading account type.  Portfolio margin account must set to `cross_margin`
  'limit': 100, // number | Maximum number of records to be returned in a single list
  'offset': 0 // number | List offset, starting from 0
};
api.listSpotPriceTriggeredOrders(status, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **Status**| Only list the orders with this status | [default to undefined]
 **market** | **string**| Currency pair | [optional] [default to undefined]
 **account** | **Account**| Trading account type.  Portfolio margin account must set to &#x60;cross_margin&#x60; | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0 | [optional] [default to 0]

### Return type

Promise<{ response: AxiosResponse; body: Array<SpotPriceTriggeredOrder>; }> [SpotPriceTriggeredOrder](SpotPriceTriggeredOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createSpotPriceTriggeredOrder

> Promise<{ response: http.IncomingMessage; body: TriggerOrderResponse; }> createSpotPriceTriggeredOrder(spotPriceTriggeredOrder)

Create a price-triggered order

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.SpotApi(client);
const spotPriceTriggeredOrder = new SpotPriceTriggeredOrder(); // SpotPriceTriggeredOrder | 
api.createSpotPriceTriggeredOrder(spotPriceTriggeredOrder)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spotPriceTriggeredOrder** | [**SpotPriceTriggeredOrder**](SpotPriceTriggeredOrder.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: TriggerOrderResponse; }> [TriggerOrderResponse](TriggerOrderResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## cancelSpotPriceTriggeredOrderList

> Promise<{ response: http.IncomingMessage; body: Array<SpotPriceTriggeredOrder>; }> cancelSpotPriceTriggeredOrderList(opts)

Cancel all open orders

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
  'market': "BTC_USDT", // string | Currency pair
  'account': "account_example" // 'normal' | 'margin' | 'cross_margin' | Trading account type.  Portfolio margin account must set to `cross_margin`
};
api.cancelSpotPriceTriggeredOrderList(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **market** | **string**| Currency pair | [optional] [default to undefined]
 **account** | **Account**| Trading account type.  Portfolio margin account must set to &#x60;cross_margin&#x60; | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<SpotPriceTriggeredOrder>; }> [SpotPriceTriggeredOrder](SpotPriceTriggeredOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getSpotPriceTriggeredOrder

> Promise<{ response: http.IncomingMessage; body: SpotPriceTriggeredOrder; }> getSpotPriceTriggeredOrder(orderId)

Get a price-triggered order

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.SpotApi(client);
const orderId = "orderId_example"; // string | Retrieve the data of the order with the specified ID
api.getSpotPriceTriggeredOrder(orderId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **string**| Retrieve the data of the order with the specified ID | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: SpotPriceTriggeredOrder; }> [SpotPriceTriggeredOrder](SpotPriceTriggeredOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## cancelSpotPriceTriggeredOrder

> Promise<{ response: http.IncomingMessage; body: SpotPriceTriggeredOrder; }> cancelSpotPriceTriggeredOrder(orderId)

cancel a price-triggered order

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.SpotApi(client);
const orderId = "orderId_example"; // string | Retrieve the data of the order with the specified ID
api.cancelSpotPriceTriggeredOrder(orderId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **string**| Retrieve the data of the order with the specified ID | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: SpotPriceTriggeredOrder; }> [SpotPriceTriggeredOrder](SpotPriceTriggeredOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
