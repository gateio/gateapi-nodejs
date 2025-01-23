# UnifiedBalance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available** | **string** | 可用额度,在单币种保证金/跨币种保证金/组合保证金模式模式下有效，不同模式计算不一样 | [optional] [default to undefined]
**freeze** | **string** | 被锁定的额度,在单币种保证金/跨币种保证金/组合保证金模式模式下有效 | [optional] [default to undefined]
**borrowed** | **string** | 借入额度,在跨币种保证金/组合保证金模式下有效，其他如单币种保证金模式下是0 | [optional] [default to undefined]
**negativeLiab** | **string** | 负余额借贷,在跨币种保证金/组合保证金模式下有效，其他如单币种保证金模式下是0 | [optional] [default to undefined]
**futuresPosLiab** | **string** | 合约开仓借币(已废弃,待下线字段) | [optional] [default to undefined]
**equity** | **string** | 权益,在单币种保证金/跨币种保证金/组合保证金模式模式下有效 | [optional] [default to undefined]
**totalFreeze** | **string** | 总占用(已废弃,待下线字段) | [optional] [default to undefined]
**totalLiab** | **string** | 总借款,在跨币种保证金/组合保证金模式下有效，其他如单币种保证金模式下是0 | [optional] [default to undefined]
**spotInUse** | **string** | 现货对冲占用数量,在组合保证金模式下有效，其他如单币种、跨币种保证金模式下是0 | [optional] [default to undefined]
**funding** | **string** | 余币宝理财数量,在余币宝理财作为统一账户保证金开关打开有效 | [optional] [default to undefined]
**fundingVersion** | **string** | 余币宝理财版本号 | [optional] [default to undefined]
**crossBalance** | **string** | 全仓余额,在单币种保证金模式下有效，其他如跨币种保证金/组合保证金模式下是0 | [optional] [default to undefined]
**isoBalance** | **string** | 逐仓余额,在单币种保证金模式下有效，其他如跨币种保证金/组合保证金模式下是0 | [optional] [default to undefined]
**im** | **string** | 全仓初始保证金,在单币种保证金模式下有效，其他如跨币种保证金/组合保证金模式下是0 | [optional] [default to undefined]
**mm** | **string** | 全仓维持保证金率,在单币种保证金模式下有效，其他如跨币种保证金/组合保证金模式下是0 | [optional] [default to undefined]
**imr** | **string** | 全仓初始保证金率,在单币种保证金模式下有效，其他如跨币种保证金/组合保证金模式下是0 | [optional] [default to undefined]
**mmr** | **string** | 全仓维持保证金率,在单币种保证金模式下有效，其他如跨币种保证金/组合保证金模式下是0 | [optional] [default to undefined]
**marginBalance** | **string** | 全仓保证金余额,在单币种保证金模式下有效，其他如跨币种保证金/组合保证金模式下是0 | [optional] [default to undefined]
**availableMargin** | **string** | 全仓可用保证金,在单币种保证金模式下有效，其他如跨币种保证金/组合保证金模式下是0 | [optional] [default to undefined]

