# QuoteResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quoteId** | **string** | The quotation ID (quote_id) is used for placing orders and is valid for 1 minute | [optional] [default to undefined]
**minAmount** | **string** | 最小下单量 | [optional] [default to undefined]
**maxAmount** | **string** | 最大下单量 | [optional] [default to undefined]
**price** | **string** | Coin Price (USDT-based) | [optional] [default to undefined]
**slippage** | **string** | Slippage | [optional] [default to undefined]
**estimateGasFeeAmountUsdt** | **string** | Estimated Network Fee (USDT-based) | [optional] [default to undefined]
**orderFee** | **string** | Slippage value of 10 represents a 10% tolerance | [optional] [default to undefined]
**targetTokenMinAmount** | **string** | 最小获得数量 | [optional] [default to undefined]
**targetTokenMaxAmount** | **string** | 最大获得数量 | [optional] [default to undefined]
**errorType** | **number** | Failure Type - &#x60;0&#x60; : Success - &#x60;1&#x60; : Exceeds maximum value - &#x60;2&#x60; : Below minimum value | [optional] [default to undefined]

