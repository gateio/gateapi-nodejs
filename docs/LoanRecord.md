# LoanRecord

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Loan record ID | [optional] [default to undefined]
**loanId** | **string** | Loan ID the record belongs to | [optional] [default to undefined]
**createTime** | **string** | Loan time | [optional] [default to undefined]
**expireTime** | **string** | Expiration time | [optional] [default to undefined]
**status** | **string** | Loan record status | [optional] [default to undefined]
**borrowUserId** | **string** | Garbled user ID | [optional] [default to undefined]
**currency** | **string** | Loan currency | [optional] [default to undefined]
**rate** | **string** | Loan rate | [optional] [default to undefined]
**amount** | **string** | Loan amount | [optional] [default to undefined]
**days** | **number** | Loan days | [optional] [default to undefined]
**autoRenew** | **boolean** | Whether the record will auto renew on expiration | [optional] [default to undefined]
**repaid** | **string** | Repaid amount | [optional] [default to undefined]
**paidInterest** | **string** | Repaid interest | [optional] [readonly] [default to undefined]
**unpaidInterest** | **string** | Interest not repaid | [optional] [readonly] [default to undefined]

## Enum: LoanRecord.Status

* `Loaned` (value: `'loaned'`)

* `Finished` (value: `'finished'`)


