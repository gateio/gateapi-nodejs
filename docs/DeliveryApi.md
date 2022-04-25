# DeliveryApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listDeliveryContracts**](DeliveryApi.md#listDeliveryContracts) | **GET** /delivery/{settle}/contracts | List all futures contracts
[**getDeliveryContract**](DeliveryApi.md#getDeliveryContract) | **GET** /delivery/{settle}/contracts/{contract} | Get a single contract
[**listDeliveryOrderBook**](DeliveryApi.md#listDeliveryOrderBook) | **GET** /delivery/{settle}/order_book | Futures order book
[**listDeliveryTrades**](DeliveryApi.md#listDeliveryTrades) | **GET** /delivery/{settle}/trades | Futures trading history
[**listDeliveryCandlesticks**](DeliveryApi.md#listDeliveryCandlesticks) | **GET** /delivery/{settle}/candlesticks | Get futures candlesticks
[**listDeliveryTickers**](DeliveryApi.md#listDeliveryTickers) | **GET** /delivery/{settle}/tickers | List futures tickers
[**listDeliveryInsuranceLedger**](DeliveryApi.md#listDeliveryInsuranceLedger) | **GET** /delivery/{settle}/insurance | Futures insurance balance history
[**listDeliveryAccounts**](DeliveryApi.md#listDeliveryAccounts) | **GET** /delivery/{settle}/accounts | Query futures account
[**listDeliveryAccountBook**](DeliveryApi.md#listDeliveryAccountBook) | **GET** /delivery/{settle}/account_book | Query account book
[**listDeliveryPositions**](DeliveryApi.md#listDeliveryPositions) | **GET** /delivery/{settle}/positions | List all positions of a user
[**getDeliveryPosition**](DeliveryApi.md#getDeliveryPosition) | **GET** /delivery/{settle}/positions/{contract} | Get single position
[**updateDeliveryPositionMargin**](DeliveryApi.md#updateDeliveryPositionMargin) | **POST** /delivery/{settle}/positions/{contract}/margin | Update position margin
[**updateDeliveryPositionLeverage**](DeliveryApi.md#updateDeliveryPositionLeverage) | **POST** /delivery/{settle}/positions/{contract}/leverage | Update position leverage
[**updateDeliveryPositionRiskLimit**](DeliveryApi.md#updateDeliveryPositionRiskLimit) | **POST** /delivery/{settle}/positions/{contract}/risk_limit | Update position risk limit
[**listDeliveryOrders**](DeliveryApi.md#listDeliveryOrders) | **GET** /delivery/{settle}/orders | List futures orders
[**createDeliveryOrder**](DeliveryApi.md#createDeliveryOrder) | **POST** /delivery/{settle}/orders | Create a futures order
[**cancelDeliveryOrders**](DeliveryApi.md#cancelDeliveryOrders) | **DELETE** /delivery/{settle}/orders | Cancel all &#x60;open&#x60; orders matched
[**getDeliveryOrder**](DeliveryApi.md#getDeliveryOrder) | **GET** /delivery/{settle}/orders/{order_id} | Get a single order
[**cancelDeliveryOrder**](DeliveryApi.md#cancelDeliveryOrder) | **DELETE** /delivery/{settle}/orders/{order_id} | Cancel a single order
[**getMyDeliveryTrades**](DeliveryApi.md#getMyDeliveryTrades) | **GET** /delivery/{settle}/my_trades | List personal trading history
[**listDeliveryPositionClose**](DeliveryApi.md#listDeliveryPositionClose) | **GET** /delivery/{settle}/position_close | List position close history
[**listDeliveryLiquidates**](DeliveryApi.md#listDeliveryLiquidates) | **GET** /delivery/{settle}/liquidates | List liquidation history
[**listDeliverySettlements**](DeliveryApi.md#listDeliverySettlements) | **GET** /delivery/{settle}/settlements | List settlement history
[**listPriceTriggeredDeliveryOrders**](DeliveryApi.md#listPriceTriggeredDeliveryOrders) | **GET** /delivery/{settle}/price_orders | List all auto orders
[**createPriceTriggeredDeliveryOrder**](DeliveryApi.md#createPriceTriggeredDeliveryOrder) | **POST** /delivery/{settle}/price_orders | Create a price-triggered order
[**cancelPriceTriggeredDeliveryOrderList**](DeliveryApi.md#cancelPriceTriggeredDeliveryOrderList) | **DELETE** /delivery/{settle}/price_orders | Cancel all open orders
[**getPriceTriggeredDeliveryOrder**](DeliveryApi.md#getPriceTriggeredDeliveryOrder) | **GET** /delivery/{settle}/price_orders/{order_id} | Get a single order
[**cancelPriceTriggeredDeliveryOrder**](DeliveryApi.md#cancelPriceTriggeredDeliveryOrder) | **DELETE** /delivery/{settle}/price_orders/{order_id} | Cancel a single order


## listDeliveryContracts

> Promise<{ response: http.IncomingMessage; body: Array<DeliveryContract>; }> listDeliveryContracts(settle)

List all futures contracts

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
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

Get a single contract

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
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

Futures order book

Bids will be sorted by price from high to low, while asks sorted reversely

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const contract = "BTC_USDT_20200814"; // string | Futures contract
const opts = {
  'interval': '0', // '0' | '0.1' | '0.01' | Order depth. 0 means no aggregation is applied. default to 0
  'limit': 10, // number | Maximum number of order depth data in asks or bids
  'withId': false // boolean | Whether the order book update ID will be returned. This ID increases by 1 on every order book update
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

## listDeliveryTrades

> Promise<{ response: http.IncomingMessage; body: Array<FuturesTrade>; }> listDeliveryTrades(settle, contract, opts)

Futures trading history

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const contract = "BTC_USDT_20200814"; // string | Futures contract
const opts = {
  'limit': 100, // number | Maximum number of records to be returned in a single list
  'lastId': "12345", // string | Specify the starting point for this list based on a previously retrieved id  This parameter is deprecated. Use `from` and `to` instead to limit time range
  'from': 1546905600, // number | Specify starting time in Unix seconds. If not specified, `to` and `limit` will be used to limit response items. If items between `from` and `to` are more than `limit`, only `limit` number will be returned. 
  'to': 1546935600 // number | Specify end time in Unix seconds, default to current time
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
 **limit** | **number**| Maximum number of records to be returned in a single list | [optional] [default to 100]
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

## listDeliveryCandlesticks

> Promise<{ response: http.IncomingMessage; body: Array<FuturesCandlestick>; }> listDeliveryCandlesticks(settle, contract, opts)

Get futures candlesticks

Return specified contract candlesticks. If prefix &#x60;contract&#x60; with &#x60;mark_&#x60;, the contract\&#39;s mark price candlesticks are returned; if prefix with &#x60;index_&#x60;, index price candlesticks will be returned.  Maximum of 2000 points are returned in one query. Be sure not to exceed the limit when specifying &#x60;from&#x60;, &#x60;to&#x60; and &#x60;interval&#x60;

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const contract = "BTC_USDT_20200814"; // string | Futures contract
const opts = {
  'from': 1546905600, // number | Start time of candlesticks, formatted in Unix timestamp in seconds. Default to`to - 100 * interval` if not specified
  'to': 1546935600, // number | End time of candlesticks, formatted in Unix timestamp in seconds. Default to current time
  'limit': 100, // number | Maximum recent data points to return. `limit` is conflicted with `from` and `to`. If either `from` or `to` is specified, request will be rejected.
  'interval': '5m' // '10s' | '30s' | '1m' | '5m' | '15m' | '30m' | '1h' | '2h' | '4h' | '6h' | '8h' | '12h' | '1d' | '7d' | '1w' | '30d' | Interval time between data points. Note that `1w` means natual week(Mon-Sun), while `7d` means every 7d since unix 0
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
 **to** | **number**| End time of candlesticks, formatted in Unix timestamp in seconds. Default to current time | [optional] [default to undefined]
 **limit** | **number**| Maximum recent data points to return. &#x60;limit&#x60; is conflicted with &#x60;from&#x60; and &#x60;to&#x60;. If either &#x60;from&#x60; or &#x60;to&#x60; is specified, request will be rejected. | [optional] [default to 100]
 **interval** | **Interval**| Interval time between data points. Note that &#x60;1w&#x60; means natual week(Mon-Sun), while &#x60;7d&#x60; means every 7d since unix 0 | [optional] [default to &#39;5m&#39;]

### Return type

Promise<{ response: AxiosResponse; body: Array<FuturesCandlestick>; }> [FuturesCandlestick](FuturesCandlestick.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listDeliveryTickers

> Promise<{ response: http.IncomingMessage; body: Array<FuturesTicker>; }> listDeliveryTickers(settle, opts)

List futures tickers

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
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

Promise<{ response: AxiosResponse; body: Array<FuturesTicker>; }> [FuturesTicker](FuturesTicker.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listDeliveryInsuranceLedger

> Promise<{ response: http.IncomingMessage; body: Array<InsuranceRecord>; }> listDeliveryInsuranceLedger(settle, opts)

Futures insurance balance history

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const opts = {
  'limit': 100 // number | Maximum number of records to be returned in a single list
};
api.listDeliveryInsuranceLedger(settle, opts)
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

## listDeliveryAccounts

> Promise<{ response: http.IncomingMessage; body: FuturesAccount; }> listDeliveryAccounts(settle)

Query futures account

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
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

Query account book

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const opts = {
  'limit': 100, // number | Maximum number of records to be returned in a single list
  'from': 1547706332, // number | Start timestamp
  'to': 1547706332, // number | End timestamp
  'type': "dnw" // 'dnw' | 'pnl' | 'fee' | 'refr' | 'fund' | 'point_dnw' | 'point_fee' | 'point_refr' | Changing Type: - dnw: Deposit & Withdraw - pnl: Profit & Loss by reducing position - fee: Trading fee - refr: Referrer rebate - fund: Funding - point_dnw: POINT Deposit & Withdraw - point_fee: POINT Trading fee - point_refr: POINT Referrer rebate
};
api.listDeliveryAccountBook(settle, opts)
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

## listDeliveryPositions

> Promise<{ response: http.IncomingMessage; body: Array<Position>; }> listDeliveryPositions(settle)

List all positions of a user

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
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

Get single position

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
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
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const contract = "BTC_USDT_20200814"; // string | Futures contract
const change = "0.01"; // string | Margin change. Use positive number to increase margin, negative number otherwise.
api.updateDeliveryPositionMargin(settle, contract, change)
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
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
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
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
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

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const status = "open"; // 'open' | 'finished' | Only list the orders with this status
const opts = {
  'contract': "BTC_USDT_20200814", // string | Futures contract
  'limit': 100, // number | Maximum number of records to be returned in a single list
  'offset': 0, // number | List offset, starting from 0
  'lastId': "12345", // string | Specify list staring point using the `id` of last record in previous list-query results
  'countTotal': 0 // 0 | 1 | Whether to return total number matched. Default to 0(no return)
};
api.listDeliveryOrders(settle, status, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **status** | **Status**| Only list the orders with this status | [default to undefined]
 **contract** | **string**| Futures contract | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0 | [optional] [default to 0]
 **lastId** | **string**| Specify list staring point using the &#x60;id&#x60; of last record in previous list-query results | [optional] [default to undefined]
 **countTotal** | **CountTotal**| Whether to return total number matched. Default to 0(no return) | [optional] [default to 0]

### Return type

Promise<{ response: AxiosResponse; body: Array<FuturesOrder>; }> [FuturesOrder](FuturesOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createDeliveryOrder

> Promise<{ response: http.IncomingMessage; body: FuturesOrder; }> createDeliveryOrder(settle, futuresOrder)

Create a futures order

Zero-filled order cannot be retrieved 10 minutes after order cancellation

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
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

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const contract = "BTC_USDT_20200814"; // string | Futures contract
const opts = {
  'side': "ask" // 'ask' | 'bid' | All bids or asks. Both included if not specified
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
 **side** | **Side**| All bids or asks. Both included if not specified | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<FuturesOrder>; }> [FuturesOrder](FuturesOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDeliveryOrder

> Promise<{ response: http.IncomingMessage; body: FuturesOrder; }> getDeliveryOrder(settle, orderId)

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

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const orderId = "12345"; // string | Retrieve the data of the order with the specified ID
api.getDeliveryOrder(settle, orderId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **orderId** | **string**| Retrieve the data of the order with the specified ID | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: FuturesOrder; }> [FuturesOrder](FuturesOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## cancelDeliveryOrder

> Promise<{ response: http.IncomingMessage; body: FuturesOrder; }> cancelDeliveryOrder(settle, orderId)

Cancel a single order

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const orderId = "12345"; // string | Retrieve the data of the order with the specified ID
api.cancelDeliveryOrder(settle, orderId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **Settle**| Settle currency | [default to undefined]
 **orderId** | **string**| Retrieve the data of the order with the specified ID | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: FuturesOrder; }> [FuturesOrder](FuturesOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getMyDeliveryTrades

> Promise<{ response: http.IncomingMessage; body: Array<MyFuturesTrade>; }> getMyDeliveryTrades(settle, opts)

List personal trading history

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const opts = {
  'contract': "BTC_USDT_20200814", // string | Futures contract
  'order': 12345, // number | Futures order ID, return related data only if specified
  'limit': 100, // number | Maximum number of records to be returned in a single list
  'offset': 0, // number | List offset, starting from 0
  'lastId': "12345", // string | Specify list staring point using the `id` of last record in previous list-query results
  'countTotal': 0 // 0 | 1 | Whether to return total number matched. Default to 0(no return)
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
 **limit** | **number**| Maximum number of records to be returned in a single list | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0 | [optional] [default to 0]
 **lastId** | **string**| Specify list staring point using the &#x60;id&#x60; of last record in previous list-query results | [optional] [default to undefined]
 **countTotal** | **CountTotal**| Whether to return total number matched. Default to 0(no return) | [optional] [default to 0]

### Return type

Promise<{ response: AxiosResponse; body: Array<MyFuturesTrade>; }> [MyFuturesTrade](MyFuturesTrade.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listDeliveryPositionClose

> Promise<{ response: http.IncomingMessage; body: Array<PositionClose>; }> listDeliveryPositionClose(settle, opts)

List position close history

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const opts = {
  'contract': "BTC_USDT_20200814", // string | Futures contract
  'limit': 100 // number | Maximum number of records to be returned in a single list
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
 **limit** | **number**| Maximum number of records to be returned in a single list | [optional] [default to 100]

### Return type

Promise<{ response: AxiosResponse; body: Array<PositionClose>; }> [PositionClose](PositionClose.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listDeliveryLiquidates

> Promise<{ response: http.IncomingMessage; body: Array<FuturesLiquidate>; }> listDeliveryLiquidates(settle, opts)

List liquidation history

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const opts = {
  'contract': "BTC_USDT_20200814", // string | Futures contract
  'limit': 100, // number | Maximum number of records to be returned in a single list
  'at': 0 // number | Specify a liquidation timestamp
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
 **limit** | **number**| Maximum number of records to be returned in a single list | [optional] [default to 100]
 **at** | **number**| Specify a liquidation timestamp | [optional] [default to 0]

### Return type

Promise<{ response: AxiosResponse; body: Array<FuturesLiquidate>; }> [FuturesLiquidate](FuturesLiquidate.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listDeliverySettlements

> Promise<{ response: http.IncomingMessage; body: Array<DeliverySettlement>; }> listDeliverySettlements(settle, opts)

List settlement history

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | 'usd' | Settle currency
const opts = {
  'contract': "BTC_USDT_20200814", // string | Futures contract
  'limit': 100, // number | Maximum number of records to be returned in a single list
  'at': 0 // number | Specify a settlement timestamp
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
 **limit** | **number**| Maximum number of records to be returned in a single list | [optional] [default to 100]
 **at** | **number**| Specify a settlement timestamp | [optional] [default to 0]

### Return type

Promise<{ response: AxiosResponse; body: Array<DeliverySettlement>; }> [DeliverySettlement](DeliverySettlement.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listPriceTriggeredDeliveryOrders

> Promise<{ response: http.IncomingMessage; body: Array<FuturesPriceTriggeredOrder>; }> listPriceTriggeredDeliveryOrders(settle, status, opts)

List all auto orders

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'usdt' | 'btc' | Settle currency
const status = "status_example"; // 'open' | 'finished' | Only list the orders with this status
const opts = {
  'contract': "BTC_USDT", // string | Futures contract, return related data only if specified
  'limit': 100, // number | Maximum number of records to be returned in a single list
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

## createPriceTriggeredDeliveryOrder

> Promise<{ response: http.IncomingMessage; body: TriggerOrderResponse; }> createPriceTriggeredDeliveryOrder(settle, futuresPriceTriggeredOrder)

Create a price-triggered order

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'usdt' | 'btc' | Settle currency
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

Cancel all open orders

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'usdt' | 'btc' | Settle currency
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

Get a single order

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'usdt' | 'btc' | Settle currency
const orderId = "orderId_example"; // string | Retrieve the data of the order with the specified ID
api.getPriceTriggeredDeliveryOrder(settle, orderId)
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

## cancelPriceTriggeredDeliveryOrder

> Promise<{ response: http.IncomingMessage; body: FuturesPriceTriggeredOrder; }> cancelPriceTriggeredDeliveryOrder(settle, orderId)

Cancel a single order

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'usdt' | 'btc' | Settle currency
const orderId = "orderId_example"; // string | Retrieve the data of the order with the specified ID
api.cancelPriceTriggeredDeliveryOrder(settle, orderId)
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
