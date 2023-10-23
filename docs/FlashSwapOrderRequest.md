# FlashSwapOrderRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**previewId** | **string** | Preview result ID | [default to undefined]
**sellCurrency** | **string** | The name of the asset being sold, as obtained from the \&quot;GET /flash_swap/currency_pairs\&quot; API, which retrieves a list of supported flash swap currency pairs. | [default to undefined]
**sellAmount** | **string** | Amount to sell (based on the preview result) | [default to undefined]
**buyCurrency** | **string** | The name of the asset being purchased, as obtained from the \&quot;GET /flash_swap/currency_pairs\&quot; API, which provides a list of supported flash swap currency pairs. | [default to undefined]
**buyAmount** | **string** | Amount to buy (based on the preview result) | [default to undefined]

