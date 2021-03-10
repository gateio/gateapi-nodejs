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

export class Ticker {
    /**
     * Currency pair
     */
    'currencyPair'?: string;
    /**
     * Last trading price
     */
    'last'?: string;
    /**
     * Lowest ask
     */
    'lowestAsk'?: string;
    /**
     * Highest bid
     */
    'highestBid'?: string;
    /**
     * Change percentage.
     */
    'changePercentage'?: string;
    /**
     * Base currency trade volume
     */
    'baseVolume'?: string;
    /**
     * Quote currency trade volume
     */
    'quoteVolume'?: string;
    /**
     * Highest price in 24h
     */
    'high24h'?: string;
    /**
     * Lowest price in 24h
     */
    'low24h'?: string;
    /**
     * ETF net value
     */
    'etfNetValue'?: string;
    /**
     * ETF previous net value at re-balancing time
     */
    'etfPreNetValue'?: string | null;
    /**
     * ETF previous re-balancing time
     */
    'etfPreTimestamp'?: number | null;
    /**
     * ETF current leverage
     */
    'etfLeverage'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'currencyPair',
            baseName: 'currency_pair',
            type: 'string',
        },
        {
            name: 'last',
            baseName: 'last',
            type: 'string',
        },
        {
            name: 'lowestAsk',
            baseName: 'lowest_ask',
            type: 'string',
        },
        {
            name: 'highestBid',
            baseName: 'highest_bid',
            type: 'string',
        },
        {
            name: 'changePercentage',
            baseName: 'change_percentage',
            type: 'string',
        },
        {
            name: 'baseVolume',
            baseName: 'base_volume',
            type: 'string',
        },
        {
            name: 'quoteVolume',
            baseName: 'quote_volume',
            type: 'string',
        },
        {
            name: 'high24h',
            baseName: 'high_24h',
            type: 'string',
        },
        {
            name: 'low24h',
            baseName: 'low_24h',
            type: 'string',
        },
        {
            name: 'etfNetValue',
            baseName: 'etf_net_value',
            type: 'string',
        },
        {
            name: 'etfPreNetValue',
            baseName: 'etf_pre_net_value',
            type: 'string',
        },
        {
            name: 'etfPreTimestamp',
            baseName: 'etf_pre_timestamp',
            type: 'number',
        },
        {
            name: 'etfLeverage',
            baseName: 'etf_leverage',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return Ticker.attributeTypeMap;
    }
}
