# DepositRecord

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Record ID. | [optional] [readonly] [default to undefined]
**txid** | **string** | Hash record of the withdrawal. | [optional] [readonly] [default to undefined]
**withdrawOrderId** | **string** | Client order id, up to 32 length and can only include 0-9, A-Z, a-z, underscore(_), hyphen(-) or dot(.)  | [optional] [default to undefined]
**timestamp** | **string** | Operation time. | [optional] [readonly] [default to undefined]
**amount** | **string** | Currency amount. | [default to undefined]
**currency** | **string** | Currency name. | [default to undefined]
**address** | **string** | Withdrawal address. Required for withdrawals. | [optional] [default to undefined]
**memo** | **string** | Additional remarks with regards to the withdrawal. | [optional] [default to undefined]
**status** | **string** | Trading Status  - REVIEW: Recharge review (compliance review) - PEND: Processing - DONE: Waiting for funds to be unlocked - INVALID: Invalid data - TRACK: Track the number of confirmations, waiting to add funds to the user (spot) - BLOCKED: Rejected Recharge - DEP_CREDITED: Recharge to account, withdrawal is not unlocked | [optional] [readonly] [default to undefined]
**chain** | **string** | Name of the chain used in withdrawals. | [default to undefined]

