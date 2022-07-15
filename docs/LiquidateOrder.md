# LiquidateOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **string** | User defined information. If not empty, must follow the rules below:  1. prefixed with &#x60;t-&#x60; 2. no longer than 28 bytes without &#x60;t-&#x60; prefix 3. can only include 0-9, A-Z, a-z, underscore(_), hyphen(-) or dot(.)  | [optional] [default to undefined]
**currencyPair** | **string** | Currency pair | [default to undefined]
**amount** | **string** | Trade amount | [default to undefined]
**price** | **string** | Order price | [default to undefined]

