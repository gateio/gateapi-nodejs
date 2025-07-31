# FuturesPriceTriggeredOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**initial** | [**FuturesInitialOrder**](FuturesInitialOrder.md) |  | [default to undefined]
**trigger** | [**FuturesPriceTrigger**](FuturesPriceTrigger.md) |  | [default to undefined]
**id** | **number** | Auto order ID | [optional] [readonly] [default to undefined]
**user** | **number** | User ID | [optional] [readonly] [default to undefined]
**createTime** | **number** | Created time | [optional] [readonly] [default to undefined]
**finishTime** | **number** | End time | [optional] [readonly] [default to undefined]
**tradeId** | **number** | ID of the order created after trigger | [optional] [readonly] [default to undefined]
**status** | **string** | Order status  - &#x60;open&#x60;: Active - &#x60;finished&#x60;: Finished - &#x60;inactive&#x60;: Inactive, only applies to order take-profit/stop-loss - &#x60;invalid&#x60;: Invalid, only applies to order take-profit/stop-loss | [optional] [readonly] [default to undefined]
**finishAs** | **string** | Finish status: cancelled - Cancelled; succeeded - Succeeded; failed - Failed; expired - Expired | [optional] [readonly] [default to undefined]
**reason** | **string** | Additional description of how the order was completed | [optional] [readonly] [default to undefined]
**orderType** | **string** | Types of take-profit and stop-loss orders, including:  - &#x60;close-long-order&#x60;: Order take-profit/stop-loss, close long position - &#x60;close-short-order&#x60;: Order take-profit/stop-loss, close short position - &#x60;close-long-position&#x60;: Position take-profit/stop-loss, used to close all long positions - &#x60;close-short-position&#x60;: Position take-profit/stop-loss, used to close all short positions - &#x60;plan-close-long-position&#x60;: Position plan take-profit/stop-loss, used to close all or partial long positions - &#x60;plan-close-short-position&#x60;: Position plan take-profit/stop-loss, used to close all or partial short positions  The two types of order take-profit/stop-loss are read-only and cannot be passed in requests | [optional] [default to undefined]
**meOrderId** | **number** | Corresponding order ID for order take-profit/stop-loss orders | [optional] [readonly] [default to undefined]

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


