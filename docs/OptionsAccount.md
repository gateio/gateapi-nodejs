# OptionsAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user** | **number** | User ID | [optional] [default to undefined]
**total** | **string** | Account balance | [optional] [default to undefined]
**positionValue** | **string** | Position value, long position value is positive, short position value is negative | [optional] [default to undefined]
**equity** | **string** | Account equity, the sum of account balance and position value | [optional] [default to undefined]
**shortEnabled** | **boolean** | If the account is allowed to short | [optional] [default to undefined]
**mmpEnabled** | **boolean** | Whether to enable MMP | [optional] [default to undefined]
**liqTriggered** | **boolean** | Whether to trigger position liquidation | [optional] [default to undefined]
**marginMode** | **number** | ｜ 保证金模式： - 0：经典现货保证金模式 - 1：跨币种保证金模式 - 2：组合保证金模式 | [optional] [default to undefined]
**unrealisedPnl** | **string** | Unrealized PNL | [optional] [default to undefined]
**initMargin** | **string** | Initial position margin | [optional] [default to undefined]
**maintMargin** | **string** | Position maintenance margin | [optional] [default to undefined]
**orderMargin** | **string** | Order margin of unfinished orders | [optional] [default to undefined]
**askOrderMargin** | **string** | Margin for outstanding sell orders | [optional] [default to undefined]
**bidOrderMargin** | **string** | Margin for outstanding buy orders | [optional] [default to undefined]
**available** | **string** | Available balance to transfer out or trade | [optional] [default to undefined]
**point** | **string** | POINT amount | [optional] [default to undefined]
**currency** | **string** | Settle currency | [optional] [default to undefined]
**ordersLimit** | **number** | Maximum number of outstanding orders | [optional] [default to undefined]
**positionNotionalLimit** | **number** | Notional value upper limit, including the nominal value of positions and outstanding orders | [optional] [default to undefined]

## Enum: OptionsAccount.MarginMode

* `NUMBER_0` (value: `0`)

* `NUMBER_1` (value: `1`)

* `NUMBER_2` (value: `2`)


