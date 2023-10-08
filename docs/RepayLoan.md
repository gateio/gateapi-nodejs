# RepayLoan

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **number** | 订单id | [default to undefined]
**repayAmount** | **string** | 还款数量，部分还款时候是必须 | [default to undefined]
**repaidAll** | **boolean** | 还款方式, 为&#x60;true&#x60;时全部还款, 为&#x60;false&#x60;时部分还款; 当为&#x60;false&#x60;部分还款时，不允许repay_amount参数大于用户剩余待还 | [default to undefined]

