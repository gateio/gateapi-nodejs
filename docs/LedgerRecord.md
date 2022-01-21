# LedgerRecord

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Record ID | [optional] [readonly] [default to undefined]
**txid** | **string** | Hash record of the withdrawal | [optional] [readonly] [default to undefined]
**timestamp** | **string** | Operation time | [optional] [readonly] [default to undefined]
**amount** | **string** | Currency amount | [default to undefined]
**currency** | **string** | Currency name | [default to undefined]
**address** | **string** | Withdrawal address. Required for withdrawals | [optional] [default to undefined]
**memo** | **string** | Additional remarks with regards to the withdrawal | [optional] [default to undefined]
**status** | **string** | Record status.  - DONE: done - CANCEL: cancelled - REQUEST: requesting - MANUAL: pending manual approval - BCODE: GateCode operation - EXTPEND: pending confirm after sending - FAIL: pending confirm when fail - INVALID: invalid order - VERIFY: verifying - PROCES: processing - PEND: pending | [optional] [readonly] [default to undefined]
**chain** | **string** | Name of the chain used in withdrawals | [optional] [default to undefined]
**fee** | **string** | Fee | [optional] [default to undefined]

## Enum: LedgerRecord.Status

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


