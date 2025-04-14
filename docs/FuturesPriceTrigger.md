# FuturesPriceTrigger

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**strategyType** | **number** | Trigger Policy   - 0: Price trigger, that is, when the price meets the conditions  - 1: Price spread trigger, i.e. the last price specified in &#x60;price_type&#x60; minus the second-last price difference At present, only 0 is the latest transaction price | [optional] [default to undefined]
**priceType** | **number** | Price type. 0 - latest deal price, 1 - mark price, 2 - index price | [optional] [default to undefined]
**price** | **string** | Value of price on price triggered, or price gap on price gap triggered | [optional] [default to undefined]
**rule** | **number** | Price Condition Type  - 1: Indicates that the price calculated based on &#x60;strategy_type&#x60; and &#x60;price_type&#x60; is greater than or equal to &#x60;Trigger.Price&#x60; Trigger, while Trigger.Price must &gt; last_price - 2: Indicates that the price calculated based on &#x60;strategy_type&#x60; and &#x60;price_type&#x60; is less than or equal to &#x60;Trigger.Price&#x60; Trigger, and Trigger.Price must &lt; last_price | [optional] [default to undefined]
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


