# MultiCollateralLoanApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listMultiCollateralOrders**](MultiCollateralLoanApi.md#listMultiCollateralOrders) | **GET** /loan/multi_collateral/orders | List Multi-Collateral Orders.
[**createMultiCollateral**](MultiCollateralLoanApi.md#createMultiCollateral) | **POST** /loan/multi_collateral/orders | Create Multi-Collateral Order.
[**getMultiCollateralOrderDetail**](MultiCollateralLoanApi.md#getMultiCollateralOrderDetail) | **GET** /loan/multi_collateral/orders/{order_id} | Get Multi-Collateral Order Detail.
[**listMultiRepayRecords**](MultiCollateralLoanApi.md#listMultiRepayRecords) | **GET** /loan/multi_collateral/repay | List Multi-Collateral Repay Records.
[**repayMultiCollateralLoan**](MultiCollateralLoanApi.md#repayMultiCollateralLoan) | **POST** /loan/multi_collateral/repay | Repay Multi-Collateral Loan.
[**listMultiCollateralRecords**](MultiCollateralLoanApi.md#listMultiCollateralRecords) | **GET** /loan/multi_collateral/mortgage | Query collateral adjustment records.
[**operateMultiCollateral**](MultiCollateralLoanApi.md#operateMultiCollateral) | **POST** /loan/multi_collateral/mortgage | Operate Multi-Collateral.
[**listUserCurrencyQuota**](MultiCollateralLoanApi.md#listUserCurrencyQuota) | **GET** /loan/multi_collateral/currency_quota | List User Currency Quota.
[**listMultiCollateralCurrencies**](MultiCollateralLoanApi.md#listMultiCollateralCurrencies) | **GET** /loan/multi_collateral/currencies | Query supported borrowing and collateral currencies in Multi-Collateral.
[**getMultiCollateralLtv**](MultiCollateralLoanApi.md#getMultiCollateralLtv) | **GET** /loan/multi_collateral/ltv | Get Multi-Collateral ratio.
[**getMultiCollateralFixRate**](MultiCollateralLoanApi.md#getMultiCollateralFixRate) | **GET** /loan/multi_collateral/fixed_rate | Query fixed interest rates for the currency for 7 days and 30 days.
[**getMultiCollateralCurrentRate**](MultiCollateralLoanApi.md#getMultiCollateralCurrentRate) | **GET** /loan/multi_collateral/current_rate | Query the current interest rate of the currency.


## listMultiCollateralOrders

> Promise<{ response: http.IncomingMessage; body: Array<MultiCollateralOrder>; }> listMultiCollateralOrders(opts)

List Multi-Collateral Orders.

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
  'page': 1, // number | Page number.
  'limit': 10, // number | Maximum number of records to be returned in a single list.
  'sort': "ltv_asc", // string | Query the current interest rate of the currency in the previous hour.
  'orderType': "current" // string | Order type: current - Query current orders, fixed - Query fixed orders, defaults to current orders if not specified
};
api.listMultiCollateralOrders(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **number**| Page number. | [optional] [default to 1]
 **limit** | **number**| Maximum number of records to be returned in a single list. | [optional] [default to 10]
 **sort** | **string**| Query the current interest rate of the currency in the previous hour. | [optional] [default to undefined]
 **orderType** | **string**| Order type: current - Query current orders, fixed - Query fixed orders, defaults to current orders if not specified | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<MultiCollateralOrder>; }> [MultiCollateralOrder](MultiCollateralOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createMultiCollateral

> Promise<{ response: http.IncomingMessage; body: OrderResp; }> createMultiCollateral(createMultiCollateralOrder)

Create Multi-Collateral Order.

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

Get Multi-Collateral Order Detail.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MultiCollateralLoanApi(client);
const orderId = "12345"; // string | Order ID returned on successful order creation.
api.getMultiCollateralOrderDetail(orderId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **string**| Order ID returned on successful order creation. | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: MultiCollateralOrder; }> [MultiCollateralOrder](MultiCollateralOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listMultiRepayRecords

> Promise<{ response: http.IncomingMessage; body: Array<MultiRepayRecord>; }> listMultiRepayRecords(type, opts)

List Multi-Collateral Repay Records.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MultiCollateralLoanApi(client);
const type = "repay"; // string | Operation type: repay - Regular repayment, liquidate - Liquidation.
const opts = {
  'borrowCurrency': "USDT", // string | Borrowed currency.
  'page': 1, // number | Page number.
  'limit': 10, // number | Maximum number of records to be returned in a single list.
  'from': 1609459200, // number | Start timestamp of the query.
  'to': 1609459200 // number | Time range ending, default to current time.
};
api.listMultiRepayRecords(type, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **string**| Operation type: repay - Regular repayment, liquidate - Liquidation. | [default to undefined]
 **borrowCurrency** | **string**| Borrowed currency. | [optional] [default to undefined]
 **page** | **number**| Page number. | [optional] [default to 1]
 **limit** | **number**| Maximum number of records to be returned in a single list. | [optional] [default to 10]
 **from** | **number**| Start timestamp of the query. | [optional] [default to undefined]
 **to** | **number**| Time range ending, default to current time. | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<MultiRepayRecord>; }> [MultiRepayRecord](MultiRepayRecord.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## repayMultiCollateralLoan

> Promise<{ response: http.IncomingMessage; body: MultiRepayResp; }> repayMultiCollateralLoan(repayMultiLoan)

Repay Multi-Collateral Loan.

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

Query collateral adjustment records.

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
  'page': 1, // number | Page number.
  'limit': 10, // number | Maximum number of records to be returned in a single list.
  'from': 1609459200, // number | Start timestamp of the query.
  'to': 1609459200, // number | Time range ending, default to current time.
  'collateralCurrency': "BTC" // string | Collateral.
};
api.listMultiCollateralRecords(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **number**| Page number. | [optional] [default to 1]
 **limit** | **number**| Maximum number of records to be returned in a single list. | [optional] [default to 10]
 **from** | **number**| Start timestamp of the query. | [optional] [default to undefined]
 **to** | **number**| Time range ending, default to current time. | [optional] [default to undefined]
 **collateralCurrency** | **string**| Collateral. | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<MultiCollateralRecord>; }> [MultiCollateralRecord](MultiCollateralRecord.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## operateMultiCollateral

> Promise<{ response: http.IncomingMessage; body: CollateralAdjustRes; }> operateMultiCollateral(collateralAdjust)

Operate Multi-Collateral.

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

List User Currency Quota.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MultiCollateralLoanApi(client);
const type = "collateral"; // string | Currency type: collateral - Collateral currency, borrow - Borrowing.
const currency = "BTC"; // string | When it is a collateral currency, multiple currencies can be passed separated by commas; when it is a borrowing currency, only one currency can be passedseparated by commas; when it is a borrowing currency, only one currency can be passedseparated by commas; when it is a borrowing currency, only one commas; when it is a borrowing currency, only one currency can be passed
api.listUserCurrencyQuota(type, currency)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **string**| Currency type: collateral - Collateral currency, borrow - Borrowing. | [default to undefined]
 **currency** | **string**| When it is a collateral currency, multiple currencies can be passed separated by commas; when it is a borrowing currency, only one currency can be passedseparated by commas; when it is a borrowing currency, only one currency can be passedseparated by commas; when it is a borrowing currency, only one commas; when it is a borrowing currency, only one currency can be passed | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<CurrencyQuota>; }> [CurrencyQuota](CurrencyQuota.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listMultiCollateralCurrencies

> Promise<{ response: http.IncomingMessage; body: MultiCollateralCurrency; }> listMultiCollateralCurrencies()

Query supported borrowing and collateral currencies in Multi-Collateral.

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

Get Multi-Collateral ratio.

The Multi-Collateral ratio is fixed, irrespective of the currency.

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

Query fixed interest rates for the currency for 7 days and 30 days.

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

Query the current interest rate of the currency.

Query the current interest rate of the currency in the previous hour.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.MultiCollateralLoanApi(client);
const currencies = [["BTC","GT"]]; // Array<string> | Specify currency name query array, separated by commas, maximum 100items.
const opts = {
  'vipLevel': '0' // string | VIP level, defaults to 0 if not transferred.
};
api.getMultiCollateralCurrentRate(currencies, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencies** | [**Array&lt;string&gt;**](string.md)| Specify currency name query array, separated by commas, maximum 100items. | [default to undefined]
 **vipLevel** | **string**| VIP level, defaults to 0 if not transferred. | [optional] [default to &#39;0&#39;]

### Return type

Promise<{ response: AxiosResponse; body: Array<CollateralCurrentRate>; }> [CollateralCurrentRate](CollateralCurrentRate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
