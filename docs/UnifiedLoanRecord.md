# UnifiedLoanRecord

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | id | [optional] [readonly] [default to undefined]
**type** | **string** | type: borrow - borrow, repay - repay | [optional] [readonly] [default to undefined]
**repaymentType** | **string** | Repayment type: none - no repayment type, manual_repay - manual repayment, auto_repay - automatic repayment, cancel_auto_repay - automatic repayment after cancellation | [optional] [readonly] [default to undefined]
**borrowType** | **string** | 借款类型, 查询借款记录时返回，manual_borrow - 手动还款 , auto_borrow - 自动还款 | [optional] [default to undefined]
**currencyPair** | **string** | Currency pair | [optional] [readonly] [default to undefined]
**currency** | **string** | Currency | [optional] [readonly] [default to undefined]
**amount** | **string** | The amount of lending or repaying | [optional] [readonly] [default to undefined]
**createTime** | **number** | Created time | [optional] [readonly] [default to undefined]

