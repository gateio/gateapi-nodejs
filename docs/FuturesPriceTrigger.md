# FuturesPriceTrigger

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**strategyType** | **number** | Trigger Strategy   - 0: Price trigger, triggered when price meets conditions  - 1: Price spread trigger, i.e. the difference between the latest price specified in &#x60;price_type&#x60; and the second-last price Currently only supports 0 (latest transaction price) | [optional] [default to undefined]
**priceType** | **number** | Reference price type. 0 - Latest trade price, 1 - Mark price, 2 - Index price | [optional] [default to undefined]
**price** | **string** | Price value for price trigger, or spread value for spread trigger | [optional] [default to undefined]
**rule** | **number** | Price Condition Type  - 1: Trigger when the price calculated based on &#x60;strategy_type&#x60; and &#x60;price_type&#x60; is greater than or equal to &#x60;Trigger.Price&#x60;, while Trigger.Price must &gt; last_price - 2: Trigger when the price calculated based on &#x60;strategy_type&#x60; and &#x60;price_type&#x60; is less than or equal to &#x60;Trigger.Price&#x60;, and Trigger.Price must &lt; last_price | [optional] [default to undefined]
**expiration** | **number** | Maximum wait time for trigger condition (in seconds). Order will be cancelled if timeout | [optional] [default to undefined]

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


