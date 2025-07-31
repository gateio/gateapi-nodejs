# FuturesTrade

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Fill ID | [optional] [default to undefined]
**createTime** | **number** | Fill Time | [optional] [default to undefined]
**createTimeMs** | **number** | Trade time, with millisecond precision to 3 decimal places | [optional] [default to undefined]
**contract** | **string** | Futures contract | [optional] [default to undefined]
**size** | **number** | Trading size | [optional] [default to undefined]
**price** | **string** | Trade price (quote currency) | [optional] [default to undefined]
**isInternal** | **boolean** | Whether it is an internal trade. Internal trade refers to the takeover of liquidation orders by the insurance fund and ADL users. Since it is not a normal matching on the market depth, the trade price may deviate from the market, and it will not be recorded in the K-line. If it is not an internal trade, this field will not be returned | [optional] [default to undefined]

