# UnifiedHistoryLoanRate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **string** | Currency name | [optional] [default to undefined]
**tier** | **string** | The VIP level of the floating rate required | [optional] [default to undefined]
**tierUpRate** | **string** | VIP level corresponding floating rate | [optional] [default to undefined]
**rates** | [**Array&lt;UnifiedHistoryLoanRateRates&gt;**](UnifiedHistoryLoanRateRates.md) | Historical interest rate information, one data per hour, the array size is determined by the page and limit parameters provided by the interface request parameters, sorted from recent to far in time | [optional] [default to undefined]

