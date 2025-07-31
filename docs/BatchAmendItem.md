# BatchAmendItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **string** | The order ID returned upon successful creation or the custom ID specified by the user during creation (i.e., the \&#39;text\&#39; field) | [default to undefined]
**currencyPair** | **string** | Currency pair | [default to undefined]
**account** | **string** | Default spot, unified account and warehouse-by-store leverage account | [optional] [default to undefined]
**amount** | **string** | Trading Quantity. Only one of &#x60;amount&#x60; or &#x60;price&#x60; can be specified | [optional] [default to undefined]
**price** | **string** | Trading Price. Only one of &#x60;amount&#x60; or &#x60;price&#x60; can be specified | [optional] [default to undefined]
**amendText** | **string** | Custom info during order amendment | [optional] [default to undefined]
**actionMode** | **string** | Processing Mode: When placing an order, different fields are returned based on action_mode. This field is only valid during the request and is not included in the response result ACK: Asynchronous mode, only returns key order fields RESULT: No clearing information FULL: Full mode (default) | [optional] [default to undefined]

