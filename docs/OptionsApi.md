# OptionsApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listOptionsUnderlyings**](OptionsApi.md#listOptionsUnderlyings) | **GET** /options/underlyings | List all underlyings
[**listOptionsExpirations**](OptionsApi.md#listOptionsExpirations) | **GET** /options/expirations | List all expiration times
[**listOptionsContracts**](OptionsApi.md#listOptionsContracts) | **GET** /options/contracts | List all the contracts with specified underlying and expiration time
[**getOptionsContract**](OptionsApi.md#getOptionsContract) | **GET** /options/contracts/{contract} | Query specified contract detail
[**listOptionsSettlements**](OptionsApi.md#listOptionsSettlements) | **GET** /options/settlements | List settlement history
[**getOptionsSettlement**](OptionsApi.md#getOptionsSettlement) | **GET** /options/settlements/{contract} | Get specified contract\&#39;s settlement
[**listMyOptionsSettlements**](OptionsApi.md#listMyOptionsSettlements) | **GET** /options/my_settlements | List my options settlements
[**listOptionsOrderBook**](OptionsApi.md#listOptionsOrderBook) | **GET** /options/order_book | Futures order book
[**listOptionsTickers**](OptionsApi.md#listOptionsTickers) | **GET** /options/tickers | List tickers of options contracts
[**listOptionsUnderlyingTickers**](OptionsApi.md#listOptionsUnderlyingTickers) | **GET** /options/underlying/tickers/{underlying} | Get underlying ticker
[**listOptionsCandlesticks**](OptionsApi.md#listOptionsCandlesticks) | **GET** /options/candlesticks | Get futures candlesticks
[**listOptionsUnderlyingCandlesticks**](OptionsApi.md#listOptionsUnderlyingCandlesticks) | **GET** /options/underlying/candlesticks | Mark price candlesticks of an underlying
[**listOptionsTrades**](OptionsApi.md#listOptionsTrades) | **GET** /options/trades | Options trade history
[**listOptionsAccount**](OptionsApi.md#listOptionsAccount) | **GET** /options/accounts | List options account
[**listOptionsAccountBook**](OptionsApi.md#listOptionsAccountBook) | **GET** /options/account_book | List account changing history
[**listOptionsPositions**](OptionsApi.md#listOptionsPositions) | **GET** /options/positions | List user\&#39;s positions of specified underlying
[**getOptionsPosition**](OptionsApi.md#getOptionsPosition) | **GET** /options/positions/{contract} | Get specified contract position
[**listOptionsPositionClose**](OptionsApi.md#listOptionsPositionClose) | **GET** /options/position_close | List user\&#39;s liquidation history of specified underlying
[**listOptionsOrders**](OptionsApi.md#listOptionsOrders) | **GET** /options/orders | List futures orders
[**createOptionsOrder**](OptionsApi.md#createOptionsOrder) | **POST** /options/orders | Create an options order
[**cancelOptionsOrders**](OptionsApi.md#cancelOptionsOrders) | **DELETE** /options/orders | Cancel all &#x60;open&#x60; orders matched
[**getOptionsOrder**](OptionsApi.md#getOptionsOrder) | **GET** /options/orders/{order_id} | Get a single order
[**cancelOptionsOrder**](OptionsApi.md#cancelOptionsOrder) | **DELETE** /options/orders/{order_id} | Cancel a single order
[**listMyOptionsTrades**](OptionsApi.md#listMyOptionsTrades) | **GET** /options/my_trades | List personal trading history


## listOptionsUnderlyings

> Promise<{ response: http.IncomingMessage; body: Array<OptionsUnderlying>; }> listOptionsUnderlyings()

List all underlyings

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.OptionsApi(client);
api.listOptionsUnderlyings()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: Array<OptionsUnderlying>; }> [OptionsUnderlying](OptionsUnderlying.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listOptionsExpirations

> Promise<{ response: http.IncomingMessage; body: Array<number>; }> listOptionsExpirations(underlying)

List all expiration times

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.OptionsApi(client);
const underlying = "BTC_USDT"; // string | Underlying
api.listOptionsExpirations(underlying)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **underlying** | **string**| Underlying | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<number>; }> [number](number.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listOptionsContracts

> Promise<{ response: http.IncomingMessage; body: Array<OptionsContract>; }> listOptionsContracts(underlying, opts)

List all the contracts with specified underlying and expiration time

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.OptionsApi(client);
const underlying = "BTC_USDT"; // string | Underlying
const opts = {
  'expiration': 1636588800 // number | Unix timestamp of the expiration time
};
api.listOptionsContracts(underlying, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **underlying** | **string**| Underlying | [default to undefined]
 **expiration** | **number**| Unix timestamp of the expiration time | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<OptionsContract>; }> [OptionsContract](OptionsContract.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getOptionsContract

> Promise<{ response: http.IncomingMessage; body: OptionsContract; }> getOptionsContract(contract)

Query specified contract detail

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.OptionsApi(client);
const contract = "BTC_USDT-20211130-65000-C"; // string | 
api.getOptionsContract(contract)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contract** | **string**|  | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: OptionsContract; }> [OptionsContract](OptionsContract.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listOptionsSettlements

> Promise<{ response: http.IncomingMessage; body: Array<OptionsSettlement>; }> listOptionsSettlements(underlying, opts)

List settlement history

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.OptionsApi(client);
const underlying = "BTC_USDT"; // string | Underlying
const opts = {
  'limit': 100, // number | Maximum number of records to be returned in a single list
  'offset': 0, // number | List offset, starting from 0
  'from': 1547706332, // number | Start timestamp
  'to': 1547706332 // number | End timestamp
};
api.listOptionsSettlements(underlying, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **underlying** | **string**| Underlying | [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0 | [optional] [default to 0]
 **from** | **number**| Start timestamp | [optional] [default to undefined]
 **to** | **number**| End timestamp | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<OptionsSettlement>; }> [OptionsSettlement](OptionsSettlement.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getOptionsSettlement

> Promise<{ response: http.IncomingMessage; body: OptionsSettlement; }> getOptionsSettlement(contract, underlying, at)

Get specified contract\&#39;s settlement

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.OptionsApi(client);
const contract = "BTC_USDT-20211130-65000-C"; // string | 
const underlying = "BTC_USDT"; // string | Underlying
const at = 56; // number | 
api.getOptionsSettlement(contract, underlying, at)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contract** | **string**|  | [default to undefined]
 **underlying** | **string**| Underlying | [default to undefined]
 **at** | **number**|  | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: OptionsSettlement; }> [OptionsSettlement](OptionsSettlement.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listMyOptionsSettlements

> Promise<{ response: http.IncomingMessage; body: Array<OptionsMySettlements>; }> listMyOptionsSettlements(underlying, opts)

List my options settlements

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.OptionsApi(client);
const underlying = "BTC_USDT"; // string | Underlying
const opts = {
  'contract': "BTC_USDT-20210916-5000-C", // string | Contract name
  'limit': 100, // number | Maximum number of records to be returned in a single list
  'offset': 0, // number | List offset, starting from 0
  'from': 1547706332, // number | Start timestamp
  'to': 1547706332 // number | End timestamp
};
api.listMyOptionsSettlements(underlying, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **underlying** | **string**| Underlying | [default to undefined]
 **contract** | **string**| Contract name | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0 | [optional] [default to 0]
 **from** | **number**| Start timestamp | [optional] [default to undefined]
 **to** | **number**| End timestamp | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<OptionsMySettlements>; }> [OptionsMySettlements](OptionsMySettlements.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listOptionsOrderBook

> Promise<{ response: http.IncomingMessage; body: FuturesOrderBook; }> listOptionsOrderBook(contract, opts)

Futures order book

Bids will be sorted by price from high to low, while asks sorted reversely

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.OptionsApi(client);
const contract = "BTC_USDT"; // string | Futures contract
const opts = {
  'interval': '0', // '0' | '0.1' | '0.01' | Order depth. 0 means no aggregation is applied. default to 0
  'limit': 10, // number | Maximum number of order depth data in asks or bids
  'withId': false // boolean | Whether the order book update ID will be returned. This ID increases by 1 on every order book update
};
api.listOptionsOrderBook(contract, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

## listOptionsTickers

> Promise<{ response: http.IncomingMessage; body: Array<OptionsTicker>; }> listOptionsTickers(underlying)

List tickers of options contracts

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.OptionsApi(client);
const underlying = "BTC_USDT"; // string | Underlying
api.listOptionsTickers(underlying)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **underlying** | **string**| Underlying | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<OptionsTicker>; }> [OptionsTicker](OptionsTicker.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listOptionsUnderlyingTickers

> Promise<{ response: http.IncomingMessage; body: OptionsUnderlyingTicker; }> listOptionsUnderlyingTickers(underlying)

Get underlying ticker

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.OptionsApi(client);
const underlying = "BTC_USDT"; // string | Underlying
api.listOptionsUnderlyingTickers(underlying)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **underlying** | **string**| Underlying | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: OptionsUnderlyingTicker; }> [OptionsUnderlyingTicker](OptionsUnderlyingTicker.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listOptionsCandlesticks

> Promise<{ response: http.IncomingMessage; body: Array<FuturesCandlestick>; }> listOptionsCandlesticks(contract, opts)

Get futures candlesticks

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.OptionsApi(client);
const contract = "BTC_USDT"; // string | Futures contract
const opts = {
  'limit': 100, // number | Maximum number of records to be returned in a single list
  'from': 1547706332, // number | Start timestamp
  'to': 1547706332, // number | End timestamp
  'interval': '5m' // '1m' | '5m' | '15m' | '30m' | '1h' | Interval time between data points
};
api.listOptionsCandlesticks(contract, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contract** | **string**| Futures contract | [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list | [optional] [default to 100]
 **from** | **number**| Start timestamp | [optional] [default to undefined]
 **to** | **number**| End timestamp | [optional] [default to undefined]
 **interval** | **Interval**| Interval time between data points | [optional] [default to &#39;5m&#39;]

### Return type

Promise<{ response: AxiosResponse; body: Array<FuturesCandlestick>; }> [FuturesCandlestick](FuturesCandlestick.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listOptionsUnderlyingCandlesticks

> Promise<{ response: http.IncomingMessage; body: Array<FuturesCandlestick>; }> listOptionsUnderlyingCandlesticks(underlying, opts)

Mark price candlesticks of an underlying

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.OptionsApi(client);
const underlying = "BTC_USDT"; // string | Underlying
const opts = {
  'limit': 100, // number | Maximum number of records to be returned in a single list
  'from': 1547706332, // number | Start timestamp
  'to': 1547706332, // number | End timestamp
  'interval': '5m' // '1m' | '5m' | '15m' | '30m' | '1h' | Interval time between data points
};
api.listOptionsUnderlyingCandlesticks(underlying, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **underlying** | **string**| Underlying | [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list | [optional] [default to 100]
 **from** | **number**| Start timestamp | [optional] [default to undefined]
 **to** | **number**| End timestamp | [optional] [default to undefined]
 **interval** | **Interval**| Interval time between data points | [optional] [default to &#39;5m&#39;]

### Return type

Promise<{ response: AxiosResponse; body: Array<FuturesCandlestick>; }> [FuturesCandlestick](FuturesCandlestick.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listOptionsTrades

> Promise<{ response: http.IncomingMessage; body: Array<FuturesTrade>; }> listOptionsTrades(opts)

Options trade history

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.OptionsApi(client);
const opts = {
  'contract': "BTC_USDT-20210916-5000-C", // string | Contract name
  'type': "1546935600", // string | `C` is call, while `P` is put
  'limit': 100, // number | Maximum number of records to be returned in a single list
  'offset': 0, // number | List offset, starting from 0
  'from': 1547706332, // number | Start timestamp
  'to': 1547706332 // number | End timestamp
};
api.listOptionsTrades(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contract** | **string**| Contract name | [optional] [default to undefined]
 **type** | **string**| &#x60;C&#x60; is call, while &#x60;P&#x60; is put | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0 | [optional] [default to 0]
 **from** | **number**| Start timestamp | [optional] [default to undefined]
 **to** | **number**| End timestamp | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<FuturesTrade>; }> [FuturesTrade](FuturesTrade.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listOptionsAccount

> Promise<{ response: http.IncomingMessage; body: OptionsAccount; }> listOptionsAccount()

List options account

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.OptionsApi(client);
api.listOptionsAccount()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: OptionsAccount; }> [OptionsAccount](OptionsAccount.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listOptionsAccountBook

> Promise<{ response: http.IncomingMessage; body: Array<OptionsAccountBook>; }> listOptionsAccountBook(opts)

List account changing history

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.OptionsApi(client);
const opts = {
  'limit': 100, // number | Maximum number of records to be returned in a single list
  'offset': 0, // number | List offset, starting from 0
  'from': 1547706332, // number | Start timestamp
  'to': 1547706332, // number | End timestamp
  'type': "dnw" // 'dnw' | 'prem' | 'fee' | 'refr' | 'set' | Changing Type: - dnw: Deposit & Withdraw - prem: Trading premium - fee: Trading fee - refr: Referrer rebate - set: settlement PNL 
};
api.listOptionsAccountBook(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **number**| Maximum number of records to be returned in a single list | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0 | [optional] [default to 0]
 **from** | **number**| Start timestamp | [optional] [default to undefined]
 **to** | **number**| End timestamp | [optional] [default to undefined]
 **type** | **Type**| Changing Type: - dnw: Deposit &amp; Withdraw - prem: Trading premium - fee: Trading fee - refr: Referrer rebate - set: settlement PNL  | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<OptionsAccountBook>; }> [OptionsAccountBook](OptionsAccountBook.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listOptionsPositions

> Promise<{ response: http.IncomingMessage; body: Array<OptionsPosition>; }> listOptionsPositions(opts)

List user\&#39;s positions of specified underlying

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.OptionsApi(client);
const opts = {
  'underlying': "BTC_USDT" // string | Underlying
};
api.listOptionsPositions(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **underlying** | **string**| Underlying | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<OptionsPosition>; }> [OptionsPosition](OptionsPosition.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getOptionsPosition

> Promise<{ response: http.IncomingMessage; body: OptionsPosition; }> getOptionsPosition(contract)

Get specified contract position

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.OptionsApi(client);
const contract = "BTC_USDT-20211130-65000-C"; // string | 
api.getOptionsPosition(contract)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contract** | **string**|  | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: OptionsPosition; }> [OptionsPosition](OptionsPosition.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listOptionsPositionClose

> Promise<{ response: http.IncomingMessage; body: Array<OptionsPositionClose>; }> listOptionsPositionClose(underlying, opts)

List user\&#39;s liquidation history of specified underlying

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.OptionsApi(client);
const underlying = "BTC_USDT"; // string | Underlying
const opts = {
  'contract': "BTC_USDT-20210916-5000-C" // string | Contract name
};
api.listOptionsPositionClose(underlying, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **underlying** | **string**| Underlying | [default to undefined]
 **contract** | **string**| Contract name | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<OptionsPositionClose>; }> [OptionsPositionClose](OptionsPositionClose.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listOptionsOrders

> Promise<{ response: http.IncomingMessage; body: Array<OptionsOrder>; }> listOptionsOrders(status, opts)

List futures orders

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.OptionsApi(client);
const status = "open"; // 'open' | 'finished' | Only list the orders with this status
const opts = {
  'contract': "BTC_USDT-20210916-5000-C", // string | Contract name
  'underlying': "BTC_USDT", // string | Underlying
  'limit': 100, // number | Maximum number of records to be returned in a single list
  'offset': 0, // number | List offset, starting from 0
  'from': 1547706332, // number | Start timestamp
  'to': 1547706332 // number | End timestamp
};
api.listOptionsOrders(status, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **Status**| Only list the orders with this status | [default to undefined]
 **contract** | **string**| Contract name | [optional] [default to undefined]
 **underlying** | **string**| Underlying | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0 | [optional] [default to 0]
 **from** | **number**| Start timestamp | [optional] [default to undefined]
 **to** | **number**| End timestamp | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<OptionsOrder>; }> [OptionsOrder](OptionsOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createOptionsOrder

> Promise<{ response: http.IncomingMessage; body: OptionsOrder; }> createOptionsOrder(optionsOrder)

Create an options order

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.OptionsApi(client);
const optionsOrder = new OptionsOrder(); // OptionsOrder | 
api.createOptionsOrder(optionsOrder)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **optionsOrder** | [**OptionsOrder**](OptionsOrder.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: OptionsOrder; }> [OptionsOrder](OptionsOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## cancelOptionsOrders

> Promise<{ response: http.IncomingMessage; body: Array<OptionsOrder>; }> cancelOptionsOrders(opts)

Cancel all &#x60;open&#x60; orders matched

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.OptionsApi(client);
const opts = {
  'contract': "BTC_USDT-20210916-5000-C", // string | Contract name
  'underlying': "BTC_USDT", // string | Underlying
  'side': "ask" // 'ask' | 'bid' | All bids or asks. Both included if not specified
};
api.cancelOptionsOrders(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contract** | **string**| Contract name | [optional] [default to undefined]
 **underlying** | **string**| Underlying | [optional] [default to undefined]
 **side** | **Side**| All bids or asks. Both included if not specified | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<OptionsOrder>; }> [OptionsOrder](OptionsOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getOptionsOrder

> Promise<{ response: http.IncomingMessage; body: OptionsOrder; }> getOptionsOrder(orderId)

Get a single order

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.OptionsApi(client);
const orderId = 12345; // number | Order ID returned on successful order creation
api.getOptionsOrder(orderId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **number**| Order ID returned on successful order creation | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: OptionsOrder; }> [OptionsOrder](OptionsOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## cancelOptionsOrder

> Promise<{ response: http.IncomingMessage; body: OptionsOrder; }> cancelOptionsOrder(orderId)

Cancel a single order

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.OptionsApi(client);
const orderId = 12345; // number | Order ID returned on successful order creation
api.cancelOptionsOrder(orderId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **number**| Order ID returned on successful order creation | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: OptionsOrder; }> [OptionsOrder](OptionsOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listMyOptionsTrades

> Promise<{ response: http.IncomingMessage; body: Array<OptionsMyTrade>; }> listMyOptionsTrades(underlying, opts)

List personal trading history

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.OptionsApi(client);
const underlying = "BTC_USDT"; // string | Underlying
const opts = {
  'contract': "BTC_USDT-20210916-5000-C", // string | Contract name
  'limit': 100, // number | Maximum number of records to be returned in a single list
  'offset': 0, // number | List offset, starting from 0
  'from': 1547706332, // number | Start timestamp
  'to': 1547706332 // number | End timestamp
};
api.listMyOptionsTrades(underlying, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **underlying** | **string**| Underlying | [default to undefined]
 **contract** | **string**| Contract name | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0 | [optional] [default to 0]
 **from** | **number**| Start timestamp | [optional] [default to undefined]
 **to** | **number**| End timestamp | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<OptionsMyTrade>; }> [OptionsMyTrade](OptionsMyTrade.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
