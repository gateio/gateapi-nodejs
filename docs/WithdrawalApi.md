# WithdrawalApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**withdraw**](WithdrawalApi.md#withdraw) | **POST** /withdrawals | Withdraw
[**withdrawPushOrder**](WithdrawalApi.md#withdrawPushOrder) | **POST** /withdrawals/push | UID transfer
[**cancelWithdrawal**](WithdrawalApi.md#cancelWithdrawal) | **DELETE** /withdrawals/{withdrawal_id} | Cancel withdrawal with specified ID


## withdraw

> Promise<{ response: http.IncomingMessage; body: LedgerRecord; }> withdraw(ledgerRecord)

Withdraw

If the recipient\&#39;s on-chain address is also Gate, no transaction fee will be charged

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.WithdrawalApi(client);
const ledgerRecord = new LedgerRecord(); // LedgerRecord | 
api.withdraw(ledgerRecord)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ledgerRecord** | [**LedgerRecord**](LedgerRecord.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: LedgerRecord; }> [LedgerRecord](LedgerRecord.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## withdrawPushOrder

> Promise<{ response: http.IncomingMessage; body: UidPushWithdrawalResp; }> withdrawPushOrder(uidPushWithdrawal)

UID transfer

Transfers between main spot accounts. Both parties cannot be sub-accounts

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.WithdrawalApi(client);
const uidPushWithdrawal = new UidPushWithdrawal(); // UidPushWithdrawal | 
api.withdrawPushOrder(uidPushWithdrawal)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uidPushWithdrawal** | [**UidPushWithdrawal**](UidPushWithdrawal.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: UidPushWithdrawalResp; }> [UidPushWithdrawalResp](UidPushWithdrawalResp.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## cancelWithdrawal

> Promise<{ response: http.IncomingMessage; body: LedgerRecord; }> cancelWithdrawal(withdrawalId)

Cancel withdrawal with specified ID

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.WithdrawalApi(client);
const withdrawalId = "210496"; // string | 
api.cancelWithdrawal(withdrawalId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **withdrawalId** | **string**|  | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: LedgerRecord; }> [LedgerRecord](LedgerRecord.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
