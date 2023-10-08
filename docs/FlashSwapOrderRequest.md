# FlashSwapOrderRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**previewId** | **string** | Preview result ID | [default to undefined]
**sellCurrency** | **string** | 卖出的资产名称， 根据接口&#x60;查询支持闪兑的所有交易对列表 GET /flash_swap/currency_pairs&#x60;获取 | [default to undefined]
**sellAmount** | **string** | Amount to sell (based on the preview result) | [default to undefined]
**buyCurrency** | **string** | 买入的资产名称， 根据接口&#x60;查询支持闪兑的所有交易对列表 GET /flash_swap/currency_pairs&#x60;获取 | [default to undefined]
**buyAmount** | **string** | Amount to buy (based on the preview result) | [default to undefined]

