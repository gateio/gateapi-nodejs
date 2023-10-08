# SubAccountTransfer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **string** | Transfer currency name | [default to undefined]
**subAccount** | **string** | Sub account user ID | [default to undefined]
**direction** | **string** | Transfer direction. to - transfer into sub account; from - transfer out from sub account | [default to undefined]
**amount** | **string** | Transfer amount | [default to undefined]
**uid** | **string** | Main account user ID | [optional] [readonly] [default to undefined]
**clientOrderId** | **string** | The custom ID provided by the customer serves as a safeguard against duplicate transfers. It can be a combination of letters (case-sensitive), numbers, hyphens \&#39;-\&#39;, and underscores \&#39;_\&#39;, with a length ranging from 1 to 64 characters. | [optional] [default to undefined]
**timest** | **string** | Transfer timestamp | [optional] [readonly] [default to undefined]
**source** | **string** | Where the operation is initiated from | [optional] [readonly] [default to undefined]
**subAccountType** | **string** | Target sub user\&#39;s account. &#x60;spot&#x60; - spot account, &#x60;futures&#x60; - perpetual contract account, &#x60;cross_margin&#x60; - cross margin account, &#x60;delivery&#x60; - delivery account | [optional] [default to &#39;spot&#39;]

## Enum: SubAccountTransfer.Direction

* `To` (value: `'to'`)

* `From` (value: `'from'`)


## Enum: SubAccountTransfer.SubAccountType

* `Spot` (value: `'spot'`)

* `Futures` (value: `'futures'`)

* `CrossMargin` (value: `'cross_margin'`)

* `Delivery` (value: `'delivery'`)


