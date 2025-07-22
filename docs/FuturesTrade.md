# FuturesTrade

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Trade ID. | [optional] [default to undefined]
**createTime** | **number** | Trading time. | [optional] [default to undefined]
**createTimeMs** | **number** | Trading time, with milliseconds set to 3 decimal places. | [optional] [default to undefined]
**contract** | **string** | Futures contract. | [optional] [default to undefined]
**size** | **number** | Trading size. | [optional] [default to undefined]
**price** | **string** | Trading price (quote currency). | [optional] [default to undefined]
**isInternal** | **boolean** | Whether internal trade. Internal trade refers to the takeover of liquidation orders by the insurance fund and ADL users. Since it is not a normal matching on the market depth, the transaction price may deviate, and it will not be recorded in the K-line. an internal trade, this field will not be returned. | [optional] [default to undefined]

