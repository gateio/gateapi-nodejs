# Contract

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Futures contract | [optional] [default to undefined]
**type** | **string** | Contract type: inverse - inverse contract, direct - direct contract | [optional] [default to undefined]
**quantoMultiplier** | **string** | Multiplier used in converting from invoicing to settlement currency | [optional] [default to undefined]
**leverageMin** | **string** | Minimum leverage | [optional] [default to undefined]
**leverageMax** | **string** | Maximum leverage | [optional] [default to undefined]
**maintenanceRate** | **string** | Maintenance rate of margin | [optional] [default to undefined]
**markType** | **string** | Mark price type: internal - internal trading price, index - external index price | [optional] [default to undefined]
**markPrice** | **string** | Current mark price | [optional] [default to undefined]
**indexPrice** | **string** | Current index price | [optional] [default to undefined]
**lastPrice** | **string** | Last trading price | [optional] [default to undefined]
**makerFeeRate** | **string** | Maker fee rate, negative values indicate rebates | [optional] [default to undefined]
**takerFeeRate** | **string** | Taker fee rate | [optional] [default to undefined]
**orderPriceRound** | **string** | Minimum order price increment | [optional] [default to undefined]
**markPriceRound** | **string** | Minimum mark price increment | [optional] [default to undefined]
**fundingRate** | **string** | Current funding rate | [optional] [default to undefined]
**fundingInterval** | **number** | Funding application interval, unit in seconds | [optional] [default to undefined]
**fundingNextApply** | **number** | Next funding time | [optional] [default to undefined]
**riskLimitBase** | **string** | Base risk limit (deprecated) | [optional] [default to undefined]
**riskLimitStep** | **string** | Risk limit adjustment step (deprecated) | [optional] [default to undefined]
**riskLimitMax** | **string** | Maximum risk limit allowed by the contract (deprecated). It is recommended to use /futures/{settle}/risk_limit_tiers to query risk limits | [optional] [default to undefined]
**orderSizeMin** | **number** | Minimum order size allowed by the contract | [optional] [default to undefined]
**orderSizeMax** | **number** | Maximum order size allowed by the contract | [optional] [default to undefined]
**orderPriceDeviate** | **string** | Maximum allowed deviation between order price and current mark price. The order price &#x60;order_price&#x60; must satisfy the following condition:      abs(order_price - mark_price) &lt;&#x3D; mark_price * order_price_deviate | [optional] [default to undefined]
**refDiscountRate** | **string** | Trading fee discount for referred users | [optional] [default to undefined]
**refRebateRate** | **string** | Commission rate for referrers | [optional] [default to undefined]
**orderbookId** | **number** | Orderbook update ID | [optional] [default to undefined]
**tradeId** | **number** | Current trade ID | [optional] [default to undefined]
**tradeSize** | **number** | Historical cumulative trading volume | [optional] [default to undefined]
**positionSize** | **number** | Current total long position size | [optional] [default to undefined]
**configChangeTime** | **number** | Last configuration update time | [optional] [default to undefined]
**inDelisting** | **boolean** | &#x60;in_delisting&#x3D;true&#x60; and position_size&gt;0 indicates the contract is in delisting transition period &#x60;in_delisting&#x3D;true&#x60; and position_size&#x3D;0 indicates the contract is delisted | [optional] [default to undefined]
**ordersLimit** | **number** | Maximum number of pending orders | [optional] [default to undefined]
**enableBonus** | **boolean** | Whether bonus is enabled | [optional] [default to undefined]
**enableCredit** | **boolean** | Whether portfolio margin account is enabled | [optional] [default to undefined]
**createTime** | **number** | Created time of the contract | [optional] [default to undefined]
**fundingCapRatio** | **string** | The factor for the maximum of the funding rate. Maximum of funding rate &#x3D; (1/market maximum leverage - maintenance margin rate) * funding_cap_ratio | [optional] [default to undefined]
**status** | **string** | Contract status types include: prelaunch (pre-launch), trading (active), delisting (delisting), delisted (delisted) | [optional] [default to undefined]
**launchTime** | **number** | Contract expiry timestamp | [optional] [default to undefined]

## Enum: Contract.Type

* `Inverse` (value: `'inverse'`)

* `Direct` (value: `'direct'`)


## Enum: Contract.MarkType

* `Internal` (value: `'internal'`)

* `Index` (value: `'index'`)


