# CreateUniLoan

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **string** | Currency | [default to undefined]
**type** | **string** | Type: &#x60;borrow&#x60; - borrow, &#x60;repay&#x60; - repay | [default to undefined]
**amount** | **string** | Borrow or repayment amount | [default to undefined]
**repaidAll** | **boolean** | Full repayment. For repayment operations only. When &#x60;true&#x60;, overrides &#x60;amount&#x60; and repays the full amount | [optional] [default to undefined]
**currencyPair** | **string** | Currency pair | [default to undefined]

## Enum: CreateUniLoan.Type

* `Borrow` (value: `'borrow'`)

* `Repay` (value: `'repay'`)


