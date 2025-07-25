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

export class FuturesTrade {
    /**
     * Trade ID.
     */
    'id'?: number;
    /**
     * Trading time.
     */
    'createTime'?: number;
    /**
     * Trading time, with milliseconds set to 3 decimal places.
     */
    'createTimeMs'?: number;
    /**
     * Futures contract.
     */
    'contract'?: string;
    /**
     * Trading size.
     */
    'size'?: number;
    /**
     * Trading price (quote currency).
     */
    'price'?: string;
    /**
     * Whether internal trade. Internal trade refers to the takeover of liquidation orders by the insurance fund and ADL users. Since it is not a normal matching on the market depth, the transaction price may deviate, and it will not be recorded in the K-line. an internal trade, this field will not be returned.
     */
    'isInternal'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'id',
            baseName: 'id',
            type: 'number',
        },
        {
            name: 'createTime',
            baseName: 'create_time',
            type: 'number',
        },
        {
            name: 'createTimeMs',
            baseName: 'create_time_ms',
            type: 'number',
        },
        {
            name: 'contract',
            baseName: 'contract',
            type: 'string',
        },
        {
            name: 'size',
            baseName: 'size',
            type: 'number',
        },
        {
            name: 'price',
            baseName: 'price',
            type: 'string',
        },
        {
            name: 'isInternal',
            baseName: 'is_internal',
            type: 'boolean',
        },
    ];

    static getAttributeTypeMap() {
        return FuturesTrade.attributeTypeMap;
    }
}
