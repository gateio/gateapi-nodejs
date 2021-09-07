# FuturesPriceTrigger

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**strategyType** | **number** | How the order will be triggered   - &#x60;0&#x60;: by price, which means the order will be triggered if price condition is satisfied  - &#x60;1&#x60;: by price gap, which means the order will be triggered if gap of recent two prices of specified &#x60;price_type&#x60; are satisfied.  Only &#x60;0&#x60; is supported currently | [optional] [default to undefined]
**priceType** | **number** | Price type. 0 - latest deal price, 1 - mark price, 2 - index price | [optional] [default to undefined]
**price** | **string** | Value of price on price triggered, or price gap on price gap triggered | [optional] [default to undefined]
**rule** | **number** | Trigger condition type  - &#x60;1&#x60;: calculated price based on &#x60;strategy_type&#x60; and &#x60;price_type&#x60; &gt;&#x3D; &#x60;price&#x60; - &#x60;2&#x60;: calculated price based on &#x60;strategy_type&#x60; and &#x60;price_type&#x60; &lt;&#x3D; &#x60;price&#x60; | [optional] [default to undefined]
**expiration** | **number** | How long (in seconds) to wait for the condition to be triggered before cancelling the order. | [optional] [default to undefined]

## Enum: FuturesPriceTrigger.StrategyType

* `NUMBER_0` (value: `0`)

* `NUMBER_1` (value: `1`)


## Enum: FuturesPriceTrigger.PriceType

* `NUMBER_0` (value: `0`)

* `NUMBER_1` (value: `1`)

* `NUMBER_2` (value: `2`)


## Enum: FuturesPriceTrigger.Rule

* `NUMBER_1` (value: `1`)

* `NUMBER_2` (value: `2`)


