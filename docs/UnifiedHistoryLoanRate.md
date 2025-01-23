# UnifiedHistoryLoanRate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **string** | Currency name | [optional] [default to undefined]
**tier** | **string** | 需要获取的上浮费率的vip等级 | [optional] [default to undefined]
**tierUpRate** | **string** | vip等级对应的上浮费率 | [optional] [default to undefined]
**rates** | [**Array&lt;UnifiedHistoryLoanRateRates&gt;**](UnifiedHistoryLoanRateRates.md) | 历史利率信息，每个整点小时一个数据，数组大小根据接口请求参数提供的page和limit参数确定，按照时间从近到远排序 | [optional] [default to undefined]

