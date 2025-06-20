/**
 * Gate API v4
 * Welcome to Gate API  APIv4 provides spot, margin and futures trading operations. There are public APIs to retrieve the real-time market statistics, and private APIs which needs authentication to trade on user\'s behalf.
 *
 * Contact: support@mail.gate.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class FuturesAccountBook {
    /**
     * Change time
     */
    'time'?: number;
    /**
     * Change amount
     */
    'change'?: string;
    /**
     * Balance after change
     */
    'balance'?: string;
    /**
     * Changing Type：  - dnw: Deposit & Withdraw - pnl: Profit & Loss by reducing position - fee: Trading fee - refr: Referrer rebate - fund: Funding - point_dnw: POINT Deposit & Withdraw - point_fee: POINT Trading fee - point_refr: POINT Referrer rebate - bonus_offset: bouns deduction
     */
    'type'?: FuturesAccountBook.Type;
    /**
     * Comment
     */
    'text'?: string;
    /**
     * Futures contract, the field is only available for data after 2023-10-30.
     */
    'contract'?: string;
    /**
     * trade id
     */
    'tradeId'?: string;
    /**
     * 账户变更记录 id
     */
    'id'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'time',
            baseName: 'time',
            type: 'number',
        },
        {
            name: 'change',
            baseName: 'change',
            type: 'string',
        },
        {
            name: 'balance',
            baseName: 'balance',
            type: 'string',
        },
        {
            name: 'type',
            baseName: 'type',
            type: 'FuturesAccountBook.Type',
        },
        {
            name: 'text',
            baseName: 'text',
            type: 'string',
        },
        {
            name: 'contract',
            baseName: 'contract',
            type: 'string',
        },
        {
            name: 'tradeId',
            baseName: 'trade_id',
            type: 'string',
        },
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return FuturesAccountBook.attributeTypeMap;
    }
}

export namespace FuturesAccountBook {
    export enum Type {
        Dnw = <any>'dnw',
        Pnl = <any>'pnl',
        Fee = <any>'fee',
        Refr = <any>'refr',
        Fund = <any>'fund',
        PointDnw = <any>'point_dnw',
        PointFee = <any>'point_fee',
        PointRefr = <any>'point_refr',
        BonusOffset = <any>'bonus_offset',
    }
}
