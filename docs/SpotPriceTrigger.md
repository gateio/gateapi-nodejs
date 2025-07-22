# SpotPriceTrigger

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**price** | **string** | Trigger price. | [default to undefined]
**rule** | **string** | Price trigger condition  - &#x60;&gt;&#x3D;&#x60;: triggered when market price larger than or equal to &#x60;price&#x60; field - &#x60;&lt;&#x3D;&#x60;: or equal to &#x60;price&#x60; field  | [default to undefined]
**expiration** | **number** | How long (in seconds) to wait for the condition to be triggered before cancelling the order. | [default to undefined]

## Enum: SpotPriceTrigger.Rule

* `GreaterThanOrEqualTo` (value: `'>='`)

* `LessThanOrEqualTo` (value: `'<='`)


