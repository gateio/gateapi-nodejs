# SpotPricePutOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Order type, default to &#x60;limit&#x60; | [optional] [default to &#39;limit&#39;]
**side** | **string** | Order side  - buy: buy side - sell: sell side | [default to undefined]
**price** | **string** | Order price | [default to undefined]
**amount** | **string** | Order amount | [default to undefined]
**account** | **string** | Trading type  - normal: spot trading - margin: margin trading | [default to &#39;normal&#39;]
**timeInForce** | **string** | time_in_force  - gtc: GoodTillCancelled - ioc: ImmediateOrCancelled, taker only  | [optional] [default to &#39;gtc&#39;]

## Enum: SpotPricePutOrder.Side

* `Buy` (value: `'buy'`)

* `Sell` (value: `'sell'`)


## Enum: SpotPricePutOrder.Account

* `Normal` (value: `'normal'`)

* `Margin` (value: `'margin'`)


## Enum: SpotPricePutOrder.TimeInForce

* `Gtc` (value: `'gtc'`)

* `Ioc` (value: `'ioc'`)


