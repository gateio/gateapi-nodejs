# CurrencyPair

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Currency pair | [optional] [default to undefined]
**base** | **string** | Base currency | [optional] [default to undefined]
**baseName** | **string** | Base currency name | [optional] [default to undefined]
**quote** | **string** | Quote currency | [optional] [default to undefined]
**quoteName** | **string** | Quote currency name | [optional] [default to undefined]
**fee** | **string** | Trading fee rate | [optional] [default to undefined]
**minBaseAmount** | **string** | Minimum amount of base currency to trade, &#x60;null&#x60; means no limit | [optional] [default to undefined]
**minQuoteAmount** | **string** | Minimum amount of quote currency to trade, &#x60;null&#x60; means no limit | [optional] [default to undefined]
**maxBaseAmount** | **string** | Maximum amount of base currency to trade, &#x60;null&#x60; means no limit | [optional] [default to undefined]
**maxQuoteAmount** | **string** | Maximum amount of quote currency to trade, &#x60;null&#x60; means no limit | [optional] [default to undefined]
**amountPrecision** | **number** | Amount scale | [optional] [default to undefined]
**precision** | **number** | Price scale | [optional] [default to undefined]
**tradeStatus** | **string** | Trading status  - untradable: cannot be traded - buyable: can be bought - sellable: can be sold - tradable: can be bought and sold | [optional] [default to undefined]
**sellStart** | **number** | Sell start unix timestamp in seconds | [optional] [default to undefined]
**buyStart** | **number** | Buy start unix timestamp in seconds | [optional] [default to undefined]
**delistingTime** | **number** | Expected time to remove the shelves, Unix timestamp in seconds | [optional] [default to undefined]
**type** | **string** | Trading pair type, normal: normal, premarket: pre-market | [optional] [default to undefined]
**tradeUrl** | **string** | Transaction link | [optional] [default to undefined]
**stTag** | **boolean** | Whether the trading pair is in ST risk assessment, false - No, true - Yes | [optional] [default to undefined]

## Enum: CurrencyPair.TradeStatus

* `Untradable` (value: `'untradable'`)

* `Buyable` (value: `'buyable'`)

* `Sellable` (value: `'sellable'`)

* `Tradable` (value: `'tradable'`)


