# FuturesBatchAmendOrderRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **number** | 订单id，order_id和text至少传一个 | [optional] [default to undefined]
**text** | **string** | 用户自定义订单text，order_id和text至少传一个 | [optional] [default to undefined]
**size** | **number** | 新的委托大小。包括已成交委托的部分。 - 如果小于等于已成交数量，则撤销委托。 - 新的委托买卖方向必须跟原有的一致。 - 不能修改平仓单的size。 - 对于只减仓委托，如果调大size，则可能踢出其他只减仓委托。 - 如果不修改价格，则调小size不会影响深度排队，调大size会排到当前价位最后。 | [optional] [default to undefined]
**price** | **string** | New order price. | [optional] [default to undefined]
**amendText** | **string** | Custom info during amending order | [optional] [default to undefined]

