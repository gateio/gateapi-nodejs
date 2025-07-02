# UnifiedCollateralReq

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collateralType** | **number** | 用户设置抵押物模式 0(all)-全部币种作为抵押物,1(custom)-自定义币种作为抵押物,collateral_type为0(all)时，enable_list与disable_list参数无效 | [optional] [default to undefined]
**enableList** | **Array&lt;string&gt;** | 币种列表，collateral_type&#x3D;1(custom)表示追加的逻辑 | [optional] [default to undefined]
**disableList** | **Array&lt;string&gt;** | 取消列表，表示取消的逻辑 | [optional] [default to undefined]

## Enum: UnifiedCollateralReq.CollateralType

* `NUMBER_0` (value: `0`)

* `NUMBER_1` (value: `1`)


