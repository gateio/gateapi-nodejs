# GateApi.RepayRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currencyPair** | **string** | Currency pair | [default to undefined]
**currency** | **string** | Loan currency | [default to undefined]
**mode** | **string** | Repay mode. all - repay all; partial - repay only some portion | [default to undefined]
**amount** | **string** | Repay amount. Required in &#x60;partial&#x60; mode | [optional] [default to undefined]

## Enum: RepayRequest.Mode

* `All` (value: `'all'`)

* `Partial` (value: `'partial'`)


