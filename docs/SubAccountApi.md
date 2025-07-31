# SubAccountApi

All URIs are relative to *https://api.gateio.ws/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listSubAccounts**](SubAccountApi.md#listSubAccounts) | **GET** /sub_accounts | List sub-accounts
[**createSubAccounts**](SubAccountApi.md#createSubAccounts) | **POST** /sub_accounts | Create a new sub-account
[**getSubAccount**](SubAccountApi.md#getSubAccount) | **GET** /sub_accounts/{user_id} | Get sub-account
[**listSubAccountKeys**](SubAccountApi.md#listSubAccountKeys) | **GET** /sub_accounts/{user_id}/keys | List all API key pairs of the sub-account
[**createSubAccountKeys**](SubAccountApi.md#createSubAccountKeys) | **POST** /sub_accounts/{user_id}/keys | Create new sub-account API key pair
[**getSubAccountKey**](SubAccountApi.md#getSubAccountKey) | **GET** /sub_accounts/{user_id}/keys/{key} | Get specific API key pair of the sub-account
[**updateSubAccountKeys**](SubAccountApi.md#updateSubAccountKeys) | **PUT** /sub_accounts/{user_id}/keys/{key} | Update sub-account API key pair
[**deleteSubAccountKeys**](SubAccountApi.md#deleteSubAccountKeys) | **DELETE** /sub_accounts/{user_id}/keys/{key} | Delete sub-account API key pair
[**lockSubAccount**](SubAccountApi.md#lockSubAccount) | **POST** /sub_accounts/{user_id}/lock | Lock sub-account
[**unlockSubAccount**](SubAccountApi.md#unlockSubAccount) | **POST** /sub_accounts/{user_id}/unlock | Unlock sub-account
[**listUnifiedMode**](SubAccountApi.md#listUnifiedMode) | **GET** /sub_accounts/unified_mode | Get sub-account mode


## listSubAccounts

> Promise<{ response: http.IncomingMessage; body: Array<SubAccount>; }> listSubAccounts(opts)

List sub-accounts

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.SubAccountApi(client);
const opts = {
  'type': "0" // string | Enter `0` to list all types of sub-accounts (currently supporting cross-margin sub-accounts and regular sub-accounts). Enter `1` to query regular sub-accounts only. If no parameter is passed, only regular sub-accounts will be queried by default.
};
api.listSubAccounts(opts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **string**| Enter &#x60;0&#x60; to list all types of sub-accounts (currently supporting cross-margin sub-accounts and regular sub-accounts). Enter &#x60;1&#x60; to query regular sub-accounts only. If no parameter is passed, only regular sub-accounts will be queried by default. | [optional] [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<SubAccount>; }> [SubAccount](SubAccount.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createSubAccounts

> Promise<{ response: http.IncomingMessage; body: SubAccount; }> createSubAccounts(subAccount)

Create a new sub-account

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.SubAccountApi(client);
const subAccount = new SubAccount(); // SubAccount | 
api.createSubAccounts(subAccount)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subAccount** | [**SubAccount**](SubAccount.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: SubAccount; }> [SubAccount](SubAccount.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## getSubAccount

> Promise<{ response: http.IncomingMessage; body: SubAccount; }> getSubAccount(userId)

Get sub-account

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.SubAccountApi(client);
const userId = 56; // number | Sub-account user ID
api.getSubAccount(userId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **number**| Sub-account user ID | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: SubAccount; }> [SubAccount](SubAccount.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listSubAccountKeys

> Promise<{ response: http.IncomingMessage; body: Array<SubAccountKey>; }> listSubAccountKeys(userId)

List all API key pairs of the sub-account

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.SubAccountApi(client);
const userId = 56; // number | Sub-account user ID
api.listSubAccountKeys(userId)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **number**| Sub-account user ID | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: Array<SubAccountKey>; }> [SubAccountKey](SubAccountKey.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createSubAccountKeys

> Promise<{ response: http.IncomingMessage; body: SubAccountKey; }> createSubAccountKeys(userId, subAccountKey)

Create new sub-account API key pair

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.SubAccountApi(client);
const userId = 56; // number | Sub-account user ID
const subAccountKey = new SubAccountKey(); // SubAccountKey | 
api.createSubAccountKeys(userId, subAccountKey)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **number**| Sub-account user ID | [default to undefined]
 **subAccountKey** | [**SubAccountKey**](SubAccountKey.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body: SubAccountKey; }> [SubAccountKey](SubAccountKey.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## getSubAccountKey

> Promise<{ response: http.IncomingMessage; body: SubAccountKey; }> getSubAccountKey(userId, key)

Get specific API key pair of the sub-account

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.SubAccountApi(client);
const userId = 56; // number | Sub-account user ID
const key = "key_example"; // string | Sub-account API key
api.getSubAccountKey(userId, key)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **number**| Sub-account user ID | [default to undefined]
 **key** | **string**| Sub-account API key | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body: SubAccountKey; }> [SubAccountKey](SubAccountKey.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateSubAccountKeys

> Promise<{ response: http.IncomingMessage; body?: any; }> updateSubAccountKeys(userId, key, subAccountKey)

Update sub-account API key pair

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.SubAccountApi(client);
const userId = 56; // number | Sub-account user ID
const key = "key_example"; // string | Sub-account API key
const subAccountKey = new SubAccountKey(); // SubAccountKey | 
api.updateSubAccountKeys(userId, key, subAccountKey)
   .then(value => console.log('API called successfully.'),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **number**| Sub-account user ID | [default to undefined]
 **key** | **string**| Sub-account API key | [default to undefined]
 **subAccountKey** | [**SubAccountKey**](SubAccountKey.md)|  | 

### Return type

Promise<{ response: AxiosResponse; body?: any; }> 

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

## deleteSubAccountKeys

> Promise<{ response: http.IncomingMessage; body?: any; }> deleteSubAccountKeys(userId, key)

Delete sub-account API key pair

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.SubAccountApi(client);
const userId = 56; // number | Sub-account user ID
const key = "key_example"; // string | Sub-account API key
api.deleteSubAccountKeys(userId, key)
   .then(value => console.log('API called successfully.'),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **number**| Sub-account user ID | [default to undefined]
 **key** | **string**| Sub-account API key | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body?: any; }> 

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

## lockSubAccount

> Promise<{ response: http.IncomingMessage; body?: any; }> lockSubAccount(userId)

Lock sub-account

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.SubAccountApi(client);
const userId = 56; // number | Sub-account user ID
api.lockSubAccount(userId)
   .then(value => console.log('API called successfully.'),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **number**| Sub-account user ID | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body?: any; }> 

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

## unlockSubAccount

> Promise<{ response: http.IncomingMessage; body?: any; }> unlockSubAccount(userId)

Unlock sub-account

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.SubAccountApi(client);
const userId = 56; // number | Sub-account user ID
api.unlockSubAccount(userId)
   .then(value => console.log('API called successfully.'),
         error => console.error(error));
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **number**| Sub-account user ID | [default to undefined]

### Return type

Promise<{ response: AxiosResponse; body?: any; }> 

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

## listUnifiedMode

> Promise<{ response: http.IncomingMessage; body: Array<SubUserMode>; }> listUnifiedMode()

Get sub-account mode

Unified account mode: - &#x60;classic&#x60;: Classic account mode - &#x60;multi_currency&#x60;: Multi-currency margin mode - &#x60;portfolio&#x60;: Portfolio margin mode

### Example

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret("YOUR_API_KEY", "YOUR_API_SECRET");

const api = new GateApi.SubAccountApi(client);
api.listUnifiedMode()
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

Promise<{ response: AxiosResponse; body: Array<SubUserMode>; }> [SubUserMode](SubUserMode.md)

### Authorization

[apiv4](../README.md#apiv4)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
