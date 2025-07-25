# CollateralOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **number** | Order ID. | [optional] [default to undefined]
**collateralCurrency** | **string** | Collateral. | [optional] [default to undefined]
**collateralAmount** | **string** | Collateral amount. | [optional] [default to undefined]
**borrowCurrency** | **string** | Borrowed currency. | [optional] [default to undefined]
**borrowAmount** | **string** | Borrowing amount. | [optional] [default to undefined]
**repaidAmount** | **string** | Repaid amount. | [optional] [default to undefined]
**repaidPrincipal** | **string** | Repaid principal. | [optional] [default to undefined]
**repaidInterest** | **string** | Repaid interest. | [optional] [default to undefined]
**initLtv** | **string** | The initial collateralization rate. | [optional] [default to undefined]
**currentLtv** | **string** | The current collateralization rate. | [optional] [default to undefined]
**liquidateLtv** | **string** | The liquidation collateralization rate. | [optional] [default to undefined]
**status** | **string** | Order status: - initial: Initial state after placing the order - collateral_deducted: Collateral deduction successful - collateral_returning: Loan failed - Collateral return pending - lent: Loan successful - repaying: Repayment in progress - liquidating: Liquidation in progress - finished: Order completed - closed_liquidated: Liquidation and repayment completed | [optional] [default to undefined]
**borrowTime** | **number** | Borrowing time, timestamp in seconds. | [optional] [default to undefined]
**leftRepayTotal** | **string** | Outstanding principal and interest (outstanding principal + outstanding interest) | [optional] [default to undefined]
**leftRepayPrincipal** | **string** | outstanding principal. | [optional] [default to undefined]
**leftRepayInterest** | **string** | outstanding interest. | [optional] [default to undefined]

