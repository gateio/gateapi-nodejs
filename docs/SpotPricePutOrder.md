# SpotPricePutOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Order type，default to &#x60;limit&#x60;  - limit : Limit Order - market : Market Order | [optional] [default to &#39;limit&#39;]
**side** | **string** | Order side  - buy: buy side - sell: sell side | [default to undefined]
**price** | **string** | Order price | [default to undefined]
**amount** | **string** | When &#x60;type&#x60; is limit, it refers to base currency.  For instance, &#x60;BTC_USDT&#x60; means &#x60;BTC&#x60;  When &#x60;type&#x60; is &#x60;market&#x60;, it refers to different currency according to &#x60;side&#x60;  - &#x60;side&#x60; : &#x60;buy&#x60; means quote currency, &#x60;BTC_USDT&#x60; means &#x60;USDT&#x60; - &#x60;side&#x60; : &#x60;sell&#x60; means base currency，&#x60;BTC_USDT&#x60; means &#x60;BTC&#x60;  | [default to undefined]
**account** | **string** | Trading account type.  Portfolio margin account must set to &#x60;cross_margin&#x60;  - normal: spot trading - margin: margin trading - cross_margin: cross_margin trading  | [default to &#39;normal&#39;]
**timeInForce** | **string** | time_in_force  - gtc: GoodTillCancelled - ioc: ImmediateOrCancelled, taker only  | [optional] [default to &#39;gtc&#39;]

## Enum: SpotPricePutOrder.Type

* `Limit` (value: `'limit'`)

* `Market` (value: `'market'`)


## Enum: SpotPricePutOrder.Side

* `Buy` (value: `'buy'`)

* `Sell` (value: `'sell'`)


## Enum: SpotPricePutOrder.Account

* `Normal` (value: `'normal'`)

* `Margin` (value: `'margin'`)

* `CrossMargin` (value: `'cross_margin'`)


## Enum: SpotPricePutOrder.TimeInForce

* `Gtc` (value: `'gtc'`)

* `Ioc` (value: `'ioc'`)


