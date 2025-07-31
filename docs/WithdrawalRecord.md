# WithdrawalRecord

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Record ID | [optional] [readonly] [default to undefined]
**txid** | **string** | Hash record of the withdrawal | [optional] [readonly] [default to undefined]
**blockNumber** | **string** | Block Number | [optional] [readonly] [default to undefined]
**withdrawOrderId** | **string** | Client order id, up to 32 length and can only include 0-9, A-Z, a-z, underscore(_), hyphen(-) or dot(.)  | [optional] [default to undefined]
**timestamp** | **string** | Operation time | [optional] [readonly] [default to undefined]
**amount** | **string** | Token amount | [default to undefined]
**fee** | **string** | fee | [optional] [readonly] [default to undefined]
**currency** | **string** | Currency name | [default to undefined]
**address** | **string** | Withdrawal address | [optional] [default to undefined]
**failReason** | **string** | Reason for withdrawal failure. Has a value when status &#x3D; CANCEL, empty for all other statuses | [optional] [default to undefined]
**timestamp2** | **string** | Withdrawal final time, i.e.: withdrawal cancellation time or withdrawal success time When status &#x3D; CANCEL, corresponds to cancellation time When status &#x3D; DONE and block_number &gt; 0, it is the withdrawal success time | [optional] [default to undefined]
**memo** | **string** | Additional remarks with regards to the withdrawal | [optional] [default to undefined]
**status** | **string** | Transaction status  - DONE: Completed (block_number &gt; 0 is considered to be truly completed) - CANCEL: Canceled - REQUEST: Requesting - MANUAL: Pending manual review - BCODE: Recharge code operation - EXTPEND: Sent awaiting confirmation - FAIL: Failure on the chain awaiting confirmation - INVALID: Invalid order - VERIFY: Verifying - PROCES: Processing - PEND: Processing - DMOVE: pending manual review - REVIEW: Under review | [optional] [readonly] [default to undefined]
**chain** | **string** | Name of the chain used in withdrawals | [default to undefined]

