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
 * Collateral record
 */
export class CollateralRecord {
    /**
     * Order ID
     */
    'orderId'?: number;
    /**
     * Collateral record ID
     */
    'recordId'?: number;
    /**
     * Borrowed currency
     */
    'borrowCurrency'?: string;
    /**
     * Borrowing amount
     */
    'borrowAmount'?: string;
    /**
     * Collateral
     */
    'collateralCurrency'?: string;
    /**
     * The collateral amount before adjustment
     */
    'beforeCollateral'?: string;
    /**
     * The collateral amount after adjustment
     */
    'afterCollateral'?: string;
    /**
     * The collateral ratio before adjustment
     */
    'beforeLtv'?: string;
    /**
     * The collateral ratio after adjustment
     */
    'afterLtv'?: string;
    /**
     * Timestamp of the operation, in seconds
     */
    'operateTime'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'orderId',
            baseName: 'order_id',
            type: 'number',
        },
        {
            name: 'recordId',
            baseName: 'record_id',
            type: 'number',
        },
        {
            name: 'borrowCurrency',
            baseName: 'borrow_currency',
            type: 'string',
        },
        {
            name: 'borrowAmount',
            baseName: 'borrow_amount',
            type: 'string',
        },
        {
            name: 'collateralCurrency',
            baseName: 'collateral_currency',
            type: 'string',
        },
        {
            name: 'beforeCollateral',
            baseName: 'before_collateral',
            type: 'string',
        },
        {
            name: 'afterCollateral',
            baseName: 'after_collateral',
            type: 'string',
        },
        {
            name: 'beforeLtv',
            baseName: 'before_ltv',
            type: 'string',
        },
        {
            name: 'afterLtv',
            baseName: 'after_ltv',
            type: 'string',
        },
        {
            name: 'operateTime',
            baseName: 'operate_time',
            type: 'number',
        },
    ];

    static getAttributeTypeMap() {
        return CollateralRecord.attributeTypeMap;
    }
}