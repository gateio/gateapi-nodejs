# OptionsMyTrade

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Trade ID. | [optional] [default to undefined]
**createTime** | **number** | Trading time. | [optional] [default to undefined]
**contract** | **string** | Options contract name. | [optional] [default to undefined]
**orderId** | **number** | Order ID related. | [optional] [default to undefined]
**size** | **number** | Trading size. | [optional] [default to undefined]
**price** | **string** | Trading price (quote currency). | [optional] [default to undefined]
**underlyingPrice** | **string** | Underlying price (quote currency). | [optional] [default to undefined]
**role** | **string** | Trade role. Available values are &#x60;taker&#x60; and &#x60;maker&#x60;. | [optional] [default to undefined]

## Enum: OptionsMyTrade.Role

* `Taker` (value: `'taker'`)

* `Maker` (value: `'maker'`)


