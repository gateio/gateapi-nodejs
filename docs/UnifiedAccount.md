# UnifiedAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **number** | User ID | [optional] [default to undefined]
**refreshTime** | **number** | Time of the most recent refresh | [optional] [default to undefined]
**locked** | **boolean** | Whether account is locked | [optional] [default to undefined]
**balances** | [**{ [key: string]: UnifiedBalance; }**](UnifiedBalance.md) |  | [optional] [default to undefined]
**total** | **string** | The total asset value in USDT. Sum of &#x60;(available + freeze) * price&#x60; | [optional] [default to undefined]
**borrowed** | **string** | The total borrowed amount in USDT equivalent. Sum of &#x60;borrowed * price&#x60;  | [optional] [default to undefined]
**totalInitialMargin** | **string** | Total initial margin | [optional] [default to undefined]
**totalMarginBalance** | **string** | Total margin balance | [optional] [default to undefined]
**totalMaintenanceMargin** | **string** | Total maintenance margin | [optional] [default to undefined]
**totalInitialMarginRate** | **string** | Total initial margin rate | [optional] [default to undefined]
**totalMaintenanceMarginRate** | **string** | Total maintenance margin rate | [optional] [default to undefined]
**totalAvailableMargin** | **string** | Total available margin | [optional] [default to undefined]
**unifiedAccountTotal** | **string** | Total amount of the portfolio margin account | [optional] [default to undefined]
**unifiedAccountTotalLiab** | **string** | Total liabilities of the portfolio margin account | [optional] [default to undefined]
**unifiedAccountTotalEquity** | **string** | Total equity of the portfolio margin account | [optional] [default to undefined]
**leverage** | **string** | Leverage | [optional] [readonly] [default to undefined]

