# WalletApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listCurrencyChains**](WalletApi.md#listCurrencyChains) | **GET** /wallet/currency_chains | List chains supported for specified currency
[**getDepositAddress**](WalletApi.md#getDepositAddress) | **GET** /wallet/deposit_address | Generate currency deposit address
[**listWithdrawals**](WalletApi.md#listWithdrawals) | **GET** /wallet/withdrawals | Retrieve withdrawal records
[**listDeposits**](WalletApi.md#listDeposits) | **GET** /wallet/deposits | Retrieve deposit records
[**transfer**](WalletApi.md#transfer) | **POST** /wallet/transfers | Transfer between trading accounts
[**listSubAccountTransfers**](WalletApi.md#listSubAccountTransfers) | **GET** /wallet/sub_account_transfers | Retrieve transfer records between main and sub accounts
[**transferWithSubAccount**](WalletApi.md#transferWithSubAccount) | **POST** /wallet/sub_account_transfers | Transfer between main and sub accounts
[**subAccountToSubAccount**](WalletApi.md#subAccountToSubAccount) | **POST** /wallet/sub_account_to_sub_account | Sub-account transfers to sub-account
[**getTransferOrderStatus**](WalletApi.md#getTransferOrderStatus) | **GET** /wallet/order_status | Transfer status query
[**listWithdrawStatus**](WalletApi.md#listWithdrawStatus) | **GET** /wallet/withdraw_status | Retrieve withdrawal status
[**listSubAccountBalances**](WalletApi.md#listSubAccountBalances) | **GET** /wallet/sub_account_balances | Retrieve sub account balances
[**listSubAccountMarginBalances**](WalletApi.md#listSubAccountMarginBalances) | **GET** /wallet/sub_account_margin_balances | Query sub accounts\&#39; margin balances
[**listSubAccountFuturesBalances**](WalletApi.md#listSubAccountFuturesBalances) | **GET** /wallet/sub_account_futures_balances | Query sub accounts\&#39; futures account balances
[**listSubAccountCrossMarginBalances**](WalletApi.md#listSubAccountCrossMarginBalances) | **GET** /wallet/sub_account_cross_margin_balances | Query subaccount\&#39;s cross_margin account info
[**listSavedAddress**](WalletApi.md#listSavedAddress) | **GET** /wallet/saved_address | Query saved address
[**getTradeFee**](WalletApi.md#getTradeFee) | **GET** /wallet/fee | Retrieve personal trading fee
[**getTotalBalance**](WalletApi.md#getTotalBalance) | **GET** /wallet/total_balance | Retrieve user\&#39;s total balances
[**listSmallBalance**](WalletApi.md#listSmallBalance) | **GET** /wallet/small_balance | List small balance
[**convertSmallBalance**](WalletApi.md#convertSmallBalance) | **POST** /wallet/small_balance | Convert small balance
[**listSmallBalanceHistory**](WalletApi.md#listSmallBalanceHistory) | **GET** /wallet/small_balance_history | List small balance history
[**listPushOrders**](WalletApi.md#listPushOrders) | **GET** /wallet/push | Retrieve the UID transfer history


## listCurrencyChains

> Promise<{ response: http.IncomingMessage; body: Array<CurrencyChain>; }> listCurrencyChains(currency)

List chains supported for specified currency

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.WalletApi(client);
const currency = "GT"; // string | Currency name
api.listCurrencyChains(currency)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Currency name | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<CurrencyChain>; }> [CurrencyChain](CurrencyChain.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDepositAddress

> Promise<{ response: http.IncomingMessage; body: DepositAddress; }> getDepositAddress(currency)

Generate currency deposit address

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.WalletApi(client);
const currency = "USDT"; // string | Currency name
api.getDepositAddress(currency)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Currency name | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: DepositAddress; }> [DepositAddress](DepositAddress.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listWithdrawals

> Promise<{ response: http.IncomingMessage; body: Array<WithdrawalRecord>; }> listWithdrawals(opts)

Retrieve withdrawal records

Record time range cannot exceed 30 days

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.WalletApi(client);
const opts = {
  'currency': "BTC", // string | Filter by currency. Return all currency records if not specified
  'withdrawId': "withdrawId_example", // string | The withdrawal record id starts with w, such as: w1879219868. When withdraw_id is not empty, the value querys this withdrawal record and no longer querys according to time
  'assetClass': "assetClass_example", // string | The currency type of withdrawal record is empty by default. It supports users to query the withdrawal records in the main and innovation areas on demand. Value range: SPOT, PILOT  SPOT: Main Zone  PILOT: Innovation Zone
  'withdrawOrderId': "withdrawOrderId_example", // string | User-defined order number when withdrawing. Default is empty. When not empty, the specified user-defined order number record will be queried
  'from': 1602120000, // number | Time range beginning, default to 7 days before current time
  'to': 1602123600, // number | Time range ending, default to current time
  'limit': 100, // number | Maximum number of records to be returned in a single list
  'offset': 0 // number | List offset, starting from 0
};
api.listWithdrawals(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Filter by currency. Return all currency records if not specified | [optional] [default to undefined]
 **withdrawId** | **string**| The withdrawal record id starts with w, such as: w1879219868. When withdraw_id is not empty, the value querys this withdrawal record and no longer querys according to time | [optional] [default to undefined]
 **assetClass** | **string**| The currency type of withdrawal record is empty by default. It supports users to query the withdrawal records in the main and innovation areas on demand. Value range: SPOT, PILOT  SPOT: Main Zone  PILOT: Innovation Zone | [optional] [default to undefined]
 **withdrawOrderId** | **string**| User-defined order number when withdrawing. Default is empty. When not empty, the specified user-defined order number record will be queried | [optional] [default to undefined]
 **from** | **number**| Time range beginning, default to 7 days before current time | [optional] [default to undefined]
 **to** | **number**| Time range ending, default to current time | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0 | [optional] [default to 0]

### Return type

Promise<{ response: AxiosResponse; body: Array<WithdrawalRecord>; }> [WithdrawalRecord](WithdrawalRecord.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listDeposits

> Promise<{ response: http.IncomingMessage; body: Array<DepositRecord>; }> listDeposits(opts)

Retrieve deposit records

Record time range cannot exceed 30 days

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.WalletApi(client);
const opts = {
  'currency': "BTC", // string | Filter by currency. Return all currency records if not specified
  'from': 1602120000, // number | Time range beginning, default to 7 days before current time
  'to': 1602123600, // number | Time range ending, default to current time
  'limit': 100, // number | The maximum number of entries returned in the list is limited to 500 transactions.
  'offset': 0 // number | List offset, starting from 0
};
api.listDeposits(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Filter by currency. Return all currency records if not specified | [optional] [default to undefined]
 **from** | **number**| Time range beginning, default to 7 days before current time | [optional] [default to undefined]
 **to** | **number**| Time range ending, default to current time | [optional] [default to undefined]
 **limit** | **number**| The maximum number of entries returned in the list is limited to 500 transactions. | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0 | [optional] [default to 0]

### Return type

Promise<{ response: AxiosResponse; body: Array<DepositRecord>; }> [DepositRecord](DepositRecord.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## transfer

> Promise<{ response: http.IncomingMessage; body: TransactionID; }> transfer(transfer)

Transfer between trading accounts

Transfer between different accounts. Currently support transfers between the following:  1. spot - margin 2. spot - futures(perpetual) 3. spot - delivery 4. spot - options

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.WalletApi(client);
const transfer = new Transfer(); // Transfer | 
api.transfer(transfer)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transfer** | [**Transfer**](Transfer.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: TransactionID; }> [TransactionID](TransactionID.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## listSubAccountTransfers

> Promise<{ response: http.IncomingMessage; body: Array<SubAccountTransferRecordItem>; }> listSubAccountTransfers(opts)

Retrieve transfer records between main and sub accounts

Record time range cannot exceed 30 days  &gt; Note: only records after 2020-04-10 can be retrieved

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.WalletApi(client);
const opts = {
  'subUid': "10003", // string | User ID of sub-account, you can query multiple records separated by `,`. If not specified, it will return the records of all sub accounts
  'from': 1602120000, // number | Time range beginning, default to 7 days before current time
  'to': 1602123600, // number | Time range ending, default to current time
  'limit': 100, // number | Maximum number of records to be returned in a single list
  'offset': 0 // number | List offset, starting from 0
};
api.listSubAccountTransfers(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subUid** | **string**| User ID of sub-account, you can query multiple records separated by &#x60;,&#x60;. If not specified, it will return the records of all sub accounts | [optional] [default to undefined]
 **from** | **number**| Time range beginning, default to 7 days before current time | [optional] [default to undefined]
 **to** | **number**| Time range ending, default to current time | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0 | [optional] [default to 0]

### Return type

Promise<{ response: AxiosResponse; body: Array<SubAccountTransferRecordItem>; }> [SubAccountTransferRecordItem](SubAccountTransferRecordItem.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## transferWithSubAccount

> Promise<{ response: http.IncomingMessage; body: TransactionID; }> transferWithSubAccount(subAccountTransfer)

Transfer between main and sub accounts

Support transferring with sub user\&#39;s spot or futures account. Note that only main user\&#39;s spot account is used no matter which sub user\&#39;s account is operated.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.WalletApi(client);
const subAccountTransfer = new SubAccountTransfer(); // SubAccountTransfer | 
api.transferWithSubAccount(subAccountTransfer)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subAccountTransfer** | [**SubAccountTransfer**](SubAccountTransfer.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: TransactionID; }> [TransactionID](TransactionID.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## subAccountToSubAccount

> Promise<{ response: http.IncomingMessage; body: TransactionID; }> subAccountToSubAccount(subAccountToSubAccount)

Sub-account transfers to sub-account

It is possible to perform balance transfers between two sub-accounts under the same main account. You can use either the API Key of the main account or the API Key of the sub-account to initiate the transfer.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.WalletApi(client);
const subAccountToSubAccount = new SubAccountToSubAccount(); // SubAccountToSubAccount | 
api.subAccountToSubAccount(subAccountToSubAccount)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subAccountToSubAccount** | [**SubAccountToSubAccount**](SubAccountToSubAccount.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: TransactionID; }> [TransactionID](TransactionID.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## getTransferOrderStatus

> Promise<{ response: http.IncomingMessage; body: TransferOrderStatus; }> getTransferOrderStatus(opts)

Transfer status query

Support querying transfer status based on user-defined client_order_id or tx_id returned by the transfer interface

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.WalletApi(client);
const opts = {
  'clientOrderId': "da3ce7a088c8b0372b741419c7829033", // string | The custom ID provided by the customer serves as a safeguard against duplicate transfers. It can be a combination of letters (case-sensitive), numbers, hyphens \'-\', and underscores \'_\', with a length ranging from 1 to 64 characters.
  'txId': "59636381286" // string | The transfer operation number and client_order_id cannot be empty at the same time
};
api.getTransferOrderStatus(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientOrderId** | **string**| The custom ID provided by the customer serves as a safeguard against duplicate transfers. It can be a combination of letters (case-sensitive), numbers, hyphens \&#39;-\&#39;, and underscores \&#39;_\&#39;, with a length ranging from 1 to 64 characters. | [optional] [default to undefined]
 **txId** | **string**| The transfer operation number and client_order_id cannot be empty at the same time | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: TransferOrderStatus; }> [TransferOrderStatus](TransferOrderStatus.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listWithdrawStatus

> Promise<{ response: http.IncomingMessage; body: Array<WithdrawStatus>; }> listWithdrawStatus(opts)

Retrieve withdrawal status

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.WalletApi(client);
const opts = {
  'currency': "BTC" // string | Retrieve data of the specified currency
};
api.listWithdrawStatus(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Retrieve data of the specified currency | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<WithdrawStatus>; }> [WithdrawStatus](WithdrawStatus.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listSubAccountBalances

> Promise<{ response: http.IncomingMessage; body: Array<SubAccountBalance>; }> listSubAccountBalances(opts)

Retrieve sub account balances

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.WalletApi(client);
const opts = {
  'subUid': "10003" // string | User ID of sub-account, you can query multiple records separated by `,`. If not specified, it will return the records of all sub accounts
};
api.listSubAccountBalances(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subUid** | **string**| User ID of sub-account, you can query multiple records separated by &#x60;,&#x60;. If not specified, it will return the records of all sub accounts | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<SubAccountBalance>; }> [SubAccountBalance](SubAccountBalance.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listSubAccountMarginBalances

> Promise<{ response: http.IncomingMessage; body: Array<SubAccountMarginBalance>; }> listSubAccountMarginBalances(opts)

Query sub accounts\&#39; margin balances

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.WalletApi(client);
const opts = {
  'subUid': "10003" // string | User ID of sub-account, you can query multiple records separated by `,`. If not specified, it will return the records of all sub accounts
};
api.listSubAccountMarginBalances(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subUid** | **string**| User ID of sub-account, you can query multiple records separated by &#x60;,&#x60;. If not specified, it will return the records of all sub accounts | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<SubAccountMarginBalance>; }> [SubAccountMarginBalance](SubAccountMarginBalance.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listSubAccountFuturesBalances

> Promise<{ response: http.IncomingMessage; body: Array<SubAccountFuturesBalance>; }> listSubAccountFuturesBalances(opts)

Query sub accounts\&#39; futures account balances

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.WalletApi(client);
const opts = {
  'subUid': "10003", // string | User ID of sub-account, you can query multiple records separated by `,`. If not specified, it will return the records of all sub accounts
  'settle': "usdt" // string | Query only balances of specified settle currency
};
api.listSubAccountFuturesBalances(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subUid** | **string**| User ID of sub-account, you can query multiple records separated by &#x60;,&#x60;. If not specified, it will return the records of all sub accounts | [optional] [default to undefined]
 **settle** | **string**| Query only balances of specified settle currency | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<SubAccountFuturesBalance>; }> [SubAccountFuturesBalance](SubAccountFuturesBalance.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listSubAccountCrossMarginBalances

> Promise<{ response: http.IncomingMessage; body: Array<SubAccountCrossMarginBalance>; }> listSubAccountCrossMarginBalances(opts)

Query subaccount\&#39;s cross_margin account info

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.WalletApi(client);
const opts = {
  'subUid': "10003" // string | User ID of sub-account, you can query multiple records separated by `,`. If not specified, it will return the records of all sub accounts
};
api.listSubAccountCrossMarginBalances(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subUid** | **string**| User ID of sub-account, you can query multiple records separated by &#x60;,&#x60;. If not specified, it will return the records of all sub accounts | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<SubAccountCrossMarginBalance>; }> [SubAccountCrossMarginBalance](SubAccountCrossMarginBalance.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listSavedAddress

> Promise<{ response: http.IncomingMessage; body: Array<SavedAddress>; }> listSavedAddress(currency, opts)

Query saved address

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.WalletApi(client);
const currency = "USDT"; // string | Currency
const opts = {
  'chain': '', // string | Chain name
  'limit': '50', // string | Maximum number returned, 100 at most
  'page': 1 // number | Page number
};
api.listSavedAddress(currency, opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Currency | [default to undefined]
 **chain** | **string**| Chain name | [optional] [default to &#39;&#39;]
 **limit** | **string**| Maximum number returned, 100 at most | [optional] [default to &#39;50&#39;]
 **page** | **number**| Page number | [optional] [default to 1]

### Return type

Promise<{ response: AxiosResponse; body: Array<SavedAddress>; }> [SavedAddress](SavedAddress.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getTradeFee

> Promise<{ response: http.IncomingMessage; body: TradeFee; }> getTradeFee(opts)

Retrieve personal trading fee

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.WalletApi(client);
const opts = {
  'currencyPair': "BTC_USDT", // string | Specify a currency pair to retrieve precise fee rate  This field is optional. In most cases, the fee rate is identical among all currency pairs
  'settle': "BTC" // 'BTC' | 'USDT' | 'USD' | Specify the settlement currency of the contract to get more accurate rate settings  This field is optional. Generally, the rate settings for all settlement currencies are the same.
};
api.getTradeFee(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **string**| Specify a currency pair to retrieve precise fee rate  This field is optional. In most cases, the fee rate is identical among all currency pairs | [optional] [default to undefined]
 **settle** | **Settle**| Specify the settlement currency of the contract to get more accurate rate settings  This field is optional. Generally, the rate settings for all settlement currencies are the same. | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: TradeFee; }> [TradeFee](TradeFee.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getTotalBalance

> Promise<{ response: http.IncomingMessage; body: TotalBalance; }> getTotalBalance(opts)

Retrieve user\&#39;s total balances

This endpoint returns an approximate sum of exchanged amount from all currencies to input currency for each account.The exchange rate and account balance could have been cached for at most 1 minute. It is not recommended to use its result for any trading calculation.  For trading calculation, use the corresponding account query endpoint for each account type. For example:   - &#x60;GET /spot/accounts&#x60; to query spot account balance - &#x60;GET /margin/accounts&#x60; to query margin account balance - &#x60;GET /futures/{settle}/accounts&#x60; to query futures account balance

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.WalletApi(client);
const opts = {
  'currency': 'USDT' // string | Currency unit used to calculate the balance amount. BTC, CNY, USD and USDT are allowed. USDT is the default.
};
api.getTotalBalance(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Currency unit used to calculate the balance amount. BTC, CNY, USD and USDT are allowed. USDT is the default. | [optional] [default to &#39;USDT&#39;]

### Return type

Promise<{ response: AxiosResponse; body: TotalBalance; }> [TotalBalance](TotalBalance.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listSmallBalance

> Promise<{ response: http.IncomingMessage; body: Array<SmallBalance>; }> listSmallBalance()

List small balance

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.WalletApi(client);
api.listSmallBalance()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: Array<SmallBalance>; }> [SmallBalance](SmallBalance.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## convertSmallBalance

> Promise<{ response: http.IncomingMessage; body?: any; }> convertSmallBalance(convertSmallBalance)

Convert small balance

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.WalletApi(client);
const convertSmallBalance = new ConvertSmallBalance(); // ConvertSmallBalance | 
api.convertSmallBalance(convertSmallBalance)
   .then(value => console.log('API called successfully.'),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **convertSmallBalance** | [**ConvertSmallBalance**](ConvertSmallBalance.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body?: any; }> 

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

## listSmallBalanceHistory

> Promise<{ response: http.IncomingMessage; body: Array<SmallBalanceHistory>; }> listSmallBalanceHistory(opts)

List small balance history

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.WalletApi(client);
const opts = {
  'currency': "currency_example", // string | Currency
  'page': 1, // number | Page number
  'limit': 100 // number | Maximum response items.  Default: 100, minimum: 1, Maximum: 100
};
api.listSmallBalanceHistory(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Currency | [optional] [default to undefined]
 **page** | **number**| Page number | [optional] [default to 1]
 **limit** | **number**| Maximum response items.  Default: 100, minimum: 1, Maximum: 100 | [optional] [default to 100]

### Return type

Promise<{ response: AxiosResponse; body: Array<SmallBalanceHistory>; }> [SmallBalanceHistory](SmallBalanceHistory.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listPushOrders

> Promise<{ response: http.IncomingMessage; body: Array<UidPushOrder>; }> listPushOrders(opts)

Retrieve the UID transfer history

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.WalletApi(client);
const opts = {
  'id': 56, // number | Order ID
  'from': 56, // number | The start time of the query record. If not specified, it defaults to 7 days forward from the current time, in seconds Unix timestamp
  'to': 56, // number | The end time of the query record. If not specified, the default is the current time, which is a Unix timestamp in seconds.
  'limit': 100, // number | The maximum number of items returned in the list, the default value is 100
  'offset': 0, // number | List offset, starting from 0
  'transactionType': 'withdraw' // string | The list returns the order type `withdraw`, `deposit`, the default is `withdraw`.
};
api.listPushOrders(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **number**| Order ID | [optional] [default to undefined]
 **from** | **number**| The start time of the query record. If not specified, it defaults to 7 days forward from the current time, in seconds Unix timestamp | [optional] [default to undefined]
 **to** | **number**| The end time of the query record. If not specified, the default is the current time, which is a Unix timestamp in seconds. | [optional] [default to undefined]
 **limit** | **number**| The maximum number of items returned in the list, the default value is 100 | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0 | [optional] [default to 0]
 **transactionType** | **string**| The list returns the order type &#x60;withdraw&#x60;, &#x60;deposit&#x60;, the default is &#x60;withdraw&#x60;. | [optional] [default to &#39;withdraw&#39;]

### Return type

Promise<{ response: AxiosResponse; body: Array<UidPushOrder>; }> [UidPushOrder](UidPushOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
