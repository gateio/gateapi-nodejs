# Transfer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **string** | Transfer currency. For futures account, &#x60;currency&#x60; can be set to &#x60;POINT&#x60; or settle currency | [default to undefined]
**from** | **string** | Account to transfer from | [default to undefined]
**to** | **string** | Account to transfer to | [default to undefined]
**amount** | **string** | Transfer amount | [default to undefined]
**currencyPair** | **string** | Margin currency pair. Required if transfer from or to margin account | [optional] [default to undefined]
**settle** | **string** | Futures settle currency. Required if transferring from or to futures account | [optional] [default to undefined]

## Enum: Transfer.From

* `Spot` (value: `'spot'`)

* `Margin` (value: `'margin'`)

* `Futures` (value: `'futures'`)

* `Delivery` (value: `'delivery'`)

* `CrossMargin` (value: `'cross_margin'`)

* `Options` (value: `'options'`)


## Enum: Transfer.To

* `Spot` (value: `'spot'`)

* `Margin` (value: `'margin'`)

* `Futures` (value: `'futures'`)

* `Delivery` (value: `'delivery'`)

* `CrossMargin` (value: `'cross_margin'`)

* `Options` (value: `'options'`)


