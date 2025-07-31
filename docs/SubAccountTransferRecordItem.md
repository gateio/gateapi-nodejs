# SubAccountTransferRecordItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timest** | **string** | Transfer timestamp | [optional] [readonly] [default to undefined]
**uid** | **string** | Main account user ID | [optional] [readonly] [default to undefined]
**subAccount** | **string** | Sub account user ID | [default to undefined]
**subAccountType** | **string** | Target sub-account trading account: spot - spot account, futures - perpetual contract account, delivery - delivery contract account, options - options account | [optional] [default to &#39;spot&#39;]
**currency** | **string** | Transfer currency name | [default to undefined]
**amount** | **string** | Transfer amount | [default to undefined]
**direction** | **string** | Transfer direction: to - transfer into sub-account, from - transfer out from sub-account | [default to undefined]
**source** | **string** | Source of the transfer operation | [optional] [readonly] [default to undefined]
**clientOrderId** | **string** | Customer-defined ID to prevent duplicate transfers. Can be a combination of letters (case-sensitive), numbers, hyphens \&#39;-\&#39;, and underscores \&#39;_\&#39;. Can be pure letters or pure numbers with length between 1-64 characters | [optional] [default to undefined]
**status** | **string** | Sub-account transfer record status, currently only \&#39;success\&#39; | [optional] [default to undefined]

