# GateApi.LedgerRecord

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Record ID | [optional] [readonly] [default to undefined]
**txid** | **string** | Hash record of the withdrawal | [optional] [readonly] [default to undefined]
**timestamp** | **string** | Record time | [optional] [readonly] [default to undefined]
**amount** | **string** | Trade amount | [default to undefined]
**currency** | **string** | Record currency | [default to undefined]
**address** | **string** | Withdrawal address. Required for withdrawals | [optional] [default to undefined]
**memo** | **string** | Extra withdrawal memo | [optional] [default to undefined]
**status** | **string** | Record status.  - DONE: done - CANCEL: cancelled - REQUEST: requesting - MANUAL: waiting for manual approval - BCODE: GateCode operation | [optional] [readonly] [default to undefined]

## Enum: LedgerRecord.Status

* `DONE` (value: `'DONE'`)

* `CANCEL` (value: `'CANCEL'`)

* `REQUEST` (value: `'REQUEST'`)

* `MANUAL` (value: `'MANUAL'`)

* `BCODE` (value: `'BCODE'`)


