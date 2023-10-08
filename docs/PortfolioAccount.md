# PortfolioAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **number** | User ID | [optional] [default to undefined]
**refreshTime** | **number** | Time of the most recent refresh | [optional] [default to undefined]
**locked** | **boolean** | Whether account is locked | [optional] [default to undefined]
**balances** | [**{ [key: string]: PortfolioMarginBalance; }**](PortfolioMarginBalance.md) |  | [optional] [default to undefined]
**total** | **string** | Total account value in USDT, i.e., the sum of all currencies\&#39; | [optional] [default to undefined]
**borrowed** | **string** | Total borrowed value in USDT, i.e., the sum of all currencies | [optional] [default to undefined]
**interest** | **string** | Total unpaid interests in USDT, i.e., the sum of all currencies | [optional] [default to undefined]
**totalInitialMargin** | **string** | Total initial margin | [optional] [default to undefined]
**totalMarginBalance** | **string** | Total margin balance | [optional] [default to undefined]
**totalMaintenanceMargin** | **string** | Total maintenance margin | [optional] [default to undefined]
**totalInitialMarginRate** | **string** | Total initial margin rate | [optional] [default to undefined]
**totalMaintenanceMarginRate** | **string** | Total maintenance margin rate | [optional] [default to undefined]
**totalAvailableMargin** | **string** | Total available margin | [optional] [default to undefined]
**portfolioMarginTotal** | **string** | Total amount of the portfolio margin account | [optional] [default to undefined]
**portfolioMarginTotalLiab** | **string** | Total liabilities of the portfolio margin account | [optional] [default to undefined]
**portfolioMarginTotalEquity** | **string** | Total equity of the portfolio margin account | [optional] [default to undefined]

