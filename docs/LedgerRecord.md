# LedgerRecord

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Record ID | [optional] [readonly] [default to undefined]
**txid** | **string** | Hash record of the withdrawal | [optional] [readonly] [default to undefined]
**withdrawOrderId** | **string** | Client order id, up to 32 length and can only include 0-9, A-Z, a-z, underscore(_), hyphen(-) or dot(.)  | [optional] [default to undefined]
**timestamp** | **string** | Operation time | [optional] [readonly] [default to undefined]
**amount** | **string** | Currency amount | [default to undefined]
**currency** | **string** | Currency name | [default to undefined]
**address** | **string** | Withdrawal address. Required for withdrawals | [optional] [default to undefined]
**memo** | **string** | Additional remarks with regards to the withdrawal | [optional] [default to undefined]
**status** | **string** | Record status.  - DONE: done - CANCEL: cancelled - REQUEST: requesting - MANUAL: pending manual approval - BCODE: GateCode operation - EXTPEND: pending confirm after sending - FAIL: pending confirm when fail - INVALID: invalid order - VERIFY: verifying - PROCES: processing - PEND: pending - DMOVE: required manual approval - SPLITPEND: the order is automatically split due to large amount | [optional] [readonly] [default to undefined]
**chain** | **string** | Name of the chain used in withdrawals | [default to undefined]

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

* `DMOVE` (value: `'DMOVE'`)

* `SPLITPEND` (value: `'SPLITPEND'`)


