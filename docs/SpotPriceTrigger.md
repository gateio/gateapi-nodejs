# SpotPriceTrigger

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**price** | **string** | Trigger price | [default to undefined]
**rule** | **string** | Price trigger condition  - &#x60;&gt;&#x3D;&#x60;: triggered when market price is greater than or equal to &#x60;price&#x60; - &#x60;&lt;&#x3D;&#x60;: triggered when market price is less than or equal to &#x60;price&#x60;  | [default to undefined]
**expiration** | **number** | Maximum wait time for trigger condition (in seconds). Order will be cancelled if timeout | [default to undefined]

## Enum: SpotPriceTrigger.Rule

* `GreaterThanOrEqualTo` (value: `'>='`)

* `LessThanOrEqualTo` (value: `'<='`)


