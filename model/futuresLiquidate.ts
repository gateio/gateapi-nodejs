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


export class FuturesLiquidate {
    /**
    * Liquidation time
    */
    'time'?: number;
    /**
    * Futures contract
    */
    'contract'?: string;
    /**
    * Position leverage. Not returned in public endpoints.
    */
    'leverage'?: string;
    /**
    * Position size
    */
    'size'?: number;
    /**
    * Position margin. Not returned in public endpoints.
    */
    'margin'?: string;
    /**
    * Average entry price. Not returned in public endpoints.
    */
    'entryPrice'?: string;
    /**
    * Liquidation price. Not returned in public endpoints.
    */
    'liqPrice'?: string;
    /**
    * Mark price. Not returned in public endpoints.
    */
    'markPrice'?: string;
    /**
    * Liquidation order ID. Not returned in public endpoints.
    */
    'orderId'?: number;
    /**
    * Liquidation order price
    */
    'orderPrice'?: string;
    /**
    * Liquidation order average taker price
    */
    'fillPrice'?: string;
    /**
    * Liquidation order maker size
    */
    'left'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "time",
            "baseName": "time",
            "type": "number"
        },
        {
            "name": "contract",
            "baseName": "contract",
            "type": "string"
        },
        {
            "name": "leverage",
            "baseName": "leverage",
            "type": "string"
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "number"
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
            "name": "orderId",
            "baseName": "order_id",
            "type": "number"
        },
        {
            "name": "orderPrice",
            "baseName": "order_price",
            "type": "string"
        },
        {
            "name": "fillPrice",
            "baseName": "fill_price",
            "type": "string"
        },
        {
            "name": "left",
            "baseName": "left",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return FuturesLiquidate.attributeTypeMap;
    }
}

