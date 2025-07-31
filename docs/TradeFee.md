# TradeFee

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **number** | User ID | [optional] [default to undefined]
**takerFee** | **string** | taker fee rate | [optional] [default to undefined]
**makerFee** | **string** | maker fee rate | [optional] [default to undefined]
**gtDiscount** | **boolean** | Whether GT deduction discount is enabled | [optional] [default to undefined]
**gtTakerFee** | **string** | Taker fee rate if using GT deduction. It will be 0 if GT deduction is disabled | [optional] [default to undefined]
**gtMakerFee** | **string** | Maker fee rate with GT deduction. Returns 0 if GT deduction is disabled | [optional] [default to undefined]
**loanFee** | **string** | Loan fee rate of margin lending | [optional] [default to undefined]
**pointType** | **string** | Point card type: 0 - Original version, 1 - New version since 202009 | [optional] [default to undefined]
**futuresTakerFee** | **string** | Perpetual contract taker fee rate | [optional] [default to undefined]
**futuresMakerFee** | **string** | Perpetual contract maker fee rate | [optional] [default to undefined]
**deliveryTakerFee** | **string** | Delivery contract taker fee rate | [optional] [default to undefined]
**deliveryMakerFee** | **string** | Delivery contract maker fee rate | [optional] [default to undefined]
**debitFee** | **number** | Deduction types for rates, 1 - GT deduction, 2 - Point card deduction, 3 - VIP rates | [optional] [default to undefined]

