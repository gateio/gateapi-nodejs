# GateApi.WalletApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDepositAddress**](WalletApi.md#getDepositAddress) | **GET** /wallet/deposit_address | Generate currency deposit address
[**listDeposits**](WalletApi.md#listDeposits) | **GET** /wallet/deposits | Retrieve deposit records
[**listSubAccountTransfers**](WalletApi.md#listSubAccountTransfers) | **GET** /wallet/sub_account_transfers | Transfer records between main and sub accounts
[**listWithdrawals**](WalletApi.md#listWithdrawals) | **GET** /wallet/withdrawals | Retrieve withdrawal records
[**transfer**](WalletApi.md#transfer) | **POST** /wallet/transfers | Transfer between accounts
[**transferWithSubAccount**](WalletApi.md#transferWithSubAccount) | **POST** /wallet/sub_account_transfers | Transfer between main and sub accounts


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
const currency = currency_example; // string | Currency name
api.getDepositAddress(currency)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Currency name | [default to undefined]

### Return type

Promise<{ response: http.IncomingMessage; body: DepositAddress; }(DepositAddress.md)

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
  'currency': BTC, // string | Filter by currency. Return all currency records if not specified
  'from': 789, // number | Time range beginning, default to 7 days before current time
  'to': 789, // number | Time range ending, default to current time
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

Promise<{ response: http.IncomingMessage; body: Array<LedgerRecord>; }(LedgerRecord.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

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
  'subUid': 10003, // string | Sub account user ID. Return records related to all sub accounts if not specified
  'from': 789, // number | Time range beginning, default to 7 days before current time
  'to': 789, // number | Time range ending, default to current time
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

Promise<{ response: http.IncomingMessage; body: Array<SubAccountTransfer>; }(SubAccountTransfer.md)

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
  'currency': BTC, // string | Filter by currency. Return all currency records if not specified
  'from': 789, // number | Time range beginning, default to 7 days before current time
  'to': 789, // number | Time range ending, default to current time
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

Promise<{ response: http.IncomingMessage; body: Array<LedgerRecord>; }(LedgerRecord.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## transfer

> Promise<{ response: http.IncomingMessage; body?: any; }> transfer(transfer)

Transfer between accounts

Transfer between different accounts. Currently support transfers between the following:  1. spot - margin 2. spot - futures(perpetual) 2. spot - delivery

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.WalletApi(client);
const transfer = {"currency":"BTC","from":"spot","to":"margin","amount":"1","currency_pair":"BTC_USDT"}; // Transfer | 
api.transfer(transfer)
   .then(value => console.log('API called successfully.'),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transfer** | [**Transfer**](Transfer.md)|  | 

### Return type

Promise<{ response: http.IncomingMessage; body?: any; }(.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

## transferWithSubAccount

> Promise<{ response: http.IncomingMessage; body?: any; }> transferWithSubAccount(subAccountTransfer)

Transfer between main and sub accounts

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.WalletApi(client);
const subAccountTransfer = {"uid":"10001","timest":"1592809000","source":"web","currency":"BTC","sub_account":"10002","direction":"to","amount":"1"}; // SubAccountTransfer | 
api.transferWithSubAccount(subAccountTransfer)
   .then(value => console.log('API called successfully.'),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subAccountTransfer** | [**SubAccountTransfer**](SubAccountTransfer.md)|  | 

### Return type

Promise<{ response: http.IncomingMessage; body?: any; }(.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined