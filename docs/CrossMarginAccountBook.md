# CrossMarginAccountBook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Balance change record ID | [optional] [default to undefined]
**time** | **number** | Account changed timestamp in milliseconds | [optional] [default to undefined]
**currency** | **string** | Currency changed | [optional] [default to undefined]
**change** | **string** | Amount changed. Positive value means transferring in, while negative out | [optional] [default to undefined]
**balance** | **string** | Balance after change | [optional] [default to undefined]
**type** | **string** | Account change type, including:  - in: transferals into cross margin account - out: transferals out from cross margin account - repay: loan repayment - borrow: borrowed loan - new_order: new order locked - order_fill: order fills - referral_fee: fee refund from referrals - order_fee: order fee generated from fills - unknown: unknown type | [optional] [default to undefined]

## Enum: CrossMarginAccountBook.Type

* `In` (value: `'in'`)

* `Out` (value: `'out'`)

* `Repay` (value: `'repay'`)

* `Borrow` (value: `'borrow'`)

* `NewOrder` (value: `'new_order'`)

* `OrderFill` (value: `'order_fill'`)

* `ReferralFee` (value: `'referral_fee'`)

* `OrderFee` (value: `'order_fee'`)

* `Unknown` (value: `'unknown'`)


