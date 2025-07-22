# EarnApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**swapETH2**](EarnApi.md#swapETH2) | **POST** /earn/staking/eth2/swap | ETH2 swap.
[**rateListETH2**](EarnApi.md#rateListETH2) | **GET** /earn/staking/eth2/rate_records | ETH2 historical rate of return query.
[**listDualInvestmentPlans**](EarnApi.md#listDualInvestmentPlans) | **GET** /earn/dual/investment_plan | Dual Investment product list.
[**listDualOrders**](EarnApi.md#listDualOrders) | **GET** /earn/dual/orders | Dual Investment order list.
[**placeDualOrder**](EarnApi.md#placeDualOrder) | **POST** /earn/dual/orders | Place Dual Investment order.
[**listStructuredProducts**](EarnApi.md#listStructuredProducts) | **GET** /earn/structured/products | Structured Product List.
[**listStructuredOrders**](EarnApi.md#listStructuredOrders) | **GET** /earn/structured/orders | Structured Product Order List.
[**placeStructuredOrder**](EarnApi.md#placeStructuredOrder) | **POST** /earn/structured/orders | Place Structured Product Order.
[**findCoin**](EarnApi.md#findCoin) | **GET** /earn/staking/coins | Staking Coins.
[**swapStakingCoin**](EarnApi.md#swapStakingCoin) | **POST** /earn/staking/swap | On-chain Token Swap for Earned Coins.


## swapETH2

> Promise<{ response: http.IncomingMessage; body?: any; }> swapETH2(eth2Swap)

ETH2 swap.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.EarnApi(client);
const eth2Swap = new Eth2Swap(); // Eth2Swap | 
api.swapETH2(eth2Swap)
   .then(value => console.log('API called successfully.'),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eth2Swap** | [**Eth2Swap**](Eth2Swap.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body?: any; }> 

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

## rateListETH2

> Promise<{ response: http.IncomingMessage; body: Array<Eth2RateList>; }> rateListETH2()

ETH2 historical rate of return query.

Check the ETH earnings rate record for the last 31 days.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.EarnApi(client);
api.rateListETH2()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: Array<Eth2RateList>; }> [Eth2RateList](Eth2RateList.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listDualInvestmentPlans

> Promise<{ response: http.IncomingMessage; body: Array<DualGetPlans>; }> listDualInvestmentPlans(opts)

Dual Investment product list.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.EarnApi(client);
const opts = {
  'planId': 1 // number | Financial project id.
};
api.listDualInvestmentPlans(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **planId** | **number**| Financial project id. | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<DualGetPlans>; }> [DualGetPlans](DualGetPlans.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listDualOrders

> Promise<{ response: http.IncomingMessage; body: Array<DualGetOrders>; }> listDualOrders(opts)

Dual Investment order list.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.EarnApi(client);
const opts = {
  'from': 1740727000, // number | Start checkout time.
  'to': 1740729000, // number | End settlement time.
  'page': 1, // number | Page number.
  'limit': 100 // number | Maximum number of records to be returned in a single list.
};
api.listDualOrders(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | **number**| Start checkout time. | [optional] [default to undefined]
 **to** | **number**| End settlement time. | [optional] [default to undefined]
 **page** | **number**| Page number. | [optional] [default to 1]
 **limit** | **number**| Maximum number of records to be returned in a single list. | [optional] [default to 100]

### Return type

Promise<{ response: AxiosResponse; body: Array<DualGetOrders>; }> [DualGetOrders](DualGetOrders.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## placeDualOrder

> Promise<{ response: http.IncomingMessage; body?: any; }> placeDualOrder(placeDualInvestmentOrder)

Place Dual Investment order.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.EarnApi(client);
const placeDualInvestmentOrder = new PlaceDualInvestmentOrder(); // PlaceDualInvestmentOrder | 
api.placeDualOrder(placeDualInvestmentOrder)
   .then(value => console.log('API called successfully.'),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **placeDualInvestmentOrder** | [**PlaceDualInvestmentOrder**](PlaceDualInvestmentOrder.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body?: any; }> 

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

## listStructuredProducts

> Promise<{ response: http.IncomingMessage; body: Array<StructuredGetProjectList>; }> listStructuredProducts(status, opts)

Structured Product List.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.EarnApi(client);
const status = "in_process"; // string | Status (Default empty to query all)  `in_process`-In progress `will_begin`-Not started `wait_settlement`-Pending settlement `done`-Completed 
const opts = {
  'type': "BullishSharkFin", // string | Product Type (Default empty to query all)  `SharkFin2.0`-Shark Fin `BullishSharkFin`-Bullish Treasure `BearishSharkFin`-Bearish Treasure `DoubleNoTouch`-Volatility Treasure `RangeAccrual`-Range Smart Yield `SnowBall`-Snowball 
  'page': 1, // number | Page number.
  'limit': 100 // number | Maximum number of records to be returned in a single list.
};
api.listStructuredProducts(status, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **string**| Status (Default empty to query all)  &#x60;in_process&#x60;-In progress &#x60;will_begin&#x60;-Not started &#x60;wait_settlement&#x60;-Pending settlement &#x60;done&#x60;-Completed  | [default to undefined]
 **type** | **string**| Product Type (Default empty to query all)  &#x60;SharkFin2.0&#x60;-Shark Fin &#x60;BullishSharkFin&#x60;-Bullish Treasure &#x60;BearishSharkFin&#x60;-Bearish Treasure &#x60;DoubleNoTouch&#x60;-Volatility Treasure &#x60;RangeAccrual&#x60;-Range Smart Yield &#x60;SnowBall&#x60;-Snowball  | [optional] [default to undefined]
 **page** | **number**| Page number. | [optional] [default to 1]
 **limit** | **number**| Maximum number of records to be returned in a single list. | [optional] [default to 100]

### Return type

Promise<{ response: AxiosResponse; body: Array<StructuredGetProjectList>; }> [StructuredGetProjectList](StructuredGetProjectList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listStructuredOrders

> Promise<{ response: http.IncomingMessage; body: Array<StructuredOrderList>; }> listStructuredOrders(opts)

Structured Product Order List.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.EarnApi(client);
const opts = {
  'from': 1547706332, // number | Start timestamp  Specify start time, time format is Unix timestamp. If not specified, it defaults to (the data start time of the time range actually returned by to and limit)
  'to': 1547706332, // number | Termination Timestamp  Specify the end time. If not specified, it defaults to the current time, and the time format is a Unix timestamp
  'page': 1, // number | Page number.
  'limit': 100 // number | Maximum number of records to be returned in a single list.
};
api.listStructuredOrders(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | **number**| Start timestamp  Specify start time, time format is Unix timestamp. If not specified, it defaults to (the data start time of the time range actually returned by to and limit) | [optional] [default to undefined]
 **to** | **number**| Termination Timestamp  Specify the end time. If not specified, it defaults to the current time, and the time format is a Unix timestamp | [optional] [default to undefined]
 **page** | **number**| Page number. | [optional] [default to 1]
 **limit** | **number**| Maximum number of records to be returned in a single list. | [optional] [default to 100]

### Return type

Promise<{ response: AxiosResponse; body: Array<StructuredOrderList>; }> [StructuredOrderList](StructuredOrderList.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## placeStructuredOrder

> Promise<{ response: http.IncomingMessage; body?: any; }> placeStructuredOrder(structuredBuy)

Place Structured Product Order.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.EarnApi(client);
const structuredBuy = new StructuredBuy(); // StructuredBuy | 
api.placeStructuredOrder(structuredBuy)
   .then(value => console.log('API called successfully.'),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **structuredBuy** | [**StructuredBuy**](StructuredBuy.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body?: any; }> 

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

## findCoin

> Promise<{ response: http.IncomingMessage; body: Array<string>; }> findCoin(findCoin)

Staking Coins.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.EarnApi(client);
const findCoin = new FindCoin(); // FindCoin | 
api.findCoin(findCoin)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **findCoin** | [**FindCoin**](FindCoin.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: Array<string>; }> [string](string.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## swapStakingCoin

> Promise<{ response: http.IncomingMessage; body: SwapCoinStruct; }> swapStakingCoin(swapCoin)

On-chain Token Swap for Earned Coins.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.EarnApi(client);
const swapCoin = new SwapCoin(); // SwapCoin | 
api.swapStakingCoin(swapCoin)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **swapCoin** | [**SwapCoin**](SwapCoin.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: SwapCoinStruct; }> [SwapCoinStruct](SwapCoinStruct.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
