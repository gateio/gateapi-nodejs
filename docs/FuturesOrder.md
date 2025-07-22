# FuturesOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Futures order ID. | [optional] [readonly] [default to undefined]
**user** | **number** | User ID. | [optional] [readonly] [default to undefined]
**createTime** | **number** | Creation time of order. | [optional] [readonly] [default to undefined]
**finishTime** | **number** | Order finished time. Not returned if order is open. | [optional] [readonly] [default to undefined]
**finishAs** | **string** | How the order was finished.  - filled: all filled - cancelled: manually cancelled - liquidated: cancelled because of liquidation - ioc: time in force is &#x60;IOC&#x60;, finish immediately - auto_deleveraged: finished by ADL - increasing position while &#x60;reduce-only&#x60; set- position_closed: cancelled because of position close - position_closed: canceled because the position was closed - reduce_out: only reduce positions by excluding hard-to-fill orders - stp: cancelled because self trade prevention  | [optional] [readonly] [default to undefined]
**status** | **string** | Order status  - &#x60;open&#x60;: waiting to be traded - &#x60;finished&#x60;: finished | [optional] [readonly] [default to undefined]
**contract** | **string** | Futures contract. | [default to undefined]
**size** | **number** | Order size. Specify positive number to make a bid, and negative number to ask | [default to undefined]
**iceberg** | **number** | Display size for iceberg order. 0 for non-iceberg. Note that you will have to pay the taker fee for the hidden size | [optional] [default to undefined]
**price** | **string** | Order price. 0 for market order with &#x60;tif&#x60; set as &#x60;ioc&#x60;. | [optional] [default to undefined]
**close** | **boolean** | Set as &#x60;true&#x60; to close the position, with &#x60;size&#x60; set to 0. | [optional] [default to undefined]
**isClose** | **boolean** | Is the order to close position. | [optional] [readonly] [default to undefined]
**reduceOnly** | **boolean** | Set as &#x60;true&#x60; to be reduce-only order. | [optional] [default to undefined]
**isReduceOnly** | **boolean** | Is the order reduce-only. | [optional] [readonly] [default to undefined]
**isLiq** | **boolean** | Is the order for liquidation. | [optional] [readonly] [default to undefined]
**tif** | **string** | Time in force  - gtc: GoodTillCancelled - ioc: ImmediateOrCancelled, taker only - poc: PendingOrCancelled, makes a post-only order that always enjoys a maker fee - fok: FillOrKill, fill either completely or none | [optional] [default to &#39;gtc&#39;]
**left** | **number** | Size left to be traded. | [optional] [readonly] [default to undefined]
**fillPrice** | **string** | Fill price of the order. | [optional] [readonly] [default to undefined]
**text** | **string** | Order custom information, users can use this field to set a custom ID, and the user-defined field must meet the following conditions:  1. Must start with &#x60;t-&#x60; 2. If &#x60;t-&#x60; is not calculated, the length cannot exceed 28 bytes 3. The input content can only contain numbers, letters, underscores (_), midscores (-) or dots (.)  In addition to user-defined information, the following are internal reserved fields that identifies the source of the order:  - web: web page - api: API call - app: mobile terminal - auto_deleveraging: Automatic position reduction - liquidation: Liquidation under the classic account’s old liquidation mode - liq-x: new liquidation mode (isolated, cross margin one-way mode, non-hedging part of cross margin hedge mode) b. Liquidation under isolated margin in unified account single currency margin mode  - hedge-liq-x: Liquidation under the new liquidation mode of the classic account hedge mode, the cross margin hedged part undergoes liquidation, meaning both long and short positions are liquidated simultaneously. - pm_liquidate: Unified account multi-currency margin mode liquidation - comb_margin_liquidate: Unified account portfolio margin mode liquidation - scm_liquidate: Unified account single currency margin mode liquidation - insurance: insurance | [optional] [default to undefined]
**tkfr** | **string** | Taker fee. | [optional] [readonly] [default to undefined]
**mkfr** | **string** | Maker fee. | [optional] [readonly] [default to undefined]
**refu** | **number** | Reference user ID. | [optional] [readonly] [default to undefined]
**autoSize** | **string** | Set side to close dual-mode position. &#x60;close_long&#x60; closes the long side; while &#x60;close_short&#x60; the short one. Note &#x60;size&#x60; also needs to be set to 0 | [optional] [default to undefined]
**stpId** | **number** | Orders between users in the same &#x60;stp_id&#x60; group are not allowed to be self-traded  1. If the &#x60;stp_id&#x60; of two orders being matched is non-zero and equal, they will not be executed. Instead, the corresponding strategy will be executed based on the &#x60;stp_act&#x60; of the taker. 2. &#x60;stp_id&#x60; returns &#x60;0&#x60; by default for orders that have not been set for &#x60;STP group&#x60; | [optional] [readonly] [default to undefined]
**stpAct** | **string** | Self-Trading Prevention Action. Users can use this field to set self-trade prevetion strategies  1. After users join the &#x60;STP Group&#x60;, he can pass &#x60;stp_act&#x60; to limit the user\&#39;s self-trade prevetion strategy. If &#x60;stp_act&#x60; is not passed, the default is &#x60;cn&#x60; strategy。 2. When the user does not join the &#x60;STP group&#x60;, an error will be returned when passing the &#x60;stp_act&#x60; parameter。 3. If the user did not use \&#39;stp_act\&#39; when placing the order, \&#39;stp_act\&#39; will return \&#39;-\&#39;  - cn: Cancel newest, Cancel new orders and keep old ones - co: Cancel oldest, new ones - cb: Cancel both, Both old and new orders will be cancelled | [optional] [default to undefined]
**amendText** | **string** | The custom data that the user remarked when amending the order. | [optional] [readonly] [default to undefined]

## Enum: FuturesOrder.FinishAs

* `Filled` (value: `'filled'`)

* `Cancelled` (value: `'cancelled'`)

* `Liquidated` (value: `'liquidated'`)

* `Ioc` (value: `'ioc'`)

* `AutoDeleveraged` (value: `'auto_deleveraged'`)

* `ReduceOnly` (value: `'reduce_only'`)

* `PositionClosed` (value: `'position_closed'`)

* `ReduceOut` (value: `'reduce_out'`)

* `Stp` (value: `'stp'`)


## Enum: FuturesOrder.Status

* `Open` (value: `'open'`)

* `Finished` (value: `'finished'`)


## Enum: FuturesOrder.Tif

* `Gtc` (value: `'gtc'`)

* `Ioc` (value: `'ioc'`)

* `Poc` (value: `'poc'`)

* `Fok` (value: `'fok'`)


## Enum: FuturesOrder.AutoSize

* `Long` (value: `'close_long'`)

* `Short` (value: `'close_short'`)


## Enum: FuturesOrder.StpAct

* `Co` (value: `'co'`)

* `Cn` (value: `'cn'`)

* `Cb` (value: `'cb'`)

* `Minus` (value: `'-'`)


