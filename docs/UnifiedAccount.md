# UnifiedAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **number** | User ID | [optional] [default to undefined]
**refreshTime** | **number** | Last refresh time | [optional] [default to undefined]
**locked** | **boolean** | Whether the account is locked, valid in cross-currency margin/combined margin mode, false in other modes such as single-currency margin mode | [optional] [default to undefined]
**balances** | [**{ [key: string]: UnifiedBalance; }**](UnifiedBalance.md) |  | [optional] [default to undefined]
**total** | **string** | Total account assets converted to USD, i.e. the sum of &#x60;(available + freeze) * price&#x60; in all currencies (deprecated, to be removed, replaced by unified_account_total) | [optional] [default to undefined]
**borrowed** | **string** | Total borrowed amount converted to USD, i.e. the sum of &#x60;borrowed * price&#x60; of all currencies (excluding point cards), valid in cross-currency margin/combined margin mode, 0 in other modes such as single-currency margin mode | [optional] [default to undefined]
**totalInitialMargin** | **string** | Total initial margin, valid in cross-currency margin/combined margin mode, 0 in other modes such as single-currency margin mode | [optional] [default to undefined]
**totalMarginBalance** | **string** | Total margin balance, valid in cross-currency margin/combined margin mode, 0 in other modes such as single-currency margin mode | [optional] [default to undefined]
**totalMaintenanceMargin** | **string** | Total maintenance margin is valid in cross-currency margin/combined margin mode, and is 0 in other modes such as single-currency margin mode | [optional] [default to undefined]
**totalInitialMarginRate** | **string** | Total initial margin rate, valid in cross-currency margin/combined margin mode, 0 in other modes such as single-currency margin mode | [optional] [default to undefined]
**totalMaintenanceMarginRate** | **string** | Total maintenance margin rate, valid in cross-currency margin/combined margin mode, 0 in other modes such as single-currency margin mode | [optional] [default to undefined]
**totalAvailableMargin** | **string** | Available margin amount, valid in cross-currency margin/combined margin mode, 0 in other modes such as single-currency margin mode | [optional] [default to undefined]
**unifiedAccountTotal** | **string** | Total unified account assets, valid in single currency margin/cross-currency margin/combined margin mode | [optional] [default to undefined]
**unifiedAccountTotalLiab** | **string** | Total unified account borrowed amount, valid in cross-currency margin/combined margin mode, 0 in other modes such as single-currency margin mode | [optional] [default to undefined]
**unifiedAccountTotalEquity** | **string** | Total unified account equity, valid in single currency margin/cross-currency margin/combined margin mode | [optional] [default to undefined]
**leverage** | **string** | Actual leverage ratio, valid in cross-currency margin/combined margin mode | [optional] [readonly] [default to undefined]
**spotOrderLoss** | **string** | Total pending order loss, in USDT, valid in cross-currency margin/combined margin mode, 0 in other modes such as single-currency margin mode | [optional] [default to undefined]
**spotHedge** | **boolean** | Spot hedging status: true - enabled, false - disabled | [optional] [default to undefined]
**useFunding** | **boolean** | Whether to use Earn funds as margin | [optional] [default to undefined]
**isAllCollateral** | **boolean** | Whether all currencies are used as margin: true - all currencies as margin, false - no | [optional] [default to undefined]

