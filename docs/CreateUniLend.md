# CreateUniLend

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **string** | Currency name. | [default to undefined]
**amount** | **string** | The amount of currency could be lent. | [default to undefined]
**type** | **string** | type: lend - lend, redeem - redeem. | [default to undefined]
**minRate** | **string** | The minimum interest rate. If the value is too high, it might lead to the unsuccessful lending and no profit will be gained for that hour.  | [optional] [default to undefined]

## Enum: CreateUniLend.Type

* `Lend` (value: `'lend'`)

* `Redeem` (value: `'redeem'`)


