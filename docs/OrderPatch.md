# OrderPatch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currencyPair** | **string** | Currency pair | [optional] [default to undefined]
**account** | **string** | 指定查询账户。 | [optional] [default to undefined]
**amount** | **string** | New order amount. &#x60;amount&#x60; and &#x60;price&#x60; must specify one of them | [optional] [default to undefined]
**price** | **string** | New order price. &#x60;amount&#x60; and &#x60;Price&#x60; must specify one of them\&quot; | [optional] [default to undefined]
**amendText** | **string** | Custom info during amending order | [optional] [default to undefined]
**actionMode** | **string** | Processing Mode: When placing an order, different fields are returned based on action_mode. This field is only valid during the request and is not included in the response result ACK: Asynchronous mode, only returns key order fields RESULT: No clearing information FULL: Full mode (default) | [optional] [default to undefined]

