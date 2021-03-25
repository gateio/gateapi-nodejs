# SpotPriceTrigger

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**price** | **string** | Trigger price | [default to undefined]
**rule** | **string** | Price trigger condition  - &gt;&#x3D;: triggered when market price larger than or equal to &#x60;price&#x60; field - &lt;&#x3D;: triggered when market price less than or equal to &#x60;price&#x60; field  | [default to undefined]
**expiration** | **number** | How many seconds will the order wait for the condition being triggered. Order will be cancelled on timed out | [default to undefined]

## Enum: SpotPriceTrigger.Rule

* `GreaterThanOrEqualTo` (value: `'>='`)

* `LessThanOrEqualTo` (value: `'<='`)


