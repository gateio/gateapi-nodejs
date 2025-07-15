# FuturesAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **string** | total is the balance after the user\&#39;s accumulated deposit, withdraw, profit and loss (including realized profit and loss, fund, fee and referral rebate), excluding unrealized profit and loss.  total &#x3D; SUM(history_dnw, history_pnl, history_fee, history_refr, history_fund) | [optional] [default to undefined]
**unrealisedPnl** | **string** | Unrealized PNL | [optional] [default to undefined]
**positionMargin** | **string** | Position margin | [optional] [default to undefined]
**orderMargin** | **string** | Order margin of unfinished orders | [optional] [default to undefined]
**available** | **string** | The available balance for transferring or trading(including bonus.  Bonus can\&#39;t be be withdrawn. The transfer amount needs to deduct the bonus) | [optional] [default to undefined]
**point** | **string** | POINT amount | [optional] [default to undefined]
**currency** | **string** | Settle currency | [optional] [default to undefined]
**inDualMode** | **boolean** | Whether dual mode is enabled | [optional] [default to undefined]
**enableCredit** | **boolean** | Whether portfolio margin account mode is enabled | [optional] [default to undefined]
**positionInitialMargin** | **string** | Initial margin position, applicable to the portfolio margin account model | [optional] [default to undefined]
**maintenanceMargin** | **string** | The maintenance deposit occupied by the position is suitable for the new classic account margin model and unified account model | [optional] [default to undefined]
**bonus** | **string** | Perpetual Contract Bonus | [optional] [default to undefined]
**enableEvolvedClassic** | **boolean** | Classic account margin mode, true-new mode, false-old mode | [optional] [default to undefined]
**crossOrderMargin** | **string** | Full -warehouse hanging order deposit, suitable for the new classic account margin model | [optional] [default to undefined]
**crossInitialMargin** | **string** | The initial security deposit of the full warehouse is suitable for the new classic account margin model | [optional] [default to undefined]
**crossMaintenanceMargin** | **string** | Maintain deposit in full warehouse, suitable for new classic account margin models | [optional] [default to undefined]
**crossUnrealisedPnl** | **string** | The full warehouse does not achieve profit and loss, suitable for the new classic account margin model | [optional] [default to undefined]
**crossAvailable** | **string** | Full warehouse available amount, suitable for the new classic account margin model | [optional] [default to undefined]
**crossMarginBalance** | **string** | Full margin balance, suitable for the new classic account margin model | [optional] [default to undefined]
**crossMmr** | **string** | Maintain margin ratio for the full position, suitable for the new classic account margin model | [optional] [default to undefined]
**crossImr** | **string** | The initial margin rate of the full position is suitable for the new classic account margin model | [optional] [default to undefined]
**isolatedPositionMargin** | **string** | Ware -position margin, suitable for the new classic account margin model | [optional] [default to undefined]
**enableNewDualMode** | **boolean** | Whether to open a new two-way position mode | [optional] [default to undefined]
**marginMode** | **number** | Margin mode, 0-classic margin mode, 1-cross-currency margin mode, 2-combined margin mode | [optional] [default to undefined]
**enableTieredMm** | **boolean** | Whether to enable tiered maintenance margin calculation | [optional] [default to undefined]
**history** | [**FuturesAccountHistory**](FuturesAccountHistory.md) |  | [optional] [default to undefined]

