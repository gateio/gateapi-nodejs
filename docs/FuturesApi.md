# FuturesApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listFuturesContracts**](FuturesApi.md#listFuturesContracts) | **GET** /futures/{settle}/contracts | List all futures contracts.
[**getFuturesContract**](FuturesApi.md#getFuturesContract) | **GET** /futures/{settle}/contracts/{contract} | Get a single contract.
[**listFuturesOrderBook**](FuturesApi.md#listFuturesOrderBook) | **GET** /futures/{settle}/order_book | Futures order book.
[**listFuturesTrades**](FuturesApi.md#listFuturesTrades) | **GET** /futures/{settle}/trades | Futures trading history.
[**listFuturesCandlesticks**](FuturesApi.md#listFuturesCandlesticks) | **GET** /futures/{settle}/candlesticks | Get futures candlesticks.
[**listFuturesPremiumIndex**](FuturesApi.md#listFuturesPremiumIndex) | **GET** /futures/{settle}/premium_index | Premium Index K-Line.
[**listFuturesTickers**](FuturesApi.md#listFuturesTickers) | **GET** /futures/{settle}/tickers | List futures tickers.
[**listFuturesFundingRateHistory**](FuturesApi.md#listFuturesFundingRateHistory) | **GET** /futures/{settle}/funding_rate | Funding rate history.
[**listFuturesInsuranceLedger**](FuturesApi.md#listFuturesInsuranceLedger) | **GET** /futures/{settle}/insurance | Futures insurance balance history.
[**listContractStats**](FuturesApi.md#listContractStats) | **GET** /futures/{settle}/contract_stats | Futures stats.
[**getIndexConstituents**](FuturesApi.md#getIndexConstituents) | **GET** /futures/{settle}/index_constituents/{index} | Get index constituents.
[**listLiquidatedOrders**](FuturesApi.md#listLiquidatedOrders) | **GET** /futures/{settle}/liq_orders | Retrieve liquidation history.
[**listFuturesRiskLimitTiers**](FuturesApi.md#listFuturesRiskLimitTiers) | **GET** /futures/{settle}/risk_limit_tiers | List risk limit tiers.
[**listFuturesAccounts**](FuturesApi.md#listFuturesAccounts) | **GET** /futures/{settle}/accounts | Query futures account.
[**listFuturesAccountBook**](FuturesApi.md#listFuturesAccountBook) | **GET** /futures/{settle}/account_book | Query account book.
[**listPositions**](FuturesApi.md#listPositions) | **GET** /futures/{settle}/positions | List all positions of a user.
[**getPosition**](FuturesApi.md#getPosition) | **GET** /futures/{settle}/positions/{contract} | Get single position.
[**updatePositionMargin**](FuturesApi.md#updatePositionMargin) | **POST** /futures/{settle}/positions/{contract}/margin | Update position margin.
[**updatePositionLeverage**](FuturesApi.md#updatePositionLeverage) | **POST** /futures/{settle}/positions/{contract}/leverage | Update position leverage.
[**updatePositionCrossMode**](FuturesApi.md#updatePositionCrossMode) | **POST** /futures/{settle}/positions/cross_mode | Switch to the full position-by-store mode.
[**updateDualCompPositionCrossMode**](FuturesApi.md#updateDualCompPositionCrossMode) | **POST** /futures/{settle}/dual_comp/positions/cross_mode | 双仓模式下切换全逐仓模式
[**updatePositionRiskLimit**](FuturesApi.md#updatePositionRiskLimit) | **POST** /futures/{settle}/positions/{contract}/risk_limit | Update position risk limit.
[**setDualMode**](FuturesApi.md#setDualMode) | **POST** /futures/{settle}/dual_mode | Enable or disable dual mode.
[**getDualModePosition**](FuturesApi.md#getDualModePosition) | **GET** /futures/{settle}/dual_comp/positions/{contract} | Retrieve position detail in dual mode.
[**updateDualModePositionMargin**](FuturesApi.md#updateDualModePositionMargin) | **POST** /futures/{settle}/dual_comp/positions/{contract}/margin | Update position margin in dual mode.
[**updateDualModePositionLeverage**](FuturesApi.md#updateDualModePositionLeverage) | **POST** /futures/{settle}/dual_comp/positions/{contract}/leverage | Update position leverage in dual mode.
[**updateDualModePositionRiskLimit**](FuturesApi.md#updateDualModePositionRiskLimit) | **POST** /futures/{settle}/dual_comp/positions/{contract}/risk_limit | Update position risk limit in dual mode.
[**listFuturesOrders**](FuturesApi.md#listFuturesOrders) | **GET** /futures/{settle}/orders | List futures orders.
[**createFuturesOrder**](FuturesApi.md#createFuturesOrder) | **POST** /futures/{settle}/orders | Create a futures order.
[**cancelFuturesOrders**](FuturesApi.md#cancelFuturesOrders) | **DELETE** /futures/{settle}/orders | Cancel all &#x60;open&#x60; orders matched.
[**getOrdersWithTimeRange**](FuturesApi.md#getOrdersWithTimeRange) | **GET** /futures/{settle}/orders_timerange | List Futures Orders By Time Range.
[**createBatchFuturesOrder**](FuturesApi.md#createBatchFuturesOrder) | **POST** /futures/{settle}/batch_orders | Create a batch of futures orders.
[**getFuturesOrder**](FuturesApi.md#getFuturesOrder) | **GET** /futures/{settle}/orders/{order_id} | Get a single order.
[**amendFuturesOrder**](FuturesApi.md#amendFuturesOrder) | **PUT** /futures/{settle}/orders/{order_id} | Amend an order.
[**cancelFuturesOrder**](FuturesApi.md#cancelFuturesOrder) | **DELETE** /futures/{settle}/orders/{order_id} | Cancel a single order.
[**getMyTrades**](FuturesApi.md#getMyTrades) | **GET** /futures/{settle}/my_trades | List personal trading history.
[**getMyTradesWithTimeRange**](FuturesApi.md#getMyTradesWithTimeRange) | **GET** /futures/{settle}/my_trades_timerange | List personal trading history by time range.
[**listPositionClose**](FuturesApi.md#listPositionClose) | **GET** /futures/{settle}/position_close | List position close history.
[**listLiquidates**](FuturesApi.md#listLiquidates) | **GET** /futures/{settle}/liquidates | List liquidation history.
[**listAutoDeleverages**](FuturesApi.md#listAutoDeleverages) | **GET** /futures/{settle}/auto_deleverages | List Auto-Deleveraging History.
[**countdownCancelAllFutures**](FuturesApi.md#countdownCancelAllFutures) | **POST** /futures/{settle}/countdown_cancel_all | Countdown cancel orders.
[**getFuturesFee**](FuturesApi.md#getFuturesFee) | **GET** /futures/{settle}/fee | Query user trading fee rates.
[**cancelBatchFutureOrders**](FuturesApi.md#cancelBatchFutureOrders) | **POST** /futures/{settle}/batch_cancel_orders | Cancel a batch of orders with an ID list.
[**amendBatchFutureOrders**](FuturesApi.md#amendBatchFutureOrders) | **POST** /futures/{settle}/batch_amend_orders | Batch modify orders with specified IDs.
[**getFuturesRiskLimitTable**](FuturesApi.md#getFuturesRiskLimitTable) | **GET** /futures/{settle}/risk_limit_table | Query risk limit table by table_id.
[**listPriceTriggeredOrders**](FuturesApi.md#listPriceTriggeredOrders) | **GET** /futures/{settle}/price_orders | List All Price-triggered Orders.
[**createPriceTriggeredOrder**](FuturesApi.md#createPriceTriggeredOrder) | **POST** /futures/{settle}/price_orders | Create a price-triggered order.
[**cancelPriceTriggeredOrderList**](FuturesApi.md#cancelPriceTriggeredOrderList) | **DELETE** /futures/{settle}/price_orders | Cancel All Price-triggered Orders.
[**getPriceTriggeredOrder**](FuturesApi.md#getPriceTriggeredOrder) | **GET** /futures/{settle}/price_orders/{order_id} | Get a price-triggered order.
[**cancelPriceTriggeredOrder**](FuturesApi.md#cancelPriceTriggeredOrder) | **DELETE** /futures/{settle}/price_orders/{order_id} | cancel a price-triggered order.


## listFuturesContracts

> Promise<{ response: http.IncomingMessage; body: Array<Contract>; }> listFuturesContracts(settle, opts)

List all futures contracts.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | Settle currency.
const opts = {
  'limit': 100, // number | Maximum number of records to be returned in a single list.
  'offset': 0 // number | List offset, starting from 0.
};
api.listFuturesContracts(settle, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency. | [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list. | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0. | [optional] [default to 0]

### Return type

Promise<{ response: AxiosResponse; body: Array<Contract>; }> [Contract](Contract.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getFuturesContract

> Promise<{ response: http.IncomingMessage; body: Contract; }> getFuturesContract(settle, contract)

Get a single contract.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | Settle currency.
const contract = "BTC_USDT"; // string | Futures contract.
api.getFuturesContract(settle, contract)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency. | [default to undefined]
 **contract** | **string**| Futures contract. | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Contract; }> [Contract](Contract.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listFuturesOrderBook

> Promise<{ response: http.IncomingMessage; body: FuturesOrderBook; }> listFuturesOrderBook(settle, contract, opts)

Futures order book.

Bids will be sorted by price from high to low, while asks sorted reversely.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | Settle currency.
const contract = "BTC_USDT"; // string | Futures contract.
const opts = {
  'interval': '0', // string | Order depth. 0 means no aggregation is applied. default to 0.
  'limit': 10, // number | Maximum number of order depth data in asks or bids.
  'withId': false // boolean | Whether to return depth update ID. This ID increments by 1 each time.
};
api.listFuturesOrderBook(settle, contract, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency. | [default to undefined]
 **contract** | **string**| Futures contract. | [default to undefined]
 **interval** | **string**| Order depth. 0 means no aggregation is applied. default to 0. | [optional] [default to &#39;0&#39;]
 **limit** | **number**| Maximum number of order depth data in asks or bids. | [optional] [default to 10]
 **withId** | **boolean**| Whether to return depth update ID. This ID increments by 1 each time. | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: FuturesOrderBook; }> [FuturesOrderBook](FuturesOrderBook.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listFuturesTrades

> Promise<{ response: http.IncomingMessage; body: Array<FuturesTrade>; }> listFuturesTrades(settle, contract, opts)

Futures trading history.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | Settle currency.
const contract = "BTC_USDT"; // string | Futures contract.
const opts = {
  'limit': 100, // number | Maximum number of records to be returned in a single list.
  'offset': 0, // number | List offset, starting from 0.
  'lastId': "12345", // string | Specify the starting point for this list based on a previously retrieved id  This parameter is deprecated. Use `from` and `to` instead to limit time range
  'from': 1546905600, // number | Specify starting time in Unix seconds. If not specified, `to` and `limit` will be used to limit response items. If items between `from` and `to` are more than `limit`, only `limit` number will be returned. 
  'to': 1546935600 // number | Specify end time in Unix seconds, default to current time.
};
api.listFuturesTrades(settle, contract, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency. | [default to undefined]
 **contract** | **string**| Futures contract. | [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list. | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0. | [optional] [default to 0]
 **lastId** | **string**| Specify the starting point for this list based on a previously retrieved id  This parameter is deprecated. Use &#x60;from&#x60; and &#x60;to&#x60; instead to limit time range | [optional] [default to undefined]
 **from** | **number**| Specify starting time in Unix seconds. If not specified, &#x60;to&#x60; and &#x60;limit&#x60; will be used to limit response items. If items between &#x60;from&#x60; and &#x60;to&#x60; are more than &#x60;limit&#x60;, only &#x60;limit&#x60; number will be returned.  | [optional] [default to undefined]
 **to** | **number**| Specify end time in Unix seconds, default to current time. | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<FuturesTrade>; }> [FuturesTrade](FuturesTrade.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listFuturesCandlesticks

> Promise<{ response: http.IncomingMessage; body: Array<FuturesCandlestick>; }> listFuturesCandlesticks(settle, contract, opts)

Get futures candlesticks.

Return specified contract candlesticks. If prefix &#x60;contract&#x60; with &#x60;mark_&#x60;, the contract\&#39;s mark price candlesticks are returned; if prefix with &#x60;index_&#x60;, index price candlesticks will be returned.  Maximum of 2000 points are returned in one query. Be sure not to exceed the limit when specifying &#x60;from&#x60;, &#x60;to&#x60; and &#x60;interval&#x60;

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | Settle currency.
const contract = "BTC_USDT"; // string | Futures contract.
const opts = {
  'from': 1546905600, // number | Start time of candlesticks, formatted in Unix timestamp in seconds. Default to`to - 100 * interval` if not specified
  'to': 1546935600, // number | Specify the end time of the K-line chart, defaults to current time if not specified, note that the time format is Unix timestamp with second precision specified
  'limit': 100, // number | Maximum recent data points to return. `limit` is conflicted with `from` and `to`. If either `from` or `to` is specified, request will be rejected.
  'interval': '5m' // '10s' | '1m' | '5m' | '15m' | '30m' | '1h' | '4h' | '8h' | '1d' | '7d' | Interval time between data points. Note that `1w` means natual week(Mon-Sun), while `7d` means every 7d since unix 0. 1 natual month, not 30 days
};
api.listFuturesCandlesticks(settle, contract, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency. | [default to undefined]
 **contract** | **string**| Futures contract. | [default to undefined]
 **from** | **number**| Start time of candlesticks, formatted in Unix timestamp in seconds. Default to&#x60;to - 100 * interval&#x60; if not specified | [optional] [default to undefined]
 **to** | **number**| Specify the end time of the K-line chart, defaults to current time if not specified, note that the time format is Unix timestamp with second precision specified | [optional] [default to undefined]
 **limit** | **number**| Maximum recent data points to return. &#x60;limit&#x60; is conflicted with &#x60;from&#x60; and &#x60;to&#x60;. If either &#x60;from&#x60; or &#x60;to&#x60; is specified, request will be rejected. | [optional] [default to 100]
 **interval** | **Interval**| Interval time between data points. Note that &#x60;1w&#x60; means natual week(Mon-Sun), while &#x60;7d&#x60; means every 7d since unix 0. 1 natual month, not 30 days | [optional] [default to &#39;5m&#39;]

### Return type

Promise<{ response: AxiosResponse; body: Array<FuturesCandlestick>; }> [FuturesCandlestick](FuturesCandlestick.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listFuturesPremiumIndex

> Promise<{ response: http.IncomingMessage; body: Array<FuturesPremiumIndex>; }> listFuturesPremiumIndex(settle, contract, opts)

Premium Index K-Line.

Maximum of 1000 points can be returned in a query. Be sure not to exceed the limit when specifying from, to and interval

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | Settle currency.
const contract = "BTC_USDT"; // string | Futures contract.
const opts = {
  'from': 1546905600, // number | Start time of candlesticks, formatted in Unix timestamp in seconds. Default to`to - 100 * interval` if not specified
  'to': 1546935600, // number | Specify the end time of the K-line chart, defaults to current time if not specified, note that the time format is Unix timestamp with second precision specified
  'limit': 100, // number | Maximum recent data points to return. `limit` is conflicted with `from` and `to`. If either `from` or `to` is specified, request will be rejected.
  'interval': '5m' // '10s' | '1m' | '5m' | '15m' | '30m' | '1h' | '4h' | '8h' | '1d' | '7d' | Interval time between data points.
};
api.listFuturesPremiumIndex(settle, contract, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency. | [default to undefined]
 **contract** | **string**| Futures contract. | [default to undefined]
 **from** | **number**| Start time of candlesticks, formatted in Unix timestamp in seconds. Default to&#x60;to - 100 * interval&#x60; if not specified | [optional] [default to undefined]
 **to** | **number**| Specify the end time of the K-line chart, defaults to current time if not specified, note that the time format is Unix timestamp with second precision specified | [optional] [default to undefined]
 **limit** | **number**| Maximum recent data points to return. &#x60;limit&#x60; is conflicted with &#x60;from&#x60; and &#x60;to&#x60;. If either &#x60;from&#x60; or &#x60;to&#x60; is specified, request will be rejected. | [optional] [default to 100]
 **interval** | **Interval**| Interval time between data points. | [optional] [default to &#39;5m&#39;]

### Return type

Promise<{ response: AxiosResponse; body: Array<FuturesPremiumIndex>; }> [FuturesPremiumIndex](FuturesPremiumIndex.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listFuturesTickers

> Promise<{ response: http.IncomingMessage; body: Array<FuturesTicker>; }> listFuturesTickers(settle, opts)

List futures tickers.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | Settle currency.
const opts = {
  'contract': "BTC_USDT" // string | Futures contract, return related data only if specified.
};
api.listFuturesTickers(settle, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency. | [default to undefined]
 **contract** | **string**| Futures contract, return related data only if specified. | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<FuturesTicker>; }> [FuturesTicker](FuturesTicker.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listFuturesFundingRateHistory

> Promise<{ response: http.IncomingMessage; body: Array<FundingRateRecord>; }> listFuturesFundingRateHistory(settle, contract, opts)

Funding rate history.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | Settle currency.
const contract = "BTC_USDT"; // string | Futures contract.
const opts = {
  'limit': 100, // number | Maximum number of records to be returned in a single list.
  'from': 1547706332, // number | Start timestamp  Specify start time, time format is Unix timestamp. If not specified, it defaults to (the data start time of the time range actually returned by to and limit)
  'to': 1547706332 // number | Termination Timestamp  Specify the end time. If not specified, it defaults to the current time, and the time format is a Unix timestamp
};
api.listFuturesFundingRateHistory(settle, contract, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency. | [default to undefined]
 **contract** | **string**| Futures contract. | [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list. | [optional] [default to 100]
 **from** | **number**| Start timestamp  Specify start time, time format is Unix timestamp. If not specified, it defaults to (the data start time of the time range actually returned by to and limit) | [optional] [default to undefined]
 **to** | **number**| Termination Timestamp  Specify the end time. If not specified, it defaults to the current time, and the time format is a Unix timestamp | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<FundingRateRecord>; }> [FundingRateRecord](FundingRateRecord.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listFuturesInsuranceLedger

> Promise<{ response: http.IncomingMessage; body: Array<InsuranceRecord>; }> listFuturesInsuranceLedger(settle, opts)

Futures insurance balance history.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | Settle currency.
const opts = {
  'limit': 100 // number | Maximum number of records to be returned in a single list.
};
api.listFuturesInsuranceLedger(settle, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency. | [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list. | [optional] [default to 100]

### Return type

Promise<{ response: AxiosResponse; body: Array<InsuranceRecord>; }> [InsuranceRecord](InsuranceRecord.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listContractStats

> Promise<{ response: http.IncomingMessage; body: Array<ContractStat>; }> listContractStats(settle, contract, opts)

Futures stats.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | Settle currency.
const contract = "BTC_USDT"; // string | Futures contract.
const opts = {
  'from': 1604561000, // number | Start timestamp.
  'interval': '5m', // string | 
  'limit': 30 // number | 
};
api.listContractStats(settle, contract, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency. | [default to undefined]
 **contract** | **string**| Futures contract. | [default to undefined]
 **from** | **number**| Start timestamp. | [optional] [default to undefined]
 **interval** | **string**|  | [optional] [default to &#39;5m&#39;]
 **limit** | **number**|  | [optional] [default to 30]

### Return type

Promise<{ response: AxiosResponse; body: Array<ContractStat>; }> [ContractStat](ContractStat.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getIndexConstituents

> Promise<{ response: http.IncomingMessage; body: FuturesIndexConstituents; }> getIndexConstituents(settle, index)

Get index constituents.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | Settle currency.
const index = "BTC_USDT"; // string | Index name.
api.getIndexConstituents(settle, index)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency. | [default to undefined]
 **index** | **string**| Index name. | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: FuturesIndexConstituents; }> [FuturesIndexConstituents](FuturesIndexConstituents.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listLiquidatedOrders

> Promise<{ response: http.IncomingMessage; body: Array<FuturesLiqOrder>; }> listLiquidatedOrders(settle, opts)

Retrieve liquidation history.

The time interval between from and to is maximum 3600. Some private fields are not returned by public interfaces, refer to field descriptions for interfaces, refer to field descriptions for details

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | Settle currency.
const opts = {
  'contract': "BTC_USDT", // string | Futures contract, return related data only if specified.
  'from': 1547706332, // number | Start timestamp  Specify start time, time format is Unix timestamp. If not specified, it defaults to (the data start time of the time range actually returned by to and limit)
  'to': 1547706332, // number | Termination Timestamp  Specify the end time. If not specified, it defaults to the current time, and the time format is a Unix timestamp
  'limit': 100 // number | Maximum number of records to be returned in a single list.
};
api.listLiquidatedOrders(settle, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency. | [default to undefined]
 **contract** | **string**| Futures contract, return related data only if specified. | [optional] [default to undefined]
 **from** | **number**| Start timestamp  Specify start time, time format is Unix timestamp. If not specified, it defaults to (the data start time of the time range actually returned by to and limit) | [optional] [default to undefined]
 **to** | **number**| Termination Timestamp  Specify the end time. If not specified, it defaults to the current time, and the time format is a Unix timestamp | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list. | [optional] [default to 100]

### Return type

Promise<{ response: AxiosResponse; body: Array<FuturesLiqOrder>; }> [FuturesLiqOrder](FuturesLiqOrder.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listFuturesRiskLimitTiers

> Promise<{ response: http.IncomingMessage; body: Array<FuturesLimitRiskTiers>; }> listFuturesRiskLimitTiers(settle, opts)

List risk limit tiers.

When the \&#39;contract\&#39; parameter is not passed, the default is to query the risk limits for the top 100 markets.\&#39;Limit\&#39; and \&#39;offset\&#39; correspond to pagination queries at the market level, not to the length of the returned array. This only takes effect empty.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | Settle currency.
const opts = {
  'contract': "BTC_USDT", // string | Futures contract, return related data only if specified.
  'limit': 100, // number | Maximum number of records to be returned in a single list.
  'offset': 0 // number | List offset, starting from 0.
};
api.listFuturesRiskLimitTiers(settle, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency. | [default to undefined]
 **contract** | **string**| Futures contract, return related data only if specified. | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list. | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0. | [optional] [default to 0]

### Return type

Promise<{ response: AxiosResponse; body: Array<FuturesLimitRiskTiers>; }> [FuturesLimitRiskTiers](FuturesLimitRiskTiers.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listFuturesAccounts

> Promise<{ response: http.IncomingMessage; body: FuturesAccount; }> listFuturesAccounts(settle)

Query futures account.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | Settle currency.
api.listFuturesAccounts(settle)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency. | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: FuturesAccount; }> [FuturesAccount](FuturesAccount.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listFuturesAccountBook

> Promise<{ response: http.IncomingMessage; body: Array<FuturesAccountBook>; }> listFuturesAccountBook(settle, opts)

Query account book.

If the contract field is passed, only records containing this field after 2023-10-30 can be filtered。 2023-10-30 can be filtered.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | Settle currency.
const opts = {
  'contract': "BTC_USDT", // string | Futures contract, return related data only if specified.
  'limit': 100, // number | Maximum number of records to be returned in a single list.
  'offset': 0, // number | List offset, starting from 0.
  'from': 1547706332, // number | Start timestamp  Specify start time, time format is Unix timestamp. If not specified, it defaults to (the data start time of the time range actually returned by to and limit)
  'to': 1547706332, // number | Termination Timestamp  Specify the end time. If not specified, it defaults to the current time, and the time format is a Unix timestamp
  'type': "dnw" // string | Changing Type：  - dnw: Deposit & Withdraw - pnl: Profit & Loss by reducing position - fee: Trading fee - refr: Referrer rebate - fund: Funding - point_dnw: point_fee: POINT Trading fee - point_refr: POINT Referrer rebate - bonus_offset: bouns deduction
};
api.listFuturesAccountBook(settle, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency. | [default to undefined]
 **contract** | **string**| Futures contract, return related data only if specified. | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list. | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0. | [optional] [default to 0]
 **from** | **number**| Start timestamp  Specify start time, time format is Unix timestamp. If not specified, it defaults to (the data start time of the time range actually returned by to and limit) | [optional] [default to undefined]
 **to** | **number**| Termination Timestamp  Specify the end time. If not specified, it defaults to the current time, and the time format is a Unix timestamp | [optional] [default to undefined]
 **type** | **string**| Changing Type：  - dnw: Deposit &amp; Withdraw - pnl: Profit &amp; Loss by reducing position - fee: Trading fee - refr: Referrer rebate - fund: Funding - point_dnw: point_fee: POINT Trading fee - point_refr: POINT Referrer rebate - bonus_offset: bouns deduction | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<FuturesAccountBook>; }> [FuturesAccountBook](FuturesAccountBook.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listPositions

> Promise<{ response: http.IncomingMessage; body: Array<Position>; }> listPositions(settle, opts)

List all positions of a user.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | Settle currency.
const opts = {
  'holding': true, // boolean | Return only real positions - true, return all - false.
  'limit': 100, // number | Maximum number of records to be returned in a single list.
  'offset': 0 // number | List offset, starting from 0.
};
api.listPositions(settle, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency. | [default to undefined]
 **holding** | **boolean**| Return only real positions - true, return all - false. | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list. | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0. | [optional] [default to 0]

### Return type

Promise<{ response: AxiosResponse; body: Array<Position>; }> [Position](Position.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getPosition

> Promise<{ response: http.IncomingMessage; body: Position; }> getPosition(settle, contract)

Get single position.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | Settle currency.
const contract = "BTC_USDT"; // string | Futures contract.
api.getPosition(settle, contract)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency. | [default to undefined]
 **contract** | **string**| Futures contract. | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Position; }> [Position](Position.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updatePositionMargin

> Promise<{ response: http.IncomingMessage; body: Position; }> updatePositionMargin(settle, contract, change)

Update position margin.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | Settle currency.
const contract = "BTC_USDT"; // string | Futures contract.
const change = "0.01"; // string | Margin change amount, positive number increases, negative number.
api.updatePositionMargin(settle, contract, change)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency. | [default to undefined]
 **contract** | **string**| Futures contract. | [default to undefined]
 **change** | **string**| Margin change amount, positive number increases, negative number. | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Position; }> [Position](Position.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updatePositionLeverage

> Promise<{ response: http.IncomingMessage; body: Position; }> updatePositionLeverage(settle, contract, leverage, opts)

Update position leverage.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | Settle currency.
const contract = "BTC_USDT"; // string | Futures contract.
const leverage = "10"; // string | New position leverage.
const opts = {
  'crossLeverageLimit': "10" // string | Cross margin leverage(valid only when `leverage` is 0).
};
api.updatePositionLeverage(settle, contract, leverage, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency. | [default to undefined]
 **contract** | **string**| Futures contract. | [default to undefined]
 **leverage** | **string**| New position leverage. | [default to undefined]
 **crossLeverageLimit** | **string**| Cross margin leverage(valid only when &#x60;leverage&#x60; is 0). | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Position; }> [Position](Position.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updatePositionCrossMode

> Promise<{ response: http.IncomingMessage; body: Position; }> updatePositionCrossMode(settle, futuresPositionCrossMode)

Switch to the full position-by-store mode.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | Settle currency.
const futuresPositionCrossMode = new FuturesPositionCrossMode(); // FuturesPositionCrossMode | 
api.updatePositionCrossMode(settle, futuresPositionCrossMode)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency. | [default to undefined]
 **futuresPositionCrossMode** | [**FuturesPositionCrossMode**](FuturesPositionCrossMode.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: Position; }> [Position](Position.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## updateDualCompPositionCrossMode

> Promise<{ response: http.IncomingMessage; body: Array<Position>; }> updateDualCompPositionCrossMode(settle, inlineObject)

双仓模式下切换全逐仓模式

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | Settle currency.
const inlineObject = new InlineObject(); // InlineObject | 
api.updateDualCompPositionCrossMode(settle, inlineObject)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency. | [default to undefined]
 **inlineObject** | [**InlineObject**](InlineObject.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: Array<Position>; }> [Position](Position.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## updatePositionRiskLimit

> Promise<{ response: http.IncomingMessage; body: Position; }> updatePositionRiskLimit(settle, contract, riskLimit)

Update position risk limit.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | Settle currency.
const contract = "BTC_USDT"; // string | Futures contract.
const riskLimit = "1000000"; // string | New Risk Limit Value.
api.updatePositionRiskLimit(settle, contract, riskLimit)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency. | [default to undefined]
 **contract** | **string**| Futures contract. | [default to undefined]
 **riskLimit** | **string**| New Risk Limit Value. | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Position; }> [Position](Position.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## setDualMode

> Promise<{ response: http.IncomingMessage; body: FuturesAccount; }> setDualMode(settle, dualMode)

Enable or disable dual mode.

The prerequisite for changing mode is that all positions have no holdings.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | Settle currency.
const dualMode = true; // boolean | Whether to enable dual mode.
api.setDualMode(settle, dualMode)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency. | [default to undefined]
 **dualMode** | **boolean**| Whether to enable dual mode. | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: FuturesAccount; }> [FuturesAccount](FuturesAccount.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDualModePosition

> Promise<{ response: http.IncomingMessage; body: Array<Position>; }> getDualModePosition(settle, contract)

Retrieve position detail in dual mode.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | Settle currency.
const contract = "BTC_USDT"; // string | Futures contract.
api.getDualModePosition(settle, contract)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency. | [default to undefined]
 **contract** | **string**| Futures contract. | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<Position>; }> [Position](Position.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateDualModePositionMargin

> Promise<{ response: http.IncomingMessage; body: Array<Position>; }> updateDualModePositionMargin(settle, contract, change, dualSide)

Update position margin in dual mode.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | Settle currency.
const contract = "BTC_USDT"; // string | Futures contract.
const change = "0.01"; // string | Margin change amount, positive number increases, negative number.
const dualSide = "dual_long"; // string | Long or short position.
api.updateDualModePositionMargin(settle, contract, change, dualSide)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency. | [default to undefined]
 **contract** | **string**| Futures contract. | [default to undefined]
 **change** | **string**| Margin change amount, positive number increases, negative number. | [default to undefined]
 **dualSide** | **string**| Long or short position. | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<Position>; }> [Position](Position.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateDualModePositionLeverage

> Promise<{ response: http.IncomingMessage; body: Array<Position>; }> updateDualModePositionLeverage(settle, contract, leverage, opts)

Update position leverage in dual mode.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | Settle currency.
const contract = "BTC_USDT"; // string | Futures contract.
const leverage = "10"; // string | New position leverage.
const opts = {
  'crossLeverageLimit': "10" // string | Cross margin leverage(valid only when `leverage` is 0).
};
api.updateDualModePositionLeverage(settle, contract, leverage, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency. | [default to undefined]
 **contract** | **string**| Futures contract. | [default to undefined]
 **leverage** | **string**| New position leverage. | [default to undefined]
 **crossLeverageLimit** | **string**| Cross margin leverage(valid only when &#x60;leverage&#x60; is 0). | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<Position>; }> [Position](Position.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateDualModePositionRiskLimit

> Promise<{ response: http.IncomingMessage; body: Array<Position>; }> updateDualModePositionRiskLimit(settle, contract, riskLimit)

Update position risk limit in dual mode.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | Settle currency.
const contract = "BTC_USDT"; // string | Futures contract.
const riskLimit = "1000000"; // string | New Risk Limit Value.
api.updateDualModePositionRiskLimit(settle, contract, riskLimit)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency. | [default to undefined]
 **contract** | **string**| Futures contract. | [default to undefined]
 **riskLimit** | **string**| New Risk Limit Value. | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<Position>; }> [Position](Position.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listFuturesOrders

> Promise<{ response: http.IncomingMessage; body: Array<FuturesOrder>; }> listFuturesOrders(settle, status, opts)

List futures orders.

- Zero-fill order cannot be retrieved for 10 minutes after cancellation - Historical orders, by default, only data within the past 6 months is supported.  If you need to query data for a longer period, please use &#x60;GET /futures/{settle}/orders_timerange&#x60;.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | Settle currency.
const status = "open"; // string | Only list the orders with this status.
const opts = {
  'contract': "BTC_USDT", // string | Futures contract, return related data only if specified.
  'limit': 100, // number | Maximum number of records to be returned in a single list.
  'offset': 0, // number | List offset, starting from 0.
  'lastId': "12345" // string | Specify the currency name to query in batches, and support up to 100 pass parameters at a time.
};
api.listFuturesOrders(settle, status, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency. | [default to undefined]
 **status** | **string**| Only list the orders with this status. | [default to undefined]
 **contract** | **string**| Futures contract, return related data only if specified. | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list. | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0. | [optional] [default to 0]
 **lastId** | **string**| Specify the currency name to query in batches, and support up to 100 pass parameters at a time. | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<FuturesOrder>; }> [FuturesOrder](FuturesOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createFuturesOrder

> Promise<{ response: http.IncomingMessage; body: FuturesOrder; }> createFuturesOrder(settle, futuresOrder, opts)

Create a futures order.

- When placing an order, the number of contracts is specified &#x60;size&#x60;, not the number of coins. The number of coins corresponding to each contract is returned in the contract details interface &#x60;quanto_multiplier&#x60; - 0 The order that was completed cannot be obtained after 10 minutes of withdrawal, and the order will be mentioned that the order does not exist - Setting &#x60;reduce_only&#x60; to &#x60;true&#x60; can prevent the position from being penetrated when reducing the position - In single-position mode, if you need to close the position, you need to set &#x60;size&#x60; to 0 and &#x60;close&#x60; to &#x60;true&#x60; - In dual warehouse mode,   - Reduce position: reduce_only&#x3D;true, size is a positive number that indicates short position, negative number that indicates long position  - Add number that indicates adding long positions, and negative numbers indicate adding short positions  - Close position: size&#x3D;0, set the direction of closing position according to auto_size, and set &#x60;reduce_only&#x60; to true  at the same time - reduce_only: Make sure to only perform position reduction operations to prevent increased positions - Set &#x60;stp_act&#x60; to determine the use of a strategy that restricts user transactions. For detailed usage, refer to the body parameter &#x60;stp_act&#x60;

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | Settle currency.
const futuresOrder = new FuturesOrder(); // FuturesOrder | 
const opts = {
  'xGateExptime': "1689560679123" // string | Specify the expiration time (milliseconds); if the GATE receives the request time greater than the expiration time, the request will be rejected
};
api.createFuturesOrder(settle, futuresOrder, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency. | [default to undefined]
 **futuresOrder** | [**FuturesOrder**](FuturesOrder.md)|  | 
 **xGateExptime** | **string**| Specify the expiration time (milliseconds); if the GATE receives the request time greater than the expiration time, the request will be rejected | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: FuturesOrder; }> [FuturesOrder](FuturesOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## cancelFuturesOrders

> Promise<{ response: http.IncomingMessage; body: Array<FuturesOrder>; }> cancelFuturesOrders(settle, contract, opts)

Cancel all &#x60;open&#x60; orders matched.

Zero-filled order cannot be retrieved 10 minutes after order cancellation.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | Settle currency.
const contract = "BTC_USDT"; // string | Futures contract.
const opts = {
  'xGateExptime': "1689560679123", // string | Specify the expiration time (milliseconds); if the GATE receives the request time greater than the expiration time, the request will be rejected
  'side': "ask" // string | Specify all buy orders or all sell orders, both are included if not specified. Set to bid, set to ask to cancel all sell ordersspecified. Set to bid, set to ask to cancel all sell ordersspecified. Set to bid, set to ask to cancel all sell orders
};
api.cancelFuturesOrders(settle, contract, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency. | [default to undefined]
 **contract** | **string**| Futures contract. | [default to undefined]
 **xGateExptime** | **string**| Specify the expiration time (milliseconds); if the GATE receives the request time greater than the expiration time, the request will be rejected | [optional] [default to undefined]
 **side** | **string**| Specify all buy orders or all sell orders, both are included if not specified. Set to bid, set to ask to cancel all sell ordersspecified. Set to bid, set to ask to cancel all sell ordersspecified. Set to bid, set to ask to cancel all sell orders | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<FuturesOrder>; }> [FuturesOrder](FuturesOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getOrdersWithTimeRange

> Promise<{ response: http.IncomingMessage; body: Array<FuturesOrder>; }> getOrdersWithTimeRange(settle, opts)

List Futures Orders By Time Range.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | Settle currency.
const opts = {
  'contract': "BTC_USDT", // string | Futures contract, return related data only if specified.
  'from': 1547706332, // number | Start timestamp  Specify start time, time format is Unix timestamp. If not specified, it defaults to (the data start time of the time range actually returned by to and limit)
  'to': 1547706332, // number | Termination Timestamp  Specify the end time. If not specified, it defaults to the current time, and the time format is a Unix timestamp
  'limit': 100, // number | Maximum number of records to be returned in a single list.
  'offset': 0 // number | List offset, starting from 0.
};
api.getOrdersWithTimeRange(settle, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency. | [default to undefined]
 **contract** | **string**| Futures contract, return related data only if specified. | [optional] [default to undefined]
 **from** | **number**| Start timestamp  Specify start time, time format is Unix timestamp. If not specified, it defaults to (the data start time of the time range actually returned by to and limit) | [optional] [default to undefined]
 **to** | **number**| Termination Timestamp  Specify the end time. If not specified, it defaults to the current time, and the time format is a Unix timestamp | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list. | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0. | [optional] [default to 0]

### Return type

Promise<{ response: AxiosResponse; body: Array<FuturesOrder>; }> [FuturesOrder](FuturesOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createBatchFuturesOrder

> Promise<{ response: http.IncomingMessage; body: Array<BatchFuturesOrder>; }> createBatchFuturesOrder(settle, futuresOrder, opts)

Create a batch of futures orders.

- Up to 10 orders per request - If any of the order\&#39;s parameters are missing or in the wrong format, all of them will not be executed, and a http status 400 error will be returned directly - If the parameters are checked and passed, all are executed. Even if there is a business logic error in the middle (such as insufficient funds), it will not affect other execution orders - The returned result is in array format, and the order corresponds to the orders in the request body - In the returned result, the &#x60;succeeded&#x60; field of type bool indicates whether the execution was successful or not - If the execution is successful, the normal order content is included; if the execution fails, the &#x60;label&#x60; field is included to indicate the cause of the error - In the rate limiting, each order is counted individually

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | Settle currency.
const futuresOrder = [new FuturesOrder()]; // Array<FuturesOrder> | 
const opts = {
  'xGateExptime': "1689560679123" // string | Specify the expiration time (milliseconds); if the GATE receives the request time greater than the expiration time, the request will be rejected
};
api.createBatchFuturesOrder(settle, futuresOrder, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency. | [default to undefined]
 **futuresOrder** | [**Array&lt;FuturesOrder&gt;**](FuturesOrder.md)|  | 
 **xGateExptime** | **string**| Specify the expiration time (milliseconds); if the GATE receives the request time greater than the expiration time, the request will be rejected | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<BatchFuturesOrder>; }> [BatchFuturesOrder](BatchFuturesOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## getFuturesOrder

> Promise<{ response: http.IncomingMessage; body: FuturesOrder; }> getFuturesOrder(settle, orderId)

Get a single order.

- Zero-fill order cannot be retrieved for 10 minutes after cancellation - Historical orders, by default, only data within the past 6 months is supported.  

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | Settle currency.
const orderId = "12345"; // string | Order ID returned, or user custom ID(i.e., `text` field). Operations based on custom ID can only be checked when the order is in orderbook. finished, it can be checked within 60 seconds after the end of the order. After that, only order ID is accepted.
api.getFuturesOrder(settle, orderId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency. | [default to undefined]
 **orderId** | **string**| Order ID returned, or user custom ID(i.e., &#x60;text&#x60; field). Operations based on custom ID can only be checked when the order is in orderbook. finished, it can be checked within 60 seconds after the end of the order. After that, only order ID is accepted. | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: FuturesOrder; }> [FuturesOrder](FuturesOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## amendFuturesOrder

> Promise<{ response: http.IncomingMessage; body: FuturesOrder; }> amendFuturesOrder(settle, orderId, futuresOrderAmendment, opts)

Amend an order.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | Settle currency.
const orderId = "12345"; // string | Order ID returned, or user custom ID(i.e., `text` field). Operations based on custom ID can only be checked when the order is in orderbook. finished, it can be checked within 60 seconds after the end of the order. After that, only order ID is accepted.
const futuresOrderAmendment = new FuturesOrderAmendment(); // FuturesOrderAmendment | 
const opts = {
  'xGateExptime': "1689560679123" // string | Specify the expiration time (milliseconds); if the GATE receives the request time greater than the expiration time, the request will be rejected
};
api.amendFuturesOrder(settle, orderId, futuresOrderAmendment, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency. | [default to undefined]
 **orderId** | **string**| Order ID returned, or user custom ID(i.e., &#x60;text&#x60; field). Operations based on custom ID can only be checked when the order is in orderbook. finished, it can be checked within 60 seconds after the end of the order. After that, only order ID is accepted. | [default to undefined]
 **futuresOrderAmendment** | [**FuturesOrderAmendment**](FuturesOrderAmendment.md)|  | 
 **xGateExptime** | **string**| Specify the expiration time (milliseconds); if the GATE receives the request time greater than the expiration time, the request will be rejected | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: FuturesOrder; }> [FuturesOrder](FuturesOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## cancelFuturesOrder

> Promise<{ response: http.IncomingMessage; body: FuturesOrder; }> cancelFuturesOrder(settle, orderId, opts)

Cancel a single order.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | Settle currency.
const orderId = "12345"; // string | Order ID returned, or user custom ID(i.e., `text` field). Operations based on custom ID can only be checked when the order is in orderbook. finished, it can be checked within 60 seconds after the end of the order. After that, only order ID is accepted.
const opts = {
  'xGateExptime': "1689560679123" // string | Specify the expiration time (milliseconds); if the GATE receives the request time greater than the expiration time, the request will be rejected
};
api.cancelFuturesOrder(settle, orderId, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency. | [default to undefined]
 **orderId** | **string**| Order ID returned, or user custom ID(i.e., &#x60;text&#x60; field). Operations based on custom ID can only be checked when the order is in orderbook. finished, it can be checked within 60 seconds after the end of the order. After that, only order ID is accepted. | [default to undefined]
 **xGateExptime** | **string**| Specify the expiration time (milliseconds); if the GATE receives the request time greater than the expiration time, the request will be rejected | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: FuturesOrder; }> [FuturesOrder](FuturesOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getMyTrades

> Promise<{ response: http.IncomingMessage; body: Array<MyFuturesTrade>; }> getMyTrades(settle, opts)

List personal trading history.

By default, only data within the past 6 months is supported.  If you need to query data for a longer period, please use &#x60;GET /futures/{settle}/my_trades_timerange&#x60;.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | Settle currency.
const opts = {
  'contract': "BTC_USDT", // string | Futures contract, return related data only if specified.
  'order': 12345, // number | Futures order ID, return related data only if specified.
  'limit': 100, // number | Maximum number of records to be returned in a single list.
  'offset': 0, // number | List offset, starting from 0.
  'lastId': "12345" // string | Specify the starting point for this list based on a previously retrieved id  This parameter is deprecated. If you need to iterate through and retrieve more records, we recommend using \'GET /futures/{settle}/my_trades_timerange\'.
};
api.getMyTrades(settle, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency. | [default to undefined]
 **contract** | **string**| Futures contract, return related data only if specified. | [optional] [default to undefined]
 **order** | **number**| Futures order ID, return related data only if specified. | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list. | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0. | [optional] [default to 0]
 **lastId** | **string**| Specify the starting point for this list based on a previously retrieved id  This parameter is deprecated. If you need to iterate through and retrieve more records, we recommend using \&#39;GET /futures/{settle}/my_trades_timerange\&#39;. | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<MyFuturesTrade>; }> [MyFuturesTrade](MyFuturesTrade.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getMyTradesWithTimeRange

> Promise<{ response: http.IncomingMessage; body: Array<MyFuturesTradeTimeRange>; }> getMyTradesWithTimeRange(settle, opts)

List personal trading history by time range.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | Settle currency.
const opts = {
  'contract': "BTC_USDT", // string | Futures contract, return related data only if specified.
  'from': 1547706332, // number | Start timestamp  Specify start time, time format is Unix timestamp. If not specified, it defaults to (the data start time of the time range actually returned by to and limit)
  'to': 1547706332, // number | Termination Timestamp  Specify the end time. If not specified, it defaults to the current time, and the time format is a Unix timestamp
  'limit': 100, // number | Maximum number of records to be returned in a single list.
  'offset': 0, // number | List offset, starting from 0.
  'role': "maker" // string | Query role, maker or taker.
};
api.getMyTradesWithTimeRange(settle, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency. | [default to undefined]
 **contract** | **string**| Futures contract, return related data only if specified. | [optional] [default to undefined]
 **from** | **number**| Start timestamp  Specify start time, time format is Unix timestamp. If not specified, it defaults to (the data start time of the time range actually returned by to and limit) | [optional] [default to undefined]
 **to** | **number**| Termination Timestamp  Specify the end time. If not specified, it defaults to the current time, and the time format is a Unix timestamp | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list. | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0. | [optional] [default to 0]
 **role** | **string**| Query role, maker or taker. | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<MyFuturesTradeTimeRange>; }> [MyFuturesTradeTimeRange](MyFuturesTradeTimeRange.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listPositionClose

> Promise<{ response: http.IncomingMessage; body: Array<PositionClose>; }> listPositionClose(settle, opts)

List position close history.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | Settle currency.
const opts = {
  'contract': "BTC_USDT", // string | Futures contract, return related data only if specified.
  'limit': 100, // number | Maximum number of records to be returned in a single list.
  'offset': 0, // number | List offset, starting from 0.
  'from': 1547706332, // number | Start timestamp  Specify start time, time format is Unix timestamp. If not specified, it defaults to (the data start time of the time range actually returned by to and limit)
  'to': 1547706332, // number | Termination Timestamp  Specify the end time. If not specified, it defaults to the current time, and the time format is a Unix timestamp
  'side': "short", // string | Query side. long or shot.
  'pnl': "profit" // string | Query profit or loss.
};
api.listPositionClose(settle, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency. | [default to undefined]
 **contract** | **string**| Futures contract, return related data only if specified. | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list. | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0. | [optional] [default to 0]
 **from** | **number**| Start timestamp  Specify start time, time format is Unix timestamp. If not specified, it defaults to (the data start time of the time range actually returned by to and limit) | [optional] [default to undefined]
 **to** | **number**| Termination Timestamp  Specify the end time. If not specified, it defaults to the current time, and the time format is a Unix timestamp | [optional] [default to undefined]
 **side** | **string**| Query side. long or shot. | [optional] [default to undefined]
 **pnl** | **string**| Query profit or loss. | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<PositionClose>; }> [PositionClose](PositionClose.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listLiquidates

> Promise<{ response: http.IncomingMessage; body: Array<FuturesLiquidate>; }> listLiquidates(settle, opts)

List liquidation history.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | Settle currency.
const opts = {
  'contract': "BTC_USDT", // string | Futures contract, return related data only if specified.
  'limit': 100, // number | Maximum number of records to be returned in a single list.
  'offset': 0, // number | List offset, starting from 0.
  'from': 1547706332, // number | Start timestamp  Specify start time, time format is Unix timestamp. If not specified, it defaults to (the data start time of the time range actually returned by to and limit)
  'to': 1547706332, // number | Termination Timestamp  Specify the end time. If not specified, it defaults to the current time, and the time format is a Unix timestamp
  'at': 0 // number | Specify a liquidation timestamp.
};
api.listLiquidates(settle, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency. | [default to undefined]
 **contract** | **string**| Futures contract, return related data only if specified. | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list. | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0. | [optional] [default to 0]
 **from** | **number**| Start timestamp  Specify start time, time format is Unix timestamp. If not specified, it defaults to (the data start time of the time range actually returned by to and limit) | [optional] [default to undefined]
 **to** | **number**| Termination Timestamp  Specify the end time. If not specified, it defaults to the current time, and the time format is a Unix timestamp | [optional] [default to undefined]
 **at** | **number**| Specify a liquidation timestamp. | [optional] [default to 0]

### Return type

Promise<{ response: AxiosResponse; body: Array<FuturesLiquidate>; }> [FuturesLiquidate](FuturesLiquidate.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listAutoDeleverages

> Promise<{ response: http.IncomingMessage; body: Array<FuturesAutoDeleverage>; }> listAutoDeleverages(settle, opts)

List Auto-Deleveraging History.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | Settle currency.
const opts = {
  'contract': "BTC_USDT", // string | Futures contract, return related data only if specified.
  'limit': 100, // number | Maximum number of records to be returned in a single list.
  'offset': 0, // number | List offset, starting from 0.
  'from': 1547706332, // number | Start timestamp  Specify start time, time format is Unix timestamp. If not specified, it defaults to (the data start time of the time range actually returned by to and limit)
  'to': 1547706332, // number | Termination Timestamp  Specify the end time. If not specified, it defaults to the current time, and the time format is a Unix timestamp
  'at': 0 // number | Specify an auto-deleveraging timestamp.
};
api.listAutoDeleverages(settle, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency. | [default to undefined]
 **contract** | **string**| Futures contract, return related data only if specified. | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list. | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0. | [optional] [default to 0]
 **from** | **number**| Start timestamp  Specify start time, time format is Unix timestamp. If not specified, it defaults to (the data start time of the time range actually returned by to and limit) | [optional] [default to undefined]
 **to** | **number**| Termination Timestamp  Specify the end time. If not specified, it defaults to the current time, and the time format is a Unix timestamp | [optional] [default to undefined]
 **at** | **number**| Specify an auto-deleveraging timestamp. | [optional] [default to 0]

### Return type

Promise<{ response: AxiosResponse; body: Array<FuturesAutoDeleverage>; }> [FuturesAutoDeleverage](FuturesAutoDeleverage.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## countdownCancelAllFutures

> Promise<{ response: http.IncomingMessage; body: TriggerTime; }> countdownCancelAllFutures(settle, countdownCancelAllFuturesTask)

Countdown cancel orders.

Heartbeat detection for contract orders: When the user-set &#x60;timeout&#x60; time is reached, if neither the existing countdown is canceled nor a new countdown is set, the relevant contract orders will be automatically canceled. This API can be called repeatedly to or cancel the countdown. Usage example: Repeatedly call this API at 30-second intervals, setting the &#x60;timeout&#x60; to 30 (seconds) each time. If this API is not called again within 30 seconds, all open orders on your specified &#x60;market&#x60; will be automatically canceled. If the &#x60;timeout&#x60; is set to 0 within 30 seconds, the countdown timer will terminate, and the automatic order cancellation function will be disabled.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | Settle currency.
const countdownCancelAllFuturesTask = new CountdownCancelAllFuturesTask(); // CountdownCancelAllFuturesTask | 
api.countdownCancelAllFutures(settle, countdownCancelAllFuturesTask)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency. | [default to undefined]
 **countdownCancelAllFuturesTask** | [**CountdownCancelAllFuturesTask**](CountdownCancelAllFuturesTask.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: TriggerTime; }> [TriggerTime](TriggerTime.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## getFuturesFee

> Promise<{ response: http.IncomingMessage; body: { [key: string]: FuturesFee; }; }> getFuturesFee(settle, opts)

Query user trading fee rates.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | Settle currency.
const opts = {
  'contract': "BTC_USDT" // string | Futures contract, return related data only if specified.
};
api.getFuturesFee(settle, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency. | [default to undefined]
 **contract** | **string**| Futures contract, return related data only if specified. | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: { [key: string]: FuturesFee; }; }> [FuturesFee](FuturesFee.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## cancelBatchFutureOrders

> Promise<{ response: http.IncomingMessage; body: Array<FutureCancelOrderResult>; }> cancelBatchFutureOrders(settle, requestBody, opts)

Cancel a batch of orders with an ID list.

Multiple different order IDs can be specified. A maximum of 20 records.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | Settle currency.
const requestBody = undefined; // Array<string> | 
const opts = {
  'xGateExptime': "1689560679123" // string | Specify the expiration time (milliseconds); if the GATE receives the request time greater than the expiration time, the request will be rejected
};
api.cancelBatchFutureOrders(settle, requestBody, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency. | [default to undefined]
 **requestBody** | [**Array&lt;string&gt;**](string.md)|  | 
 **xGateExptime** | **string**| Specify the expiration time (milliseconds); if the GATE receives the request time greater than the expiration time, the request will be rejected | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<FutureCancelOrderResult>; }> [FutureCancelOrderResult](FutureCancelOrderResult.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## amendBatchFutureOrders

> Promise<{ response: http.IncomingMessage; body: Array<BatchFuturesOrder>; }> amendBatchFutureOrders(settle, batchAmendOrderReq, opts)

Batch modify orders with specified IDs.

Multiple different order IDs can be specified. A maximum of 10 orders can.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | Settle currency.
const batchAmendOrderReq = [new BatchAmendOrderReq()]; // Array<BatchAmendOrderReq> | 
const opts = {
  'xGateExptime': "1689560679123" // string | Specify the expiration time (milliseconds); if the GATE receives the request time greater than the expiration time, the request will be rejected
};
api.amendBatchFutureOrders(settle, batchAmendOrderReq, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency. | [default to undefined]
 **batchAmendOrderReq** | [**Array&lt;BatchAmendOrderReq&gt;**](BatchAmendOrderReq.md)|  | 
 **xGateExptime** | **string**| Specify the expiration time (milliseconds); if the GATE receives the request time greater than the expiration time, the request will be rejected | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<BatchFuturesOrder>; }> [BatchFuturesOrder](BatchFuturesOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## getFuturesRiskLimitTable

> Promise<{ response: http.IncomingMessage; body: Array<FuturesRiskLimitTier>; }> getFuturesRiskLimitTable(settle, tableId)

Query risk limit table by table_id.

Just pass table_id.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | Settle currency.
const tableId = "CYBER_USDT_20241122"; // string | Risk limit table ID.
api.getFuturesRiskLimitTable(settle, tableId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency. | [default to undefined]
 **tableId** | **string**| Risk limit table ID. | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<FuturesRiskLimitTier>; }> [FuturesRiskLimitTier](FuturesRiskLimitTier.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listPriceTriggeredOrders

> Promise<{ response: http.IncomingMessage; body: Array<FuturesPriceTriggeredOrder>; }> listPriceTriggeredOrders(settle, status, opts)

List All Price-triggered Orders.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | Settle currency.
const status = "status_example"; // 'open' | 'finished' | Only list the orders with this status.
const opts = {
  'contract': "BTC_USDT", // string | Futures contract, return related data only if specified.
  'limit': 100, // number | Maximum number of records to be returned in a single list.
  'offset': 0 // number | List offset, starting from 0.
};
api.listPriceTriggeredOrders(settle, status, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency. | [default to undefined]
 **status** | **Status**| Only list the orders with this status. | [default to undefined]
 **contract** | **string**| Futures contract, return related data only if specified. | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list. | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0. | [optional] [default to 0]

### Return type

Promise<{ response: AxiosResponse; body: Array<FuturesPriceTriggeredOrder>; }> [FuturesPriceTriggeredOrder](FuturesPriceTriggeredOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createPriceTriggeredOrder

> Promise<{ response: http.IncomingMessage; body: TriggerOrderResponse; }> createPriceTriggeredOrder(settle, futuresPriceTriggeredOrder)

Create a price-triggered order.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | Settle currency.
const futuresPriceTriggeredOrder = new FuturesPriceTriggeredOrder(); // FuturesPriceTriggeredOrder | 
api.createPriceTriggeredOrder(settle, futuresPriceTriggeredOrder)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency. | [default to undefined]
 **futuresPriceTriggeredOrder** | [**FuturesPriceTriggeredOrder**](FuturesPriceTriggeredOrder.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: TriggerOrderResponse; }> [TriggerOrderResponse](TriggerOrderResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## cancelPriceTriggeredOrderList

> Promise<{ response: http.IncomingMessage; body: Array<FuturesPriceTriggeredOrder>; }> cancelPriceTriggeredOrderList(settle, opts)

Cancel All Price-triggered Orders.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | Settle currency.
const opts = {
  'contract': "BTC_USDT" // string | Futures contract, return related data only if specified.
};
api.cancelPriceTriggeredOrderList(settle, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency. | [default to undefined]
 **contract** | **string**| Futures contract, return related data only if specified. | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<FuturesPriceTriggeredOrder>; }> [FuturesPriceTriggeredOrder](FuturesPriceTriggeredOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getPriceTriggeredOrder

> Promise<{ response: http.IncomingMessage; body: FuturesPriceTriggeredOrder; }> getPriceTriggeredOrder(settle, orderId)

Get a price-triggered order.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | Settle currency.
const orderId = "orderId_example"; // string | Retrieve the data of the order with the specified ID.
api.getPriceTriggeredOrder(settle, orderId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency. | [default to undefined]
 **orderId** | **string**| Retrieve the data of the order with the specified ID. | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: FuturesPriceTriggeredOrder; }> [FuturesPriceTriggeredOrder](FuturesPriceTriggeredOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## cancelPriceTriggeredOrder

> Promise<{ response: http.IncomingMessage; body: FuturesPriceTriggeredOrder; }> cancelPriceTriggeredOrder(settle, orderId)

cancel a price-triggered order.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | Settle currency.
const orderId = "orderId_example"; // string | Retrieve the data of the order with the specified ID.
api.cancelPriceTriggeredOrder(settle, orderId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency. | [default to undefined]
 **orderId** | **string**| Retrieve the data of the order with the specified ID. | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: FuturesPriceTriggeredOrder; }> [FuturesPriceTriggeredOrder](FuturesPriceTriggeredOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
