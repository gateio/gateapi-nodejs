# FuturesInitialOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contract** | **string** | Futures contract. | [default to undefined]
**size** | **number** | Represents the number of contracts that need to be closed, full closing: size&#x3D;0 Partial closing: plan-close-short-position size&gt;0  Partial closing: plan-close-long-position size&lt;0 | [optional] [default to undefined]
**price** | **string** | Order price. Set to 0 to use market price. | [default to undefined]
**close** | **boolean** | When all positions are closed in a single position mode, it must be set to true to perform the closing operation When partially closed positions in single-store mode/double-store mode, you can not set close, or close&#x3D;false | [optional] [default to undefined]
**tif** | **string** | Time in force strategy, default is gtc, market order currently only supports ioc mode mode  - gtc: GoodTillCancelled - ioc: ImmediateOrCancelled | [optional] [default to &#39;gtc&#39;]
**text** | **string** | The source of the order, including: - web: web - api: api - app: app | [optional] [default to undefined]
**reduceOnly** | **boolean** | When set to true, perform automatic position reduction operation. Set to true to ensure that the order will not open a new position, and is only used to close or reduce positions | [optional] [default to undefined]
**autoSize** | **string** | Do not set auto_size When the dual-position mode is closed all positions (size&#x3D;0), auto_size, close_long, close_short, short When the double-storey mode partially closes the position (size ≠ 0), there is no need to set auto_size | [optional] [default to undefined]
**isReduceOnly** | **boolean** | Is the order reduce-only. | [optional] [readonly] [default to undefined]
**isClose** | **boolean** | Is the order to close position. | [optional] [readonly] [default to undefined]

## Enum: FuturesInitialOrder.Tif

* `Gtc` (value: `'gtc'`)

* `Ioc` (value: `'ioc'`)


