# MultiCollateralOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **string** | Order ID | [optional] [default to undefined]
**orderType** | **string** | current - current, fixed - fixed | [optional] [default to undefined]
**fixedType** | **string** | Fixed interest rate loan periods: 7d - 7 days, 30d - 30 days. | [optional] [default to undefined]
**fixedRate** | **string** | Fixed interest rate | [optional] [default to undefined]
**expireTime** | **number** | Expiration time, timestamp, unit in seconds. | [optional] [default to undefined]
**autoRenew** | **boolean** | Fixed interest rate, automatic renewal | [optional] [default to undefined]
**autoRepay** | **boolean** | Fixed interest rate, automatic repayment | [optional] [default to undefined]
**currentLtv** | **string** | The current collateralization rate | [optional] [default to undefined]
**status** | **string** | Order status: - initial: Initial state after placing the order - collateral_deducted: Collateral deduction successful - collateral_returning: Loan failed - Collateral return pending - lent: Loan successful - repaying: Repayment in progress - liquidating: Liquidation in progress - finished: Order completed - closed_liquidated: Liquidation and repayment completed | [optional] [default to undefined]
**borrowTime** | **number** | Borrowing time, timestamp in seconds | [optional] [default to undefined]
**totalLeftRepayUsdt** | **string** | Value of Left repay amount converted in USDT | [optional] [default to undefined]
**totalLeftCollateralUsdt** | **string** | Value of Collateral amount in USDT | [optional] [default to undefined]
**borrowCurrencies** | [**Array&lt;BorrowCurrencyInfo&gt;**](BorrowCurrencyInfo.md) | Borrowing Currency List | [optional] [default to undefined]
**collateralCurrencies** | [**Array&lt;CollateralCurrencyInfo&gt;**](CollateralCurrencyInfo.md) | Collateral Currency List | [optional] [default to undefined]

