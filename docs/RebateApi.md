# RebateApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**agencyTransactionHistory**](RebateApi.md#agencyTransactionHistory) | **GET** /rebate/agency/transaction_history | The broker obtains the transaction history of the recommended user
[**agencyCommissionsHistory**](RebateApi.md#agencyCommissionsHistory) | **GET** /rebate/agency/commission_history | The broker obtains the commission history of the recommended user


## agencyTransactionHistory

> Promise<{ response: http.IncomingMessage; body: Array<AgencyTransactionHistory>; }> agencyTransactionHistory(opts)

The broker obtains the transaction history of the recommended user

Record time range cannot exceed 30 days

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.RebateApi(client);
const opts = {
  'currencyPair': "BTC_USDT", // string | Specify the currency pair, if not specified, return all currency pairs
  'userId': "10003", // string | User ID. If not specified, all user records will be returned
  'from': 1602120000, // number | Time range beginning, default to 7 days before current time
  'to': 1602123600, // number | Time range ending, default to current time
  'limit': 100, // number | Maximum number of records to be returned in a single list
  'offset': 0 // number | List offset, starting from 0
};
api.agencyTransactionHistory(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **string**| Specify the currency pair, if not specified, return all currency pairs | [optional] [default to undefined]
 **userId** | **string**| User ID. If not specified, all user records will be returned | [optional] [default to undefined]
 **from** | **number**| Time range beginning, default to 7 days before current time | [optional] [default to undefined]
 **to** | **number**| Time range ending, default to current time | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0 | [optional] [default to 0]

### Return type

Promise<{ response: AxiosResponse; body: Array<AgencyTransactionHistory>; }> [AgencyTransactionHistory](AgencyTransactionHistory.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## agencyCommissionsHistory

> Promise<{ response: http.IncomingMessage; body: Array<AgencyCommissionHistory>; }> agencyCommissionsHistory(opts)

The broker obtains the commission history of the recommended user

Record time range cannot exceed 30 days

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.RebateApi(client);
const opts = {
  'currency': "BTC", // string | Filter by currency. Return all currency records if not specified
  'userId': "10003", // string | User ID. If not specified, all user records will be returned
  'from': 1602120000, // number | Time range beginning, default to 7 days before current time
  'to': 1602123600, // number | Time range ending, default to current time
  'limit': 100, // number | Maximum number of records to be returned in a single list
  'offset': 0 // number | List offset, starting from 0
};
api.agencyCommissionsHistory(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Filter by currency. Return all currency records if not specified | [optional] [default to undefined]
 **userId** | **string**| User ID. If not specified, all user records will be returned | [optional] [default to undefined]
 **from** | **number**| Time range beginning, default to 7 days before current time | [optional] [default to undefined]
 **to** | **number**| Time range ending, default to current time | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0 | [optional] [default to 0]

### Return type

Promise<{ response: AxiosResponse; body: Array<AgencyCommissionHistory>; }> [AgencyCommissionHistory](AgencyCommissionHistory.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
