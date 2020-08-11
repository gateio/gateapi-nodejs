# MarginCurrencyPair

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Currency pair | [optional] [default to undefined]
**base** | **string** | Base currency | [optional] [default to undefined]
**quote** | **string** | Quote currency | [optional] [default to undefined]
**leverage** | **number** | Leverage | [optional] [default to undefined]
**minBaseAmount** | **string** | Minimum base currency to loan, &#x60;null&#x60; means no limit | [optional] [default to undefined]
**minQuoteAmount** | **string** | Minimum quote currency to loan, &#x60;null&#x60; means no limit | [optional] [default to undefined]
**maxQuoteAmount** | **string** | Maximum borrowable amount for quote currency. Base currency limit is calculated by quote maximum and market price. &#x60;null&#x60; means no limit | [optional] [default to undefined]

