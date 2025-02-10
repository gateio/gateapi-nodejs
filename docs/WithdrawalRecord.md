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
**status** | **string** | Transaction status  - DONE: Completed (block_number &gt; 0 is considered to be truly completed) - CANCEL: Canceled - REQUEST: Requesting - MANUAL: Pending manual review - BCODE: Recharge code operation - EXTPEND: Sent awaiting confirmation - FAIL: Failure on the chain awaiting confirmation - INVALID: Invalid order - VERIFY: Verifying - PROCES: Processing - PEND: Processing - DMOVE: pending manual review - SPLITPEND: cny withdrawal is greater than 50,000, orders will be split automatically | [optional] [readonly] [default to undefined]
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


