# MarginAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currencyPair** | **string** | Currency pair. | [optional] [default to undefined]
**accountType** | **string** | Account type, risk - risk rate account, mmr - maintenance margin market not activated | [optional] [default to undefined]
**leverage** | **string** | User current market leverage multiple. | [optional] [default to undefined]
**locked** | **boolean** | Whether account is locked. | [optional] [default to undefined]
**risk** | **string** | Leveraged Account Current Risk Rate (Returned when the Account is a Risk Rate Account) | [optional] [default to undefined]
**mmr** | **string** | Leveraged Account Current Maintenance Margin Rate (returned when the Account is Account) | [optional] [default to undefined]
**base** | [**MarginAccountCurrency**](MarginAccountCurrency.md) |  | [optional] [default to undefined]
**quote** | [**MarginAccountCurrency**](MarginAccountCurrency.md) |  | [optional] [default to undefined]

