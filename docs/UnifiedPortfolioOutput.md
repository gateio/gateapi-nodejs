# UnifiedPortfolioOutput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maintainMarginTotal** | **string** | Total maintenance margin, including only the portfolio margin calculation results for positions in the risk unit,  excluding borrowed margin. If borrowing exists, conventional borrowing margin requirements will still apply. | [optional] [default to undefined]
**initialMarginTotal** | **string** | Total initial margin, calculated as the maximum of the following three combinations: position,  position + positive delta orders, position + negative delta orders. | [optional] [default to undefined]
**calculateTime** | **number** | Calculate time | [optional] [default to undefined]
**riskUnit** | [**Array&lt;MockRiskUnit&gt;**](MockRiskUnit.md) | Risk unit | [optional] [default to undefined]

