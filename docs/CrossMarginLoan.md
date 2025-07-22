# CrossMarginLoan

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Loan record ID. | [optional] [readonly] [default to undefined]
**createTime** | **number** | Creation timestamp, in milliseconds. | [optional] [readonly] [default to undefined]
**updateTime** | **number** | Update timestamp, in milliseconds. | [optional] [readonly] [default to undefined]
**currency** | **string** | Currency name. | [default to undefined]
**amount** | **string** | Borrowed amount. | [default to undefined]
**text** | **string** | User defined custom ID. | [optional] [default to undefined]
**status** | **number** | Deprecated. Currently, all statuses have been set to 2.  Borrow loan status, which includes:  - 1: failed to borrow - 2: borrowed but not repaid - 3: repayment complete | [optional] [readonly] [default to undefined]
**repaid** | **string** | Repaid amount. | [optional] [readonly] [default to undefined]
**repaidInterest** | **string** | Repaid interest. | [optional] [readonly] [default to undefined]
**unpaidInterest** | **string** | Outstanding interest yet to be paid. | [optional] [readonly] [default to undefined]

## Enum: CrossMarginLoan.Status

* `NUMBER_1` (value: `1`)

* `NUMBER_2` (value: `2`)

* `NUMBER_3` (value: `3`)


