# PositionClose

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**time** | **number** | Position close time | [optional] [readonly] [default to undefined]
**contract** | **string** | Futures contract | [optional] [readonly] [default to undefined]
**side** | **string** | Position side  - &#x60;long&#x60;: Long position - &#x60;short&#x60;: Short position | [optional] [readonly] [default to undefined]
**pnl** | **string** | PnL | [optional] [readonly] [default to undefined]
**pnlPnl** | **string** | PNL - Position P/L | [optional] [readonly] [default to undefined]
**pnlFund** | **string** | PNL - Funding Fees | [optional] [readonly] [default to undefined]
**pnlFee** | **string** | PNL - Transaction Fees | [optional] [readonly] [default to undefined]
**text** | **string** | Source of close order. See &#x60;order.text&#x60; field for specific values | [optional] [readonly] [default to undefined]
**maxSize** | **string** | Max Trade Size | [optional] [readonly] [default to undefined]
**accumSize** | **string** | Cumulative closed position volume | [optional] [readonly] [default to undefined]
**firstOpenTime** | **number** | First Open Time | [optional] [readonly] [default to undefined]
**longPrice** | **string** | When side is \&#39;long\&#39;, it indicates the opening average price; when side is \&#39;short\&#39;, it indicates the closing average price | [optional] [readonly] [default to undefined]
**shortPrice** | **string** | When side is \&#39;long\&#39;, it indicates the closing average price; when side is \&#39;short\&#39;, it indicates the opening average price | [optional] [readonly] [default to undefined]

## Enum: PositionClose.Side

* `Long` (value: `'long'`)

* `Short` (value: `'short'`)


