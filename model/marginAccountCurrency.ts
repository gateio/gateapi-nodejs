/**
 * Gate API v4
 * Welcome to Gate API  APIv4 provides spot, margin and futures trading operations. There are public APIs to retrieve the real-time market statistics, and private APIs which needs authentication to trade on user\'s behalf.
 *
 * Contact: support@mail.gate.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Account currency details
 */
export class MarginAccountCurrency {
    /**
     * Currency name
     */
    'currency'?: string;
    /**
     * Amount suitable for margin trading.
     */
    'available'?: string;
    /**
     * Locked amount, used in margin trading
     */
    'locked'?: string;
    /**
     * Borrowed amount
     */
    'borrowed'?: string;
    /**
     * Unpaid interests
     */
    'interest'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'currency',
            baseName: 'currency',
            type: 'string',
        },
        {
            name: 'available',
            baseName: 'available',
            type: 'string',
        },
        {
            name: 'locked',
            baseName: 'locked',
            type: 'string',
        },
        {
            name: 'borrowed',
            baseName: 'borrowed',
            type: 'string',
        },
        {
            name: 'interest',
            baseName: 'interest',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return MarginAccountCurrency.attributeTypeMap;
    }
}
