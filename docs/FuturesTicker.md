# FuturesTicker

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contract** | **string** | Futures contract | [optional] [default to undefined]
**last** | **string** | Last trading price | [optional] [default to undefined]
**changePercentage** | **string** | Price change percentage. Negative values indicate price decrease, e.g. -7.45 | [optional] [default to undefined]
**totalSize** | **string** | Contract total size | [optional] [default to undefined]
**low24h** | **string** | 24-hour lowest price | [optional] [default to undefined]
**high24h** | **string** | 24-hour highest price | [optional] [default to undefined]
**volume24h** | **string** | 24-hour trading volume | [optional] [default to undefined]
**volume24hBtc** | **string** | 24-hour trading volume in BTC (deprecated, use &#x60;volume_24h_base&#x60;, &#x60;volume_24h_quote&#x60;, &#x60;volume_24h_settle&#x60; instead) | [optional] [default to undefined]
**volume24hUsd** | **string** | 24-hour trading volume in USD (deprecated, use &#x60;volume_24h_base&#x60;, &#x60;volume_24h_quote&#x60;, &#x60;volume_24h_settle&#x60; instead) | [optional] [default to undefined]
**volume24hBase** | **string** | 24-hour trading volume in base currency | [optional] [default to undefined]
**volume24hQuote** | **string** | 24-hour trading volume in quote currency | [optional] [default to undefined]
**volume24hSettle** | **string** | 24-hour trading volume in settle currency | [optional] [default to undefined]
**markPrice** | **string** | Recent mark price | [optional] [default to undefined]
**fundingRate** | **string** | Funding rate | [optional] [default to undefined]
**fundingRateIndicative** | **string** | Indicative Funding rate in next period. (deprecated. use &#x60;funding_rate&#x60;) | [optional] [default to undefined]
**indexPrice** | **string** | Index price | [optional] [default to undefined]
**quantoBaseRate** | **string** | Exchange rate of base currency and settlement currency in Quanto contract. Does not exists in contracts of other types | [optional] [default to undefined]
**lowestAsk** | **string** | Recent lowest ask | [optional] [default to undefined]
**lowestSize** | **string** | The latest seller\&#39;s lowest price order quantity | [optional] [default to undefined]
**highestBid** | **string** | Recent highest bid | [optional] [default to undefined]
**highestSize** | **string** | The latest buyer\&#39;s highest price order volume | [optional] [default to undefined]

