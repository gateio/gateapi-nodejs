# FlashSwapOrderRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**previewId** | **string** | Preview result ID | [default to undefined]
**sellCurrency** | **string** | Name of the asset to be sold, obtained from the interface GET /flash_swap/currency_pairs: Query the list of all trading pairs supporting flash swap | [default to undefined]
**sellAmount** | **string** | Amount to sell (based on the preview result) | [default to undefined]
**buyCurrency** | **string** | Name of the asset to be bought, obtained from the interface GET /flash_swap/currency_pairs: Query the list of all trading pairs supporting flash swap | [default to undefined]
**buyAmount** | **string** | Amount to buy (based on the preview result) | [default to undefined]

