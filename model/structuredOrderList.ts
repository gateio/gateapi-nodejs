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
 * Structured order
 */
export class StructuredOrderList {
    /**
     * Order ID
     */
    'id'?: number;
    /**
     * Plan ID
     */
    'pid'?: string;
    /**
     * Locked coin
     */
    'lockCoin'?: string;
    /**
     * Locked amount
     */
    'amount'?: string;
    /**
     * Status:   SUCCESS - SUCCESS  FAILED - FAILED DONE - DONE
     */
    'status'?: string;
    /**
     * Income
     */
    'income'?: string;
    /**
     * Created time
     */
    'createTime'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'id',
            baseName: 'id',
            type: 'number',
        },
        {
            name: 'pid',
            baseName: 'pid',
            type: 'string',
        },
        {
            name: 'lockCoin',
            baseName: 'lock_coin',
            type: 'string',
        },
        {
            name: 'amount',
            baseName: 'amount',
            type: 'string',
        },
        {
            name: 'status',
            baseName: 'status',
            type: 'string',
        },
        {
            name: 'income',
            baseName: 'income',
            type: 'string',
        },
        {
            name: 'createTime',
            baseName: 'create_time',
            type: 'number',
        },
    ];

    static getAttributeTypeMap() {
        return StructuredOrderList.attributeTypeMap;
    }
}