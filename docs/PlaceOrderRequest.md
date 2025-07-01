# PlaceOrderRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **string** | Trading Symbol | [default to undefined]
**side** | **string** | 买单或者卖单 - buy - sell | [default to undefined]
**amount** | **string** | Trade Quantity - &#x60;side&#x60; : &#x60;buy&#x60; refers to the quote currency, i.e., &#x60;USDT&#x60; - &#x60;side&#x60; : &#x60;sell&#x60; refers to the base currency | [default to undefined]
**gasMode** | **string** | Trading mode affects slippage selection - &#x60;speed&#x60; : Smart mode - &#x60;custom&#x60; : Custom mode, uses &#x60;slippage&#x60; parameter | [default to undefined]
**slippage** | **string** | Slippage value of 10 represents a 10% tolerance | [optional] [default to undefined]
**quoteId** | **string** | The quote_id returned by the quotation API | [default to undefined]

