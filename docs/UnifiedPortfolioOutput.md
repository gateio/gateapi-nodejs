# UnifiedPortfolioOutput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maintainMarginTotal** | **string** | 总维持保证金，只包含risk unit的仓位的组合保证金计算结果，不包含借币保证金。如果存在借币，实际还会产生常规的借币保证金要求。 | [optional] [default to undefined]
**initialMarginTotal** | **string** | 总起始保证金，为以下三个组合的最大计算结果：仓位、仓位+正delta挂单、仓位+负delta挂单 | [optional] [default to undefined]
**calculateTime** | **number** | 计算时间 | [optional] [default to undefined]
**riskUnit** | [**Array&lt;MockRiskUnit&gt;**](MockRiskUnit.md) | 风险单元 | [optional] [default to undefined]

