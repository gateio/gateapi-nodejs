# WalletApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listCurrencyChains**](WalletApi.md#listCurrencyChains) | **GET** /wallet/currency_chains | Query chains supported for specified currency
[**getDepositAddress**](WalletApi.md#getDepositAddress) | **GET** /wallet/deposit_address | Generate currency deposit address
[**listWithdrawals**](WalletApi.md#listWithdrawals) | **GET** /wallet/withdrawals | Get withdrawal records
[**listDeposits**](WalletApi.md#listDeposits) | **GET** /wallet/deposits | Get deposit records
[**transfer**](WalletApi.md#transfer) | **POST** /wallet/transfers | Transfer between trading accounts
[**listSubAccountTransfers**](WalletApi.md#listSubAccountTransfers) | **GET** /wallet/sub_account_transfers | Get transfer records between main and sub accounts
[**transferWithSubAccount**](WalletApi.md#transferWithSubAccount) | **POST** /wallet/sub_account_transfers | Transfer between main and sub accounts
[**subAccountToSubAccount**](WalletApi.md#subAccountToSubAccount) | **POST** /wallet/sub_account_to_sub_account | Transfer between sub-accounts
[**getTransferOrderStatus**](WalletApi.md#getTransferOrderStatus) | **GET** /wallet/order_status | Transfer status query
[**listWithdrawStatus**](WalletApi.md#listWithdrawStatus) | **GET** /wallet/withdraw_status | Query withdrawal status
[**listSubAccountBalances**](WalletApi.md#listSubAccountBalances) | **GET** /wallet/sub_account_balances | Query sub-account balance information
[**listSubAccountMarginBalances**](WalletApi.md#listSubAccountMarginBalances) | **GET** /wallet/sub_account_margin_balances | Query sub-account isolated margin account balance information
[**listSubAccountFuturesBalances**](WalletApi.md#listSubAccountFuturesBalances) | **GET** /wallet/sub_account_futures_balances | Query sub-account perpetual futures account balance information
[**listSubAccountCrossMarginBalances**](WalletApi.md#listSubAccountCrossMarginBalances) | **GET** /wallet/sub_account_cross_margin_balances | Query sub-account cross margin account balance information
[**listSavedAddress**](WalletApi.md#listSavedAddress) | **GET** /wallet/saved_address | Query withdrawal address whitelist
[**getTradeFee**](WalletApi.md#getTradeFee) | **GET** /wallet/fee | Query personal trading fees
[**getTotalBalance**](WalletApi.md#getTotalBalance) | **GET** /wallet/total_balance | Query personal account totals
[**listSmallBalance**](WalletApi.md#listSmallBalance) | **GET** /wallet/small_balance | Get list of convertible small balance currencies
[**convertSmallBalance**](WalletApi.md#convertSmallBalance) | **POST** /wallet/small_balance | Convert small balance currency
[**listSmallBalanceHistory**](WalletApi.md#listSmallBalanceHistory) | **GET** /wallet/small_balance_history | Get convertible small balance currency history
[**listPushOrders**](WalletApi.md#listPushOrders) | **GET** /wallet/push | Get UID transfer history


## listCurrencyChains

> Promise<{ response: http.IncomingMessage; body: Array<CurrencyChain>; }> listCurrencyChains(currency)

Query chains supported for specified currency

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

Get withdrawal records

Record query time range cannot exceed 30 days

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
  'currency': "BTC", // string | Specify the currency. If not specified, returns all currencies
  'withdrawId': "withdrawId_example", // string | Withdrawal record ID starts with \'w\', such as: w1879219868. When withdraw_id is not empty, only this specific withdrawal record will be queried, and time-based querying will be disabled
  'assetClass': "assetClass_example", // string | Currency type of withdrawal record, empty by default. Supports querying withdrawal records in main zone and innovation zone on demand. Value range: SPOT, PILOT  SPOT: Main Zone PILOT: Innovation Zone
  'withdrawOrderId': "withdrawOrderId_example", // string | User-defined order number for withdrawal. Default is empty. When not empty, the specified user-defined order number record will be queried
  'from': 1602120000, // number | Start time for querying records, defaults to 7 days before current time if not specified
  'to': 1602123600, // number | End timestamp for the query, defaults to current time if not specified
  'limit': 100, // number | Maximum number of records returned in a single list
  'offset': 0 // number | List offset, starting from 0
};
api.listWithdrawals(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Specify the currency. If not specified, returns all currencies | [optional] [default to undefined]
 **withdrawId** | **string**| Withdrawal record ID starts with \&#39;w\&#39;, such as: w1879219868. When withdraw_id is not empty, only this specific withdrawal record will be queried, and time-based querying will be disabled | [optional] [default to undefined]
 **assetClass** | **string**| Currency type of withdrawal record, empty by default. Supports querying withdrawal records in main zone and innovation zone on demand. Value range: SPOT, PILOT  SPOT: Main Zone PILOT: Innovation Zone | [optional] [default to undefined]
 **withdrawOrderId** | **string**| User-defined order number for withdrawal. Default is empty. When not empty, the specified user-defined order number record will be queried | [optional] [default to undefined]
 **from** | **number**| Start time for querying records, defaults to 7 days before current time if not specified | [optional] [default to undefined]
 **to** | **number**| End timestamp for the query, defaults to current time if not specified | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records returned in a single list | [optional] [default to 100]
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

Get deposit records

Record query time range cannot exceed 30 days

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
  'currency': "BTC", // string | Specify the currency. If not specified, returns all currencies
  'from': 1602120000, // number | Start time for querying records, defaults to 7 days before current time if not specified
  'to': 1602123600, // number | End timestamp for the query, defaults to current time if not specified
  'limit': 100, // number | Maximum number of entries returned in the list, limited to 500 transactions
  'offset': 0 // number | List offset, starting from 0
};
api.listDeposits(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Specify the currency. If not specified, returns all currencies | [optional] [default to undefined]
 **from** | **number**| Start time for querying records, defaults to 7 days before current time if not specified | [optional] [default to undefined]
 **to** | **number**| End timestamp for the query, defaults to current time if not specified | [optional] [default to undefined]
 **limit** | **number**| Maximum number of entries returned in the list, limited to 500 transactions | [optional] [default to 100]
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

Balance transfers between personal trading accounts. Currently supports the following transfer operations:  1. Spot account - Margin account 2. Spot account - Perpetual futures account 3. Spot account - Delivery futures account 4. Spot account - Options account

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

Get transfer records between main and sub accounts

Record query time range cannot exceed 30 days  &gt; Note: Only records after 2020-04-10 can be retrieved

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
  'subUid': "10003", // string | Sub-account user ID, you can query multiple records separated by `,`. If not specified, it will return records of all sub-accounts
  'from': 1602120000, // number | Start time for querying records, defaults to 7 days before current time if not specified
  'to': 1602123600, // number | End timestamp for the query, defaults to current time if not specified
  'limit': 100, // number | Maximum number of records returned in a single list
  'offset': 0 // number | List offset, starting from 0
};
api.listSubAccountTransfers(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subUid** | **string**| Sub-account user ID, you can query multiple records separated by &#x60;,&#x60;. If not specified, it will return records of all sub-accounts | [optional] [default to undefined]
 **from** | **number**| Start time for querying records, defaults to 7 days before current time if not specified | [optional] [default to undefined]
 **to** | **number**| End timestamp for the query, defaults to current time if not specified | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records returned in a single list | [optional] [default to 100]
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

Supports transfers to/from sub-account\&#39;s spot or futures accounts. Note that regardless of which sub-account is operated, only the main account\&#39;s spot account is used

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

Transfer between sub-accounts

Supports balance transfers between two sub-accounts under the same main account. You can use either the main account\&#39;s API Key or the source sub-account\&#39;s API Key to perform the operation

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

Supports querying transfer status based on user-defined client_order_id or tx_id returned by the transfer interface

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
  'clientOrderId': "da3ce7a088c8b0372b741419c7829033", // string | Customer-defined ID to prevent duplicate transfers. Can be a combination of letters (case-sensitive), numbers, hyphens \'-\', and underscores \'_\'. Can be pure letters or pure numbers with length between 1-64 characters
  'txId': "59636381286" // string | Transfer operation number, cannot be empty at the same time as client_order_id
};
api.getTransferOrderStatus(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientOrderId** | **string**| Customer-defined ID to prevent duplicate transfers. Can be a combination of letters (case-sensitive), numbers, hyphens \&#39;-\&#39;, and underscores \&#39;_\&#39;. Can be pure letters or pure numbers with length between 1-64 characters | [optional] [default to undefined]
 **txId** | **string**| Transfer operation number, cannot be empty at the same time as client_order_id | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: TransferOrderStatus; }> [TransferOrderStatus](TransferOrderStatus.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listWithdrawStatus

> Promise<{ response: http.IncomingMessage; body: Array<WithdrawStatus>; }> listWithdrawStatus(opts)

Query withdrawal status

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
  'currency': "BTC" // string | Query by specified currency name
};
api.listWithdrawStatus(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Query by specified currency name | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<WithdrawStatus>; }> [WithdrawStatus](WithdrawStatus.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listSubAccountBalances

> Promise<{ response: http.IncomingMessage; body: Array<SubAccountBalance>; }> listSubAccountBalances(opts)

Query sub-account balance information

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
  'subUid': "10003" // string | Sub-account user ID, you can query multiple records separated by `,`. If not specified, it will return records of all sub-accounts
};
api.listSubAccountBalances(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subUid** | **string**| Sub-account user ID, you can query multiple records separated by &#x60;,&#x60;. If not specified, it will return records of all sub-accounts | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<SubAccountBalance>; }> [SubAccountBalance](SubAccountBalance.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listSubAccountMarginBalances

> Promise<{ response: http.IncomingMessage; body: Array<SubAccountMarginBalance>; }> listSubAccountMarginBalances(opts)

Query sub-account isolated margin account balance information

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
  'subUid': "10003" // string | Sub-account user ID, you can query multiple records separated by `,`. If not specified, it will return records of all sub-accounts
};
api.listSubAccountMarginBalances(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subUid** | **string**| Sub-account user ID, you can query multiple records separated by &#x60;,&#x60;. If not specified, it will return records of all sub-accounts | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<SubAccountMarginBalance>; }> [SubAccountMarginBalance](SubAccountMarginBalance.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listSubAccountFuturesBalances

> Promise<{ response: http.IncomingMessage; body: Array<SubAccountFuturesBalance>; }> listSubAccountFuturesBalances(opts)

Query sub-account perpetual futures account balance information

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
  'subUid': "10003", // string | Sub-account user ID, you can query multiple records separated by `,`. If not specified, it will return records of all sub-accounts
  'settle': "usdt" // string | Query balance of specified settlement currency
};
api.listSubAccountFuturesBalances(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subUid** | **string**| Sub-account user ID, you can query multiple records separated by &#x60;,&#x60;. If not specified, it will return records of all sub-accounts | [optional] [default to undefined]
 **settle** | **string**| Query balance of specified settlement currency | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<SubAccountFuturesBalance>; }> [SubAccountFuturesBalance](SubAccountFuturesBalance.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listSubAccountCrossMarginBalances

> Promise<{ response: http.IncomingMessage; body: Array<SubAccountCrossMarginBalance>; }> listSubAccountCrossMarginBalances(opts)

Query sub-account cross margin account balance information

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
  'subUid': "10003" // string | Sub-account user ID, you can query multiple records separated by `,`. If not specified, it will return records of all sub-accounts
};
api.listSubAccountCrossMarginBalances(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subUid** | **string**| Sub-account user ID, you can query multiple records separated by &#x60;,&#x60;. If not specified, it will return records of all sub-accounts | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<SubAccountCrossMarginBalance>; }> [SubAccountCrossMarginBalance](SubAccountCrossMarginBalance.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listSavedAddress

> Promise<{ response: http.IncomingMessage; body: Array<SavedAddress>; }> listSavedAddress(currency, opts)

Query withdrawal address whitelist

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
  'limit': '50', // string | Maximum number returned, up to 100
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
 **limit** | **string**| Maximum number returned, up to 100 | [optional] [default to &#39;50&#39;]
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

Query personal trading fees

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
  'currencyPair': "BTC_USDT", // string | Specify currency pair to get more accurate fee settings.  This field is optional. Usually fee settings are the same for all currency pairs.
  'settle': "BTC" // 'BTC' | 'USDT' | 'USD' | Specify the settlement currency of the contract to get more accurate fee settings.  This field is optional. Generally, the fee settings for all settlement currencies are the same.
};
api.getTradeFee(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **string**| Specify currency pair to get more accurate fee settings.  This field is optional. Usually fee settings are the same for all currency pairs. | [optional] [default to undefined]
 **settle** | **Settle**| Specify the settlement currency of the contract to get more accurate fee settings.  This field is optional. Generally, the fee settings for all settlement currencies are the same. | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: TradeFee; }> [TradeFee](TradeFee.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getTotalBalance

> Promise<{ response: http.IncomingMessage; body: TotalBalance; }> getTotalBalance(opts)

Query personal account totals

This query endpoint returns the total *estimated value* of all currencies in each account converted to the input currency. Exchange rates and related account balance information may be cached for up to 1 minute. It is not recommended to use this interface data for real-time calculations.  For real-time calculations, query the corresponding balance interface based on account type, such as:  - &#x60;GET /spot/accounts&#x60; to query spot account - &#x60;GET /margin/accounts&#x60; to query margin account - &#x60;GET /futures/{settle}/accounts&#x60; to query futures account

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
  'currency': 'USDT' // string | Target currency type for statistical conversion. Accepts BTC, CNY, USD, and USDT. USDT is the default value
};
api.getTotalBalance(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Target currency type for statistical conversion. Accepts BTC, CNY, USD, and USDT. USDT is the default value | [optional] [default to &#39;USDT&#39;]

### Return type

Promise<{ response: AxiosResponse; body: TotalBalance; }> [TotalBalance](TotalBalance.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listSmallBalance

> Promise<{ response: http.IncomingMessage; body: Array<SmallBalance>; }> listSmallBalance()

Get list of convertible small balance currencies

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

Convert small balance currency

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

Get convertible small balance currency history

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
  'currency': "currency_example", // string | Currency to convert
  'page': 1, // number | Page number
  'limit': 100 // number | Maximum number of items returned. Default: 100, minimum: 1, maximum: 100
};
api.listSmallBalanceHistory(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Currency to convert | [optional] [default to undefined]
 **page** | **number**| Page number | [optional] [default to 1]
 **limit** | **number**| Maximum number of items returned. Default: 100, minimum: 1, maximum: 100 | [optional] [default to 100]

### Return type

Promise<{ response: AxiosResponse; body: Array<SmallBalanceHistory>; }> [SmallBalanceHistory](SmallBalanceHistory.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listPushOrders

> Promise<{ response: http.IncomingMessage; body: Array<UidPushOrder>; }> listPushOrders(opts)

Get UID transfer history

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
  'from': 56, // number | Start time for querying records. If not specified, defaults to 7 days before the current time. Unix timestamp in seconds
  'to': 56, // number | End time for querying records. If not specified, defaults to the current time. Unix timestamp in seconds
  'limit': 100, // number | Maximum number of items returned in the list, default value is 100
  'offset': 0, // number | List offset, starting from 0
  'transactionType': 'withdraw' // string | Order type returned in the list: `withdraw`, `deposit`. Default is `withdraw`.
};
api.listPushOrders(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **number**| Order ID | [optional] [default to undefined]
 **from** | **number**| Start time for querying records. If not specified, defaults to 7 days before the current time. Unix timestamp in seconds | [optional] [default to undefined]
 **to** | **number**| End time for querying records. If not specified, defaults to the current time. Unix timestamp in seconds | [optional] [default to undefined]
 **limit** | **number**| Maximum number of items returned in the list, default value is 100 | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0 | [optional] [default to 0]
 **transactionType** | **string**| Order type returned in the list: &#x60;withdraw&#x60;, &#x60;deposit&#x60;. Default is &#x60;withdraw&#x60;. | [optional] [default to &#39;withdraw&#39;]

### Return type

Promise<{ response: AxiosResponse; body: Array<UidPushOrder>; }> [UidPushOrder](UidPushOrder.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
