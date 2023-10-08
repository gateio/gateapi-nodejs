# PortfolioApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listPortfolioAccounts**](PortfolioApi.md#listPortfolioAccounts) | **GET** /portfolio/accounts | Get portfolio account information
[**listAccountPortfolioMode**](PortfolioApi.md#listAccountPortfolioMode) | **GET** /portfolio/account_mode | Retrieve the account\&#39;s portfolio mode
[**setAccountPortfolioMode**](PortfolioApi.md#setAccountPortfolioMode) | **POST** /portfolio/account_mode | Configure the account\&#39;s portfolio mode.
[**getPortfolioBorrowable**](PortfolioApi.md#getPortfolioBorrowable) | **GET** /portfolio/borrowable | Retrieve the maximum borrowable amount for the account.
[**getPortfolioTransferable**](PortfolioApi.md#getPortfolioTransferable) | **GET** /portfolio/transferable | Retrieve the maximum amount that can be transferred out from the account
[**listPortfolioUniLoanInterestRecords**](PortfolioApi.md#listPortfolioUniLoanInterestRecords) | **GET** /portfolio/loans | List loans
[**createPortfolioLoan**](PortfolioApi.md#createPortfolioLoan) | **POST** /portfolio/loans | Borrow or repay
[**listPortfolioLoanRecords**](PortfolioApi.md#listPortfolioLoanRecords) | **GET** /portfolio/loan_records | Get load records
[**listPortfolioLoanInterestRecords**](PortfolioApi.md#listPortfolioLoanInterestRecords) | **GET** /portfolio/interest_records | List interest records


## listPortfolioAccounts

> Promise<{ response: http.IncomingMessage; body: PortfolioAccount; }> listPortfolioAccounts(opts)

Get portfolio account information

The assets of each currency in the account will be adjusted according to their liquidity, defined by corresponding adjustment coefficients, and then uniformly converted to USD to calculate the total asset value and position value of the account.  You can refer to the [Formula](#portfolio-account) in the documentation

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.PortfolioApi(client);
const opts = {
  'currency': "BTC" // string | Retrieve data of the specified currency
};
api.listPortfolioAccounts(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Retrieve data of the specified currency | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: PortfolioAccount; }> [PortfolioAccount](PortfolioAccount.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listAccountPortfolioMode

> Promise<{ response: http.IncomingMessage; body: { [key: string]: boolean; }; }> listAccountPortfolioMode()

Retrieve the account\&#39;s portfolio mode

cross_margin - 现货全仓保证金

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.PortfolioApi(client);
api.listAccountPortfolioMode()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: { [key: string]: boolean; }; }> [boolean](boolean.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## setAccountPortfolioMode

> Promise<{ response: http.IncomingMessage; body: { [key: string]: boolean; }; }> setAccountPortfolioMode(portfolioMode)

Configure the account\&#39;s portfolio mode.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.PortfolioApi(client);
const portfolioMode = new PortfolioMode(); // PortfolioMode | 
api.setAccountPortfolioMode(portfolioMode)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolioMode** | [**PortfolioMode**](PortfolioMode.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: { [key: string]: boolean; }; }> [boolean](boolean.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## getPortfolioBorrowable

> Promise<{ response: http.IncomingMessage; body: PortfolioBorrowable; }> getPortfolioBorrowable(currency)

Retrieve the maximum borrowable amount for the account.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.PortfolioApi(client);
const currency = "BTC"; // string | Retrieve data of the specified currency
api.getPortfolioBorrowable(currency)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Retrieve data of the specified currency | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: PortfolioBorrowable; }> [PortfolioBorrowable](PortfolioBorrowable.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getPortfolioTransferable

> Promise<{ response: http.IncomingMessage; body: PortfolioTransferable; }> getPortfolioTransferable(currency)

Retrieve the maximum amount that can be transferred out from the account

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.PortfolioApi(client);
const currency = "BTC"; // string | Retrieve data of the specified currency
api.getPortfolioTransferable(currency)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Retrieve data of the specified currency | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: PortfolioTransferable; }> [PortfolioTransferable](PortfolioTransferable.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listPortfolioUniLoanInterestRecords

> Promise<{ response: http.IncomingMessage; body: Array<UniLoan>; }> listPortfolioUniLoanInterestRecords(opts)

List loans

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.PortfolioApi(client);
const opts = {
  'currency': "BTC", // string | Retrieve data of the specified currency
  'page': 1, // number | Page number
  'limit': 100 // number | Maximum response items.  Default: 100, minimum: 1, Maximum: 100
};
api.listPortfolioUniLoanInterestRecords(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Retrieve data of the specified currency | [optional] [default to undefined]
 **page** | **number**| Page number | [optional] [default to 1]
 **limit** | **number**| Maximum response items.  Default: 100, minimum: 1, Maximum: 100 | [optional] [default to 100]

### Return type

Promise<{ response: AxiosResponse; body: Array<UniLoan>; }> [UniLoan](UniLoan.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createPortfolioLoan

> Promise<{ response: http.IncomingMessage; body?: any; }> createPortfolioLoan(portfolioLoan)

Borrow or repay

When borrowing, it is essential to ensure that the borrowed amount is not below the minimum borrowing threshold for the specific cryptocurrency and does not exceed the maximum borrowing limit set by the platform and the user.  The interest on the loan will be automatically deducted from the account at regular intervals. It is the user\&#39;s responsibility to manage the repayment of the borrowed amount.  For repayment, the option to repay the entire borrowed amount is available by setting the parameter &#x60;repaid_all&#x3D;true&#x60;

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.PortfolioApi(client);
const portfolioLoan = new PortfolioLoan(); // PortfolioLoan | 
api.createPortfolioLoan(portfolioLoan)
   .then(value => console.log('API called successfully.'),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolioLoan** | [**PortfolioLoan**](PortfolioLoan.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body?: any; }> 

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

## listPortfolioLoanRecords

> Promise<{ response: http.IncomingMessage; body: Array<PortfolioLoanRecord>; }> listPortfolioLoanRecords(opts)

Get load records

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.PortfolioApi(client);
const opts = {
  'type': "type_example", // 'borrow' | 'repay' | The types of lending records, borrow - indicates the action of borrowing funds, repay - indicates the action of repaying the borrowed funds
  'currency': "BTC", // string | Retrieve data of the specified currency
  'page': 1, // number | Page number
  'limit': 100 // number | Maximum response items.  Default: 100, minimum: 1, Maximum: 100
};
api.listPortfolioLoanRecords(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **Type**| The types of lending records, borrow - indicates the action of borrowing funds, repay - indicates the action of repaying the borrowed funds | [optional] [default to undefined]
 **currency** | **string**| Retrieve data of the specified currency | [optional] [default to undefined]
 **page** | **number**| Page number | [optional] [default to 1]
 **limit** | **number**| Maximum response items.  Default: 100, minimum: 1, Maximum: 100 | [optional] [default to 100]

### Return type

Promise<{ response: AxiosResponse; body: Array<PortfolioLoanRecord>; }> [PortfolioLoanRecord](PortfolioLoanRecord.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listPortfolioLoanInterestRecords

> Promise<{ response: http.IncomingMessage; body: Array<UniLoanInterestRecord>; }> listPortfolioLoanInterestRecords(opts)

List interest records

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.PortfolioApi(client);
const opts = {
  'currency': "BTC", // string | Retrieve data of the specified currency
  'page': 1, // number | Page number
  'limit': 100 // number | Maximum response items.  Default: 100, minimum: 1, Maximum: 100
};
api.listPortfolioLoanInterestRecords(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Retrieve data of the specified currency | [optional] [default to undefined]
 **page** | **number**| Page number | [optional] [default to 1]
 **limit** | **number**| Maximum response items.  Default: 100, minimum: 1, Maximum: 100 | [optional] [default to 100]

### Return type

Promise<{ response: AxiosResponse; body: Array<UniLoanInterestRecord>; }> [UniLoanInterestRecord](UniLoanInterestRecord.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
