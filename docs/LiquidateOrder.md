# LiquidateOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **string** | User defined information. If not empty, must follow the rules below:  1. prefixed with &#x60;t-&#x60; 2. no longer than 28 bytes without &#x60;t-&#x60; prefix 3. can only include 0-9, A-Z, a-z, underscore(_), hyphen(-) or dot(.)  | [optional] [default to undefined]
**currencyPair** | **string** | Currency pair. | [default to undefined]
**amount** | **string** | Trade amount. | [default to undefined]
**price** | **string** | Order price. | [default to undefined]
**actionMode** | **string** | Processing Mode:  Different fields are returned when placing an order based on action_mode. This field is only valid during the request, and it is not included in the response result ACK: Asynchronous mode, only returns key order fields RESULT: No clearing information FULL: Full mode (default) | [optional] [default to undefined]

