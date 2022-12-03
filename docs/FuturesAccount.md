# FuturesAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **string** | total is the balance after the user\&#39;s accumulated deposit, withdraw, profit and loss (including realized profit and loss, fund, fee and referral rebate), excluding unrealized profit and loss.  total &#x3D; SUM(history_dnw, history_pnl, history_fee, history_refr, history_fund) | [optional] [default to undefined]
**unrealisedPnl** | **string** | Unrealized PNL | [optional] [default to undefined]
**positionMargin** | **string** | Position margin | [optional] [default to undefined]
**orderMargin** | **string** | Order margin of unfinished orders | [optional] [default to undefined]
**available** | **string** | The available balance for transferring or trading | [optional] [default to undefined]
**point** | **string** | POINT amount | [optional] [default to undefined]
**currency** | **string** | Settle currency | [optional] [default to undefined]
**inDualMode** | **boolean** | Whether dual mode is enabled | [optional] [default to undefined]
**enableCredit** | **boolean** | Whether portfolio margin account mode is enabled | [optional] [default to undefined]
**positionInitialMargin** | **string** | Initial margin position, applicable to the portfolio margin account model | [optional] [default to undefined]
**maintenanceMargin** | **string** | Maintenance margin position, applicable to the portfolio margin account model | [optional] [default to undefined]
**bonus** | **string** | Perpetual Contract Bonus | [optional] [default to undefined]
**history** | [**FuturesAccountHistory**](FuturesAccountHistory.md) |  | [optional] [default to undefined]

