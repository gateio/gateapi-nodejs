# UnifiedApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listUnifiedAccounts**](UnifiedApi.md#listUnifiedAccounts) | **GET** /unified/accounts | Get unified account information
[**getUnifiedBorrowable**](UnifiedApi.md#getUnifiedBorrowable) | **GET** /unified/borrowable | Query maximum borrowable amount for unified account
[**getUnifiedTransferable**](UnifiedApi.md#getUnifiedTransferable) | **GET** /unified/transferable | Query maximum transferable amount for unified account
[**getUnifiedTransferables**](UnifiedApi.md#getUnifiedTransferables) | **GET** /unified/transferables | Batch query maximum transferable amount for unified accounts. Each currency shows the maximum value. After user withdrawal, the transferable amount for all currencies will change
[**getUnifiedBorrowableList**](UnifiedApi.md#getUnifiedBorrowableList) | **GET** /unified/batch_borrowable | Batch query unified account maximum borrowable amount
[**listUnifiedLoans**](UnifiedApi.md#listUnifiedLoans) | **GET** /unified/loans | Query loans
[**createUnifiedLoan**](UnifiedApi.md#createUnifiedLoan) | **POST** /unified/loans | Borrow or repay
[**listUnifiedLoanRecords**](UnifiedApi.md#listUnifiedLoanRecords) | **GET** /unified/loan_records | Query loan records
[**listUnifiedLoanInterestRecords**](UnifiedApi.md#listUnifiedLoanInterestRecords) | **GET** /unified/interest_records | Query interest deduction records
[**getUnifiedRiskUnits**](UnifiedApi.md#getUnifiedRiskUnits) | **GET** /unified/risk_units | Get user risk unit details
[**getUnifiedMode**](UnifiedApi.md#getUnifiedMode) | **GET** /unified/unified_mode | Query mode of the unified account
[**setUnifiedMode**](UnifiedApi.md#setUnifiedMode) | **PUT** /unified/unified_mode | Set unified account mode
[**getUnifiedEstimateRate**](UnifiedApi.md#getUnifiedEstimateRate) | **GET** /unified/estimate_rate | Query unified account estimated interest rate
[**listCurrencyDiscountTiers**](UnifiedApi.md#listCurrencyDiscountTiers) | **GET** /unified/currency_discount_tiers | Query unified account tiered discount
[**listLoanMarginTiers**](UnifiedApi.md#listLoanMarginTiers) | **GET** /unified/loan_margin_tiers | Query unified account tiered loan margin
[**calculatePortfolioMargin**](UnifiedApi.md#calculatePortfolioMargin) | **POST** /unified/portfolio_calculator | Portfolio margin calculator
[**getUserLeverageCurrencyConfig**](UnifiedApi.md#getUserLeverageCurrencyConfig) | **GET** /unified/leverage/user_currency_config | Maximum and minimum currency leverage that can be set
[**getUserLeverageCurrencySetting**](UnifiedApi.md#getUserLeverageCurrencySetting) | **GET** /unified/leverage/user_currency_setting | Get user currency leverage
[**setUserLeverageCurrencySetting**](UnifiedApi.md#setUserLeverageCurrencySetting) | **POST** /unified/leverage/user_currency_setting | Set loan currency leverage
[**listUnifiedCurrencies**](UnifiedApi.md#listUnifiedCurrencies) | **GET** /unified/currencies | List of loan currencies supported by unified account
[**getHistoryLoanRate**](UnifiedApi.md#getHistoryLoanRate) | **GET** /unified/history_loan_rate | Get historical lending rates
[**setUnifiedCollateral**](UnifiedApi.md#setUnifiedCollateral) | **POST** /unified/collateral_currencies | Set collateral currency


## listUnifiedAccounts

> Promise<{ response: http.IncomingMessage; body: UnifiedAccount; }> listUnifiedAccounts(opts)

Get unified account information

The assets of each currency in the account will be adjusted according to their liquidity, defined by corresponding adjustment coefficients, and then uniformly converted to USD to calculate the total asset value and position value of the account.  For specific formulas, please refer to [Margin Formula](#margin-formula)

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.UnifiedApi(client);
const opts = {
  'currency': "BTC", // string | Query by specified currency name
  'subUid': "10001" // string | Sub account user ID
};
api.listUnifiedAccounts(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Query by specified currency name | [optional] [default to undefined]
 **subUid** | **string**| Sub account user ID | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: UnifiedAccount; }> [UnifiedAccount](UnifiedAccount.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getUnifiedBorrowable

> Promise<{ response: http.IncomingMessage; body: UnifiedBorrowable; }> getUnifiedBorrowable(currency)

Query maximum borrowable amount for unified account

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.UnifiedApi(client);
const currency = "BTC"; // string | Query by specified currency name
api.getUnifiedBorrowable(currency)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Query by specified currency name | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: UnifiedBorrowable; }> [UnifiedBorrowable](UnifiedBorrowable.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getUnifiedTransferable

> Promise<{ response: http.IncomingMessage; body: UnifiedTransferable; }> getUnifiedTransferable(currency)

Query maximum transferable amount for unified account

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.UnifiedApi(client);
const currency = "BTC"; // string | Query by specified currency name
api.getUnifiedTransferable(currency)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Query by specified currency name | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: UnifiedTransferable; }> [UnifiedTransferable](UnifiedTransferable.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getUnifiedTransferables

> Promise<{ response: http.IncomingMessage; body: Array<TransferablesResult>; }> getUnifiedTransferables(currencies)

Batch query maximum transferable amount for unified accounts. Each currency shows the maximum value. After user withdrawal, the transferable amount for all currencies will change

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.UnifiedApi(client);
const currencies = "BTC,ETH"; // string | Specify the currency name to query in batches, and support up to 100 pass parameters at a time
api.getUnifiedTransferables(currencies)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencies** | **string**| Specify the currency name to query in batches, and support up to 100 pass parameters at a time | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<TransferablesResult>; }> [TransferablesResult](TransferablesResult.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getUnifiedBorrowableList

> Promise<{ response: http.IncomingMessage; body: Array<UnifiedBorrowable1>; }> getUnifiedBorrowableList(currencies)

Batch query unified account maximum borrowable amount

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.UnifiedApi(client);
const currencies = [["BTC","GT"]]; // Array<string> | Specify currency names for querying in an array, separated by commas, maximum 10 currencies
api.getUnifiedBorrowableList(currencies)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencies** | [**Array&lt;string&gt;**](string.md)| Specify currency names for querying in an array, separated by commas, maximum 10 currencies | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<UnifiedBorrowable1>; }> [UnifiedBorrowable1](UnifiedBorrowable1.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listUnifiedLoans

> Promise<{ response: http.IncomingMessage; body: Array<UniLoan>; }> listUnifiedLoans(opts)

Query loans

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.UnifiedApi(client);
const opts = {
  'currency': "BTC", // string | Query by specified currency name
  'page': 1, // number | Page number
  'limit': 100, // number | Maximum number of items returned. Default: 100, minimum: 1, maximum: 100
  'type': "platform" // string | Loan type: platform borrowing - platform, margin borrowing - margin
};
api.listUnifiedLoans(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Query by specified currency name | [optional] [default to undefined]
 **page** | **number**| Page number | [optional] [default to 1]
 **limit** | **number**| Maximum number of items returned. Default: 100, minimum: 1, maximum: 100 | [optional] [default to 100]
 **type** | **string**| Loan type: platform borrowing - platform, margin borrowing - margin | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<UniLoan>; }> [UniLoan](UniLoan.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createUnifiedLoan

> Promise<{ response: http.IncomingMessage; body: UnifiedLoanResult; }> createUnifiedLoan(unifiedLoan)

Borrow or repay

When borrowing, ensure the borrowed amount is not below the minimum borrowing threshold for the specific cryptocurrency and does not exceed the maximum borrowing limit set by the platform and user.  Loan interest will be automatically deducted from the account at regular intervals. Users are responsible for managing repayment of borrowed amounts.  For repayment, use &#x60;repaid_all&#x3D;true&#x60; to repay all available amounts

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.UnifiedApi(client);
const unifiedLoan = new UnifiedLoan(); // UnifiedLoan | 
api.createUnifiedLoan(unifiedLoan)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unifiedLoan** | [**UnifiedLoan**](UnifiedLoan.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: UnifiedLoanResult; }> [UnifiedLoanResult](UnifiedLoanResult.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## listUnifiedLoanRecords

> Promise<{ response: http.IncomingMessage; body: Array<UnifiedLoanRecord>; }> listUnifiedLoanRecords(opts)

Query loan records

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.UnifiedApi(client);
const opts = {
  'type': "type_example", // string | Loan record type: borrow - borrowing, repay - repayment
  'currency': "BTC", // string | Query by specified currency name
  'page': 1, // number | Page number
  'limit': 100 // number | Maximum number of items returned. Default: 100, minimum: 1, maximum: 100
};
api.listUnifiedLoanRecords(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **string**| Loan record type: borrow - borrowing, repay - repayment | [optional] [default to undefined]
 **currency** | **string**| Query by specified currency name | [optional] [default to undefined]
 **page** | **number**| Page number | [optional] [default to 1]
 **limit** | **number**| Maximum number of items returned. Default: 100, minimum: 1, maximum: 100 | [optional] [default to 100]

### Return type

Promise<{ response: AxiosResponse; body: Array<UnifiedLoanRecord>; }> [UnifiedLoanRecord](UnifiedLoanRecord.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listUnifiedLoanInterestRecords

> Promise<{ response: http.IncomingMessage; body: Array<UniLoanInterestRecord>; }> listUnifiedLoanInterestRecords(opts)

Query interest deduction records

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.UnifiedApi(client);
const opts = {
  'currency': "BTC", // string | Query by specified currency name
  'page': 1, // number | Page number
  'limit': 100, // number | Maximum number of items returned. Default: 100, minimum: 1, maximum: 100
  'from': 1627706330, // number | Start timestamp for the query
  'to': 1635329650, // number | End timestamp for the query, defaults to current time if not specified
  'type': "platform" // string | Loan type: platform borrowing - platform, margin borrowing - margin. Defaults to margin if not specified
};
api.listUnifiedLoanInterestRecords(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Query by specified currency name | [optional] [default to undefined]
 **page** | **number**| Page number | [optional] [default to 1]
 **limit** | **number**| Maximum number of items returned. Default: 100, minimum: 1, maximum: 100 | [optional] [default to 100]
 **from** | **number**| Start timestamp for the query | [optional] [default to undefined]
 **to** | **number**| End timestamp for the query, defaults to current time if not specified | [optional] [default to undefined]
 **type** | **string**| Loan type: platform borrowing - platform, margin borrowing - margin. Defaults to margin if not specified | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<UniLoanInterestRecord>; }> [UniLoanInterestRecord](UniLoanInterestRecord.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getUnifiedRiskUnits

> Promise<{ response: http.IncomingMessage; body: UnifiedRiskUnits; }> getUnifiedRiskUnits()

Get user risk unit details

Get user risk unit details, only valid in portfolio margin mode

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.UnifiedApi(client);
api.getUnifiedRiskUnits()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: UnifiedRiskUnits; }> [UnifiedRiskUnits](UnifiedRiskUnits.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getUnifiedMode

> Promise<{ response: http.IncomingMessage; body: UnifiedModeSet; }> getUnifiedMode()

Query mode of the unified account

Unified account mode: - &#x60;classic&#x60;: Classic account mode - &#x60;multi_currency&#x60;: Cross-currency margin mode - &#x60;portfolio&#x60;: Portfolio margin mode - &#x60;single_currency&#x60;: Single-currency margin mode

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.UnifiedApi(client);
api.getUnifiedMode()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: UnifiedModeSet; }> [UnifiedModeSet](UnifiedModeSet.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## setUnifiedMode

> Promise<{ response: http.IncomingMessage; body?: any; }> setUnifiedMode(unifiedModeSet)

Set unified account mode

Each account mode switch only requires passing the corresponding account mode parameter, and also supports turning on or off the configuration switches under the corresponding account mode during the switch. - When enabling the classic account mode, mode&#x3D;classic &#x60;&#x60;&#x60;  PUT /unified/unified_mode  {  \&quot;mode\&quot;: \&quot;classic\&quot;  } &#x60;&#x60;&#x60; - When enabling the cross-currency margin \&quot;multi_currency\&quot;,  \&quot;settings\&quot;: {  \&quot;usdt_futures\&quot;: true  }  } &#x60;&#x60;&#x60; - When enabling the portfolio margin mode, mode&#x3D;portfolio &#x60;&#x60;&#x60;  PUT /unified/unified_mode  {  \&quot;mode\&quot;: \&quot;portfolio\&quot;,  \&quot;settings\&quot;: {  \&quot;spot_hedge\&quot;: true  }  } &#x60;&#x60;&#x60; - When enabling the single-currency margin mode, mode&#x3D;single_currency &#x60;&#x60;&#x60;  PUT /unified/unified_mode  {  \&quot;mode\&quot;: \&quot;single_currency\&quot;  } &#x60;&#x60;&#x60;

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.UnifiedApi(client);
const unifiedModeSet = new UnifiedModeSet(); // UnifiedModeSet | 
api.setUnifiedMode(unifiedModeSet)
   .then(value => console.log('API called successfully.'),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unifiedModeSet** | [**UnifiedModeSet**](UnifiedModeSet.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body?: any; }> 

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

## getUnifiedEstimateRate

> Promise<{ response: http.IncomingMessage; body: { [key: string]: string; }; }> getUnifiedEstimateRate(currencies)

Query unified account estimated interest rate

Interest rates fluctuate hourly based on lending depth, so exact rates cannot be provided. When a currency is not supported, the interest rate returned will be an empty string

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.UnifiedApi(client);
const currencies = [["BTC","GT"]]; // Array<string> | Specify currency names for querying in an array, separated by commas, maximum 10 currencies
api.getUnifiedEstimateRate(currencies)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencies** | [**Array&lt;string&gt;**](string.md)| Specify currency names for querying in an array, separated by commas, maximum 10 currencies | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: { [key: string]: string; }; }> [string](string.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCurrencyDiscountTiers

> Promise<{ response: http.IncomingMessage; body: Array<UnifiedDiscount>; }> listCurrencyDiscountTiers()

Query unified account tiered discount

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.UnifiedApi(client);
api.listCurrencyDiscountTiers()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: Array<UnifiedDiscount>; }> [UnifiedDiscount](UnifiedDiscount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listLoanMarginTiers

> Promise<{ response: http.IncomingMessage; body: Array<UnifiedMarginTiers>; }> listLoanMarginTiers()

Query unified account tiered loan margin

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.UnifiedApi(client);
api.listLoanMarginTiers()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: Array<UnifiedMarginTiers>; }> [UnifiedMarginTiers](UnifiedMarginTiers.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## calculatePortfolioMargin

> Promise<{ response: http.IncomingMessage; body: UnifiedPortfolioOutput; }> calculatePortfolioMargin(unifiedPortfolioInput)

Portfolio margin calculator

Portfolio Margin Calculator  When inputting simulated position portfolios, each position includes the position name and quantity held, supporting markets within the range of BTC and ETH perpetual contracts, options, and spot markets. When inputting simulated orders, each order includes the market identifier, order price, and order quantity, supporting markets within the range of BTC and ETH perpetual contracts, options, and spot markets. Market orders are not included.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.UnifiedApi(client);
const unifiedPortfolioInput = new UnifiedPortfolioInput(); // UnifiedPortfolioInput | 
api.calculatePortfolioMargin(unifiedPortfolioInput)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unifiedPortfolioInput** | [**UnifiedPortfolioInput**](UnifiedPortfolioInput.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: UnifiedPortfolioOutput; }> [UnifiedPortfolioOutput](UnifiedPortfolioOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## getUserLeverageCurrencyConfig

> Promise<{ response: http.IncomingMessage; body: UnifiedLeverageConfig; }> getUserLeverageCurrencyConfig(currency)

Maximum and minimum currency leverage that can be set

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.UnifiedApi(client);
const currency = "BTC"; // string | Currency
api.getUserLeverageCurrencyConfig(currency)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Currency | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: UnifiedLeverageConfig; }> [UnifiedLeverageConfig](UnifiedLeverageConfig.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getUserLeverageCurrencySetting

> Promise<{ response: http.IncomingMessage; body: Array<UnifiedLeverageSetting>; }> getUserLeverageCurrencySetting(opts)

Get user currency leverage

Get user currency leverage. If currency is not specified, query all currencies

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.UnifiedApi(client);
const opts = {
  'currency': "BTC" // string | Currency
};
api.getUserLeverageCurrencySetting(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Currency | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<UnifiedLeverageSetting>; }> [UnifiedLeverageSetting](UnifiedLeverageSetting.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## setUserLeverageCurrencySetting

> Promise<{ response: http.IncomingMessage; body?: any; }> setUserLeverageCurrencySetting(unifiedLeverageSetting)

Set loan currency leverage

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.UnifiedApi(client);
const unifiedLeverageSetting = new UnifiedLeverageSetting(); // UnifiedLeverageSetting | 
api.setUserLeverageCurrencySetting(unifiedLeverageSetting)
   .then(value => console.log('API called successfully.'),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unifiedLeverageSetting** | [**UnifiedLeverageSetting**](UnifiedLeverageSetting.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body?: any; }> 

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

## listUnifiedCurrencies

> Promise<{ response: http.IncomingMessage; body: Array<UnifiedCurrency>; }> listUnifiedCurrencies(opts)

List of loan currencies supported by unified account

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.UnifiedApi(client);
const opts = {
  'currency': "BTC" // string | Currency
};
api.listUnifiedCurrencies(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Currency | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<UnifiedCurrency>; }> [UnifiedCurrency](UnifiedCurrency.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getHistoryLoanRate

> Promise<{ response: http.IncomingMessage; body: UnifiedHistoryLoanRate; }> getHistoryLoanRate(currency, opts)

Get historical lending rates

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.UnifiedApi(client);
const currency = "USDT"; // string | Currency
const opts = {
  'tier': "1", // string | VIP level for the floating rate to be queried
  'page': 1, // number | Page number
  'limit': 100 // number | Maximum number of items returned. Default: 100, minimum: 1, maximum: 100
};
api.getHistoryLoanRate(currency, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Currency | [default to undefined]
 **tier** | **string**| VIP level for the floating rate to be queried | [optional] [default to undefined]
 **page** | **number**| Page number | [optional] [default to 1]
 **limit** | **number**| Maximum number of items returned. Default: 100, minimum: 1, maximum: 100 | [optional] [default to 100]

### Return type

Promise<{ response: AxiosResponse; body: UnifiedHistoryLoanRate; }> [UnifiedHistoryLoanRate](UnifiedHistoryLoanRate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## setUnifiedCollateral

> Promise<{ response: http.IncomingMessage; body: UnifiedCollateralRes; }> setUnifiedCollateral(unifiedCollateralReq)

Set collateral currency

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.UnifiedApi(client);
const unifiedCollateralReq = new UnifiedCollateralReq(); // UnifiedCollateralReq | 
api.setUnifiedCollateral(unifiedCollateralReq)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unifiedCollateralReq** | [**UnifiedCollateralReq**](UnifiedCollateralReq.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: UnifiedCollateralRes; }> [UnifiedCollateralRes](UnifiedCollateralRes.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
