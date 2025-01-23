# WithdrawalRecord

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Record ID | [optional] [readonly] [default to undefined]
**txid** | **string** | Hash record of the withdrawal | [optional] [readonly] [default to undefined]
**blockNumber** | **string** | 区块编号 | [optional] [readonly] [default to undefined]
**withdrawOrderId** | **string** | Client order id, up to 32 length and can only include 0-9, A-Z, a-z, underscore(_), hyphen(-) or dot(.)  | [optional] [default to undefined]
**timestamp** | **string** | Operation time | [optional] [readonly] [default to undefined]
**amount** | **string** | Currency amount | [default to undefined]
**fee** | **string** | fee | [optional] [readonly] [default to undefined]
**currency** | **string** | Currency name | [default to undefined]
**address** | **string** | Withdrawal address. Required for withdrawals | [optional] [default to undefined]
**memo** | **string** | Additional remarks with regards to the withdrawal | [optional] [default to undefined]
**status** | **string** | 交易状态  - DONE: 完成 (block_number &gt; 0 才算真的上链完成) - CANCEL: 已取消 - REQUEST: 请求中 - MANUAL: 待人工审核 - BCODE: 充值码操作 - EXTPEND: 已经发送等待确认 - FAIL: 链上失败等待确认 - INVALID: 无效订单 - VERIFY: 验证中 - PROCES: 处理中 - PEND: 处理中 - DMOVE: 待人工审核 - SPLITPEND: cny提现大于5w,自动分单 | [optional] [readonly] [default to undefined]
**chain** | **string** | Name of the chain used in withdrawals | [default to undefined]

## Enum: WithdrawalRecord.Status

* `DONE` (value: `'DONE'`)

* `CANCEL` (value: `'CANCEL'`)

* `REQUEST` (value: `'REQUEST'`)

* `MANUAL` (value: `'MANUAL'`)

* `BCODE` (value: `'BCODE'`)

* `EXTPEND` (value: `'EXTPEND'`)

* `FAIL` (value: `'FAIL'`)

* `INVALID` (value: `'INVALID'`)

* `VERIFY` (value: `'VERIFY'`)

* `PROCES` (value: `'PROCES'`)

* `PEND` (value: `'PEND'`)

* `DMOVE` (value: `'DMOVE'`)

* `SPLITPEND` (value: `'SPLITPEND'`)


