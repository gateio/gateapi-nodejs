# RebateApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**agencyTransactionHistory**](RebateApi.md#agencyTransactionHistory) | **GET** /rebate/agency/transaction_history | The agency obtains the transaction history of the recommended user
[**agencyCommissionsHistory**](RebateApi.md#agencyCommissionsHistory) | **GET** /rebate/agency/commission_history | The agency obtains the commission history of the recommended user
[**partnerTransactionHistory**](RebateApi.md#partnerTransactionHistory) | **GET** /rebate/partner/transaction_history | 合伙人获取推荐用户的交易记录
[**partnerCommissionsHistory**](RebateApi.md#partnerCommissionsHistory) | **GET** /rebate/partner/commission_history | 合伙人获取推荐用户的返佣记录
[**partnerSubList**](RebateApi.md#partnerSubList) | **GET** /rebate/partner/sub_list | 合伙人下级列表
[**rebateBrokerCommissionHistory**](RebateApi.md#rebateBrokerCommissionHistory) | **GET** /rebate/broker/commission_history | The broker obtains the user\&#39;s commission rebate records
[**rebateBrokerTransactionHistory**](RebateApi.md#rebateBrokerTransactionHistory) | **GET** /rebate/broker/transaction_history | The broker obtains the user\&#39;s trading history
[**rebateUserInfo**](RebateApi.md#rebateUserInfo) | **GET** /rebate/user/info | 用户获取返佣信息
[**userSubRelation**](RebateApi.md#userSubRelation) | **GET** /rebate/user/sub_relation | 用户下级关系


## agencyTransactionHistory

> Promise<{ response: http.IncomingMessage; body: Array<AgencyTransactionHistory>; }> agencyTransactionHistory(opts)

The agency obtains the transaction history of the recommended user

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
  'userId': 10003, // number | User ID. If not specified, all user records will be returned
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
 **userId** | **number**| User ID. If not specified, all user records will be returned | [optional] [default to undefined]
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

The agency obtains the commission history of the recommended user

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
  'userId': 10003, // number | User ID. If not specified, all user records will be returned
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
 **userId** | **number**| User ID. If not specified, all user records will be returned | [optional] [default to undefined]
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

## partnerTransactionHistory

> Promise<{ response: http.IncomingMessage; body: PartnerTransactionHistory; }> partnerTransactionHistory(opts)

合伙人获取推荐用户的交易记录

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
  'userId': 10003, // number | User ID. If not specified, all user records will be returned
  'from': 1602120000, // number | Time range beginning, default to 7 days before current time
  'to': 1602123600, // number | Time range ending, default to current time
  'limit': 100, // number | Maximum number of records to be returned in a single list
  'offset': 0 // number | List offset, starting from 0
};
api.partnerTransactionHistory(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyPair** | **string**| Specify the currency pair, if not specified, return all currency pairs | [optional] [default to undefined]
 **userId** | **number**| User ID. If not specified, all user records will be returned | [optional] [default to undefined]
 **from** | **number**| Time range beginning, default to 7 days before current time | [optional] [default to undefined]
 **to** | **number**| Time range ending, default to current time | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list | [optional] [default to 100]
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

合伙人获取推荐用户的返佣记录

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
  'userId': 10003, // number | User ID. If not specified, all user records will be returned
  'from': 1602120000, // number | Time range beginning, default to 7 days before current time
  'to': 1602123600, // number | Time range ending, default to current time
  'limit': 100, // number | Maximum number of records to be returned in a single list
  'offset': 0 // number | List offset, starting from 0
};
api.partnerCommissionsHistory(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Filter by currency. Return all currency records if not specified | [optional] [default to undefined]
 **userId** | **number**| User ID. If not specified, all user records will be returned | [optional] [default to undefined]
 **from** | **number**| Time range beginning, default to 7 days before current time | [optional] [default to undefined]
 **to** | **number**| Time range ending, default to current time | [optional] [default to undefined]
 **limit** | **number**| Maximum number of records to be returned in a single list | [optional] [default to 100]
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

合伙人下级列表

包含下级代理、直接直客、间接直客

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
  'limit': 100, // number | Maximum number of records to be returned in a single list
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
 **limit** | **number**| Maximum number of records to be returned in a single list | [optional] [default to 100]
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

The broker obtains the user\&#39;s commission rebate records

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
  'limit': 100, // number | Maximum number of records to be returned in a single list
  'offset': 0, // number | List offset, starting from 0
  'userId': 10003, // number | User ID. If not specified, all user records will be returned
  'from': 1711929600, // number | 查询记录的起始时间，不指定则默认从当前时间开始向前推 30 天
  'to': 1714521600 // number | Time range ending, default to current time
};
api.rebateBrokerCommissionHistory(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **number**| Maximum number of records to be returned in a single list | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0 | [optional] [default to 0]
 **userId** | **number**| User ID. If not specified, all user records will be returned | [optional] [default to undefined]
 **from** | **number**| 查询记录的起始时间，不指定则默认从当前时间开始向前推 30 天 | [optional] [default to undefined]
 **to** | **number**| Time range ending, default to current time | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<BrokerCommission>; }> [BrokerCommission](BrokerCommission.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## rebateBrokerTransactionHistory

> Promise<{ response: http.IncomingMessage; body: Array<BrokerTransaction>; }> rebateBrokerTransactionHistory(opts)

The broker obtains the user\&#39;s trading history

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
  'limit': 100, // number | Maximum number of records to be returned in a single list
  'offset': 0, // number | List offset, starting from 0
  'userId': 10003, // number | User ID. If not specified, all user records will be returned
  'from': 1711929600, // number | 查询记录的起始时间，不指定则默认从当前时间开始向前推 30 天
  'to': 1714521600 // number | Time range ending, default to current time
};
api.rebateBrokerTransactionHistory(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **number**| Maximum number of records to be returned in a single list | [optional] [default to 100]
 **offset** | **number**| List offset, starting from 0 | [optional] [default to 0]
 **userId** | **number**| User ID. If not specified, all user records will be returned | [optional] [default to undefined]
 **from** | **number**| 查询记录的起始时间，不指定则默认从当前时间开始向前推 30 天 | [optional] [default to undefined]
 **to** | **number**| Time range ending, default to current time | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<BrokerTransaction>; }> [BrokerTransaction](BrokerTransaction.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## rebateUserInfo

> Promise<{ response: http.IncomingMessage; body: Array<RebateUserInfo>; }> rebateUserInfo()

用户获取返佣信息

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

用户下级关系

查询指定用户是否在体系内

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.RebateApi(client);
const userIdList = "1, 2, 3"; // string | 查询用户的ID列表，以,分割，超过100个则取100个
api.userSubRelation(userIdList)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userIdList** | **string**| 查询用户的ID列表，以,分割，超过100个则取100个 | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: UserSubRelation; }> [UserSubRelation](UserSubRelation.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
