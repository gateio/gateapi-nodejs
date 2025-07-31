# CollateralLoanApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listCollateralLoanOrders**](CollateralLoanApi.md#listCollateralLoanOrders) | **GET** /loan/collateral/orders | Query collateral loan order list
[**createCollateralLoan**](CollateralLoanApi.md#createCollateralLoan) | **POST** /loan/collateral/orders | Place collateral loan order
[**getCollateralLoanOrderDetail**](CollateralLoanApi.md#getCollateralLoanOrderDetail) | **GET** /loan/collateral/orders/{order_id} | Query single order details
[**repayCollateralLoan**](CollateralLoanApi.md#repayCollateralLoan) | **POST** /loan/collateral/repay | Collateral loan repayment
[**listRepayRecords**](CollateralLoanApi.md#listRepayRecords) | **GET** /loan/collateral/repay_records | Query collateral loan repayment records
[**listCollateralRecords**](CollateralLoanApi.md#listCollateralRecords) | **GET** /loan/collateral/collaterals | Query collateral adjustment records
[**operateCollateral**](CollateralLoanApi.md#operateCollateral) | **POST** /loan/collateral/collaterals | Increase or redeem collateral
[**getUserTotalAmount**](CollateralLoanApi.md#getUserTotalAmount) | **GET** /loan/collateral/total_amount | Query user\&#39;s total borrowing and collateral amount
[**getUserLtvInfo**](CollateralLoanApi.md#getUserLtvInfo) | **GET** /loan/collateral/ltv | Query user\&#39;s collateralization ratio and remaining borrowable currencies
[**listCollateralCurrencies**](CollateralLoanApi.md#listCollateralCurrencies) | **GET** /loan/collateral/currencies | Query supported borrowing and collateral currencies


## listCollateralLoanOrders

> Promise<{ response: http.IncomingMessage; body: Array<CollateralOrder>; }> listCollateralLoanOrders(opts)

Query collateral loan order list

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.CollateralLoanApi(client);
const opts = {
  'page': 1, // number | Page number
  'limit': 100, // number | Maximum number of records returned in a single list
  'collateralCurrency': "BTC", // string | Collateral currency
  'borrowCurrency': "USDT" // string | Borrowed currency
};
api.listCollateralLoanOrders(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **number**| Page number | [optional] [default to 1]
 **limit** | **number**| Maximum number of records returned in a single list | [optional] [default to 100]
 **collateralCurrency** | **string**| Collateral currency | [optional] [default to undefined]
 **borrowCurrency** | **string**| Borrowed currency | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<CollateralOrder>; }> [CollateralOrder](CollateralOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createCollateralLoan

> Promise<{ response: http.IncomingMessage; body: OrderResp; }> createCollateralLoan(createCollateralOrder)

Place collateral loan order

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.CollateralLoanApi(client);
const createCollateralOrder = new CreateCollateralOrder(); // CreateCollateralOrder | 
api.createCollateralLoan(createCollateralOrder)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCollateralOrder** | [**CreateCollateralOrder**](CreateCollateralOrder.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: OrderResp; }> [OrderResp](OrderResp.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## getCollateralLoanOrderDetail

> Promise<{ response: http.IncomingMessage; body: CollateralOrder; }> getCollateralLoanOrderDetail(orderId)

Query single order details

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.CollateralLoanApi(client);
const orderId = 100001; // number | Order ID returned when order is successfully created
api.getCollateralLoanOrderDetail(orderId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **number**| Order ID returned when order is successfully created | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: CollateralOrder; }> [CollateralOrder](CollateralOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## repayCollateralLoan

> Promise<{ response: http.IncomingMessage; body: RepayResp; }> repayCollateralLoan(repayLoan)

Collateral loan repayment

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.CollateralLoanApi(client);
const repayLoan = new RepayLoan(); // RepayLoan | 
api.repayCollateralLoan(repayLoan)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repayLoan** | [**RepayLoan**](RepayLoan.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: RepayResp; }> [RepayResp](RepayResp.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## listRepayRecords

> Promise<{ response: http.IncomingMessage; body: Array<RepayRecord>; }> listRepayRecords(source, opts)

Query collateral loan repayment records

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.CollateralLoanApi(client);
const source = "repay"; // string | Operation type: repay - Regular repayment, liquidate - Liquidation
const opts = {
  'borrowCurrency': "USDT", // string | Borrowed currency
  'collateralCurrency': "BTC", // string | Collateral currency
  'page': 1, // number | Page number
  'limit': 100, // number | Maximum number of records returned in a single list
  'from': 1609459200, // number | Start timestamp for the query
  'to': 1609459200 // number | End timestamp for the query, defaults to current time if not specified
};
api.listRepayRecords(source, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source** | **string**| Operation type: repay - Regular repayment, liquidate - Liquidation | [default to undefined]
 **borrowCurrency** | **string**| Borrowed currency | [optional] [default to undefined]
 **collateralCurrency** | **string**| Collateral currency | [optional] [default to undefined]
 **page** | **number**| Page number | [optional] [default to 1]
 **limit** | **number**| Maximum number of records returned in a single list | [optional] [default to 100]
 **from** | **number**| Start timestamp for the query | [optional] [default to undefined]
 **to** | **number**| End timestamp for the query, defaults to current time if not specified | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<RepayRecord>; }> [RepayRecord](RepayRecord.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCollateralRecords

> Promise<{ response: http.IncomingMessage; body: Array<CollateralRecord>; }> listCollateralRecords(opts)

Query collateral adjustment records

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.CollateralLoanApi(client);
const opts = {
  'page': 1, // number | Page number
  'limit': 100, // number | Maximum number of records returned in a single list
  'from': 1609459200, // number | Start timestamp for the query
  'to': 1609459200, // number | End timestamp for the query, defaults to current time if not specified
  'borrowCurrency': "USDT", // string | Borrowed currency
  'collateralCurrency': "BTC" // string | Collateral currency
};
api.listCollateralRecords(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **number**| Page number | [optional] [default to 1]
 **limit** | **number**| Maximum number of records returned in a single list | [optional] [default to 100]
 **from** | **number**| Start timestamp for the query | [optional] [default to undefined]
 **to** | **number**| End timestamp for the query, defaults to current time if not specified | [optional] [default to undefined]
 **borrowCurrency** | **string**| Borrowed currency | [optional] [default to undefined]
 **collateralCurrency** | **string**| Collateral currency | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<CollateralRecord>; }> [CollateralRecord](CollateralRecord.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## operateCollateral

> Promise<{ response: http.IncomingMessage; body?: any; }> operateCollateral(collateralAlign)

Increase or redeem collateral

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.CollateralLoanApi(client);
const collateralAlign = new CollateralAlign(); // CollateralAlign | 
api.operateCollateral(collateralAlign)
   .then(value => console.log('API called successfully.'),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collateralAlign** | [**CollateralAlign**](CollateralAlign.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body?: any; }> 

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

## getUserTotalAmount

> Promise<{ response: http.IncomingMessage; body: UserTotalAmount; }> getUserTotalAmount()

Query user\&#39;s total borrowing and collateral amount

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.CollateralLoanApi(client);
api.getUserTotalAmount()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: UserTotalAmount; }> [UserTotalAmount](UserTotalAmount.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getUserLtvInfo

> Promise<{ response: http.IncomingMessage; body: UserLtvInfo; }> getUserLtvInfo(collateralCurrency, borrowCurrency)

Query user\&#39;s collateralization ratio and remaining borrowable currencies

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.CollateralLoanApi(client);
const collateralCurrency = "BTC"; // string | Collateral currency
const borrowCurrency = "USDT"; // string | Borrowed currency
api.getUserLtvInfo(collateralCurrency, borrowCurrency)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collateralCurrency** | **string**| Collateral currency | [default to undefined]
 **borrowCurrency** | **string**| Borrowed currency | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: UserLtvInfo; }> [UserLtvInfo](UserLtvInfo.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCollateralCurrencies

> Promise<{ response: http.IncomingMessage; body: Array<CollateralLoanCurrency>; }> listCollateralCurrencies(opts)

Query supported borrowing and collateral currencies

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.CollateralLoanApi(client);
const opts = {
  'loanCurrency': "BTC" // string | Parameter loan_currency. If omitted, returns all supported borrowing currencies; if provided, returns the array of collateral currencies supported for that borrowing currency
};
api.listCollateralCurrencies(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loanCurrency** | **string**| Parameter loan_currency. If omitted, returns all supported borrowing currencies; if provided, returns the array of collateral currencies supported for that borrowing currency | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<CollateralLoanCurrency>; }> [CollateralLoanCurrency](CollateralLoanCurrency.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
