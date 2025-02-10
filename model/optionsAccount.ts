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
    * Account balance
    */
    'total'?: string;
    /**
    * Position value, long position value is positive, short position value is negative
    */
    'positionValue'?: string;
    /**
    * Account equity, the sum of account balance and position value
    */
    'equity'?: string;
    /**
    * If the account is allowed to short
    */
    'shortEnabled'?: boolean;
    /**
    * Whether to enable MMP
    */
    'mmpEnabled'?: boolean;
    /**
    * Whether to trigger position liquidation
    */
    'liqTriggered'?: boolean;
    /**
    * ｜ 保证金模式： - 0：经典现货保证金模式 - 1：跨币种保证金模式 - 2：组合保证金模式
    */
    'marginMode'?: OptionsAccount.MarginMode;
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
    * Margin for outstanding sell orders
    */
    'askOrderMargin'?: string;
    /**
    * Margin for outstanding buy orders
    */
    'bidOrderMargin'?: string;
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
    /**
    * Maximum number of outstanding orders
    */
    'ordersLimit'?: number;
    /**
    * Notional value upper limit, including the nominal value of positions and outstanding orders
    */
    'positionNotionalLimit'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "user",
            "baseName": "user",
            "type": "number"
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "string"
        },
        {
            "name": "positionValue",
            "baseName": "position_value",
            "type": "string"
        },
        {
            "name": "equity",
            "baseName": "equity",
            "type": "string"
        },
        {
            "name": "shortEnabled",
            "baseName": "short_enabled",
            "type": "boolean"
        },
        {
            "name": "mmpEnabled",
            "baseName": "mmp_enabled",
            "type": "boolean"
        },
        {
            "name": "liqTriggered",
            "baseName": "liq_triggered",
            "type": "boolean"
        },
        {
            "name": "marginMode",
            "baseName": "margin_mode",
            "type": "OptionsAccount.MarginMode"
        },
        {
            "name": "unrealisedPnl",
            "baseName": "unrealised_pnl",
            "type": "string"
        },
        {
            "name": "initMargin",
            "baseName": "init_margin",
            "type": "string"
        },
        {
            "name": "maintMargin",
            "baseName": "maint_margin",
            "type": "string"
        },
        {
            "name": "orderMargin",
            "baseName": "order_margin",
            "type": "string"
        },
        {
            "name": "askOrderMargin",
            "baseName": "ask_order_margin",
            "type": "string"
        },
        {
            "name": "bidOrderMargin",
            "baseName": "bid_order_margin",
            "type": "string"
        },
        {
            "name": "available",
            "baseName": "available",
            "type": "string"
        },
        {
            "name": "point",
            "baseName": "point",
            "type": "string"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "ordersLimit",
            "baseName": "orders_limit",
            "type": "number"
        },
        {
            "name": "positionNotionalLimit",
            "baseName": "position_notional_limit",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return OptionsAccount.attributeTypeMap;
    }
}

export namespace OptionsAccount {
    export enum MarginMode {
        NUMBER_0 = <any> 0,
        NUMBER_1 = <any> 1,
        NUMBER_2 = <any> 2
    }
}
