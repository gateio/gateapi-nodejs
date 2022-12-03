# BatchFuturesOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**succeeded** | **boolean** | Whether the batch of orders succeeded | [optional] [default to undefined]
**label** | **string** | Error label, only exists if execution fails | [optional] [default to undefined]
**detail** | **string** | Error detail, only present if execution failed and details need to be given | [optional] [default to undefined]
**id** | **number** | Futures order ID | [optional] [readonly] [default to undefined]
**user** | **number** | User ID | [optional] [readonly] [default to undefined]
**createTime** | **number** | Creation time of order | [optional] [readonly] [default to undefined]
**finishTime** | **number** | Order finished time. Not returned if order is open | [optional] [readonly] [default to undefined]
**finishAs** | **string** | How the order was finished.  - filled: all filled - cancelled: manually cancelled - liquidated: cancelled because of liquidation - ioc: time in force is &#x60;IOC&#x60;, finish immediately - auto_deleveraged: finished by ADL - reduce_only: cancelled because of increasing position while &#x60;reduce-only&#x60; set- position_closed: cancelled because of position close  | [optional] [readonly] [default to undefined]
**status** | **string** | Order status  - &#x60;open&#x60;: waiting to be traded - &#x60;finished&#x60;: finished | [optional] [readonly] [default to undefined]
**contract** | **string** | Futures contract | [optional] [default to undefined]
**size** | **number** | Order size. Specify positive number to make a bid, and negative number to ask | [optional] [default to undefined]
**iceberg** | **number** | Display size for iceberg order. 0 for non-iceberg. Note that you will have to pay the taker fee for the hidden size | [optional] [default to undefined]
**price** | **string** | Order price. 0 for market order with &#x60;tif&#x60; set as &#x60;ioc&#x60; | [optional] [default to undefined]
**close** | **boolean** | Set as &#x60;true&#x60; to close the position, with &#x60;size&#x60; set to 0 | [optional] [default to undefined]
**isClose** | **boolean** | Is the order to close position | [optional] [readonly] [default to undefined]
**reduceOnly** | **boolean** | Set as &#x60;true&#x60; to be reduce-only order | [optional] [default to undefined]
**isReduceOnly** | **boolean** | Is the order reduce-only | [optional] [readonly] [default to undefined]
**isLiq** | **boolean** | Is the order for liquidation | [optional] [readonly] [default to undefined]
**tif** | **string** | Time in force  - gtc: GoodTillCancelled - ioc: ImmediateOrCancelled, taker only - poc: PendingOrCancelled, makes a post-only order that always enjoys a maker fee - fok: FillOrKill, fill either completely or none | [optional] [default to &#39;gtc&#39;]
**left** | **number** | Size left to be traded | [optional] [readonly] [default to undefined]
**fillPrice** | **string** | Fill price of the order | [optional] [readonly] [default to undefined]
**text** | **string** | User defined information. If not empty, must follow the rules below:  1. prefixed with &#x60;t-&#x60; 2. no longer than 28 bytes without &#x60;t-&#x60; prefix 3. can only include 0-9, A-Z, a-z, underscore(_), hyphen(-) or dot(.) Besides user defined information, reserved contents are listed below, denoting how the order is created:  - web: from web - api: from API - app: from mobile phones - auto_deleveraging: from ADL - liquidation: from liquidation - insurance: from insurance  | [optional] [default to undefined]
**tkfr** | **string** | Taker fee | [optional] [readonly] [default to undefined]
**mkfr** | **string** | Maker fee | [optional] [readonly] [default to undefined]
**refu** | **number** | Reference user ID | [optional] [readonly] [default to undefined]
**autoSize** | **string** | Set side to close dual-mode position. &#x60;close_long&#x60; closes the long side; while &#x60;close_short&#x60; the short one. Note &#x60;size&#x60; also needs to be set to 0 | [optional] [default to undefined]

## Enum: BatchFuturesOrder.FinishAs

* `Filled` (value: `'filled'`)

* `Cancelled` (value: `'cancelled'`)

* `Liquidated` (value: `'liquidated'`)

* `Ioc` (value: `'ioc'`)

* `AutoDeleveraged` (value: `'auto_deleveraged'`)

* `ReduceOnly` (value: `'reduce_only'`)

* `PositionClosed` (value: `'position_closed'`)

* `ReduceOut` (value: `'reduce_out'`)


## Enum: BatchFuturesOrder.Status

* `Open` (value: `'open'`)

* `Finished` (value: `'finished'`)


## Enum: BatchFuturesOrder.Tif

* `Gtc` (value: `'gtc'`)

* `Ioc` (value: `'ioc'`)

* `Poc` (value: `'poc'`)

* `Fok` (value: `'fok'`)


## Enum: BatchFuturesOrder.AutoSize

* `Long` (value: `'close_long'`)

* `Short` (value: `'close_short'`)


