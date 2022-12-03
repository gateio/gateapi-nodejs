# SubAccountKey

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **string** | User ID | [optional] [readonly] [default to undefined]
**name** | **string** | API key name | [optional] [default to undefined]
**perms** | [**Array&lt;ApiV4KeyPerm&gt;**](ApiV4KeyPerm.md) |  | [optional] [default to undefined]
**ipWhitelist** | **Array&lt;string&gt;** | ip white list (list will be removed if no value is passed) | [optional] [default to undefined]
**key** | **string** | API Key | [optional] [readonly] [default to undefined]
**state** | **number** | State 1 - normal 2 - locked 3 - frozen | [optional] [readonly] [default to undefined]
**createdAt** | **string** | Creation time | [optional] [readonly] [default to undefined]
**updatedAt** | **string** | Last update time | [optional] [readonly] [default to undefined]

