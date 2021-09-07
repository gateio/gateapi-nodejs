# SpotPriceTrigger

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**price** | **string** | Trigger price | [default to undefined]
**rule** | **string** | Price trigger condition  - &gt;&#x3D;: triggered when market price larger than or equal to &#x60;price&#x60; field - &lt;&#x3D;: triggered when market price less than or equal to &#x60;price&#x60; field  | [default to undefined]
**expiration** | **number** | How long (in seconds) to wait for the condition to be triggered before cancelling the order. | [default to undefined]

## Enum: SpotPriceTrigger.Rule

* `GreaterThanOrEqualTo` (value: `'>='`)

* `LessThanOrEqualTo` (value: `'<='`)


