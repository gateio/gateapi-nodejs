# DeliveryApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listDeliveryContracts**](DeliveryApi.md#listDeliveryContracts) | **GET** /delivery/{settle}/contracts | Query all futures contracts
[**getDeliveryContract**](DeliveryApi.md#getDeliveryContract) | **GET** /delivery/{settle}/contracts/{contract} | Query single contract information
[**listDeliveryOrderBook**](DeliveryApi.md#listDeliveryOrderBook) | **GET** /delivery/{settle}/order_book | Query futures market depth information
[**listDeliveryTrades**](DeliveryApi.md#listDeliveryTrades) | **GET** /delivery/{settle}/trades | Futures market transaction records
[**listDeliveryCandlesticks**](DeliveryApi.md#listDeliveryCandlesticks) | **GET** /delivery/{settle}/candlesticks | Futures market K-line chart
[**listDeliveryTickers**](DeliveryApi.md#listDeliveryTickers) | **GET** /delivery/{settle}/tickers | Get all futures trading statistics
[**listDeliveryInsuranceLedger**](DeliveryApi.md#listDeliveryInsuranceLedger) | **GET** /delivery/{settle}/insurance | Futures market insurance fund history
[**listDeliveryAccounts**](DeliveryApi.md#listDeliveryAccounts) | **GET** /delivery/{settle}/accounts | Get futures account
[**listDeliveryAccountBook**](DeliveryApi.md#listDeliveryAccountBook) | **GET** /delivery/{settle}/account_book | Query futures account change history
[**listDeliveryPositions**](DeliveryApi.md#listDeliveryPositions) | **GET** /delivery/{settle}/positions | Get user position list
[**getDeliveryPosition**](DeliveryApi.md#getDeliveryPosition) | **GET** /delivery/{settle}/positions/{contract} | Get single position information
[**updateDeliveryPositionMargin**](DeliveryApi.md#updateDeliveryPositionMargin) | **POST** /delivery/{settle}/positions/{contract}/margin | Update position margin
[**updateDeliveryPositionLeverage**](DeliveryApi.md#updateDeliveryPositionLeverage) | **POST** /delivery/{settle}/positions/{contract}/leverage | Update position leverage
[**updateDeliveryPositionRiskLimit**](DeliveryApi.md#updateDeliveryPositionRiskLimit) | **POST** /delivery/{settle}/positions/{contract}/risk_limit | Update position risk limit
[**listDeliveryOrders**](DeliveryApi.md#listDeliveryOrders) | **GET** /delivery/{settle}/orders | Query futures order list
[**createDeliveryOrder**](DeliveryApi.md#createDeliveryOrder) | **POST** /delivery/{settle}/orders | Place futures order
[**cancelDeliveryOrders**](DeliveryApi.md#cancelDeliveryOrders) | **DELETE** /delivery/{settle}/orders | Cancel all orders with \&#39;open\&#39; status
[**getDeliveryOrder**](DeliveryApi.md#getDeliveryOrder) | **GET** /delivery/{settle}/orders/{order_id} | Query single order details
[**cancelDeliveryOrder**](DeliveryApi.md#cancelDeliveryOrder) | **DELETE** /delivery/{settle}/orders/{order_id} | Cancel single order
[**getMyDeliveryTrades**](DeliveryApi.md#getMyDeliveryTrades) | **GET** /delivery/{settle}/my_trades | Query personal trading records
[**listDeliveryPositionClose**](DeliveryApi.md#listDeliveryPositionClose) | **GET** /delivery/{settle}/position_close | Query position close history
[**listDeliveryLiquidates**](DeliveryApi.md#listDeliveryLiquidates) | **GET** /delivery/{settle}/liquidates | Query liquidation history
[**listDeliverySettlements**](DeliveryApi.md#listDeliverySettlements) | **GET** /delivery/{settle}/settlements | Query settlement records
[**listDeliveryRiskLimitTiers**](DeliveryApi.md#listDeliveryRiskLimitTiers) | **GET** /delivery/{settle}/risk_limit_tiers | Query risk limit tiers
[**listPriceTriggeredDeliveryOrders**](DeliveryApi.md#listPriceTriggeredDeliveryOrders) | **GET** /delivery/{settle}/price_orders | Query auto order list
[**createPriceTriggeredDeliveryOrder**](DeliveryApi.md#createPriceTriggeredDeliveryOrder) | **POST** /delivery/{settle}/price_orders | Create price-triggered order
[**cancelPriceTriggeredDeliveryOrderList**](DeliveryApi.md#cancelPriceTriggeredDeliveryOrderList) | **DELETE** /delivery/{settle}/price_orders | Cancel all auto orders
[**getPriceTriggeredDeliveryOrder**](DeliveryApi.md#getPriceTriggeredDeliveryOrder) | **GET** /delivery/{settle}/price_orders/{order_id} | Query single auto order details
[**cancelPriceTriggeredDeliveryOrder**](DeliveryApi.md#cancelPriceTriggeredDeliveryOrder) | **DELETE** /delivery/{settle}/price_orders/{order_id} | Cancel single auto order


## listDeliveryContracts

> Promise<{ response: http.IncomingMessage; body: Array<DeliveryContract>; }> listDeliveryContracts(settle)

Query all futures contracts

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'usdt' | Settle currency
api.listDeliveryContracts(settle)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<DeliveryContract>; }> [DeliveryContract](DeliveryContract.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDeliveryContract

> Promise<{ response: http.IncomingMessage; body: DeliveryContract; }> getDeliveryContract(settle, contract)

Query single contract information

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'usdt' | Settle currency
const contract = "BTC_USDT_20200814"; // string | Futures contract
api.getDeliveryContract(settle, contract)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **contract** | **string**| Futures contract | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: DeliveryContract; }> [DeliveryContract](DeliveryContract.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listDeliveryOrderBook

> Promise<{ response: http.IncomingMessage; body: FuturesOrderBook; }> listDeliveryOrderBook(settle, contract, opts)

Query futures market depth information

Bids will be sorted by price from high to low, while asks sorted reversely

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'usdt' | Settle currency
const contract = "BTC_USDT_20200814"; // string | Futures contract
const opts = {
  'interval': '0', // '0' | '0.1' | '0.01' | Price precision for depth aggregation, 0 means no aggregation, defaults to 0 if not specified
  'limit': 10, // number | Number of depth levels
  'withId': false // boolean | Whether to return depth update ID. This ID increments by 1 each time depth changes
};
api.listDeliveryOrderBook(settle, contract, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **contract** | **string**| Futures contract | [default to undefined]
 **interval** | **Interval**| Price precision for depth aggregation, 0 means no aggregation, defaults to 0 if not specified | [optional] [default to &#39;0&#39;]
 **limit** | **number**| Number of depth levels | [optional] [default to 10]
 **withId** | **boolean**| Whether to return depth update ID. This ID increments by 1 each time depth changes | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: FuturesOrderBook; }> [FuturesOrderBook](FuturesOrderBook.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listDeliveryTrades

> Promise<{ response: http.IncomingMessage; body: Array<FuturesTrade>; }> listDeliveryTrades(settle, contract, opts)

Futures market transaction records

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'usdt' | Settle currency
const contract = "BTC_USDT_20200814"; // string | Futures contract
const opts = {
  'limit': 100, // number | Maximum number of records returned in a single list
  'lastId': "12345", // string | 以上个列表的最后一条记录的 ID 作为下个列表的起点。 该字段不再继续支持，新的请求请使用 `from` 和 `to` 字段来限定时间范围
  'from': 1546905600, // number | Specify starting time in Unix seconds. If not specified, `to` and `limit` will be used to limit response items. If items between `from` and `to` are more than `limit`, only `limit` number will be returned. 
  'to': 1546935600 // number | Specify end time in Unix seconds, default to current time.
};
api.listDeliveryTrades(settle, contract, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **contract** | **string**| Futures contract | [default to undefined]
 **limit** | **number**| Maximum number of records returned in a single list | [optional] [default to 100]
 **lastId** | **string**| 以上个列表的最后一条记录的 ID 作为下个列表的起点。 该字段不再继续支持，新的请求请使用 &#x60;from&#x60; 和 &#x60;to&#x60; 字段来限定时间范围 | [optional] [default to undefined]
 **from** | **number**| Specify starting time in Unix seconds. If not specified, &#x60;to&#x60; and &#x60;limit&#x60; will be used to limit response items. If items between &#x60;from&#x60; and &#x60;to&#x60; are more than &#x60;limit&#x60;, only &#x60;limit&#x60; number will be returned.  | [optional] [default to undefined]
 **to** | **number**| Specify end time in Unix seconds, default to current time. | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<FuturesTrade>; }> [FuturesTrade](FuturesTrade.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listDeliveryCandlesticks

> Promise<{ response: http.IncomingMessage; body: Array<DeliveryCandlestick>; }> listDeliveryCandlesticks(settle, contract, opts)

Futures market K-line chart

Return specified contract candlesticks. If prefix &#x60;contract&#x60; with &#x60;mark_&#x60;, the contract\&#39;s mark price candlesticks are returned; if prefix with &#x60;index_&#x60;, index price candlesticks will be returned.  Maximum of 2000 points are returned in one query. Be sure not to exceed the limit when specifying &#x60;from&#x60;, &#x60;to&#x60; and &#x60;interval&#x60;

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'usdt' | Settle currency
const contract = "BTC_USDT_20200814"; // string | Futures contract
const opts = {
  'from': 1546905600, // number | Start time of candlesticks, formatted in Unix timestamp in seconds. Default to`to - 100 * interval` if not specified
  'to': 1546935600, // number | Specify the end time of the K-line chart, defaults to current time if not specified, note that the time format is Unix timestamp with second precision
  'limit': 100, // number | Maximum number of recent data points to return. `limit` conflicts with `from` and `to`. If either `from` or `to` is specified, request will be rejected.
  'interval': '5m' // '10s' | '30s' | '1m' | '5m' | '15m' | '30m' | '1h' | '2h' | '4h' | '6h' | '8h' | '12h' | '1d' | '7d' | '1w' | '30d' | Time interval between data points, note that 1w represents a natural week, 7d time is aligned with Unix initial timeTime interval between data points, note that 1w represents a natural week, 7d time is aligned with Unix initial timeweek, 7d time is aligned with Unix initial time
};
api.listDeliveryCandlesticks(settle, contract, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **contract** | **string**| Futures contract | [default to undefined]
 **from** | **number**| Start time of candlesticks, formatted in Unix timestamp in seconds. Default to&#x60;to - 100 * interval&#x60; if not specified | [optional] [default to undefined]
 **to** | **number**| Specify the end time of the K-line chart, defaults to current time if not specified, note that the time format is Unix timestamp with second precision | [optional] [default to undefined]
 **limit** | **number**| Maximum number of recent data points to return. &#x60;limit&#x60; conflicts with &#x60;from&#x60; and &#x60;to&#x60;. If either &#x60;from&#x60; or &#x60;to&#x60; is specified, request will be rejected. | [optional] [default to 100]
 **interval** | **Interval**| Time interval between data points, note that 1w represents a natural week, 7d time is aligned with Unix initial timeTime interval between data points, note that 1w represents a natural week, 7d time is aligned with Unix initial timeweek, 7d time is aligned with Unix initial time | [optional] [default to &#39;5m&#39;]

### Return type

Promise<{ response: AxiosResponse; body: Array<DeliveryCandlestick>; }> [DeliveryCandlestick](DeliveryCandlestick.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listDeliveryTickers

> Promise<{ response: http.IncomingMessage; body: Array<DeliveryTicker>; }> listDeliveryTickers(settle, opts)

Get all futures trading statistics

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'usdt' | Settle currency
const opts = {
  'contract': "BTC_USDT_20200814" // string | Futures contract
};
api.listDeliveryTickers(settle, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **contract** | **string**| Futures contract | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<DeliveryTicker>; }> [DeliveryTicker](DeliveryTicker.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listDeliveryInsuranceLedger

> Promise<{ response: http.IncomingMessage; body: Array<InsuranceRecord>; }> listDeliveryInsuranceLedger(settle, opts)

Futures market insurance fund history

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'usdt' | Settle currency
const opts = {
  'limit': 100 // number | Maximum number of records returned in a single list
};
api.listDeliveryInsuranceLedger(settle, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **limit** | **number**| Maximum number of records returned in a single list | [optional] [default to 100]

### Return type

Promise<{ response: AxiosResponse; body: Array<InsuranceRecord>; }> [InsuranceRecord](InsuranceRecord.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listDeliveryAccounts

> Promise<{ response: http.IncomingMessage; body: FuturesAccount; }> listDeliveryAccounts(settle)

Get futures account

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'usdt' | Settle currency
api.listDeliveryAccounts(settle)
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

## listDeliveryAccountBook

> Promise<{ response: http.IncomingMessage; body: Array<FuturesAccountBook>; }> listDeliveryAccountBook(settle, opts)

Query futures account change history

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'usdt' | Settle currency
const opts = {
  'limit': 100, // number | Maximum number of records returned in a single list
  'from': 1547706332, // number | Start timestamp  Specify start time, time format is Unix timestamp. If not specified, it defaults to (the data start time of the time range actually returned by to and limit)
  'to': 1547706332, // number | Termination Timestamp  Specify the end time. If not specified, it defaults to the current time, and the time format is a Unix timestamp
  'type': "dnw" // 'dnw' | 'pnl' | 'fee' | 'refr' | 'fund' | 'point_dnw' | 'point_fee' | 'point_refr' | Changing Type: - dnw: Deposit & Withdraw - pnl: Profit & Loss by reducing position - fee: Trading fee - refr: Referrer rebate - fund: Funding - point_dnw: point_fee: POINT Trading fee - point_refr: POINT Referrer rebate
};
api.listDeliveryAccountBook(settle, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **limit** | **number**| Maximum number of records returned in a single list | [optional] [default to 100]
 **from** | **number**| Start timestamp  Specify start time, time format is Unix timestamp. If not specified, it defaults to (the data start time of the time range actually returned by to and limit) | [optional] [default to undefined]
 **to** | **number**| Termination Timestamp  Specify the end time. If not specified, it defaults to the current time, and the time format is a Unix timestamp | [optional] [default to undefined]
 **type** | **Type**| Changing Type: - dnw: Deposit &amp; Withdraw - pnl: Profit &amp; Loss by reducing position - fee: Trading fee - refr: Referrer rebate - fund: Funding - point_dnw: point_fee: POINT Trading fee - point_refr: POINT Referrer rebate | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<FuturesAccountBook>; }> [FuturesAccountBook](FuturesAccountBook.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listDeliveryPositions

> Promise<{ response: http.IncomingMessage; body: Array<Position>; }> listDeliveryPositions(settle)

Get user position list

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'usdt' | Settle currency
api.listDeliveryPositions(settle)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<Position>; }> [Position](Position.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDeliveryPosition

> Promise<{ response: http.IncomingMessage; body: Position; }> getDeliveryPosition(settle, contract)

Get single position information

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'usdt' | Settle currency
const contract = "BTC_USDT_20200814"; // string | Futures contract
api.getDeliveryPosition(settle, contract)
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

## updateDeliveryPositionMargin

> Promise<{ response: http.IncomingMessage; body: Position; }> updateDeliveryPositionMargin(settle, contract, change)

Update position margin

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'usdt' | Settle currency
const contract = "BTC_USDT_20200814"; // string | Futures contract
const change = "0.01"; // string | Margin change amount, positive number increases, negative number decreases
api.updateDeliveryPositionMargin(settle, contract, change)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **contract** | **string**| Futures contract | [default to undefined]
 **change** | **string**| Margin change amount, positive number increases, negative number decreases | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Position; }> [Position](Position.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateDeliveryPositionLeverage

> Promise<{ response: http.IncomingMessage; body: Position; }> updateDeliveryPositionLeverage(settle, contract, leverage)

Update position leverage

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'usdt' | Settle currency
const contract = "BTC_USDT_20200814"; // string | Futures contract
const leverage = "10"; // string | New position leverage
api.updateDeliveryPositionLeverage(settle, contract, leverage)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **contract** | **string**| Futures contract | [default to undefined]
 **leverage** | **string**| New position leverage | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Position; }> [Position](Position.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateDeliveryPositionRiskLimit

> Promise<{ response: http.IncomingMessage; body: Position; }> updateDeliveryPositionRiskLimit(settle, contract, riskLimit)

Update position risk limit

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'usdt' | Settle currency
const contract = "BTC_USDT_20200814"; // string | Futures contract
const riskLimit = "10"; // string | New position risk limit
api.updateDeliveryPositionRiskLimit(settle, contract, riskLimit)
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

## listDeliveryOrders

> Promise<{ response: http.IncomingMessage; body: Array<FuturesOrder>; }> listDeliveryOrders(settle, status, opts)

Query futures order list

Zero-fill orders cannot be retrieved 10 minutes after order cancellation

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'usdt' | Settle currency
const status = "open"; // 'open' | 'finished' | Query order list based on status
const opts = {
  'contract': "BTC_USDT_20200814", // string | Futures contract
  'limit': 100, // number | Maximum number of records returned in a single list
  'offset': 0, // number | List offset, starting from 0
  'lastId': "12345", // string | Specify the currency name to query in batches, and support up to 100 pass parameters at a time
  'countTotal': 0 // 0 | 1 | Whether to return total number matched, defaults to 0 (no return)
};
api.listDeliveryOrders(settle, status, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **status** | **Status**| Query order list based on status | [default to undefined]
 **contract** | **string**| Futures contract | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records returned in a single list | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0 | [optional] [default to 0]
 **lastId** | **string**| Specify the currency name to query in batches, and support up to 100 pass parameters at a time | [optional] [default to undefined]
 **countTotal** | **CountTotal**| Whether to return total number matched, defaults to 0 (no return) | [optional] [default to 0]

### Return type

Promise<{ response: AxiosResponse; body: Array<FuturesOrder>; }> [FuturesOrder](FuturesOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createDeliveryOrder

> Promise<{ response: http.IncomingMessage; body: FuturesOrder; }> createDeliveryOrder(settle, futuresOrder)

Place futures order

Zero-fill orders cannot be retrieved 10 minutes after order cancellation

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'usdt' | Settle currency
const futuresOrder = new FuturesOrder(); // FuturesOrder | 
api.createDeliveryOrder(settle, futuresOrder)
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

## cancelDeliveryOrders

> Promise<{ response: http.IncomingMessage; body: Array<FuturesOrder>; }> cancelDeliveryOrders(settle, contract, opts)

Cancel all orders with \&#39;open\&#39; status

Zero-fill orders cannot be retrieved 10 minutes after order cancellation

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'usdt' | Settle currency
const contract = "BTC_USDT_20200814"; // string | Futures contract
const opts = {
  'side': "ask" // 'ask' | 'bid' | Specify all bids or all asks, both included if not specified
};
api.cancelDeliveryOrders(settle, contract, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **contract** | **string**| Futures contract | [default to undefined]
 **side** | **Side**| Specify all bids or all asks, both included if not specified | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<FuturesOrder>; }> [FuturesOrder](FuturesOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDeliveryOrder

> Promise<{ response: http.IncomingMessage; body: FuturesOrder; }> getDeliveryOrder(settle, orderId)

Query single order details

Zero-fill orders cannot be retrieved 10 minutes after order cancellation

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'usdt' | Settle currency
const orderId = "12345"; // string | ID returned when order is successfully created
api.getDeliveryOrder(settle, orderId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **orderId** | **string**| ID returned when order is successfully created | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: FuturesOrder; }> [FuturesOrder](FuturesOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## cancelDeliveryOrder

> Promise<{ response: http.IncomingMessage; body: FuturesOrder; }> cancelDeliveryOrder(settle, orderId)

Cancel single order

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'usdt' | Settle currency
const orderId = "12345"; // string | ID returned when order is successfully created
api.cancelDeliveryOrder(settle, orderId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **orderId** | **string**| ID returned when order is successfully created | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: FuturesOrder; }> [FuturesOrder](FuturesOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getMyDeliveryTrades

> Promise<{ response: http.IncomingMessage; body: Array<MyFuturesTrade>; }> getMyDeliveryTrades(settle, opts)

Query personal trading records

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'usdt' | Settle currency
const opts = {
  'contract': "BTC_USDT_20200814", // string | Futures contract
  'order': 12345, // number | Futures order ID, return related data only if specified
  'limit': 100, // number | Maximum number of records returned in a single list
  'offset': 0, // number | List offset, starting from 0
  'lastId': "12345", // string | Specify the currency name to query in batches, and support up to 100 pass parameters at a time
  'countTotal': 0 // 0 | 1 | Whether to return total number matched, defaults to 0 (no return)
};
api.getMyDeliveryTrades(settle, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **contract** | **string**| Futures contract | [optional] [default to undefined]
 **order** | **number**| Futures order ID, return related data only if specified | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records returned in a single list | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0 | [optional] [default to 0]
 **lastId** | **string**| Specify the currency name to query in batches, and support up to 100 pass parameters at a time | [optional] [default to undefined]
 **countTotal** | **CountTotal**| Whether to return total number matched, defaults to 0 (no return) | [optional] [default to 0]

### Return type

Promise<{ response: AxiosResponse; body: Array<MyFuturesTrade>; }> [MyFuturesTrade](MyFuturesTrade.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listDeliveryPositionClose

> Promise<{ response: http.IncomingMessage; body: Array<PositionClose>; }> listDeliveryPositionClose(settle, opts)

Query position close history

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'usdt' | Settle currency
const opts = {
  'contract': "BTC_USDT_20200814", // string | Futures contract
  'limit': 100 // number | Maximum number of records returned in a single list
};
api.listDeliveryPositionClose(settle, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **contract** | **string**| Futures contract | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records returned in a single list | [optional] [default to 100]

### Return type

Promise<{ response: AxiosResponse; body: Array<PositionClose>; }> [PositionClose](PositionClose.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listDeliveryLiquidates

> Promise<{ response: http.IncomingMessage; body: Array<FuturesLiquidate>; }> listDeliveryLiquidates(settle, opts)

Query liquidation history

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'usdt' | Settle currency
const opts = {
  'contract': "BTC_USDT_20200814", // string | Futures contract
  'limit': 100, // number | Maximum number of records returned in a single list
  'at': 0 // number | Specify liquidation timestamp
};
api.listDeliveryLiquidates(settle, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **contract** | **string**| Futures contract | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records returned in a single list | [optional] [default to 100]
 **at** | **number**| Specify liquidation timestamp | [optional] [default to 0]

### Return type

Promise<{ response: AxiosResponse; body: Array<FuturesLiquidate>; }> [FuturesLiquidate](FuturesLiquidate.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listDeliverySettlements

> Promise<{ response: http.IncomingMessage; body: Array<DeliverySettlement>; }> listDeliverySettlements(settle, opts)

Query settlement records

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'usdt' | Settle currency
const opts = {
  'contract': "BTC_USDT_20200814", // string | Futures contract
  'limit': 100, // number | Maximum number of records returned in a single list
  'at': 0 // number | Specify settlement timestamp
};
api.listDeliverySettlements(settle, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **contract** | **string**| Futures contract | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records returned in a single list | [optional] [default to 100]
 **at** | **number**| Specify settlement timestamp | [optional] [default to 0]

### Return type

Promise<{ response: AxiosResponse; body: Array<DeliverySettlement>; }> [DeliverySettlement](DeliverySettlement.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listDeliveryRiskLimitTiers

> Promise<{ response: http.IncomingMessage; body: Array<FuturesLimitRiskTiers>; }> listDeliveryRiskLimitTiers(settle, opts)

Query risk limit tiers

When the \&#39;contract\&#39; parameter is not passed, the default is to query the risk limits for the top 100 markets.\&#39;Limit\&#39; and \&#39;offset\&#39; correspond to pagination queries at the market level, not to the length of the returned array. This only takes effect empty.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'usdt' | Settle currency
const opts = {
  'contract': "BTC_USDT_20200814", // string | Futures contract
  'limit': 100, // number | Maximum number of records returned in a single list
  'offset': 0 // number | List offset, starting from 0
};
api.listDeliveryRiskLimitTiers(settle, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **contract** | **string**| Futures contract | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records returned in a single list | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0 | [optional] [default to 0]

### Return type

Promise<{ response: AxiosResponse; body: Array<FuturesLimitRiskTiers>; }> [FuturesLimitRiskTiers](FuturesLimitRiskTiers.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listPriceTriggeredDeliveryOrders

> Promise<{ response: http.IncomingMessage; body: Array<FuturesPriceTriggeredOrder>; }> listPriceTriggeredDeliveryOrders(settle, status, opts)

Query auto order list

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'usdt' | Settle currency
const status = "status_example"; // 'open' | 'finished' | Query order list based on status
const opts = {
  'contract': "BTC_USDT", // string | Futures contract, return related data only if specified
  'limit': 100, // number | Maximum number of records returned in a single list
  'offset': 0 // number | List offset, starting from 0
};
api.listPriceTriggeredDeliveryOrders(settle, status, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **status** | **Status**| Query order list based on status | [default to undefined]
 **contract** | **string**| Futures contract, return related data only if specified | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records returned in a single list | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0 | [optional] [default to 0]

### Return type

Promise<{ response: AxiosResponse; body: Array<FuturesPriceTriggeredOrder>; }> [FuturesPriceTriggeredOrder](FuturesPriceTriggeredOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createPriceTriggeredDeliveryOrder

> Promise<{ response: http.IncomingMessage; body: TriggerOrderResponse; }> createPriceTriggeredDeliveryOrder(settle, futuresPriceTriggeredOrder)

Create price-triggered order

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'usdt' | Settle currency
const futuresPriceTriggeredOrder = new FuturesPriceTriggeredOrder(); // FuturesPriceTriggeredOrder | 
api.createPriceTriggeredDeliveryOrder(settle, futuresPriceTriggeredOrder)
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

## cancelPriceTriggeredDeliveryOrderList

> Promise<{ response: http.IncomingMessage; body: Array<FuturesPriceTriggeredOrder>; }> cancelPriceTriggeredDeliveryOrderList(settle, contract)

Cancel all auto orders

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'usdt' | Settle currency
const contract = "BTC_USDT"; // string | Futures contract
api.cancelPriceTriggeredDeliveryOrderList(settle, contract)
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

## getPriceTriggeredDeliveryOrder

> Promise<{ response: http.IncomingMessage; body: FuturesPriceTriggeredOrder; }> getPriceTriggeredDeliveryOrder(settle, orderId)

Query single auto order details

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'usdt' | Settle currency
const orderId = "orderId_example"; // string | ID returned when order is successfully created
api.getPriceTriggeredDeliveryOrder(settle, orderId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **orderId** | **string**| ID returned when order is successfully created | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: FuturesPriceTriggeredOrder; }> [FuturesPriceTriggeredOrder](FuturesPriceTriggeredOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## cancelPriceTriggeredDeliveryOrder

> Promise<{ response: http.IncomingMessage; body: FuturesPriceTriggeredOrder; }> cancelPriceTriggeredDeliveryOrder(settle, orderId)

Cancel single auto order

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'usdt' | Settle currency
const orderId = "orderId_example"; // string | ID returned when order is successfully created
api.cancelPriceTriggeredDeliveryOrder(settle, orderId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **orderId** | **string**| ID returned when order is successfully created | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: FuturesPriceTriggeredOrder; }> [FuturesPriceTriggeredOrder](FuturesPriceTriggeredOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
