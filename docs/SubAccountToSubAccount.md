# SubAccountToSubAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **string** | Transfer currency name | [default to undefined]
**subAccountType** | **string** | Transfer from the account. (deprecate, use &#x60;sub_account_from_type&#x60; and &#x60;sub_account_to_type&#x60; instead) | [optional] [default to undefined]
**subAccountFrom** | **string** | Transfer from the user id of the sub-account | [default to undefined]
**subAccountFromType** | **string** | 转出的子账号交易账户, spot - 现货账户, futures - 永续合约账户, delivery - 交割合约账户 | [default to undefined]
**subAccountTo** | **string** | Transfer to the user id of the sub-account | [default to undefined]
**subAccountToType** | **string** | 转入的子账号交易账户, spot - 现货账户, futures - 永续合约账户, delivery - 交割合约账户 | [default to undefined]
**amount** | **string** | Transfer amount | [default to undefined]

