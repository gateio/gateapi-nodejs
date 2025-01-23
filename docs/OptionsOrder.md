# OptionsOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Options order ID | [optional] [readonly] [default to undefined]
**user** | **number** | User ID | [optional] [readonly] [default to undefined]
**createTime** | **number** | Creation time of order | [optional] [readonly] [default to undefined]
**finishTime** | **number** | Order finished time. Not returned if order is open | [optional] [readonly] [default to undefined]
**finishAs** | **string** | 结束方式，包括：  - filled: 完全成交 - cancelled: 用户撤销 - liquidated: 强制平仓撤销 - ioc: 未立即完全成交，因为tif设置为ioc - auto_deleveraged: 自动减仓撤销 - reduce_only: 增持仓位撤销，因为设置reduce_only或平仓 - position_closed: 因为仓位平掉了，所以挂单被撤掉 - reduce_out: 只减仓被排除的不容易成交的挂单 - mmp_cancelled: MMP撤销 | [optional] [readonly] [default to undefined]
**status** | **string** | Order status  - &#x60;open&#x60;: waiting to be traded - &#x60;finished&#x60;: finished | [optional] [readonly] [default to undefined]
**contract** | **string** | Contract name | [default to undefined]
**size** | **number** | Order size. Specify positive number to make a bid, and negative number to ask | [default to undefined]
**iceberg** | **number** | Display size for iceberg order. 0 for non-iceberg. Note that you will have to pay the taker fee for the hidden size | [optional] [default to undefined]
**price** | **string** | Order price. 0 for market order with &#x60;tif&#x60; set as &#x60;ioc&#x60; (USDT) | [optional] [default to undefined]
**close** | **boolean** | Set as &#x60;true&#x60; to close the position, with &#x60;size&#x60; set to 0 | [optional] [default to undefined]
**isClose** | **boolean** | Is the order to close position | [optional] [readonly] [default to undefined]
**reduceOnly** | **boolean** | Set as &#x60;true&#x60; to be reduce-only order | [optional] [default to undefined]
**isReduceOnly** | **boolean** | Is the order reduce-only | [optional] [readonly] [default to undefined]
**isLiq** | **boolean** | Is the order for liquidation | [optional] [readonly] [default to undefined]
**mmp** | **boolean** | 设置为 true 的时候，为MMP委托 | [optional] [default to undefined]
**isMmp** | **boolean** | 是否为MMP委托。对应请求中的&#x60;mmp&#x60;。 | [optional] [readonly] [default to undefined]
**tif** | **string** | Time in force  - gtc: GoodTillCancelled - ioc: ImmediateOrCancelled, taker only - poc: PendingOrCancelled, makes a post-only order that always enjoys a maker fee | [optional] [default to &#39;gtc&#39;]
**left** | **number** | Size left to be traded | [optional] [readonly] [default to undefined]
**fillPrice** | **string** | Fill price of the order | [optional] [readonly] [default to undefined]
**text** | **string** | User defined information. If not empty, must follow the rules below:  1. prefixed with &#x60;t-&#x60; 2. no longer than 28 bytes without &#x60;t-&#x60; prefix 3. can only include 0-9, A-Z, a-z, underscore(_), hyphen(-) or dot(.) Besides user defined information, reserved contents are listed below, denoting how the order is created:  - web: from web - api: from API - app: from mobile phones - auto_deleveraging: from ADL - liquidation: from liquidation - insurance: from insurance  | [optional] [default to undefined]
**tkfr** | **string** | Taker fee | [optional] [readonly] [default to undefined]
**mkfr** | **string** | Maker fee | [optional] [readonly] [default to undefined]
**refu** | **number** | Reference user ID | [optional] [readonly] [default to undefined]
**refr** | **string** | Referrer rebate | [optional] [readonly] [default to undefined]

## Enum: OptionsOrder.FinishAs

* `Filled` (value: `'filled'`)

* `Cancelled` (value: `'cancelled'`)

* `Liquidated` (value: `'liquidated'`)

* `Ioc` (value: `'ioc'`)

* `AutoDeleveraged` (value: `'auto_deleveraged'`)

* `ReduceOnly` (value: `'reduce_only'`)

* `PositionClosed` (value: `'position_closed'`)

* `ReduceOut` (value: `'reduce_out'`)

* `MmpCancelled` (value: `'mmp_cancelled'`)


## Enum: OptionsOrder.Status

* `Open` (value: `'open'`)

* `Finished` (value: `'finished'`)


## Enum: OptionsOrder.Tif

* `Gtc` (value: `'gtc'`)

* `Ioc` (value: `'ioc'`)

* `Poc` (value: `'poc'`)


