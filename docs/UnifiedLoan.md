# UnifiedLoan

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **string** | Currency. | [default to undefined]
**type** | **string** | type: borrow - borrow, repay - repay. | [default to undefined]
**amount** | **string** | The amount of lending or repaying. | [default to undefined]
**repaidAll** | **boolean** | Full repayment is solely for repayment operations. When set to \&#39;true,\&#39; it overrides the \&#39;amount,\&#39; allowing for direct full repayment. | [optional] [default to undefined]
**text** | **string** | User defined custom ID. | [optional] [default to undefined]

## Enum: UnifiedLoan.Type

* `Borrow` (value: `'borrow'`)

* `Repay` (value: `'repay'`)


