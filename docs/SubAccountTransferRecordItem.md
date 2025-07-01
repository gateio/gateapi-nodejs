# SubAccountTransferRecordItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timest** | **string** | Transfer timestamp | [optional] [readonly] [default to undefined]
**uid** | **string** | Main account user ID | [optional] [readonly] [default to undefined]
**subAccount** | **string** | Sub account user ID | [default to undefined]
**subAccountType** | **string** | 操作的子账号交易账户， spot - 现货账户， futures - 永续合约账户， delivery - 交割合约账户, options - 期权账户 | [optional] [default to &#39;spot&#39;]
**currency** | **string** | Transfer currency name | [default to undefined]
**amount** | **string** | Transfer amount | [default to undefined]
**direction** | **string** | Transfer direction. to - transfer into sub account; from - transfer out from sub account | [default to undefined]
**source** | **string** | Where the operation is initiated from | [optional] [readonly] [default to undefined]
**clientOrderId** | **string** | The custom ID provided by the customer serves as a safeguard against duplicate transfers. It can be a combination of letters (case-sensitive), numbers, hyphens \&#39;-\&#39;, and underscores \&#39;_\&#39;, with a length ranging from 1 to 64 characters. | [optional] [default to undefined]
**status** | **string** | Sub-account transfer record status, currently only success | [optional] [default to undefined]

