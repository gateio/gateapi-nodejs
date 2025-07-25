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

export class MyFuturesTrade {
    /**
     * Trade ID.
     */
    'id'?: number;
    /**
     * Trading time.
     */
    'createTime'?: number;
    /**
     * Futures contract.
     */
    'contract'?: string;
    /**
     * Order ID related.
     */
    'orderId'?: string;
    /**
     * Trading size.
     */
    'size'?: number;
    /**
     * Number of closed positions:  close_size=0 && size＞0 Open long position close_size=0 && size＜0 Open short position close_size>0 && size>0 && size <= close_size Close > close_size Close short position and open long position close_size<0 && size<0 && size >= close_size Close long postion close_size<0 && size<0 && size < close_size Close long position and open short position
     */
    'closeSize'?: number;
    /**
     * Trading price.
     */
    'price'?: string;
    /**
     * Trade role. Available values are `taker` and `maker`.
     */
    'role'?: MyFuturesTrade.Role;
    /**
     * User defined information.
     */
    'text'?: string;
    /**
     * Fee deducted.
     */
    'fee'?: string;
    /**
     * Points used to deduct fee.
     */
    'pointFee'?: string;

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
            name: 'contract',
            baseName: 'contract',
            type: 'string',
        },
        {
            name: 'orderId',
            baseName: 'order_id',
            type: 'string',
        },
        {
            name: 'size',
            baseName: 'size',
            type: 'number',
        },
        {
            name: 'closeSize',
            baseName: 'close_size',
            type: 'number',
        },
        {
            name: 'price',
            baseName: 'price',
            type: 'string',
        },
        {
            name: 'role',
            baseName: 'role',
            type: 'MyFuturesTrade.Role',
        },
        {
            name: 'text',
            baseName: 'text',
            type: 'string',
        },
        {
            name: 'fee',
            baseName: 'fee',
            type: 'string',
        },
        {
            name: 'pointFee',
            baseName: 'point_fee',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return MyFuturesTrade.attributeTypeMap;
    }
}

export namespace MyFuturesTrade {
    export enum Role {
        Taker = <any>'taker',
        Maker = <any>'maker',
    }
}
