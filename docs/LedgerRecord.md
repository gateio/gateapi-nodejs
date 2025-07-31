# LedgerRecord

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Record ID | [optional] [readonly] [default to undefined]
**txid** | **string** | Hash record of the withdrawal | [optional] [readonly] [default to undefined]
**withdrawOrderId** | **string** | User-defined order number for withdrawal. Default is empty. When not empty, the specified user-defined order number record will be queried | [optional] [default to undefined]
**timestamp** | **string** | Operation time | [optional] [readonly] [default to undefined]
**amount** | **string** | Token amount | [default to undefined]
**currency** | **string** | Currency name | [default to undefined]
**address** | **string** | Withdrawal address. Required for withdrawals | [optional] [default to undefined]
**memo** | **string** | Additional remarks with regards to the withdrawal | [optional] [default to undefined]
**withdrawId** | **string** | Withdrawal record ID starts with \&#39;w\&#39;, such as: w1879219868. When withdraw_id is not empty, only this specific withdrawal record will be queried, and time-based querying will be disabled | [optional] [default to undefined]
**assetClass** | **string** | Withdrawal record currency type, empty by default. Supports users to query withdrawal records in main area and innovation area on demand. Valid values: SPOT, PILOT  SPOT: Main area PILOT: Innovation area | [optional] [default to undefined]
**status** | **string** | Transaction status  - DONE: Completed - CANCEL: Cancelled - REQUEST: Requesting - MANUAL: Pending manual review - BCODE: GateCode operation - EXTPEND: Sent, waiting for confirmation - FAIL: Failed on chain, waiting for confirmation - INVALID: Invalid order - VERIFY: Verifying - PROCES: Processing - PEND: Processing - DMOVE: Pending manual review - REVIEW: Under review | [optional] [readonly] [default to undefined]
**chain** | **string** | Name of the chain used in withdrawals | [default to undefined]

