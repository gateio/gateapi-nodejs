# AmendOrderResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **string** | Order ID | [optional] [readonly] [default to undefined]
**amount** | **string** | Trade amount | [optional] [readonly] [default to undefined]
**price** | **string** | Order price | [optional] [readonly] [default to undefined]
**amendText** | **string** | The custom data that the user remarked when amending the order | [optional] [readonly] [default to undefined]
**succeeded** | **boolean** | Update success status | [optional] [readonly] [default to undefined]
**label** | **string** | Error indicator for failed modifications; empty when successful | [optional] [readonly] [default to undefined]
**message** | **string** | Error description for failed modifications; empty when successful | [optional] [readonly] [default to undefined]
**account** | **string** | Account types， spot - spot account, margin - margin account, unified - unified account, cross_margin - cross margin account.Portfolio margin accounts can only be set to &#x60;cross_margin&#x60; | [optional] [readonly] [default to undefined]

