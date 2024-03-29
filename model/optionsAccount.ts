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

export class OptionsAccount {
    /**
     * User ID
     */
    'user'?: number;
    /**
     * Total account balance
     */
    'total'?: string;
    /**
     * If the account is allowed to short
     */
    'shortEnabled'?: boolean;
    /**
     * Unrealized PNL
     */
    'unrealisedPnl'?: string;
    /**
     * Initial position margin
     */
    'initMargin'?: string;
    /**
     * Position maintenance margin
     */
    'maintMargin'?: string;
    /**
     * Order margin of unfinished orders
     */
    'orderMargin'?: string;
    /**
     * Available balance to transfer out or trade
     */
    'available'?: string;
    /**
     * POINT amount
     */
    'point'?: string;
    /**
     * Settle currency
     */
    'currency'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'user',
            baseName: 'user',
            type: 'number',
        },
        {
            name: 'total',
            baseName: 'total',
            type: 'string',
        },
        {
            name: 'shortEnabled',
            baseName: 'short_enabled',
            type: 'boolean',
        },
        {
            name: 'unrealisedPnl',
            baseName: 'unrealised_pnl',
            type: 'string',
        },
        {
            name: 'initMargin',
            baseName: 'init_margin',
            type: 'string',
        },
        {
            name: 'maintMargin',
            baseName: 'maint_margin',
            type: 'string',
        },
        {
            name: 'orderMargin',
            baseName: 'order_margin',
            type: 'string',
        },
        {
            name: 'available',
            baseName: 'available',
            type: 'string',
        },
        {
            name: 'point',
            baseName: 'point',
            type: 'string',
        },
        {
            name: 'currency',
            baseName: 'currency',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return OptionsAccount.attributeTypeMap;
    }
}
