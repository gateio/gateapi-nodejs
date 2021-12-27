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
 * Options underlying detail
 */
export class OptionsUnderlyingTicker {
    /**
     * Total put options trades amount in last 24h
     */
    'tradePut'?: number;
    /**
     * Total call options trades amount in last 24h
     */
    'tradeCall'?: number;
    /**
     * Index price
     */
    'indexPrice'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'tradePut',
            baseName: 'trade_put',
            type: 'number',
        },
        {
            name: 'tradeCall',
            baseName: 'trade_call',
            type: 'number',
        },
        {
            name: 'indexPrice',
            baseName: 'index_price',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return OptionsUnderlyingTicker.attributeTypeMap;
    }
}