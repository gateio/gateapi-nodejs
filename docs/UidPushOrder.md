# UidPushOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Order ID | [optional] [default to undefined]
**pushUid** | **number** | Initiator User ID | [optional] [default to undefined]
**receiveUid** | **number** | Recipient User ID | [optional] [default to undefined]
**currency** | **string** | Currency name | [optional] [default to undefined]
**amount** | **string** | Transfer amount | [optional] [default to undefined]
**createTime** | **number** | Created time | [optional] [default to undefined]
**status** | **string** | Withdrawal status:  - CREATING: Creating - PENDING: Waiting for recipient (Please contact the recipient to accept the transfer on Gate official website) - CANCELLING: Cancelling - CANCELLED: Cancelled - REFUSING: Refusing - REFUSED: Refused - RECEIVING: Receiving - RECEIVED: Success | [optional] [default to undefined]
**message** | **string** | PENDING reason tips | [optional] [default to undefined]
**transactionType** | **string** | Order Type | [optional] [default to undefined]

