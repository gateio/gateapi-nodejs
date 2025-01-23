# CancelBatchOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currencyPair** | **string** | Order currency pair | [default to undefined]
**id** | **string** | Order ID or user custom ID. Custom ID are accepted only within 30 minutes after order creation | [default to undefined]
**actionMode** | **string** | Processing Mode: When placing an order, different fields are returned based on action_mode. This field is only valid during the request and is not included in the response result ACK: Asynchronous mode, only returns key order fields RESULT: No clearing information FULL: Full mode (default) | [optional] [default to undefined]

