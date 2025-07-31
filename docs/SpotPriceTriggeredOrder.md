# SpotPriceTriggeredOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**trigger** | [**SpotPriceTrigger**](SpotPriceTrigger.md) |  | [default to undefined]
**put** | [**SpotPricePutOrder**](SpotPricePutOrder.md) |  | [default to undefined]
**id** | **number** | Auto order ID | [optional] [readonly] [default to undefined]
**user** | **number** | User ID | [optional] [readonly] [default to undefined]
**market** | **string** | Market | [default to undefined]
**ctime** | **number** | Created time | [optional] [readonly] [default to undefined]
**ftime** | **number** | End time | [optional] [readonly] [default to undefined]
**firedOrderId** | **number** | ID of the order created after trigger | [optional] [readonly] [default to undefined]
**status** | **string** | Status  - open: Running - cancelled: Manually cancelled - finish: Successfully completed - failed: Failed to execute - expired: Expired | [optional] [readonly] [default to undefined]
**reason** | **string** | Additional description of how the order was completed | [optional] [readonly] [default to undefined]

