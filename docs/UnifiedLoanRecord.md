# UnifiedLoanRecord

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | id | [optional] [readonly] [default to undefined]
**type** | **string** | type: borrow - borrow, repay - repay | [optional] [readonly] [default to undefined]
**repaymentType** | **string** | Repayment type, none - No repayment type, manual_repay - Manual repayment, auto_repay - Automatic repayment, cancel_auto_repay - Automatic repayment after withdrawal, different_currencies_repayment - Different currency repayment | [optional] [readonly] [default to undefined]
**borrowType** | **string** | Loan type, returned when querying loan records. manual_borrow - Manual repayment , auto_borrow - Automatic repayment | [optional] [default to undefined]
**currencyPair** | **string** | Currency pair | [optional] [readonly] [default to undefined]
**currency** | **string** | Currency | [optional] [readonly] [default to undefined]
**amount** | **string** | The amount of lending or repaying | [optional] [readonly] [default to undefined]
**createTime** | **number** | Created time | [optional] [readonly] [default to undefined]

