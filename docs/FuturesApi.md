# GateApi.FuturesApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelFuturesOrder**](FuturesApi.md#cancelFuturesOrder) | **DELETE** /futures/{settle}/orders/{order_id} | Cancel a single order
[**cancelFuturesOrders**](FuturesApi.md#cancelFuturesOrders) | **DELETE** /futures/{settle}/orders | Cancel all &#x60;open&#x60; orders matched
[**cancelPriceTriggeredOrder**](FuturesApi.md#cancelPriceTriggeredOrder) | **DELETE** /futures/{settle}/price_orders/{order_id} | Cancel a single order
[**cancelPriceTriggeredOrderList**](FuturesApi.md#cancelPriceTriggeredOrderList) | **DELETE** /futures/{settle}/price_orders | Cancel all open orders
[**createFuturesOrder**](FuturesApi.md#createFuturesOrder) | **POST** /futures/{settle}/orders | Create a futures order
[**createPriceTriggeredOrder**](FuturesApi.md#createPriceTriggeredOrder) | **POST** /futures/{settle}/price_orders | Create a price-triggered order
[**getFuturesContract**](FuturesApi.md#getFuturesContract) | **GET** /futures/{settle}/contracts/{contract} | Get a single contract
[**getFuturesOrder**](FuturesApi.md#getFuturesOrder) | **GET** /futures/{settle}/orders/{order_id} | Get a single order
[**getMyTrades**](FuturesApi.md#getMyTrades) | **GET** /futures/{settle}/my_trades | List personal trading history
[**getPosition**](FuturesApi.md#getPosition) | **GET** /futures/{settle}/positions/{contract} | Get single position
[**getPriceTriggeredOrder**](FuturesApi.md#getPriceTriggeredOrder) | **GET** /futures/{settle}/price_orders/{order_id} | Get a single order
[**listFuturesAccountBook**](FuturesApi.md#listFuturesAccountBook) | **GET** /futures/{settle}/account_book | Query account book
[**listFuturesAccounts**](FuturesApi.md#listFuturesAccounts) | **GET** /futures/{settle}/accounts | Query futures account
[**listFuturesCandlesticks**](FuturesApi.md#listFuturesCandlesticks) | **GET** /futures/{settle}/candlesticks | Get futures candlesticks
[**listFuturesContracts**](FuturesApi.md#listFuturesContracts) | **GET** /futures/{settle}/contracts | List all futures contracts
[**listFuturesFundingRateHistory**](FuturesApi.md#listFuturesFundingRateHistory) | **GET** /futures/{settle}/funding_rate | Funding rate history
[**listFuturesInsuranceLedger**](FuturesApi.md#listFuturesInsuranceLedger) | **GET** /futures/{settle}/insurance | Futures insurance balance history
[**listFuturesOrderBook**](FuturesApi.md#listFuturesOrderBook) | **GET** /futures/{settle}/order_book | Futures order book
[**listFuturesOrders**](FuturesApi.md#listFuturesOrders) | **GET** /futures/{settle}/orders | List futures orders
[**listFuturesTickers**](FuturesApi.md#listFuturesTickers) | **GET** /futures/{settle}/tickers | List futures tickers
[**listFuturesTrades**](FuturesApi.md#listFuturesTrades) | **GET** /futures/{settle}/trades | Futures trading history
[**listLiquidates**](FuturesApi.md#listLiquidates) | **GET** /futures/{settle}/liquidates | List liquidation history
[**listPositionClose**](FuturesApi.md#listPositionClose) | **GET** /futures/{settle}/position_close | List position close history
[**listPositions**](FuturesApi.md#listPositions) | **GET** /futures/{settle}/positions | List all positions of a user
[**listPriceTriggeredOrders**](FuturesApi.md#listPriceTriggeredOrders) | **GET** /futures/{settle}/price_orders | List all auto orders
[**updatePositionLeverage**](FuturesApi.md#updatePositionLeverage) | **POST** /futures/{settle}/positions/{contract}/leverage | Update position leverage
[**updatePositionMargin**](FuturesApi.md#updatePositionMargin) | **POST** /futures/{settle}/positions/{contract}/margin | Update position margin
[**updatePositionRiskLimit**](FuturesApi.md#updatePositionRiskLimit) | **POST** /futures/{settle}/positions/{contract}/risk_limit | Update position risk limit


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
const settle = btc; // 'btc' | 'usdt' | Settle currency
const orderId = 12345; // string | ID returned on order successfully being created
api.cancelFuturesOrder(settle, orderId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **&#39;btc&#39; | &#39;usdt&#39;**| Settle currency | [default to &#39;btc&#39;]
 **orderId** | **string**| ID returned on order successfully being created | [default to undefined]

### Return type

Promise<{ response: http.IncomingMessage; body: FuturesOrder; }(FuturesOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## cancelFuturesOrders

> Promise<{ response: http.IncomingMessage; body: Array<FuturesOrder>; }> cancelFuturesOrders(settle, contract, opts)

Cancel all &#x60;open&#x60; orders matched

Zero-fill order cannot be retrieved 60 seconds after cancellation

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = btc; // 'btc' | 'usdt' | Settle currency
const contract = BTC_USD; // string | Futures contract
const opts = {
  'side': ask // 'ask' | 'bid' | All bids or asks. Both included in not specified
};
api.cancelFuturesOrders(settle, contract, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **&#39;btc&#39; | &#39;usdt&#39;**| Settle currency | [default to &#39;btc&#39;]
 **contract** | **string**| Futures contract | [default to undefined]
 **side** | **&#39;ask&#39; | &#39;bid&#39;**| All bids or asks. Both included in not specified | [optional] [default to undefined]

### Return type

Promise<{ response: http.IncomingMessage; body: Array<FuturesOrder>; }(FuturesOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## cancelPriceTriggeredOrder

> Promise<{ response: http.IncomingMessage; body: FuturesPriceTriggeredOrder; }> cancelPriceTriggeredOrder(settle, orderId)

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
const settle = btc; // 'btc' | 'usdt' | Settle currency
const orderId = orderId_example; // string | ID returned on order successfully being created
api.cancelPriceTriggeredOrder(settle, orderId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **&#39;btc&#39; | &#39;usdt&#39;**| Settle currency | [default to &#39;btc&#39;]
 **orderId** | **string**| ID returned on order successfully being created | [default to undefined]

### Return type

Promise<{ response: http.IncomingMessage; body: FuturesPriceTriggeredOrder; }(FuturesPriceTriggeredOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
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
const settle = btc; // 'btc' | 'usdt' | Settle currency
const contract = BTC_USD; // string | Futures contract
api.cancelPriceTriggeredOrderList(settle, contract)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **&#39;btc&#39; | &#39;usdt&#39;**| Settle currency | [default to &#39;btc&#39;]
 **contract** | **string**| Futures contract | [default to undefined]

### Return type

Promise<{ response: http.IncomingMessage; body: Array<FuturesPriceTriggeredOrder>; }(FuturesPriceTriggeredOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createFuturesOrder

> Promise<{ response: http.IncomingMessage; body: FuturesOrder; }> createFuturesOrder(settle, futuresOrder)

Create a futures order

Zero-fill order cannot be retrieved 60 seconds after cancellation

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = btc; // 'btc' | 'usdt' | Settle currency
const futuresOrder = {"id":15675394,"user":100000,"contract":"BTC_USD","create_time":1546569968,"size":6024,"iceberg":0,"left":6024,"price":"3765","fill_price":"0","mkfr":"-0.00025","tkfr":"0.00075","tif":"gtc","refu":0,"is_reduce_only":false,"is_close":false,"is_liq":false,"text":"t-my-custom-id","status":"finished","finish_time":1514764900,"finish_as":"cancelled"}; // FuturesOrder | 
api.createFuturesOrder(settle, futuresOrder)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **&#39;btc&#39; | &#39;usdt&#39;**| Settle currency | [default to &#39;btc&#39;]
 **futuresOrder** | [**FuturesOrder**](FuturesOrder.md)|  | 

### Return type

Promise<{ response: http.IncomingMessage; body: FuturesOrder; }(FuturesOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
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
const settle = btc; // 'btc' | 'usdt' | Settle currency
const futuresPriceTriggeredOrder = {"initial":{"contract":"BTC_USD","size":100,"price":"5.03","close":false,"tif":"gtc","text":"web"},"trigger":{"strategy_type":0,"price_type":0,"price":"3000","rule":1,"expiration":86400},"id":1283293,"user":1234,"create_time":1514764800,"finish_time":1514764900,"trade_id":13566,"status":"finished","finish_as":"cancelled","reason":""}; // FuturesPriceTriggeredOrder | 
api.createPriceTriggeredOrder(settle, futuresPriceTriggeredOrder)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **&#39;btc&#39; | &#39;usdt&#39;**| Settle currency | [default to &#39;btc&#39;]
 **futuresPriceTriggeredOrder** | [**FuturesPriceTriggeredOrder**](FuturesPriceTriggeredOrder.md)|  | 

### Return type

Promise<{ response: http.IncomingMessage; body: TriggerOrderResponse; }(TriggerOrderResponse.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
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
const settle = btc; // 'btc' | 'usdt' | Settle currency
const contract = BTC_USD; // string | Futures contract
api.getFuturesContract(settle, contract)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **&#39;btc&#39; | &#39;usdt&#39;**| Settle currency | [default to &#39;btc&#39;]
 **contract** | **string**| Futures contract | [default to undefined]

### Return type

Promise<{ response: http.IncomingMessage; body: Contract; }(Contract.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getFuturesOrder

> Promise<{ response: http.IncomingMessage; body: FuturesOrder; }> getFuturesOrder(settle, orderId)

Get a single order

Zero-fill order cannot be retrieved 60 seconds after cancellation

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = btc; // 'btc' | 'usdt' | Settle currency
const orderId = 12345; // string | ID returned on order successfully being created
api.getFuturesOrder(settle, orderId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **&#39;btc&#39; | &#39;usdt&#39;**| Settle currency | [default to &#39;btc&#39;]
 **orderId** | **string**| ID returned on order successfully being created | [default to undefined]

### Return type

Promise<{ response: http.IncomingMessage; body: FuturesOrder; }(FuturesOrder.md)

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
const settle = btc; // 'btc' | 'usdt' | Settle currency
const opts = {
  'contract': BTC_USD, // string | Futures contract, return related data only if specified
  'order': 12345, // number | Futures order ID, return related data only if specified
  'limit': 100, // number | Maximum number of records returned in one list
  'offset': 0, // number | List offset, starting from 0
  'lastId': 12345, // string | Specify list staring point using the `id` of last record in previous list-query results
  'countTotal': 0 // 0 | 1 | Whether to return total number matched. Default to 0(no return)
};
api.getMyTrades(settle, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **&#39;btc&#39; | &#39;usdt&#39;**| Settle currency | [default to &#39;btc&#39;]
 **contract** | **string**| Futures contract, return related data only if specified | [optional] [default to undefined]
 **order** | **number**| Futures order ID, return related data only if specified | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records returned in one list | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0 | [optional] [default to 0]
 **lastId** | **string**| Specify list staring point using the &#x60;id&#x60; of last record in previous list-query results | [optional] [default to undefined]
 **countTotal** | **0 | 1**| Whether to return total number matched. Default to 0(no return) | [optional] [default to 0]

### Return type

Promise<{ response: http.IncomingMessage; body: Array<MyFuturesTrade>; }(MyFuturesTrade.md)

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
const settle = btc; // 'btc' | 'usdt' | Settle currency
const contract = BTC_USD; // string | Futures contract
api.getPosition(settle, contract)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **&#39;btc&#39; | &#39;usdt&#39;**| Settle currency | [default to &#39;btc&#39;]
 **contract** | **string**| Futures contract | [default to undefined]

### Return type

Promise<{ response: http.IncomingMessage; body: Position; }(Position.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getPriceTriggeredOrder

> Promise<{ response: http.IncomingMessage; body: FuturesPriceTriggeredOrder; }> getPriceTriggeredOrder(settle, orderId)

Get a single order

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = btc; // 'btc' | 'usdt' | Settle currency
const orderId = orderId_example; // string | ID returned on order successfully being created
api.getPriceTriggeredOrder(settle, orderId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **&#39;btc&#39; | &#39;usdt&#39;**| Settle currency | [default to &#39;btc&#39;]
 **orderId** | **string**| ID returned on order successfully being created | [default to undefined]

### Return type

Promise<{ response: http.IncomingMessage; body: FuturesPriceTriggeredOrder; }(FuturesPriceTriggeredOrder.md)

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
const settle = btc; // 'btc' | 'usdt' | Settle currency
const opts = {
  'limit': 100, // number | Maximum number of records returned in one list
  'from': 1547706332, // number | Start timestamp
  'to': 1547706332, // number | End timestamp
  'type': dnw // 'dnw' | 'pnl' | 'fee' | 'refr' | 'fund' | 'point_dnw' | 'point_fee' | 'point_refr' | Changing Type: - dnw: Deposit & Withdraw - pnl: Profit & Loss by reducing position - fee: Trading fee - refr: Referrer rebate - fund: Funding - point_dnw: POINT Deposit & Withdraw - point_fee: POINT Trading fee - point_refr: POINT Referrer rebate
};
api.listFuturesAccountBook(settle, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **&#39;btc&#39; | &#39;usdt&#39;**| Settle currency | [default to &#39;btc&#39;]
 **limit** | **number**| Maximum number of records returned in one list | [optional] [default to 100]
 **from** | **number**| Start timestamp | [optional] [default to undefined]
 **to** | **number**| End timestamp | [optional] [default to undefined]
 **type** | **&#39;dnw&#39; | &#39;pnl&#39; | &#39;fee&#39; | &#39;refr&#39; | &#39;fund&#39; | &#39;point_dnw&#39; | &#39;point_fee&#39; | &#39;point_refr&#39;**| Changing Type: - dnw: Deposit &amp; Withdraw - pnl: Profit &amp; Loss by reducing position - fee: Trading fee - refr: Referrer rebate - fund: Funding - point_dnw: POINT Deposit &amp; Withdraw - point_fee: POINT Trading fee - point_refr: POINT Referrer rebate | [optional] [default to undefined]

### Return type

Promise<{ response: http.IncomingMessage; body: Array<FuturesAccountBook>; }(FuturesAccountBook.md)

### Authorization

[apiv4](../README.md#apiv4)

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
const settle = btc; // 'btc' | 'usdt' | Settle currency
api.listFuturesAccounts(settle)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **&#39;btc&#39; | &#39;usdt&#39;**| Settle currency | [default to &#39;btc&#39;]

### Return type

Promise<{ response: http.IncomingMessage; body: FuturesAccount; }(FuturesAccount.md)

### Authorization

[apiv4](../README.md#apiv4)

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
const settle = btc; // 'btc' | 'usdt' | Settle currency
const contract = BTC_USD; // string | Futures contract
const opts = {
  'from': 1546905600, // number | Start time of candlesticks, formatted in Unix timestamp in seconds. Default to`to - 100 * interval` if not specified
  'to': 1546935600, // number | End time of candlesticks, formatted in Unix timestamp in seconds. Default to current time
  'limit': 100, // number | Maximum recent data points returned. `limit` is conflicted with `from` and `to`. If either `from` or `to` is specified, request will be rejected.
  'interval': 5m // '10s' | '1m' | '5m' | '15m' | '30m' | '1h' | '4h' | '8h' | '1d' | '7d' | Interval time between data points
};
api.listFuturesCandlesticks(settle, contract, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **&#39;btc&#39; | &#39;usdt&#39;**| Settle currency | [default to &#39;btc&#39;]
 **contract** | **string**| Futures contract | [default to undefined]
 **from** | **number**| Start time of candlesticks, formatted in Unix timestamp in seconds. Default to&#x60;to - 100 * interval&#x60; if not specified | [optional] [default to undefined]
 **to** | **number**| End time of candlesticks, formatted in Unix timestamp in seconds. Default to current time | [optional] [default to undefined]
 **limit** | **number**| Maximum recent data points returned. &#x60;limit&#x60; is conflicted with &#x60;from&#x60; and &#x60;to&#x60;. If either &#x60;from&#x60; or &#x60;to&#x60; is specified, request will be rejected. | [optional] [default to 100]
 **interval** | **&#39;10s&#39; | &#39;1m&#39; | &#39;5m&#39; | &#39;15m&#39; | &#39;30m&#39; | &#39;1h&#39; | &#39;4h&#39; | &#39;8h&#39; | &#39;1d&#39; | &#39;7d&#39;**| Interval time between data points | [optional] [default to &#39;5m&#39;]

### Return type

Promise<{ response: http.IncomingMessage; body: Array<FuturesCandlestick>; }(FuturesCandlestick.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

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
const settle = btc; // 'btc' | 'usdt' | Settle currency
api.listFuturesContracts(settle)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **&#39;btc&#39; | &#39;usdt&#39;**| Settle currency | [default to &#39;btc&#39;]

### Return type

Promise<{ response: http.IncomingMessage; body: Array<Contract>; }(Contract.md)

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
const settle = btc; // 'btc' | 'usdt' | Settle currency
const contract = BTC_USD; // string | Futures contract
const opts = {
  'limit': 100 // number | Maximum number of records returned in one list
};
api.listFuturesFundingRateHistory(settle, contract, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **&#39;btc&#39; | &#39;usdt&#39;**| Settle currency | [default to &#39;btc&#39;]
 **contract** | **string**| Futures contract | [default to undefined]
 **limit** | **number**| Maximum number of records returned in one list | [optional] [default to 100]

### Return type

Promise<{ response: http.IncomingMessage; body: Array<FundingRateRecord>; }(FundingRateRecord.md)

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
const settle = btc; // 'btc' | 'usdt' | Settle currency
const opts = {
  'limit': 100 // number | Maximum number of records returned in one list
};
api.listFuturesInsuranceLedger(settle, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **&#39;btc&#39; | &#39;usdt&#39;**| Settle currency | [default to &#39;btc&#39;]
 **limit** | **number**| Maximum number of records returned in one list | [optional] [default to 100]

### Return type

Promise<{ response: http.IncomingMessage; body: Array<InsuranceRecord>; }(InsuranceRecord.md)

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
const settle = btc; // 'btc' | 'usdt' | Settle currency
const contract = BTC_USD; // string | Futures contract
const opts = {
  'interval': 0, // '0' | '0.1' | '0.01' | Order depth. 0 means no aggregation is applied. default to 0
  'limit': 10 // number | Maximum number of order depth data in asks or bids
};
api.listFuturesOrderBook(settle, contract, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **&#39;btc&#39; | &#39;usdt&#39;**| Settle currency | [default to &#39;btc&#39;]
 **contract** | **string**| Futures contract | [default to undefined]
 **interval** | **&#39;0&#39; | &#39;0.1&#39; | &#39;0.01&#39;**| Order depth. 0 means no aggregation is applied. default to 0 | [optional] [default to &#39;0&#39;]
 **limit** | **number**| Maximum number of order depth data in asks or bids | [optional] [default to 10]

### Return type

Promise<{ response: http.IncomingMessage; body: FuturesOrderBook; }(FuturesOrderBook.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listFuturesOrders

> Promise<{ response: http.IncomingMessage; body: Array<FuturesOrder>; }> listFuturesOrders(settle, contract, status, opts)

List futures orders

Zero-fill order cannot be retrieved 60 seconds after cancellation

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FuturesApi(client);
const settle = btc; // 'btc' | 'usdt' | Settle currency
const contract = BTC_USD; // string | Futures contract
const status = open; // 'open' | 'finished' | List orders based on status
const opts = {
  'limit': 100, // number | Maximum number of records returned in one list
  'offset': 0, // number | List offset, starting from 0
  'lastId': 12345, // string | Specify list staring point using the `id` of last record in previous list-query results
  'countTotal': 0 // 0 | 1 | Whether to return total number matched. Default to 0(no return)
};
api.listFuturesOrders(settle, contract, status, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **&#39;btc&#39; | &#39;usdt&#39;**| Settle currency | [default to &#39;btc&#39;]
 **contract** | **string**| Futures contract | [default to undefined]
 **status** | **&#39;open&#39; | &#39;finished&#39;**| List orders based on status | [default to undefined]
 **limit** | **number**| Maximum number of records returned in one list | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0 | [optional] [default to 0]
 **lastId** | **string**| Specify list staring point using the &#x60;id&#x60; of last record in previous list-query results | [optional] [default to undefined]
 **countTotal** | **0 | 1**| Whether to return total number matched. Default to 0(no return) | [optional] [default to 0]

### Return type

Promise<{ response: http.IncomingMessage; body: Array<FuturesOrder>; }(FuturesOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

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
const settle = btc; // 'btc' | 'usdt' | Settle currency
const opts = {
  'contract': BTC_USD // string | Futures contract, return related data only if specified
};
api.listFuturesTickers(settle, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **&#39;btc&#39; | &#39;usdt&#39;**| Settle currency | [default to &#39;btc&#39;]
 **contract** | **string**| Futures contract, return related data only if specified | [optional] [default to undefined]

### Return type

Promise<{ response: http.IncomingMessage; body: Array<FuturesTicker>; }(FuturesTicker.md)

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
const settle = btc; // 'btc' | 'usdt' | Settle currency
const contract = BTC_USD; // string | Futures contract
const opts = {
  'limit': 100, // number | Maximum number of records returned in one list
  'lastId': 12345, // string | Specify list staring point using the id of last record in previous list-query results  This parameter is deprecated. Use `from` and `to` instead to limit time range
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
 **settle** | **&#39;btc&#39; | &#39;usdt&#39;**| Settle currency | [default to &#39;btc&#39;]
 **contract** | **string**| Futures contract | [default to undefined]
 **limit** | **number**| Maximum number of records returned in one list | [optional] [default to 100]
 **lastId** | **string**| Specify list staring point using the id of last record in previous list-query results  This parameter is deprecated. Use &#x60;from&#x60; and &#x60;to&#x60; instead to limit time range | [optional] [default to undefined]
 **from** | **number**| Specify starting time in Unix seconds. If not specified, &#x60;to&#x60; and &#x60;limit&#x60; will be used to limit response items. If items between &#x60;from&#x60; and &#x60;to&#x60; are more than &#x60;limit&#x60;, only &#x60;limit&#x60; number will be returned.  | [optional] [default to undefined]
 **to** | **number**| Specify end time in Unix seconds, default to current time | [optional] [default to undefined]

### Return type

Promise<{ response: http.IncomingMessage; body: Array<FuturesTrade>; }(FuturesTrade.md)

### Authorization

No authorization required

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
const settle = btc; // 'btc' | 'usdt' | Settle currency
const opts = {
  'contract': BTC_USD, // string | Futures contract, return related data only if specified
  'limit': 100, // number | Maximum number of records returned in one list
  'at': 1546905600 // number | Specify a liquidation timestamp
};
api.listLiquidates(settle, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **&#39;btc&#39; | &#39;usdt&#39;**| Settle currency | [default to &#39;btc&#39;]
 **contract** | **string**| Futures contract, return related data only if specified | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records returned in one list | [optional] [default to 100]
 **at** | **number**| Specify a liquidation timestamp | [optional] [default to 0]

### Return type

Promise<{ response: http.IncomingMessage; body: Array<FuturesLiquidate>; }(FuturesLiquidate.md)

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
const settle = btc; // 'btc' | 'usdt' | Settle currency
const opts = {
  'contract': BTC_USD, // string | Futures contract, return related data only if specified
  'limit': 100 // number | Maximum number of records returned in one list
};
api.listPositionClose(settle, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **&#39;btc&#39; | &#39;usdt&#39;**| Settle currency | [default to &#39;btc&#39;]
 **contract** | **string**| Futures contract, return related data only if specified | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records returned in one list | [optional] [default to 100]

### Return type

Promise<{ response: http.IncomingMessage; body: Array<PositionClose>; }(PositionClose.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listPositions

> Promise<{ response: http.IncomingMessage; body: Array<Position>; }> listPositions(settle)

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
const settle = btc; // 'btc' | 'usdt' | Settle currency
api.listPositions(settle)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **&#39;btc&#39; | &#39;usdt&#39;**| Settle currency | [default to &#39;btc&#39;]

### Return type

Promise<{ response: http.IncomingMessage; body: Array<Position>; }(Position.md)

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
const settle = btc; // 'btc' | 'usdt' | Settle currency
const status = status_example; // 'open' | 'finished' | List orders based on status
const opts = {
  'contract': BTC_USD, // string | Futures contract, return related data only if specified
  'limit': 100, // number | Maximum number of records returned in one list
  'offset': 0 // number | List offset, starting from 0
};
api.listPriceTriggeredOrders(settle, status, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **&#39;btc&#39; | &#39;usdt&#39;**| Settle currency | [default to &#39;btc&#39;]
 **status** | **&#39;open&#39; | &#39;finished&#39;**| List orders based on status | [default to undefined]
 **contract** | **string**| Futures contract, return related data only if specified | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records returned in one list | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0 | [optional] [default to 0]

### Return type

Promise<{ response: http.IncomingMessage; body: Array<FuturesPriceTriggeredOrder>; }(FuturesPriceTriggeredOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updatePositionLeverage

> Promise<{ response: http.IncomingMessage; body: Position; }> updatePositionLeverage(settle, contract, leverage)

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
const settle = btc; // 'btc' | 'usdt' | Settle currency
const contract = BTC_USD; // string | Futures contract
const leverage = 10; // string | New position leverage
api.updatePositionLeverage(settle, contract, leverage)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **&#39;btc&#39; | &#39;usdt&#39;**| Settle currency | [default to &#39;btc&#39;]
 **contract** | **string**| Futures contract | [default to undefined]
 **leverage** | **string**| New position leverage | [default to undefined]

### Return type

Promise<{ response: http.IncomingMessage; body: Position; }(Position.md)

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
const settle = btc; // 'btc' | 'usdt' | Settle currency
const contract = BTC_USD; // string | Futures contract
const change = 0.01; // string | Margin change. Use positive number to increase margin, negative number otherwise.
api.updatePositionMargin(settle, contract, change)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **&#39;btc&#39; | &#39;usdt&#39;**| Settle currency | [default to &#39;btc&#39;]
 **contract** | **string**| Futures contract | [default to undefined]
 **change** | **string**| Margin change. Use positive number to increase margin, negative number otherwise. | [default to undefined]

### Return type

Promise<{ response: http.IncomingMessage; body: Position; }(Position.md)

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
const settle = btc; // 'btc' | 'usdt' | Settle currency
const contract = BTC_USD; // string | Futures contract
const riskLimit = 10; // string | New position risk limit
api.updatePositionRiskLimit(settle, contract, riskLimit)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settle** | **&#39;btc&#39; | &#39;usdt&#39;**| Settle currency | [default to &#39;btc&#39;]
 **contract** | **string**| Futures contract | [default to undefined]
 **riskLimit** | **string**| New position risk limit | [default to undefined]

### Return type

Promise<{ response: http.IncomingMessage; body: Position; }(Position.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
