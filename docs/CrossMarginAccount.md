# CrossMarginAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **number** | User ID | [optional] [default to undefined]
**locked** | **boolean** | Whether account is locked | [optional] [default to undefined]
**balances** | [**{ [key: string]: CrossMarginBalance; }**](CrossMarginBalance.md) |  | [optional] [default to undefined]
**total** | **string** | Total account value in USDT, i.e., the sum of all currencies\&#39; &#x60;(available+freeze)*price*discount&#x60; | [optional] [default to undefined]
**borrowed** | **string** | Total borrowed value in USDT, i.e., the sum of all currencies\&#39; &#x60;borrowed*price*discount&#x60; | [optional] [default to undefined]
**interest** | **string** | Total unpaid interests in USDT, i.e., the sum of all currencies\&#39; &#x60;interest*price*discount&#x60; | [optional] [default to undefined]
**risk** | **string** | Risk rate. When it belows 110%, liquidation will be triggered. Calculation formula: &#x60;total / (borrowed+interest)&#x60; | [optional] [default to undefined]

