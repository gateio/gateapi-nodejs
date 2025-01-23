# UidPushOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Order ID | [optional] [default to undefined]
**pushUid** | **number** | 发起方用户ID | [optional] [default to undefined]
**receiveUid** | **number** | 接收方用户ID | [optional] [default to undefined]
**currency** | **string** | Currency name | [optional] [default to undefined]
**amount** | **string** | 转账数量 | [optional] [default to undefined]
**createTime** | **number** | Creation time | [optional] [default to undefined]
**status** | **string** | 提现状态:  - CREATING: 创建中 - PENDING: 等待接收 (请联系对方在 Gate 官网接受转帐) - CANCELLING: 撤销中 - CANCELLED: 已撤销 - REFUSING: 拒绝中 - REFUSED: 已拒绝 - RECEIVING: 正在接收 - RECEIVED: 成功 | [optional] [default to undefined]
**message** | **string** | PENDING原因提示 | [optional] [default to undefined]
**transactionType** | **string** | 订单类型 | [optional] [default to undefined]

