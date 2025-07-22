# MultiCollateralRecord

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **number** | Order ID. | [optional] [default to undefined]
**recordId** | **number** | Collateral record ID. | [optional] [default to undefined]
**beforeLtv** | **string** | The collateral ratio before adjustment. | [optional] [default to undefined]
**afterLtv** | **string** | The collateral ratio before adjustment. | [optional] [default to undefined]
**operateTime** | **number** | Operation time, timestamp in seconds. | [optional] [default to undefined]
**borrowCurrencies** | [**Array&lt;MultiCollateralRecordCurrency&gt;**](MultiCollateralRecordCurrency.md) | Borrowing Currency List. | [optional] [default to undefined]
**collateralCurrencies** | [**Array&lt;MultiCollateralRecordCurrency&gt;**](MultiCollateralRecordCurrency.md) | Collateral Currency List. | [optional] [default to undefined]

