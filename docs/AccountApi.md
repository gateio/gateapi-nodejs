# AccountApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccountDetail**](AccountApi.md#getAccountDetail) | **GET** /account/detail | Get account detail.
[**getAccountRateLimit**](AccountApi.md#getAccountRateLimit) | **GET** /account/rate_limit | Get user transaction rate limit information.
[**listSTPGroups**](AccountApi.md#listSTPGroups) | **GET** /account/stp_groups | List STP Groups.
[**createSTPGroup**](AccountApi.md#createSTPGroup) | **POST** /account/stp_groups | Create STP Group.
[**listSTPGroupsUsers**](AccountApi.md#listSTPGroupsUsers) | **GET** /account/stp_groups/{stp_id}/users | List users of the STP group.
[**addSTPGroupUsers**](AccountApi.md#addSTPGroupUsers) | **POST** /account/stp_groups/{stp_id}/users | Add users to the STP group.
[**deleteSTPGroupUsers**](AccountApi.md#deleteSTPGroupUsers) | **DELETE** /account/stp_groups/{stp_id}/users | Delete the user in the STP group.
[**getDebitFee**](AccountApi.md#getDebitFee) | **GET** /account/debit_fee | Query GT deduction configuration.
[**setDebitFee**](AccountApi.md#setDebitFee) | **POST** /account/debit_fee | Set GT deduction.


## getAccountDetail

> Promise<{ response: http.IncomingMessage; body: AccountDetail; }> getAccountDetail()

Get account detail.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.AccountApi(client);
api.getAccountDetail()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: AccountDetail; }> [AccountDetail](AccountDetail.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getAccountRateLimit

> Promise<{ response: http.IncomingMessage; body: Array<AccountRateLimit>; }> getAccountRateLimit()

Get user transaction rate limit information.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.AccountApi(client);
api.getAccountRateLimit()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: Array<AccountRateLimit>; }> [AccountRateLimit](AccountRateLimit.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listSTPGroups

> Promise<{ response: http.IncomingMessage; body: Array<StpGroup>; }> listSTPGroups(opts)

List STP Groups.

Retrieve the list of STP groups created by the main account user only.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.AccountApi(client);
const opts = {
  'name': "group" // string | Perform a fuzzy search based on the name.
};
api.listSTPGroups(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| Perform a fuzzy search based on the name. | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<StpGroup>; }> [StpGroup](StpGroup.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createSTPGroup

> Promise<{ response: http.IncomingMessage; body: StpGroup; }> createSTPGroup(stpGroup)

Create STP Group.

Only the main account is allowed to create a new STP user group.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.AccountApi(client);
const stpGroup = new StpGroup(); // StpGroup | 
api.createSTPGroup(stpGroup)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stpGroup** | [**StpGroup**](StpGroup.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: StpGroup; }> [StpGroup](StpGroup.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## listSTPGroupsUsers

> Promise<{ response: http.IncomingMessage; body: Array<StpGroupUser>; }> listSTPGroupsUsers(stpId)

List users of the STP group.

Only the main account that created this STP group can query the account.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.AccountApi(client);
const stpId = 1; // number | STP Group ID.
api.listSTPGroupsUsers(stpId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stpId** | **number**| STP Group ID. | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<StpGroupUser>; }> [StpGroupUser](StpGroupUser.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## addSTPGroupUsers

> Promise<{ response: http.IncomingMessage; body: Array<StpGroupUser>; }> addSTPGroupUsers(stpId, requestBody)

Add users to the STP group.

- Only the master account that created the STP user group is allowed to add users group.- Only accounts under the main account are allowed to be added. Cross-account is not permitted

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.AccountApi(client);
const stpId = 1; // number | STP Group ID.
const requestBody = [[1,2,3]]; // Array<number> | User ID.
api.addSTPGroupUsers(stpId, requestBody)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stpId** | **number**| STP Group ID. | [default to undefined]
 **requestBody** | [**Array&lt;number&gt;**](number.md)| User ID. | 

### Return type

Promise<{ response: AxiosResponse; body: Array<StpGroupUser>; }> [StpGroupUser](StpGroupUser.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteSTPGroupUsers

> Promise<{ response: http.IncomingMessage; body: Array<StpGroupUser>; }> deleteSTPGroupUsers(stpId, userId)

Delete the user in the STP group.

- Only the main account that created this STP group is allowed to delete users from the STP user group - Deletion is limited to accounts under the current main account; cross-account deletion is not permitted

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.AccountApi(client);
const stpId = 1; // number | STP Group ID.
const userId = 1; // number | STP user ID, multiple can be separated by commas.
api.deleteSTPGroupUsers(stpId, userId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stpId** | **number**| STP Group ID. | [default to undefined]
 **userId** | **number**| STP user ID, multiple can be separated by commas. | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<StpGroupUser>; }> [StpGroupUser](StpGroupUser.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDebitFee

> Promise<{ response: http.IncomingMessage; body: DebitFee; }> getDebitFee()

Query GT deduction configuration.

Query the current GT deduction configuration for the account.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.AccountApi(client);
api.getDebitFee()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: DebitFee; }> [DebitFee](DebitFee.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## setDebitFee

> Promise<{ response: http.IncomingMessage; body?: any; }> setDebitFee(debitFee)

Set GT deduction.

Enable or disable GT deduction for the current account.

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.AccountApi(client);
const debitFee = new DebitFee(); // DebitFee | 
api.setDebitFee(debitFee)
   .then(value => console.log('API called successfully.'),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **debitFee** | [**DebitFee**](DebitFee.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body?: any; }> 

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined
