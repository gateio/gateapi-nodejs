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

import { FuturesInitialOrder } from './futuresInitialOrder';
import { FuturesPriceTrigger } from './futuresPriceTrigger';

/**
 * Futures order details
 */
export class FuturesPriceTriggeredOrder {
    'initial': FuturesInitialOrder;
    'trigger': FuturesPriceTrigger;
    /**
     * Auto order ID
     */
    'id'?: number;
    /**
     * User ID
     */
    'user'?: number;
    /**
     * Creation time
     */
    'createTime'?: number;
    /**
     * Finished time
     */
    'finishTime'?: number;
    /**
     * ID of the newly created order on condition triggered
     */
    'tradeId'?: number;
    /**
     * Auto order status  - `open`: order is active - `finished`: order is finished - `inactive`: order is not active, only for close-long-order or close-short-order - `invalid`: order is invalid, only for close-long-order or close-short-order
     */
    'status'?: FuturesPriceTriggeredOrder.Status;
    /**
     * How order is finished
     */
    'finishAs'?: FuturesPriceTriggeredOrder.FinishAs;
    /**
     * Additional remarks on how the order was finished
     */
    'reason'?: string;
    /**
     * Take-profit/stop-loss types, which include:  - `close-long-order`: order take-profit/stop-loss, close long position - `close-short-order`: order take-profit/stop-loss, close short position - `close-long-position`: position take-profit/stop-loss, close long position - `close-short-position`: position take-profit/stop-loss, close short position - `plan-close-long-position`: position planned take-profit/stop-loss, close long position - `plan-close-short-position`: position planned take-profit/stop-loss, close short position  The order take-profit/stop-loss can not be passed by request. These two types are read only.
     */
    'orderType'?: string;
    /**
     * Corresponding order ID of order take-profit/stop-loss.
     */
    'meOrderId'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'initial',
            baseName: 'initial',
            type: 'FuturesInitialOrder',
        },
        {
            name: 'trigger',
            baseName: 'trigger',
            type: 'FuturesPriceTrigger',
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
            name: 'createTime',
            baseName: 'create_time',
            type: 'number',
        },
        {
            name: 'finishTime',
            baseName: 'finish_time',
            type: 'number',
        },
        {
            name: 'tradeId',
            baseName: 'trade_id',
            type: 'number',
        },
        {
            name: 'status',
            baseName: 'status',
            type: 'FuturesPriceTriggeredOrder.Status',
        },
        {
            name: 'finishAs',
            baseName: 'finish_as',
            type: 'FuturesPriceTriggeredOrder.FinishAs',
        },
        {
            name: 'reason',
            baseName: 'reason',
            type: 'string',
        },
        {
            name: 'orderType',
            baseName: 'order_type',
            type: 'string',
        },
        {
            name: 'meOrderId',
            baseName: 'me_order_id',
            type: 'number',
        },
    ];

    static getAttributeTypeMap() {
        return FuturesPriceTriggeredOrder.attributeTypeMap;
    }
}

export namespace FuturesPriceTriggeredOrder {
    export enum Status {
        Open = <any>'open',
        Finished = <any>'finished',
        Inactive = <any>'inactive',
        Invalid = <any>'invalid',
    }
    export enum FinishAs {
        Cancelled = <any>'cancelled',
        Succeeded = <any>'succeeded',
        Failed = <any>'failed',
        Expired = <any>'expired',
    }
}
