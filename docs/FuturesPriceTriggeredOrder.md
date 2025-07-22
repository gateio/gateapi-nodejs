# FuturesPriceTriggeredOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**initial** | [**FuturesInitialOrder**](FuturesInitialOrder.md) |  | [default to undefined]
**trigger** | [**FuturesPriceTrigger**](FuturesPriceTrigger.md) |  | [default to undefined]
**id** | **number** | Auto order ID. | [optional] [readonly] [default to undefined]
**user** | **number** | User ID. | [optional] [readonly] [default to undefined]
**createTime** | **number** | Creation time. | [optional] [readonly] [default to undefined]
**finishTime** | **number** | Finished time. | [optional] [readonly] [default to undefined]
**tradeId** | **number** | ID of the newly created order on condition triggered. | [optional] [readonly] [default to undefined]
**status** | **string** | Auto order status  - &#x60;open&#x60;: order is active - &#x60;finished&#x60;: order is finished - &#x60;inactive&#x60;: order is not active, only for close-long-order or close-short-order - &#x60;invalid&#x60;: order is close-short-order | [optional] [readonly] [default to undefined]
**finishAs** | **string** | How order is finished. | [optional] [readonly] [default to undefined]
**reason** | **string** | Additional remarks on how the order was finished. | [optional] [readonly] [default to undefined]
**orderType** | **string** | Types of stop-profit and stop-loss, including:  - &#x60;close-long-order&#x60;: Entrusting order stop profit and stop loss, flat long position - &#x60;close-short-order&#x60;: loss, short position  - &#x60;close-long-position&#x60;: Position stop-profit stop loss, used to close long positions - &#x60;close-short-position&#x60;: Position stop-profit stop loss, used to close all short positions - &#x60;plan-close-long-position&#x60;: Position plan take profit and stop loss, used to close long positions in all or part of long positions - &#x60;plan-close-short-position&#x60;: Position plan stop-profit and stop loss, used to close all short positions or partially close short positions  The two types of entrusted order stop-profit and stop-loss are read-only and cannot be passed in through requests | [optional] [default to undefined]
**meOrderId** | **number** | Corresponding order ID of order take-profit/stop-loss. | [optional] [readonly] [default to undefined]

## Enum: FuturesPriceTriggeredOrder.Status

* `Open` (value: `'open'`)

* `Finished` (value: `'finished'`)

* `Inactive` (value: `'inactive'`)

* `Invalid` (value: `'invalid'`)


## Enum: FuturesPriceTriggeredOrder.FinishAs

* `Cancelled` (value: `'cancelled'`)

* `Succeeded` (value: `'succeeded'`)

* `Failed` (value: `'failed'`)

* `Expired` (value: `'expired'`)


