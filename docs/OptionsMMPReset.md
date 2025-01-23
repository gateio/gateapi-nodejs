# OptionsMMPReset

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**underlying** | **string** | Underlying | [default to undefined]
**window** | **number** | 时间窗口（毫秒），1-5000之间，0表示停用MMP | [optional] [readonly] [default to undefined]
**frozenPeriod** | **number** | 冻结时长（毫秒），0表示一直冻结，需要调用重置API解冻 | [optional] [readonly] [default to undefined]
**qtyLimit** | **string** | 成交量上限（正数，至多2位小数） | [optional] [readonly] [default to undefined]
**deltaLimit** | **string** | 净delta值上限（正数，至多2位小数） | [optional] [readonly] [default to undefined]
**triggerTimeMs** | **number** | 触发冻结时间（毫秒），0表示没有触发冻结 | [optional] [readonly] [default to undefined]
**frozenUntilMs** | **number** | 解冻时间（毫秒），如果未配置冻结时长，触发冻结后无解冻时间 | [optional] [readonly] [default to undefined]

