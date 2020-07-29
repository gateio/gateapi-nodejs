# GateApi.BatchOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **string** | User defined information. If not empty, must follow the rules below:  1. prefixed with &#x60;t-&#x60; 2. no longer than 28 bytes without &#x60;t-&#x60; prefix 3. can only include 0-9, A-Z, a-z, underscore(_), hyphen(-) or dot(.)  | [optional] [default to undefined]
**succeeded** | **boolean** | Whether order succeeds | [optional] [default to undefined]
**label** | **string** | Error label, empty string if order succeeds | [optional] [default to undefined]
**message** | **string** | Detailed error message, empty string if order succeeds | [optional] [default to undefined]
**id** | **string** | Order ID | [optional] [readonly] [default to undefined]
**createTime** | **string** | Order creation time | [optional] [readonly] [default to undefined]
**updateTime** | **string** | Order last modification time | [optional] [readonly] [default to undefined]
**status** | **string** | Order status  - &#x60;open&#x60;: to be filled - &#x60;closed&#x60;: filled - &#x60;cancelled&#x60;: cancelled | [optional] [readonly] [default to undefined]
**currencyPair** | **string** | Currency pair | [optional] [default to undefined]
**type** | **string** | Order type. limit - limit order | [optional] [default to &#39;limit&#39;]
**account** | **string** | Account type. spot - use spot account; margin - use margin account | [optional] [default to &#39;spot&#39;]
**side** | **string** | Order side | [optional] [default to undefined]
**amount** | **string** | Trade amount | [optional] [default to undefined]
**price** | **string** | Order price | [optional] [default to undefined]
**timeInForce** | **string** | Time in force  - gtc: GoodTillCancelled - ioc: ImmediateOrCancelled, taker only - poc: PendingOrCancelled, makes a post-only order that always enjoys a maker fee | [optional] [default to &#39;gtc&#39;]
**autoBorrow** | **boolean** | Used in margin trading(i.e. &#x60;account&#x60; is &#x60;margin&#x60;) to allow automatic loan of insufficient part if balance is not enough. | [optional] [default to undefined]
**left** | **string** | Amount left to fill | [optional] [readonly] [default to undefined]
**fillPrice** | **string** | Total filled in quote currency. Deprecated in favor of &#x60;filled_total&#x60; | [optional] [readonly] [default to undefined]
**filledTotal** | **string** | Total filled in quote currency | [optional] [readonly] [default to undefined]
**fee** | **string** | Fee deducted | [optional] [readonly] [default to undefined]
**feeCurrency** | **string** | Fee currency unit | [optional] [readonly] [default to undefined]
**pointFee** | **string** | Point used to deduct fee | [optional] [readonly] [default to undefined]
**gtFee** | **string** | GT used to deduct fee | [optional] [readonly] [default to undefined]
**gtDiscount** | **boolean** | Whether GT fee discount is used | [optional] [readonly] [default to undefined]
**rebatedFee** | **string** | Rebated fee | [optional] [readonly] [default to undefined]
**rebatedFeeCurrency** | **string** | Rebated fee currency unit | [optional] [readonly] [default to undefined]

## Enum: BatchOrder.Status

* `Open` (value: `'open'`)

* `Closed` (value: `'closed'`)

* `Cancelled` (value: `'cancelled'`)


## Enum: BatchOrder.Type

* `Limit` (value: `'limit'`)


## Enum: BatchOrder.Account

* `Spot` (value: `'spot'`)

* `Margin` (value: `'margin'`)


## Enum: BatchOrder.Side

* `Buy` (value: `'buy'`)

* `Sell` (value: `'sell'`)


## Enum: BatchOrder.TimeInForce

* `Gtc` (value: `'gtc'`)

* `Ioc` (value: `'ioc'`)

* `Poc` (value: `'poc'`)


