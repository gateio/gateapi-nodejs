# CollateralLoanApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listCollateralLoanOrders**](CollateralLoanApi.md#listCollateralLoanOrders) | **GET** /loan/collateral/orders | 查询抵押借币订单列表
[**createCollateralLoan**](CollateralLoanApi.md#createCollateralLoan) | **POST** /loan/collateral/orders | 抵押借币借贷下单
[**getCollateralLoanOrderDetail**](CollateralLoanApi.md#getCollateralLoanOrderDetail) | **GET** /loan/collateral/orders/{order_id} | Get a single order
[**repayCollateralLoan**](CollateralLoanApi.md#repayCollateralLoan) | **POST** /loan/collateral/repay | 抵押借币还款
[**listRepayRecords**](CollateralLoanApi.md#listRepayRecords) | **GET** /loan/collateral/repay_records | 查询抵押借币还款记录
[**listCollateralRecords**](CollateralLoanApi.md#listCollateralRecords) | **GET** /loan/collateral/collaterals | 查询质押物调整记录
[**operateCollateral**](CollateralLoanApi.md#operateCollateral) | **POST** /loan/collateral/collaterals | 增加或赎回质押物
[**getUserTotalAmount**](CollateralLoanApi.md#getUserTotalAmount) | **GET** /loan/collateral/total_amount | 查询用户总借贷与质押数量
[**getUserLtvInfo**](CollateralLoanApi.md#getUserLtvInfo) | **GET** /loan/collateral/ltv | 查询用户质押率和可借剩余币种
[**listCollateralCurrencies**](CollateralLoanApi.md#listCollateralCurrencies) | **GET** /loan/collateral/currencies | 查询支持的借款币种和抵押币种


## listCollateralLoanOrders

> Promise<{ response: http.IncomingMessage; body: Array<CollateralOrder>; }> listCollateralLoanOrders(opts)

查询抵押借币订单列表

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
  'limit': 100, // number | Maximum number of records to be returned in a single list
  'collateralCurrency': "BTC", // string | 质押币种
  'borrowCurrency': "USDT" // string | 借款币种
};
api.listCollateralLoanOrders(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **number**| Page number | [optional] [default to 1]
 **limit** | **number**| Maximum number of records to be returned in a single list | [optional] [default to 100]
 **collateralCurrency** | **string**| 质押币种 | [optional] [default to undefined]
 **borrowCurrency** | **string**| 借款币种 | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<CollateralOrder>; }> [CollateralOrder](CollateralOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createCollateralLoan

> Promise<{ response: http.IncomingMessage; body: OrderResp; }> createCollateralLoan(createCollateralOrder)

抵押借币借贷下单

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

Get a single order

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.CollateralLoanApi(client);
const orderId = 100001; // number | Order ID returned on successful order creation
api.getCollateralLoanOrderDetail(orderId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **number**| Order ID returned on successful order creation | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: CollateralOrder; }> [CollateralOrder](CollateralOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## repayCollateralLoan

> Promise<{ response: http.IncomingMessage; body: RepayResp; }> repayCollateralLoan(repayLoan)

抵押借币还款

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

查询抵押借币还款记录

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.CollateralLoanApi(client);
const source = "repay"; // string | 操作类型 ;  repay - 普通还款, liquidate - 平仓
const opts = {
  'borrowCurrency': "USDT", // string | 借款币种
  'collateralCurrency': "BTC", // string | 质押币种
  'page': 1, // number | Page number
  'limit': 100, // number | Maximum number of records to be returned in a single list
  'from': 1609459200, // number | Start timestamp of the query
  'to': 1609459200 // number | Time range ending, default to current time
};
api.listRepayRecords(source, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source** | **string**| 操作类型 ;  repay - 普通还款, liquidate - 平仓 | [default to undefined]
 **borrowCurrency** | **string**| 借款币种 | [optional] [default to undefined]
 **collateralCurrency** | **string**| 质押币种 | [optional] [default to undefined]
 **page** | **number**| Page number | [optional] [default to 1]
 **limit** | **number**| Maximum number of records to be returned in a single list | [optional] [default to 100]
 **from** | **number**| Start timestamp of the query | [optional] [default to undefined]
 **to** | **number**| Time range ending, default to current time | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<RepayRecord>; }> [RepayRecord](RepayRecord.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCollateralRecords

> Promise<{ response: http.IncomingMessage; body: Array<CollateralRecord>; }> listCollateralRecords(opts)

查询质押物调整记录

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
  'limit': 100, // number | Maximum number of records to be returned in a single list
  'from': 1609459200, // number | Start timestamp of the query
  'to': 1609459200, // number | Time range ending, default to current time
  'borrowCurrency': "USDT", // string | 借款币种
  'collateralCurrency': "BTC" // string | 质押币种
};
api.listCollateralRecords(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **number**| Page number | [optional] [default to 1]
 **limit** | **number**| Maximum number of records to be returned in a single list | [optional] [default to 100]
 **from** | **number**| Start timestamp of the query | [optional] [default to undefined]
 **to** | **number**| Time range ending, default to current time | [optional] [default to undefined]
 **borrowCurrency** | **string**| 借款币种 | [optional] [default to undefined]
 **collateralCurrency** | **string**| 质押币种 | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<CollateralRecord>; }> [CollateralRecord](CollateralRecord.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## operateCollateral

> Promise<{ response: http.IncomingMessage; body?: any; }> operateCollateral(collateralAlign)

增加或赎回质押物

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

查询用户总借贷与质押数量

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

查询用户质押率和可借剩余币种

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.CollateralLoanApi(client);
const collateralCurrency = "BTC"; // string | 质押币种
const borrowCurrency = "USDT"; // string | 借款币种
api.getUserLtvInfo(collateralCurrency, borrowCurrency)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collateralCurrency** | **string**| 质押币种 | [default to undefined]
 **borrowCurrency** | **string**| 借款币种 | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: UserLtvInfo; }> [UserLtvInfo](UserLtvInfo.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCollateralCurrencies

> Promise<{ response: http.IncomingMessage; body: Array<CollateralLoanCurrency>; }> listCollateralCurrencies(opts)

查询支持的借款币种和抵押币种

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.CollateralLoanApi(client);
const opts = {
  'loanCurrency': "BTC" // string | 借款币种参数,当loan_currency没传时会返回支持的所有借款币种,当传loan_currency时会查询该借款币种支持的抵押币种数组
};
api.listCollateralCurrencies(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loanCurrency** | **string**| 借款币种参数,当loan_currency没传时会返回支持的所有借款币种,当传loan_currency时会查询该借款币种支持的抵押币种数组 | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<CollateralLoanCurrency>; }> [CollateralLoanCurrency](CollateralLoanCurrency.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
