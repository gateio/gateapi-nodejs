# OptionsMMP

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**underlying** | **string** | Underlying. | [default to undefined]
**window** | **number** | Time window (milliseconds), between 1-5000, 0 means disabling MMP. | [default to undefined]
**frozenPeriod** | **number** | Freeze duration (milliseconds), 0 means always frozen, need to call reset API to unfreeze | [default to undefined]
**qtyLimit** | **string** | Trading volume upper limit (positive number, up to 2 decimal places). | [default to undefined]
**deltaLimit** | **string** | Upper limit of net delta value (positive number, up to 2 decimal places). | [default to undefined]
**triggerTimeMs** | **number** | Trigger freeze time (milliseconds), 0 means no freeze is triggered. | [optional] [readonly] [default to undefined]
**frozenUntilMs** | **number** | Unfreeze time (milliseconds). If the freeze duration is not configured, there will be no unfreeze time after the freeze is triggered. | [optional] [readonly] [default to undefined]

