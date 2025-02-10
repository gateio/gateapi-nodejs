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


export class DualGetOrders {
    /**
    * Order ID
    */
    'id'?: number;
    /**
    * Plan ID
    */
    'planId'?: number;
    /**
    * Copies
    */
    'copies'?: string;
    /**
    * Investment Amount
    */
    'investAmount'?: string;
    /**
    * Settlement Amount
    */
    'settlementAmount'?: string;
    /**
    * Creation time
    */
    'createTime'?: number;
    /**
    * Completion Time
    */
    'completeTime'?: number;
    /**
    * Status:  `INIT`-INIT `SETTLEMENT_SUCCESS`-Settlement Success `SETTLEMENT_PROCESSING`-SEttlement Processing `CANCELED`-Canceled `FAILED`-Failed
    */
    'status'?: string;
    /**
    * Investment Currency
    */
    'investCurrency'?: string;
    /**
    * Strike Currency
    */
    'exerciseCurrency'?: string;
    /**
    * Strike price
    */
    'exercisePrice'?: string;
    /**
    * settlement price
    */
    'settlementPrice'?: string;
    /**
    * Settle currency
    */
    'settlementCurrency'?: string;
    /**
    * APY
    */
    'apyDisplay'?: string;
    /**
    * Settlement APY
    */
    'apySettlement'?: string;
    /**
    * Settlement time
    */
    'deliveryTime'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "planId",
            "baseName": "plan_id",
            "type": "number"
        },
        {
            "name": "copies",
            "baseName": "copies",
            "type": "string"
        },
        {
            "name": "investAmount",
            "baseName": "invest_amount",
            "type": "string"
        },
        {
            "name": "settlementAmount",
            "baseName": "settlement_amount",
            "type": "string"
        },
        {
            "name": "createTime",
            "baseName": "create_time",
            "type": "number"
        },
        {
            "name": "completeTime",
            "baseName": "complete_time",
            "type": "number"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "investCurrency",
            "baseName": "invest_currency",
            "type": "string"
        },
        {
            "name": "exerciseCurrency",
            "baseName": "exercise_currency",
            "type": "string"
        },
        {
            "name": "exercisePrice",
            "baseName": "exercise_price",
            "type": "string"
        },
        {
            "name": "settlementPrice",
            "baseName": "settlement_price",
            "type": "string"
        },
        {
            "name": "settlementCurrency",
            "baseName": "settlement_currency",
            "type": "string"
        },
        {
            "name": "apyDisplay",
            "baseName": "apy_display",
            "type": "string"
        },
        {
            "name": "apySettlement",
            "baseName": "apy_settlement",
            "type": "string"
        },
        {
            "name": "deliveryTime",
            "baseName": "delivery_time",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return DualGetOrders.attributeTypeMap;
    }
}

