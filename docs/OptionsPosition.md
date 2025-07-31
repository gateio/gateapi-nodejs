# OptionsPosition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user** | **number** | User ID | [optional] [readonly] [default to undefined]
**underlying** | **string** | Underlying | [optional] [readonly] [default to undefined]
**underlyingPrice** | **string** | Underlying price (quote currency) | [optional] [readonly] [default to undefined]
**contract** | **string** | Options contract name | [optional] [readonly] [default to undefined]
**size** | **number** | Position size (contract quantity) | [optional] [readonly] [default to undefined]
**entryPrice** | **string** | Entry size (quote currency) | [optional] [readonly] [default to undefined]
**markPrice** | **string** | Current mark price (quote currency) | [optional] [readonly] [default to undefined]
**markIv** | **string** | Implied volatility | [optional] [readonly] [default to undefined]
**realisedPnl** | **string** | Realized PnL | [optional] [readonly] [default to undefined]
**unrealisedPnl** | **string** | Unrealized PNL | [optional] [readonly] [default to undefined]
**pendingOrders** | **number** | Current pending order quantity | [optional] [readonly] [default to undefined]
**closeOrder** | [**OptionsPositionCloseOrder**](OptionsPositionCloseOrder.md) |  | [optional] [default to undefined]
**delta** | **string** | Greek letter delta | [optional] [readonly] [default to undefined]
**gamma** | **string** | Greek letter gamma | [optional] [readonly] [default to undefined]
**vega** | **string** | Greek letter vega | [optional] [readonly] [default to undefined]
**theta** | **string** | Greek letter theta | [optional] [readonly] [default to undefined]

