# FlashSwapApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listFlashSwapCurrencyPair**](FlashSwapApi.md#listFlashSwapCurrencyPair) | **GET** /flash_swap/currency_pairs | List All Supported Currency Pairs In Flash Swap
[**listFlashSwapOrders**](FlashSwapApi.md#listFlashSwapOrders) | **GET** /flash_swap/orders | Query flash swap order list
[**createFlashSwapOrder**](FlashSwapApi.md#createFlashSwapOrder) | **POST** /flash_swap/orders | Create a flash swap order
[**getFlashSwapOrder**](FlashSwapApi.md#getFlashSwapOrder) | **GET** /flash_swap/orders/{order_id} | Query single flash swap order
[**previewFlashSwapOrder**](FlashSwapApi.md#previewFlashSwapOrder) | **POST** /flash_swap/orders/preview | Flash swap order preview


## listFlashSwapCurrencyPair

> Promise<{ response: http.IncomingMessage; body: Array<FlashSwapCurrencyPair>; }> listFlashSwapCurrencyPair(opts)

List All Supported Currency Pairs In Flash Swap

&#x60;BTC_GT&#x60; represents selling BTC and buying GT. The limits for each currency may vary across different currency pairs.  It is not necessary that two currencies that can be swapped instantaneously can be exchanged with each other. For example, it is possible to sell BTC and buy GT, but it does not necessarily mean that GT can be sold to buy BTC.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.FlashSwapApi(client);
const opts = {
  'currency': "BTC", // string | Query by specified currency name
  'page': 1, // number | Page number
  'limit': 1000 // number | Maximum number of items returned. Default: 1000, minimum: 1, maximum: 1000
};
api.listFlashSwapCurrencyPair(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Query by specified currency name | [optional] [default to undefined]
 **page** | **number**| Page number | [optional] [default to 1]
 **limit** | **number**| Maximum number of items returned. Default: 1000, minimum: 1, maximum: 1000 | [optional] [default to 1000]

### Return type

Promise<{ response: AxiosResponse; body: Array<FlashSwapCurrencyPair>; }> [FlashSwapCurrencyPair](FlashSwapCurrencyPair.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listFlashSwapOrders

> Promise<{ response: http.IncomingMessage; body: Array<FlashSwapOrder>; }> listFlashSwapOrders(opts)

Query flash swap order list

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
  'status': 1, // number | Flash swap order status  `1` - success `2` - failed
  'sellCurrency': "BTC", // string | Asset name to sell - Retrieved from API `GET /flash_swap/currencies` for supported flash swap currencies
  'buyCurrency': "BTC", // string | Asset name to buy - Retrieved from API `GET /flash_swap/currencies` for supported flash swap currencies
  'reverse': true, // boolean | Sort by ID in ascending or descending order, default `true` - `true`: ID descending order (most recent data first) - `false`: ID ascending order (oldest data first)
  'limit': 100, // number | Maximum number of records returned in a single list
  'page': 1 // number | Page number
};
api.listFlashSwapOrders(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **number**| Flash swap order status  &#x60;1&#x60; - success &#x60;2&#x60; - failed | [optional] [default to undefined]
 **sellCurrency** | **string**| Asset name to sell - Retrieved from API &#x60;GET /flash_swap/currencies&#x60; for supported flash swap currencies | [optional] [default to undefined]
 **buyCurrency** | **string**| Asset name to buy - Retrieved from API &#x60;GET /flash_swap/currencies&#x60; for supported flash swap currencies | [optional] [default to undefined]
 **reverse** | **boolean**| Sort by ID in ascending or descending order, default &#x60;true&#x60; - &#x60;true&#x60;: ID descending order (most recent data first) - &#x60;false&#x60;: ID ascending order (oldest data first) | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records returned in a single list | [optional] [default to 100]
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

Query single flash swap order

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

> Promise<{ response: http.IncomingMessage; body: FlashSwapOrderPreview; }> previewFlashSwapOrder(flashSwapPreviewRequest)

Flash swap order preview

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.FlashSwapApi(client);
const flashSwapPreviewRequest = new FlashSwapPreviewRequest(); // FlashSwapPreviewRequest | 
api.previewFlashSwapOrder(flashSwapPreviewRequest)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flashSwapPreviewRequest** | [**FlashSwapPreviewRequest**](FlashSwapPreviewRequest.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: FlashSwapOrderPreview; }> [FlashSwapOrderPreview](FlashSwapOrderPreview.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
