# FuturesOrderBook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Order Book ID. Increase by 1 on every order book change. Set &#x60;with_id&#x3D;true&#x60; to include this field in response | [optional] [default to undefined]
**asks** | [**Array&lt;FuturesOrderBookItem&gt;**](FuturesOrderBookItem.md) | Asks order depth | [default to undefined]
**bids** | [**Array&lt;FuturesOrderBookItem&gt;**](FuturesOrderBookItem.md) | Bids order depth | [default to undefined]

