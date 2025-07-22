# CreateUniLoan

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **string** | Currency. | [default to undefined]
**type** | **string** | type: borrow - borrow, repay - repay. | [default to undefined]
**amount** | **string** | The amount of lending or repaying. | [default to undefined]
**repaidAll** | **boolean** | Full repayment. Repay operation only. If the value is &#x60;true&#x60;, the amount will be ignored and repaid in full. | [optional] [default to undefined]
**currencyPair** | **string** | Currency pair. | [default to undefined]

## Enum: CreateUniLoan.Type

* `Borrow` (value: `'borrow'`)

* `Repay` (value: `'repay'`)


