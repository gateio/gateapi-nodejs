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

import { SpotPricePutOrder } from './spotPricePutOrder';
import { SpotPriceTrigger } from './spotPriceTrigger';

/**
 * Spot order detail.
 */
export class SpotPriceTriggeredOrder {
    'trigger': SpotPriceTrigger;
    'put': SpotPricePutOrder;
    /**
     * Auto order ID.
     */
    'id'?: number;
    /**
     * User ID.
     */
    'user'?: number;
    /**
     * Currency pair.
     */
    'market': string;
    /**
     * Creation time.
     */
    'ctime'?: number;
    /**
     * Finished time.
     */
    'ftime'?: number;
    /**
     * ID of the newly created order on condition triggered.
     */
    'firedOrderId'?: number;
    /**
     * Status  - open: open - cancelled: being manually cancelled - finish: successfully executed - failed: failed to execute - expired - expired
     */
    'status'?: string;
    /**
     * Additional remarks on how the order was finished.
     */
    'reason'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'trigger',
            baseName: 'trigger',
            type: 'SpotPriceTrigger',
        },
        {
            name: 'put',
            baseName: 'put',
            type: 'SpotPricePutOrder',
        },
        {
            name: 'id',
            baseName: 'id',
            type: 'number',
        },
        {
            name: 'user',
            baseName: 'user',
            type: 'number',
        },
        {
            name: 'market',
            baseName: 'market',
            type: 'string',
        },
        {
            name: 'ctime',
            baseName: 'ctime',
            type: 'number',
        },
        {
            name: 'ftime',
            baseName: 'ftime',
            type: 'number',
        },
        {
            name: 'firedOrderId',
            baseName: 'fired_order_id',
            type: 'number',
        },
        {
            name: 'status',
            baseName: 'status',
            type: 'string',
        },
        {
            name: 'reason',
            baseName: 'reason',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return SpotPriceTriggeredOrder.attributeTypeMap;
    }
}
