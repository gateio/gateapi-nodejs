# MarginUniApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listUniCurrencyPairs**](MarginUniApi.md#listUniCurrencyPairs) | **GET** /margin/uni/currency_pairs | List lending markets
[**getUniCurrencyPair**](MarginUniApi.md#getUniCurrencyPair) | **GET** /margin/uni/currency_pairs/{currency_pair} | Get detail of lending market
[**listUniLoans**](MarginUniApi.md#listUniLoans) | **GET** /margin/uni/loans | List loans
[**createUniLoan**](MarginUniApi.md#createUniLoan) | **POST** /margin/uni/loans | Borrow or repay
[**listUniLoanRecords**](MarginUniApi.md#listUniLoanRecords) | **GET** /margin/uni/loan_records | Get load records
[**listUniLoanInterestRecords**](MarginUniApi.md#listUniLoanInterestRecords) | **GET** /margin/uni/interest_records | List interest records
[**getUniBorrowable**](MarginUniApi.md#getUniBorrowable) | **GET** /margin/uni/borrowable | Get maximum borrowable


## listUniCurrencyPairs

> Promise<{ response: http.IncomingMessage; body: Array<UniCurrencyPair>; }> listUniCurrencyPairs()

List lending markets

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.MarginUniApi(client);
api.listUniCurrencyPairs()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: Array<UniCurrencyPair>; }> [UniCurrencyPair](UniCurrencyPair.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getUniCurrencyPair

> Promise<{ response: http.IncomingMessage; body: UniCurrencyPair; }> getUniCurrencyPair(currencyPair)

Get detail of lending market

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.MarginUniApi(client);
const currencyPair = "AE_USDT"; // string | Currency pair
api.getUniCurrencyPair(currencyPair)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **string**| Currency pair | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: UniCurrencyPair; }> [UniCurrencyPair](UniCurrencyPair.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listUniLoans

> Promise<{ response: http.IncomingMessage; body: Array<UniLoan>; }> listUniLoans(opts)

List loans

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginUniApi(client);
const opts = {
  'currencyPair': "BTC_USDT", // string | Currency pair
  'currency': "BTC", // string | Retrieve data of the specified currency
  'page': 1, // number | Page number
  'limit': 100 // number | Maximum response items.  Default: 100, minimum: 1, Maximum: 100
};
api.listUniLoans(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **string**| Currency pair | [optional] [default to undefined]
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

## createUniLoan

> Promise<{ response: http.IncomingMessage; body?: any; }> createUniLoan(createUniLoan)

Borrow or repay

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginUniApi(client);
const createUniLoan = new CreateUniLoan(); // CreateUniLoan | 
api.createUniLoan(createUniLoan)
   .then(value => console.log('API called successfully.'),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createUniLoan** | [**CreateUniLoan**](CreateUniLoan.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body?: any; }> 

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

## listUniLoanRecords

> Promise<{ response: http.IncomingMessage; body: Array<UniLoanRecord>; }> listUniLoanRecords(opts)

Get load records

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginUniApi(client);
const opts = {
  'type': "type_example", // 'borrow' | 'repay' | type: borrow - borrow, repay - repay
  'currency': "BTC", // string | Retrieve data of the specified currency
  'currencyPair': "BTC_USDT", // string | Currency pair
  'page': 1, // number | Page number
  'limit': 100 // number | Maximum response items.  Default: 100, minimum: 1, Maximum: 100
};
api.listUniLoanRecords(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **Type**| type: borrow - borrow, repay - repay | [optional] [default to undefined]
 **currency** | **string**| Retrieve data of the specified currency | [optional] [default to undefined]
 **currencyPair** | **string**| Currency pair | [optional] [default to undefined]
 **page** | **number**| Page number | [optional] [default to 1]
 **limit** | **number**| Maximum response items.  Default: 100, minimum: 1, Maximum: 100 | [optional] [default to 100]

### Return type

Promise<{ response: AxiosResponse; body: Array<UniLoanRecord>; }> [UniLoanRecord](UniLoanRecord.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listUniLoanInterestRecords

> Promise<{ response: http.IncomingMessage; body: Array<UniLoanInterestRecord>; }> listUniLoanInterestRecords(opts)

List interest records

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginUniApi(client);
const opts = {
  'currencyPair': "BTC_USDT", // string | Currency pair
  'currency': "BTC", // string | Retrieve data of the specified currency
  'page': 1, // number | Page number
  'limit': 100 // number | Maximum response items.  Default: 100, minimum: 1, Maximum: 100
};
api.listUniLoanInterestRecords(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **string**| Currency pair | [optional] [default to undefined]
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

## getUniBorrowable

> Promise<{ response: http.IncomingMessage; body: MaxUniBorrowable; }> getUniBorrowable(currency, currencyPair)

Get maximum borrowable

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginUniApi(client);
const currency = "BTC"; // string | Retrieve data of the specified currency
const currencyPair = "BTC_USDT"; // string | Currency pair
api.getUniBorrowable(currency, currencyPair)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Retrieve data of the specified currency | [default to undefined]
 **currencyPair** | **string**| Currency pair | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: MaxUniBorrowable; }> [MaxUniBorrowable](MaxUniBorrowable.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
