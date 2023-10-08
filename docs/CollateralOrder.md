# CollateralOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **number** | 订单id | [optional] [default to undefined]
**collateralCurrency** | **string** | 质押币种 | [optional] [default to undefined]
**collateralAmount** | **string** | 质押数量 | [optional] [default to undefined]
**borrowCurrency** | **string** | 借款币种 | [optional] [default to undefined]
**borrowAmount** | **string** | 借款数量 | [optional] [default to undefined]
**repaidAmount** | **string** | 已还款数量 | [optional] [default to undefined]
**repaidPrincipal** | **string** | 已还本金 | [optional] [default to undefined]
**repaidInterest** | **string** | 已还利息 | [optional] [default to undefined]
**initLtv** | **string** | 初始质押率 | [optional] [default to undefined]
**currentLtv** | **string** | 当前质押率 | [optional] [default to undefined]
**liquidateLtv** | **string** | 平仓质押率 | [optional] [default to undefined]
**status** | **string** | 订单状态: - initial: 下单初始状态 - collateral_deducted: 扣除质押物成功 - collateral_returning: 放款失败-待退回质押物 - lent: 放款成功 - repaying: 还款中 - liquidating: 平仓中 - finished: 已完成 - closed_liquidated: 已结束-平仓还款结束 | [optional] [default to undefined]
**borrowTime** | **number** | 借款时间，时间戳，单位秒 | [optional] [default to undefined]
**leftRepayTotal** | **string** | 待还本息（待还本金+待还利息） | [optional] [default to undefined]
**leftRepayPrincipal** | **string** | 待还本金 | [optional] [default to undefined]
**leftRepayInterest** | **string** | 待还利息 | [optional] [default to undefined]

