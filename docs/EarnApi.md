# EarnApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**swapETH2**](EarnApi.md#swapETH2) | **POST** /earn/staking/eth2/swap | ETH2 swap
[**listDualInvestmentPlans**](EarnApi.md#listDualInvestmentPlans) | **GET** /earn/dual/investment_plan | Dual Investment product list
[**listDualOrders**](EarnApi.md#listDualOrders) | **GET** /earn/dual/orders | Dual Investment order list
[**placeDualOrder**](EarnApi.md#placeDualOrder) | **POST** /earn/dual/orders | Place Dual Investment order
[**cancelDualOrder**](EarnApi.md#cancelDualOrder) | **DELETE** /earn/dual/orders/{order_id} | Cancel Dual Investment order
[**listStructuredProducts**](EarnApi.md#listStructuredProducts) | **GET** /earn/structured/products | Structured Product List
[**listStructuredOrders**](EarnApi.md#listStructuredOrders) | **GET** /earn/structured/orders | Structured Product Order List
[**placeStructuredOrder**](EarnApi.md#placeStructuredOrder) | **POST** /earn/structured/orders | Place Structured Product Order


## swapETH2

> Promise<{ response: http.IncomingMessage; body?: any; }> swapETH2(eth2Swap)

ETH2 swap

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

## listDualInvestmentPlans

> Promise<{ response: http.IncomingMessage; body: Array<DualGetPlans>; }> listDualInvestmentPlans()

Dual Investment product list

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.EarnApi(client);
api.listDualInvestmentPlans()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: Array<DualGetPlans>; }> [DualGetPlans](DualGetPlans.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listDualOrders

> Promise<{ response: http.IncomingMessage; body: Array<DualGetOrders>; }> listDualOrders()

Dual Investment order list

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.EarnApi(client);
api.listDualOrders()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: Array<DualGetOrders>; }> [DualGetOrders](DualGetOrders.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## placeDualOrder

> Promise<{ response: http.IncomingMessage; body?: any; }> placeDualOrder(placeDualInvestmentOrder)

Place Dual Investment order

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

## cancelDualOrder

> Promise<{ response: http.IncomingMessage; body?: any; }> cancelDualOrder(orderId)

Cancel Dual Investment order

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.EarnApi(client);
const orderId = 1; // number | Order ID
api.cancelDualOrder(orderId)
   .then(value => console.log('API called successfully.'),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **number**| Order ID | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body?: any; }> 

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

## listStructuredProducts

> Promise<{ response: http.IncomingMessage; body: Array<StructuredGetProjectList>; }> listStructuredProducts(structuredGetProjectListRequest)

Structured Product List

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.EarnApi(client);
const structuredGetProjectListRequest = new StructuredGetProjectListRequest(); // StructuredGetProjectListRequest | 
api.listStructuredProducts(structuredGetProjectListRequest)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **structuredGetProjectListRequest** | [**StructuredGetProjectListRequest**](StructuredGetProjectListRequest.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: Array<StructuredGetProjectList>; }> [StructuredGetProjectList](StructuredGetProjectList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## listStructuredOrders

> Promise<{ response: http.IncomingMessage; body: Array<StructuredOrderList>; }> listStructuredOrders(structuredOrderListRequest)

Structured Product Order List

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.EarnApi(client);
const structuredOrderListRequest = new StructuredOrderListRequest(); // StructuredOrderListRequest | 
api.listStructuredOrders(structuredOrderListRequest)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **structuredOrderListRequest** | [**StructuredOrderListRequest**](StructuredOrderListRequest.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: Array<StructuredOrderList>; }> [StructuredOrderList](StructuredOrderList.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## placeStructuredOrder

> Promise<{ response: http.IncomingMessage; body?: any; }> placeStructuredOrder(structuredBuy)

Place Structured Product Order

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
