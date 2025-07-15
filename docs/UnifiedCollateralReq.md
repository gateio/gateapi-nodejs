# UnifiedCollateralReq

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collateralType** | **number** | User-set collateral mode0(all)-All currencies used as collateral, 1(custom)-Custom currencies used as collateral; when collateral_type is 0(all), the enable_list and disable_list parameters are invalid | [optional] [default to undefined]
**enableList** | **Array&lt;string&gt;** | Currency list, where collateral_type&#x3D;1(custom) indicates the logic of addition | [optional] [default to undefined]
**disableList** | **Array&lt;string&gt;** | Cancellation list, indicating the logic of cancellation | [optional] [default to undefined]

## Enum: UnifiedCollateralReq.CollateralType

* `NUMBER_0` (value: `0`)

* `NUMBER_1` (value: `1`)


