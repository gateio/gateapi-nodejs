# MarginUniApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listUniCurrencyPairs**](MarginUniApi.md#listUniCurrencyPairs) | **GET** /margin/uni/currency_pairs | List lending markets
[**getUniCurrencyPair**](MarginUniApi.md#getUniCurrencyPair) | **GET** /margin/uni/currency_pairs/{currency_pair} | Get lending market details
[**getMarginUniEstimateRate**](MarginUniApi.md#getMarginUniEstimateRate) | **GET** /margin/uni/estimate_rate | Estimate interest rate for isolated margin currencies
[**listUniLoans**](MarginUniApi.md#listUniLoans) | **GET** /margin/uni/loans | Query loans
[**createUniLoan**](MarginUniApi.md#createUniLoan) | **POST** /margin/uni/loans | Borrow or repay
[**listUniLoanRecords**](MarginUniApi.md#listUniLoanRecords) | **GET** /margin/uni/loan_records | Query loan records
[**listUniLoanInterestRecords**](MarginUniApi.md#listUniLoanInterestRecords) | **GET** /margin/uni/interest_records | Query interest deduction records
[**getUniBorrowable**](MarginUniApi.md#getUniBorrowable) | **GET** /margin/uni/borrowable | Query maximum borrowable amount by currency


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

Get lending market details

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

## getMarginUniEstimateRate

> Promise<{ response: http.IncomingMessage; body: { [key: string]: string; }; }> getMarginUniEstimateRate(currencies)

Estimate interest rate for isolated margin currencies

Interest rates change hourly based on lending depth, so completely accurate rates cannot be provided.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginUniApi(client);
const currencies = [["BTC","GT"]]; // Array<string> | Array of currency names to query, maximum 10
api.getMarginUniEstimateRate(currencies)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencies** | [**Array&lt;string&gt;**](string.md)| Array of currency names to query, maximum 10 | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: { [key: string]: string; }; }> [string](string.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listUniLoans

> Promise<{ response: http.IncomingMessage; body: Array<UniLoan>; }> listUniLoans(opts)

Query loans

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
  'currency': "BTC", // string | Query by specified currency name
  'page': 1, // number | Page number
  'limit': 100 // number | Maximum number of items returned. Default: 100, minimum: 1, maximum: 100
};
api.listUniLoans(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **string**| Currency pair | [optional] [default to undefined]
 **currency** | **string**| Query by specified currency name | [optional] [default to undefined]
 **page** | **number**| Page number | [optional] [default to 1]
 **limit** | **number**| Maximum number of items returned. Default: 100, minimum: 1, maximum: 100 | [optional] [default to 100]

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

Query loan records

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
  'type': "type_example", // 'borrow' | 'repay' | Type: `borrow` - borrow, `repay` - repay
  'currency': "BTC", // string | Query by specified currency name
  'currencyPair': "BTC_USDT", // string | Currency pair
  'page': 1, // number | Page number
  'limit': 100 // number | Maximum number of items returned. Default: 100, minimum: 1, maximum: 100
};
api.listUniLoanRecords(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **Type**| Type: &#x60;borrow&#x60; - borrow, &#x60;repay&#x60; - repay | [optional] [default to undefined]
 **currency** | **string**| Query by specified currency name | [optional] [default to undefined]
 **currencyPair** | **string**| Currency pair | [optional] [default to undefined]
 **page** | **number**| Page number | [optional] [default to 1]
 **limit** | **number**| Maximum number of items returned. Default: 100, minimum: 1, maximum: 100 | [optional] [default to 100]

### Return type

Promise<{ response: AxiosResponse; body: Array<UniLoanRecord>; }> [UniLoanRecord](UniLoanRecord.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listUniLoanInterestRecords

> Promise<{ response: http.IncomingMessage; body: Array<UniLoanInterestRecord>; }> listUniLoanInterestRecords(opts)

Query interest deduction records

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
  'currency': "BTC", // string | Query by specified currency name
  'page': 1, // number | Page number
  'limit': 100, // number | Maximum number of records returned in a single list
  'from': 1547706332, // number | Start timestamp  Specify start time, time format is Unix timestamp. If not specified, it defaults to (the data start time of the time range actually returned by to and limit)
  'to': 1547706332 // number | Termination Timestamp  Specify the end time. If not specified, it defaults to the current time, and the time format is a Unix timestamp
};
api.listUniLoanInterestRecords(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **string**| Currency pair | [optional] [default to undefined]
 **currency** | **string**| Query by specified currency name | [optional] [default to undefined]
 **page** | **number**| Page number | [optional] [default to 1]
 **limit** | **number**| Maximum number of records returned in a single list | [optional] [default to 100]
 **from** | **number**| Start timestamp  Specify start time, time format is Unix timestamp. If not specified, it defaults to (the data start time of the time range actually returned by to and limit) | [optional] [default to undefined]
 **to** | **number**| Termination Timestamp  Specify the end time. If not specified, it defaults to the current time, and the time format is a Unix timestamp | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<UniLoanInterestRecord>; }> [UniLoanInterestRecord](UniLoanInterestRecord.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getUniBorrowable

> Promise<{ response: http.IncomingMessage; body: MaxUniBorrowable; }> getUniBorrowable(currency, currencyPair)

Query maximum borrowable amount by currency

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginUniApi(client);
const currency = "BTC"; // string | Query by specified currency name
const currencyPair = "BTC_USDT"; // string | Currency pair
api.getUniBorrowable(currency, currencyPair)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Query by specified currency name | [default to undefined]
 **currencyPair** | **string**| Currency pair | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: MaxUniBorrowable; }> [MaxUniBorrowable](MaxUniBorrowable.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
