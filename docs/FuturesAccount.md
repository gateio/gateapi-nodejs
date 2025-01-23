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
**maintenanceMargin** | **string** | 头寸占用的维持保证金，适用于新经典账户保证金模式和统一账户模式 | [optional] [default to undefined]
**bonus** | **string** | Perpetual Contract Bonus | [optional] [default to undefined]
**enableEvolvedClassic** | **boolean** | 经典账户保证金模式,true-新模式,false-老模式 | [optional] [default to undefined]
**crossOrderMargin** | **string** | 全仓挂单保证金，适用于新经典账户保证金模式 | [optional] [default to undefined]
**crossInitialMargin** | **string** | 全仓初始保证金，适用于新经典账户保证金模式 | [optional] [default to undefined]
**crossMaintenanceMargin** | **string** | 全仓维持保证金，适用于新经典账户保证金模式 | [optional] [default to undefined]
**crossUnrealisedPnl** | **string** | 全仓未实现盈亏，适用于新经典账户保证金模式 | [optional] [default to undefined]
**crossAvailable** | **string** | 全仓可用额度，适用于新经典账户保证金模式 | [optional] [default to undefined]
**isolatedPositionMargin** | **string** | 逐仓仓位保证金，适用于新经典账户保证金模式 | [optional] [default to undefined]
**enableNewDualMode** | **boolean** | 是否开启新的双向持仓模式 | [optional] [default to undefined]
**marginMode** | **number** | 保证金模式，0-经典保证金模式，1-跨币种保证金模式，2-组合保证金模式 | [optional] [default to undefined]
**history** | [**FuturesAccountHistory**](FuturesAccountHistory.md) |  | [optional] [default to undefined]

