# OptionsPosition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user** | **number** | User ID | [optional] [readonly] [default to undefined]
**underlying** | **string** | Underlying | [optional] [readonly] [default to undefined]
**underlyingPrice** | **string** | Underlying price (quote currency) | [optional] [readonly] [default to undefined]
**contract** | **string** | Options contract name | [optional] [readonly] [default to undefined]
**size** | **number** | Position size (contract size) | [optional] [readonly] [default to undefined]
**entryPrice** | **string** | Entry size (quote currency) | [optional] [readonly] [default to undefined]
**markPrice** | **string** | Current mark price (quote currency) | [optional] [readonly] [default to undefined]
**markIv** | **string** | Implied volatility | [optional] [readonly] [default to undefined]
**realisedPnl** | **string** | Realized PNL | [optional] [readonly] [default to undefined]
**unrealisedPnl** | **string** | Unrealized PNL | [optional] [readonly] [default to undefined]
**pendingOrders** | **number** | Current open orders | [optional] [readonly] [default to undefined]
**closeOrder** | [**OptionsPositionCloseOrder**](OptionsPositionCloseOrder.md) |  | [optional] [default to undefined]
**delta** | **string** | Delta | [optional] [readonly] [default to undefined]
**gamma** | **string** | Gamma | [optional] [readonly] [default to undefined]
**vega** | **string** | Vega | [optional] [readonly] [default to undefined]
**theta** | **string** | Theta | [optional] [readonly] [default to undefined]

