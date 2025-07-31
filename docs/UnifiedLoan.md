# UnifiedLoan

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **string** | Currency | [default to undefined]
**type** | **string** | Type: &#x60;borrow&#x60; - borrow, &#x60;repay&#x60; - repay | [default to undefined]
**amount** | **string** | Borrow or repayment amount | [default to undefined]
**repaidAll** | **boolean** | Full repayment, only used for repayment operations. When set to &#x60;true&#x60;, overrides &#x60;amount&#x60; and directly repays the full amount | [optional] [default to undefined]
**text** | **string** | User defined custom ID | [optional] [default to undefined]

## Enum: UnifiedLoan.Type

* `Borrow` (value: `'borrow'`)

* `Repay` (value: `'repay'`)


