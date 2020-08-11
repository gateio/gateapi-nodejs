# LoanPatch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **string** | Loan currency | [default to undefined]
**side** | **string** | Loan side. Possible values are &#x60;lend&#x60; and &#x60;borrow&#x60;. For &#x60;LoanRecord&#x60; patching, only &#x60;lend&#x60; is supported | [default to undefined]
**autoRenew** | **boolean** | Auto renew | [default to undefined]
**currencyPair** | **string** | Currency pair. Required for borrowing side | [optional] [default to undefined]
**loanId** | **string** | Loan ID. Required for &#x60;LoanRecord&#x60; patching | [optional] [default to undefined]

## Enum: LoanPatch.Side

* `Lend` (value: `'lend'`)

* `Borrow` (value: `'borrow'`)


