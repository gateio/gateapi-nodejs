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

import { FuturesAccount } from './futuresAccount';

export class SubAccountFuturesBalance {
    /**
     * User ID.
     */
    'uid'?: string;
    /**
     * Futures account balances.
     */
    'available'?: { [key: string]: FuturesAccount };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'uid',
            baseName: 'uid',
            type: 'string',
        },
        {
            name: 'available',
            baseName: 'available',
            type: '{ [key: string]: FuturesAccount; }',
        },
    ];

    static getAttributeTypeMap() {
        return SubAccountFuturesBalance.attributeTypeMap;
    }
}
