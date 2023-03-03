# FuturesAutoDeleverage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**time** | **number** | Automatic deleveraging time | [optional] [readonly] [default to undefined]
**user** | **number** | User ID | [optional] [readonly] [default to undefined]
**orderId** | **number** | Order ID. Order IDs before 2023-02-20 are null | [optional] [readonly] [default to undefined]
**contract** | **string** | Futures contract | [optional] [readonly] [default to undefined]
**leverage** | **string** | Position leverage | [optional] [readonly] [default to undefined]
**crossLeverageLimit** | **string** | Cross margin leverage(valid only when &#x60;leverage&#x60; is 0) | [optional] [readonly] [default to undefined]
**entryPrice** | **string** | Average entry price | [optional] [readonly] [default to undefined]
**fillPrice** | **string** | Average fill price | [optional] [readonly] [default to undefined]
**tradeSize** | **number** | Trading size | [optional] [readonly] [default to undefined]
**positionSize** | **number** | Positions after auto-deleveraging | [optional] [readonly] [default to undefined]

