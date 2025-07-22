# MultiRepayRecord

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **number** | Order ID. | [optional] [default to undefined]
**recordId** | **number** | Repayment record ID. | [optional] [default to undefined]
**initLtv** | **string** | The initial collateralization rate. | [optional] [default to undefined]
**beforeLtv** | **string** | Ltv before the operation. | [optional] [default to undefined]
**afterLtv** | **string** | Ltv after the operation. | [optional] [default to undefined]
**borrowTime** | **number** | Borrowing time, timestamp in seconds. | [optional] [default to undefined]
**repayTime** | **number** | Repayment time, timestamp in seconds. | [optional] [default to undefined]
**borrowCurrencies** | [**Array&lt;RepayRecordCurrency&gt;**](RepayRecordCurrency.md) | List of borrowing information. | [optional] [default to undefined]
**collateralCurrencies** | [**Array&lt;RepayRecordCurrency&gt;**](RepayRecordCurrency.md) | List of collateral information. | [optional] [default to undefined]
**repaidCurrencies** | [**Array&lt;RepayRecordRepaidCurrency&gt;**](RepayRecordRepaidCurrency.md) | Repay Currency List. | [optional] [default to undefined]
**totalInterestList** | [**Array&lt;RepayRecordTotalInterest&gt;**](RepayRecordTotalInterest.md) | Total Interest List. | [optional] [default to undefined]
**leftRepayInterestList** | [**Array&lt;RepayRecordLeftInterest&gt;**](RepayRecordLeftInterest.md) | List of left repay interest. | [optional] [default to undefined]

