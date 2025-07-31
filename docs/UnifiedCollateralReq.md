# UnifiedCollateralReq

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collateralType** | **number** | User-set collateral mode: 0(all)-All currencies as collateral, 1(custom)-Custom currencies as collateral. When collateral_type is 0(all), enable_list and disable_list parameters are invalid | [optional] [default to undefined]
**enableList** | **Array&lt;string&gt;** | Currency list, where collateral_type&#x3D;1(custom) indicates the addition logic | [optional] [default to undefined]
**disableList** | **Array&lt;string&gt;** | Disable list, indicating the disable logic | [optional] [default to undefined]

## Enum: UnifiedCollateralReq.CollateralType

* `NUMBER_0` (value: `0`)

* `NUMBER_1` (value: `1`)


