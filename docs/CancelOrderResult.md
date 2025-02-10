# CancelOrderResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currencyPair** | **string** | Order currency pair | [optional] [default to undefined]
**id** | **string** | Order ID | [optional] [default to undefined]
**text** | **string** | Custom order information | [optional] [default to undefined]
**succeeded** | **boolean** | Whether cancellation succeeded | [optional] [default to undefined]
**label** | **string** | Error label when failed to cancel the order; emtpy if succeeded | [optional] [default to undefined]
**message** | **string** | Error message when failed to cancel the order; empty if succeeded | [optional] [default to undefined]
**account** | **string** | Empty by default. If cancelled order is cross margin order, this field is set to &#x60;cross_margin&#x60; | [optional] [default to undefined]

