# MockMarginResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Position combination type &#x60;original_position&#x60; - Original position &#x60;long_delta_original_position&#x60; - Positive delta + Original position &#x60;short_delta_original_position&#x60; - Negative delta + Original position | [optional] [default to undefined]
**profitLossRanges** | [**Array&lt;ProfitLossRange&gt;**](ProfitLossRange.md) | The results of 33 pressure scenarios for MR1 | [optional] [default to undefined]
**maxLoss** | [**ProfitLossRange**](.md) | 最大损失 | [optional] [default to undefined]
**mr1** | **string** | Stress testing | [optional] [default to undefined]
**mr2** | **string** | Basis spread risk | [optional] [default to undefined]
**mr3** | **string** | Volatility spread risk | [optional] [default to undefined]
**mr4** | **string** | Option short risk | [optional] [default to undefined]

