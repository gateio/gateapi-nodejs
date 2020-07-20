/**
 * Gate API v4
 * APIv4 provides spot, margin and futures trading operations. There are public APIs to retrieve the real-time market statistics, and private APIs which needs authentication to trade on user\'s behalf.
 *
 * Contact: support@mail.gate.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { PositionCloseOrder } from './positionCloseOrder';

/**
* Futures position details
*/
export class Position {
    /**
    * User ID
    */
    'user'?: number;
    /**
    * Futures contract
    */
    'contract'?: string;
    /**
    * Position size
    */
    'size'?: number;
    /**
    * Position leverage. 0 means cross margin; positive number means isolated margin
    */
    'leverage'?: string;
    /**
    * Position risk limit
    */
    'riskLimit'?: string;
    /**
    * Maximum leverage under current risk limit
    */
    'leverageMax'?: string;
    /**
    * Maintenance rate under current risk limit
    */
    'maintenanceRate'?: string;
    /**
    * Position value calculated in settlement currency
    */
    'value'?: string;
    /**
    * Position margin
    */
    'margin'?: string;
    /**
    * Entry price
    */
    'entryPrice'?: string;
    /**
    * Liquidation price
    */
    'liqPrice'?: string;
    /**
    * Current mark price
    */
    'markPrice'?: string;
    /**
    * Unrealized PNL
    */
    'unrealisedPnl'?: string;
    /**
    * Realized PNL
    */
    'realisedPnl'?: string;
    /**
    * History realized PNL
    */
    'historyPnl'?: string;
    /**
    * PNL of last position close
    */
    'lastClosePnl'?: string;
    /**
    * Realized POINT PNL
    */
    'realisedPoint'?: string;
    /**
    * History realized POINT PNL
    */
    'historyPoint'?: string;
    /**
    * ADL ranking, range from 1 to 5
    */
    'adlRanking'?: number;
    /**
    * Current open orders
    */
    'pendingOrders'?: number;
    'closeOrder'?: PositionCloseOrder;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "user",
            "baseName": "user",
            "type": "number"
        },
        {
            "name": "contract",
            "baseName": "contract",
            "type": "string"
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "number"
        },
        {
            "name": "leverage",
            "baseName": "leverage",
            "type": "string"
        },
        {
            "name": "riskLimit",
            "baseName": "risk_limit",
            "type": "string"
        },
        {
            "name": "leverageMax",
            "baseName": "leverage_max",
            "type": "string"
        },
        {
            "name": "maintenanceRate",
            "baseName": "maintenance_rate",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        },
        {
            "name": "margin",
            "baseName": "margin",
            "type": "string"
        },
        {
            "name": "entryPrice",
            "baseName": "entry_price",
            "type": "string"
        },
        {
            "name": "liqPrice",
            "baseName": "liq_price",
            "type": "string"
        },
        {
            "name": "markPrice",
            "baseName": "mark_price",
            "type": "string"
        },
        {
            "name": "unrealisedPnl",
            "baseName": "unrealised_pnl",
            "type": "string"
        },
        {
            "name": "realisedPnl",
            "baseName": "realised_pnl",
            "type": "string"
        },
        {
            "name": "historyPnl",
            "baseName": "history_pnl",
            "type": "string"
        },
        {
            "name": "lastClosePnl",
            "baseName": "last_close_pnl",
            "type": "string"
        },
        {
            "name": "realisedPoint",
            "baseName": "realised_point",
            "type": "string"
        },
        {
            "name": "historyPoint",
            "baseName": "history_point",
            "type": "string"
        },
        {
            "name": "adlRanking",
            "baseName": "adl_ranking",
            "type": "number"
        },
        {
            "name": "pendingOrders",
            "baseName": "pending_orders",
            "type": "number"
        },
        {
            "name": "closeOrder",
            "baseName": "close_order",
            "type": "PositionCloseOrder"
        }    ];

    static getAttributeTypeMap() {
        return Position.attributeTypeMap;
    }
}
