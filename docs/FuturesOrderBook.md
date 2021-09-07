# FuturesOrderBook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Order Book ID. Increases by 1 on every order book change. Set &#x60;with_id&#x3D;true&#x60; to include this field in response | [optional] [default to undefined]
**current** | **number** | Response data generation timestamp | [optional] [default to undefined]
**update** | **number** | Order book changed timestamp | [optional] [default to undefined]
**asks** | [**Array&lt;FuturesOrderBookItem&gt;**](FuturesOrderBookItem.md) | Asks order depth | [default to undefined]
**bids** | [**Array&lt;FuturesOrderBookItem&gt;**](FuturesOrderBookItem.md) | Bids order depth | [default to undefined]

