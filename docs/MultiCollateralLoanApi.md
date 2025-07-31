# MultiCollateralLoanApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listMultiCollateralOrders**](MultiCollateralLoanApi.md#listMultiCollateralOrders) | **GET** /loan/multi_collateral/orders | Query multi-currency collateral order list
[**createMultiCollateral**](MultiCollateralLoanApi.md#createMultiCollateral) | **POST** /loan/multi_collateral/orders | Place multi-currency collateral order
[**getMultiCollateralOrderDetail**](MultiCollateralLoanApi.md#getMultiCollateralOrderDetail) | **GET** /loan/multi_collateral/orders/{order_id} | Query order details
[**listMultiRepayRecords**](MultiCollateralLoanApi.md#listMultiRepayRecords) | **GET** /loan/multi_collateral/repay | Query multi-currency collateral repayment records
[**repayMultiCollateralLoan**](MultiCollateralLoanApi.md#repayMultiCollateralLoan) | **POST** /loan/multi_collateral/repay | Multi-currency collateral repayment
[**listMultiCollateralRecords**](MultiCollateralLoanApi.md#listMultiCollateralRecords) | **GET** /loan/multi_collateral/mortgage | Query collateral adjustment records
[**operateMultiCollateral**](MultiCollateralLoanApi.md#operateMultiCollateral) | **POST** /loan/multi_collateral/mortgage | Add or withdraw collateral
[**listUserCurrencyQuota**](MultiCollateralLoanApi.md#listUserCurrencyQuota) | **GET** /loan/multi_collateral/currency_quota | Query user\&#39;s collateral and borrowing currency quota information
[**listMultiCollateralCurrencies**](MultiCollateralLoanApi.md#listMultiCollateralCurrencies) | **GET** /loan/multi_collateral/currencies | Query supported borrowing and collateral currencies for multi-currency collateral
[**getMultiCollateralLtv**](MultiCollateralLoanApi.md#getMultiCollateralLtv) | **GET** /loan/multi_collateral/ltv | Query collateralization ratio information
[**getMultiCollateralFixRate**](MultiCollateralLoanApi.md#getMultiCollateralFixRate) | **GET** /loan/multi_collateral/fixed_rate | Query currency\&#39;s 7-day and 30-day fixed interest rates
[**getMultiCollateralCurrentRate**](MultiCollateralLoanApi.md#getMultiCollateralCurrentRate) | **GET** /loan/multi_collateral/current_rate | Query currency\&#39;s current interest rate


## listMultiCollateralOrders

> Promise<{ response: http.IncomingMessage; body: Array<MultiCollateralOrder>; }> listMultiCollateralOrders(opts)

Query multi-currency collateral order list

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MultiCollateralLoanApi(client);
const opts = {
  'page': 1, // number | Page number
  'limit': 10, // number | Maximum number of records returned in a single list
  'sort': "ltv_asc", // string | Sort type: `time_desc` - Created time descending (default), `ltv_asc` - Collateral ratio ascending, `ltv_desc` - Collateral ratio descending.
  'orderType': "current" // string | Order type: current - Query current orders, fixed - Query fixed orders, defaults to current orders if not specifiedOrder type: current - Query current orders, fixed - Query fixed orders, defaults to current orders if not specified
};
api.listMultiCollateralOrders(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **number**| Page number | [optional] [default to 1]
 **limit** | **number**| Maximum number of records returned in a single list | [optional] [default to 10]
 **sort** | **string**| Sort type: &#x60;time_desc&#x60; - Created time descending (default), &#x60;ltv_asc&#x60; - Collateral ratio ascending, &#x60;ltv_desc&#x60; - Collateral ratio descending. | [optional] [default to undefined]
 **orderType** | **string**| Order type: current - Query current orders, fixed - Query fixed orders, defaults to current orders if not specifiedOrder type: current - Query current orders, fixed - Query fixed orders, defaults to current orders if not specified | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<MultiCollateralOrder>; }> [MultiCollateralOrder](MultiCollateralOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createMultiCollateral

> Promise<{ response: http.IncomingMessage; body: OrderResp; }> createMultiCollateral(createMultiCollateralOrder)

Place multi-currency collateral order

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MultiCollateralLoanApi(client);
const createMultiCollateralOrder = new CreateMultiCollateralOrder(); // CreateMultiCollateralOrder | 
api.createMultiCollateral(createMultiCollateralOrder)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createMultiCollateralOrder** | [**CreateMultiCollateralOrder**](CreateMultiCollateralOrder.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: OrderResp; }> [OrderResp](OrderResp.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## getMultiCollateralOrderDetail

> Promise<{ response: http.IncomingMessage; body: MultiCollateralOrder; }> getMultiCollateralOrderDetail(orderId)

Query order details

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MultiCollateralLoanApi(client);
const orderId = "12345"; // string | Order ID returned when order is successfully created
api.getMultiCollateralOrderDetail(orderId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **string**| Order ID returned when order is successfully created | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: MultiCollateralOrder; }> [MultiCollateralOrder](MultiCollateralOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listMultiRepayRecords

> Promise<{ response: http.IncomingMessage; body: Array<MultiRepayRecord>; }> listMultiRepayRecords(type, opts)

Query multi-currency collateral repayment records

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MultiCollateralLoanApi(client);
const type = "repay"; // string | Operation type: repay - Regular repayment, liquidate - Liquidation
const opts = {
  'borrowCurrency': "USDT", // string | Borrowed currency
  'page': 1, // number | Page number
  'limit': 10, // number | Maximum number of records returned in a single list
  'from': 1609459200, // number | Start timestamp for the query
  'to': 1609459200 // number | End timestamp for the query, defaults to current time if not specified
};
api.listMultiRepayRecords(type, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **string**| Operation type: repay - Regular repayment, liquidate - Liquidation | [default to undefined]
 **borrowCurrency** | **string**| Borrowed currency | [optional] [default to undefined]
 **page** | **number**| Page number | [optional] [default to 1]
 **limit** | **number**| Maximum number of records returned in a single list | [optional] [default to 10]
 **from** | **number**| Start timestamp for the query | [optional] [default to undefined]
 **to** | **number**| End timestamp for the query, defaults to current time if not specified | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<MultiRepayRecord>; }> [MultiRepayRecord](MultiRepayRecord.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## repayMultiCollateralLoan

> Promise<{ response: http.IncomingMessage; body: MultiRepayResp; }> repayMultiCollateralLoan(repayMultiLoan)

Multi-currency collateral repayment

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MultiCollateralLoanApi(client);
const repayMultiLoan = new RepayMultiLoan(); // RepayMultiLoan | 
api.repayMultiCollateralLoan(repayMultiLoan)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repayMultiLoan** | [**RepayMultiLoan**](RepayMultiLoan.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: MultiRepayResp; }> [MultiRepayResp](MultiRepayResp.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## listMultiCollateralRecords

> Promise<{ response: http.IncomingMessage; body: Array<MultiCollateralRecord>; }> listMultiCollateralRecords(opts)

Query collateral adjustment records

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MultiCollateralLoanApi(client);
const opts = {
  'page': 1, // number | Page number
  'limit': 10, // number | Maximum number of records returned in a single list
  'from': 1609459200, // number | Start timestamp for the query
  'to': 1609459200, // number | End timestamp for the query, defaults to current time if not specified
  'collateralCurrency': "BTC" // string | Collateral currency
};
api.listMultiCollateralRecords(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **number**| Page number | [optional] [default to 1]
 **limit** | **number**| Maximum number of records returned in a single list | [optional] [default to 10]
 **from** | **number**| Start timestamp for the query | [optional] [default to undefined]
 **to** | **number**| End timestamp for the query, defaults to current time if not specified | [optional] [default to undefined]
 **collateralCurrency** | **string**| Collateral currency | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<MultiCollateralRecord>; }> [MultiCollateralRecord](MultiCollateralRecord.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## operateMultiCollateral

> Promise<{ response: http.IncomingMessage; body: CollateralAdjustRes; }> operateMultiCollateral(collateralAdjust)

Add or withdraw collateral

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MultiCollateralLoanApi(client);
const collateralAdjust = new CollateralAdjust(); // CollateralAdjust | 
api.operateMultiCollateral(collateralAdjust)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collateralAdjust** | [**CollateralAdjust**](CollateralAdjust.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: CollateralAdjustRes; }> [CollateralAdjustRes](CollateralAdjustRes.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## listUserCurrencyQuota

> Promise<{ response: http.IncomingMessage; body: Array<CurrencyQuota>; }> listUserCurrencyQuota(type, currency)

Query user\&#39;s collateral and borrowing currency quota information

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MultiCollateralLoanApi(client);
const type = "collateral"; // string | Currency type: collateral - Collateral currency, borrow - Borrowing currency
const currency = "BTC"; // string | When it is a collateral currency, multiple currencies can be provided separated by commas; when it is a borrowing currency, only one currency can be provided.
api.listUserCurrencyQuota(type, currency)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **string**| Currency type: collateral - Collateral currency, borrow - Borrowing currency | [default to undefined]
 **currency** | **string**| When it is a collateral currency, multiple currencies can be provided separated by commas; when it is a borrowing currency, only one currency can be provided. | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<CurrencyQuota>; }> [CurrencyQuota](CurrencyQuota.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listMultiCollateralCurrencies

> Promise<{ response: http.IncomingMessage; body: MultiCollateralCurrency; }> listMultiCollateralCurrencies()

Query supported borrowing and collateral currencies for multi-currency collateral

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.MultiCollateralLoanApi(client);
api.listMultiCollateralCurrencies()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: MultiCollateralCurrency; }> [MultiCollateralCurrency](MultiCollateralCurrency.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getMultiCollateralLtv

> Promise<{ response: http.IncomingMessage; body: CollateralLtv; }> getMultiCollateralLtv()

Query collateralization ratio information

Multi-currency collateral ratio is fixed, independent of currency

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.MultiCollateralLoanApi(client);
api.getMultiCollateralLtv()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: CollateralLtv; }> [CollateralLtv](CollateralLtv.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getMultiCollateralFixRate

> Promise<{ response: http.IncomingMessage; body: Array<CollateralFixRate>; }> getMultiCollateralFixRate()

Query currency\&#39;s 7-day and 30-day fixed interest rates

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.MultiCollateralLoanApi(client);
api.getMultiCollateralFixRate()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: Array<CollateralFixRate>; }> [CollateralFixRate](CollateralFixRate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getMultiCollateralCurrentRate

> Promise<{ response: http.IncomingMessage; body: Array<CollateralCurrentRate>; }> getMultiCollateralCurrentRate(currencies, opts)

Query currency\&#39;s current interest rate

Query currency\&#39;s current interest rate for the previous hour, current interest rate updates hourly

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.MultiCollateralLoanApi(client);
const currencies = [["BTC","GT"]]; // Array<string> | Specify currency name query array, separated by commas, maximum 100 items
const opts = {
  'vipLevel': '0' // string | VIP level, defaults to 0 if not specified
};
api.getMultiCollateralCurrentRate(currencies, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencies** | [**Array&lt;string&gt;**](string.md)| Specify currency name query array, separated by commas, maximum 100 items | [default to undefined]
 **vipLevel** | **string**| VIP level, defaults to 0 if not specified | [optional] [default to &#39;0&#39;]

### Return type

Promise<{ response: AxiosResponse; body: Array<CollateralCurrentRate>; }> [CollateralCurrentRate](CollateralCurrentRate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
