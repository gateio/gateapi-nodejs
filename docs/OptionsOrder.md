# OptionsOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Options order ID | [optional] [readonly] [default to undefined]
**user** | **number** | User ID | [optional] [readonly] [default to undefined]
**createTime** | **number** | Creation time of order | [optional] [readonly] [default to undefined]
**finishTime** | **number** | Order finished time. Not returned if order is open | [optional] [readonly] [default to undefined]
**finishAs** | **string** | Order finish reason:  - filled: Fully filled - cancelled: User cancelled - liquidated: Cancelled due to liquidation - ioc: Not immediately fully filled due to IOC time-in-force setting - auto_deleveraged: Cancelled due to auto-deleveraging - reduce_only: Cancelled due to position increase while reduce-only is set - position_closed: Cancelled because the position was closed - reduce_out: Only reduce positions by excluding hard-to-fill orders - mmp_cancelled: Cancelled by MMP | [optional] [readonly] [default to undefined]
**status** | **string** | Order status  - &#x60;open&#x60;: Pending - &#x60;finished&#x60;: Completed | [optional] [readonly] [default to undefined]
**contract** | **string** | Options identifier | [default to undefined]
**size** | **number** | Required. Trading quantity. Positive for buy, negative for sell. Set to 0 for close position orders. | [default to undefined]
**iceberg** | **number** | Display size for iceberg orders. 0 for non-iceberg orders. Note that hidden portions are charged taker fees. | [optional] [default to undefined]
**price** | **string** | Order price. Price of 0 with &#x60;tif&#x60; set as &#x60;ioc&#x60; represents market order (quote currency) | [optional] [default to undefined]
**close** | **boolean** | Set as &#x60;true&#x60; to close the position, with &#x60;size&#x60; set to 0 | [optional] [default to undefined]
**isClose** | **boolean** | Is the order to close position | [optional] [readonly] [default to undefined]
**reduceOnly** | **boolean** | Set as &#x60;true&#x60; to be reduce-only order | [optional] [default to undefined]
**isReduceOnly** | **boolean** | Is the order reduce-only | [optional] [readonly] [default to undefined]
**isLiq** | **boolean** | Is the order for liquidation | [optional] [readonly] [default to undefined]
**mmp** | **boolean** | When set to true, it is an MMP order | [optional] [default to undefined]
**isMmp** | **boolean** | Whether it is an MMP order. Corresponds to &#x60;mmp&#x60; in the request | [optional] [readonly] [default to undefined]
**tif** | **string** | Time in force strategy. Market orders currently only support IOC mode  - gtc: Good Till Cancelled - ioc: Immediate Or Cancelled, execute immediately or cancel, taker only - poc: Pending Or Cancelled, passive order, maker only | [optional] [default to &#39;gtc&#39;]
**left** | **number** | Unfilled quantity | [optional] [readonly] [default to undefined]
**fillPrice** | **string** | Fill price | [optional] [readonly] [default to undefined]
**text** | **string** | User defined information. If not empty, must follow the rules below:  1. prefixed with &#x60;t-&#x60; 2. no longer than 28 bytes without &#x60;t-&#x60; prefix 3. can only include 0-9, A-Z, a-z, underscore(_), hyphen(-) or dot(.) Besides user defined information, reserved contents are listed below, denoting how the order is created:  - web: from web - api: from API - app: from mobile phones - auto_deleveraging: from ADL - liquidation: from liquidation - insurance: from insurance  | [optional] [default to undefined]
**tkfr** | **string** | Taker fee | [optional] [readonly] [default to undefined]
**mkfr** | **string** | Maker fee | [optional] [readonly] [default to undefined]
**refu** | **number** | Referrer user ID | [optional] [readonly] [default to undefined]
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


