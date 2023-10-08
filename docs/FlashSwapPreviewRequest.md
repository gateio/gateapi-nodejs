# FlashSwapPreviewRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sellCurrency** | **string** | 卖出的资产名称， 根据接口&#x60;查询支持闪兑的所有交易对列表 GET /flash_swap/currency_pairs&#x60;获取 | [default to undefined]
**sellAmount** | **string** | Amount to sell. It is required to choose one parameter between &#x60;sell_amount&#x60; and &#x60;buy_amount&#x60; | [optional] [default to undefined]
**buyCurrency** | **string** | 买入的资产名称， 根据接口&#x60;查询支持闪兑的所有交易对列表 GET /flash_swap/currency_pairs&#x60;获取 | [default to undefined]
**buyAmount** | **string** | Amount to buy. It is required to choose one parameter between &#x60;sell_amount&#x60; and &#x60;buy_amount&#x60; | [optional] [default to undefined]

