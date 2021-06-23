# OrderBook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Order book ID, which is updated whenever the order book is changed. Valid only when &#x60;with_id&#x60; is set to &#x60;true&#x60; | [optional] [default to undefined]
**current** | **number** | Response data generation timestamp in milliseconds | [optional] [default to undefined]
**update** | **number** | Order book changed timestamp in milliseconds | [optional] [default to undefined]
**asks** | **Array&lt;Array&lt;string&gt;&gt;** | Asks order depth | [default to undefined]
**bids** | **Array&lt;Array&lt;string&gt;&gt;** | Bids order depth | [default to undefined]

