# FlashSwapApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listFlashSwapCurrencies**](FlashSwapApi.md#listFlashSwapCurrencies) | **GET** /flash_swap/currencies | List all supported currencies in flash swap
[**listFlashSwapOrders**](FlashSwapApi.md#listFlashSwapOrders) | **GET** /flash_swap/orders | List all flash swap orders
[**createFlashSwapOrder**](FlashSwapApi.md#createFlashSwapOrder) | **POST** /flash_swap/orders | Create a flash swap order
[**getFlashSwapOrder**](FlashSwapApi.md#getFlashSwapOrder) | **GET** /flash_swap/orders/{order_id} | Get a single flash swap order\&#39;s detail
[**previewFlashSwapOrder**](FlashSwapApi.md#previewFlashSwapOrder) | **POST** /flash_swap/orders/preview | Initiate a flash swap order preview


## listFlashSwapCurrencies

> Promise<{ response: http.IncomingMessage; body: Array<FlashSwapCurrency>; }> listFlashSwapCurrencies()

List all supported currencies in flash swap

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.FlashSwapApi(client);
api.listFlashSwapCurrencies()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: Array<FlashSwapCurrency>; }> [FlashSwapCurrency](FlashSwapCurrency.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listFlashSwapOrders

> Promise<{ response: http.IncomingMessage; body: Array<FlashSwapOrder>; }> listFlashSwapOrders(opts)

List all flash swap orders

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FlashSwapApi(client);
const opts = {
  'status': 1, // number | Flash swap order status  `1` - success `2` - failure
  'sellCurrency': "BTC", // string | Currency to sell which can be retrieved from supported currency list API `GET /flash_swap/currencies`
  'buyCurrency': "BTC", // string | Currency to buy which can be retrieved from supported currency list API `GET /flash_swap/currencies`
  'reverse': true, // boolean | If results are sorted by id in reverse order. Default to `true`  - `true`: sort by id in descending order(recent first) - `false`: sort by id in ascending order(oldest first)
  'limit': 100, // number | Maximum number of records to be returned in a single list
  'page': 1 // number | Page number
};
api.listFlashSwapOrders(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **number**| Flash swap order status  &#x60;1&#x60; - success &#x60;2&#x60; - failure | [optional] [default to undefined]
 **sellCurrency** | **string**| Currency to sell which can be retrieved from supported currency list API &#x60;GET /flash_swap/currencies&#x60; | [optional] [default to undefined]
 **buyCurrency** | **string**| Currency to buy which can be retrieved from supported currency list API &#x60;GET /flash_swap/currencies&#x60; | [optional] [default to undefined]
 **reverse** | **boolean**| If results are sorted by id in reverse order. Default to &#x60;true&#x60;  - &#x60;true&#x60;: sort by id in descending order(recent first) - &#x60;false&#x60;: sort by id in ascending order(oldest first) | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list | [optional] [default to 100]
 **page** | **number**| Page number | [optional] [default to 1]

### Return type

Promise<{ response: AxiosResponse; body: Array<FlashSwapOrder>; }> [FlashSwapOrder](FlashSwapOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createFlashSwapOrder

> Promise<{ response: http.IncomingMessage; body: FlashSwapOrder; }> createFlashSwapOrder(flashSwapOrderRequest)

Create a flash swap order

Initiate a flash swap preview in advance because order creation requires a preview result

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FlashSwapApi(client);
const flashSwapOrderRequest = new FlashSwapOrderRequest(); // FlashSwapOrderRequest | 
api.createFlashSwapOrder(flashSwapOrderRequest)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flashSwapOrderRequest** | [**FlashSwapOrderRequest**](FlashSwapOrderRequest.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: FlashSwapOrder; }> [FlashSwapOrder](FlashSwapOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## getFlashSwapOrder

> Promise<{ response: http.IncomingMessage; body: FlashSwapOrder; }> getFlashSwapOrder(orderId)

Get a single flash swap order\&#39;s detail

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FlashSwapApi(client);
const orderId = 1; // number | Flash swap order ID
api.getFlashSwapOrder(orderId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **number**| Flash swap order ID | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: FlashSwapOrder; }> [FlashSwapOrder](FlashSwapOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## previewFlashSwapOrder

> Promise<{ response: http.IncomingMessage; body: FlashSwapOrderPreview; }> previewFlashSwapOrder(flashSwapOrderRequest)

Initiate a flash swap order preview

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FlashSwapApi(client);
const flashSwapOrderRequest = new FlashSwapOrderRequest(); // FlashSwapOrderRequest | 
api.previewFlashSwapOrder(flashSwapOrderRequest)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flashSwapOrderRequest** | [**FlashSwapOrderRequest**](FlashSwapOrderRequest.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: FlashSwapOrderPreview; }> [FlashSwapOrderPreview](FlashSwapOrderPreview.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
