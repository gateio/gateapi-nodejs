# BatchAmendItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **string** | The order ID returned upon successful creation or the custom ID specified by the user during creation (i.e., the \&#39;text\&#39; field). | [default to undefined]
**currencyPair** | **string** | Currency pair | [default to undefined]
**account** | **string** | Default to spot, portfolio, and margin accounts if not specified. Use \&#39;cross_margin\&#39; to query cross margin accounts. Only \&#39;cross_margin\&#39; can be specified for portfolio margin accounts. | [optional] [default to undefined]
**amount** | **string** | trade amount, only one of amount and price can be specified | [optional] [default to undefined]
**price** | **string** | trade price, only one of amount and price can be specified | [optional] [default to undefined]
**amendText** | **string** | Custom info during amending order | [optional] [default to undefined]
**actionMode** | **string** | Processing Mode: When placing an order, different fields are returned based on action_mode. This field is only valid during the request and is not included in the response result ACK: Asynchronous mode, only returns key order fields RESULT: No clearing information FULL: Full mode (default) | [optional] [default to undefined]

