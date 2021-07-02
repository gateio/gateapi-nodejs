# Trade

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Trade ID | [optional] [default to undefined]
**createTime** | **string** | Trading time | [optional] [default to undefined]
**createTimeMs** | **string** | Trading time, with millisecond precision | [optional] [default to undefined]
**currencyPair** | **string** | Currency pair | [optional] [default to undefined]
**side** | **string** | Order side | [optional] [default to undefined]
**role** | **string** | Trade role | [optional] [default to undefined]
**amount** | **string** | Trade amount | [optional] [default to undefined]
**price** | **string** | Order price | [optional] [default to undefined]
**orderId** | **string** | Related order ID. No value in public endpoints | [optional] [default to undefined]
**fee** | **string** | Fee deducted. No value in public endpoints | [optional] [default to undefined]
**feeCurrency** | **string** | Fee currency unit. No value in public endpoints | [optional] [default to undefined]
**pointFee** | **string** | Point used to deduct fee | [optional] [default to undefined]
**gtFee** | **string** | GT used to deduct fee | [optional] [default to undefined]

## Enum: Trade.Side

* `Buy` (value: `'buy'`)

* `Sell` (value: `'sell'`)


## Enum: Trade.Role

* `Taker` (value: `'taker'`)

* `Maker` (value: `'maker'`)


