/**
 * Gate API
 * Welcome to Gate API  APIv4 provides operations related to spot, margin, and contract trading, including public interfaces for querying market data and authenticated private interfaces for implementing API-based automated trading.
 *
 * Contact: support@mail.gate.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AccountBalance } from './accountBalance';

/**
 * User\'s balance in all accounts.
 */
export class TotalBalance {
    'total'?: AccountBalance;
    /**
     * Total balances in different accounts  - cross_margin: cross margin account - spot: spot account - finance: finance account - margin: margin account - quant: quant account - futures: futures account - delivery: delivery account - warrant: warrant account - cbbc: cbbc account
     */
    'details'?: { [key: string]: AccountBalance };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'total',
            baseName: 'total',
            type: 'AccountBalance',
        },
        {
            name: 'details',
            baseName: 'details',
            type: '{ [key: string]: AccountBalance; }',
        },
    ];

    static getAttributeTypeMap() {
        return TotalBalance.attributeTypeMap;
    }
}
