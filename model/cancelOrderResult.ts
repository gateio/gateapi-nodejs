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
 * Order cancellation result
 */
export class CancelOrderResult {
    /**
     * Order currency pair
     */
    'currencyPair'?: string;
    /**
     * Order ID
     */
    'id'?: string;
    /**
     * 订单自定义信息
     */
    'text'?: string;
    /**
     * Whether cancellation succeeded
     */
    'succeeded'?: boolean;
    /**
     * Error label when failed to cancel the order; emtpy if succeeded
     */
    'label'?: string;
    /**
     * Error message when failed to cancel the order; empty if succeeded
     */
    'message'?: string;
    /**
     * Empty by default. If cancelled order is cross margin order, this field is set to `cross_margin`
     */
    'account'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'currencyPair',
            baseName: 'currency_pair',
            type: 'string',
        },
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'text',
            baseName: 'text',
            type: 'string',
        },
        {
            name: 'succeeded',
            baseName: 'succeeded',
            type: 'boolean',
        },
        {
            name: 'label',
            baseName: 'label',
            type: 'string',
        },
        {
            name: 'message',
            baseName: 'message',
            type: 'string',
        },
        {
            name: 'account',
            baseName: 'account',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return CancelOrderResult.attributeTypeMap;
    }
}
