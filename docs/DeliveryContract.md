# DeliveryContract

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Futures contract | [optional] [default to undefined]
**underlying** | **string** | Underlying | [optional] [default to undefined]
**cycle** | **string** | Cycle type, e.g. WEEKLY, QUARTERLY | [optional] [default to undefined]
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
**basisRate** | **string** | Fair basis rate | [optional] [default to undefined]
**basisValue** | **string** | Fair basis value | [optional] [default to undefined]
**basisImpactValue** | **string** | Funding used for calculating impact bid, ask price | [optional] [default to undefined]
**settlePrice** | **string** | Settle price | [optional] [default to undefined]
**settlePriceInterval** | **number** | Settle price update interval | [optional] [default to undefined]
**settlePriceDuration** | **number** | Settle price update duration in seconds | [optional] [default to undefined]
**expireTime** | **number** | Contract expiry timestamp | [optional] [default to undefined]
**riskLimitBase** | **string** | Risk limit base | [optional] [default to undefined]
**riskLimitStep** | **string** | Step of adjusting risk limit | [optional] [default to undefined]
**riskLimitMax** | **string** | Maximum risk limit the contract allowed | [optional] [default to undefined]
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
**inDelisting** | **boolean** | Contract is delisting | [optional] [default to undefined]
**ordersLimit** | **number** | Maximum number of pending orders | [optional] [default to undefined]

## Enum: DeliveryContract.Cycle

* `WEEKLY` (value: `'WEEKLY'`)

* `BIWEEKLY` (value: `'BI-WEEKLY'`)

* `QUARTERLY` (value: `'QUARTERLY'`)

* `BIQUARTERLY` (value: `'BI-QUARTERLY'`)


## Enum: DeliveryContract.Type

* `Inverse` (value: `'inverse'`)

* `Direct` (value: `'direct'`)


## Enum: DeliveryContract.MarkType

* `Internal` (value: `'internal'`)

* `Index` (value: `'index'`)


