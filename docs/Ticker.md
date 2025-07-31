# Ticker

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currencyPair** | **string** | Currency pair | [optional] [default to undefined]
**last** | **string** | Last trading price | [optional] [default to undefined]
**lowestAsk** | **string** | Recent lowest ask | [optional] [default to undefined]
**lowestSize** | **string** | Latest seller\&#39;s lowest price quantity; not available for batch queries; available for single queries, empty if no data | [optional] [default to undefined]
**highestBid** | **string** | Recent highest bid | [optional] [default to undefined]
**highestSize** | **string** | Latest buyer\&#39;s highest price quantity; not available for batch queries; available for single queries, empty if no data | [optional] [default to undefined]
**changePercentage** | **string** | 24h price change percentage (negative for decrease, e.g., -7.45) | [optional] [default to undefined]
**changeUtc0** | **string** | UTC+0 timezone, 24h price change percentage, negative for decline (e.g., -7.45) | [optional] [default to undefined]
**changeUtc8** | **string** | UTC+8 timezone, 24h price change percentage, negative for decline (e.g., -7.45) | [optional] [default to undefined]
**baseVolume** | **string** | Base currency trading volume in the last 24h | [optional] [default to undefined]
**quoteVolume** | **string** | Quote currency trading volume in the last 24h | [optional] [default to undefined]
**high24h** | **string** | 24h High | [optional] [default to undefined]
**low24h** | **string** | 24h Low | [optional] [default to undefined]
**etfNetValue** | **string** | ETF net value | [optional] [default to undefined]
**etfPreNetValue** | **string** | ETF net value at previous rebalancing point | [optional] [default to undefined]
**etfPreTimestamp** | **number** | ETF previous rebalancing time | [optional] [default to undefined]
**etfLeverage** | **string** | ETF current leverage | [optional] [default to undefined]

