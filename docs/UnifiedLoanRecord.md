# UnifiedLoanRecord

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | ID | [optional] [readonly] [default to undefined]
**type** | **string** | Type: &#x60;borrow&#x60; - borrow, &#x60;repay&#x60; - repay | [optional] [readonly] [default to undefined]
**repaymentType** | **string** | Repayment type: none - No repayment type, manual_repay - Manual repayment, auto_repay - Automatic repayment, cancel_auto_repay - Automatic repayment after order cancellation, different_currencies_repayment - Cross-currency repayment | [optional] [readonly] [default to undefined]
**borrowType** | **string** | Borrowing type, returned when querying loan records: manual_borrow - Manual borrowing, auto_borrow - Automatic borrowing | [optional] [default to undefined]
**currencyPair** | **string** | Currency pair | [optional] [readonly] [default to undefined]
**currency** | **string** | Currency | [optional] [readonly] [default to undefined]
**amount** | **string** | Borrow or repayment amount | [optional] [readonly] [default to undefined]
**createTime** | **number** | Created time | [optional] [readonly] [default to undefined]

