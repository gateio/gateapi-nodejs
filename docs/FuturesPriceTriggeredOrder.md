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
**status** | **string** | Order status. | [optional] [readonly] [default to undefined]
**finishAs** | **string** | How order is finished | [optional] [readonly] [default to undefined]
**reason** | **string** | Extra messages of how order is finished | [optional] [readonly] [default to undefined]

## Enum: FuturesPriceTriggeredOrder.Status

* `Open` (value: `'open'`)

* `Finished` (value: `'finished'`)


## Enum: FuturesPriceTriggeredOrder.FinishAs

* `Cancelled` (value: `'cancelled'`)

* `Succeeded` (value: `'succeeded'`)

* `Failed` (value: `'failed'`)

* `Expired` (value: `'expired'`)


