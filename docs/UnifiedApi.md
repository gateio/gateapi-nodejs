# UnifiedApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listUnifiedAccounts**](UnifiedApi.md#listUnifiedAccounts) | **GET** /unified/accounts | Get unified account information
[**getUnifiedBorrowable**](UnifiedApi.md#getUnifiedBorrowable) | **GET** /unified/borrowable | Query about the maximum borrowing for the unified account
[**getUnifiedTransferable**](UnifiedApi.md#getUnifiedTransferable) | **GET** /unified/transferable | Query about the maximum transferable for the unified account
[**listUnifiedLoans**](UnifiedApi.md#listUnifiedLoans) | **GET** /unified/loans | List loans
[**createUnifiedLoan**](UnifiedApi.md#createUnifiedLoan) | **POST** /unified/loans | Borrow or repay
[**listUnifiedLoanRecords**](UnifiedApi.md#listUnifiedLoanRecords) | **GET** /unified/loan_records | Get load records
[**listUnifiedLoanInterestRecords**](UnifiedApi.md#listUnifiedLoanInterestRecords) | **GET** /unified/interest_records | List interest records
[**getUnifiedRiskUnits**](UnifiedApi.md#getUnifiedRiskUnits) | **GET** /unified/risk_units | Get user risk unit details
[**getUnifiedMode**](UnifiedApi.md#getUnifiedMode) | **GET** /unified/unified_mode | Query mode of the unified account
[**setUnifiedMode**](UnifiedApi.md#setUnifiedMode) | **PUT** /unified/unified_mode | Set mode of the unified account
[**getUnifiedEstimateRate**](UnifiedApi.md#getUnifiedEstimateRate) | **GET** /unified/estimate_rate | Get unified estimate rate
[**listCurrencyDiscountTiers**](UnifiedApi.md#listCurrencyDiscountTiers) | **GET** /unified/currency_discount_tiers | List currency discount tiers
[**listLoanMarginTiers**](UnifiedApi.md#listLoanMarginTiers) | **GET** /unified/loan_margin_tiers | List loan margin tiers
[**calculatePortfolioMargin**](UnifiedApi.md#calculatePortfolioMargin) | **POST** /unified/portfolio_calculator | Portfolio margin calculator
[**getUserLeverageCurrencyConfig**](UnifiedApi.md#getUserLeverageCurrencyConfig) | **GET** /unified/leverage/user_currency_config | Minimum currency leverage that can be set
[**getUserLeverageCurrencySetting**](UnifiedApi.md#getUserLeverageCurrencySetting) | **GET** /unified/leverage/user_currency_setting | Get the leverage multiple of the user currency
[**setUserLeverageCurrencySetting**](UnifiedApi.md#setUserLeverageCurrencySetting) | **POST** /unified/leverage/user_currency_setting | Set the loan currency leverage
[**listUnifiedCurrencies**](UnifiedApi.md#listUnifiedCurrencies) | **GET** /unified/currencies | List of loan currencies supported by unified account
[**getHistoryLoanRate**](UnifiedApi.md#getHistoryLoanRate) | **GET** /unified/history_loan_rate | get historical lending rates


## listUnifiedAccounts

> Promise<{ response: http.IncomingMessage; body: UnifiedAccount; }> listUnifiedAccounts(opts)

Get unified account information

The assets of each currency in the account will be adjusted according to their liquidity, defined by corresponding adjustment coefficients, and then uniformly converted to USD to calculate the total asset value and position value of the account.  You can refer to the [Formula](#portfolio-account) in the documentation

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
  'currency': "BTC", // string | Retrieve data of the specified currency
  'subUid': "10001" // string | Sub account user ID
};
api.listUnifiedAccounts(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Retrieve data of the specified currency | [optional] [default to undefined]
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

Query about the maximum borrowing for the unified account

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.UnifiedApi(client);
const currency = "BTC"; // string | Retrieve data of the specified currency
api.getUnifiedBorrowable(currency)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Retrieve data of the specified currency | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: UnifiedBorrowable; }> [UnifiedBorrowable](UnifiedBorrowable.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getUnifiedTransferable

> Promise<{ response: http.IncomingMessage; body: UnifiedTransferable; }> getUnifiedTransferable(currency)

Query about the maximum transferable for the unified account

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.UnifiedApi(client);
const currency = "BTC"; // string | Retrieve data of the specified currency
api.getUnifiedTransferable(currency)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Retrieve data of the specified currency | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: UnifiedTransferable; }> [UnifiedTransferable](UnifiedTransferable.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listUnifiedLoans

> Promise<{ response: http.IncomingMessage; body: Array<UniLoan>; }> listUnifiedLoans(opts)

List loans

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
  'currency': "BTC", // string | Retrieve data of the specified currency
  'page': 1, // number | Page number
  'limit': 100, // number | Maximum response items.  Default: 100, minimum: 1, Maximum: 100
  'type': "platform" // string | Loan type, platform - platform, margin - margin
};
api.listUnifiedLoans(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Retrieve data of the specified currency | [optional] [default to undefined]
 **page** | **number**| Page number | [optional] [default to 1]
 **limit** | **number**| Maximum response items.  Default: 100, minimum: 1, Maximum: 100 | [optional] [default to 100]
 **type** | **string**| Loan type, platform - platform, margin - margin | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<UniLoan>; }> [UniLoan](UniLoan.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createUnifiedLoan

> Promise<{ response: http.IncomingMessage; body?: any; }> createUnifiedLoan(unifiedLoan)

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

const api = new GateApi.UnifiedApi(client);
const unifiedLoan = new UnifiedLoan(); // UnifiedLoan | 
api.createUnifiedLoan(unifiedLoan)
   .then(value => console.log('API called successfully.'),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unifiedLoan** | [**UnifiedLoan**](UnifiedLoan.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body?: any; }> 

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

## listUnifiedLoanRecords

> Promise<{ response: http.IncomingMessage; body: Array<UnifiedLoanRecord>; }> listUnifiedLoanRecords(opts)

Get load records

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
  'type': "type_example", // string | The types of lending records, borrow - indicates the action of borrowing funds, repay - indicates the action of repaying the borrowed funds
  'currency': "BTC", // string | Retrieve data of the specified currency
  'page': 1, // number | Page number
  'limit': 100 // number | Maximum response items.  Default: 100, minimum: 1, Maximum: 100
};
api.listUnifiedLoanRecords(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **string**| The types of lending records, borrow - indicates the action of borrowing funds, repay - indicates the action of repaying the borrowed funds | [optional] [default to undefined]
 **currency** | **string**| Retrieve data of the specified currency | [optional] [default to undefined]
 **page** | **number**| Page number | [optional] [default to 1]
 **limit** | **number**| Maximum response items.  Default: 100, minimum: 1, Maximum: 100 | [optional] [default to 100]

### Return type

Promise<{ response: AxiosResponse; body: Array<UnifiedLoanRecord>; }> [UnifiedLoanRecord](UnifiedLoanRecord.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listUnifiedLoanInterestRecords

> Promise<{ response: http.IncomingMessage; body: Array<UniLoanInterestRecord>; }> listUnifiedLoanInterestRecords(opts)

List interest records

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
  'currency': "BTC", // string | Retrieve data of the specified currency
  'page': 1, // number | Page number
  'limit': 100, // number | Maximum response items.  Default: 100, minimum: 1, Maximum: 100
  'from': 1627706330, // number | Start timestamp of the query
  'to': 1635329650, // number | Time range ending, default to current time
  'type': "platform" // string | Loan type, platform loan - platform, leverage loan - margin, if not passed, defaults to margin
};
api.listUnifiedLoanInterestRecords(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Retrieve data of the specified currency | [optional] [default to undefined]
 **page** | **number**| Page number | [optional] [default to 1]
 **limit** | **number**| Maximum response items.  Default: 100, minimum: 1, Maximum: 100 | [optional] [default to 100]
 **from** | **number**| Start timestamp of the query | [optional] [default to undefined]
 **to** | **number**| Time range ending, default to current time | [optional] [default to undefined]
 **type** | **string**| Loan type, platform loan - platform, leverage loan - margin, if not passed, defaults to margin | [optional] [default to undefined]

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

Retrieve user risk unit details, only valid in portfolio margin mode

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

Set mode of the unified account

Switching each account mode only requires passing the parameters of the corresponding account mode, and supports turning on or off the configuration switch in the corresponding account mode when switching the account mode  - When opening the classic account mode, mode&#x3D;classic &#x60;&#x60;&#x60;  PUT /unified/unified_mode  {  \&quot;mode\&quot;: \&quot;classic\&quot;  } &#x60;&#x60;&#x60; - Open the cross-currency margin mode, mode&#x3D;multi_currency &#x60;&#x60;&#x60;  PUT /unified/unified_mode  {  \&quot;mode\&quot;: \&quot;multi_currency\&quot;,  \&quot;settings\&quot;: {  \&quot;usdt_futures\&quot;: true  }  } &#x60;&#x60;&#x60; - When the portfolio margin mode is enabled, mode&#x3D;portfolio &#x60;&#x60;&#x60;  PUT /unified/unified_mode  {  \&quot;mode\&quot;: \&quot;portfolio\&quot;,  \&quot;settings\&quot;: {  \&quot;spot_hedge\&quot;: true  }  } &#x60;&#x60;&#x60; - When opening a single currency margin mode, mode&#x3D;single_currency &#x60;&#x60;&#x60;  PUT /unified/unified_mode  {  \&quot;mode\&quot;: \&quot;single_currency\&quot;  } &#x60;&#x60;&#x60;

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

Get unified estimate rate

Due to fluctuations in lending depth, hourly interest rates may vary, and thus, I cannot provide exact rates. When a currency is not supported, the interest rate returned will be an empty string.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.UnifiedApi(client);
const currencies = [["BTC","GT"]]; // Array<string> | Specify the currency names for querying in an array, separated by commas, with a maximum of 10 currencies.
api.getUnifiedEstimateRate(currencies)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencies** | [**Array&lt;string&gt;**](string.md)| Specify the currency names for querying in an array, separated by commas, with a maximum of 10 currencies. | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: { [key: string]: string; }; }> [string](string.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCurrencyDiscountTiers

> Promise<{ response: http.IncomingMessage; body: Array<UnifiedDiscount>; }> listCurrencyDiscountTiers()

List currency discount tiers

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

List loan margin tiers

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

Portfolio Margin Calculator When inputting a simulated position portfolio, each position includes the position name and quantity held, supporting markets within the range of BTC and ETH perpetual contracts, options, and spot markets. When inputting simulated orders, each order includes the market identifier, order price, and order quantity,  supporting markets within the range of BTC and ETH perpetual contracts, options, and spot markets. Market orders are not included.

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

Minimum currency leverage that can be set

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

> Promise<{ response: http.IncomingMessage; body: UnifiedLeverageSetting; }> getUserLeverageCurrencySetting(opts)

Get the leverage multiple of the user currency

Get the user\&#39;s currency leverage. If currency is not passed, query all currencies.

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

Promise<{ response: AxiosResponse; body: UnifiedLeverageSetting; }> [UnifiedLeverageSetting](UnifiedLeverageSetting.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## setUserLeverageCurrencySetting

> Promise<{ response: http.IncomingMessage; body?: any; }> setUserLeverageCurrencySetting(unifiedLeverageSetting)

Set the loan currency leverage

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

get historical lending rates

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.UnifiedApi(client);
const currency = "USDT"; // string | Currency
const opts = {
  'tier': "1", // string | The VIP level of the floating rate that needs to be queried
  'page': 1, // number | Page number
  'limit': 100 // number | Maximum response items.  Default: 100, minimum: 1, Maximum: 100
};
api.getHistoryLoanRate(currency, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Currency | [default to undefined]
 **tier** | **string**| The VIP level of the floating rate that needs to be queried | [optional] [default to undefined]
 **page** | **number**| Page number | [optional] [default to 1]
 **limit** | **number**| Maximum response items.  Default: 100, minimum: 1, Maximum: 100 | [optional] [default to 100]

### Return type

Promise<{ response: AxiosResponse; body: UnifiedHistoryLoanRate; }> [UnifiedHistoryLoanRate](UnifiedHistoryLoanRate.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
