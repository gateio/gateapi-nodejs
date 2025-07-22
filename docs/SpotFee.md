# SpotFee

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **number** | User ID. | [optional] [default to undefined]
**takerFee** | **string** | taker fee rate. | [optional] [default to undefined]
**makerFee** | **string** | maker fee rate. | [optional] [default to undefined]
**gtDiscount** | **boolean** | If GT deduction is enabled. | [optional] [default to undefined]
**gtTakerFee** | **string** | Taker fee rate if using GT deduction. It will be 0 if GT deduction is disabled | [optional] [default to undefined]
**gtMakerFee** | **string** | Maker fee rate if using GT deduction. It will be 0 if GT deduction is disabled | [optional] [default to undefined]
**loanFee** | **string** | Loan fee rate of margin lending. | [optional] [default to undefined]
**pointType** | **string** | Point type. 0 - Initial version. 1 - new version since 202009. | [optional] [default to undefined]
**currencyPair** | **string** | Currency pair. | [optional] [default to undefined]
**debitFee** | **number** | Deduction types for rates, 1 - GT deduction, 2 - Point card deduction, 3 - VIP rates | [optional] [default to undefined]

