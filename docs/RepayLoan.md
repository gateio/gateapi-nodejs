# RepayLoan

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **number** | Order ID | [default to undefined]
**repayAmount** | **string** | Repayment amount, it is mandatory when making partial repayments | [default to undefined]
**repaidAll** | **boolean** | Repayment method, set to &#x60;true&#x60; for full repayment, and &#x60;false&#x60; for partial repayment; When set to false for partial repayment, the repay_amount parameter cannot be greater than the remaining amount to be repaid by the user.  | [default to undefined]

