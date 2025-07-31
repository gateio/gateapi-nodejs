# OrderBook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Order book ID, which is updated whenever the order book is changed. Valid only when &#x60;with_id&#x60; is set to &#x60;true&#x60; | [optional] [default to undefined]
**current** | **number** | The timestamp of the response data being generated (in milliseconds) | [optional] [default to undefined]
**update** | **number** | The timestamp of when the orderbook last changed (in milliseconds) | [optional] [default to undefined]
**asks** | **Array&lt;Array&lt;string&gt;&gt;** | Ask Depth | [default to undefined]
**bids** | **Array&lt;Array&lt;string&gt;&gt;** | Bid Depth | [default to undefined]

