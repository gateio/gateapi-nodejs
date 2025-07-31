# CreateMultiCollateralOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **string** | Order ID | [optional] [default to undefined]
**orderType** | **string** | current - current rate, fixed - fixed rate, defaults to current if not specified | [optional] [default to undefined]
**fixedType** | **string** | Fixed interest rate lending period: 7d - 7 days, 30d - 30 days. Required for fixed rate | [optional] [default to undefined]
**fixedRate** | **string** | Fixed interest rate, required for fixed rate | [optional] [default to undefined]
**autoRenew** | **boolean** | Fixed interest rate, auto-renewal | [optional] [default to undefined]
**autoRepay** | **boolean** | Fixed interest rate, auto-repayment | [optional] [default to undefined]
**borrowCurrency** | **string** | Borrowed currency | [default to undefined]
**borrowAmount** | **string** | Borrowed amount | [default to undefined]
**collateralCurrencies** | [**Array&lt;CollateralCurrency&gt;**](CollateralCurrency.md) | Collateral currency and amount | [optional] [default to undefined]

