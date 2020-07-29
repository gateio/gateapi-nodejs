# GateApi.CurrencyPair

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Currency pair | [optional] [default to undefined]
**base** | **string** | Base currency | [optional] [default to undefined]
**quote** | **string** | Quote currency | [optional] [default to undefined]
**fee** | **string** | Trading fee | [optional] [default to undefined]
**minBaseAmount** | **string** | Minimum amount of base currency to trade, &#x60;null&#x60; means no limit | [optional] [default to undefined]
**minQuoteAmount** | **string** | Minimum amount of quote currency to trade, &#x60;null&#x60; means no limit | [optional] [default to undefined]
**amountPrecision** | **number** | Amount scale | [optional] [default to undefined]
**precision** | **number** | Price scale | [optional] [default to undefined]
**tradeStatus** | **string** | How currency pair can be traded  - untradable: cannot be bought or sold - buyable: can be bought - sellable: can be sold - tradable: can be bought or sold | [optional] [default to undefined]

## Enum: CurrencyPair.TradeStatus

* `Untradable` (value: `'untradable'`)

* `Buyable` (value: `'buyable'`)

* `Sellable` (value: `'sellable'`)

* `Tradable` (value: `'tradable'`)


