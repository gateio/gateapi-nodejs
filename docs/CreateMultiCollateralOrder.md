# CreateMultiCollateralOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **string** | Order ID | [optional] [default to undefined]
**orderType** | **string** | current - current, fixed - fixed, if not specified, default to current | [optional] [default to undefined]
**fixedType** | **string** | Fixed interest rate loan period: 7d - 7 days, 30d - 30 days. Must be provided for fixed | [optional] [default to undefined]
**fixedRate** | **string** | Fixed interest rate, must be specified for fixed | [optional] [default to undefined]
**autoRenew** | **boolean** | Fixed interest rate, automatic renewal | [optional] [default to undefined]
**autoRepay** | **boolean** | Fixed interest rate, automatic repayment | [optional] [default to undefined]
**borrowCurrency** | **string** | Borrowed currency | [default to undefined]
**borrowAmount** | **string** | Borrowing amount | [default to undefined]
**collateralCurrencies** | [**Array&lt;CollateralCurrency&gt;**](CollateralCurrency.md) | Collateral currency and amount | [optional] [default to undefined]

