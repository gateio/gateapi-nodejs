# SpotPricePutOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Order type，default to &#x60;limit&#x60;  - limit : Limit Order - market : Market Order | [optional] [default to &#39;limit&#39;]
**side** | **string** | Order side  - buy: buy side - sell: sell side | [default to undefined]
**price** | **string** | Order price | [default to undefined]
**amount** | **string** | Trading quantity When &#x60;type&#x60; is &#x60;limit&#x60;, it refers to the base currency (the currency being traded), such as &#x60;BTC&#x60; in &#x60;BTC_USDT&#x60; When &#x60;type&#x60; is &#x60;market&#x60;, it refers to different currencies based on the side: - &#x60;side&#x60;: &#x60;buy&#x60; refers to quote currency, &#x60;BTC_USDT&#x60; means &#x60;USDT&#x60; - &#x60;side&#x60;: &#x60;sell&#x60; refers to base currency, &#x60;BTC_USDT&#x60; means &#x60;BTC&#x60; | [default to undefined]
**account** | **string** | Trading account type. Unified account must be set to &#x60;unified&#x60;  - normal: spot trading - margin: margin trading - unified: unified account  | [default to &#39;normal&#39;]
**timeInForce** | **string** | time_in_force  - gtc: GoodTillCancelled - ioc: ImmediateOrCancelled, taker only  | [optional] [default to &#39;gtc&#39;]
**autoBorrow** | **boolean** | Whether to borrow coins automatically | [optional] [default to undefined]
**autoRepay** | **boolean** | Whether to repay the loan automatically | [optional] [default to undefined]
**text** | **string** | The source of the order, including: - web: Web - api: API call - app: Mobile app | [optional] [default to undefined]

## Enum: SpotPricePutOrder.Type

* `Limit` (value: `'limit'`)

* `Market` (value: `'market'`)


## Enum: SpotPricePutOrder.Side

* `Buy` (value: `'buy'`)

* `Sell` (value: `'sell'`)


## Enum: SpotPricePutOrder.Account

* `Normal` (value: `'normal'`)

* `Margin` (value: `'margin'`)

* `Unified` (value: `'unified'`)


## Enum: SpotPricePutOrder.TimeInForce

* `Gtc` (value: `'gtc'`)

* `Ioc` (value: `'ioc'`)


