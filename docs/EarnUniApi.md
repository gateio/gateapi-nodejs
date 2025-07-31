# EarnUniApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listUniCurrencies**](EarnUniApi.md#listUniCurrencies) | **GET** /earn/uni/currencies | Query lending currency list
[**getUniCurrency**](EarnUniApi.md#getUniCurrency) | **GET** /earn/uni/currencies/{currency} | Query single lending currency details
[**listUserUniLends**](EarnUniApi.md#listUserUniLends) | **GET** /earn/uni/lends | Query user\&#39;s lending order list
[**createUniLend**](EarnUniApi.md#createUniLend) | **POST** /earn/uni/lends | Create lending or redemption
[**changeUniLend**](EarnUniApi.md#changeUniLend) | **PATCH** /earn/uni/lends | Amend user lending information
[**listUniLendRecords**](EarnUniApi.md#listUniLendRecords) | **GET** /earn/uni/lend_records | Query lending transaction records
[**getUniInterest**](EarnUniApi.md#getUniInterest) | **GET** /earn/uni/interests/{currency} | Query user\&#39;s total interest income for specified currency
[**listUniInterestRecords**](EarnUniApi.md#listUniInterestRecords) | **GET** /earn/uni/interest_records | Query user dividend records
[**getUniInterestStatus**](EarnUniApi.md#getUniInterestStatus) | **GET** /earn/uni/interest_status/{currency} | Query currency interest compounding status
[**listUniChart**](EarnUniApi.md#listUniChart) | **GET** /earn/uni/chart | UniLoan currency annualized trend chart
[**listUniRate**](EarnUniApi.md#listUniRate) | **GET** /earn/uni/rate | Currency estimated annualized interest rate


## listUniCurrencies

> Promise<{ response: http.IncomingMessage; body: Array<UniCurrency>; }> listUniCurrencies()

Query lending currency list

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.EarnUniApi(client);
api.listUniCurrencies()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: Array<UniCurrency>; }> [UniCurrency](UniCurrency.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getUniCurrency

> Promise<{ response: http.IncomingMessage; body: UniCurrency; }> getUniCurrency(currency)

Query single lending currency details

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.EarnUniApi(client);
const currency = "btc"; // string | Currency
api.getUniCurrency(currency)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Currency | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: UniCurrency; }> [UniCurrency](UniCurrency.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listUserUniLends

> Promise<{ response: http.IncomingMessage; body: Array<UniLend>; }> listUserUniLends(opts)

Query user\&#39;s lending order list

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.EarnUniApi(client);
const opts = {
  'currency': "BTC", // string | Query by specified currency name
  'page': 1, // number | Page number
  'limit': 100 // number | Maximum number of items returned. Default: 100, minimum: 1, maximum: 100
};
api.listUserUniLends(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Query by specified currency name | [optional] [default to undefined]
 **page** | **number**| Page number | [optional] [default to 1]
 **limit** | **number**| Maximum number of items returned. Default: 100, minimum: 1, maximum: 100 | [optional] [default to 100]

### Return type

Promise<{ response: AxiosResponse; body: Array<UniLend>; }> [UniLend](UniLend.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createUniLend

> Promise<{ response: http.IncomingMessage; body?: any; }> createUniLend(createUniLend)

Create lending or redemption

Lending: When lending, a minimum lending rate must be set. After successful lending is determined on an hourly basis, earnings will be calculated based on the determined rate.  Earnings for each hour will be settled at the top of the hour. If lending fails due to an excessively high interest rate, no interest will be earned for that hour.  If funds are redeemed before the hourly for that hour.  Priority: Under the same interest rate, wealth management products created or modified earlier will be prioritized for lending.  Redemption: For funds that failed to be lent, redemption will be credited immediately. For funds successfully lent, they are entitled to the earnings for that hour, and redemption will be credited in the next hourly interval.  Note: The two minutes before and after the hourly mark are the settlement period, during which lending and redemption are prohibited. 

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.EarnUniApi(client);
const createUniLend = new CreateUniLend(); // CreateUniLend | 
api.createUniLend(createUniLend)
   .then(value => console.log('API called successfully.'),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createUniLend** | [**CreateUniLend**](CreateUniLend.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body?: any; }> 

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

## changeUniLend

> Promise<{ response: http.IncomingMessage; body?: any; }> changeUniLend(patchUniLend)

Amend user lending information

Currently only supports amending minimum interest rate (hourly)

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.EarnUniApi(client);
const patchUniLend = new PatchUniLend(); // PatchUniLend | 
api.changeUniLend(patchUniLend)
   .then(value => console.log('API called successfully.'),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchUniLend** | [**PatchUniLend**](PatchUniLend.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body?: any; }> 

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

## listUniLendRecords

> Promise<{ response: http.IncomingMessage; body: Array<UniLendRecord>; }> listUniLendRecords(opts)

Query lending transaction records

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.EarnUniApi(client);
const opts = {
  'currency': "BTC", // string | Query by specified currency name
  'page': 1, // number | Page number
  'limit': 100, // number | Maximum number of items returned. Default: 100, minimum: 1, maximum: 100
  'from': 1547706332, // number | Start timestamp  Specify start time, time format is Unix timestamp. If not specified, it defaults to (the data start time of the time range actually returned by to and limit)
  'to': 1547706332, // number | Termination Timestamp  Specify the end time. If not specified, it defaults to the current time, and the time format is a Unix timestamp
  'type': "lend" // 'lend' | 'redeem' | Operation type: lend - Lend, redeem - Redeem
};
api.listUniLendRecords(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Query by specified currency name | [optional] [default to undefined]
 **page** | **number**| Page number | [optional] [default to 1]
 **limit** | **number**| Maximum number of items returned. Default: 100, minimum: 1, maximum: 100 | [optional] [default to 100]
 **from** | **number**| Start timestamp  Specify start time, time format is Unix timestamp. If not specified, it defaults to (the data start time of the time range actually returned by to and limit) | [optional] [default to undefined]
 **to** | **number**| Termination Timestamp  Specify the end time. If not specified, it defaults to the current time, and the time format is a Unix timestamp | [optional] [default to undefined]
 **type** | **Type**| Operation type: lend - Lend, redeem - Redeem | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<UniLendRecord>; }> [UniLendRecord](UniLendRecord.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getUniInterest

> Promise<{ response: http.IncomingMessage; body: UniLendInterest; }> getUniInterest(currency)

Query user\&#39;s total interest income for specified currency

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.EarnUniApi(client);
const currency = "btc"; // string | Currency
api.getUniInterest(currency)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Currency | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: UniLendInterest; }> [UniLendInterest](UniLendInterest.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listUniInterestRecords

> Promise<{ response: http.IncomingMessage; body: Array<UniInterestRecord>; }> listUniInterestRecords(opts)

Query user dividend records

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.EarnUniApi(client);
const opts = {
  'currency': "BTC", // string | Query by specified currency name
  'page': 1, // number | Page number
  'limit': 100, // number | Maximum number of items returned. Default: 100, minimum: 1, maximum: 100
  'from': 1547706332, // number | Start timestamp  Specify start time, time format is Unix timestamp. If not specified, it defaults to (the data start time of the time range actually returned by to and limit)
  'to': 1547706332 // number | Termination Timestamp  Specify the end time. If not specified, it defaults to the current time, and the time format is a Unix timestamp
};
api.listUniInterestRecords(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Query by specified currency name | [optional] [default to undefined]
 **page** | **number**| Page number | [optional] [default to 1]
 **limit** | **number**| Maximum number of items returned. Default: 100, minimum: 1, maximum: 100 | [optional] [default to 100]
 **from** | **number**| Start timestamp  Specify start time, time format is Unix timestamp. If not specified, it defaults to (the data start time of the time range actually returned by to and limit) | [optional] [default to undefined]
 **to** | **number**| Termination Timestamp  Specify the end time. If not specified, it defaults to the current time, and the time format is a Unix timestamp | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<UniInterestRecord>; }> [UniInterestRecord](UniInterestRecord.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getUniInterestStatus

> Promise<{ response: http.IncomingMessage; body: UniCurrencyInterest; }> getUniInterestStatus(currency)

Query currency interest compounding status

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.EarnUniApi(client);
const currency = "btc"; // string | Currency
api.getUniInterestStatus(currency)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Currency | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: UniCurrencyInterest; }> [UniCurrencyInterest](UniCurrencyInterest.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listUniChart

> Promise<{ response: http.IncomingMessage; body: Array<InlineResponse200>; }> listUniChart(from, to, asset)

UniLoan currency annualized trend chart

Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-07-17 21:35+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME &lt;EMAIL@ADDRESS&gt; Language: en Language-Team: en &lt;L@li.org&gt; Plural-Forms: nplurals&#x3D;2; plural&#x3D;(n !&#x3D;1) MIME-Version: 1.0 Content-Type: text/plain; charset&#x3D;utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0 

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.EarnUniApi(client);
const from = 1719763200; // number | Start timestamp in seconds, maximum span 30 days
const to = 1722441600; // number | End timestamp in seconds, maximum span 30 days
const asset = "BTC"; // string | Currency name
api.listUniChart(from, to, asset)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | **number**| Start timestamp in seconds, maximum span 30 days | [default to undefined]
 **to** | **number**| End timestamp in seconds, maximum span 30 days | [default to undefined]
 **asset** | **string**| Currency name | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<InlineResponse200>; }> [InlineResponse200](InlineResponse200.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listUniRate

> Promise<{ response: http.IncomingMessage; body: Array<InlineResponse2001>; }> listUniRate()

Currency estimated annualized interest rate

Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-07-17 21:35+0800 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME &lt;EMAIL@ADDRESS&gt; Language: en Language-Team: en &lt;L@li.org&gt; Plural-Forms: nplurals&#x3D;2; plural&#x3D;(n !&#x3D;1) MIME-Version: 1.0 Content-Type: text/plain; charset&#x3D;utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0 

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.EarnUniApi(client);
api.listUniRate()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: Array<InlineResponse2001>; }> [InlineResponse2001](InlineResponse2001.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
