/**
 * Gate API v4
 * Welcome to Gate.io API  APIv4 provides spot, margin and futures trading operations. There are public APIs to retrieve the real-time market statistics, and private APIs which needs authentication to trade on user\'s behalf.
 *
 * Contact: support@mail.gate.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Total balances calculated with specified currency unit
 */
export class AccountBalance {
    /**
     * Account total balance amount
     */
    'amount'?: string;
    /**
     * Currency
     */
    'currency'?: AccountBalance.Currency;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'amount',
            baseName: 'amount',
            type: 'string',
        },
        {
            name: 'currency',
            baseName: 'currency',
            type: 'AccountBalance.Currency',
        },
    ];

    static getAttributeTypeMap() {
        return AccountBalance.attributeTypeMap;
    }
}

export namespace AccountBalance {
    export enum Currency {
        BTC = <any>'BTC',
        CNY = <any>'CNY',
        USD = <any>'USD',
        USDT = <any>'USDT',
    }
}