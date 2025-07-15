# UnifiedBalance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available** | **string** | Available amount is valid in single currency margin/cross-currency margin/combined margin mode, and the calculation is different in different modes | [optional] [default to undefined]
**freeze** | **string** | The locked amount is valid in single currency margin/cross-currency margin/combined margin mode | [optional] [default to undefined]
**borrowed** | **string** | Borrow limit, valid in cross-currency margin/combined margin mode, 0 in other modes such as single-currency margin mode | [optional] [default to undefined]
**negativeLiab** | **string** | Negative balance loan is valid in cross-currency margin/combined margin mode, and is 0 in other modes such as single-currency margin mode | [optional] [default to undefined]
**futuresPosLiab** | **string** | Contract opening position borrowing currency (abandoned, to be offline field) | [optional] [default to undefined]
**equity** | **string** | Equity, valid in single currency margin/cross currency margin/combined margin mode | [optional] [default to undefined]
**totalFreeze** | **string** | Total occupancy (discarded, to be offline field) | [optional] [default to undefined]
**totalLiab** | **string** | Total borrowing, valid in cross-currency margin/combined margin mode, 0 in other modes such as single-currency margin mode | [optional] [default to undefined]
**spotInUse** | **string** | The amount of spot hedging is valid in the combined margin mode, and is 0 in other margin modes such as single currency and cross-currency margin modes | [optional] [default to undefined]
**funding** | **string** | Uniloan financial management amount, effective when Uniloan financial management is turned on as a unified account margin switch | [optional] [default to undefined]
**fundingVersion** | **string** | Funding version | [optional] [default to undefined]
**crossBalance** | **string** | Full margin balance is valid in single currency margin mode, and is 0 in other modes such as cross currency margin/combined margin mode | [optional] [default to undefined]
**isoBalance** | **string** | Isolated margin balance is valid in single-currency margin mode and is 0 in other modes such as cross-currency margin/combined margin mode | [optional] [default to undefined]
**im** | **string** | Full-position initial margin is valid in single-currency margin mode and is 0 in other modes such as cross-currency margin/combined margin mode | [optional] [default to undefined]
**mm** | **string** | The full position maintains margin, which is valid in the single currency margin mode, and other cross-currency margin combination margin mode is 0. | [optional] [default to undefined]
**imr** | **string** | Full-position initial margin rate is valid in single-currency margin mode and is 0 in other modes such as cross-currency margin/combined margin mode | [optional] [default to undefined]
**mmr** | **string** | Full-position maintenance margin rate is valid in single-currency margin mode and is 0 in other modes such as cross-currency margin/combined margin mode | [optional] [default to undefined]
**marginBalance** | **string** | Full margin balance is valid in single currency margin mode and is 0 in other modes such as cross currency margin/combined margin mode | [optional] [default to undefined]
**availableMargin** | **string** | Full margin available for full position is valid in single currency margin mode, and is 0 in other modes such as cross-currency margin/combined margin mode | [optional] [default to undefined]
**enabledCollateral** | **boolean** | Currency enabled as margin: true - Enabled, false - Disabled | [optional] [default to undefined]

