# WalletApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDepositAddress**](WalletApi.md#getDepositAddress) | **GET** /wallet/deposit_address | Generate currency deposit address
[**listWithdrawals**](WalletApi.md#listWithdrawals) | **GET** /wallet/withdrawals | Retrieve withdrawal records
[**listDeposits**](WalletApi.md#listDeposits) | **GET** /wallet/deposits | Retrieve deposit records
[**transfer**](WalletApi.md#transfer) | **POST** /wallet/transfers | Transfer between trading accounts
[**listSubAccountTransfers**](WalletApi.md#listSubAccountTransfers) | **GET** /wallet/sub_account_transfers | Transfer records between main and sub accounts
[**transferWithSubAccount**](WalletApi.md#transferWithSubAccount) | **POST** /wallet/sub_account_transfers | Transfer between main and sub accounts
[**listWithdrawStatus**](WalletApi.md#listWithdrawStatus) | **GET** /wallet/withdraw_status | Retrieve withdrawal status
[**listSubAccountBalances**](WalletApi.md#listSubAccountBalances) | **GET** /wallet/sub_account_balances | Retrieve sub account balances
[**getTradeFee**](WalletApi.md#getTradeFee) | **GET** /wallet/fee | Retrieve personal trading fee


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

> Promise<{ response: http.IncomingMessage; body: Array<LedgerRecord>; }> listWithdrawals(opts)

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
  'from': 1602120000, // number | Time range beginning, default to 7 days before current time
  'to': 1602123600, // number | Time range ending, default to current time
  'limit': 100, // number | Maximum number of records returned in one list
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
 **from** | **number**| Time range beginning, default to 7 days before current time | [optional] [default to undefined]
 **to** | **number**| Time range ending, default to current time | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records returned in one list | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0 | [optional] [default to 0]

### Return type

Promise<{ response: AxiosResponse; body: Array<LedgerRecord>; }> [LedgerRecord](LedgerRecord.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listDeposits

> Promise<{ response: http.IncomingMessage; body: Array<LedgerRecord>; }> listDeposits(opts)

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
  'limit': 100, // number | Maximum number of records returned in one list
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
 **limit** | **number**| Maximum number of records returned in one list | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0 | [optional] [default to 0]

### Return type

Promise<{ response: AxiosResponse; body: Array<LedgerRecord>; }> [LedgerRecord](LedgerRecord.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## transfer

> Promise<{ response: http.IncomingMessage; body?: any; }> transfer(transfer)

Transfer between trading accounts

Transfer between different accounts. Currently support transfers between the following:  1. spot - margin 2. spot - futures(perpetual) 3. spot - delivery 4. spot - cross margin

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
   .then(value => console.log('API called successfully.'),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transfer** | [**Transfer**](Transfer.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body?: any; }> 

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

## listSubAccountTransfers

> Promise<{ response: http.IncomingMessage; body: Array<SubAccountTransfer>; }> listSubAccountTransfers(opts)

Transfer records between main and sub accounts

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
  'subUid': "10003", // string | Sub account user ID. Return records related to all sub accounts if not specified
  'from': 1602120000, // number | Time range beginning, default to 7 days before current time
  'to': 1602123600, // number | Time range ending, default to current time
  'limit': 100, // number | Maximum number of records returned in one list
  'offset': 0 // number | List offset, starting from 0
};
api.listSubAccountTransfers(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subUid** | **string**| Sub account user ID. Return records related to all sub accounts if not specified | [optional] [default to undefined]
 **from** | **number**| Time range beginning, default to 7 days before current time | [optional] [default to undefined]
 **to** | **number**| Time range ending, default to current time | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records returned in one list | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0 | [optional] [default to 0]

### Return type

Promise<{ response: AxiosResponse; body: Array<SubAccountTransfer>; }> [SubAccountTransfer](SubAccountTransfer.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## transferWithSubAccount

> Promise<{ response: http.IncomingMessage; body?: any; }> transferWithSubAccount(subAccountTransfer)

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
   .then(value => console.log('API called successfully.'),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subAccountTransfer** | [**SubAccountTransfer**](SubAccountTransfer.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body?: any; }> 

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

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
  'currency': "BTC" // string | Retrieved specified currency related data
};
api.listWithdrawStatus(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Retrieved specified currency related data | [optional] [default to undefined]

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
  'subUid': "10003" // string | Sub account user ID. Return records related to all sub accounts if not specified
};
api.listSubAccountBalances(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subUid** | **string**| Sub account user ID. Return records related to all sub accounts if not specified | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<SubAccountBalance>; }> [SubAccountBalance](SubAccountBalance.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getTradeFee

> Promise<{ response: http.IncomingMessage; body: TradeFee; }> getTradeFee()

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
api.getTradeFee()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: TradeFee; }> [TradeFee](TradeFee.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
