# RebateApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**agencyTransactionHistory**](RebateApi.md#agencyTransactionHistory) | **GET** /rebate/agency/transaction_history | Broker obtains transaction history of recommended users
[**agencyCommissionsHistory**](RebateApi.md#agencyCommissionsHistory) | **GET** /rebate/agency/commission_history | Broker obtains rebate history of recommended users
[**partnerTransactionHistory**](RebateApi.md#partnerTransactionHistory) | **GET** /rebate/partner/transaction_history | Partner obtains transaction history of recommended users
[**partnerCommissionsHistory**](RebateApi.md#partnerCommissionsHistory) | **GET** /rebate/partner/commission_history | Partner obtains rebate records of recommended users
[**partnerSubList**](RebateApi.md#partnerSubList) | **GET** /rebate/partner/sub_list | Partner subordinate list
[**rebateBrokerCommissionHistory**](RebateApi.md#rebateBrokerCommissionHistory) | **GET** /rebate/broker/commission_history | Broker obtains user\&#39;s rebate records
[**rebateBrokerTransactionHistory**](RebateApi.md#rebateBrokerTransactionHistory) | **GET** /rebate/broker/transaction_history | Broker obtains user\&#39;s trading history
[**rebateUserInfo**](RebateApi.md#rebateUserInfo) | **GET** /rebate/user/info | User obtains rebate information
[**userSubRelation**](RebateApi.md#userSubRelation) | **GET** /rebate/user/sub_relation | User subordinate relationship


## agencyTransactionHistory

> Promise<{ response: http.IncomingMessage; body: Array<AgencyTransactionHistory>; }> agencyTransactionHistory(opts)

Broker obtains transaction history of recommended users

Record query time range cannot exceed 30 days

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
  'currencyPair': "BTC_USDT", // string | Specify the trading pair. If not specified, returns all trading pairs
  'userId': 10003, // number | User ID. If not specified, all user records will be returned
  'from': 1602120000, // number | Start time for querying records, defaults to 7 days before current time if not specified
  'to': 1602123600, // number | End timestamp for the query, defaults to current time if not specified
  'limit': 100, // number | Maximum number of records returned in a single list
  'offset': 0 // number | List offset, starting from 0
};
api.agencyTransactionHistory(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **string**| Specify the trading pair. If not specified, returns all trading pairs | [optional] [default to undefined]
 **userId** | **number**| User ID. If not specified, all user records will be returned | [optional] [default to undefined]
 **from** | **number**| Start time for querying records, defaults to 7 days before current time if not specified | [optional] [default to undefined]
 **to** | **number**| End timestamp for the query, defaults to current time if not specified | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records returned in a single list | [optional] [default to 100]
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

Broker obtains rebate history of recommended users

Record query time range cannot exceed 30 days

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
  'currency': "BTC", // string | Specify the currency. If not specified, returns all currencies
  'userId': 10003, // number | User ID. If not specified, all user records will be returned
  'from': 1602120000, // number | Start time for querying records, defaults to 7 days before current time if not specified
  'to': 1602123600, // number | End timestamp for the query, defaults to current time if not specified
  'limit': 100, // number | Maximum number of records returned in a single list
  'offset': 0 // number | List offset, starting from 0
};
api.agencyCommissionsHistory(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Specify the currency. If not specified, returns all currencies | [optional] [default to undefined]
 **userId** | **number**| User ID. If not specified, all user records will be returned | [optional] [default to undefined]
 **from** | **number**| Start time for querying records, defaults to 7 days before current time if not specified | [optional] [default to undefined]
 **to** | **number**| End timestamp for the query, defaults to current time if not specified | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records returned in a single list | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0 | [optional] [default to 0]

### Return type

Promise<{ response: AxiosResponse; body: Array<AgencyCommissionHistory>; }> [AgencyCommissionHistory](AgencyCommissionHistory.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## partnerTransactionHistory

> Promise<{ response: http.IncomingMessage; body: PartnerTransactionHistory; }> partnerTransactionHistory(opts)

Partner obtains transaction history of recommended users

Record query time range cannot exceed 30 days

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
  'currencyPair': "BTC_USDT", // string | Specify the trading pair. If not specified, returns all trading pairs
  'userId': 10003, // number | User ID. If not specified, all user records will be returned
  'from': 1602120000, // number | Start time for querying records, defaults to 7 days before current time if not specified
  'to': 1602123600, // number | End timestamp for the query, defaults to current time if not specified
  'limit': 100, // number | Maximum number of records returned in a single list
  'offset': 0 // number | List offset, starting from 0
};
api.partnerTransactionHistory(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **string**| Specify the trading pair. If not specified, returns all trading pairs | [optional] [default to undefined]
 **userId** | **number**| User ID. If not specified, all user records will be returned | [optional] [default to undefined]
 **from** | **number**| Start time for querying records, defaults to 7 days before current time if not specified | [optional] [default to undefined]
 **to** | **number**| End timestamp for the query, defaults to current time if not specified | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records returned in a single list | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0 | [optional] [default to 0]

### Return type

Promise<{ response: AxiosResponse; body: PartnerTransactionHistory; }> [PartnerTransactionHistory](PartnerTransactionHistory.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## partnerCommissionsHistory

> Promise<{ response: http.IncomingMessage; body: PartnerCommissionHistory; }> partnerCommissionsHistory(opts)

Partner obtains rebate records of recommended users

Record query time range cannot exceed 30 days

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
  'currency': "BTC", // string | Specify the currency. If not specified, returns all currencies
  'userId': 10003, // number | User ID. If not specified, all user records will be returned
  'from': 1602120000, // number | Start time for querying records, defaults to 7 days before current time if not specified
  'to': 1602123600, // number | End timestamp for the query, defaults to current time if not specified
  'limit': 100, // number | Maximum number of records returned in a single list
  'offset': 0 // number | List offset, starting from 0
};
api.partnerCommissionsHistory(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Specify the currency. If not specified, returns all currencies | [optional] [default to undefined]
 **userId** | **number**| User ID. If not specified, all user records will be returned | [optional] [default to undefined]
 **from** | **number**| Start time for querying records, defaults to 7 days before current time if not specified | [optional] [default to undefined]
 **to** | **number**| End timestamp for the query, defaults to current time if not specified | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records returned in a single list | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0 | [optional] [default to 0]

### Return type

Promise<{ response: AxiosResponse; body: PartnerCommissionHistory; }> [PartnerCommissionHistory](PartnerCommissionHistory.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## partnerSubList

> Promise<{ response: http.IncomingMessage; body: PartnerSubList; }> partnerSubList(opts)

Partner subordinate list

Including sub-agents, direct customers, and indirect customers

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
  'userId': 10003, // number | User ID. If not specified, all user records will be returned
  'limit': 100, // number | Maximum number of records returned in a single list
  'offset': 0 // number | List offset, starting from 0
};
api.partnerSubList(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **number**| User ID. If not specified, all user records will be returned | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records returned in a single list | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0 | [optional] [default to 0]

### Return type

Promise<{ response: AxiosResponse; body: PartnerSubList; }> [PartnerSubList](PartnerSubList.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## rebateBrokerCommissionHistory

> Promise<{ response: http.IncomingMessage; body: Array<BrokerCommission>; }> rebateBrokerCommissionHistory(opts)

Broker obtains user\&#39;s rebate records

Record query time range cannot exceed 30 days

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
  'limit': 100, // number | Maximum number of records returned in a single list
  'offset': 0, // number | List offset, starting from 0
  'userId': 10003, // number | User ID. If not specified, all user records will be returned
  'from': 1711929600, // number | Start time of the query record. If not specified, defaults to 30 days before the current time
  'to': 1714521600 // number | End timestamp for the query, defaults to current time if not specified
};
api.rebateBrokerCommissionHistory(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **number**| Maximum number of records returned in a single list | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0 | [optional] [default to 0]
 **userId** | **number**| User ID. If not specified, all user records will be returned | [optional] [default to undefined]
 **from** | **number**| Start time of the query record. If not specified, defaults to 30 days before the current time | [optional] [default to undefined]
 **to** | **number**| End timestamp for the query, defaults to current time if not specified | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<BrokerCommission>; }> [BrokerCommission](BrokerCommission.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## rebateBrokerTransactionHistory

> Promise<{ response: http.IncomingMessage; body: Array<BrokerTransaction>; }> rebateBrokerTransactionHistory(opts)

Broker obtains user\&#39;s trading history

Record query time range cannot exceed 30 days

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
  'limit': 100, // number | Maximum number of records returned in a single list
  'offset': 0, // number | List offset, starting from 0
  'userId': 10003, // number | User ID. If not specified, all user records will be returned
  'from': 1711929600, // number | Start time of the query record. If not specified, defaults to 30 days before the current time
  'to': 1714521600 // number | End timestamp for the query, defaults to current time if not specified
};
api.rebateBrokerTransactionHistory(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **number**| Maximum number of records returned in a single list | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0 | [optional] [default to 0]
 **userId** | **number**| User ID. If not specified, all user records will be returned | [optional] [default to undefined]
 **from** | **number**| Start time of the query record. If not specified, defaults to 30 days before the current time | [optional] [default to undefined]
 **to** | **number**| End timestamp for the query, defaults to current time if not specified | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<BrokerTransaction>; }> [BrokerTransaction](BrokerTransaction.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## rebateUserInfo

> Promise<{ response: http.IncomingMessage; body: Array<RebateUserInfo>; }> rebateUserInfo()

User obtains rebate information

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.RebateApi(client);
api.rebateUserInfo()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: Array<RebateUserInfo>; }> [RebateUserInfo](RebateUserInfo.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## userSubRelation

> Promise<{ response: http.IncomingMessage; body: UserSubRelation; }> userSubRelation(userIdList)

User subordinate relationship

Query whether the specified user is within the system

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.RebateApi(client);
const userIdList = "1, 2, 3"; // string | Query user ID list, separated by commas. If more than 100, only 100 will be returned
api.userSubRelation(userIdList)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userIdList** | **string**| Query user ID list, separated by commas. If more than 100, only 100 will be returned | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: UserSubRelation; }> [UserSubRelation](UserSubRelation.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
