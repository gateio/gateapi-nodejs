# MarginApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listMarginCurrencyPairs**](MarginApi.md#listMarginCurrencyPairs) | **GET** /margin/currency_pairs | List all supported currency pairs supported in margin trading
[**getMarginCurrencyPair**](MarginApi.md#getMarginCurrencyPair) | **GET** /margin/currency_pairs/{currency_pair} | Query one single margin currency pair
[**listFundingBook**](MarginApi.md#listFundingBook) | **GET** /margin/funding_book | Order book of lending loans
[**listMarginAccounts**](MarginApi.md#listMarginAccounts) | **GET** /margin/accounts | Margin account list
[**listMarginAccountBook**](MarginApi.md#listMarginAccountBook) | **GET** /margin/account_book | List margin account balance change history
[**listFundingAccounts**](MarginApi.md#listFundingAccounts) | **GET** /margin/funding_accounts | Funding account list
[**listLoans**](MarginApi.md#listLoans) | **GET** /margin/loans | List all loans
[**createLoan**](MarginApi.md#createLoan) | **POST** /margin/loans | Lend or borrow
[**mergeLoans**](MarginApi.md#mergeLoans) | **POST** /margin/merged_loans | Merge multiple lending loans
[**getLoan**](MarginApi.md#getLoan) | **GET** /margin/loans/{loan_id} | Retrieve one single loan detail
[**cancelLoan**](MarginApi.md#cancelLoan) | **DELETE** /margin/loans/{loan_id} | Cancel lending loan
[**updateLoan**](MarginApi.md#updateLoan) | **PATCH** /margin/loans/{loan_id} | Modify a loan
[**listLoanRepayments**](MarginApi.md#listLoanRepayments) | **GET** /margin/loans/{loan_id}/repayment | List loan repayment records
[**repayLoan**](MarginApi.md#repayLoan) | **POST** /margin/loans/{loan_id}/repayment | Repay a loan
[**listLoanRecords**](MarginApi.md#listLoanRecords) | **GET** /margin/loan_records | List repayment records of specified loan
[**getLoanRecord**](MarginApi.md#getLoanRecord) | **GET** /margin/loan_records/{loan_record_id} | Get one single loan record
[**updateLoanRecord**](MarginApi.md#updateLoanRecord) | **PATCH** /margin/loan_records/{loan_record_id} | Modify a loan record


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

Promise<{ response: AxiosResponse; body: Array<MarginCurrencyPair>; }> [MarginCurrencyPair](MarginCurrencyPair.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getMarginCurrencyPair

> Promise<{ response: http.IncomingMessage; body: MarginCurrencyPair; }> getMarginCurrencyPair(currencyPair)

Query one single margin currency pair

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.MarginApi(client);
const currencyPair = "BTC_USDT"; // string | Margin currency pair
api.getMarginCurrencyPair(currencyPair)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **string**| Margin currency pair | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: MarginCurrencyPair; }> [MarginCurrencyPair](MarginCurrencyPair.md)

### Authorization

No authorization required

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
const currency = "BTC"; // string | Retrieved specified currency related data
api.listFundingBook(currency)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Retrieved specified currency related data | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<FundingBookItem>; }> [FundingBookItem](FundingBookItem.md)

### Authorization

No authorization required

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
  'currencyPair': "BTC_USDT" // string | Currency pair
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

Promise<{ response: AxiosResponse; body: Array<MarginAccount>; }> [MarginAccount](MarginAccount.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listMarginAccountBook

> Promise<{ response: http.IncomingMessage; body: Array<MarginAccountBook>; }> listMarginAccountBook(opts)

List margin account balance change history

Only transferring from or to margin account are provided for now. Time range allows 30 days at most

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
  'currency': "currency_example", // string | List records related to specified currency only. If specified, `currency_pair` is also required.
  'currencyPair': "currencyPair_example", // string | List records related to specified currency pair. Used in combination with `currency`. Ignored if `currency` is not provided
  'from': 56, // number | Time range beginning, default to 7 days before current time
  'to': 56, // number | Time range ending, default to current time
  'page': 1, // number | Page number
  'limit': 100 // number | Maximum number of records returned in one list
};
api.listMarginAccountBook(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| List records related to specified currency only. If specified, &#x60;currency_pair&#x60; is also required. | [optional] [default to undefined]
 **currencyPair** | **string**| List records related to specified currency pair. Used in combination with &#x60;currency&#x60;. Ignored if &#x60;currency&#x60; is not provided | [optional] [default to undefined]
 **from** | **number**| Time range beginning, default to 7 days before current time | [optional] [default to undefined]
 **to** | **number**| Time range ending, default to current time | [optional] [default to undefined]
 **page** | **number**| Page number | [optional] [default to 1]
 **limit** | **number**| Maximum number of records returned in one list | [optional] [default to 100]

### Return type

Promise<{ response: AxiosResponse; body: Array<MarginAccountBook>; }> [MarginAccountBook](MarginAccountBook.md)

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
  'currency': "BTC" // string | Retrieved specified currency related data
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

Promise<{ response: AxiosResponse; body: Array<FundingAccount>; }> [FundingAccount](FundingAccount.md)

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
const status = "open"; // 'open' | 'loaned' | 'finished' | 'auto_repaid' | Loan status
const side = "lend"; // 'lend' | 'borrow' | Lend or borrow
const opts = {
  'currency': "BTC", // string | Retrieved specified currency related data
  'currencyPair': "BTC_USDT", // string | Currency pair
  'sortBy': "rate", // 'create_time' | 'rate' | Specify which field is used to sort. `create_time` or `rate` is supported. Default to `create_time`
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
 **status** | **Status**| Loan status | [default to undefined]
 **side** | **Side**| Lend or borrow | [default to undefined]
 **currency** | **string**| Retrieved specified currency related data | [optional] [default to undefined]
 **currencyPair** | **string**| Currency pair | [optional] [default to undefined]
 **sortBy** | **SortBy**| Specify which field is used to sort. &#x60;create_time&#x60; or &#x60;rate&#x60; is supported. Default to &#x60;create_time&#x60; | [optional] [default to undefined]
 **reverseSort** | **boolean**| Whether to sort in descending order. Default to &#x60;true&#x60; | [optional] [default to undefined]
 **page** | **number**| Page number | [optional] [default to 1]
 **limit** | **number**| Maximum number of records returned in one list | [optional] [default to 100]

### Return type

Promise<{ response: AxiosResponse; body: Array<Loan>; }> [Loan](Loan.md)

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
const loan = new Loan(); // Loan | 
api.createLoan(loan)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loan** | [**Loan**](Loan.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: Loan; }> [Loan](Loan.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
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
const currency = "BTC"; // string | Retrieved specified currency related data
const ids = "123,234,345"; // string | Lending loan ID list separated by `,`. Maximum of 20 IDs are allowed in one request
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

Promise<{ response: AxiosResponse; body: Loan; }> [Loan](Loan.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
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
const loanId = "12345"; // string | Loan ID
const side = "lend"; // 'lend' | 'borrow' | Lend or borrow
api.getLoan(loanId, side)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loanId** | **string**| Loan ID | [default to undefined]
 **side** | **Side**| Lend or borrow | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Loan; }> [Loan](Loan.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

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
const loanId = "12345"; // string | Loan ID
const currency = "BTC"; // string | Retrieved specified currency related data
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

Promise<{ response: AxiosResponse; body: Loan; }> [Loan](Loan.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
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
const loanId = "12345"; // string | Loan ID
const loanPatch = new LoanPatch(); // LoanPatch | 
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

Promise<{ response: AxiosResponse; body: Loan; }> [Loan](Loan.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
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
const loanId = "12345"; // string | Loan ID
api.listLoanRepayments(loanId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loanId** | **string**| Loan ID | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<Repayment>; }> [Repayment](Repayment.md)

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
const loanId = "12345"; // string | Loan ID
const repayRequest = new RepayRequest(); // RepayRequest | 
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

Promise<{ response: AxiosResponse; body: Loan; }> [Loan](Loan.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
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
const loanId = "12345"; // string | Loan ID
const opts = {
  'status': "loaned", // 'loaned' | 'finished' | Loan record status
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
 **status** | **Status**| Loan record status | [optional] [default to undefined]
 **page** | **number**| Page number | [optional] [default to 1]
 **limit** | **number**| Maximum number of records returned in one list | [optional] [default to 100]

### Return type

Promise<{ response: AxiosResponse; body: Array<LoanRecord>; }> [LoanRecord](LoanRecord.md)

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
const loanRecordId = "12345"; // string | Loan record ID
const loanId = "12345"; // string | Loan ID
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

Promise<{ response: AxiosResponse; body: LoanRecord; }> [LoanRecord](LoanRecord.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
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
const loanRecordId = "12345"; // string | Loan record ID
const loanPatch = new LoanPatch(); // LoanPatch | 
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

Promise<{ response: AxiosResponse; body: LoanRecord; }> [LoanRecord](LoanRecord.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
