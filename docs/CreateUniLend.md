# CreateUniLend

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **string** | Currency name | [default to undefined]
**amount** | **string** | Amount to deposit into lending pool | [default to undefined]
**type** | **string** | Operation type: lend - Lend, redeem - Redeem | [default to undefined]
**minRate** | **string** | Minimum interest rate. If set too high, lending may fail and no interest will be earned. Required for lending operations.  | [optional] [default to undefined]

## Enum: CreateUniLend.Type

* `Lend` (value: `'lend'`)

* `Redeem` (value: `'redeem'`)


