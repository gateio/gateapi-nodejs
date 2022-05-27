# FlashSwapOrderRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**previewId** | **string** | Preview result ID | [optional] [default to undefined]
**sellCurrency** | **string** | Currency to sell which can be retrieved from supported currency list API &#x60;GET /flash_swap/currencies&#x60; | [default to undefined]
**sellAmount** | **string** | Amount to sell. It is required to choose one parameter between &#x60;sell_amount&#x60; and &#x60;buy_amount&#x60; | [optional] [default to undefined]
**buyCurrency** | **string** | Currency to buy which can be retrieved from supported currency list API &#x60;GET /flash_swap/currencies&#x60; | [default to undefined]
**buyAmount** | **string** | Amount to buy. It is required to choose one parameter between &#x60;sell_amount&#x60; and &#x60;buy_amount&#x60; | [optional] [default to undefined]

