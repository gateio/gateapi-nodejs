# SubAccountToSubAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **string** | Transfer currency name | [default to undefined]
**subAccountType** | **string** | Transfer from the account. (deprecate, use &#x60;sub_account_from_type&#x60; and &#x60;sub_account_to_type&#x60; instead) | [optional] [default to undefined]
**subAccountFrom** | **string** | Transfer from the user id of the sub-account | [default to undefined]
**subAccountFromType** | **string** | Transfer from the account.  &#x60;spot&#x60; - spot account, &#x60;futures&#x60; - perpetual contract account, &#x60;cross_margin&#x60; - cross margin account | [default to undefined]
**subAccountTo** | **string** | Transfer to the user id of the sub-account | [default to undefined]
**subAccountToType** | **string** | Transfer to the account.  &#x60;spot&#x60; - spot account, &#x60;futures&#x60; - perpetual contract account, &#x60;cross_margin&#x60; - cross margin account | [default to undefined]
**amount** | **string** | Transfer amount | [default to undefined]

## Enum: SubAccountToSubAccount.SubAccountFromType

* `Spot` (value: `'spot'`)

* `Futures` (value: `'futures'`)

* `CrossMargin` (value: `'cross_margin'`)


## Enum: SubAccountToSubAccount.SubAccountToType

* `Spot` (value: `'spot'`)

* `Futures` (value: `'futures'`)

* `CrossMargin` (value: `'cross_margin'`)


