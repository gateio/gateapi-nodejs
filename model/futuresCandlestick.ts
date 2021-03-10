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
 * data point in every timestamp
 */
export class FuturesCandlestick {
    /**
     * Unix timestamp in seconds
     */
    't'?: number;
    /**
     * size volume. Only returned if `contract` is not prefixed
     */
    'v'?: number;
    /**
     * Close price
     */
    'c'?: string;
    /**
     * Highest price
     */
    'h'?: string;
    /**
     * Lowest price
     */
    'l'?: string;
    /**
     * Open price
     */
    'o'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 't',
            baseName: 't',
            type: 'number',
        },
        {
            name: 'v',
            baseName: 'v',
            type: 'number',
        },
        {
            name: 'c',
            baseName: 'c',
            type: 'string',
        },
        {
            name: 'h',
            baseName: 'h',
            type: 'string',
        },
        {
            name: 'l',
            baseName: 'l',
            type: 'string',
        },
        {
            name: 'o',
            baseName: 'o',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return FuturesCandlestick.attributeTypeMap;
    }
}
