# DeliveryContract

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Futures contract | [optional] [default to undefined]
**underlying** | **string** | Underlying | [optional] [default to undefined]
**cycle** | **string** | Cycle type, e.g. WEEKLY, QUARTERLY | [optional] [default to undefined]
**type** | **string** | Futures contract type | [optional] [default to undefined]
**quantoMultiplier** | **string** | Multiplier used in converting from invoicing to settlement currency in quanto futures | [optional] [default to undefined]
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
**orderSizeMin** | **number** | Minimum order size the contract allowed | [optional] [default to undefined]
**orderSizeMax** | **number** | Maximum order size the contract allowed | [optional] [default to undefined]
**orderPriceDeviate** | **string** | deviation between order price and current index price. If price of an order is denoted as order_price, it must meet the following condition:      abs(order_price - mark_price) &lt;&#x3D; mark_price * order_price_deviate | [optional] [default to undefined]
**refDiscountRate** | **string** | Referral fee rate discount | [optional] [default to undefined]
**refRebateRate** | **string** | Referrer commission rate | [optional] [default to undefined]
**orderbookId** | **number** | Current orderbook ID | [optional] [default to undefined]
**tradeId** | **number** | Current trade ID | [optional] [default to undefined]
**tradeSize** | **number** | Historical accumulation trade size | [optional] [default to undefined]
**positionSize** | **number** | Current total long position size | [optional] [default to undefined]
**configChangeTime** | **number** | Configuration\&#39;s last changed time | [optional] [default to undefined]
**inDelisting** | **boolean** | Contract is delisting | [optional] [default to undefined]
**ordersLimit** | **number** | Maximum number of open orders | [optional] [default to undefined]

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


