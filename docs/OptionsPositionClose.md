# OptionsPositionClose

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**time** | **number** | Position close time | [optional] [readonly] [default to undefined]
**contract** | **string** | Options contract name | [optional] [readonly] [default to undefined]
**side** | **string** | Position side  - &#x60;long&#x60;: Long position - &#x60;short&#x60;: Short position | [optional] [readonly] [default to undefined]
**pnl** | **string** | PnL | [optional] [readonly] [default to undefined]
**text** | **string** | Source of close order. See &#x60;order.text&#x60; field for specific values | [optional] [readonly] [default to undefined]
**settleSize** | **string** | Settlement size | [optional] [readonly] [default to undefined]

## Enum: OptionsPositionClose.Side

* `Long` (value: `'long'`)

* `Short` (value: `'short'`)


