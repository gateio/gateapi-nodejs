# Loan

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Loan ID | [optional] [readonly] [default to undefined]
**createTime** | **string** | Creation time | [optional] [readonly] [default to undefined]
**expireTime** | **string** | Repay time of the loan. No value will be returned for lending loan | [optional] [readonly] [default to undefined]
**status** | **string** | Loan status  open - not fully loaned loaned - all loaned out for lending loan; loaned in for borrowing side finished - loan is finished, either being all repaid or cancelled by the lender auto_repaid - automatically repaid by the system | [optional] [readonly] [default to undefined]
**side** | **string** | Loan side | [default to undefined]
**currency** | **string** | Loan currency | [default to undefined]
**rate** | **string** | Loan rate. Only rates in [0.0002, 0.002] are supported.  Not required in lending. Market rate calculated from recent rates will be used if not set | [optional] [default to undefined]
**amount** | **string** | Loan amount | [default to undefined]
**days** | **number** | Loan days. Only 10 is supported for now | [optional] [default to undefined]
**autoRenew** | **boolean** | Whether to auto renew the loan upon expiration | [optional] [default to undefined]
**currencyPair** | **string** | Currency pair. Required if borrowing | [optional] [default to undefined]
**left** | **string** | Amount not lent out yet | [optional] [readonly] [default to undefined]
**repaid** | **string** | Repaid amount | [optional] [readonly] [default to undefined]
**paidInterest** | **string** | Repaid interest | [optional] [readonly] [default to undefined]
**unpaidInterest** | **string** | Outstanding interest yet to be paid | [optional] [readonly] [default to undefined]
**feeRate** | **string** | Loan fee rate | [optional] [default to undefined]
**origId** | **string** | Original loan ID of the loan if auto-renewed, otherwise equals to id | [optional] [default to undefined]
**text** | **string** | User defined custom ID | [optional] [default to undefined]

## Enum: Loan.Status

* `Open` (value: `'open'`)

* `Loaned` (value: `'loaned'`)

* `Finished` (value: `'finished'`)

* `AutoRepaid` (value: `'auto_repaid'`)


## Enum: Loan.Side

* `Lend` (value: `'lend'`)

* `Borrow` (value: `'borrow'`)


