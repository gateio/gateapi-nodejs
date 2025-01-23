# FuturesPriceTriggeredOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**initial** | [**FuturesInitialOrder**](FuturesInitialOrder.md) |  | [default to undefined]
**trigger** | [**FuturesPriceTrigger**](FuturesPriceTrigger.md) |  | [default to undefined]
**id** | **number** | Auto order ID | [optional] [readonly] [default to undefined]
**user** | **number** | User ID | [optional] [readonly] [default to undefined]
**createTime** | **number** | Creation time | [optional] [readonly] [default to undefined]
**finishTime** | **number** | Finished time | [optional] [readonly] [default to undefined]
**tradeId** | **number** | ID of the newly created order on condition triggered | [optional] [readonly] [default to undefined]
**status** | **string** | Auto order status  - &#x60;open&#x60;: order is active - &#x60;finished&#x60;: order is finished - &#x60;inactive&#x60;: order is not active, only for close-long-order or close-short-order - &#x60;invalid&#x60;: order is invalid, only for close-long-order or close-short-order | [optional] [readonly] [default to undefined]
**finishAs** | **string** | How order is finished | [optional] [readonly] [default to undefined]
**reason** | **string** | Additional remarks on how the order was finished | [optional] [readonly] [default to undefined]
**orderType** | **string** | Take-profit/stop-loss types, which include:  - &#x60;close-long-order&#x60;: order take-profit/stop-loss, close long position - &#x60;close-short-order&#x60;: order take-profit/stop-loss, close short position - &#x60;close-long-position&#x60;: position take-profit/stop-loss, close long position - &#x60;close-short-position&#x60;: position take-profit/stop-loss, close short position - &#x60;plan-close-long-position&#x60;: position planned take-profit/stop-loss, close long position - &#x60;plan-close-short-position&#x60;: position planned take-profit/stop-loss, close short position  The order take-profit/stop-loss can not be passed by request. These two types are read only. | [optional] [default to undefined]
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


