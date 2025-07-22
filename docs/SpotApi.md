# SpotApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listCurrencies**](SpotApi.md#listCurrencies) | **GET** /spot/currencies | List all currencies\&#39; details.
[**getCurrency**](SpotApi.md#getCurrency) | **GET** /spot/currencies/{currency} | Get details of a specific currency.
[**listCurrencyPairs**](SpotApi.md#listCurrencyPairs) | **GET** /spot/currency_pairs | List all currency pairs supported.
[**getCurrencyPair**](SpotApi.md#getCurrencyPair) | **GET** /spot/currency_pairs/{currency_pair} | Get details of a specifc currency pair.
[**listTickers**](SpotApi.md#listTickers) | **GET** /spot/tickers | Retrieve ticker information.
[**listOrderBook**](SpotApi.md#listOrderBook) | **GET** /spot/order_book | Retrieve order book.
[**listTrades**](SpotApi.md#listTrades) | **GET** /spot/trades | Retrieve market trades.
[**listCandlesticks**](SpotApi.md#listCandlesticks) | **GET** /spot/candlesticks | Market candlesticks.
[**getFee**](SpotApi.md#getFee) | **GET** /spot/fee | Query user trading fee rates.
[**getBatchSpotFee**](SpotApi.md#getBatchSpotFee) | **GET** /spot/batch_fee | Query a batch of user trading fee rates.
[**listSpotAccounts**](SpotApi.md#listSpotAccounts) | **GET** /spot/accounts | List spot accounts.
[**listSpotAccountBook**](SpotApi.md#listSpotAccountBook) | **GET** /spot/account_book | Query account book.
[**createBatchOrders**](SpotApi.md#createBatchOrders) | **POST** /spot/batch_orders | Create a batch of orders.
[**listAllOpenOrders**](SpotApi.md#listAllOpenOrders) | **GET** /spot/open_orders | List all open orders.
[**createCrossLiquidateOrder**](SpotApi.md#createCrossLiquidateOrder) | **POST** /spot/cross_liquidate_orders | close position when cross-currency is disabled.
[**listOrders**](SpotApi.md#listOrders) | **GET** /spot/orders | List orders.
[**createOrder**](SpotApi.md#createOrder) | **POST** /spot/orders | Create an order.
[**cancelOrders**](SpotApi.md#cancelOrders) | **DELETE** /spot/orders | Cancel all &#x60;open&#x60; orders in specified currency pair.
[**cancelBatchOrders**](SpotApi.md#cancelBatchOrders) | **POST** /spot/cancel_batch_orders | Cancel a batch of orders with an ID list.
[**getOrder**](SpotApi.md#getOrder) | **GET** /spot/orders/{order_id} | Get a single order.
[**cancelOrder**](SpotApi.md#cancelOrder) | **DELETE** /spot/orders/{order_id} | Cancel a single order.
[**amendOrder**](SpotApi.md#amendOrder) | **PATCH** /spot/orders/{order_id} | Amend an order.
[**listMyTrades**](SpotApi.md#listMyTrades) | **GET** /spot/my_trades | List personal trading history.
[**getSystemTime**](SpotApi.md#getSystemTime) | **GET** /spot/time | Get server current time.
[**countdownCancelAllSpot**](SpotApi.md#countdownCancelAllSpot) | **POST** /spot/countdown_cancel_all | Countdown cancel orders.
[**amendBatchOrders**](SpotApi.md#amendBatchOrders) | **POST** /spot/amend_batch_orders | Batch modification of orders.
[**getSpotInsuranceHistory**](SpotApi.md#getSpotInsuranceHistory) | **GET** /spot/insurance_history | Query spot insurance fund historical data.
[**listSpotPriceTriggeredOrders**](SpotApi.md#listSpotPriceTriggeredOrders) | **GET** /spot/price_orders | Retrieve running auto order list.
[**createSpotPriceTriggeredOrder**](SpotApi.md#createSpotPriceTriggeredOrder) | **POST** /spot/price_orders | Create a price-triggered order.
[**cancelSpotPriceTriggeredOrderList**](SpotApi.md#cancelSpotPriceTriggeredOrderList) | **DELETE** /spot/price_orders | Cancel All Price-triggered Orders.
[**getSpotPriceTriggeredOrder**](SpotApi.md#getSpotPriceTriggeredOrder) | **GET** /spot/price_orders/{order_id} | Get a price-triggered order.
[**cancelSpotPriceTriggeredOrder**](SpotApi.md#cancelSpotPriceTriggeredOrder) | **DELETE** /spot/price_orders/{order_id} | cancel a price-triggered order.


## listCurrencies

> Promise<{ response: http.IncomingMessage; body: Array<Currency>; }> listCurrencies()

List all currencies\&#39; details.

When a currency corresponds to multiple chains, you can query the information of multiple chains through the &#x60;chains&#x60; field, such as the charging and recharge status, identification, etc. of the chain.

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

Get details of a specific currency.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.SpotApi(client);
const currency = "GT"; // string | Currency name.
api.getCurrency(currency)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Currency name. | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Currency; }> [Currency](Currency.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCurrencyPairs

> Promise<{ response: http.IncomingMessage; body: Array<CurrencyPair>; }> listCurrencyPairs()

List all currency pairs supported.

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

Get details of a specifc currency pair.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.SpotApi(client);
const currencyPair = "ETH_BTC"; // string | Currency pair.
api.getCurrencyPair(currencyPair)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **string**| Currency pair. | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: CurrencyPair; }> [CurrencyPair](CurrencyPair.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listTickers

> Promise<{ response: http.IncomingMessage; body: Array<Ticker>; }> listTickers(opts)

Retrieve ticker information.

Return only related data if &#x60;currency_pair&#x60; is specified; otherwise return all of them

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.SpotApi(client);
const opts = {
  'currencyPair': "BTC_USDT", // string | Currency pair.
  'timezone': "utc0" // 'utc0' | 'utc8' | 'all' | Timezone.
};
api.listTickers(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **string**| Currency pair. | [optional] [default to undefined]
 **timezone** | **Timezone**| Timezone. | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<Ticker>; }> [Ticker](Ticker.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listOrderBook

> Promise<{ response: http.IncomingMessage; body: OrderBook; }> listOrderBook(currencyPair, opts)

Retrieve order book.

Market depth buy orders are sorted by price from high to low, sell orders are reversed

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.SpotApi(client);
const currencyPair = "BTC_USDT"; // string | Currency pair.
const opts = {
  'interval': '0', // string | Order depth. 0 means no aggregation is applied. default to 0.
  'limit': 10, // number | Maximum number of order depth data in asks or bids.
  'withId': false // boolean | Return order book ID.
};
api.listOrderBook(currencyPair, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **string**| Currency pair. | [default to undefined]
 **interval** | **string**| Order depth. 0 means no aggregation is applied. default to 0. | [optional] [default to &#39;0&#39;]
 **limit** | **number**| Maximum number of order depth data in asks or bids. | [optional] [default to 10]
 **withId** | **boolean**| Return order book ID. | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: OrderBook; }> [OrderBook](OrderBook.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listTrades

> Promise<{ response: http.IncomingMessage; body: Array<Trade>; }> listTrades(currencyPair, opts)

Retrieve market trades.

Supports &#x60;from&#x60; and &#x60;to&#x60; by time range query or page-turn query based on &#x60;last_id&#x60;. By default, is the last 30 days.  The query method based on &#x60;last_id&#x60; page turn is no longer recommended. If &#x60;last_id&#x60; is specified, the time range query parameters will be ignored.  The maximum number of pages when searching data using limit&amp;page paging function is 100,0, that is, limit * (page - 1) &lt;&#x3D; 100,0.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.SpotApi(client);
const currencyPair = "BTC_USDT"; // string | Currency pair.
const opts = {
  'limit': 100, // number | Maximum number of records to be returned in a single list. Default: 100, Minimum: 1, Maximum: 1000
  'lastId': "12345", // string | Specify the currency name to query in batches, and support up to 100 pass parameters at a time.
  'reverse': true, // boolean | Whether the id of records to be retrieved should be less than the last_id specified. Default to false.  When `last_id` is specified. Set `reverse` to `true` to trace back trading history; `false` to retrieve latest tradings.  No effect if `last_id` is not specified.
  'from': 1627706330, // number | Start timestamp of the query.
  'to': 1635329650, // number | Time range ending, default to current time.
  'page': 1 // number | Page number.
};
api.listTrades(currencyPair, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **string**| Currency pair. | [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list. Default: 100, Minimum: 1, Maximum: 1000 | [optional] [default to 100]
 **lastId** | **string**| Specify the currency name to query in batches, and support up to 100 pass parameters at a time. | [optional] [default to undefined]
 **reverse** | **boolean**| Whether the id of records to be retrieved should be less than the last_id specified. Default to false.  When &#x60;last_id&#x60; is specified. Set &#x60;reverse&#x60; to &#x60;true&#x60; to trace back trading history; &#x60;false&#x60; to retrieve latest tradings.  No effect if &#x60;last_id&#x60; is not specified. | [optional] [default to undefined]
 **from** | **number**| Start timestamp of the query. | [optional] [default to undefined]
 **to** | **number**| Time range ending, default to current time. | [optional] [default to undefined]
 **page** | **number**| Page number. | [optional] [default to 1]

### Return type

Promise<{ response: AxiosResponse; body: Array<Trade>; }> [Trade](Trade.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCandlesticks

> Promise<{ response: http.IncomingMessage; body: Array<Array<string>>; }> listCandlesticks(currencyPair, opts)

Market candlesticks.

Maximum of 1000 points can be returned in a query. Be sure not to exceed the limit when specifying from, to and interval

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.SpotApi(client);
const currencyPair = "BTC_USDT"; // string | Currency pair.
const opts = {
  'limit': 100, // number | Maximum recent data points to return. `limit` is conflicted with `from` and `to`. If either `from` or `to` is specified, request will be rejected.
  'from': 1546905600, // number | Start time of candlesticks, formatted in Unix timestamp in seconds. Default to`to - 100 * interval` if not specified
  'to': 1546935600, // number | Specify the end time of the K-line chart, defaults to current time if not specified, note that the time format is Unix timestamp with second precision specified
  'interval': '30m' // '1s' | '10s' | '1m' | '5m' | '15m' | '30m' | '1h' | '4h' | '8h' | '1d' | '7d' | '30d' | Interval time between data points. Note that `30d` means 1 natual month, not 30 days
};
api.listCandlesticks(currencyPair, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **string**| Currency pair. | [default to undefined]
 **limit** | **number**| Maximum recent data points to return. &#x60;limit&#x60; is conflicted with &#x60;from&#x60; and &#x60;to&#x60;. If either &#x60;from&#x60; or &#x60;to&#x60; is specified, request will be rejected. | [optional] [default to 100]
 **from** | **number**| Start time of candlesticks, formatted in Unix timestamp in seconds. Default to&#x60;to - 100 * interval&#x60; if not specified | [optional] [default to undefined]
 **to** | **number**| Specify the end time of the K-line chart, defaults to current time if not specified, note that the time format is Unix timestamp with second precision specified | [optional] [default to undefined]
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

Query user trading fee rates.

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

Query a batch of user trading fee rates.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.SpotApi(client);
const currencyPairs = "BTC_USDT,ETH_USDT"; // string | A request can only query up to 50 currency pairs.
api.getBatchSpotFee(currencyPairs)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPairs** | **string**| A request can only query up to 50 currency pairs. | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: { [key: string]: SpotFee; }; }> [SpotFee](SpotFee.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listSpotAccounts

> Promise<{ response: http.IncomingMessage; body: Array<SpotAccount>; }> listSpotAccounts(opts)

List spot accounts.

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
  'currency': "BTC" // string | Retrieve data of the specified currency.
};
api.listSpotAccounts(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Retrieve data of the specified currency. | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<SpotAccount>; }> [SpotAccount](SpotAccount.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listSpotAccountBook

> Promise<{ response: http.IncomingMessage; body: Array<SpotAccountBook>; }> listSpotAccountBook(opts)

Query account book.

Record query time range is not allowed to exceed 30 days.  The maximum number of pages when searching data using limit&amp;page paging function is 100,0, that is, limit * (page - 1) &lt;&#x3D; 100,0.

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
  'currency': "BTC", // string | Retrieve data of the specified currency.
  'from': 1627706330, // number | Start timestamp of the query.
  'to': 1635329650, // number | Time range ending, default to current time.
  'page': 1, // number | Page number.
  'limit': 100, // number | Maximum number of records to be returned in a single list.
  'type': "lend", // string | Only retrieve changes of the specified type. All types will be returned if not specified.
  'code': "code_example" // string | Specify account change code query, if not specified, all change types are included, and the priority is higher than `type`
};
api.listSpotAccountBook(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Retrieve data of the specified currency. | [optional] [default to undefined]
 **from** | **number**| Start timestamp of the query. | [optional] [default to undefined]
 **to** | **number**| Time range ending, default to current time. | [optional] [default to undefined]
 **page** | **number**| Page number. | [optional] [default to 1]
 **limit** | **number**| Maximum number of records to be returned in a single list. | [optional] [default to 100]
 **type** | **string**| Only retrieve changes of the specified type. All types will be returned if not specified. | [optional] [default to undefined]
 **code** | **string**| Specify account change code query, if not specified, all change types are included, and the priority is higher than &#x60;type&#x60; | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<SpotAccountBook>; }> [SpotAccountBook](SpotAccountBook.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createBatchOrders

> Promise<{ response: http.IncomingMessage; body: Array<BatchOrder>; }> createBatchOrders(order, opts)

Create a batch of orders.

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
  'xGateExptime': "1689560679123" // string | Specify the expiration time (milliseconds); if the GATE receives the request time greater than the expiration time, the request will be rejected
};
api.createBatchOrders(order, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order** | [**Array&lt;Order&gt;**](Order.md)|  | 
 **xGateExptime** | **string**| Specify the expiration time (milliseconds); if the GATE receives the request time greater than the expiration time, the request will be rejected | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<BatchOrder>; }> [BatchOrder](BatchOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## listAllOpenOrders

> Promise<{ response: http.IncomingMessage; body: Array<OpenOrders>; }> listAllOpenOrders(opts)

List all open orders.

Query the current order list of all trading pairs. Please note that the paging parameter controls the number of pending orders in each trading pair. There is no paging control trading pairs. All trading pairs with pending orders will be returned.

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
  'page': 1, // number | Page number.
  'limit': 100, // number | Maximum number of records returned in one page in each currency pair.
  'account': "spot" // string | Specify query account.
};
api.listAllOpenOrders(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **number**| Page number. | [optional] [default to 1]
 **limit** | **number**| Maximum number of records returned in one page in each currency pair. | [optional] [default to 100]
 **account** | **string**| Specify query account. | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<OpenOrders>; }> [OpenOrders](OpenOrders.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createCrossLiquidateOrder

> Promise<{ response: http.IncomingMessage; body: Order; }> createCrossLiquidateOrder(liquidateOrder)

close position when cross-currency is disabled.

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

List orders.

Note that the query results are spot order lists for spot, unified account and warehouse-by-site leverage accounts by default.  &#x60;status&#x60; is set to &#x60;open&#x60;, that is, when querying the pending order list, only pagination control of &#x60;page&#x60; and &#x60;limit&#x60; is supported. &#x60;limit&#x60; Maximum setting is only allowed to 100 . The &#x60;side&#x60; and &#x60;from&#x60;, &#x60;to&#x60; parameters for time range query are not supported.  &#x60;status&#x60; when querying historical delegations, in addition to pagination queries, &#x60;from&#x60; and &#x60;to&#x60; are also supported by time range queries. In addition, it supports setting the &#x60;side&#x60; parameter to filter one-side history.  The parameters of the time range filtering are processed according to the order end time.

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
  'page': 1, // number | Page number.
  'limit': 100, // number | Maximum number of records to be returned. If `status` is `open`, maximum of `limit` is 100
  'account': "spot", // string | Specify query account.
  'from': 1627706330, // number | Start timestamp of the query.
  'to': 1635329650, // number | Time range ending, default to current time.
  'side': "sell" // string | All bids or asks. Both included if not specified.
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
 **page** | **number**| Page number. | [optional] [default to 1]
 **limit** | **number**| Maximum number of records to be returned. If &#x60;status&#x60; is &#x60;open&#x60;, maximum of &#x60;limit&#x60; is 100 | [optional] [default to 100]
 **account** | **string**| Specify query account. | [optional] [default to undefined]
 **from** | **number**| Start timestamp of the query. | [optional] [default to undefined]
 **to** | **number**| Time range ending, default to current time. | [optional] [default to undefined]
 **side** | **string**| All bids or asks. Both included if not specified. | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<Order>; }> [Order](Order.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createOrder

> Promise<{ response: http.IncomingMessage; body: Order; }> createOrder(order, opts)

Create an order.

Support spot, margin, leverage, and full-position leverage orders. Use different accounts through the &#x60;account&#x60; field, default is &#x60;spot&#x60;, that is, use the spot account to place an order if the user is &#x60;unified&#x60; account, default is to place an order with a unified account  When using leveraged account trading, that is, when &#x60;account&#x60; is set to &#x60;margin&#x60;, you can set &#x60;auto_borrow&#x60; to &#x60;true&#x60;, In the case of insufficient account balance, the system will automatically execute the &#x60;POST /margin/uni/loans&#x60; to borrow the insufficient part. Whether the assets obtained after the leveraged order is automatically used to return the borrowing orders of the leveraged account in a position-by-store leverage account depends on the automatic repayment settings of the user\&#39;s position-by-store leverage account**, The account automatic repayment settings can be queried and set through &#x60;/margin/auto_repay&#x60;.  Use unified is set to &#x60;unified&#x60;, &#x60;auto_borrow&#x60; \&quot; can also be enableTo realize the insufficient part of automatic borrowing, but unlike the leverage account, whether the entrustment of a unified account is automatically repayable depends on the   when placing an order&#x60;auto_repay&#x60; setting, this setting is only effective for the current entrustment, that is, only the assets obtained after the entrustment transaction will be used to repay the borrowing orders of the full-position leverage account. Unified account ordering currently supports &#x60;auto_borrow&#x60; and &#x60;auto_repay&#x60; at the same time.  Auto repayment will be triggered at the end of the order, i.e. &#x60;status&#x60; is &#x60;cancelled&#x60; or &#x60;closed&#x60; .  **Delegation Status**  The entrustment status in the pending order is &#x60;open&#x60;, which remains at &#x60;open&#x60; until all the quantity is traded. If it is eaten, the order ends and the status becomes &#x60;closed&#x60;. If the order is cancelled before all transactions are completed, regardless of whether there are partial transactions, the status will become &#x60;cancelled&#x60;  **Iceberg Entrustment**  &#x60;iceberg&#x60; is used to set the number of iceberg delegations displayed, and does not support complete hiding. Note that when hidden part of the transaction is charged according to the taker\&#39;s handling rate.  **Restrict user transactions**  Set &#x60;stp_act&#x60; to decide to use strategies that limit user transactions

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
  'xGateExptime': "1689560679123" // string | Specify the expiration time (milliseconds); if the GATE receives the request time greater than the expiration time, the request will be rejected
};
api.createOrder(order, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order** | [**Order**](Order.md)|  | 
 **xGateExptime** | **string**| Specify the expiration time (milliseconds); if the GATE receives the request time greater than the expiration time, the request will be rejected | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Order; }> [Order](Order.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## cancelOrders

> Promise<{ response: http.IncomingMessage; body: Array<OrderCancel>; }> cancelOrders(opts)

Cancel all &#x60;open&#x60; orders in specified currency pair.

When the &#x60;account&#x60; parameter is not specified, all pending orders including spot, unified account, and position-by-position leverage will be cancelled. When transaction pairs are revoked You can specify a certain account separately to cancel all orders under the specified account

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
  'currencyPair': "BTC_USDT", // string | Currency pair.
  'side': "sell", // string | All bids or asks. Both included if not specified.
  'account': "spot", // string | Specify account type  Classic account: All are included if not specified Unified account: Specify unified
  'actionMode': "ACK", // string | Processing Mode  When placing an order, different fields are returned based on the action_mode  - ACK: Asynchronous mode, returns only key order fields - RESULT: No clearing information - FULL: Full mode (default)
  'xGateExptime': "1689560679123" // string | Specify the expiration time (milliseconds); if the GATE receives the request time greater than the expiration time, the request will be rejected
};
api.cancelOrders(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **string**| Currency pair. | [optional] [default to undefined]
 **side** | **string**| All bids or asks. Both included if not specified. | [optional] [default to undefined]
 **account** | **string**| Specify account type  Classic account: All are included if not specified Unified account: Specify unified | [optional] [default to undefined]
 **actionMode** | **string**| Processing Mode  When placing an order, different fields are returned based on the action_mode  - ACK: Asynchronous mode, returns only key order fields - RESULT: No clearing information - FULL: Full mode (default) | [optional] [default to undefined]
 **xGateExptime** | **string**| Specify the expiration time (milliseconds); if the GATE receives the request time greater than the expiration time, the request will be rejected | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<OrderCancel>; }> [OrderCancel](OrderCancel.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## cancelBatchOrders

> Promise<{ response: http.IncomingMessage; body: Array<CancelOrderResult>; }> cancelBatchOrders(cancelBatchOrder, opts)

Cancel a batch of orders with an ID list.

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
  'xGateExptime': "1689560679123" // string | Specify the expiration time (milliseconds); if the GATE receives the request time greater than the expiration time, the request will be rejected
};
api.cancelBatchOrders(cancelBatchOrder, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cancelBatchOrder** | [**Array&lt;CancelBatchOrder&gt;**](CancelBatchOrder.md)|  | 
 **xGateExptime** | **string**| Specify the expiration time (milliseconds); if the GATE receives the request time greater than the expiration time, the request will be rejected | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<CancelOrderResult>; }> [CancelOrderResult](CancelOrderResult.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## getOrder

> Promise<{ response: http.IncomingMessage; body: Order; }> getOrder(orderId, currencyPair, opts)

Get a single order.

By default, orders for spot, unified account and warehouse-by-site leverage account are checked.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.SpotApi(client);
const orderId = "12345"; // string | The order ID returned when the order was successfully created or the custom ID specified by the user\'s creation (i.e. the `text` field). Operations based on custom IDs can only be checked in pending orders. Only order ID can be used after the order is finished (transaction/cancel)
const currencyPair = "BTC_USDT"; // string | Specify the transaction pair to query. If you are querying pending order records, this field is traded records, this field can be left blank.
const opts = {
  'account': "spot" // string | Specify query account.
};
api.getOrder(orderId, currencyPair, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **string**| The order ID returned when the order was successfully created or the custom ID specified by the user\&#39;s creation (i.e. the &#x60;text&#x60; field). Operations based on custom IDs can only be checked in pending orders. Only order ID can be used after the order is finished (transaction/cancel) | [default to undefined]
 **currencyPair** | **string**| Specify the transaction pair to query. If you are querying pending order records, this field is traded records, this field can be left blank. | [default to undefined]
 **account** | **string**| Specify query account. | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Order; }> [Order](Order.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## cancelOrder

> Promise<{ response: http.IncomingMessage; body: Order; }> cancelOrder(orderId, currencyPair, opts)

Cancel a single order.

By default, orders for spot, unified accounts and leveraged accounts are revoked.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.SpotApi(client);
const orderId = "12345"; // string | The order ID returned when the order was successfully created or the custom ID specified by the user\'s creation (i.e. the `text` field). Operations based on custom IDs can only be checked in pending orders. Only order ID can be used after the order is finished (transaction/cancel)
const currencyPair = "BTC_USDT"; // string | Currency pair.
const opts = {
  'account': "spot", // string | Specify query account.
  'actionMode': "ACK", // string | Processing Mode  When placing an order, different fields are returned based on the action_mode  - ACK: Asynchronous mode, returns only key order fields - RESULT: No clearing information - FULL: Full mode (default)
  'xGateExptime': "1689560679123" // string | Specify the expiration time (milliseconds); if the GATE receives the request time greater than the expiration time, the request will be rejected
};
api.cancelOrder(orderId, currencyPair, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **string**| The order ID returned when the order was successfully created or the custom ID specified by the user\&#39;s creation (i.e. the &#x60;text&#x60; field). Operations based on custom IDs can only be checked in pending orders. Only order ID can be used after the order is finished (transaction/cancel) | [default to undefined]
 **currencyPair** | **string**| Currency pair. | [default to undefined]
 **account** | **string**| Specify query account. | [optional] [default to undefined]
 **actionMode** | **string**| Processing Mode  When placing an order, different fields are returned based on the action_mode  - ACK: Asynchronous mode, returns only key order fields - RESULT: No clearing information - FULL: Full mode (default) | [optional] [default to undefined]
 **xGateExptime** | **string**| Specify the expiration time (milliseconds); if the GATE receives the request time greater than the expiration time, the request will be rejected | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Order; }> [Order](Order.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## amendOrder

> Promise<{ response: http.IncomingMessage; body: Order; }> amendOrder(orderId, orderPatch, opts)

Amend an order.

Modify orders in spot, unified account and isolated margin account by default.  Currently both request body and query support currency_pair and account parameters, but request body has higher priority.  currency_pair must be filled in one of the request body or query parameters.  About rate limit: Order modification and order creation share the same rate limit rules.  About matching priority: Only reducing the quantity does not affect the matching priority. Modifying the price or increasing the quantity will adjust the priority to the end of the new price level.  Note: Modifying the quantity to be less than the filled quantity will trigger a cancellation and isolated margin account by default.  Currently both request body and query support currency_pair and account parameters, but request body has higher priority.  currency_pair must be filled in one of the request body or query parameters.  About rate limit: Order modification and order creation share the same rate limit rules.  About matching priority: Only reducing the quantity does not affect the matching priority. Modifying the price or increasing the quantity will adjust the priority to the end of the new price level.  Note: Modifying the quantity to be less than the filled quantity will trigger a cancellation operation.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.SpotApi(client);
const orderId = "12345"; // string | The order ID returned when the order was successfully created or the custom ID specified by the user\'s creation (i.e. the `text` field). Operations based on custom IDs can only be checked in pending orders. Only order ID can be used after the order is finished (transaction/cancel)
const orderPatch = new OrderPatch(); // OrderPatch | 
const opts = {
  'currencyPair': "BTC_USDT", // string | Currency pair.
  'account': "spot", // string | Specify query account.
  'xGateExptime': "1689560679123" // string | Specify the expiration time (milliseconds); if the GATE receives the request time greater than the expiration time, the request will be rejected
};
api.amendOrder(orderId, orderPatch, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **string**| The order ID returned when the order was successfully created or the custom ID specified by the user\&#39;s creation (i.e. the &#x60;text&#x60; field). Operations based on custom IDs can only be checked in pending orders. Only order ID can be used after the order is finished (transaction/cancel) | [default to undefined]
 **orderPatch** | [**OrderPatch**](OrderPatch.md)|  | 
 **currencyPair** | **string**| Currency pair. | [optional] [default to undefined]
 **account** | **string**| Specify query account. | [optional] [default to undefined]
 **xGateExptime** | **string**| Specify the expiration time (milliseconds); if the GATE receives the request time greater than the expiration time, the request will be rejected | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Order; }> [Order](Order.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## listMyTrades

> Promise<{ response: http.IncomingMessage; body: Array<Trade>; }> listMyTrades(opts)

List personal trading history.

By default query of transaction records for spot, unified account and warehouse-by-site leverage accounts.  The history within a specified time range can be queried by specifying &#x60;from&#x60; or (and) &#x60;to&#x60;.  - If no time parameters are specified, only data for the last 7 days can be obtained. - If only any parameter of &#x60;from&#x60; or &#x60;to&#x60; is specified, only 7-day data from the start (or end) of the specified time is returned. - The range not allowed to exceed 30 days.  The parameters of the time range filter are processed according to the order end time.  The maximum number of pages when searching data using limit&amp;page paging function is 100,0, that is, limit * (page - 1) &lt;&#x3D; 100,0.

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
  'currencyPair': "BTC_USDT", // string | Retrieve results with specified currency pair.
  'limit': 100, // number | Maximum number of records to be returned in a single list. Default: 100, Minimum: 1, Maximum: 1000
  'page': 1, // number | Page number.
  'orderId': "12345", // string | Filter trades with specified order ID. `currency_pair` is also required if this field is present
  'account': "spot", // string | Specify query account.
  'from': 1627706330, // number | Start timestamp of the query.
  'to': 1635329650 // number | Time range ending, default to current time.
};
api.listMyTrades(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **string**| Retrieve results with specified currency pair. | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list. Default: 100, Minimum: 1, Maximum: 1000 | [optional] [default to 100]
 **page** | **number**| Page number. | [optional] [default to 1]
 **orderId** | **string**| Filter trades with specified order ID. &#x60;currency_pair&#x60; is also required if this field is present | [optional] [default to undefined]
 **account** | **string**| Specify query account. | [optional] [default to undefined]
 **from** | **number**| Start timestamp of the query. | [optional] [default to undefined]
 **to** | **number**| Time range ending, default to current time. | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<Trade>; }> [Trade](Trade.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getSystemTime

> Promise<{ response: http.IncomingMessage; body: SystemTime; }> getSystemTime()

Get server current time.

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

Countdown cancel orders.

Spot order heartbeat detection. If there is no \&quot;cancel existing countdown\&quot; or \&quot;set new countdown\&quot; when the user-set &#x60;timeout&#x60; time is reached, the related &#x60;spot pending orders&#x60; will be automatically cancelled. This interface can be called repeatedly to set a new countdown or cancel the countdown. Usage example: Repeat this interface at 30s intervals, setting the countdown &#x60;timeout&#x60; to &#x60;30 (seconds)&#x60; each time. If this interface is not called again within 30 seconds, all pending orders on the &#x60;market&#x60; you specified will be automatically cancelled. If no &#x60;market&#x60; is specified, all market cancelled. If the &#x60;timeout&#x60; is set to 0 within 30 seconds, the countdown timer will be terminated and the automatic order cancellation function will be cancelled.

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

Batch modification of orders.

Modify orders in spot, unified account and isolated margin account by default. Modify uncompleted orders, up to 5 orders can be modified at a time. Request parameters should be passed in array format. If there are order modification failures during the batch modification process, the modification of the next order will continue to be executed, and the execution will return with the corresponding order failure information. The call order of batch modification orders is consistent with the order list order. The return is consistent with the order list order.

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
  'xGateExptime': "1689560679123" // string | Specify the expiration time (milliseconds); if the GATE receives the request time greater than the expiration time, the request will be rejected
};
api.amendBatchOrders(batchAmendItem, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batchAmendItem** | [**Array&lt;BatchAmendItem&gt;**](BatchAmendItem.md)|  | 
 **xGateExptime** | **string**| Specify the expiration time (milliseconds); if the GATE receives the request time greater than the expiration time, the request will be rejected | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<BatchOrder>; }> [BatchOrder](BatchOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## getSpotInsuranceHistory

> Promise<{ response: http.IncomingMessage; body: Array<SpotInsuranceHistory>; }> getSpotInsuranceHistory(business, currency, from, to, opts)

Query spot insurance fund historical data.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.SpotApi(client);
const business = "margin"; // string | Leverage business, margin - position by position; unified - unified account
const currency = "BTC"; // string | Currency.
const from = 1547706332; // number | Start timestamp, seconds.
const to = 1547706332; // number | End timestamp, in seconds.
const opts = {
  'page': 1, // number | Page number.
  'limit': 30 // number | The maximum number of items returned in the list, the default value is 30.
};
api.getSpotInsuranceHistory(business, currency, from, to, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **business** | **string**| Leverage business, margin - position by position; unified - unified account | [default to undefined]
 **currency** | **string**| Currency. | [default to undefined]
 **from** | **number**| Start timestamp, seconds. | [default to undefined]
 **to** | **number**| End timestamp, in seconds. | [default to undefined]
 **page** | **number**| Page number. | [optional] [default to 1]
 **limit** | **number**| The maximum number of items returned in the list, the default value is 30. | [optional] [default to 30]

### Return type

Promise<{ response: AxiosResponse; body: Array<SpotInsuranceHistory>; }> [SpotInsuranceHistory](SpotInsuranceHistory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listSpotPriceTriggeredOrders

> Promise<{ response: http.IncomingMessage; body: Array<SpotPriceTriggeredOrder>; }> listSpotPriceTriggeredOrders(status, opts)

Retrieve running auto order list.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.SpotApi(client);
const status = "status_example"; // 'open' | 'finished' | Only list the orders with this status.
const opts = {
  'market': "BTC_USDT", // string | Currency pair.
  'account': "account_example", // 'normal' | 'margin' | 'unified' | Trading account type. Portfolio margin account must set to `unified`.
  'limit': 100, // number | Maximum number of records to be returned in a single list.
  'offset': 0 // number | List offset, starting from 0.
};
api.listSpotPriceTriggeredOrders(status, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **Status**| Only list the orders with this status. | [default to undefined]
 **market** | **string**| Currency pair. | [optional] [default to undefined]
 **account** | **Account**| Trading account type. Portfolio margin account must set to &#x60;unified&#x60;. | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list. | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0. | [optional] [default to 0]

### Return type

Promise<{ response: AxiosResponse; body: Array<SpotPriceTriggeredOrder>; }> [SpotPriceTriggeredOrder](SpotPriceTriggeredOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createSpotPriceTriggeredOrder

> Promise<{ response: http.IncomingMessage; body: TriggerOrderResponse; }> createSpotPriceTriggeredOrder(spotPriceTriggeredOrder)

Create a price-triggered order.

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

Cancel All Price-triggered Orders.

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
  'market': "BTC_USDT", // string | Currency pair.
  'account': "account_example" // 'normal' | 'margin' | 'unified' | Trading account type. Portfolio margin account must set to `unified`.
};
api.cancelSpotPriceTriggeredOrderList(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **market** | **string**| Currency pair. | [optional] [default to undefined]
 **account** | **Account**| Trading account type. Portfolio margin account must set to &#x60;unified&#x60;. | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<SpotPriceTriggeredOrder>; }> [SpotPriceTriggeredOrder](SpotPriceTriggeredOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getSpotPriceTriggeredOrder

> Promise<{ response: http.IncomingMessage; body: SpotPriceTriggeredOrder; }> getSpotPriceTriggeredOrder(orderId)

Get a price-triggered order.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.SpotApi(client);
const orderId = "orderId_example"; // string | Retrieve the data of the order with the specified ID.
api.getSpotPriceTriggeredOrder(orderId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **string**| Retrieve the data of the order with the specified ID. | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: SpotPriceTriggeredOrder; }> [SpotPriceTriggeredOrder](SpotPriceTriggeredOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## cancelSpotPriceTriggeredOrder

> Promise<{ response: http.IncomingMessage; body: SpotPriceTriggeredOrder; }> cancelSpotPriceTriggeredOrder(orderId)

cancel a price-triggered order.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.SpotApi(client);
const orderId = "orderId_example"; // string | Retrieve the data of the order with the specified ID.
api.cancelSpotPriceTriggeredOrder(orderId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **string**| Retrieve the data of the order with the specified ID. | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: SpotPriceTriggeredOrder; }> [SpotPriceTriggeredOrder](SpotPriceTriggeredOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
