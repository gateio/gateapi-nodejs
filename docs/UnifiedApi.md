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
[**getUnifiedRiskUnits**](UnifiedApi.md#getUnifiedRiskUnits) | **GET** /unified/risk_units | 获取用户风险单元详情，仅在组合保证金模式有效
[**getUnifiedMode**](UnifiedApi.md#getUnifiedMode) | **GET** /unified/unified_mode | Query mode of the unified account
[**setUnifiedMode**](UnifiedApi.md#setUnifiedMode) | **PUT** /unified/unified_mode | Set mode of the unified account
[**getUnifiedEstimateRate**](UnifiedApi.md#getUnifiedEstimateRate) | **GET** /unified/estimate_rate | Get unified estimate rate
[**listCurrencyDiscountTiers**](UnifiedApi.md#listCurrencyDiscountTiers) | **GET** /unified/currency_discount_tiers | list currency discount tiers
[**listLoanMarginTiers**](UnifiedApi.md#listLoanMarginTiers) | **GET** /unified/loan_margin_tiers | 查询统一账户借贷梯度保证金
[**calculatePortfolioMargin**](UnifiedApi.md#calculatePortfolioMargin) | **POST** /unified/portfolio_calculator | 组合保证金计算器计算
[**getUserLeverageCurrencyConfig**](UnifiedApi.md#getUserLeverageCurrencyConfig) | **GET** /unified/leverage/user_currency_config | 用户最大、最小可设置币种杠杆倍数
[**getUserLeverageCurrencySetting**](UnifiedApi.md#getUserLeverageCurrencySetting) | **GET** /unified/leverage/user_currency_setting | 获取用户币种杠杆倍数，currency不传则查询全部币种
[**setUserLeverageCurrencySetting**](UnifiedApi.md#setUserLeverageCurrencySetting) | **POST** /unified/leverage/user_currency_setting | 设置借贷币种杠杆倍数
[**getHistoryLoanRate**](UnifiedApi.md#getHistoryLoanRate) | **GET** /unified/history_loan_rate | 获取历史借币利率


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
  'currency': "BTC" // string | Retrieve data of the specified currency
};
api.listUnifiedAccounts(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Retrieve data of the specified currency | [optional] [default to undefined]

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
  'type': "platform" // string | 借贷类型，平台借币 - platform，杠杆借币 - margin，不传时默认为margin
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
 **type** | **string**| 借贷类型，平台借币 - platform，杠杆借币 - margin，不传时默认为margin | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<UniLoanInterestRecord>; }> [UniLoanInterestRecord](UniLoanInterestRecord.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getUnifiedRiskUnits

> Promise<{ response: http.IncomingMessage; body: UnifiedRiskUnits; }> getUnifiedRiskUnits()

获取用户风险单元详情，仅在组合保证金模式有效

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

统一账户模式： - &#x60;classic&#x60;: 经典账户模式 - &#x60;multi_currency&#x60;: 跨币种保证金模式 - &#x60;portfolio&#x60;: 组合保证金模式 - &#x60;single_currency&#x60;: 单币种保证金模式

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

每种账户模式的切换只需要传对应账户模式的参数，同时支持在切换账户模式时打开或关闭对应账户模式下的配置开关   - 开通经典账户模式时，mode&#x3D;classic &#x60;&#x60;&#x60;     PUT /unified/unified_mode     {       \&quot;mode\&quot;: \&quot;classic\&quot;     } &#x60;&#x60;&#x60; - 开通跨币种保证金模式，mode&#x3D;multi_currency &#x60;&#x60;&#x60;     PUT /unified/unified_mode     {       \&quot;mode\&quot;: \&quot;multi_currency\&quot;,       \&quot;settings\&quot;: {          \&quot;usdt_futures\&quot;: true       }     } &#x60;&#x60;&#x60; - 开通组合保证金模式时，mode&#x3D;portfolio &#x60;&#x60;&#x60;     PUT /unified/unified_mode     {       \&quot;mode\&quot;: \&quot;portfolio\&quot;,       \&quot;settings\&quot;: {          \&quot;spot_hedge\&quot;: true       }     } &#x60;&#x60;&#x60; - 开通组合保证金模式时，mode&#x3D;single_currency &#x60;&#x60;&#x60;     PUT /unified/unified_mode     {       \&quot;mode\&quot;: \&quot;single_currency\&quot;     } &#x60;&#x60;&#x60;

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

list currency discount tiers

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

查询统一账户借贷梯度保证金

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

组合保证金计算器计算

组合保证金计算器  当输入为模拟仓位组合时，每个仓位包括仓位名和持有量，只支持市场范围：BTC、ETH的永续合约、期权、现货 当输入为模拟挂单时，每个挂单包括市场标识、挂单价、挂单量，只支持市场范围：BTC、ETH的永续合约、期权、现货。挂单不包括市价单

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

用户最大、最小可设置币种杠杆倍数

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

获取用户币种杠杆倍数，currency不传则查询全部币种

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

> Promise<{ response: http.IncomingMessage; body?: any; }> setUserLeverageCurrencySetting(inlineObject)

设置借贷币种杠杆倍数

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.UnifiedApi(client);
const inlineObject = new InlineObject(); // InlineObject | 
api.setUserLeverageCurrencySetting(inlineObject)
   .then(value => console.log('API called successfully.'),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject** | [**InlineObject**](InlineObject.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body?: any; }> 

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

## getHistoryLoanRate

> Promise<{ response: http.IncomingMessage; body: UnifiedHistoryLoanRate; }> getHistoryLoanRate(currency, opts)

获取历史借币利率

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
  'tier': "1", // string | 需要查询的上浮费率的vip等级
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
 **tier** | **string**| 需要查询的上浮费率的vip等级 | [optional] [default to undefined]
 **page** | **number**| Page number | [optional] [default to 1]
 **limit** | **number**| Maximum response items.  Default: 100, minimum: 1, Maximum: 100 | [optional] [default to 100]

### Return type

Promise<{ response: AxiosResponse; body: UnifiedHistoryLoanRate; }> [UnifiedHistoryLoanRate](UnifiedHistoryLoanRate.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
