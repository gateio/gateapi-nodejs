## gate-api@5.23.2

TypeScript NodeJS client for gate-api.

Welcome to Gate.io API

APIv4 provides spot, margin and futures trading operations. There are public APIs to retrieve the real-time market statistics, and private APIs which needs authentication to trade on user's behalf.

This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 4.23.2
- Package version: 
- Build package: org.openapitools.codegen.languages.TypeScriptNodeClientCodegen
For more information, please visit [https://www.gate.io/page/contacts](https://www.gate.io/page/contacts)

Environment

* Node.js

Language level

* ES2017

It can be used in both TypeScript and JavaScript. In TypeScript, the definition should be automatically resolved via `package.json`. ([Reference](http://www.typescriptlang.org/docs/handbook/typings-for-npm-packages.html))
This package is targeting Node.js applications only, because it's not safe to store API secret in browser.
[gateapi-js](https://github.com/gateio/gateapi-js) can be used in browser but with public endpoints only.

## Versioning

Trying our best to follow the [semantic versioning](https://semver.org/), while enjoying recent features
provided by programming language and libraries, from 4.15.2, one major versioning difference will be
introduced:

If extra code rewrite is required when you upgrade the SDK, such as:

- some outdated programming language version support is dropped
- API method signature has breaking changes.

**the MAJOR version will be incremented, but the MINOR and PATCH version are still following REST API's
instead of resetting to 0**, so that you can recognize it has some breaking changes, but still getting
the idea of from which REST API version the change is introduced.

For example, the previous REST API and SDK version are both 4.14.0. But if we decide to introduce
some breaking changes in SDK along with REST API 4.15.2 upgrade, then the version of next SDK release
will be 5.15.2(the MAJOR version is incremented to denote breaking changes, but the MINOR and PATCH
version are identical to REST API's instead of resetting them to 0)

If MAJOR version is incremented, make sure you read the release note on
[Releases](https://github.com/gateio/gateapi-nodejs/releases)
page

### Installation

```shell
npm install gate-api
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following TypeScript code:

```typescript
const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.DeliveryApi(client);
const settle = "usdt"; // 'btc' | 'usdt' | Settle currency
api.listDeliveryContracts(settle)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

## Documentation for API Endpoints

All URIs are relative to *https://api.gateio.ws/api/v4*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DeliveryApi* | [**listDeliveryContracts**](docs/DeliveryApi.md#listDeliveryContracts) | **GET** /delivery/{settle}/contracts | List all futures contracts
*DeliveryApi* | [**getDeliveryContract**](docs/DeliveryApi.md#getDeliveryContract) | **GET** /delivery/{settle}/contracts/{contract} | Get a single contract
*DeliveryApi* | [**listDeliveryOrderBook**](docs/DeliveryApi.md#listDeliveryOrderBook) | **GET** /delivery/{settle}/order_book | Futures order book
*DeliveryApi* | [**listDeliveryTrades**](docs/DeliveryApi.md#listDeliveryTrades) | **GET** /delivery/{settle}/trades | Futures trading history
*DeliveryApi* | [**listDeliveryCandlesticks**](docs/DeliveryApi.md#listDeliveryCandlesticks) | **GET** /delivery/{settle}/candlesticks | Get futures candlesticks
*DeliveryApi* | [**listDeliveryTickers**](docs/DeliveryApi.md#listDeliveryTickers) | **GET** /delivery/{settle}/tickers | List futures tickers
*DeliveryApi* | [**listDeliveryInsuranceLedger**](docs/DeliveryApi.md#listDeliveryInsuranceLedger) | **GET** /delivery/{settle}/insurance | Futures insurance balance history
*DeliveryApi* | [**listDeliveryAccounts**](docs/DeliveryApi.md#listDeliveryAccounts) | **GET** /delivery/{settle}/accounts | Query futures account
*DeliveryApi* | [**listDeliveryAccountBook**](docs/DeliveryApi.md#listDeliveryAccountBook) | **GET** /delivery/{settle}/account_book | Query account book
*DeliveryApi* | [**listDeliveryPositions**](docs/DeliveryApi.md#listDeliveryPositions) | **GET** /delivery/{settle}/positions | List all positions of a user
*DeliveryApi* | [**getDeliveryPosition**](docs/DeliveryApi.md#getDeliveryPosition) | **GET** /delivery/{settle}/positions/{contract} | Get single position
*DeliveryApi* | [**updateDeliveryPositionMargin**](docs/DeliveryApi.md#updateDeliveryPositionMargin) | **POST** /delivery/{settle}/positions/{contract}/margin | Update position margin
*DeliveryApi* | [**updateDeliveryPositionLeverage**](docs/DeliveryApi.md#updateDeliveryPositionLeverage) | **POST** /delivery/{settle}/positions/{contract}/leverage | Update position leverage
*DeliveryApi* | [**updateDeliveryPositionRiskLimit**](docs/DeliveryApi.md#updateDeliveryPositionRiskLimit) | **POST** /delivery/{settle}/positions/{contract}/risk_limit | Update position risk limit
*DeliveryApi* | [**listDeliveryOrders**](docs/DeliveryApi.md#listDeliveryOrders) | **GET** /delivery/{settle}/orders | List futures orders
*DeliveryApi* | [**createDeliveryOrder**](docs/DeliveryApi.md#createDeliveryOrder) | **POST** /delivery/{settle}/orders | Create a futures order
*DeliveryApi* | [**cancelDeliveryOrders**](docs/DeliveryApi.md#cancelDeliveryOrders) | **DELETE** /delivery/{settle}/orders | Cancel all &#x60;open&#x60; orders matched
*DeliveryApi* | [**getDeliveryOrder**](docs/DeliveryApi.md#getDeliveryOrder) | **GET** /delivery/{settle}/orders/{order_id} | Get a single order
*DeliveryApi* | [**cancelDeliveryOrder**](docs/DeliveryApi.md#cancelDeliveryOrder) | **DELETE** /delivery/{settle}/orders/{order_id} | Cancel a single order
*DeliveryApi* | [**getMyDeliveryTrades**](docs/DeliveryApi.md#getMyDeliveryTrades) | **GET** /delivery/{settle}/my_trades | List personal trading history
*DeliveryApi* | [**listDeliveryPositionClose**](docs/DeliveryApi.md#listDeliveryPositionClose) | **GET** /delivery/{settle}/position_close | List position close history
*DeliveryApi* | [**listDeliveryLiquidates**](docs/DeliveryApi.md#listDeliveryLiquidates) | **GET** /delivery/{settle}/liquidates | List liquidation history
*DeliveryApi* | [**listDeliverySettlements**](docs/DeliveryApi.md#listDeliverySettlements) | **GET** /delivery/{settle}/settlements | List settlement history
*DeliveryApi* | [**listPriceTriggeredDeliveryOrders**](docs/DeliveryApi.md#listPriceTriggeredDeliveryOrders) | **GET** /delivery/{settle}/price_orders | List all auto orders
*DeliveryApi* | [**createPriceTriggeredDeliveryOrder**](docs/DeliveryApi.md#createPriceTriggeredDeliveryOrder) | **POST** /delivery/{settle}/price_orders | Create a price-triggered order
*DeliveryApi* | [**cancelPriceTriggeredDeliveryOrderList**](docs/DeliveryApi.md#cancelPriceTriggeredDeliveryOrderList) | **DELETE** /delivery/{settle}/price_orders | Cancel all open orders
*DeliveryApi* | [**getPriceTriggeredDeliveryOrder**](docs/DeliveryApi.md#getPriceTriggeredDeliveryOrder) | **GET** /delivery/{settle}/price_orders/{order_id} | Get a single order
*DeliveryApi* | [**cancelPriceTriggeredDeliveryOrder**](docs/DeliveryApi.md#cancelPriceTriggeredDeliveryOrder) | **DELETE** /delivery/{settle}/price_orders/{order_id} | Cancel a single order
*FuturesApi* | [**listFuturesContracts**](docs/FuturesApi.md#listFuturesContracts) | **GET** /futures/{settle}/contracts | List all futures contracts
*FuturesApi* | [**getFuturesContract**](docs/FuturesApi.md#getFuturesContract) | **GET** /futures/{settle}/contracts/{contract} | Get a single contract
*FuturesApi* | [**listFuturesOrderBook**](docs/FuturesApi.md#listFuturesOrderBook) | **GET** /futures/{settle}/order_book | Futures order book
*FuturesApi* | [**listFuturesTrades**](docs/FuturesApi.md#listFuturesTrades) | **GET** /futures/{settle}/trades | Futures trading history
*FuturesApi* | [**listFuturesCandlesticks**](docs/FuturesApi.md#listFuturesCandlesticks) | **GET** /futures/{settle}/candlesticks | Get futures candlesticks
*FuturesApi* | [**listFuturesTickers**](docs/FuturesApi.md#listFuturesTickers) | **GET** /futures/{settle}/tickers | List futures tickers
*FuturesApi* | [**listFuturesFundingRateHistory**](docs/FuturesApi.md#listFuturesFundingRateHistory) | **GET** /futures/{settle}/funding_rate | Funding rate history
*FuturesApi* | [**listFuturesInsuranceLedger**](docs/FuturesApi.md#listFuturesInsuranceLedger) | **GET** /futures/{settle}/insurance | Futures insurance balance history
*FuturesApi* | [**listContractStats**](docs/FuturesApi.md#listContractStats) | **GET** /futures/{settle}/contract_stats | Futures stats
*FuturesApi* | [**listLiquidatedOrders**](docs/FuturesApi.md#listLiquidatedOrders) | **GET** /futures/{settle}/liq_orders | Retrieve liquidation history
*FuturesApi* | [**listFuturesAccounts**](docs/FuturesApi.md#listFuturesAccounts) | **GET** /futures/{settle}/accounts | Query futures account
*FuturesApi* | [**listFuturesAccountBook**](docs/FuturesApi.md#listFuturesAccountBook) | **GET** /futures/{settle}/account_book | Query account book
*FuturesApi* | [**listPositions**](docs/FuturesApi.md#listPositions) | **GET** /futures/{settle}/positions | List all positions of a user
*FuturesApi* | [**getPosition**](docs/FuturesApi.md#getPosition) | **GET** /futures/{settle}/positions/{contract} | Get single position
*FuturesApi* | [**updatePositionMargin**](docs/FuturesApi.md#updatePositionMargin) | **POST** /futures/{settle}/positions/{contract}/margin | Update position margin
*FuturesApi* | [**updatePositionLeverage**](docs/FuturesApi.md#updatePositionLeverage) | **POST** /futures/{settle}/positions/{contract}/leverage | Update position leverage
*FuturesApi* | [**updatePositionRiskLimit**](docs/FuturesApi.md#updatePositionRiskLimit) | **POST** /futures/{settle}/positions/{contract}/risk_limit | Update position risk limit
*FuturesApi* | [**setDualMode**](docs/FuturesApi.md#setDualMode) | **POST** /futures/{settle}/dual_mode | Enable or disable dual mode
*FuturesApi* | [**getDualModePosition**](docs/FuturesApi.md#getDualModePosition) | **GET** /futures/{settle}/dual_comp/positions/{contract} | Retrieve position detail in dual mode
*FuturesApi* | [**updateDualModePositionMargin**](docs/FuturesApi.md#updateDualModePositionMargin) | **POST** /futures/{settle}/dual_comp/positions/{contract}/margin | Update position margin in dual mode
*FuturesApi* | [**updateDualModePositionLeverage**](docs/FuturesApi.md#updateDualModePositionLeverage) | **POST** /futures/{settle}/dual_comp/positions/{contract}/leverage | Update position leverage in dual mode
*FuturesApi* | [**updateDualModePositionRiskLimit**](docs/FuturesApi.md#updateDualModePositionRiskLimit) | **POST** /futures/{settle}/dual_comp/positions/{contract}/risk_limit | Update position risk limit in dual mode
*FuturesApi* | [**listFuturesOrders**](docs/FuturesApi.md#listFuturesOrders) | **GET** /futures/{settle}/orders | List futures orders
*FuturesApi* | [**createFuturesOrder**](docs/FuturesApi.md#createFuturesOrder) | **POST** /futures/{settle}/orders | Create a futures order
*FuturesApi* | [**cancelFuturesOrders**](docs/FuturesApi.md#cancelFuturesOrders) | **DELETE** /futures/{settle}/orders | Cancel all &#x60;open&#x60; orders matched
*FuturesApi* | [**getFuturesOrder**](docs/FuturesApi.md#getFuturesOrder) | **GET** /futures/{settle}/orders/{order_id} | Get a single order
*FuturesApi* | [**cancelFuturesOrder**](docs/FuturesApi.md#cancelFuturesOrder) | **DELETE** /futures/{settle}/orders/{order_id} | Cancel a single order
*FuturesApi* | [**getMyTrades**](docs/FuturesApi.md#getMyTrades) | **GET** /futures/{settle}/my_trades | List personal trading history
*FuturesApi* | [**listPositionClose**](docs/FuturesApi.md#listPositionClose) | **GET** /futures/{settle}/position_close | List position close history
*FuturesApi* | [**listLiquidates**](docs/FuturesApi.md#listLiquidates) | **GET** /futures/{settle}/liquidates | List liquidation history
*FuturesApi* | [**listPriceTriggeredOrders**](docs/FuturesApi.md#listPriceTriggeredOrders) | **GET** /futures/{settle}/price_orders | List all auto orders
*FuturesApi* | [**createPriceTriggeredOrder**](docs/FuturesApi.md#createPriceTriggeredOrder) | **POST** /futures/{settle}/price_orders | Create a price-triggered order
*FuturesApi* | [**cancelPriceTriggeredOrderList**](docs/FuturesApi.md#cancelPriceTriggeredOrderList) | **DELETE** /futures/{settle}/price_orders | Cancel all open orders
*FuturesApi* | [**getPriceTriggeredOrder**](docs/FuturesApi.md#getPriceTriggeredOrder) | **GET** /futures/{settle}/price_orders/{order_id} | Get a single order
*FuturesApi* | [**cancelPriceTriggeredOrder**](docs/FuturesApi.md#cancelPriceTriggeredOrder) | **DELETE** /futures/{settle}/price_orders/{order_id} | Cancel a single order
*MarginApi* | [**listMarginCurrencyPairs**](docs/MarginApi.md#listMarginCurrencyPairs) | **GET** /margin/currency_pairs | List all supported currency pairs supported in margin trading
*MarginApi* | [**getMarginCurrencyPair**](docs/MarginApi.md#getMarginCurrencyPair) | **GET** /margin/currency_pairs/{currency_pair} | Query one single margin currency pair
*MarginApi* | [**listFundingBook**](docs/MarginApi.md#listFundingBook) | **GET** /margin/funding_book | Order book of lending loans
*MarginApi* | [**listMarginAccounts**](docs/MarginApi.md#listMarginAccounts) | **GET** /margin/accounts | Margin account list
*MarginApi* | [**listMarginAccountBook**](docs/MarginApi.md#listMarginAccountBook) | **GET** /margin/account_book | List margin account balance change history
*MarginApi* | [**listFundingAccounts**](docs/MarginApi.md#listFundingAccounts) | **GET** /margin/funding_accounts | Funding account list
*MarginApi* | [**listLoans**](docs/MarginApi.md#listLoans) | **GET** /margin/loans | List all loans
*MarginApi* | [**createLoan**](docs/MarginApi.md#createLoan) | **POST** /margin/loans | Lend or borrow
*MarginApi* | [**mergeLoans**](docs/MarginApi.md#mergeLoans) | **POST** /margin/merged_loans | Merge multiple lending loans
*MarginApi* | [**getLoan**](docs/MarginApi.md#getLoan) | **GET** /margin/loans/{loan_id} | Retrieve one single loan detail
*MarginApi* | [**cancelLoan**](docs/MarginApi.md#cancelLoan) | **DELETE** /margin/loans/{loan_id} | Cancel lending loan
*MarginApi* | [**updateLoan**](docs/MarginApi.md#updateLoan) | **PATCH** /margin/loans/{loan_id} | Modify a loan
*MarginApi* | [**listLoanRepayments**](docs/MarginApi.md#listLoanRepayments) | **GET** /margin/loans/{loan_id}/repayment | List loan repayment records
*MarginApi* | [**repayLoan**](docs/MarginApi.md#repayLoan) | **POST** /margin/loans/{loan_id}/repayment | Repay a loan
*MarginApi* | [**listLoanRecords**](docs/MarginApi.md#listLoanRecords) | **GET** /margin/loan_records | List repayment records of a specific loan
*MarginApi* | [**getLoanRecord**](docs/MarginApi.md#getLoanRecord) | **GET** /margin/loan_records/{loan_record_id} | Get one single loan record
*MarginApi* | [**updateLoanRecord**](docs/MarginApi.md#updateLoanRecord) | **PATCH** /margin/loan_records/{loan_record_id} | Modify a loan record
*MarginApi* | [**getAutoRepayStatus**](docs/MarginApi.md#getAutoRepayStatus) | **GET** /margin/auto_repay | Retrieve user auto repayment setting
*MarginApi* | [**setAutoRepay**](docs/MarginApi.md#setAutoRepay) | **POST** /margin/auto_repay | Update user\&#39;s auto repayment setting
*MarginApi* | [**getMarginTransferable**](docs/MarginApi.md#getMarginTransferable) | **GET** /margin/transferable | Get the max transferable amount for a specific margin currency
*MarginApi* | [**getMarginBorrowable**](docs/MarginApi.md#getMarginBorrowable) | **GET** /margin/borrowable | Get the max borrowable amount for a specific margin currency
*MarginApi* | [**listCrossMarginCurrencies**](docs/MarginApi.md#listCrossMarginCurrencies) | **GET** /margin/cross/currencies | Currencies supported by cross margin.
*MarginApi* | [**getCrossMarginCurrency**](docs/MarginApi.md#getCrossMarginCurrency) | **GET** /margin/cross/currencies/{currency} | Retrieve detail of one single currency supported by cross margin
*MarginApi* | [**getCrossMarginAccount**](docs/MarginApi.md#getCrossMarginAccount) | **GET** /margin/cross/accounts | Retrieve cross margin account
*MarginApi* | [**listCrossMarginAccountBook**](docs/MarginApi.md#listCrossMarginAccountBook) | **GET** /margin/cross/account_book | Retrieve cross margin account change history
*MarginApi* | [**listCrossMarginLoans**](docs/MarginApi.md#listCrossMarginLoans) | **GET** /margin/cross/loans | List cross margin borrow history
*MarginApi* | [**createCrossMarginLoan**](docs/MarginApi.md#createCrossMarginLoan) | **POST** /margin/cross/loans | Create a cross margin borrow loan
*MarginApi* | [**getCrossMarginLoan**](docs/MarginApi.md#getCrossMarginLoan) | **GET** /margin/cross/loans/{loan_id} | Retrieve single borrow loan detail
*MarginApi* | [**listCrossMarginRepayments**](docs/MarginApi.md#listCrossMarginRepayments) | **GET** /margin/cross/repayments | Retrieve cross margin repayments
*MarginApi* | [**repayCrossMarginLoan**](docs/MarginApi.md#repayCrossMarginLoan) | **POST** /margin/cross/repayments | Repay cross margin loan
*MarginApi* | [**getCrossMarginTransferable**](docs/MarginApi.md#getCrossMarginTransferable) | **GET** /margin/cross/transferable | Get the max transferable amount for a specific cross margin currency
*MarginApi* | [**getCrossMarginBorrowable**](docs/MarginApi.md#getCrossMarginBorrowable) | **GET** /margin/cross/borrowable | Get the max borrowable amount for a specific cross margin currency
*OptionsApi* | [**listOptionsUnderlyings**](docs/OptionsApi.md#listOptionsUnderlyings) | **GET** /options/underlyings | List all underlyings
*OptionsApi* | [**listOptionsExpirations**](docs/OptionsApi.md#listOptionsExpirations) | **GET** /options/expirations | List all expiration times
*OptionsApi* | [**listOptionsContracts**](docs/OptionsApi.md#listOptionsContracts) | **GET** /options/contracts | List all the contracts with specified underlying and expiration time
*OptionsApi* | [**getOptionsContract**](docs/OptionsApi.md#getOptionsContract) | **GET** /options/contracts/{contract} | Query specified contract detail
*OptionsApi* | [**listOptionsSettlements**](docs/OptionsApi.md#listOptionsSettlements) | **GET** /options/settlements | List settlement history
*OptionsApi* | [**getOptionsSettlement**](docs/OptionsApi.md#getOptionsSettlement) | **GET** /options/settlements/{contract} | Get specified contract\&#39;s settlement
*OptionsApi* | [**listOptionsOrderBook**](docs/OptionsApi.md#listOptionsOrderBook) | **GET** /options/order_book | Futures order book
*OptionsApi* | [**listOptionsTickers**](docs/OptionsApi.md#listOptionsTickers) | **GET** /options/tickers | List tickers of options contracts
*OptionsApi* | [**listOptionsUnderlyingTickers**](docs/OptionsApi.md#listOptionsUnderlyingTickers) | **GET** /options/underlying/tickers/{underlying} | Get underlying ticker
*OptionsApi* | [**listOptionsCandlesticks**](docs/OptionsApi.md#listOptionsCandlesticks) | **GET** /options/candlesticks | Get futures candlesticks
*OptionsApi* | [**listOptionsUnderlyingCandlesticks**](docs/OptionsApi.md#listOptionsUnderlyingCandlesticks) | **GET** /options/underlying/candlesticks | Mark price candlesticks of an underlying
*OptionsApi* | [**listOptionsTrades**](docs/OptionsApi.md#listOptionsTrades) | **GET** /options/trades | Options trade history
*OptionsApi* | [**listOptionsAccount**](docs/OptionsApi.md#listOptionsAccount) | **GET** /options/accounts | List options account
*OptionsApi* | [**listOptionsAccountBook**](docs/OptionsApi.md#listOptionsAccountBook) | **GET** /options/account_book | List account changing history
*OptionsApi* | [**listOptionsPositions**](docs/OptionsApi.md#listOptionsPositions) | **GET** /options/positions | List user\&#39;s positions of specified underlying
*OptionsApi* | [**getOptionsPosition**](docs/OptionsApi.md#getOptionsPosition) | **GET** /options/positions/{contract} | Get specified contract position
*OptionsApi* | [**listOptionsPositionClose**](docs/OptionsApi.md#listOptionsPositionClose) | **GET** /options/position_close | List user\&#39;s liquidation history of specified underlying
*OptionsApi* | [**listOptionsOrders**](docs/OptionsApi.md#listOptionsOrders) | **GET** /options/orders | List futures orders
*OptionsApi* | [**createOptionsOrder**](docs/OptionsApi.md#createOptionsOrder) | **POST** /options/orders | Create an options order
*OptionsApi* | [**cancelOptionsOrders**](docs/OptionsApi.md#cancelOptionsOrders) | **DELETE** /options/orders | Cancel all &#x60;open&#x60; orders matched
*OptionsApi* | [**getOptionsOrder**](docs/OptionsApi.md#getOptionsOrder) | **GET** /options/orders/{order_id} | Get a single order
*OptionsApi* | [**cancelOptionsOrder**](docs/OptionsApi.md#cancelOptionsOrder) | **DELETE** /options/orders/{order_id} | Cancel a single order
*OptionsApi* | [**listMyOptionsTrades**](docs/OptionsApi.md#listMyOptionsTrades) | **GET** /options/my_trades | List personal trading history
*SpotApi* | [**listCurrencies**](docs/SpotApi.md#listCurrencies) | **GET** /spot/currencies | List all currencies\&#39; details
*SpotApi* | [**getCurrency**](docs/SpotApi.md#getCurrency) | **GET** /spot/currencies/{currency} | Get details of a specific currency
*SpotApi* | [**listCurrencyPairs**](docs/SpotApi.md#listCurrencyPairs) | **GET** /spot/currency_pairs | List all currency pairs supported
*SpotApi* | [**getCurrencyPair**](docs/SpotApi.md#getCurrencyPair) | **GET** /spot/currency_pairs/{currency_pair} | Get details of a specifc order
*SpotApi* | [**listTickers**](docs/SpotApi.md#listTickers) | **GET** /spot/tickers | Retrieve ticker information
*SpotApi* | [**listOrderBook**](docs/SpotApi.md#listOrderBook) | **GET** /spot/order_book | Retrieve order book
*SpotApi* | [**listTrades**](docs/SpotApi.md#listTrades) | **GET** /spot/trades | Retrieve market trades
*SpotApi* | [**listCandlesticks**](docs/SpotApi.md#listCandlesticks) | **GET** /spot/candlesticks | Market candlesticks
*SpotApi* | [**getFee**](docs/SpotApi.md#getFee) | **GET** /spot/fee | Query user trading fee rates
*SpotApi* | [**listSpotAccounts**](docs/SpotApi.md#listSpotAccounts) | **GET** /spot/accounts | List spot accounts
*SpotApi* | [**createBatchOrders**](docs/SpotApi.md#createBatchOrders) | **POST** /spot/batch_orders | Create a batch of orders
*SpotApi* | [**listAllOpenOrders**](docs/SpotApi.md#listAllOpenOrders) | **GET** /spot/open_orders | List all open orders
*SpotApi* | [**listOrders**](docs/SpotApi.md#listOrders) | **GET** /spot/orders | List orders
*SpotApi* | [**createOrder**](docs/SpotApi.md#createOrder) | **POST** /spot/orders | Create an order
*SpotApi* | [**cancelOrders**](docs/SpotApi.md#cancelOrders) | **DELETE** /spot/orders | Cancel all &#x60;open&#x60; orders in specified currency pair
*SpotApi* | [**cancelBatchOrders**](docs/SpotApi.md#cancelBatchOrders) | **POST** /spot/cancel_batch_orders | Cancel a batch of orders with an ID list
*SpotApi* | [**getOrder**](docs/SpotApi.md#getOrder) | **GET** /spot/orders/{order_id} | Get a single order
*SpotApi* | [**cancelOrder**](docs/SpotApi.md#cancelOrder) | **DELETE** /spot/orders/{order_id} | Cancel a single order
*SpotApi* | [**listMyTrades**](docs/SpotApi.md#listMyTrades) | **GET** /spot/my_trades | List personal trading history
*SpotApi* | [**listSpotPriceTriggeredOrders**](docs/SpotApi.md#listSpotPriceTriggeredOrders) | **GET** /spot/price_orders | Retrieve running auto order list
*SpotApi* | [**createSpotPriceTriggeredOrder**](docs/SpotApi.md#createSpotPriceTriggeredOrder) | **POST** /spot/price_orders | Create a price-triggered order
*SpotApi* | [**cancelSpotPriceTriggeredOrderList**](docs/SpotApi.md#cancelSpotPriceTriggeredOrderList) | **DELETE** /spot/price_orders | Cancel all open orders
*SpotApi* | [**getSpotPriceTriggeredOrder**](docs/SpotApi.md#getSpotPriceTriggeredOrder) | **GET** /spot/price_orders/{order_id} | Get a single order
*SpotApi* | [**cancelSpotPriceTriggeredOrder**](docs/SpotApi.md#cancelSpotPriceTriggeredOrder) | **DELETE** /spot/price_orders/{order_id} | Cancel a single order
*WalletApi* | [**listCurrencyChains**](docs/WalletApi.md#listCurrencyChains) | **GET** /wallet/currency_chains | List chains supported for specified currency
*WalletApi* | [**getDepositAddress**](docs/WalletApi.md#getDepositAddress) | **GET** /wallet/deposit_address | Generate currency deposit address
*WalletApi* | [**listWithdrawals**](docs/WalletApi.md#listWithdrawals) | **GET** /wallet/withdrawals | Retrieve withdrawal records
*WalletApi* | [**listDeposits**](docs/WalletApi.md#listDeposits) | **GET** /wallet/deposits | Retrieve deposit records
*WalletApi* | [**transfer**](docs/WalletApi.md#transfer) | **POST** /wallet/transfers | Transfer between trading accounts
*WalletApi* | [**listSubAccountTransfers**](docs/WalletApi.md#listSubAccountTransfers) | **GET** /wallet/sub_account_transfers | Retrieve transfer records between main and sub accounts
*WalletApi* | [**transferWithSubAccount**](docs/WalletApi.md#transferWithSubAccount) | **POST** /wallet/sub_account_transfers | Transfer between main and sub accounts
*WalletApi* | [**listWithdrawStatus**](docs/WalletApi.md#listWithdrawStatus) | **GET** /wallet/withdraw_status | Retrieve withdrawal status
*WalletApi* | [**listSubAccountBalances**](docs/WalletApi.md#listSubAccountBalances) | **GET** /wallet/sub_account_balances | Retrieve sub account balances
*WalletApi* | [**getTradeFee**](docs/WalletApi.md#getTradeFee) | **GET** /wallet/fee | Retrieve personal trading fee
*WalletApi* | [**getTotalBalance**](docs/WalletApi.md#getTotalBalance) | **GET** /wallet/total_balance | Retrieve user\&#39;s total balances
*WithdrawalApi* | [**withdraw**](docs/WithdrawalApi.md#withdraw) | **POST** /withdrawals | Withdraw
*WithdrawalApi* | [**cancelWithdrawal**](docs/WithdrawalApi.md#cancelWithdrawal) | **DELETE** /withdrawals/{withdrawal_id} | Cancel withdrawal with specified ID


## Documentation for Models

 - [AccountBalance](docs/AccountBalance.md)
 - [AutoRepaySetting](docs/AutoRepaySetting.md)
 - [BatchOrder](docs/BatchOrder.md)
 - [CancelOrder](docs/CancelOrder.md)
 - [CancelOrderResult](docs/CancelOrderResult.md)
 - [Contract](docs/Contract.md)
 - [ContractStat](docs/ContractStat.md)
 - [CrossMarginAccount](docs/CrossMarginAccount.md)
 - [CrossMarginAccountBook](docs/CrossMarginAccountBook.md)
 - [CrossMarginBalance](docs/CrossMarginBalance.md)
 - [CrossMarginBorrowable](docs/CrossMarginBorrowable.md)
 - [CrossMarginCurrency](docs/CrossMarginCurrency.md)
 - [CrossMarginLoan](docs/CrossMarginLoan.md)
 - [CrossMarginRepayRequest](docs/CrossMarginRepayRequest.md)
 - [CrossMarginRepayment](docs/CrossMarginRepayment.md)
 - [CrossMarginTransferable](docs/CrossMarginTransferable.md)
 - [Currency](docs/Currency.md)
 - [CurrencyChain](docs/CurrencyChain.md)
 - [CurrencyPair](docs/CurrencyPair.md)
 - [DeliveryContract](docs/DeliveryContract.md)
 - [DeliverySettlement](docs/DeliverySettlement.md)
 - [DepositAddress](docs/DepositAddress.md)
 - [FundingAccount](docs/FundingAccount.md)
 - [FundingBookItem](docs/FundingBookItem.md)
 - [FundingRateRecord](docs/FundingRateRecord.md)
 - [FuturesAccount](docs/FuturesAccount.md)
 - [FuturesAccountBook](docs/FuturesAccountBook.md)
 - [FuturesCandlestick](docs/FuturesCandlestick.md)
 - [FuturesInitialOrder](docs/FuturesInitialOrder.md)
 - [FuturesLiquidate](docs/FuturesLiquidate.md)
 - [FuturesOrder](docs/FuturesOrder.md)
 - [FuturesOrderBook](docs/FuturesOrderBook.md)
 - [FuturesOrderBookItem](docs/FuturesOrderBookItem.md)
 - [FuturesPriceTrigger](docs/FuturesPriceTrigger.md)
 - [FuturesPriceTriggeredOrder](docs/FuturesPriceTriggeredOrder.md)
 - [FuturesTicker](docs/FuturesTicker.md)
 - [FuturesTrade](docs/FuturesTrade.md)
 - [InsuranceRecord](docs/InsuranceRecord.md)
 - [LedgerRecord](docs/LedgerRecord.md)
 - [Loan](docs/Loan.md)
 - [LoanPatch](docs/LoanPatch.md)
 - [LoanRecord](docs/LoanRecord.md)
 - [MarginAccount](docs/MarginAccount.md)
 - [MarginAccountBook](docs/MarginAccountBook.md)
 - [MarginAccountCurrency](docs/MarginAccountCurrency.md)
 - [MarginBorrowable](docs/MarginBorrowable.md)
 - [MarginCurrencyPair](docs/MarginCurrencyPair.md)
 - [MarginTransferable](docs/MarginTransferable.md)
 - [MultiChainAddressItem](docs/MultiChainAddressItem.md)
 - [MyFuturesTrade](docs/MyFuturesTrade.md)
 - [OpenOrders](docs/OpenOrders.md)
 - [OptionsAccount](docs/OptionsAccount.md)
 - [OptionsAccountBook](docs/OptionsAccountBook.md)
 - [OptionsContract](docs/OptionsContract.md)
 - [OptionsMyTrade](docs/OptionsMyTrade.md)
 - [OptionsOrder](docs/OptionsOrder.md)
 - [OptionsPosition](docs/OptionsPosition.md)
 - [OptionsPositionClose](docs/OptionsPositionClose.md)
 - [OptionsSettlement](docs/OptionsSettlement.md)
 - [OptionsTicker](docs/OptionsTicker.md)
 - [OptionsUnderlying](docs/OptionsUnderlying.md)
 - [OptionsUnderlyingTicker](docs/OptionsUnderlyingTicker.md)
 - [Order](docs/Order.md)
 - [OrderBook](docs/OrderBook.md)
 - [Position](docs/Position.md)
 - [PositionClose](docs/PositionClose.md)
 - [PositionCloseOrder](docs/PositionCloseOrder.md)
 - [RepayRequest](docs/RepayRequest.md)
 - [Repayment](docs/Repayment.md)
 - [SpotAccount](docs/SpotAccount.md)
 - [SpotPricePutOrder](docs/SpotPricePutOrder.md)
 - [SpotPriceTrigger](docs/SpotPriceTrigger.md)
 - [SpotPriceTriggeredOrder](docs/SpotPriceTriggeredOrder.md)
 - [SubAccountBalance](docs/SubAccountBalance.md)
 - [SubAccountTransfer](docs/SubAccountTransfer.md)
 - [Ticker](docs/Ticker.md)
 - [TotalBalance](docs/TotalBalance.md)
 - [Trade](docs/Trade.md)
 - [TradeFee](docs/TradeFee.md)
 - [Transfer](docs/Transfer.md)
 - [TriggerOrderResponse](docs/TriggerOrderResponse.md)
 - [WithdrawStatus](docs/WithdrawStatus.md)


## Documentation for Authorization

 Authentication schemes defined for the API:

### apiv4

- **Type**: Gate APIv4

https://www.gate.io/docs/apiv4/en/index.html#apiv4-signed-request-requirements

