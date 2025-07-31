# PlaceDualInvestmentOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**planId** | **string** | Product ID | [default to undefined]
**amount** | **string** | Subscription amount, mutually exclusive with copies field | [default to undefined]
**text** | **string** | Order custom information. Users can set custom ID with this field. Custom fields must meet the following conditions:  1. Must start with &#x60;t-&#x60; 2. Excluding &#x60;t-&#x60;, length cannot exceed 28 bytes 3. Can only contain numbers, letters, underscore(_), hyphen(-) or dot(.)  | [optional] [default to undefined]

