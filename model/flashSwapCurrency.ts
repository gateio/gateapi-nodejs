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
 * Currencies supported in flash swap
 */
export class FlashSwapCurrency {
    /**
     * Currency name
     */
    'currency'?: string;
    /**
     * Minimum amount required in flash swap
     */
    'minAmount'?: string;
    /**
     * Maximum amount allowed in flash swap
     */
    'maxAmount'?: string;
    /**
     * Currencies which can be swapped to from this currency
     */
    'swappable'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'currency',
            baseName: 'currency',
            type: 'string',
        },
        {
            name: 'minAmount',
            baseName: 'min_amount',
            type: 'string',
        },
        {
            name: 'maxAmount',
            baseName: 'max_amount',
            type: 'string',
        },
        {
            name: 'swappable',
            baseName: 'swappable',
            type: 'Array<string>',
        },
    ];

    static getAttributeTypeMap() {
        return FlashSwapCurrency.attributeTypeMap;
    }
}
