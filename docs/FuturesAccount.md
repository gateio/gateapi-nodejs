# FuturesAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **string** | total is the balance after the user\&#39;s accumulated deposit, withdraw, profit and loss (including realized profit and loss, fund, fee and referral rebate), excluding unrealized profit and loss.  total &#x3D; SUM(history_dnw, history_pnl, history_fee, history_refr, history_fund) | [optional] [default to undefined]
**unrealisedPnl** | **string** | Unrealized PNL | [optional] [default to undefined]
**positionMargin** | **string** | Position margin | [optional] [default to undefined]
**orderMargin** | **string** | Order margin of unfinished orders | [optional] [default to undefined]
**available** | **string** | Available balance for transferring or trading (including bonus. Bonus cannot be withdrawn, so transfer amount needs to deduct bonus) | [optional] [default to undefined]
**point** | **string** | Point card amount | [optional] [default to undefined]
**currency** | **string** | Settlement currency | [optional] [default to undefined]
**inDualMode** | **boolean** | Whether dual mode is enabled | [optional] [default to undefined]
**enableCredit** | **boolean** | Whether portfolio margin account mode is enabled | [optional] [default to undefined]
**positionInitialMargin** | **string** | Initial margin occupied by positions, applicable to unified account mode | [optional] [default to undefined]
**maintenanceMargin** | **string** | Maintenance margin occupied by positions, applicable to new classic account margin mode and unified account mode | [optional] [default to undefined]
**bonus** | **string** | Bonus | [optional] [default to undefined]
**enableEvolvedClassic** | **boolean** | Classic account margin mode, true-new mode, false-old mode | [optional] [default to undefined]
**crossOrderMargin** | **string** | Cross margin order margin, applicable to new classic account margin mode | [optional] [default to undefined]
**crossInitialMargin** | **string** | Cross margin initial margin, applicable to new classic account margin mode | [optional] [default to undefined]
**crossMaintenanceMargin** | **string** | Cross margin maintenance margin, applicable to new classic account margin mode | [optional] [default to undefined]
**crossUnrealisedPnl** | **string** | Cross margin unrealized P&amp;L, applicable to new classic account margin mode | [optional] [default to undefined]
**crossAvailable** | **string** | Cross margin available balance, applicable to new classic account margin mode | [optional] [default to undefined]
**crossMarginBalance** | **string** | Cross margin balance, applicable to new classic account margin mode | [optional] [default to undefined]
**crossMmr** | **string** | Cross margin maintenance margin rate, applicable to new classic account margin mode | [optional] [default to undefined]
**crossImr** | **string** | Cross margin initial margin rate, applicable to new classic account margin mode | [optional] [default to undefined]
**isolatedPositionMargin** | **string** | Isolated position margin, applicable to new classic account margin mode | [optional] [default to undefined]
**enableNewDualMode** | **boolean** | Whether to open a new two-way position mode | [optional] [default to undefined]
**marginMode** | **number** | Margin mode, 0-classic margin mode, 1-cross-currency margin mode, 2-combined margin mode | [optional] [default to undefined]
**enableTieredMm** | **boolean** | Whether to enable tiered maintenance margin calculation | [optional] [default to undefined]
**history** | [**FuturesAccountHistory**](FuturesAccountHistory.md) |  | [optional] [default to undefined]

