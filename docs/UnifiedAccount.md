# UnifiedAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **number** | User ID | [optional] [default to undefined]
**refreshTime** | **number** | Time of the most recent refresh | [optional] [default to undefined]
**locked** | **boolean** | Whether the account is locked, valid in cross-currency margin/combined margin mode, false in other modes such as single-currency margin mode | [optional] [default to undefined]
**balances** | [**{ [key: string]: UnifiedBalance; }**](UnifiedBalance.md) |  | [optional] [default to undefined]
**total** | **string** | Total account assets converted to USD, i.e. the sum of &#x60;(available + freeze) * price&#x60;  in all currencies (deprecated, to be deprecated, replaced by unified_account_total) | [optional] [default to undefined]
**borrowed** | **string** | The total borrowed amount of the account converted into USD, i.e. the sum of &#x60;borrowed * price&#x60; of all currencies (excluding Point Cards). It is valid in cross-currency margin/combined margin mode, and is 0 in other modes such as single-currency margin mode. | [optional] [default to undefined]
**totalInitialMargin** | **string** | Total initial margin, valid in cross-currency margin/combined margin mode, 0 in other modes such as single-currency margin mode | [optional] [default to undefined]
**totalMarginBalance** | **string** | Total margin balance, valid in cross-currency margin/combined margin mode, 0 in other modes such as single-currency margin mode | [optional] [default to undefined]
**totalMaintenanceMargin** | **string** | Total maintenance margin is valid in cross-currency margin/combined margin mode, and is 0 in other modes such as single-currency margin mode | [optional] [default to undefined]
**totalInitialMarginRate** | **string** | Total initial margin rate, valid in cross-currency margin/combined margin mode, 0 in other modes such as single-currency margin mode | [optional] [default to undefined]
**totalMaintenanceMarginRate** | **string** | Total maintenance margin rate, valid in cross-currency margin/combined margin mode, 0 in other modes such as single-currency margin mode | [optional] [default to undefined]
**totalAvailableMargin** | **string** | Available margin amount, valid in cross-currency margin/combined margin mode, 0 in other modes such as single-currency margin mode | [optional] [default to undefined]
**unifiedAccountTotal** | **string** | Unify the total account assets, valid in single currency margin/cross-currency margin/combined margin mode | [optional] [default to undefined]
**unifiedAccountTotalLiab** | **string** | Unify the total loan of the account, valid in the cross-currency margin/combined margin mode, and 0 in other modes such as single-currency margin mode | [optional] [default to undefined]
**unifiedAccountTotalEquity** | **string** | Unify the total account equity, valid in single currency margin/cross-currency margin/combined margin mode | [optional] [default to undefined]
**leverage** | **string** | Actual leverage, valid in cross-currency margin/combined margin mode | [optional] [readonly] [default to undefined]
**spotOrderLoss** | **string** | Total pending order loss, in USDT, valid in cross-currency margin/combined margin mode, 0 in other modes such as single-currency margin mode | [optional] [default to undefined]
**spotHedge** | **boolean** | Spot hedging status, true - enabled, false - not enabled. | [optional] [default to undefined]
**useFunding** | **boolean** | Whether to use funds as margin | [optional] [default to undefined]
**isAllCollateral** | **boolean** | 是否所有币种均作为保证金，true - 所有币种作为保证金，false - 否 | [optional] [default to undefined]

