# GateApi.FuturesInitialOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contract** | **string** | Futures contract | [default to undefined]
**size** | **number** | Order size. Positive size means to buy, while negative one means to sell. Set to 0 to close the position | [optional] [default to undefined]
**price** | **string** | Order price. Set to 0 to use market price | [default to undefined]
**close** | **boolean** | Set to true if trying to close the position | [optional] [default to undefined]
**tif** | **string** | Time in force. If using market price, only &#x60;ioc&#x60; is supported.  - gtc: GoodTillCancelled - ioc: ImmediateOrCancelled | [optional] [default to &#39;gtc&#39;]
**text** | **string** | How the order is created. Possible values are: web, api and app | [optional] [default to undefined]
**reduceOnly** | **boolean** | Set to true to create an reduce-only order | [optional] [default to undefined]
**isReduceOnly** | **boolean** | Is the order reduce-only | [optional] [readonly] [default to undefined]
**isClose** | **boolean** | Is the order to close position | [optional] [readonly] [default to undefined]

## Enum: FuturesInitialOrder.Tif

* `Gtc` (value: `'gtc'`)

* `Ioc` (value: `'ioc'`)


