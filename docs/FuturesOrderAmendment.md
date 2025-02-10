# FuturesOrderAmendment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**size** | **number** | New order size, including filled part.  - If new size is less than or equal to filled size, the order will be cancelled. - Order side must be identical to the original one. - Close order size cannot be changed. - For reduce only orders, increasing size may leads to other reduce only orders being cancelled. - If price is not changed, decreasing size will not change its precedence in order book, while increasing will move it to the last at current price. | [optional] [default to undefined]
**price** | **string** | New order price. | [optional] [default to undefined]
**amendText** | **string** | Custom info during amending order | [optional] [default to undefined]
**bizInfo** | **string** | Users can annotate this modification with information. | [optional] [default to undefined]
**bbo** | **string** | Users are able to modify the offer price manually. | [optional] [default to undefined]

