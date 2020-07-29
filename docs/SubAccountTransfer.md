# GateApi.SubAccountTransfer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **string** | Transfer currency name | [default to undefined]
**subAccount** | **string** | Sub account user ID | [default to undefined]
**direction** | **string** | Transfer direction. to - transfer into sub account; from - transfer out from sub account | [default to undefined]
**amount** | **string** | Transfer amount | [default to undefined]
**uid** | **string** | Main account user ID | [optional] [readonly] [default to undefined]
**timest** | **string** | Transfer timestamp | [optional] [readonly] [default to undefined]
**source** | **string** | Where the operation is initiated from | [optional] [readonly] [default to undefined]

## Enum: SubAccountTransfer.Direction

* `To` (value: `'to'`)

* `From` (value: `'from'`)


