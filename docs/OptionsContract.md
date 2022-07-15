# OptionsContract

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Futures contract | [optional] [default to undefined]
**tag** | **string** | tag | [optional] [default to undefined]
**createTime** | **number** | Creation time | [optional] [default to undefined]
**expirationTime** | **number** | Expiration time | [optional] [default to undefined]
**isCall** | **boolean** | &#x60;true&#x60; means call options, while &#x60;false&#x60; is put options | [optional] [default to undefined]
**multiplier** | **string** | Multiplier used in converting from invoicing to settlement currency | [optional] [default to undefined]
**underlying** | **string** | Underlying | [optional] [default to undefined]
**underlyingPrice** | **string** | Underlying price | [optional] [default to undefined]
**lastPrice** | **string** | Last trading price | [optional] [default to undefined]
**markPrice** | **string** | Current mark price | [optional] [default to undefined]
**indexPrice** | **string** | Current index price | [optional] [default to undefined]
**makerFeeRate** | **string** | Maker fee rate, where negative means rebate | [optional] [default to undefined]
**takerFeeRate** | **string** | Taker fee rate | [optional] [default to undefined]
**orderPriceRound** | **string** | Minimum order price increment | [optional] [default to undefined]
**markPriceRound** | **string** | Minimum mark price increment | [optional] [default to undefined]
**orderSizeMin** | **number** | Minimum order size the contract allowed | [optional] [default to undefined]
**orderSizeMax** | **number** | Maximum order size the contract allowed | [optional] [default to undefined]
**orderPriceDeviate** | **string** | deviation between order price and current index price. If price of an order is denoted as order_price, it must meet the following condition:      abs(order_price - mark_price) &lt;&#x3D; mark_price * order_price_deviate | [optional] [default to undefined]
**refDiscountRate** | **string** | Referral fee rate discount | [optional] [default to undefined]
**refRebateRate** | **string** | Referrer commission rate | [optional] [default to undefined]
**orderbookId** | **number** | Current orderbook ID | [optional] [default to undefined]
**tradeId** | **number** | Current trade ID | [optional] [default to undefined]
**tradeSize** | **number** | Historical accumulated trade size | [optional] [default to undefined]
**positionSize** | **number** | Current total long position size | [optional] [default to undefined]
**ordersLimit** | **number** | Maximum number of open orders | [optional] [default to undefined]

