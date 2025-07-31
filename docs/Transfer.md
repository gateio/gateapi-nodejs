# Transfer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **string** | Transfer currency name. For contract accounts, &#x60;currency&#x60; can be set to &#x60;POINT&#x60; (points) or supported settlement currencies (e.g., &#x60;BTC&#x60;, &#x60;USDT&#x60;) | [default to undefined]
**from** | **string** | Account to transfer from | [default to undefined]
**to** | **string** | Account to transfer to | [default to undefined]
**amount** | **string** | Transfer amount | [default to undefined]
**currencyPair** | **string** | Margin trading pair. Required when transferring to or from margin account | [optional] [default to undefined]
**settle** | **string** | Contract settlement currency. Required when transferring to or from contract account | [optional] [default to undefined]

## Enum: Transfer.From

* `Spot` (value: `'spot'`)

* `Margin` (value: `'margin'`)

* `Futures` (value: `'futures'`)

* `Delivery` (value: `'delivery'`)

* `Options` (value: `'options'`)


## Enum: Transfer.To

* `Spot` (value: `'spot'`)

* `Margin` (value: `'margin'`)

* `Futures` (value: `'futures'`)

* `Delivery` (value: `'delivery'`)

* `Options` (value: `'options'`)


