# Contract

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Futures contract | [optional] [default to undefined]
**type** | **string** | Futures contract type | [optional] [default to undefined]
**quantoMultiplier** | **string** | Multiplier used in converting from invoicing to settlement currency | [optional] [default to undefined]
**leverageMin** | **string** | Minimum leverage | [optional] [default to undefined]
**leverageMax** | **string** | Maximum leverage | [optional] [default to undefined]
**maintenanceRate** | **string** | Maintenance rate of margin | [optional] [default to undefined]
**markType** | **string** | Mark price type, internal - based on internal trading, index - based on external index price | [optional] [default to undefined]
**markPrice** | **string** | Current mark price | [optional] [default to undefined]
**indexPrice** | **string** | Current index price | [optional] [default to undefined]
**lastPrice** | **string** | Last trading price | [optional] [default to undefined]
**makerFeeRate** | **string** | Maker fee rate, where negative means rebate | [optional] [default to undefined]
**takerFeeRate** | **string** | Taker fee rate | [optional] [default to undefined]
**orderPriceRound** | **string** | Minimum order price increment | [optional] [default to undefined]
**markPriceRound** | **string** | Minimum mark price increment | [optional] [default to undefined]
**fundingRate** | **string** | Current funding rate | [optional] [default to undefined]
**fundingInterval** | **number** | Funding application interval, unit in seconds | [optional] [default to undefined]
**fundingNextApply** | **number** | Next funding time | [optional] [default to undefined]
**riskLimitBase** | **string** | Risk limit base,deprecated | [optional] [default to undefined]
**riskLimitStep** | **string** | Step of adjusting risk limit,deprecated | [optional] [default to undefined]
**riskLimitMax** | **string** | Maximum risk limit the contract allowed,deprecated,It is recommended to use /futures/{settle}/risk_limit_tiers to query risk limits. | [optional] [default to undefined]
**orderSizeMin** | **number** | Minimum order size the contract allowed | [optional] [default to undefined]
**orderSizeMax** | **number** | Maximum order size the contract allowed | [optional] [default to undefined]
**orderPriceDeviate** | **string** | deviation between order price and current index price. If price of an order is denoted as order_price, it must meet the following condition:      abs(order_price - mark_price) &lt;&#x3D; mark_price * order_price_deviate | [optional] [default to undefined]
**refDiscountRate** | **string** | Referral fee rate discount | [optional] [default to undefined]
**refRebateRate** | **string** | Referrer commission rate | [optional] [default to undefined]
**orderbookId** | **number** | Current orderbook ID | [optional] [default to undefined]
**tradeId** | **number** | Current trade ID | [optional] [default to undefined]
**tradeSize** | **number** | Historical accumulated trade size | [optional] [default to undefined]
**positionSize** | **number** | Current total long position size | [optional] [default to undefined]
**configChangeTime** | **number** | Last changed time of configuration | [optional] [default to undefined]
**inDelisting** | **boolean** | &#x60;in_delisting&#x3D;true&#x60; And when position_size&gt;0, it means the contract is in the offline transition period &#x60;in_delisting&#x3D;true&#x60; And when position_size&#x3D;0, it means the contract is offline | [optional] [default to undefined]
**ordersLimit** | **number** | Maximum number of open orders | [optional] [default to undefined]
**enableBonus** | **boolean** | Whether bouns is enabled | [optional] [default to undefined]
**enableCredit** | **boolean** | Whether portfolio margin account is enabled | [optional] [default to undefined]
**createTime** | **number** | Created time of the contract | [optional] [default to undefined]
**fundingCapRatio** | **string** | The factor for the maximum of the funding rate. Maximum of funding rate &#x3D; (1/market maximum leverage - maintenance margin rate) * funding_cap_ratio | [optional] [default to undefined]

## Enum: Contract.Type

* `Inverse` (value: `'inverse'`)

* `Direct` (value: `'direct'`)


## Enum: Contract.MarkType

* `Internal` (value: `'internal'`)

* `Index` (value: `'index'`)


