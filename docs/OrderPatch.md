# OrderPatch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currencyPair** | **string** | Currency pair | [optional] [default to undefined]
**account** | **string** | Specify query account. | [optional] [default to undefined]
**amount** | **string** | Trading Quantity. Either amountor pricemust be specified | [optional] [default to undefined]
**price** | **string** | Trading Price. Either amountor pricemust be specified | [optional] [default to undefined]
**amendText** | **string** | Custom info during amending order | [optional] [default to undefined]
**actionMode** | **string** | Processing Mode: When placing an order, different fields are returned based on action_mode. This field is only valid during the request and is not included in the response result ACK: Asynchronous mode, only returns key order fields RESULT: No clearing information FULL: Full mode (default) | [optional] [default to undefined]

