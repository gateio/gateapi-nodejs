# MarginAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currencyPair** | **string** | Currency pair | [optional] [default to undefined]
**accountType** | **string** | Account type: risk - risk rate account, mmr - maintenance margin rate account, inactive - market not activated | [optional] [default to undefined]
**leverage** | **string** | User\&#39;s current market leverage multiplier | [optional] [default to undefined]
**locked** | **boolean** | Whether the account is locked | [optional] [default to undefined]
**risk** | **string** | Current risk rate of the margin account (returned when the account is a risk rate account) | [optional] [default to undefined]
**mmr** | **string** | Leveraged Account Current Maintenance Margin Rate (returned when the Account is Account) | [optional] [default to undefined]
**base** | [**MarginAccountCurrency**](MarginAccountCurrency.md) |  | [optional] [default to undefined]
**quote** | [**MarginAccountCurrency**](MarginAccountCurrency.md) |  | [optional] [default to undefined]

