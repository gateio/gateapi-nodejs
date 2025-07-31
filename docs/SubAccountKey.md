# SubAccountKey

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **number** | User ID | [optional] [readonly] [default to undefined]
**mode** | **number** | Mode: 1 - classic 2 - portfolio account | [optional] [default to undefined]
**name** | **string** | API Key Name | [optional] [default to undefined]
**perms** | [**Array&lt;SubAccountKeyPerms&gt;**](SubAccountKeyPerms.md) |  | [optional] [default to undefined]
**ipWhitelist** | **Array&lt;string&gt;** | IP whitelist (list will be cleared if no value is passed) | [optional] [default to undefined]
**key** | **string** | API Key | [optional] [readonly] [default to undefined]
**state** | **number** | Status: 1-Normal 2-Frozen 3-Locked | [optional] [readonly] [default to undefined]
**createdAt** | **number** | Created time | [optional] [readonly] [default to undefined]
**updatedAt** | **number** | Last Update Time | [optional] [readonly] [default to undefined]
**lastAccess** | **number** | Last Access Time | [optional] [readonly] [default to undefined]

