# BrokerCommission1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commissionTime** | **number** | Commission time (Unix timestamp in seconds) | [optional] [default to undefined]
**userId** | **number** | User ID | [optional] [default to undefined]
**groupName** | **string** | Group name | [optional] [default to undefined]
**amount** | **string** | The amount of commission rebates | [optional] [default to undefined]
**fee** | **string** | Fee | [optional] [default to undefined]
**feeAsset** | **string** | Fee currency | [optional] [default to undefined]
**rebateFee** | **string** | The income from rebates, converted to USDT | [optional] [default to undefined]
**source** | **string** | Commission transaction type: Spot, Futures, Options, Alpha | [optional] [default to undefined]
**currencyPair** | **string** | Currency pair | [optional] [default to undefined]
**subBrokerInfo** | [**BrokerCommissionSubBrokerInfo**](BrokerCommissionSubBrokerInfo.md) |  | [optional] [default to undefined]
**alphaContractAddr** | **string** | Alpha contract address | [optional] [default to undefined]

