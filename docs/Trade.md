# Trade

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Fill ID | [optional] [default to undefined]
**createTime** | **string** | Fill Time | [optional] [default to undefined]
**createTimeMs** | **string** | Trading time, with millisecond precision | [optional] [default to undefined]
**currencyPair** | **string** | Currency pair | [optional] [default to undefined]
**side** | **string** | Buy or sell order | [optional] [default to undefined]
**role** | **string** | Trade role, not returned in public endpoints | [optional] [default to undefined]
**amount** | **string** | Trade amount | [optional] [default to undefined]
**price** | **string** | Order price | [optional] [default to undefined]
**orderId** | **string** | Related order ID, not returned in public endpoints | [optional] [default to undefined]
**fee** | **string** | Fee deducted, not returned in public endpoints | [optional] [default to undefined]
**feeCurrency** | **string** | Fee currency unit, not returned in public endpoints | [optional] [default to undefined]
**pointFee** | **string** | Points used to deduct fee, not returned in public endpoints | [optional] [default to undefined]
**gtFee** | **string** | GT used to deduct fee, not returned in public endpoints | [optional] [default to undefined]
**amendText** | **string** | The custom data that the user remarked when amending the order | [optional] [default to undefined]
**sequenceId** | **string** | Consecutive trade ID within a single market. Used to track and identify trades in the specific market | [optional] [default to undefined]
**text** | **string** | User-defined information, not returned in public endpoints | [optional] [default to undefined]

## Enum: Trade.Side

* `Buy` (value: `'buy'`)

* `Sell` (value: `'sell'`)


## Enum: Trade.Role

* `Taker` (value: `'taker'`)

* `Maker` (value: `'maker'`)


