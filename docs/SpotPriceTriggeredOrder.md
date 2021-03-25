# SpotPriceTriggeredOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**trigger** | [**SpotPriceTrigger**](SpotPriceTrigger.md) |  | [default to undefined]
**put** | [**SpotPricePutOrder**](SpotPricePutOrder.md) |  | [default to undefined]
**id** | **number** | Auto order ID | [optional] [readonly] [default to undefined]
**user** | **number** | User ID | [optional] [readonly] [default to undefined]
**market** | **string** | Currency pair | [default to undefined]
**ctime** | **number** | Creation time | [optional] [readonly] [default to undefined]
**ftime** | **number** | Finished time | [optional] [readonly] [default to undefined]
**firedOrderId** | **number** | ID of the newly created order on condition triggered | [optional] [readonly] [default to undefined]
**status** | **string** | Status  - open: open - cancelled: being manually cancelled - finish: successfully executed - failed: failed to execute - expired - expired  | [optional] [readonly] [default to undefined]
**reason** | **string** | Extra messages of how order is finished | [optional] [readonly] [default to undefined]

