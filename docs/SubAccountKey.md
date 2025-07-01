# SubAccountKey

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **number** | User ID | [optional] [readonly] [default to undefined]
**mode** | **number** | Mode: 1 - classic 2 - portfolio account | [optional] [default to undefined]
**name** | **string** | API key name | [optional] [default to undefined]
**perms** | [**Array&lt;SubAccountKeyPerms&gt;**](SubAccountKeyPerms.md) |  | [optional] [default to undefined]
**ipWhitelist** | **Array&lt;string&gt;** | ip white list (list will be removed if no value is passed) | [optional] [default to undefined]
**key** | **string** | API Key | [optional] [readonly] [default to undefined]
**state** | **number** | State 1 - normal 2 - locked 3 - frozen | [optional] [readonly] [default to undefined]
**createdAt** | **number** | Creation time | [optional] [readonly] [default to undefined]
**updatedAt** | **number** | Last update time | [optional] [readonly] [default to undefined]
**lastAccess** | **number** | Last access time | [optional] [readonly] [default to undefined]

