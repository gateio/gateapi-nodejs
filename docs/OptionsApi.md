# OptionsApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listOptionsUnderlyings**](OptionsApi.md#listOptionsUnderlyings) | **GET** /options/underlyings | List all underlying assets
[**listOptionsExpirations**](OptionsApi.md#listOptionsExpirations) | **GET** /options/expirations | List all expiration dates
[**listOptionsContracts**](OptionsApi.md#listOptionsContracts) | **GET** /options/contracts | List all contracts for specified underlying and expiration date
[**getOptionsContract**](OptionsApi.md#getOptionsContract) | **GET** /options/contracts/{contract} | Query specified contract details
[**listOptionsSettlements**](OptionsApi.md#listOptionsSettlements) | **GET** /options/settlements | List settlement history
[**getOptionsSettlement**](OptionsApi.md#getOptionsSettlement) | **GET** /options/settlements/{contract} | Get specified contract settlement information
[**listMyOptionsSettlements**](OptionsApi.md#listMyOptionsSettlements) | **GET** /options/my_settlements | Query personal settlement records
[**listOptionsOrderBook**](OptionsApi.md#listOptionsOrderBook) | **GET** /options/order_book | Query options contract order book
[**listOptionsTickers**](OptionsApi.md#listOptionsTickers) | **GET** /options/tickers | Query options market ticker information
[**listOptionsUnderlyingTickers**](OptionsApi.md#listOptionsUnderlyingTickers) | **GET** /options/underlying/tickers/{underlying} | Query underlying ticker information
[**listOptionsCandlesticks**](OptionsApi.md#listOptionsCandlesticks) | **GET** /options/candlesticks | Options contract market candlestick chart
[**listOptionsUnderlyingCandlesticks**](OptionsApi.md#listOptionsUnderlyingCandlesticks) | **GET** /options/underlying/candlesticks | Underlying index price candlestick chart
[**listOptionsTrades**](OptionsApi.md#listOptionsTrades) | **GET** /options/trades | Market trade records
[**listOptionsAccount**](OptionsApi.md#listOptionsAccount) | **GET** /options/accounts | Query account information
[**listOptionsAccountBook**](OptionsApi.md#listOptionsAccountBook) | **GET** /options/account_book | Query account change history
[**listOptionsPositions**](OptionsApi.md#listOptionsPositions) | **GET** /options/positions | List user\&#39;s positions of specified underlying
[**getOptionsPosition**](OptionsApi.md#getOptionsPosition) | **GET** /options/positions/{contract} | Get specified contract position
[**listOptionsPositionClose**](OptionsApi.md#listOptionsPositionClose) | **GET** /options/position_close | List user\&#39;s liquidation history of specified underlying
[**listOptionsOrders**](OptionsApi.md#listOptionsOrders) | **GET** /options/orders | List options orders
[**createOptionsOrder**](OptionsApi.md#createOptionsOrder) | **POST** /options/orders | Create an options order
[**cancelOptionsOrders**](OptionsApi.md#cancelOptionsOrders) | **DELETE** /options/orders | Cancel all orders with \&#39;open\&#39; status
[**getOptionsOrder**](OptionsApi.md#getOptionsOrder) | **GET** /options/orders/{order_id} | Query single order details
[**cancelOptionsOrder**](OptionsApi.md#cancelOptionsOrder) | **DELETE** /options/orders/{order_id} | Cancel single order
[**countdownCancelAllOptions**](OptionsApi.md#countdownCancelAllOptions) | **POST** /options/countdown_cancel_all | Countdown cancel orders
[**listMyOptionsTrades**](OptionsApi.md#listMyOptionsTrades) | **GET** /options/my_trades | Query personal trading records
[**getOptionsMMP**](OptionsApi.md#getOptionsMMP) | **GET** /options/mmp | MMP Query.
[**setOptionsMMP**](OptionsApi.md#setOptionsMMP) | **POST** /options/mmp | MMP Settings
[**resetOptionsMMP**](OptionsApi.md#resetOptionsMMP) | **POST** /options/mmp/reset | MMP Reset


## listOptionsUnderlyings

> Promise<{ response: http.IncomingMessage; body: Array<OptionsUnderlying>; }> listOptionsUnderlyings()

List all underlying assets

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

List all expiration dates

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.OptionsApi(client);
const underlying = "BTC_USDT"; // string | Underlying (Obtained by listing underlying endpoint)
api.listOptionsExpirations(underlying)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **underlying** | **string**| Underlying (Obtained by listing underlying endpoint) | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<number>; }> [number](number.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listOptionsContracts

> Promise<{ response: http.IncomingMessage; body: Array<OptionsContract>; }> listOptionsContracts(underlying, opts)

List all contracts for specified underlying and expiration date

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.OptionsApi(client);
const underlying = "BTC_USDT"; // string | Underlying (Obtained by listing underlying endpoint)
const opts = {
  'expiration': 1636588800 // number | Unix timestamp of expiration date
};
api.listOptionsContracts(underlying, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **underlying** | **string**| Underlying (Obtained by listing underlying endpoint) | [default to undefined]
 **expiration** | **number**| Unix timestamp of expiration date | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<OptionsContract>; }> [OptionsContract](OptionsContract.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getOptionsContract

> Promise<{ response: http.IncomingMessage; body: OptionsContract; }> getOptionsContract(contract)

Query specified contract details

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
const underlying = "BTC_USDT"; // string | Underlying (Obtained by listing underlying endpoint)
const opts = {
  'limit': 100, // number | Maximum number of records returned in a single list
  'offset': 0, // number | List offset, starting from 0
  'from': 1547706332, // number | Start timestamp  Specify start time, time format is Unix timestamp. If not specified, it defaults to (the data start time of the time range actually returned by to and limit)
  'to': 1547706332 // number | Termination Timestamp  Specify the end time. If not specified, it defaults to the current time, and the time format is a Unix timestamp
};
api.listOptionsSettlements(underlying, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **underlying** | **string**| Underlying (Obtained by listing underlying endpoint) | [default to undefined]
 **limit** | **number**| Maximum number of records returned in a single list | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0 | [optional] [default to 0]
 **from** | **number**| Start timestamp  Specify start time, time format is Unix timestamp. If not specified, it defaults to (the data start time of the time range actually returned by to and limit) | [optional] [default to undefined]
 **to** | **number**| Termination Timestamp  Specify the end time. If not specified, it defaults to the current time, and the time format is a Unix timestamp | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<OptionsSettlement>; }> [OptionsSettlement](OptionsSettlement.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getOptionsSettlement

> Promise<{ response: http.IncomingMessage; body: OptionsSettlement; }> getOptionsSettlement(contract, underlying, at)

Get specified contract settlement information

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.OptionsApi(client);
const contract = "BTC_USDT-20211130-65000-C"; // string | 
const underlying = "BTC_USDT"; // string | Underlying (Obtained by listing underlying endpoint)
const at = 56; // number | 
api.getOptionsSettlement(contract, underlying, at)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contract** | **string**|  | [default to undefined]
 **underlying** | **string**| Underlying (Obtained by listing underlying endpoint) | [default to undefined]
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

Query personal settlement records

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.OptionsApi(client);
const underlying = "BTC_USDT"; // string | Underlying (Obtained by listing underlying endpoint)
const opts = {
  'contract': "BTC_USDT-20210916-5000-C", // string | Options contract name
  'limit': 100, // number | Maximum number of records returned in a single list
  'offset': 0, // number | List offset, starting from 0
  'from': 1547706332, // number | Start timestamp  Specify start time, time format is Unix timestamp. If not specified, it defaults to (the data start time of the time range actually returned by to and limit)
  'to': 1547706332 // number | Termination Timestamp  Specify the end time. If not specified, it defaults to the current time, and the time format is a Unix timestamp
};
api.listMyOptionsSettlements(underlying, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **underlying** | **string**| Underlying (Obtained by listing underlying endpoint) | [default to undefined]
 **contract** | **string**| Options contract name | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records returned in a single list | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0 | [optional] [default to 0]
 **from** | **number**| Start timestamp  Specify start time, time format is Unix timestamp. If not specified, it defaults to (the data start time of the time range actually returned by to and limit) | [optional] [default to undefined]
 **to** | **number**| Termination Timestamp  Specify the end time. If not specified, it defaults to the current time, and the time format is a Unix timestamp | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<OptionsMySettlements>; }> [OptionsMySettlements](OptionsMySettlements.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listOptionsOrderBook

> Promise<{ response: http.IncomingMessage; body: FuturesOrderBook; }> listOptionsOrderBook(contract, opts)

Query options contract order book

Bids will be sorted by price from high to low, while asks sorted reversely

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.OptionsApi(client);
const contract = "BTC_USDT-20210916-5000-C"; // string | Options contract name
const opts = {
  'interval': '0', // '0' | '0.1' | '0.01' | Price precision for depth aggregation, 0 means no aggregation, defaults to 0 if not specified
  'limit': 10, // number | Number of depth levels
  'withId': false // boolean | Whether to return depth update ID. This ID increments by 1 each time depth changes
};
api.listOptionsOrderBook(contract, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contract** | **string**| Options contract name | [default to undefined]
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

## listOptionsTickers

> Promise<{ response: http.IncomingMessage; body: Array<OptionsTicker>; }> listOptionsTickers(underlying)

Query options market ticker information

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.OptionsApi(client);
const underlying = "BTC_USDT"; // string | Underlying (Obtained by listing underlying endpoint)
api.listOptionsTickers(underlying)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **underlying** | **string**| Underlying (Obtained by listing underlying endpoint) | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<OptionsTicker>; }> [OptionsTicker](OptionsTicker.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listOptionsUnderlyingTickers

> Promise<{ response: http.IncomingMessage; body: OptionsUnderlyingTicker; }> listOptionsUnderlyingTickers(underlying)

Query underlying ticker information

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

> Promise<{ response: http.IncomingMessage; body: Array<OptionsCandlestick>; }> listOptionsCandlesticks(contract, opts)

Options contract market candlestick chart

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.OptionsApi(client);
const contract = "BTC_USDT-20210916-5000-C"; // string | Options contract name
const opts = {
  'limit': 100, // number | Maximum number of records returned in a single list
  'from': 1547706332, // number | Start timestamp  Specify start time, time format is Unix timestamp. If not specified, it defaults to (the data start time of the time range actually returned by to and limit)
  'to': 1547706332, // number | Termination Timestamp  Specify the end time. If not specified, it defaults to the current time, and the time format is a Unix timestamp
  'interval': '5m' // '1m' | '5m' | '15m' | '30m' | '1h' | Time interval between data points
};
api.listOptionsCandlesticks(contract, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contract** | **string**| Options contract name | [default to undefined]
 **limit** | **number**| Maximum number of records returned in a single list | [optional] [default to 100]
 **from** | **number**| Start timestamp  Specify start time, time format is Unix timestamp. If not specified, it defaults to (the data start time of the time range actually returned by to and limit) | [optional] [default to undefined]
 **to** | **number**| Termination Timestamp  Specify the end time. If not specified, it defaults to the current time, and the time format is a Unix timestamp | [optional] [default to undefined]
 **interval** | **Interval**| Time interval between data points | [optional] [default to &#39;5m&#39;]

### Return type

Promise<{ response: AxiosResponse; body: Array<OptionsCandlestick>; }> [OptionsCandlestick](OptionsCandlestick.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listOptionsUnderlyingCandlesticks

> Promise<{ response: http.IncomingMessage; body: Array<FuturesCandlestick>; }> listOptionsUnderlyingCandlesticks(underlying, opts)

Underlying index price candlestick chart

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.OptionsApi(client);
const underlying = "BTC_USDT"; // string | Underlying (Obtained by listing underlying endpoint)
const opts = {
  'limit': 100, // number | Maximum number of records returned in a single list
  'from': 1547706332, // number | Start timestamp  Specify start time, time format is Unix timestamp. If not specified, it defaults to (the data start time of the time range actually returned by to and limit)
  'to': 1547706332, // number | Termination Timestamp  Specify the end time. If not specified, it defaults to the current time, and the time format is a Unix timestamp
  'interval': '5m' // '1m' | '5m' | '15m' | '30m' | '1h' | Time interval between data points
};
api.listOptionsUnderlyingCandlesticks(underlying, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **underlying** | **string**| Underlying (Obtained by listing underlying endpoint) | [default to undefined]
 **limit** | **number**| Maximum number of records returned in a single list | [optional] [default to 100]
 **from** | **number**| Start timestamp  Specify start time, time format is Unix timestamp. If not specified, it defaults to (the data start time of the time range actually returned by to and limit) | [optional] [default to undefined]
 **to** | **number**| Termination Timestamp  Specify the end time. If not specified, it defaults to the current time, and the time format is a Unix timestamp | [optional] [default to undefined]
 **interval** | **Interval**| Time interval between data points | [optional] [default to &#39;5m&#39;]

### Return type

Promise<{ response: AxiosResponse; body: Array<FuturesCandlestick>; }> [FuturesCandlestick](FuturesCandlestick.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listOptionsTrades

> Promise<{ response: http.IncomingMessage; body: Array<FuturesTrade>; }> listOptionsTrades(opts)

Market trade records

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.OptionsApi(client);
const opts = {
  'contract': "BTC_USDT-20210916-5000-C", // string | Options contract name
  'type': "1546935600", // string | `C` for call, `P` for put
  'limit': 100, // number | Maximum number of records returned in a single list
  'offset': 0, // number | List offset, starting from 0
  'from': 1547706332, // number | Start timestamp  Specify start time, time format is Unix timestamp. If not specified, it defaults to (the data start time of the time range actually returned by to and limit)
  'to': 1547706332 // number | Termination Timestamp  Specify the end time. If not specified, it defaults to the current time, and the time format is a Unix timestamp
};
api.listOptionsTrades(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contract** | **string**| Options contract name | [optional] [default to undefined]
 **type** | **string**| &#x60;C&#x60; for call, &#x60;P&#x60; for put | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records returned in a single list | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0 | [optional] [default to 0]
 **from** | **number**| Start timestamp  Specify start time, time format is Unix timestamp. If not specified, it defaults to (the data start time of the time range actually returned by to and limit) | [optional] [default to undefined]
 **to** | **number**| Termination Timestamp  Specify the end time. If not specified, it defaults to the current time, and the time format is a Unix timestamp | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<FuturesTrade>; }> [FuturesTrade](FuturesTrade.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listOptionsAccount

> Promise<{ response: http.IncomingMessage; body: OptionsAccount; }> listOptionsAccount()

Query account information

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

Query account change history

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
  'limit': 100, // number | Maximum number of records returned in a single list
  'offset': 0, // number | List offset, starting from 0
  'from': 1547706332, // number | Start timestamp  Specify start time, time format is Unix timestamp. If not specified, it defaults to (the data start time of the time range actually returned by to and limit)
  'to': 1547706332, // number | Termination Timestamp  Specify the end time. If not specified, it defaults to the current time, and the time format is a Unix timestamp
  'type': "dnw" // 'dnw' | 'prem' | 'fee' | 'refr' | 'set' | Change types: - dnw: Deposit & Withdrawal - prem: Trading premium - fee: Trading fee - refr: Referrer rebate - set: Settlement P&L
};
api.listOptionsAccountBook(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **number**| Maximum number of records returned in a single list | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0 | [optional] [default to 0]
 **from** | **number**| Start timestamp  Specify start time, time format is Unix timestamp. If not specified, it defaults to (the data start time of the time range actually returned by to and limit) | [optional] [default to undefined]
 **to** | **number**| Termination Timestamp  Specify the end time. If not specified, it defaults to the current time, and the time format is a Unix timestamp | [optional] [default to undefined]
 **type** | **Type**| Change types: - dnw: Deposit &amp; Withdrawal - prem: Trading premium - fee: Trading fee - refr: Referrer rebate - set: Settlement P&amp;L | [optional] [default to undefined]

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
const underlying = "BTC_USDT"; // string | Underlying (Obtained by listing underlying endpoint)
const opts = {
  'contract': "BTC_USDT-20210916-5000-C" // string | Options contract name
};
api.listOptionsPositionClose(underlying, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **underlying** | **string**| Underlying (Obtained by listing underlying endpoint) | [default to undefined]
 **contract** | **string**| Options contract name | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<OptionsPositionClose>; }> [OptionsPositionClose](OptionsPositionClose.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listOptionsOrders

> Promise<{ response: http.IncomingMessage; body: Array<OptionsOrder>; }> listOptionsOrders(status, opts)

List options orders

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.OptionsApi(client);
const status = "open"; // 'open' | 'finished' | Query order list based on status
const opts = {
  'contract': "BTC_USDT-20210916-5000-C", // string | Options contract name
  'underlying': "BTC_USDT", // string | Underlying
  'limit': 100, // number | Maximum number of records returned in a single list
  'offset': 0, // number | List offset, starting from 0
  'from': 1547706332, // number | Start timestamp  Specify start time, time format is Unix timestamp. If not specified, it defaults to (the data start time of the time range actually returned by to and limit)
  'to': 1547706332 // number | Termination Timestamp  Specify the end time. If not specified, it defaults to the current time, and the time format is a Unix timestamp
};
api.listOptionsOrders(status, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **Status**| Query order list based on status | [default to undefined]
 **contract** | **string**| Options contract name | [optional] [default to undefined]
 **underlying** | **string**| Underlying | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records returned in a single list | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0 | [optional] [default to 0]
 **from** | **number**| Start timestamp  Specify start time, time format is Unix timestamp. If not specified, it defaults to (the data start time of the time range actually returned by to and limit) | [optional] [default to undefined]
 **to** | **number**| Termination Timestamp  Specify the end time. If not specified, it defaults to the current time, and the time format is a Unix timestamp | [optional] [default to undefined]

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

Cancel all orders with \&#39;open\&#39; status

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
  'contract': "BTC_USDT-20210916-5000-C", // string | Options contract name
  'underlying': "BTC_USDT", // string | Underlying
  'side': "ask" // 'ask' | 'bid' | Specify all bids or all asks, both included if not specified
};
api.cancelOptionsOrders(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contract** | **string**| Options contract name | [optional] [default to undefined]
 **underlying** | **string**| Underlying | [optional] [default to undefined]
 **side** | **Side**| Specify all bids or all asks, both included if not specified | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<OptionsOrder>; }> [OptionsOrder](OptionsOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getOptionsOrder

> Promise<{ response: http.IncomingMessage; body: OptionsOrder; }> getOptionsOrder(orderId)

Query single order details

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.OptionsApi(client);
const orderId = 12345; // number | Order ID returned when order is successfully created
api.getOptionsOrder(orderId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **number**| Order ID returned when order is successfully created | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: OptionsOrder; }> [OptionsOrder](OptionsOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## cancelOptionsOrder

> Promise<{ response: http.IncomingMessage; body: OptionsOrder; }> cancelOptionsOrder(orderId)

Cancel single order

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.OptionsApi(client);
const orderId = 12345; // number | Order ID returned when order is successfully created
api.cancelOptionsOrder(orderId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **number**| Order ID returned when order is successfully created | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: OptionsOrder; }> [OptionsOrder](OptionsOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## countdownCancelAllOptions

> Promise<{ response: http.IncomingMessage; body: TriggerTime; }> countdownCancelAllOptions(countdownCancelAllOptionsTask)

Countdown cancel orders

Option order heartbeat detection, when the &#x60;timeout&#x60; time set by the user is reached, if the existing countdown is not canceled or a new countdown is set, the related &#x60;option pending order&#x60; will be automatically canceled.  This interface can be called repeatedly to set a new countdown or cancel the countdown.  Usage example: Repeat this interface at intervals of 30 seconds, with each countdown &#x60;timeout&#x60; set to 30 (seconds).  If this interface is not called again within 30 seconds, all pending orders on the &#x60;underlying&#x60; &#x60;contract&#x60; you specified will be automatically cancelled. If &#x60;underlying&#x60; &#x60;contract&#x60; is not specified, user will be automatically cancelled  If &#x60;timeout&#x60; is set to 0 within 30 seconds, the countdown timer will expire and the automatic order cancellation function will be cancelled.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.OptionsApi(client);
const countdownCancelAllOptionsTask = new CountdownCancelAllOptionsTask(); // CountdownCancelAllOptionsTask | 
api.countdownCancelAllOptions(countdownCancelAllOptionsTask)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **countdownCancelAllOptionsTask** | [**CountdownCancelAllOptionsTask**](CountdownCancelAllOptionsTask.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: TriggerTime; }> [TriggerTime](TriggerTime.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## listMyOptionsTrades

> Promise<{ response: http.IncomingMessage; body: Array<OptionsMyTrade>; }> listMyOptionsTrades(underlying, opts)

Query personal trading records

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.OptionsApi(client);
const underlying = "BTC_USDT"; // string | Underlying (Obtained by listing underlying endpoint)
const opts = {
  'contract': "BTC_USDT-20210916-5000-C", // string | Options contract name
  'limit': 100, // number | Maximum number of records returned in a single list
  'offset': 0, // number | List offset, starting from 0
  'from': 1547706332, // number | Start timestamp  Specify start time, time format is Unix timestamp. If not specified, it defaults to (the data start time of the time range actually returned by to and limit)
  'to': 1547706332 // number | Termination Timestamp  Specify the end time. If not specified, it defaults to the current time, and the time format is a Unix timestamp
};
api.listMyOptionsTrades(underlying, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **underlying** | **string**| Underlying (Obtained by listing underlying endpoint) | [default to undefined]
 **contract** | **string**| Options contract name | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records returned in a single list | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0 | [optional] [default to 0]
 **from** | **number**| Start timestamp  Specify start time, time format is Unix timestamp. If not specified, it defaults to (the data start time of the time range actually returned by to and limit) | [optional] [default to undefined]
 **to** | **number**| Termination Timestamp  Specify the end time. If not specified, it defaults to the current time, and the time format is a Unix timestamp | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<OptionsMyTrade>; }> [OptionsMyTrade](OptionsMyTrade.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getOptionsMMP

> Promise<{ response: http.IncomingMessage; body: Array<OptionsMMP>; }> getOptionsMMP(opts)

MMP Query.

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
api.getOptionsMMP(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **underlying** | **string**| Underlying | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<OptionsMMP>; }> [OptionsMMP](OptionsMMP.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## setOptionsMMP

> Promise<{ response: http.IncomingMessage; body: OptionsMMP; }> setOptionsMMP(optionsMMP)

MMP Settings

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.OptionsApi(client);
const optionsMMP = new OptionsMMP(); // OptionsMMP | 
api.setOptionsMMP(optionsMMP)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **optionsMMP** | [**OptionsMMP**](OptionsMMP.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: OptionsMMP; }> [OptionsMMP](OptionsMMP.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## resetOptionsMMP

> Promise<{ response: http.IncomingMessage; body: OptionsMMP; }> resetOptionsMMP(optionsMMPReset)

MMP Reset

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.OptionsApi(client);
const optionsMMPReset = new OptionsMMPReset(); // OptionsMMPReset | 
api.resetOptionsMMP(optionsMMPReset)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **optionsMMPReset** | [**OptionsMMPReset**](OptionsMMPReset.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: OptionsMMP; }> [OptionsMMP](OptionsMMP.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
