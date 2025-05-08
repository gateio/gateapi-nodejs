# LedgerRecord

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Record ID | [optional] [readonly] [default to undefined]
**txid** | **string** | Hash record of the withdrawal | [optional] [readonly] [default to undefined]
**withdrawOrderId** | **string** | User-defined order number when withdrawing. Default is empty. When not empty, the specified user-defined order number record will be queried | [optional] [default to undefined]
**timestamp** | **string** | Operation time | [optional] [readonly] [default to undefined]
**amount** | **string** | Currency amount | [default to undefined]
**currency** | **string** | Currency name | [default to undefined]
**address** | **string** | Withdrawal address. Required for withdrawals | [optional] [default to undefined]
**memo** | **string** | Additional remarks with regards to the withdrawal | [optional] [default to undefined]
**withdrawId** | **string** | The withdrawal record id starts with w, such as: w1879219868. When withdraw_id is not empty, the value querys this withdrawal record and no longer querys according to time | [optional] [default to undefined]
**assetClass** | **string** | The currency type of withdrawal record is empty by default. It supports users to query the withdrawal records in the main and innovation areas on demand. Value range: SPOT, PILOT  SPOT: Main Zone  PILOT: Innovation Zone | [optional] [default to undefined]
**status** | **string** | Record status.  - DONE: done - CANCEL: cancelled - REQUEST: requesting - MANUAL: pending manual approval - BCODE: GateCode operation - EXTPEND: pending confirm after sending - FAIL: pending confirm when fail - INVALID: invalid order - VERIFY: verifying - PROCES: processing - PEND: pending - DMOVE: required manual approval - REVIEW: Under review | [optional] [readonly] [default to undefined]
**chain** | **string** | Name of the chain used in withdrawals | [default to undefined]

