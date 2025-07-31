# SubCrossMarginAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **number** | Cross margin account user ID. 0 means this sub-account has not yet opened a cross margin account | [optional] [default to undefined]
**locked** | **boolean** | Whether the account is locked | [optional] [default to undefined]
**balances** | [**{ [key: string]: CrossMarginBalance; }**](CrossMarginBalance.md) |  | [optional] [default to undefined]
**total** | **string** | Total account value in USDT, i.e., the sum of all currencies\&#39; &#x60;(available+freeze)*price*discount&#x60; | [optional] [default to undefined]
**borrowed** | **string** | Total borrowed value in USDT, i.e., the sum of all currencies\&#39; &#x60;borrowed*price*discount&#x60; | [optional] [default to undefined]
**borrowedNet** | **string** | Total borrowed value in USDT * leverage factor | [optional] [default to undefined]
**net** | **string** | Total net assets in USDT | [optional] [default to undefined]
**leverage** | **string** | Position leverage | [optional] [default to undefined]
**interest** | **string** | Total unpaid interest in USDT, i.e., the sum of all currencies\&#39; &#x60;interest*price*discount&#x60; | [optional] [default to undefined]
**risk** | **string** | Risk rate. When it falls below 110%, liquidation will be triggered. Calculation formula: &#x60;total / (borrowed+interest)&#x60; | [optional] [default to undefined]
**totalInitialMargin** | **string** | Total initial margin | [optional] [default to undefined]
**totalMarginBalance** | **string** | Total margin balance | [optional] [default to undefined]
**totalMaintenanceMargin** | **string** | Total maintenance margin | [optional] [default to undefined]
**totalInitialMarginRate** | **string** | Total initial margin rate | [optional] [default to undefined]
**totalMaintenanceMarginRate** | **string** | Total maintenance margin rate | [optional] [default to undefined]
**totalAvailableMargin** | **string** | Total available margin | [optional] [default to undefined]

