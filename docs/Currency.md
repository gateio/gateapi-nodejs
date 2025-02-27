# Currency

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **string** | Currency symbol | [optional] [default to undefined]
**name** | **string** | Currency name | [optional] [default to undefined]
**delisted** | **boolean** | Whether currency is de-listed | [optional] [default to undefined]
**withdrawDisabled** | **boolean** | Whether currency\&#39;s withdrawal is disabled (deprecated) | [optional] [default to undefined]
**withdrawDelayed** | **boolean** | Whether currency\&#39;s withdrawal is delayed (deprecated) | [optional] [default to undefined]
**depositDisabled** | **boolean** | Whether currency\&#39;s deposit is disabled (deprecated) | [optional] [default to undefined]
**tradeDisabled** | **boolean** | Whether currency\&#39;s trading is disabled | [optional] [default to undefined]
**fixedRate** | **string** | Fixed fee rate. Only for fixed rate currencies, not valid for normal currencies | [optional] [default to undefined]
**chain** | **string** | The main chain corresponding to the coin | [optional] [default to undefined]
**chains** | [**Array&lt;SpotCurrencyChain&gt;**](SpotCurrencyChain.md) | All links corresponding to coins | [optional] [default to undefined]

