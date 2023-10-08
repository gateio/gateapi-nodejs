# FuturesApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listFuturesContracts**](FuturesApi.md#listFuturesContracts) | **GET** /futures/{settle}/contracts | List all futures contracts
[**getFuturesContract**](FuturesApi.md#getFuturesContract) | **GET** /futures/{settle}/contracts/{contract} | Get a single contract
[**listFuturesOrderBook**](FuturesApi.md#listFuturesOrderBook) | **GET** /futures/{settle}/order_book | Futures order book
[**listFuturesTrades**](FuturesApi.md#listFuturesTrades) | **GET** /futures/{settle}/trades | Futures trading history
[**listFuturesCandlesticks**](FuturesApi.md#listFuturesCandlesticks) | **GET** /futures/{settle}/candlesticks | Get futures candlesticks
[**listFuturesPremiumIndex**](FuturesApi.md#listFuturesPremiumIndex) | **GET** /futures/{settle}/premium_index | Premium Index K-Line
[**listFuturesTickers**](FuturesApi.md#listFuturesTickers) | **GET** /futures/{settle}/tickers | List futures tickers
[**listFuturesFundingRateHistory**](FuturesApi.md#listFuturesFundingRateHistory) | **GET** /futures/{settle}/funding_rate | Funding rate history
[**listFuturesInsuranceLedger**](FuturesApi.md#listFuturesInsuranceLedger) | **GET** /futures/{settle}/insurance | Futures insurance balance history
[**listContractStats**](FuturesApi.md#listContractStats) | **GET** /futures/{settle}/contract_stats | Futures stats
[**getIndexConstituents**](FuturesApi.md#getIndexConstituents) | **GET** /futures/{settle}/index_constituents/{index} | Get index constituents
[**listLiquidatedOrders**](FuturesApi.md#listLiquidatedOrders) | **GET** /futures/{settle}/liq_orders | Retrieve liquidation history
[**listFuturesAccounts**](FuturesApi.md#listFuturesAccounts) | **GET** /futures/{settle}/accounts | Query futures account
[**listFuturesAccountBook**](FuturesApi.md#listFuturesAccountBook) | **GET** /futures/{settle}/account_book | Query account book
[**listPositions**](FuturesApi.md#listPositions) | **GET** /futures/{settle}/positions | List all positions of a user
[**getPosition**](FuturesApi.md#getPosition) | **GET** /futures/{settle}/positions/{contract} | Get single position
[**updatePositionMargin**](FuturesApi.md#updatePositionMargin) | **POST** /futures/{settle}/positions/{contract}/margin | Update position margin
[**updatePositionLeverage**](FuturesApi.md#updatePositionLeverage) | **POST** /futures/{settle}/positions/{contract}/leverage | Update position leverage
[**updatePositionRiskLimit**](FuturesApi.md#updatePositionRiskLimit) | **POST** /futures/{settle}/positions/{contract}/risk_limit | Update position risk limit
[**setDualMode**](FuturesApi.md#setDualMode) | **POST** /futures/{settle}/dual_mode | Enable or disable dual mode
[**getDualModePosition**](FuturesApi.md#getDualModePosition) | **GET** /futures/{settle}/dual_comp/positions/{contract} | Retrieve position detail in dual mode
[**updateDualModePositionMargin**](FuturesApi.md#updateDualModePositionMargin) | **POST** /futures/{settle}/dual_comp/positions/{contract}/margin | Update position margin in dual mode
[**updateDualModePositionLeverage**](FuturesApi.md#updateDualModePositionLeverage) | **POST** /futures/{settle}/dual_comp/positions/{contract}/leverage | Update position leverage in dual mode
[**updateDualModePositionRiskLimit**](FuturesApi.md#updateDualModePositionRiskLimit) | **POST** /futures/{settle}/dual_comp/positions/{contract}/risk_limit | Update position risk limit in dual mode
[**listFuturesOrders**](FuturesApi.md#listFuturesOrders) | **GET** /futures/{settle}/orders | List futures orders
[**createFuturesOrder**](FuturesApi.md#createFuturesOrder) | **POST** /futures/{settle}/orders | Create a futures order
[**cancelFuturesOrders**](FuturesApi.md#cancelFuturesOrders) | **DELETE** /futures/{settle}/orders | Cancel all &#x60;open&#x60; orders matched
[**getOrdersWithTimeRange**](FuturesApi.md#getOrdersWithTimeRange) | **GET** /futures/{settle}/orders_timerange | List Futures Orders By Time Range
[**createBatchFuturesOrder**](FuturesApi.md#createBatchFuturesOrder) | **POST** /futures/{settle}/batch_orders | Create a batch of futures orders
[**getFuturesOrder**](FuturesApi.md#getFuturesOrder) | **GET** /futures/{settle}/orders/{order_id} | Get a single order
[**amendFuturesOrder**](FuturesApi.md#amendFuturesOrder) | **PUT** /futures/{settle}/orders/{order_id} | Amend an order
[**cancelFuturesOrder**](FuturesApi.md#cancelFuturesOrder) | **DELETE** /futures/{settle}/orders/{order_id} | Cancel a single order
[**getMyTrades**](FuturesApi.md#getMyTrades) | **GET** /futures/{settle}/my_trades | List personal trading history
[**getMyTradesWithTimeRange**](FuturesApi.md#getMyTradesWithTimeRange) | **GET** /futures/{settle}/my_trades_timerange | List personal trading history by time range
[**listPositionClose**](FuturesApi.md#listPositionClose) | **GET** /futures/{settle}/position_close | List position close history
[**listLiquidates**](FuturesApi.md#listLiquidates) | **GET** /futures/{settle}/liquidates | List liquidation history
[**listAutoDeleverages**](FuturesApi.md#listAutoDeleverages) | **GET** /futures/{settle}/auto_deleverages | List Auto-Deleveraging History
[**countdownCancelAllFutures**](FuturesApi.md#countdownCancelAllFutures) | **POST** /futures/{settle}/countdown_cancel_all | Countdown cancel orders
[**getFuturesFee**](FuturesApi.md#getFuturesFee) | **GET** /futures/{settle}/fee | Query user trading fee rates
[**listPriceTriggeredOrders**](FuturesApi.md#listPriceTriggeredOrders) | **GET** /futures/{settle}/price_orders | List all auto orders
[**createPriceTriggeredOrder**](FuturesApi.md#createPriceTriggeredOrder) | **POST** /futures/{settle}/price_orders | Create a price-triggered order
[**cancelPriceTriggeredOrderList**](FuturesApi.md#cancelPriceTriggeredOrderList) | **DELETE** /futures/{settle}/price_orders | Cancel all open orders
[**getPriceTriggeredOrder**](FuturesApi.md#getPriceTriggeredOrder) | **GET** /futures/{settle}/price_orders/{order_id} | Get a price-triggered order
[**cancelPriceTriggeredOrder**](FuturesApi.md#cancelPriceTriggeredOrder) | **DELETE** /futures/{settle}/price_orders/{order_id} | cancel a price-triggered order


## listFuturesContracts

> Promise<{ response: http.IncomingMessage; body: Array<Contract>; }> listFuturesContracts(settle)

List all futures contracts

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
api.listFuturesContracts(settle)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<Contract>; }> [Contract](Contract.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getFuturesContract

> Promise<{ response: http.IncomingMessage; body: Contract; }> getFuturesContract(settle, contract)

Get a single contract

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const contract = "BTC_USDT"; // string | Futures contract
api.getFuturesContract(settle, contract)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **contract** | **string**| Futures contract | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Contract; }> [Contract](Contract.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listFuturesOrderBook

> Promise<{ response: http.IncomingMessage; body: FuturesOrderBook; }> listFuturesOrderBook(settle, contract, opts)

Futures order book

Bids will be sorted by price from high to low, while asks sorted reversely

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const contract = "BTC_USDT"; // string | Futures contract
const opts = {
  'interval': '0', // '0' | '0.1' | '0.01' | Order depth. 0 means no aggregation is applied. default to 0
  'limit': 10, // number | Maximum number of order depth data in asks or bids
  'withId': false // boolean | Whether the order book update ID will be returned. This ID increases by 1 on every order book update
};
api.listFuturesOrderBook(settle, contract, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **contract** | **string**| Futures contract | [default to undefined]
 **interval** | **Interval**| Order depth. 0 means no aggregation is applied. default to 0 | [optional] [default to &#39;0&#39;]
 **limit** | **number**| Maximum number of order depth data in asks or bids | [optional] [default to 10]
 **withId** | **boolean**| Whether the order book update ID will be returned. This ID increases by 1 on every order book update | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: FuturesOrderBook; }> [FuturesOrderBook](FuturesOrderBook.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listFuturesTrades

> Promise<{ response: http.IncomingMessage; body: Array<FuturesTrade>; }> listFuturesTrades(settle, contract, opts)

Futures trading history

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const contract = "BTC_USDT"; // string | Futures contract
const opts = {
  'limit': 100, // number | Maximum number of records to be returned in a single list
  'offset': 0, // number | List offset, starting from 0
  'lastId': "12345", // string | Specify the starting point for this list based on a previously retrieved id  This parameter is deprecated. Use `from` and `to` instead to limit time range
  'from': 1546905600, // number | Specify starting time in Unix seconds. If not specified, `to` and `limit` will be used to limit response items. If items between `from` and `to` are more than `limit`, only `limit` number will be returned. 
  'to': 1546935600 // number | Specify end time in Unix seconds, default to current time
};
api.listFuturesTrades(settle, contract, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **contract** | **string**| Futures contract | [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0 | [optional] [default to 0]
 **lastId** | **string**| Specify the starting point for this list based on a previously retrieved id  This parameter is deprecated. Use &#x60;from&#x60; and &#x60;to&#x60; instead to limit time range | [optional] [default to undefined]
 **from** | **number**| Specify starting time in Unix seconds. If not specified, &#x60;to&#x60; and &#x60;limit&#x60; will be used to limit response items. If items between &#x60;from&#x60; and &#x60;to&#x60; are more than &#x60;limit&#x60;, only &#x60;limit&#x60; number will be returned.  | [optional] [default to undefined]
 **to** | **number**| Specify end time in Unix seconds, default to current time | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<FuturesTrade>; }> [FuturesTrade](FuturesTrade.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listFuturesCandlesticks

> Promise<{ response: http.IncomingMessage; body: Array<FuturesCandlestick>; }> listFuturesCandlesticks(settle, contract, opts)

Get futures candlesticks

Return specified contract candlesticks. If prefix &#x60;contract&#x60; with &#x60;mark_&#x60;, the contract\&#39;s mark price candlesticks are returned; if prefix with &#x60;index_&#x60;, index price candlesticks will be returned.  Maximum of 2000 points are returned in one query. Be sure not to exceed the limit when specifying &#x60;from&#x60;, &#x60;to&#x60; and &#x60;interval&#x60;

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const contract = "BTC_USDT"; // string | Futures contract
const opts = {
  'from': 1546905600, // number | 指定 K 线图的起始时间，注意时间格式为秒(s)精度的 Unix 时间戳，不指定则默认为 to - 100 * interval，即向前最多 100 个点的时间
  'to': 1546935600, // number | End time of candlesticks, formatted in Unix timestamp in seconds. Default to current time
  'limit': 100, // number | 指定数据点的数量，适用于取最近 `limit` 数量的数据，该字段与 `from`, `to` 互斥，如果指定了 `from`, `to` 中的任意字段，该字段会被拒绝
  'interval': '5m' // '10s' | '30s' | '1m' | '5m' | '15m' | '30m' | '1h' | '2h' | '4h' | '6h' | '8h' | '12h' | '1d' | '7d' | '1w' | '30d' | 数据点的时间间隔，注意 1w 代表一个自然周，7d 的时间是和 Unix 初始时间对齐, 30d 代表一个自然月
};
api.listFuturesCandlesticks(settle, contract, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **contract** | **string**| Futures contract | [default to undefined]
 **from** | **number**| 指定 K 线图的起始时间，注意时间格式为秒(s)精度的 Unix 时间戳，不指定则默认为 to - 100 * interval，即向前最多 100 个点的时间 | [optional] [default to undefined]
 **to** | **number**| End time of candlesticks, formatted in Unix timestamp in seconds. Default to current time | [optional] [default to undefined]
 **limit** | **number**| 指定数据点的数量，适用于取最近 &#x60;limit&#x60; 数量的数据，该字段与 &#x60;from&#x60;, &#x60;to&#x60; 互斥，如果指定了 &#x60;from&#x60;, &#x60;to&#x60; 中的任意字段，该字段会被拒绝 | [optional] [default to 100]
 **interval** | **Interval**| 数据点的时间间隔，注意 1w 代表一个自然周，7d 的时间是和 Unix 初始时间对齐, 30d 代表一个自然月 | [optional] [default to &#39;5m&#39;]

### Return type

Promise<{ response: AxiosResponse; body: Array<FuturesCandlestick>; }> [FuturesCandlestick](FuturesCandlestick.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listFuturesPremiumIndex

> Promise<{ response: http.IncomingMessage; body: Array<FuturesPremiumIndex>; }> listFuturesPremiumIndex(settle, contract, opts)

Premium Index K-Line

Maximum of 1000 points can be returned in a query. Be sure not to exceed the limit when specifying from, to and interval

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const contract = "BTC_USDT"; // string | Futures contract
const opts = {
  'from': 1546905600, // number | 指定 K 线图的起始时间，注意时间格式为秒(s)精度的 Unix 时间戳，不指定则默认为 to - 100 * interval，即向前最多 100 个点的时间
  'to': 1546935600, // number | End time of candlesticks, formatted in Unix timestamp in seconds. Default to current time
  'limit': 100, // number | 指定数据点的数量，适用于取最近 `limit` 数量的数据，该字段与 `from`, `to` 互斥，如果指定了 `from`, `to` 中的任意字段，该字段会被拒绝
  'interval': '5m' // '1m' | '5m' | '15m' | '30m' | '1h' | '4h' | '6h' | '8h' | '1d' | '7d' | '30d' | Interval time between data points
};
api.listFuturesPremiumIndex(settle, contract, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **contract** | **string**| Futures contract | [default to undefined]
 **from** | **number**| 指定 K 线图的起始时间，注意时间格式为秒(s)精度的 Unix 时间戳，不指定则默认为 to - 100 * interval，即向前最多 100 个点的时间 | [optional] [default to undefined]
 **to** | **number**| End time of candlesticks, formatted in Unix timestamp in seconds. Default to current time | [optional] [default to undefined]
 **limit** | **number**| 指定数据点的数量，适用于取最近 &#x60;limit&#x60; 数量的数据，该字段与 &#x60;from&#x60;, &#x60;to&#x60; 互斥，如果指定了 &#x60;from&#x60;, &#x60;to&#x60; 中的任意字段，该字段会被拒绝 | [optional] [default to 100]
 **interval** | **Interval**| Interval time between data points | [optional] [default to &#39;5m&#39;]

### Return type

Promise<{ response: AxiosResponse; body: Array<FuturesPremiumIndex>; }> [FuturesPremiumIndex](FuturesPremiumIndex.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listFuturesTickers

> Promise<{ response: http.IncomingMessage; body: Array<FuturesTicker>; }> listFuturesTickers(settle, opts)

List futures tickers

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const opts = {
  'contract': "BTC_USDT" // string | Futures contract, return related data only if specified
};
api.listFuturesTickers(settle, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **contract** | **string**| Futures contract, return related data only if specified | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<FuturesTicker>; }> [FuturesTicker](FuturesTicker.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listFuturesFundingRateHistory

> Promise<{ response: http.IncomingMessage; body: Array<FundingRateRecord>; }> listFuturesFundingRateHistory(settle, contract, opts)

Funding rate history

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const contract = "BTC_USDT"; // string | Futures contract
const opts = {
  'limit': 100 // number | Maximum number of records to be returned in a single list
};
api.listFuturesFundingRateHistory(settle, contract, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **contract** | **string**| Futures contract | [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list | [optional] [default to 100]

### Return type

Promise<{ response: AxiosResponse; body: Array<FundingRateRecord>; }> [FundingRateRecord](FundingRateRecord.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listFuturesInsuranceLedger

> Promise<{ response: http.IncomingMessage; body: Array<InsuranceRecord>; }> listFuturesInsuranceLedger(settle, opts)

Futures insurance balance history

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const opts = {
  'limit': 100 // number | Maximum number of records to be returned in a single list
};
api.listFuturesInsuranceLedger(settle, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list | [optional] [default to 100]

### Return type

Promise<{ response: AxiosResponse; body: Array<InsuranceRecord>; }> [InsuranceRecord](InsuranceRecord.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listContractStats

> Promise<{ response: http.IncomingMessage; body: Array<ContractStat>; }> listContractStats(settle, contract, opts)

Futures stats

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const contract = "BTC_USDT"; // string | Futures contract
const opts = {
  'from': 1604561000, // number | Start timestamp
  'interval': '5m', // '5m' | '15m' | '30m' | '1h' | '4h' | '1d' | 
  'limit': 30 // number | 
};
api.listContractStats(settle, contract, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **contract** | **string**| Futures contract | [default to undefined]
 **from** | **number**| Start timestamp | [optional] [default to undefined]
 **interval** | **Interval**|  | [optional] [default to &#39;5m&#39;]
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

Get index constituents

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const index = "BTC_USDT"; // string | Index name
api.getIndexConstituents(settle, index)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **index** | **string**| Index name | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: FuturesIndexConstituents; }> [FuturesIndexConstituents](FuturesIndexConstituents.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listLiquidatedOrders

> Promise<{ response: http.IncomingMessage; body: Array<FuturesLiqOrder>; }> listLiquidatedOrders(settle, opts)

Retrieve liquidation history

Interval between &#x60;from&#x60; and &#x60;to&#x60; cannot exceeds 3600. Some private fields will not be returned in public endpoints. Refer to field description for detail.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const opts = {
  'contract': "BTC_USDT", // string | Futures contract, return related data only if specified
  'from': 1547706332, // number | Start timestamp
  'to': 1547706332, // number | End timestamp
  'limit': 100 // number | Maximum number of records to be returned in a single list
};
api.listLiquidatedOrders(settle, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **contract** | **string**| Futures contract, return related data only if specified | [optional] [default to undefined]
 **from** | **number**| Start timestamp | [optional] [default to undefined]
 **to** | **number**| End timestamp | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list | [optional] [default to 100]

### Return type

Promise<{ response: AxiosResponse; body: Array<FuturesLiqOrder>; }> [FuturesLiqOrder](FuturesLiqOrder.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listFuturesAccounts

> Promise<{ response: http.IncomingMessage; body: FuturesAccount; }> listFuturesAccounts(settle)

Query futures account

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
api.listFuturesAccounts(settle)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: FuturesAccount; }> [FuturesAccount](FuturesAccount.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listFuturesAccountBook

> Promise<{ response: http.IncomingMessage; body: Array<FuturesAccountBook>; }> listFuturesAccountBook(settle, opts)

Query account book

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const opts = {
  'limit': 100, // number | Maximum number of records to be returned in a single list
  'from': 1547706332, // number | Start timestamp
  'to': 1547706332, // number | End timestamp
  'type': "dnw" // 'dnw' | 'pnl' | 'fee' | 'refr' | 'fund' | 'point_dnw' | 'point_fee' | 'point_refr' | Changing Type: - dnw: Deposit & Withdraw - pnl: Profit & Loss by reducing position - fee: Trading fee - refr: Referrer rebate - fund: Funding - point_dnw: POINT Deposit & Withdraw - point_fee: POINT Trading fee - point_refr: POINT Referrer rebate
};
api.listFuturesAccountBook(settle, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list | [optional] [default to 100]
 **from** | **number**| Start timestamp | [optional] [default to undefined]
 **to** | **number**| End timestamp | [optional] [default to undefined]
 **type** | **Type**| Changing Type: - dnw: Deposit &amp; Withdraw - pnl: Profit &amp; Loss by reducing position - fee: Trading fee - refr: Referrer rebate - fund: Funding - point_dnw: POINT Deposit &amp; Withdraw - point_fee: POINT Trading fee - point_refr: POINT Referrer rebate | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<FuturesAccountBook>; }> [FuturesAccountBook](FuturesAccountBook.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listPositions

> Promise<{ response: http.IncomingMessage; body: Array<Position>; }> listPositions(settle, opts)

List all positions of a user

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const opts = {
  'holding': true // boolean | 只返回真实持仓-true,全部返回-false
};
api.listPositions(settle, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **holding** | **boolean**| 只返回真实持仓-true,全部返回-false | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<Position>; }> [Position](Position.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getPosition

> Promise<{ response: http.IncomingMessage; body: Position; }> getPosition(settle, contract)

Get single position

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const contract = "BTC_USDT"; // string | Futures contract
api.getPosition(settle, contract)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **contract** | **string**| Futures contract | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Position; }> [Position](Position.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updatePositionMargin

> Promise<{ response: http.IncomingMessage; body: Position; }> updatePositionMargin(settle, contract, change)

Update position margin

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const contract = "BTC_USDT"; // string | Futures contract
const change = "0.01"; // string | Margin change. Use positive number to increase margin, negative number otherwise.
api.updatePositionMargin(settle, contract, change)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **contract** | **string**| Futures contract | [default to undefined]
 **change** | **string**| Margin change. Use positive number to increase margin, negative number otherwise. | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Position; }> [Position](Position.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updatePositionLeverage

> Promise<{ response: http.IncomingMessage; body: Position; }> updatePositionLeverage(settle, contract, leverage, opts)

Update position leverage

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const contract = "BTC_USDT"; // string | Futures contract
const leverage = "10"; // string | New position leverage
const opts = {
  'crossLeverageLimit': "10" // string | Cross margin leverage(valid only when `leverage` is 0)
};
api.updatePositionLeverage(settle, contract, leverage, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **contract** | **string**| Futures contract | [default to undefined]
 **leverage** | **string**| New position leverage | [default to undefined]
 **crossLeverageLimit** | **string**| Cross margin leverage(valid only when &#x60;leverage&#x60; is 0) | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Position; }> [Position](Position.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updatePositionRiskLimit

> Promise<{ response: http.IncomingMessage; body: Position; }> updatePositionRiskLimit(settle, contract, riskLimit)

Update position risk limit

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const contract = "BTC_USDT"; // string | Futures contract
const riskLimit = "10"; // string | New position risk limit
api.updatePositionRiskLimit(settle, contract, riskLimit)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **contract** | **string**| Futures contract | [default to undefined]
 **riskLimit** | **string**| New position risk limit | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Position; }> [Position](Position.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## setDualMode

> Promise<{ response: http.IncomingMessage; body: FuturesAccount; }> setDualMode(settle, dualMode)

Enable or disable dual mode

Before setting dual mode, make sure all positions are closed and no orders are open

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const dualMode = true; // boolean | Whether to enable dual mode
api.setDualMode(settle, dualMode)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **dualMode** | **boolean**| Whether to enable dual mode | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: FuturesAccount; }> [FuturesAccount](FuturesAccount.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDualModePosition

> Promise<{ response: http.IncomingMessage; body: Array<Position>; }> getDualModePosition(settle, contract)

Retrieve position detail in dual mode

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const contract = "BTC_USDT"; // string | Futures contract
api.getDualModePosition(settle, contract)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **contract** | **string**| Futures contract | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<Position>; }> [Position](Position.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateDualModePositionMargin

> Promise<{ response: http.IncomingMessage; body: Array<Position>; }> updateDualModePositionMargin(settle, contract, change, dualSide)

Update position margin in dual mode

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const contract = "BTC_USDT"; // string | Futures contract
const change = "0.01"; // string | Margin change. Use positive number to increase margin, negative number otherwise.
const dualSide = "dual_long"; // 'dual_long' | 'dual_short' | Long or short position
api.updateDualModePositionMargin(settle, contract, change, dualSide)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **contract** | **string**| Futures contract | [default to undefined]
 **change** | **string**| Margin change. Use positive number to increase margin, negative number otherwise. | [default to undefined]
 **dualSide** | **DualSide**| Long or short position | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<Position>; }> [Position](Position.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateDualModePositionLeverage

> Promise<{ response: http.IncomingMessage; body: Array<Position>; }> updateDualModePositionLeverage(settle, contract, leverage, opts)

Update position leverage in dual mode

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const contract = "BTC_USDT"; // string | Futures contract
const leverage = "10"; // string | New position leverage
const opts = {
  'crossLeverageLimit': "10" // string | Cross margin leverage(valid only when `leverage` is 0)
};
api.updateDualModePositionLeverage(settle, contract, leverage, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **contract** | **string**| Futures contract | [default to undefined]
 **leverage** | **string**| New position leverage | [default to undefined]
 **crossLeverageLimit** | **string**| Cross margin leverage(valid only when &#x60;leverage&#x60; is 0) | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<Position>; }> [Position](Position.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateDualModePositionRiskLimit

> Promise<{ response: http.IncomingMessage; body: Array<Position>; }> updateDualModePositionRiskLimit(settle, contract, riskLimit)

Update position risk limit in dual mode

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const contract = "BTC_USDT"; // string | Futures contract
const riskLimit = "10"; // string | New position risk limit
api.updateDualModePositionRiskLimit(settle, contract, riskLimit)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **contract** | **string**| Futures contract | [default to undefined]
 **riskLimit** | **string**| New position risk limit | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<Position>; }> [Position](Position.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listFuturesOrders

> Promise<{ response: http.IncomingMessage; body: Array<FuturesOrder>; }> listFuturesOrders(settle, status, opts)

List futures orders

Zero-filled order cannot be retrieved 10 minutes after order cancellation

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const status = "open"; // 'open' | 'finished' | Only list the orders with this status
const opts = {
  'contract': "BTC_USDT", // string | Futures contract, return related data only if specified
  'limit': 100, // number | Maximum number of records to be returned in a single list
  'offset': 0, // number | List offset, starting from 0
  'lastId': "12345" // string | Specify list staring point using the `id` of last record in previous list-query results
};
api.listFuturesOrders(settle, status, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **status** | **Status**| Only list the orders with this status | [default to undefined]
 **contract** | **string**| Futures contract, return related data only if specified | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0 | [optional] [default to 0]
 **lastId** | **string**| Specify list staring point using the &#x60;id&#x60; of last record in previous list-query results | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<FuturesOrder>; }> [FuturesOrder](FuturesOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createFuturesOrder

> Promise<{ response: http.IncomingMessage; body: FuturesOrder; }> createFuturesOrder(settle, futuresOrder)

Create a futures order

- Creating futures orders requires &#x60;size&#x60;, which is number of contracts instead of currency amount. You can use &#x60;quanto_multiplier&#x60; in contract detail response to know how much currency 1 size contract represents - Zero-filled order cannot be retrieved 10 minutes after order cancellation. You will get a 404 not found for such orders - Set &#x60;reduce_only&#x60; to &#x60;true&#x60; can keep the position from changing side when reducing position size - In single position mode, to close a position, you need to set &#x60;size&#x60; to 0 and &#x60;close&#x60; to &#x60;true&#x60; - In dual position mode, to close one side position, you need to set &#x60;auto_size&#x60; side, &#x60;reduce_only&#x60; to true and &#x60;size&#x60; to 0 - Set &#x60;stp_act&#x60; to decide the strategy of self-trade prevention. For detailed usage, refer to the &#x60;stp_act&#x60; parameter in request body 

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const futuresOrder = new FuturesOrder(); // FuturesOrder | 
api.createFuturesOrder(settle, futuresOrder)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **futuresOrder** | [**FuturesOrder**](FuturesOrder.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: FuturesOrder; }> [FuturesOrder](FuturesOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## cancelFuturesOrders

> Promise<{ response: http.IncomingMessage; body: Array<FuturesOrder>; }> cancelFuturesOrders(settle, contract, opts)

Cancel all &#x60;open&#x60; orders matched

Zero-filled order cannot be retrieved 10 minutes after order cancellation

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const contract = "BTC_USDT"; // string | Futures contract
const opts = {
  'side': "ask" // 'ask' | 'bid' | All bids or asks. Both included if not specified
};
api.cancelFuturesOrders(settle, contract, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **contract** | **string**| Futures contract | [default to undefined]
 **side** | **Side**| All bids or asks. Both included if not specified | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<FuturesOrder>; }> [FuturesOrder](FuturesOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getOrdersWithTimeRange

> Promise<{ response: http.IncomingMessage; body: Array<FuturesOrder>; }> getOrdersWithTimeRange(settle, opts)

List Futures Orders By Time Range

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const opts = {
  'contract': "BTC_USDT", // string | Futures contract, return related data only if specified
  'from': 1547706332, // number | Start timestamp
  'to': 1547706332, // number | End timestamp
  'limit': 100, // number | Maximum number of records to be returned in a single list
  'offset': 0 // number | List offset, starting from 0
};
api.getOrdersWithTimeRange(settle, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **contract** | **string**| Futures contract, return related data only if specified | [optional] [default to undefined]
 **from** | **number**| Start timestamp | [optional] [default to undefined]
 **to** | **number**| End timestamp | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0 | [optional] [default to 0]

### Return type

Promise<{ response: AxiosResponse; body: Array<FuturesOrder>; }> [FuturesOrder](FuturesOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createBatchFuturesOrder

> Promise<{ response: http.IncomingMessage; body: Array<BatchFuturesOrder>; }> createBatchFuturesOrder(settle, futuresOrder)

Create a batch of futures orders

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
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const futuresOrder = [new FuturesOrder()]; // Array<FuturesOrder> | 
api.createBatchFuturesOrder(settle, futuresOrder)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **futuresOrder** | [**Array&lt;FuturesOrder&gt;**](FuturesOrder.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: Array<BatchFuturesOrder>; }> [BatchFuturesOrder](BatchFuturesOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## getFuturesOrder

> Promise<{ response: http.IncomingMessage; body: FuturesOrder; }> getFuturesOrder(settle, orderId)

Get a single order

Zero-filled order cannot be retrieved 10 minutes after order cancellation

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const orderId = "12345"; // string | Order ID returned, or user custom ID(i.e., `text` field). Operations based on custom ID can only be checked when the order is in orderbook.  When the order is finished, it can be checked within 60 seconds after the end of the order.  After that, only order ID is accepted.
api.getFuturesOrder(settle, orderId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **orderId** | **string**| Order ID returned, or user custom ID(i.e., &#x60;text&#x60; field). Operations based on custom ID can only be checked when the order is in orderbook.  When the order is finished, it can be checked within 60 seconds after the end of the order.  After that, only order ID is accepted. | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: FuturesOrder; }> [FuturesOrder](FuturesOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## amendFuturesOrder

> Promise<{ response: http.IncomingMessage; body: FuturesOrder; }> amendFuturesOrder(settle, orderId, futuresOrderAmendment)

Amend an order

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const orderId = "12345"; // string | Order ID returned, or user custom ID(i.e., `text` field). Operations based on custom ID can only be checked when the order is in orderbook.  When the order is finished, it can be checked within 60 seconds after the end of the order.  After that, only order ID is accepted.
const futuresOrderAmendment = new FuturesOrderAmendment(); // FuturesOrderAmendment | 
api.amendFuturesOrder(settle, orderId, futuresOrderAmendment)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **orderId** | **string**| Order ID returned, or user custom ID(i.e., &#x60;text&#x60; field). Operations based on custom ID can only be checked when the order is in orderbook.  When the order is finished, it can be checked within 60 seconds after the end of the order.  After that, only order ID is accepted. | [default to undefined]
 **futuresOrderAmendment** | [**FuturesOrderAmendment**](FuturesOrderAmendment.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: FuturesOrder; }> [FuturesOrder](FuturesOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## cancelFuturesOrder

> Promise<{ response: http.IncomingMessage; body: FuturesOrder; }> cancelFuturesOrder(settle, orderId)

Cancel a single order

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const orderId = "12345"; // string | Order ID returned, or user custom ID(i.e., `text` field). Operations based on custom ID can only be checked when the order is in orderbook.  When the order is finished, it can be checked within 60 seconds after the end of the order.  After that, only order ID is accepted.
api.cancelFuturesOrder(settle, orderId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **orderId** | **string**| Order ID returned, or user custom ID(i.e., &#x60;text&#x60; field). Operations based on custom ID can only be checked when the order is in orderbook.  When the order is finished, it can be checked within 60 seconds after the end of the order.  After that, only order ID is accepted. | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: FuturesOrder; }> [FuturesOrder](FuturesOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getMyTrades

> Promise<{ response: http.IncomingMessage; body: Array<MyFuturesTrade>; }> getMyTrades(settle, opts)

List personal trading history

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const opts = {
  'contract': "BTC_USDT", // string | Futures contract, return related data only if specified
  'order': 12345, // number | Futures order ID, return related data only if specified
  'limit': 100, // number | Maximum number of records to be returned in a single list
  'offset': 0, // number | List offset, starting from 0
  'lastId': "12345" // string | Specify the starting point for this list based on a previously retrieved id  This parameter is deprecated. If you need to iterate through and retrieve more records, we recommend using \'GET /futures/{settle}/my_trades_timerange\'.
};
api.getMyTrades(settle, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **contract** | **string**| Futures contract, return related data only if specified | [optional] [default to undefined]
 **order** | **number**| Futures order ID, return related data only if specified | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0 | [optional] [default to 0]
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

List personal trading history by time range

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const opts = {
  'contract': "BTC_USDT", // string | Futures contract, return related data only if specified
  'from': 1547706332, // number | Start timestamp
  'to': 1547706332, // number | End timestamp
  'limit': 100, // number | Maximum number of records to be returned in a single list
  'offset': 0, // number | List offset, starting from 0
  'role': "maker" // string | 查询角色，Maker 或 Taker
};
api.getMyTradesWithTimeRange(settle, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **contract** | **string**| Futures contract, return related data only if specified | [optional] [default to undefined]
 **from** | **number**| Start timestamp | [optional] [default to undefined]
 **to** | **number**| End timestamp | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0 | [optional] [default to 0]
 **role** | **string**| 查询角色，Maker 或 Taker | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<MyFuturesTradeTimeRange>; }> [MyFuturesTradeTimeRange](MyFuturesTradeTimeRange.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listPositionClose

> Promise<{ response: http.IncomingMessage; body: Array<PositionClose>; }> listPositionClose(settle, opts)

List position close history

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const opts = {
  'contract': "BTC_USDT", // string | Futures contract, return related data only if specified
  'limit': 100, // number | Maximum number of records to be returned in a single list
  'offset': 0, // number | List offset, starting from 0
  'from': 1547706332, // number | Start timestamp
  'to': 1547706332, // number | End timestamp
  'side': "short", // string | 方向筛选，做多(long)或做空(short)
  'pnl': "profit" // string | 盈亏判断，盈利(profit)或亏损(loss)
};
api.listPositionClose(settle, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **contract** | **string**| Futures contract, return related data only if specified | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0 | [optional] [default to 0]
 **from** | **number**| Start timestamp | [optional] [default to undefined]
 **to** | **number**| End timestamp | [optional] [default to undefined]
 **side** | **string**| 方向筛选，做多(long)或做空(short) | [optional] [default to undefined]
 **pnl** | **string**| 盈亏判断，盈利(profit)或亏损(loss) | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<PositionClose>; }> [PositionClose](PositionClose.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listLiquidates

> Promise<{ response: http.IncomingMessage; body: Array<FuturesLiquidate>; }> listLiquidates(settle, opts)

List liquidation history

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const opts = {
  'contract': "BTC_USDT", // string | Futures contract, return related data only if specified
  'limit': 100, // number | Maximum number of records to be returned in a single list
  'at': 0 // number | Specify a liquidation timestamp
};
api.listLiquidates(settle, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **contract** | **string**| Futures contract, return related data only if specified | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list | [optional] [default to 100]
 **at** | **number**| Specify a liquidation timestamp | [optional] [default to 0]

### Return type

Promise<{ response: AxiosResponse; body: Array<FuturesLiquidate>; }> [FuturesLiquidate](FuturesLiquidate.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listAutoDeleverages

> Promise<{ response: http.IncomingMessage; body: Array<FuturesAutoDeleverage>; }> listAutoDeleverages(settle, opts)

List Auto-Deleveraging History

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const opts = {
  'contract': "BTC_USDT", // string | Futures contract, return related data only if specified
  'limit': 100, // number | Maximum number of records to be returned in a single list
  'at': 0 // number | Specify an auto-deleveraging timestamp
};
api.listAutoDeleverages(settle, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **contract** | **string**| Futures contract, return related data only if specified | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list | [optional] [default to 100]
 **at** | **number**| Specify an auto-deleveraging timestamp | [optional] [default to 0]

### Return type

Promise<{ response: AxiosResponse; body: Array<FuturesAutoDeleverage>; }> [FuturesAutoDeleverage](FuturesAutoDeleverage.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## countdownCancelAllFutures

> Promise<{ response: http.IncomingMessage; body: TriggerTime; }> countdownCancelAllFutures(settle, countdownCancelAllFuturesTask)

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

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const countdownCancelAllFuturesTask = new CountdownCancelAllFuturesTask(); // CountdownCancelAllFuturesTask | 
api.countdownCancelAllFutures(settle, countdownCancelAllFuturesTask)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
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

Query user trading fee rates

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const opts = {
  'contract': "BTC_USDT" // string | Futures contract, return related data only if specified
};
api.getFuturesFee(settle, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **contract** | **string**| Futures contract, return related data only if specified | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: { [key: string]: FuturesFee; }; }> [FuturesFee](FuturesFee.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listPriceTriggeredOrders

> Promise<{ response: http.IncomingMessage; body: Array<FuturesPriceTriggeredOrder>; }> listPriceTriggeredOrders(settle, status, opts)

List all auto orders

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const status = "status_example"; // 'open' | 'finished' | Only list the orders with this status
const opts = {
  'contract': "BTC_USDT", // string | Futures contract, return related data only if specified
  'limit': 100, // number | Maximum number of records to be returned in a single list
  'offset': 0 // number | List offset, starting from 0
};
api.listPriceTriggeredOrders(settle, status, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **status** | **Status**| Only list the orders with this status | [default to undefined]
 **contract** | **string**| Futures contract, return related data only if specified | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0 | [optional] [default to 0]

### Return type

Promise<{ response: AxiosResponse; body: Array<FuturesPriceTriggeredOrder>; }> [FuturesPriceTriggeredOrder](FuturesPriceTriggeredOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createPriceTriggeredOrder

> Promise<{ response: http.IncomingMessage; body: TriggerOrderResponse; }> createPriceTriggeredOrder(settle, futuresPriceTriggeredOrder)

Create a price-triggered order

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const futuresPriceTriggeredOrder = new FuturesPriceTriggeredOrder(); // FuturesPriceTriggeredOrder | 
api.createPriceTriggeredOrder(settle, futuresPriceTriggeredOrder)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **futuresPriceTriggeredOrder** | [**FuturesPriceTriggeredOrder**](FuturesPriceTriggeredOrder.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: TriggerOrderResponse; }> [TriggerOrderResponse](TriggerOrderResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## cancelPriceTriggeredOrderList

> Promise<{ response: http.IncomingMessage; body: Array<FuturesPriceTriggeredOrder>; }> cancelPriceTriggeredOrderList(settle, contract)

Cancel all open orders

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const contract = "BTC_USDT"; // string | Futures contract
api.cancelPriceTriggeredOrderList(settle, contract)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **contract** | **string**| Futures contract | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<FuturesPriceTriggeredOrder>; }> [FuturesPriceTriggeredOrder](FuturesPriceTriggeredOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getPriceTriggeredOrder

> Promise<{ response: http.IncomingMessage; body: FuturesPriceTriggeredOrder; }> getPriceTriggeredOrder(settle, orderId)

Get a price-triggered order

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const orderId = "orderId_example"; // string | Retrieve the data of the order with the specified ID
api.getPriceTriggeredOrder(settle, orderId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **orderId** | **string**| Retrieve the data of the order with the specified ID | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: FuturesPriceTriggeredOrder; }> [FuturesPriceTriggeredOrder](FuturesPriceTriggeredOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## cancelPriceTriggeredOrder

> Promise<{ response: http.IncomingMessage; body: FuturesPriceTriggeredOrder; }> cancelPriceTriggeredOrder(settle, orderId)

cancel a price-triggered order

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const orderId = "orderId_example"; // string | Retrieve the data of the order with the specified ID
api.cancelPriceTriggeredOrder(settle, orderId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **orderId** | **string**| Retrieve the data of the order with the specified ID | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: FuturesPriceTriggeredOrder; }> [FuturesPriceTriggeredOrder](FuturesPriceTriggeredOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
