# UnifiedAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **number** | User ID | [optional] [default to undefined]
**refreshTime** | **number** | Time of the most recent refresh | [optional] [default to undefined]
**locked** | **boolean** | 账户是否被锁定,在跨币种保证金/组合保证金模式下有效，其他如单币种保证金模式下是false | [optional] [default to undefined]
**balances** | [**{ [key: string]: UnifiedBalance; }**](UnifiedBalance.md) |  | [optional] [default to undefined]
**total** | **string** | 折算成 USD 的账户总资产，即所有币种 &#x60;(available + freeze) * price&#x60; 之和,(已废弃，待下线字段，用unified_account_total代替) | [optional] [default to undefined]
**borrowed** | **string** | 折算成 USD 的账户总借入数量，即所有币种(不包括点卡)的 &#x60;borrowed * price&#x60; 之和,在跨币种保证金/组合保证金模式下有效，其他如单币种保证金模式下是0 | [optional] [default to undefined]
**totalInitialMargin** | **string** | 总初始保证金,在跨币种保证金/组合保证金模式下有效，其他如单币种保证金模式下是0 | [optional] [default to undefined]
**totalMarginBalance** | **string** | 总保证金余额,在跨币种保证金/组合保证金模式下有效，其他如单币种保证金模式下是0 | [optional] [default to undefined]
**totalMaintenanceMargin** | **string** | 总维持保证金,在跨币种保证金/组合保证金模式下有效，其他如单币种保证金模式下是0 | [optional] [default to undefined]
**totalInitialMarginRate** | **string** | 总初始保证金率,在跨币种保证金/组合保证金模式下有效，其他如单币种保证金模式下是0 | [optional] [default to undefined]
**totalMaintenanceMarginRate** | **string** | 总维持保证金率,在跨币种保证金/组合保证金模式下有效，其他如单币种保证金模式下是0 | [optional] [default to undefined]
**totalAvailableMargin** | **string** | 可用的保证金额度,在跨币种保证金/组合保证金模式下有效，其他如单币种保证金模式下是0 | [optional] [default to undefined]
**unifiedAccountTotal** | **string** | 统一账户总资产,在单币种保证金/跨币种保证金/组合保证金模式模式下有效 | [optional] [default to undefined]
**unifiedAccountTotalLiab** | **string** | 统一账户总借贷,在跨币种保证金/组合保证金模式下有效，其他如单币种保证金模式下是0 | [optional] [default to undefined]
**unifiedAccountTotalEquity** | **string** | 统一账户总权益,在单币种保证金/跨币种保证金/组合保证金模式模式下有效 | [optional] [default to undefined]
**leverage** | **string** | 实际杠杆,在跨币种保证金/组合保证金模式下有效 | [optional] [readonly] [default to undefined]
**spotOrderLoss** | **string** | 总挂单损失,单位USDT,在跨币种保证金/组合保证金模式下有效，其他如单币种保证金模式下是0 | [optional] [default to undefined]
**spotHedge** | **boolean** | 现货对冲状态, true - 启用，false - 未启用 | [optional] [default to undefined]
**useFunding** | **boolean** | 是否将余币宝理财资金作为保证金 | [optional] [default to undefined]

