# UnifiedHistoryLoanRate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **string** | Currency name | [optional] [default to undefined]
**tier** | **string** | VIP level for the floating rate to be retrieved | [optional] [default to undefined]
**tierUpRate** | **string** | Floating rate corresponding to VIP level | [optional] [default to undefined]
**rates** | [**Array&lt;UnifiedHistoryLoanRateRates&gt;**](UnifiedHistoryLoanRateRates.md) | Historical interest rate information, one data point per hour, array size determined by page and limit parameters from the API request, sorted by time from recent to distant | [optional] [default to undefined]

