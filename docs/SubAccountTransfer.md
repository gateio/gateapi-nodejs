# SubAccountTransfer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subAccount** | **string** | Sub account user ID | [default to undefined]
**subAccountType** | **string** | Target sub-account trading account: spot - spot account, futures - perpetual contract account, delivery - delivery contract account, options - options account | [optional] [default to &#39;spot&#39;]
**currency** | **string** | Transfer currency name | [default to undefined]
**amount** | **string** | Transfer amount | [default to undefined]
**direction** | **string** | Transfer direction: to - transfer into sub-account, from - transfer out from sub-account | [default to undefined]
**clientOrderId** | **string** | Customer-defined ID to prevent duplicate transfers. Can be a combination of letters (case-sensitive), numbers, hyphens \&#39;-\&#39;, and underscores \&#39;_\&#39;. Can be pure letters or pure numbers with length between 1-64 characters | [optional] [default to undefined]

