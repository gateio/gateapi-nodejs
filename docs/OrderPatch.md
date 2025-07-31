# OrderPatch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currencyPair** | **string** | Currency pair | [optional] [default to undefined]
**account** | **string** | Specify query account | [optional] [default to undefined]
**amount** | **string** | Trading quantity. Either &#x60;amount&#x60; or &#x60;price&#x60; must be specified | [optional] [default to undefined]
**price** | **string** | Trading price. Either &#x60;amount&#x60; or &#x60;price&#x60; must be specified | [optional] [default to undefined]
**amendText** | **string** | Custom info during order amendment | [optional] [default to undefined]
**actionMode** | **string** | Processing Mode: When placing an order, different fields are returned based on action_mode. This field is only valid during the request and is not included in the response result ACK: Asynchronous mode, only returns key order fields RESULT: No clearing information FULL: Full mode (default) | [optional] [default to undefined]

