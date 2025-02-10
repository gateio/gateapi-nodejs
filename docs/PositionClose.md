# PositionClose

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**time** | **number** | Position close time | [optional] [readonly] [default to undefined]
**contract** | **string** | Futures contract | [optional] [readonly] [default to undefined]
**side** | **string** | Position side, long or short | [optional] [readonly] [default to undefined]
**pnl** | **string** | PNL | [optional] [readonly] [default to undefined]
**pnlPnl** | **string** | PNL - Position P/L | [optional] [readonly] [default to undefined]
**pnlFund** | **string** | PNL - Funding Fees | [optional] [readonly] [default to undefined]
**pnlFee** | **string** | PNL - Transaction Fees | [optional] [readonly] [default to undefined]
**text** | **string** | Text of close order | [optional] [readonly] [default to undefined]
**maxSize** | **string** | Max Trade Size | [optional] [readonly] [default to undefined]
**accumSize** | **string** | Cumulative closed position volume | [optional] [readonly] [default to undefined]
**firstOpenTime** | **number** | First Open Time | [optional] [readonly] [default to undefined]
**longPrice** | **string** | When \&#39;side\&#39; is \&#39;long,\&#39; it indicates the opening average price; when \&#39;side\&#39; is \&#39;short,\&#39; it indicates the closing average price. | [optional] [readonly] [default to undefined]
**shortPrice** | **string** | When \&#39;side\&#39; is \&#39;long,\&#39; it indicates the opening average price; when \&#39;side\&#39; is \&#39;short,\&#39; it indicates the closing average price | [optional] [readonly] [default to undefined]

## Enum: PositionClose.Side

* `Long` (value: `'long'`)

* `Short` (value: `'short'`)


