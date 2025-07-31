# OptionsMyTrade

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Fill ID | [optional] [default to undefined]
**createTime** | **number** | Fill Time | [optional] [default to undefined]
**contract** | **string** | Options contract name | [optional] [default to undefined]
**orderId** | **number** | Related order ID | [optional] [default to undefined]
**size** | **number** | Trading size | [optional] [default to undefined]
**price** | **string** | Trade price (quote currency) | [optional] [default to undefined]
**underlyingPrice** | **string** | Underlying price (quote currency) | [optional] [default to undefined]
**role** | **string** | Trade role. taker - taker, maker - maker | [optional] [default to undefined]

## Enum: OptionsMyTrade.Role

* `Taker` (value: `'taker'`)

* `Maker` (value: `'maker'`)


