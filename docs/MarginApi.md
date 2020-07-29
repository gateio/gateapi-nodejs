# GateApi.MarginApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelLoan**](MarginApi.md#cancelLoan) | **DELETE** /margin/loans/{loan_id} | Cancel lending loan
[**createLoan**](MarginApi.md#createLoan) | **POST** /margin/loans | Lend or borrow
[**getLoan**](MarginApi.md#getLoan) | **GET** /margin/loans/{loan_id} | Retrieve one single loan detail
[**getLoanRecord**](MarginApi.md#getLoanRecord) | **GET** /margin/loan_records/{loan_record_id} | Get one single loan record
[**listFundingAccounts**](MarginApi.md#listFundingAccounts) | **GET** /margin/funding_accounts | Funding account list
[**listFundingBook**](MarginApi.md#listFundingBook) | **GET** /margin/funding_book | Order book of lending loans
[**listLoanRecords**](MarginApi.md#listLoanRecords) | **GET** /margin/loan_records | List repayment records of specified loan
[**listLoanRepayments**](MarginApi.md#listLoanRepayments) | **GET** /margin/loans/{loan_id}/repayment | List loan repayment records
[**listLoans**](MarginApi.md#listLoans) | **GET** /margin/loans | List all loans
[**listMarginAccounts**](MarginApi.md#listMarginAccounts) | **GET** /margin/accounts | Margin account list
[**listMarginCurrencyPairs**](MarginApi.md#listMarginCurrencyPairs) | **GET** /margin/currency_pairs | List all supported currency pairs supported in margin trading
[**mergeLoans**](MarginApi.md#mergeLoans) | **POST** /margin/merged_loans | Merge multiple lending loans
[**repayLoan**](MarginApi.md#repayLoan) | **POST** /margin/loans/{loan_id}/repayment | Repay a loan
[**updateLoan**](MarginApi.md#updateLoan) | **PATCH** /margin/loans/{loan_id} | Modify a loan
[**updateLoanRecord**](MarginApi.md#updateLoanRecord) | **PATCH** /margin/loan_records/{loan_record_id} | Modify a loan record


## cancelLoan

> Promise<{ response: http.IncomingMessage; body: Loan; }> cancelLoan(loanId, currency)

Cancel lending loan

Only lending loans can be cancelled

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginApi(client);
const loanId = 12345; // string | Loan ID
const currency = BTC; // string | Retrieved specified currency related data
api.cancelLoan(loanId, currency)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loanId** | **string**| Loan ID | [default to undefined]
 **currency** | **string**| Retrieved specified currency related data | [default to undefined]

### Return type

Promise<{ response: http.IncomingMessage; body: Loan; }(Loan.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createLoan

> Promise<{ response: http.IncomingMessage; body: Loan; }> createLoan(loan)

Lend or borrow

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginApi(client);
const loan = {"id":"123435","create_time":"1548000000","expire_time":"1548100000","side":"borrow","status":"loaned","currency":"BTC","rate":"0.002","amount":"1.5","days":10,"auto_renew":true,"currency_pair":"ETH_BTC","left":"0","repaid":"0","paid_interest":"0","unpaid_interest":"0","fee_rate":"0.18","orig_id":"123424"}; // Loan | 
api.createLoan(loan)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loan** | [**Loan**](Loan.md)|  | 

### Return type

Promise<{ response: http.IncomingMessage; body: Loan; }(Loan.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## getLoan

> Promise<{ response: http.IncomingMessage; body: Loan; }> getLoan(loanId, side)

Retrieve one single loan detail

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginApi(client);
const loanId = 12345; // string | Loan ID
const side = lend; // 'lend' | 'borrow' | Lend or borrow
api.getLoan(loanId, side)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loanId** | **string**| Loan ID | [default to undefined]
 **side** | **&#39;lend&#39; | &#39;borrow&#39;**| Lend or borrow | [default to undefined]

### Return type

Promise<{ response: http.IncomingMessage; body: Loan; }(Loan.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getLoanRecord

> Promise<{ response: http.IncomingMessage; body: LoanRecord; }> getLoanRecord(loanRecordId, loanId)

Get one single loan record

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginApi(client);
const loanRecordId = 12345; // string | Loan record ID
const loanId = 12345; // string | Loan ID
api.getLoanRecord(loanRecordId, loanId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loanRecordId** | **string**| Loan record ID | [default to undefined]
 **loanId** | **string**| Loan ID | [default to undefined]

### Return type

Promise<{ response: http.IncomingMessage; body: LoanRecord; }(LoanRecord.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listFundingAccounts

> Promise<{ response: http.IncomingMessage; body: Array<FundingAccount>; }> listFundingAccounts(opts)

Funding account list

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginApi(client);
const opts = {
  'currency': BTC // string | Retrieved specified currency related data
};
api.listFundingAccounts(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Retrieved specified currency related data | [optional] [default to undefined]

### Return type

Promise<{ response: http.IncomingMessage; body: Array<FundingAccount>; }(FundingAccount.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listFundingBook

> Promise<{ response: http.IncomingMessage; body: Array<FundingBookItem>; }> listFundingBook(currency)

Order book of lending loans

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.MarginApi(client);
const currency = BTC; // string | Retrieved specified currency related data
api.listFundingBook(currency)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Retrieved specified currency related data | [default to undefined]

### Return type

Promise<{ response: http.IncomingMessage; body: Array<FundingBookItem>; }(FundingBookItem.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listLoanRecords

> Promise<{ response: http.IncomingMessage; body: Array<LoanRecord>; }> listLoanRecords(loanId, opts)

List repayment records of specified loan

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginApi(client);
const loanId = 12345; // string | Loan ID
const opts = {
  'status': loaned, // 'loaned' | 'finished' | Loan record status
  'page': 1, // number | Page number
  'limit': 100 // number | Maximum number of records returned in one list
};
api.listLoanRecords(loanId, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loanId** | **string**| Loan ID | [default to undefined]
 **status** | **&#39;loaned&#39; | &#39;finished&#39;**| Loan record status | [optional] [default to undefined]
 **page** | **number**| Page number | [optional] [default to 1]
 **limit** | **number**| Maximum number of records returned in one list | [optional] [default to 100]

### Return type

Promise<{ response: http.IncomingMessage; body: Array<LoanRecord>; }(LoanRecord.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listLoanRepayments

> Promise<{ response: http.IncomingMessage; body: Array<Repayment>; }> listLoanRepayments(loanId)

List loan repayment records

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginApi(client);
const loanId = 12345; // string | Loan ID
api.listLoanRepayments(loanId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loanId** | **string**| Loan ID | [default to undefined]

### Return type

Promise<{ response: http.IncomingMessage; body: Array<Repayment>; }(Repayment.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listLoans

> Promise<{ response: http.IncomingMessage; body: Array<Loan>; }> listLoans(status, side, opts)

List all loans

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginApi(client);
const status = open; // 'open' | 'loaned' | 'finished' | 'auto_repaid' | Loan status
const side = lend; // 'lend' | 'borrow' | Lend or borrow
const opts = {
  'currency': BTC, // string | Retrieved specified currency related data
  'currencyPair': BTC_USDT, // string | Currency pair
  'sortBy': rate, // 'create_time' | 'rate' | Specify which field is used to sort. `create_time` or `rate` is supported. Default to `create_time`
  'reverseSort': false, // boolean | Whether to sort in descending order. Default to `true`
  'page': 1, // number | Page number
  'limit': 100 // number | Maximum number of records returned in one list
};
api.listLoans(status, side, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **&#39;open&#39; | &#39;loaned&#39; | &#39;finished&#39; | &#39;auto_repaid&#39;**| Loan status | [default to undefined]
 **side** | **&#39;lend&#39; | &#39;borrow&#39;**| Lend or borrow | [default to undefined]
 **currency** | **string**| Retrieved specified currency related data | [optional] [default to undefined]
 **currencyPair** | **string**| Currency pair | [optional] [default to undefined]
 **sortBy** | **&#39;create_time&#39; | &#39;rate&#39;**| Specify which field is used to sort. &#x60;create_time&#x60; or &#x60;rate&#x60; is supported. Default to &#x60;create_time&#x60; | [optional] [default to undefined]
 **reverseSort** | **boolean**| Whether to sort in descending order. Default to &#x60;true&#x60; | [optional] [default to undefined]
 **page** | **number**| Page number | [optional] [default to 1]
 **limit** | **number**| Maximum number of records returned in one list | [optional] [default to 100]

### Return type

Promise<{ response: http.IncomingMessage; body: Array<Loan>; }(Loan.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listMarginAccounts

> Promise<{ response: http.IncomingMessage; body: Array<MarginAccount>; }> listMarginAccounts(opts)

Margin account list

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginApi(client);
const opts = {
  'currencyPair': BTC_USDT // string | Currency pair
};
api.listMarginAccounts(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **string**| Currency pair | [optional] [default to undefined]

### Return type

Promise<{ response: http.IncomingMessage; body: Array<MarginAccount>; }(MarginAccount.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listMarginCurrencyPairs

> Promise<{ response: http.IncomingMessage; body: Array<MarginCurrencyPair>; }> listMarginCurrencyPairs()

List all supported currency pairs supported in margin trading

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.MarginApi(client);
api.listMarginCurrencyPairs()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: http.IncomingMessage; body: Array<MarginCurrencyPair>; }(MarginCurrencyPair.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## mergeLoans

> Promise<{ response: http.IncomingMessage; body: Loan; }> mergeLoans(currency, ids)

Merge multiple lending loans

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginApi(client);
const currency = BTC; // string | Retrieved specified currency related data
const ids = 123,234,345; // string | Lending loan ID list separated by `,`. Maximum of 20 IDs are allowed in one request
api.mergeLoans(currency, ids)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Retrieved specified currency related data | [default to undefined]
 **ids** | **string**| Lending loan ID list separated by &#x60;,&#x60;. Maximum of 20 IDs are allowed in one request | [default to undefined]

### Return type

Promise<{ response: http.IncomingMessage; body: Loan; }(Loan.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## repayLoan

> Promise<{ response: http.IncomingMessage; body: Loan; }> repayLoan(loanId, repayRequest)

Repay a loan

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginApi(client);
const loanId = 12345; // string | Loan ID
const repayRequest = {"currency_pair":"ETH_BTC","currency":"ETH","mode":"partial","amount":"100"}; // RepayRequest | 
api.repayLoan(loanId, repayRequest)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loanId** | **string**| Loan ID | [default to undefined]
 **repayRequest** | [**RepayRequest**](RepayRequest.md)|  | 

### Return type

Promise<{ response: http.IncomingMessage; body: Loan; }(Loan.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## updateLoan

> Promise<{ response: http.IncomingMessage; body: Loan; }> updateLoan(loanId, loanPatch)

Modify a loan

Only &#x60;auto_renew&#x60; modification is supported currently

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginApi(client);
const loanId = 12345; // string | Loan ID
const loanPatch = {"currency":"BTC","side":"borrow","currency_pair":"BTC_USDT","auto_renew":false}; // LoanPatch | 
api.updateLoan(loanId, loanPatch)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loanId** | **string**| Loan ID | [default to undefined]
 **loanPatch** | [**LoanPatch**](LoanPatch.md)|  | 

### Return type

Promise<{ response: http.IncomingMessage; body: Loan; }(Loan.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## updateLoanRecord

> Promise<{ response: http.IncomingMessage; body: LoanRecord; }> updateLoanRecord(loanRecordId, loanPatch)

Modify a loan record

Only &#x60;auto_renew&#x60; modification is supported currently

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.MarginApi(client);
const loanRecordId = 12345; // string | Loan record ID
const loanPatch = {"currency":"BTC","side":"borrow","currency_pair":"BTC_USDT","auto_renew":false}; // LoanPatch | 
api.updateLoanRecord(loanRecordId, loanPatch)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loanRecordId** | **string**| Loan record ID | [default to undefined]
 **loanPatch** | [**LoanPatch**](LoanPatch.md)|  | 

### Return type

Promise<{ response: http.IncomingMessage; body: LoanRecord; }(LoanRecord.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
