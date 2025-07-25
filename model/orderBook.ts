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

export class OrderBook {
    /**
     * Order book ID, which is updated whenever the order book is changed. Valid only when `with_id` is set to `true`
     */
    'id'?: number;
    /**
     * The timestamp of the response data being generated (in milliseconds).
     */
    'current'?: number;
    /**
     * The timestamp of when the orderbook last changed (in milliseconds).
     */
    'update'?: number;
    /**
     * Asks order depth.
     */
    'asks': Array<Array<string>>;
    /**
     * Bids order depth.
     */
    'bids': Array<Array<string>>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'id',
            baseName: 'id',
            type: 'number',
        },
        {
            name: 'current',
            baseName: 'current',
            type: 'number',
        },
        {
            name: 'update',
            baseName: 'update',
            type: 'number',
        },
        {
            name: 'asks',
            baseName: 'asks',
            type: 'Array<Array<string>>',
        },
        {
            name: 'bids',
            baseName: 'bids',
            type: 'Array<Array<string>>',
        },
    ];

    static getAttributeTypeMap() {
        return OrderBook.attributeTypeMap;
    }
}
