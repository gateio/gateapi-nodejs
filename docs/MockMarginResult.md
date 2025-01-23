# MockMarginResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | 仓位组合类型 &#x60;original_position&#x60; - 原始仓位 &#x60;long_delta_original_position&#x60; - 正向delta+原始仓位 &#x60;short_delta_original_position&#x60; - 负向delta+原始仓位 | [optional] [default to undefined]
**profitLossRanges** | [**Array&lt;ProfitLossRange&gt;**](ProfitLossRange.md) | mr1的33个压力场景测试结果 | [optional] [default to undefined]
**maxLoss** | [**ProfitLossRange**](.md) | 最大损失 | [optional] [default to undefined]
**mr1** | **string** | 压力测试 | [optional] [default to undefined]
**mr2** | **string** | 基差跨期风险 | [optional] [default to undefined]
**mr3** | **string** | 波动率跨期风险 | [optional] [default to undefined]
**mr4** | **string** | 期权空头风险 | [optional] [default to undefined]

