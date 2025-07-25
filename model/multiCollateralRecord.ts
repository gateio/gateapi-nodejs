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

import { MultiCollateralRecordCurrency } from './multiCollateralRecordCurrency';

/**
 * Multi-Collateral adjustment record.
 */
export class MultiCollateralRecord {
    /**
     * Order ID.
     */
    'orderId'?: number;
    /**
     * Collateral record ID.
     */
    'recordId'?: number;
    /**
     * The collateral ratio before adjustment.
     */
    'beforeLtv'?: string;
    /**
     * The collateral ratio before adjustment.
     */
    'afterLtv'?: string;
    /**
     * Operation time, timestamp in seconds.
     */
    'operateTime'?: number;
    /**
     * Borrowing Currency List.
     */
    'borrowCurrencies'?: Array<MultiCollateralRecordCurrency>;
    /**
     * Collateral Currency List.
     */
    'collateralCurrencies'?: Array<MultiCollateralRecordCurrency>;

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
        {
            name: 'borrowCurrencies',
            baseName: 'borrow_currencies',
            type: 'Array<MultiCollateralRecordCurrency>',
        },
        {
            name: 'collateralCurrencies',
            baseName: 'collateral_currencies',
            type: 'Array<MultiCollateralRecordCurrency>',
        },
    ];

    static getAttributeTypeMap() {
        return MultiCollateralRecord.attributeTypeMap;
    }
}
