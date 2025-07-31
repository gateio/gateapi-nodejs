# SubAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**remark** | **string** | Remark | [optional] [default to undefined]
**loginName** | **string** | 子账户登陆名：仅支持字母、数字、下划线，不可包含其他非法字符。 | [default to undefined]
**password** | **string** | The sub-account\&#39;s password. (Default: the same as main account\&#39;s password) | [optional] [default to undefined]
**email** | **string** | The sub-account\&#39;s email address. (Default: the same as main account\&#39;s email address) | [optional] [default to undefined]
**state** | **number** | Sub-account status: 1-normal, 2-locked | [optional] [readonly] [default to undefined]
**type** | **number** | Sub-account type: 1-Regular sub-account, 3-Cross margin sub-account | [optional] [readonly] [default to undefined]
**userId** | **number** | Sub-account user ID | [optional] [readonly] [default to undefined]
**createTime** | **number** | Created time | [optional] [readonly] [default to undefined]

