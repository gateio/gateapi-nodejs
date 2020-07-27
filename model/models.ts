export * from './batchOrder';
export * from './cancelOrder';
export * from './cancelOrderResult';
export * from './contract';
export * from './currencyPair';
export * from './deliveryContract';
export * from './deliverySettlement';
export * from './depositAddress';
export * from './fundingAccount';
export * from './fundingBookItem';
export * from './fundingRateRecord';
export * from './futuresAccount';
export * from './futuresAccountBook';
export * from './futuresCandlestick';
export * from './futuresInitialOrder';
export * from './futuresLiquidate';
export * from './futuresOrder';
export * from './futuresOrderBook';
export * from './futuresOrderBookItem';
export * from './futuresPriceTrigger';
export * from './futuresPriceTriggeredOrder';
export * from './futuresTicker';
export * from './futuresTrade';
export * from './insuranceRecord';
export * from './ledgerRecord';
export * from './loan';
export * from './loanPatch';
export * from './loanRecord';
export * from './marginAccount';
export * from './marginAccountCurrency';
export * from './marginCurrencyPair';
export * from './myFuturesTrade';
export * from './order';
export * from './orderBook';
export * from './position';
export * from './positionClose';
export * from './positionCloseOrder';
export * from './repayRequest';
export * from './repayment';
export * from './spotAccount';
export * from './subAccountTransfer';
export * from './ticker';
export * from './trade';
export * from './transfer';
export * from './triggerOrderResponse';

import localVarRequest = require('request');
import qs = require("querystring");
import crypto = require('crypto');
import { URL } from 'url';

import { BatchOrder } from './batchOrder';
import { CancelOrder } from './cancelOrder';
import { CancelOrderResult } from './cancelOrderResult';
import { Contract } from './contract';
import { CurrencyPair } from './currencyPair';
import { DeliveryContract } from './deliveryContract';
import { DeliverySettlement } from './deliverySettlement';
import { DepositAddress } from './depositAddress';
import { FundingAccount } from './fundingAccount';
import { FundingBookItem } from './fundingBookItem';
import { FundingRateRecord } from './fundingRateRecord';
import { FuturesAccount } from './futuresAccount';
import { FuturesAccountBook } from './futuresAccountBook';
import { FuturesCandlestick } from './futuresCandlestick';
import { FuturesInitialOrder } from './futuresInitialOrder';
import { FuturesLiquidate } from './futuresLiquidate';
import { FuturesOrder } from './futuresOrder';
import { FuturesOrderBook } from './futuresOrderBook';
import { FuturesOrderBookItem } from './futuresOrderBookItem';
import { FuturesPriceTrigger } from './futuresPriceTrigger';
import { FuturesPriceTriggeredOrder } from './futuresPriceTriggeredOrder';
import { FuturesTicker } from './futuresTicker';
import { FuturesTrade } from './futuresTrade';
import { InsuranceRecord } from './insuranceRecord';
import { LedgerRecord } from './ledgerRecord';
import { Loan } from './loan';
import { LoanPatch } from './loanPatch';
import { LoanRecord } from './loanRecord';
import { MarginAccount } from './marginAccount';
import { MarginAccountCurrency } from './marginAccountCurrency';
import { MarginCurrencyPair } from './marginCurrencyPair';
import { MyFuturesTrade } from './myFuturesTrade';
import { Order } from './order';
import { OrderBook } from './orderBook';
import { Position } from './position';
import { PositionClose } from './positionClose';
import { PositionCloseOrder } from './positionCloseOrder';
import { RepayRequest } from './repayRequest';
import { Repayment } from './repayment';
import { SpotAccount } from './spotAccount';
import { SubAccountTransfer } from './subAccountTransfer';
import { Ticker } from './ticker';
import { Trade } from './trade';
import { Transfer } from './transfer';
import { TriggerOrderResponse } from './triggerOrderResponse';

/* tslint:disable:no-unused-variable */
const primitives = ['string', 'boolean', 'double', 'integer', 'long', 'float', 'number', 'any'];

const enumsMap: { [index: string]: any } = {
    'BatchOrder.Status': BatchOrder.Status,
    'BatchOrder.Type': BatchOrder.Type,
    'BatchOrder.Account': BatchOrder.Account,
    'BatchOrder.Side': BatchOrder.Side,
    'BatchOrder.TimeInForce': BatchOrder.TimeInForce,
    'Contract.Type': Contract.Type,
    'Contract.MarkType': Contract.MarkType,
    'CurrencyPair.TradeStatus': CurrencyPair.TradeStatus,
    'DeliveryContract.Cycle': DeliveryContract.Cycle,
    'DeliveryContract.Type': DeliveryContract.Type,
    'DeliveryContract.MarkType': DeliveryContract.MarkType,
    'FuturesAccountBook.Type': FuturesAccountBook.Type,
    'FuturesInitialOrder.Tif': FuturesInitialOrder.Tif,
    'FuturesOrder.FinishAs': FuturesOrder.FinishAs,
    'FuturesOrder.Status': FuturesOrder.Status,
    'FuturesOrder.Tif': FuturesOrder.Tif,
    'FuturesPriceTrigger.StrategyType': FuturesPriceTrigger.StrategyType,
    'FuturesPriceTrigger.PriceType': FuturesPriceTrigger.PriceType,
    'FuturesPriceTrigger.Rule': FuturesPriceTrigger.Rule,
    'FuturesPriceTriggeredOrder.Status': FuturesPriceTriggeredOrder.Status,
    'FuturesPriceTriggeredOrder.FinishAs': FuturesPriceTriggeredOrder.FinishAs,
    'LedgerRecord.Status': LedgerRecord.Status,
    'Loan.Status': Loan.Status,
    'Loan.Side': Loan.Side,
    'LoanPatch.Side': LoanPatch.Side,
    'LoanRecord.Status': LoanRecord.Status,
    'MyFuturesTrade.Role': MyFuturesTrade.Role,
    'Order.Status': Order.Status,
    'Order.Type': Order.Type,
    'Order.Account': Order.Account,
    'Order.Side': Order.Side,
    'Order.TimeInForce': Order.TimeInForce,
    'PositionClose.Side': PositionClose.Side,
    'RepayRequest.Mode': RepayRequest.Mode,
    'SubAccountTransfer.Direction': SubAccountTransfer.Direction,
    'Trade.Side': Trade.Side,
    'Trade.Role': Trade.Role,
    'Transfer.From': Transfer.From,
    'Transfer.To': Transfer.To,
};

const typeMap: { [index: string]: any } = {
    BatchOrder,
    CancelOrder,
    CancelOrderResult,
    Contract,
    CurrencyPair,
    DeliveryContract,
    DeliverySettlement,
    DepositAddress,
    FundingAccount,
    FundingBookItem,
    FundingRateRecord,
    FuturesAccount,
    FuturesAccountBook,
    FuturesCandlestick,
    FuturesInitialOrder,
    FuturesLiquidate,
    FuturesOrder,
    FuturesOrderBook,
    FuturesOrderBookItem,
    FuturesPriceTrigger,
    FuturesPriceTriggeredOrder,
    FuturesTicker,
    FuturesTrade,
    InsuranceRecord,
    LedgerRecord,
    Loan,
    LoanPatch,
    LoanRecord,
    MarginAccount,
    MarginAccountCurrency,
    MarginCurrencyPair,
    MyFuturesTrade,
    Order,
    OrderBook,
    Position,
    PositionClose,
    PositionCloseOrder,
    RepayRequest,
    Repayment,
    SpotAccount,
    SubAccountTransfer,
    Ticker,
    Trade,
    Transfer,
    TriggerOrderResponse,
};

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === 'Date') {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            const discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    const discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf('Array<', 0) === 0) {
            // string.startsWith pre es6
            let subType: string = type.replace('Array<', ''); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            const transformedData: any[] = [];
            for (const index in data) {
                const date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        } else if (type === 'Date') {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) {
                // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            const attributeTypes = typeMap[type].getAttributeTypeMap();
            const instance: { [index: string]: any } = {};
            for (const index in attributeTypes) {
                const attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(
                    data[attributeType.name],
                    attributeType.type,
                );
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf('Array<', 0) === 0) {
            // string.startsWith pre es6
            let subType: string = type.replace('Array<', ''); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            const transformedData: any[] = [];
            for (const index in data) {
                const date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        } else if (type === 'Date') {
            return new Date(data);
        } else {
            if (enumsMap[type]) {
                // is Enum
                return data;
            }

            if (!typeMap[type]) {
                // dont know the type
                return data;
            }
            const instance = new typeMap[type]();
            const attributeTypes = typeMap[type].getAttributeTypeMap();
            for (const index in attributeTypes) {
                const attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(
                    data[attributeType.baseName],
                    attributeType.type,
                );
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
     * Apply authentication settings to header and query params.
     */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username = '';
    public password = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username,
            password: this.password,
        };
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function' ? this.accessToken() : this.accessToken;
            requestOptions.headers.Authorization = 'Bearer ' + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey = '';

    constructor(private location: string, private paramName: string) {}

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == 'query') {
            requestOptions.qs[this.paramName] = this.apiKey;
        } else if (this.location == 'header' && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers.Cookie) {
                requestOptions.headers.Cookie += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            } else {
                requestOptions.headers.Cookie = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers.Authorization = 'Bearer ' + this.accessToken;
        }
    }
}

export class GateApiV4Auth implements Authentication {
    public key = '';
    public secret = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        const timestamp: string = (new Date().getTime() / 1000).toString();
        const resourcePath: string = new URL((requestOptions as localVarRequest.UriOptions).uri as string).pathname;
        // do not encode anything
        const queryString: string = qs.stringify(requestOptions.qs, undefined, undefined, { encodeURIComponent: s => s});
        let bodyParam = '';
        if (requestOptions.body) {
            if (typeof requestOptions.body == 'string') {
                bodyParam = requestOptions.body;
            } else {
                bodyParam = JSON.stringify(requestOptions.body);
            }
        }
        const hashedPayload = crypto.createHash('sha512').update(bodyParam).digest('hex');
        const signatureString = [requestOptions.method, resourcePath, queryString, hashedPayload, timestamp].join('\n');
        console.log('signature string to be calculated: ' + signatureString);
        const signature = crypto.createHmac('sha512', this.secret).update(signatureString).digest('hex');
        console.log('signature generated: ' + signature);
        (<any>Object).assign(requestOptions.headers, { KEY: this.key, Timestamp: timestamp, SIGN: signature });
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => Promise<void> | void;
