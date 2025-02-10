# Position

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user** | **number** | User ID | [optional] [readonly] [default to undefined]
**contract** | **string** | Futures contract | [optional] [readonly] [default to undefined]
**size** | **number** | Position size | [optional] [readonly] [default to undefined]
**leverage** | **string** | Position leverage. 0 means cross margin; positive number means isolated margin | [optional] [default to undefined]
**riskLimit** | **string** | Position risk limit | [optional] [default to undefined]
**leverageMax** | **string** | Maximum leverage under current risk limit | [optional] [readonly] [default to undefined]
**maintenanceRate** | **string** | Maintenance rate under current risk limit | [optional] [readonly] [default to undefined]
**value** | **string** | Position value calculated in settlement currency | [optional] [readonly] [default to undefined]
**margin** | **string** | Position margin | [optional] [default to undefined]
**entryPrice** | **string** | Entry price | [optional] [readonly] [default to undefined]
**liqPrice** | **string** | Liquidation price | [optional] [readonly] [default to undefined]
**markPrice** | **string** | Current mark price | [optional] [readonly] [default to undefined]
**initialMargin** | **string** | The initial margin occupied by the position, applicable to the portfolio margin account | [optional] [readonly] [default to undefined]
**maintenanceMargin** | **string** | Maintenance margin required for the position, applicable to portfolio margin account | [optional] [readonly] [default to undefined]
**unrealisedPnl** | **string** | Unrealized PNL | [optional] [readonly] [default to undefined]
**realisedPnl** | **string** | Realized PNL | [optional] [readonly] [default to undefined]
**pnlPnl** | **string** | Realized PNL - Position P/L | [optional] [readonly] [default to undefined]
**pnlFund** | **string** | Realized PNL -  Funding Fees | [optional] [readonly] [default to undefined]
**pnlFee** | **string** | Realized PNL - Transaction Fees | [optional] [readonly] [default to undefined]
**historyPnl** | **string** | History realized PNL | [optional] [readonly] [default to undefined]
**lastClosePnl** | **string** | PNL of last position close | [optional] [readonly] [default to undefined]
**realisedPoint** | **string** | Realized POINT PNL | [optional] [readonly] [default to undefined]
**historyPoint** | **string** | History realized POINT PNL | [optional] [readonly] [default to undefined]
**adlRanking** | **number** | Ranking of auto deleveraging, a total of 1-5 grades, &#x60;1&#x60; is the highest, &#x60;5&#x60; is the lowest, and &#x60;6&#x60; is the special case when there is no position held or in liquidation | [optional] [readonly] [default to undefined]
**pendingOrders** | **number** | Current open orders | [optional] [readonly] [default to undefined]
**closeOrder** | [**PositionCloseOrder**](PositionCloseOrder.md) |  | [optional] [default to undefined]
**mode** | **string** | Position mode, including:  - &#x60;single&#x60;: dual mode is not enabled- &#x60;dual_long&#x60;: long position in dual mode- &#x60;dual_short&#x60;: short position in dual mode | [optional] [default to undefined]
**crossLeverageLimit** | **string** | Cross margin leverage(valid only when &#x60;leverage&#x60; is 0) | [optional] [default to undefined]
**updateTime** | **number** | Last update time | [optional] [readonly] [default to undefined]
**updateId** | **number** | Update id. Each time the position is updated, the value will be +1. | [optional] [readonly] [default to undefined]
**openTime** | **number** | First Open Time | [optional] [default to undefined]

## Enum: Position.Mode

* `Single` (value: `'single'`)

* `DualLong` (value: `'dual_long'`)

* `DualShort` (value: `'dual_short'`)


