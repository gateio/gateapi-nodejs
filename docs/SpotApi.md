# SpotApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listCurrencies**](SpotApi.md#listCurrencies) | **GET** /spot/currencies | Query all currency information
[**getCurrency**](SpotApi.md#getCurrency) | **GET** /spot/currencies/{currency} | Query single currency information
[**listCurrencyPairs**](SpotApi.md#listCurrencyPairs) | **GET** /spot/currency_pairs | Query all supported currency pairs
[**getCurrencyPair**](SpotApi.md#getCurrencyPair) | **GET** /spot/currency_pairs/{currency_pair} | Query single currency pair details
[**listTickers**](SpotApi.md#listTickers) | **GET** /spot/tickers | Get currency pair ticker information
[**listOrderBook**](SpotApi.md#listOrderBook) | **GET** /spot/order_book | Get market depth information
[**listTrades**](SpotApi.md#listTrades) | **GET** /spot/trades | Query market transaction records
[**listCandlesticks**](SpotApi.md#listCandlesticks) | **GET** /spot/candlesticks | Market K-line chart
[**getFee**](SpotApi.md#getFee) | **GET** /spot/fee | Query account fee rates
[**getBatchSpotFee**](SpotApi.md#getBatchSpotFee) | **GET** /spot/batch_fee | Batch query account fee rates
[**listSpotAccounts**](SpotApi.md#listSpotAccounts) | **GET** /spot/accounts | List spot trading accounts
[**listSpotAccountBook**](SpotApi.md#listSpotAccountBook) | **GET** /spot/account_book | Query spot account transaction history
[**createBatchOrders**](SpotApi.md#createBatchOrders) | **POST** /spot/batch_orders | Batch place orders
[**listAllOpenOrders**](SpotApi.md#listAllOpenOrders) | **GET** /spot/open_orders | List all open orders
[**createCrossLiquidateOrder**](SpotApi.md#createCrossLiquidateOrder) | **POST** /spot/cross_liquidate_orders | Close position when cross-currency is disabled
[**listOrders**](SpotApi.md#listOrders) | **GET** /spot/orders | List orders
[**createOrder**](SpotApi.md#createOrder) | **POST** /spot/orders | Create an order
[**cancelOrders**](SpotApi.md#cancelOrders) | **DELETE** /spot/orders | Cancel all &#x60;open&#x60; orders in specified currency pair
[**cancelBatchOrders**](SpotApi.md#cancelBatchOrders) | **POST** /spot/cancel_batch_orders | Cancel batch orders by specified ID list
[**getOrder**](SpotApi.md#getOrder) | **GET** /spot/orders/{order_id} | Query single order details
[**cancelOrder**](SpotApi.md#cancelOrder) | **DELETE** /spot/orders/{order_id} | Cancel single order
[**amendOrder**](SpotApi.md#amendOrder) | **PATCH** /spot/orders/{order_id} | Amend single order
[**listMyTrades**](SpotApi.md#listMyTrades) | **GET** /spot/my_trades | Query personal trading records
[**getSystemTime**](SpotApi.md#getSystemTime) | **GET** /spot/time | Get server current time
[**countdownCancelAllSpot**](SpotApi.md#countdownCancelAllSpot) | **POST** /spot/countdown_cancel_all | Countdown cancel orders
[**amendBatchOrders**](SpotApi.md#amendBatchOrders) | **POST** /spot/amend_batch_orders | Batch modification of orders
[**getSpotInsuranceHistory**](SpotApi.md#getSpotInsuranceHistory) | **GET** /spot/insurance_history | Query spot insurance fund historical data
[**listSpotPriceTriggeredOrders**](SpotApi.md#listSpotPriceTriggeredOrders) | **GET** /spot/price_orders | Query running auto order list
[**createSpotPriceTriggeredOrder**](SpotApi.md#createSpotPriceTriggeredOrder) | **POST** /spot/price_orders | Create price-triggered order
[**cancelSpotPriceTriggeredOrderList**](SpotApi.md#cancelSpotPriceTriggeredOrderList) | **DELETE** /spot/price_orders | Cancel all auto orders
[**getSpotPriceTriggeredOrder**](SpotApi.md#getSpotPriceTriggeredOrder) | **GET** /spot/price_orders/{order_id} | Query single auto order details
[**cancelSpotPriceTriggeredOrder**](SpotApi.md#cancelSpotPriceTriggeredOrder) | **DELETE** /spot/price_orders/{order_id} | Cancel single auto order


## listCurrencies

> Promise<{ response: http.IncomingMessage; body: Array<Currency>; }> listCurrencies()

Query all currency information

When a currency corresponds to multiple chains, you can query the information of multiple chains through the &#x60;chains&#x60; field, such as the charging and recharge status, identification, etc. of the chain

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

Query single currency information

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

Query all supported currency pairs

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

Query single currency pair details

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

Get currency pair ticker information

If &#x60;currency_pair&#x60; is specified, only query that currency pair; otherwise return all information

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

Get market depth information

Market depth buy orders are sorted by price from high to low, sell orders are sorted from low to high

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.SpotApi(client);
const currencyPair = "BTC_USDT"; // string | Currency pair
const opts = {
  'interval': '0', // string | Price precision for depth aggregation, 0 means no aggregation, defaults to 0 if not specified
  'limit': 10, // number | Number of depth levels
  'withId': false // boolean | Return order book update ID
};
api.listOrderBook(currencyPair, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **string**| Currency pair | [default to undefined]
 **interval** | **string**| Price precision for depth aggregation, 0 means no aggregation, defaults to 0 if not specified | [optional] [default to &#39;0&#39;]
 **limit** | **number**| Number of depth levels | [optional] [default to 10]
 **withId** | **boolean**| Return order book update ID | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: OrderBook; }> [OrderBook](OrderBook.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listTrades

> Promise<{ response: http.IncomingMessage; body: Array<Trade>; }> listTrades(currencyPair, opts)

Query market transaction records

Supports querying by time range using &#x60;from&#x60; and &#x60;to&#x60; parameters or pagination based on &#x60;last_id&#x60;. By default, queries the last 30 days.  Pagination based on &#x60;last_id&#x60; is no longer recommended. If &#x60;last_id&#x60; is specified, the time range query parameters will be ignored.  When using limit&amp;page pagination to retrieve data, the maximum number of pages is 100,000, that is, limit * (page - 1) &lt;&#x3D; 100,000.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.SpotApi(client);
const currencyPair = "BTC_USDT"; // string | Currency pair
const opts = {
  'limit': 100, // number | Maximum number of items returned in list. Default: 100, minimum: 1, maximum: 1000
  'lastId': "12345", // string | Specify the currency name to query in batches, and support up to 100 pass parameters at a time
  'reverse': true, // boolean | Whether to retrieve data less than `last_id`. Default returns records greater than `last_id`.  Set to `true` to trace back market trade records, `false` to get latest trades.  No effect when `last_id` is not set.
  'from': 1627706330, // number | Start timestamp for the query
  'to': 1635329650, // number | End timestamp for the query, defaults to current time if not specified
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
 **limit** | **number**| Maximum number of items returned in list. Default: 100, minimum: 1, maximum: 1000 | [optional] [default to 100]
 **lastId** | **string**| Specify the currency name to query in batches, and support up to 100 pass parameters at a time | [optional] [default to undefined]
 **reverse** | **boolean**| Whether to retrieve data less than &#x60;last_id&#x60;. Default returns records greater than &#x60;last_id&#x60;.  Set to &#x60;true&#x60; to trace back market trade records, &#x60;false&#x60; to get latest trades.  No effect when &#x60;last_id&#x60; is not set. | [optional] [default to undefined]
 **from** | **number**| Start timestamp for the query | [optional] [default to undefined]
 **to** | **number**| End timestamp for the query, defaults to current time if not specified | [optional] [default to undefined]
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

Market K-line chart

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
  'limit': 100, // number | Maximum number of recent data points to return. `limit` conflicts with `from` and `to`. If either `from` or `to` is specified, request will be rejected.
  'from': 1546905600, // number | Start time of candlesticks, formatted in Unix timestamp in seconds. Default to`to - 100 * interval` if not specified
  'to': 1546935600, // number | Specify the end time of the K-line chart, defaults to current time if not specified, note that the time format is Unix timestamp with second precision
  'interval': '30m' // '1s' | '10s' | '1m' | '5m' | '15m' | '30m' | '1h' | '4h' | '8h' | '1d' | '7d' | '30d' | Time interval between data points. Note that `30d` represents a calendar month, not aligned to 30 days
};
api.listCandlesticks(currencyPair, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **string**| Currency pair | [default to undefined]
 **limit** | **number**| Maximum number of recent data points to return. &#x60;limit&#x60; conflicts with &#x60;from&#x60; and &#x60;to&#x60;. If either &#x60;from&#x60; or &#x60;to&#x60; is specified, request will be rejected. | [optional] [default to 100]
 **from** | **number**| Start time of candlesticks, formatted in Unix timestamp in seconds. Default to&#x60;to - 100 * interval&#x60; if not specified | [optional] [default to undefined]
 **to** | **number**| Specify the end time of the K-line chart, defaults to current time if not specified, note that the time format is Unix timestamp with second precision | [optional] [default to undefined]
 **interval** | **Interval**| Time interval between data points. Note that &#x60;30d&#x60; represents a calendar month, not aligned to 30 days | [optional] [default to &#39;30m&#39;]

### Return type

Promise<{ response: AxiosResponse; body: Array<Array<string>>; }> [Array](Array.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getFee

> Promise<{ response: http.IncomingMessage; body: SpotFee; }> getFee(opts)

Query account fee rates

This API is deprecated. The new fee query API is &#x60;/wallet/fee&#x60;

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
  'currencyPair': "BTC_USDT" // string | Specify currency pair to get more accurate fee settings.  This field is optional. Usually fee settings are the same for all currency pairs.
};
api.getFee(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **string**| Specify currency pair to get more accurate fee settings.  This field is optional. Usually fee settings are the same for all currency pairs. | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: SpotFee; }> [SpotFee](SpotFee.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getBatchSpotFee

> Promise<{ response: http.IncomingMessage; body: { [key: string]: SpotFee; }; }> getBatchSpotFee(currencyPairs)

Batch query account fee rates

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.SpotApi(client);
const currencyPairs = "BTC_USDT,ETH_USDT"; // string | Maximum 50 currency pairs per request
api.getBatchSpotFee(currencyPairs)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPairs** | **string**| Maximum 50 currency pairs per request | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: { [key: string]: SpotFee; }; }> [SpotFee](SpotFee.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listSpotAccounts

> Promise<{ response: http.IncomingMessage; body: Array<SpotAccount>; }> listSpotAccounts(opts)

List spot trading accounts

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
  'currency': "BTC" // string | Query by specified currency name
};
api.listSpotAccounts(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Query by specified currency name | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<SpotAccount>; }> [SpotAccount](SpotAccount.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listSpotAccountBook

> Promise<{ response: http.IncomingMessage; body: Array<SpotAccountBook>; }> listSpotAccountBook(opts)

Query spot account transaction history

Record query time range cannot exceed 30 days.  When using limit&amp;page pagination to retrieve data, the maximum number of pages is 100,000, that is, limit * (page - 1) &lt;&#x3D; 100,000.

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
  'currency': "BTC", // string | Query by specified currency name
  'from': 1627706330, // number | Start timestamp for the query
  'to': 1635329650, // number | End timestamp for the query, defaults to current time if not specified
  'page': 1, // number | Page number
  'limit': 100, // number | Maximum number of records returned in a single list
  'type': "lend", // string | Query by specified account change type. If not specified, all change types will be included.
  'code': "code_example" // string | Specify account change code for query. If not specified, all change types are included. This parameter has higher priority than `type`
};
api.listSpotAccountBook(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Query by specified currency name | [optional] [default to undefined]
 **from** | **number**| Start timestamp for the query | [optional] [default to undefined]
 **to** | **number**| End timestamp for the query, defaults to current time if not specified | [optional] [default to undefined]
 **page** | **number**| Page number | [optional] [default to 1]
 **limit** | **number**| Maximum number of records returned in a single list | [optional] [default to 100]
 **type** | **string**| Query by specified account change type. If not specified, all change types will be included. | [optional] [default to undefined]
 **code** | **string**| Specify account change code for query. If not specified, all change types are included. This parameter has higher priority than &#x60;type&#x60; | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<SpotAccountBook>; }> [SpotAccountBook](SpotAccountBook.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createBatchOrders

> Promise<{ response: http.IncomingMessage; body: Array<BatchOrder>; }> createBatchOrders(order, opts)

Batch place orders

Batch order requirements:  1. Custom order field &#x60;text&#x60; must be specified 2. Up to 4 currency pairs per request, with up to 10 orders per currency pair 3. Spot orders and margin orders cannot be mixed; all &#x60;account&#x60; fields in the same request must be identical

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

List all open orders

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
  'page': 1, // number | Page number
  'limit': 100, // number | Maximum number of records returned in one page in each currency pair
  'account': "spot" // string | Specify query account
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
 **account** | **string**| Specify query account | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<OpenOrders>; }> [OpenOrders](OpenOrders.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createCrossLiquidateOrder

> Promise<{ response: http.IncomingMessage; body: Order; }> createCrossLiquidateOrder(liquidateOrder)

Close position when cross-currency is disabled

Currently, only cross-margin accounts are supported to place buy orders for disabled currencies. Maximum buy quantity &#x3D; (unpaid principal and interest - currency balance - the amount of the currency in pending orders) / 0.998

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

Note that query results default to spot order lists for spot, unified account, and isolated margin accounts.  When &#x60;status&#x60; is set to &#x60;open&#x60; (i.e., when querying pending order lists), only &#x60;page&#x60; and &#x60;limit&#x60; pagination controls are supported. &#x60;limit&#x60; can only be set to a maximum of 100. The &#x60;side&#x60; parameter and time range query parameters &#x60;from&#x60; and &#x60;to&#x60; are not supported.  When &#x60;status&#x60; is set to &#x60;finished&#x60; (i.e., when querying historical orders), in addition to pagination queries, &#x60;from&#x60; and &#x60;to&#x60; time range queries are also supported. Additionally, the &#x60;side&#x60; parameter can be set to filter one-sided history.  Time range filter parameters are processed according to the order end time.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.SpotApi(client);
const currencyPair = "BTC_USDT"; // string | Query by specified currency pair. Required for open orders, optional for filled orders
const status = "open"; // string | List orders based on status  `open` - order is waiting to be filled `finished` - order has been filled or cancelled 
const opts = {
  'page': 1, // number | Page number
  'limit': 100, // number | Maximum number of records to be returned. If `status` is `open`, maximum of `limit` is 100
  'account': "spot", // string | Specify query account
  'from': 1627706330, // number | Start timestamp for the query
  'to': 1635329650, // number | End timestamp for the query, defaults to current time if not specified
  'side': "sell" // string | Specify all bids or all asks, both included if not specified
};
api.listOrders(currencyPair, status, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **string**| Query by specified currency pair. Required for open orders, optional for filled orders | [default to undefined]
 **status** | **string**| List orders based on status  &#x60;open&#x60; - order is waiting to be filled &#x60;finished&#x60; - order has been filled or cancelled  | [default to undefined]
 **page** | **number**| Page number | [optional] [default to 1]
 **limit** | **number**| Maximum number of records to be returned. If &#x60;status&#x60; is &#x60;open&#x60;, maximum of &#x60;limit&#x60; is 100 | [optional] [default to 100]
 **account** | **string**| Specify query account | [optional] [default to undefined]
 **from** | **number**| Start timestamp for the query | [optional] [default to undefined]
 **to** | **number**| End timestamp for the query, defaults to current time if not specified | [optional] [default to undefined]
 **side** | **string**| Specify all bids or all asks, both included if not specified | [optional] [default to undefined]

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

Supports spot, margin, leverage, and cross-margin leverage orders. Use different accounts through the &#x60;account&#x60; field. Default is &#x60;spot&#x60;, which means using the spot account to place orders. If the user has a &#x60;unified&#x60; account, the default is to place orders with the unified account.  When using leveraged account trading (i.e., when &#x60;account&#x60; is set to &#x60;margin&#x60;), you can set &#x60;auto_borrow&#x60; to &#x60;true&#x60;. In case of insufficient account balance, the system will automatically execute &#x60;POST /margin/uni/loans&#x60; to borrow the insufficient amount. Whether assets obtained after leveraged order execution are automatically used to repay borrowing orders of the isolated margin account depends on the automatic repayment settings of the user\&#39;s isolated margin account. Account automatic repayment settings can be queried and set through &#x60;/margin/auto_repay&#x60;.  When using unified account trading (i.e., when &#x60;account&#x60; is set to &#x60;unified&#x60;), &#x60;auto_borrow&#x60; can also be enabled to realize automatic borrowing of insufficient amounts. However, unlike the isolated margin account, whether unified account orders are automatically repaid depends on the &#x60;auto_repay&#x60; setting when placing the order. This setting only applies to the current order, meaning only assets obtained after order execution will be used to repay borrowing orders of the cross-margin account. Unified account ordering currently supports enabling both &#x60;auto_borrow&#x60; and &#x60;auto_repay&#x60; simultaneously.  Auto repayment will be triggered when the order ends, i.e., when &#x60;status&#x60; is &#x60;cancelled&#x60; or &#x60;closed&#x60;.  **Order Status**  The order status in pending orders is &#x60;open&#x60;, which remains &#x60;open&#x60; until all quantity is filled. If fully filled, the order ends and status becomes &#x60;closed&#x60;. If the order is cancelled before all transactions are completed, regardless of partial fills, the status will become &#x60;cancelled&#x60;.  **Iceberg Orders**  &#x60;iceberg&#x60; is used to set the displayed quantity of iceberg orders and does not support complete hiding. Note that hidden portions are charged according to the taker\&#39;s fee rate.  **Self-Trade Prevention**  Set &#x60;stp_act&#x60; to determine the self-trade prevention strategy to use

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

Cancel all &#x60;open&#x60; orders in specified currency pair

When the &#x60;account&#x60; parameter is not specified, all pending orders including spot, unified account, and isolated margin will be cancelled. When &#x60;currency_pair&#x60; is not specified, all trading pair pending orders will be cancelled. You can specify a particular account to cancel all pending orders under that account

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
  'side': "sell", // string | Specify all bids or all asks, both included if not specified
  'account': "spot", // string | Specify account type  Classic account: All are included if not specified Unified account: Specify `unified`
  'actionMode': "ACK", // string | Processing Mode  When placing an order, different fields are returned based on the action_mode  - `ACK`: Asynchronous mode, returns only key order fields - `RESULT`: No clearing information - `FULL`: Full mode (default)
  'xGateExptime': "1689560679123" // string | Specify the expiration time (milliseconds); if the GATE receives the request time greater than the expiration time, the request will be rejected
};
api.cancelOrders(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **string**| Currency pair | [optional] [default to undefined]
 **side** | **string**| Specify all bids or all asks, both included if not specified | [optional] [default to undefined]
 **account** | **string**| Specify account type  Classic account: All are included if not specified Unified account: Specify &#x60;unified&#x60; | [optional] [default to undefined]
 **actionMode** | **string**| Processing Mode  When placing an order, different fields are returned based on the action_mode  - &#x60;ACK&#x60;: Asynchronous mode, returns only key order fields - &#x60;RESULT&#x60;: No clearing information - &#x60;FULL&#x60;: Full mode (default) | [optional] [default to undefined]
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

Cancel batch orders by specified ID list

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

Query single order details

By default, queries orders for spot, unified account, and isolated margin accounts.

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
const currencyPair = "BTC_USDT"; // string | Specify the trading pair to query. This field is required when querying pending order records. This field can be omitted when querying filled order records.
const opts = {
  'account': "spot" // string | Specify query account
};
api.getOrder(orderId, currencyPair, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **string**| The order ID returned when the order was successfully created or the custom ID specified by the user\&#39;s creation (i.e. the &#x60;text&#x60; field). Operations based on custom IDs can only be checked in pending orders. Only order ID can be used after the order is finished (transaction/cancel) | [default to undefined]
 **currencyPair** | **string**| Specify the trading pair to query. This field is required when querying pending order records. This field can be omitted when querying filled order records. | [default to undefined]
 **account** | **string**| Specify query account | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Order; }> [Order](Order.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## cancelOrder

> Promise<{ response: http.IncomingMessage; body: Order; }> cancelOrder(orderId, currencyPair, opts)

Cancel single order

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
const currencyPair = "BTC_USDT"; // string | Currency pair
const opts = {
  'account': "spot", // string | Specify query account
  'actionMode': "ACK", // string | Processing Mode  When placing an order, different fields are returned based on the action_mode  - `ACK`: Asynchronous mode, returns only key order fields - `RESULT`: No clearing information - `FULL`: Full mode (default)
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
 **currencyPair** | **string**| Currency pair | [default to undefined]
 **account** | **string**| Specify query account | [optional] [default to undefined]
 **actionMode** | **string**| Processing Mode  When placing an order, different fields are returned based on the action_mode  - &#x60;ACK&#x60;: Asynchronous mode, returns only key order fields - &#x60;RESULT&#x60;: No clearing information - &#x60;FULL&#x60;: Full mode (default) | [optional] [default to undefined]
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

Amend single order

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
  'currencyPair': "BTC_USDT", // string | Currency pair
  'account': "spot", // string | Specify query account
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
 **currencyPair** | **string**| Currency pair | [optional] [default to undefined]
 **account** | **string**| Specify query account | [optional] [default to undefined]
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

Query personal trading records

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
  'currencyPair': "BTC_USDT", // string | Retrieve results with specified currency pair
  'limit': 100, // number | Maximum number of items returned in list. Default: 100, minimum: 1, maximum: 1000
  'page': 1, // number | Page number
  'orderId': "12345", // string | Filter trades with specified order ID. `currency_pair` is also required if this field is present
  'account': "spot", // string | Specify query account
  'from': 1627706330, // number | Start timestamp for the query
  'to': 1635329650 // number | End timestamp for the query, defaults to current time if not specified
};
api.listMyTrades(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **string**| Retrieve results with specified currency pair | [optional] [default to undefined]
 **limit** | **number**| Maximum number of items returned in list. Default: 100, minimum: 1, maximum: 1000 | [optional] [default to 100]
 **page** | **number**| Page number | [optional] [default to 1]
 **orderId** | **string**| Filter trades with specified order ID. &#x60;currency_pair&#x60; is also required if this field is present | [optional] [default to undefined]
 **account** | **string**| Specify query account | [optional] [default to undefined]
 **from** | **number**| Start timestamp for the query | [optional] [default to undefined]
 **to** | **number**| End timestamp for the query, defaults to current time if not specified | [optional] [default to undefined]

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

Batch modification of orders

Modify orders in spot, unified account and isolated margin account by default. Modify uncompleted orders, up to 5 orders can be modified at a time. Request parameters should be passed in array format. If there are order modification failures during the batch modification process, the modification of the next order will continue to be executed, and the execution will return with the corresponding order failure information. The call order of batch modification orders is consistent with the order list order. The return content order of batch modification orders is consistent with the order list order.

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

Query spot insurance fund historical data

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.SpotApi(client);
const business = "margin"; // string | Leverage business, margin - position by position; unified - unified account
const currency = "BTC"; // string | Currency
const from = 1547706332; // number | Start timestamp in seconds
const to = 1547706332; // number | End timestamp in seconds
const opts = {
  'page': 1, // number | Page number
  'limit': 30 // number | The maximum number of items returned in the list, the default value is 30
};
api.getSpotInsuranceHistory(business, currency, from, to, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **business** | **string**| Leverage business, margin - position by position; unified - unified account | [default to undefined]
 **currency** | **string**| Currency | [default to undefined]
 **from** | **number**| Start timestamp in seconds | [default to undefined]
 **to** | **number**| End timestamp in seconds | [default to undefined]
 **page** | **number**| Page number | [optional] [default to 1]
 **limit** | **number**| The maximum number of items returned in the list, the default value is 30 | [optional] [default to 30]

### Return type

Promise<{ response: AxiosResponse; body: Array<SpotInsuranceHistory>; }> [SpotInsuranceHistory](SpotInsuranceHistory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listSpotPriceTriggeredOrders

> Promise<{ response: http.IncomingMessage; body: Array<SpotPriceTriggeredOrder>; }> listSpotPriceTriggeredOrders(status, opts)

Query running auto order list

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.SpotApi(client);
const status = "status_example"; // 'open' | 'finished' | Query order list based on status
const opts = {
  'market': "BTC_USDT", // string | Trading market
  'account': "account_example", // 'normal' | 'margin' | 'unified' | Trading account type. Unified account must be set to `unified`
  'limit': 100, // number | Maximum number of records returned in a single list
  'offset': 0 // number | List offset, starting from 0
};
api.listSpotPriceTriggeredOrders(status, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **Status**| Query order list based on status | [default to undefined]
 **market** | **string**| Trading market | [optional] [default to undefined]
 **account** | **Account**| Trading account type. Unified account must be set to &#x60;unified&#x60; | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records returned in a single list | [optional] [default to 100]
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

Create price-triggered order

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

Cancel all auto orders

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
  'market': "BTC_USDT", // string | Trading market
  'account': "account_example" // 'normal' | 'margin' | 'unified' | Trading account type. Unified account must be set to `unified`
};
api.cancelSpotPriceTriggeredOrderList(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **market** | **string**| Trading market | [optional] [default to undefined]
 **account** | **Account**| Trading account type. Unified account must be set to &#x60;unified&#x60; | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<SpotPriceTriggeredOrder>; }> [SpotPriceTriggeredOrder](SpotPriceTriggeredOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getSpotPriceTriggeredOrder

> Promise<{ response: http.IncomingMessage; body: SpotPriceTriggeredOrder; }> getSpotPriceTriggeredOrder(orderId)

Query single auto order details

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.SpotApi(client);
const orderId = "orderId_example"; // string | ID returned when order is successfully created
api.getSpotPriceTriggeredOrder(orderId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **string**| ID returned when order is successfully created | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: SpotPriceTriggeredOrder; }> [SpotPriceTriggeredOrder](SpotPriceTriggeredOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## cancelSpotPriceTriggeredOrder

> Promise<{ response: http.IncomingMessage; body: SpotPriceTriggeredOrder; }> cancelSpotPriceTriggeredOrder(orderId)

Cancel single auto order

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.SpotApi(client);
const orderId = "orderId_example"; // string | ID returned when order is successfully created
api.cancelSpotPriceTriggeredOrder(orderId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **string**| ID returned when order is successfully created | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: SpotPriceTriggeredOrder; }> [SpotPriceTriggeredOrder](SpotPriceTriggeredOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
