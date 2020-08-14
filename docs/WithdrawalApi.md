# WithdrawalApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**withdraw**](WithdrawalApi.md#withdraw) | **POST** /withdrawals | Withdraw


## withdraw

> Promise<{ response: http.IncomingMessage; body: LedgerRecord; }> withdraw(ledgerRecord)

Withdraw

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
