# FuturesBatchAmendOrderRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **number** | Order id, order_id and text must contain at least one | [optional] [default to undefined]
**text** | **string** | User-defined order text, at least one of order_id and text must be passed | [optional] [default to undefined]
**size** | **number** | New order size, including filled size. - If less than or equal to the filled quantity, the order will be cancelled. - The new order side must be identical to the original one. - Close order size cannot be modified. - For reduce-only orders, increasing the size may cancel other reduce-only orders. - If the price is not modified, decreasing the size will not affect the depth queue, while increasing the size will place it at the end of the current price level. | [optional] [default to undefined]
**price** | **string** | New order price | [optional] [default to undefined]
**amendText** | **string** | Custom info during order amendment | [optional] [default to undefined]

