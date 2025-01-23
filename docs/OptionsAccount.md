# OptionsAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user** | **number** | User ID | [optional] [default to undefined]
**total** | **string** | 账户余额 | [optional] [default to undefined]
**positionValue** | **string** | 仓位价值，做多仓位价值为正，做空仓位价值为负 | [optional] [default to undefined]
**equity** | **string** | 账户权益，账户余额与仓位价值的和 | [optional] [default to undefined]
**shortEnabled** | **boolean** | If the account is allowed to short | [optional] [default to undefined]
**mmpEnabled** | **boolean** | 是否启用MMP | [optional] [default to undefined]
**liqTriggered** | **boolean** | 是否触发仓位强平 | [optional] [default to undefined]
**marginMode** | **number** | ｜ 保证金模式： - 0：经典现货保证金模式 - 1：跨币种保证金模式 - 2：组合保证金模式 | [optional] [default to undefined]
**unrealisedPnl** | **string** | Unrealized PNL | [optional] [default to undefined]
**initMargin** | **string** | Initial position margin | [optional] [default to undefined]
**maintMargin** | **string** | Position maintenance margin | [optional] [default to undefined]
**orderMargin** | **string** | Order margin of unfinished orders | [optional] [default to undefined]
**askOrderMargin** | **string** | 未完成卖单的保证金 | [optional] [default to undefined]
**bidOrderMargin** | **string** | 未完成买单的保证金 | [optional] [default to undefined]
**available** | **string** | Available balance to transfer out or trade | [optional] [default to undefined]
**point** | **string** | POINT amount | [optional] [default to undefined]
**currency** | **string** | Settle currency | [optional] [default to undefined]
**ordersLimit** | **number** | 未完成订单数量上限 | [optional] [default to undefined]
**positionNotionalLimit** | **number** | 名义价值上限，包含仓位以及未完成订单的名义价值 | [optional] [default to undefined]

## Enum: OptionsAccount.MarginMode

* `NUMBER_0` (value: `0`)

* `NUMBER_1` (value: `1`)

* `NUMBER_2` (value: `2`)


