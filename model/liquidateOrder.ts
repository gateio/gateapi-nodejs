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
 * Liquidate Order detail
 */
export class LiquidateOrder {
    /**
     * User defined information. If not empty, must follow the rules below:  1. prefixed with `t-` 2. no longer than 28 bytes without `t-` prefix 3. can only include 0-9, A-Z, a-z, underscore(_), hyphen(-) or dot(.)
     */
    'text'?: string;
    /**
     * Currency pair
     */
    'currencyPair': string;
    /**
     * Trade amount
     */
    'amount': string;
    /**
     * Order price
     */
    'price': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'text',
            baseName: 'text',
            type: 'string',
        },
        {
            name: 'currencyPair',
            baseName: 'currency_pair',
            type: 'string',
        },
        {
            name: 'amount',
            baseName: 'amount',
            type: 'string',
        },
        {
            name: 'price',
            baseName: 'price',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return LiquidateOrder.attributeTypeMap;
    }
}