# UidPushOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Order ID | [optional] [default to undefined]
**pushUid** | **number** | Initiator User ID | [optional] [default to undefined]
**receiveUid** | **number** | Recipient User ID | [optional] [default to undefined]
**currency** | **string** | Currency name | [optional] [default to undefined]
**amount** | **string** | Transfer amount | [optional] [default to undefined]
**createTime** | **number** | Creation time | [optional] [default to undefined]
**status** | **string** | Withdrawal Status  - CREATING: Creating - PENDING: Waiting for receiving(Please contact the other party to accept the transfer on the Gate official website) - CANCELLING: Cancelling - CANCELLED: Revoked - REFUSING: Rejection - REFUSED: Rejected - RECEIVING: Receiving - RECEIVED: Success | [optional] [default to undefined]
**message** | **string** | PENDING Reason Tips | [optional] [default to undefined]
**transactionType** | **string** | Order Type | [optional] [default to undefined]

