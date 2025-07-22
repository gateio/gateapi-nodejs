# CollateralLoanApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listCollateralLoanOrders**](CollateralLoanApi.md#listCollateralLoanOrders) | **GET** /loan/collateral/orders | List Orders.
[**createCollateralLoan**](CollateralLoanApi.md#createCollateralLoan) | **POST** /loan/collateral/orders | Place order.
[**getCollateralLoanOrderDetail**](CollateralLoanApi.md#getCollateralLoanOrderDetail) | **GET** /loan/collateral/orders/{order_id} | Get a single order.
[**repayCollateralLoan**](CollateralLoanApi.md#repayCollateralLoan) | **POST** /loan/collateral/repay | Repayment.
[**listRepayRecords**](CollateralLoanApi.md#listRepayRecords) | **GET** /loan/collateral/repay_records | Repayment history.
[**listCollateralRecords**](CollateralLoanApi.md#listCollateralRecords) | **GET** /loan/collateral/collaterals | Query collateral adjustment records.
[**operateCollateral**](CollateralLoanApi.md#operateCollateral) | **POST** /loan/collateral/collaterals | Increase or redeem collateral.
[**getUserTotalAmount**](CollateralLoanApi.md#getUserTotalAmount) | **GET** /loan/collateral/total_amount | Query the total borrowing and collateral amount for the user.
[**getUserLtvInfo**](CollateralLoanApi.md#getUserLtvInfo) | **GET** /loan/collateral/ltv | Query user\&#39;s collateralization ratio.
[**listCollateralCurrencies**](CollateralLoanApi.md#listCollateralCurrencies) | **GET** /loan/collateral/currencies | Query supported borrowing and collateral currencies.


## listCollateralLoanOrders

> Promise<{ response: http.IncomingMessage; body: Array<CollateralOrder>; }> listCollateralLoanOrders(opts)

List Orders.

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
  'page': 1, // number | Page number.
  'limit': 100, // number | Maximum number of records to be returned in a single list.
  'collateralCurrency': "BTC", // string | Collateral.
  'borrowCurrency': "USDT" // string | Borrowed currency.
};
api.listCollateralLoanOrders(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **number**| Page number. | [optional] [default to 1]
 **limit** | **number**| Maximum number of records to be returned in a single list. | [optional] [default to 100]
 **collateralCurrency** | **string**| Collateral. | [optional] [default to undefined]
 **borrowCurrency** | **string**| Borrowed currency. | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<CollateralOrder>; }> [CollateralOrder](CollateralOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createCollateralLoan

> Promise<{ response: http.IncomingMessage; body: OrderResp; }> createCollateralLoan(createCollateralOrder)

Place order.

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

Get a single order.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.CollateralLoanApi(client);
const orderId = 100001; // number | Order ID returned on successful order creation.
api.getCollateralLoanOrderDetail(orderId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **number**| Order ID returned on successful order creation. | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: CollateralOrder; }> [CollateralOrder](CollateralOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## repayCollateralLoan

> Promise<{ response: http.IncomingMessage; body: RepayResp; }> repayCollateralLoan(repayLoan)

Repayment.

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

Repayment history.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.CollateralLoanApi(client);
const source = "repay"; // string | Operation type: repay - Regular repayment, liquidate - Liquidation.
const opts = {
  'borrowCurrency': "USDT", // string | Borrowed currency.
  'collateralCurrency': "BTC", // string | Collateral.
  'page': 1, // number | Page number.
  'limit': 100, // number | Maximum number of records to be returned in a single list.
  'from': 1609459200, // number | Start timestamp of the query.
  'to': 1609459200 // number | Time range ending, default to current time.
};
api.listRepayRecords(source, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source** | **string**| Operation type: repay - Regular repayment, liquidate - Liquidation. | [default to undefined]
 **borrowCurrency** | **string**| Borrowed currency. | [optional] [default to undefined]
 **collateralCurrency** | **string**| Collateral. | [optional] [default to undefined]
 **page** | **number**| Page number. | [optional] [default to 1]
 **limit** | **number**| Maximum number of records to be returned in a single list. | [optional] [default to 100]
 **from** | **number**| Start timestamp of the query. | [optional] [default to undefined]
 **to** | **number**| Time range ending, default to current time. | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<RepayRecord>; }> [RepayRecord](RepayRecord.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCollateralRecords

> Promise<{ response: http.IncomingMessage; body: Array<CollateralRecord>; }> listCollateralRecords(opts)

Query collateral adjustment records.

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
  'page': 1, // number | Page number.
  'limit': 100, // number | Maximum number of records to be returned in a single list.
  'from': 1609459200, // number | Start timestamp of the query.
  'to': 1609459200, // number | Time range ending, default to current time.
  'borrowCurrency': "USDT", // string | Borrowed currency.
  'collateralCurrency': "BTC" // string | Collateral.
};
api.listCollateralRecords(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **number**| Page number. | [optional] [default to 1]
 **limit** | **number**| Maximum number of records to be returned in a single list. | [optional] [default to 100]
 **from** | **number**| Start timestamp of the query. | [optional] [default to undefined]
 **to** | **number**| Time range ending, default to current time. | [optional] [default to undefined]
 **borrowCurrency** | **string**| Borrowed currency. | [optional] [default to undefined]
 **collateralCurrency** | **string**| Collateral. | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<CollateralRecord>; }> [CollateralRecord](CollateralRecord.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## operateCollateral

> Promise<{ response: http.IncomingMessage; body?: any; }> operateCollateral(collateralAlign)

Increase or redeem collateral.

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

Query the total borrowing and collateral amount for the user.

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

Query user\&#39;s collateralization ratio.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.CollateralLoanApi(client);
const collateralCurrency = "BTC"; // string | Collateral.
const borrowCurrency = "USDT"; // string | Borrowed currency.
api.getUserLtvInfo(collateralCurrency, borrowCurrency)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collateralCurrency** | **string**| Collateral. | [default to undefined]
 **borrowCurrency** | **string**| Borrowed currency. | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: UserLtvInfo; }> [UserLtvInfo](UserLtvInfo.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCollateralCurrencies

> Promise<{ response: http.IncomingMessage; body: Array<CollateralLoanCurrency>; }> listCollateralCurrencies(opts)

Query supported borrowing and collateral currencies.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.CollateralLoanApi(client);
const opts = {
  'loanCurrency': "BTC" // string | The parameter loan_currency is used to specify the borrowing currency. If loan_currency is not provided, the API will return all supported borrowing currencies.
};
api.listCollateralCurrencies(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loanCurrency** | **string**| The parameter loan_currency is used to specify the borrowing currency. If loan_currency is not provided, the API will return all supported borrowing currencies. | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<CollateralLoanCurrency>; }> [CollateralLoanCurrency](CollateralLoanCurrency.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
