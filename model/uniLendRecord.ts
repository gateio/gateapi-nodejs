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
* Interest Record
*/
export class UniLendRecord {
    /**
    * Currency name
    */
    'currency'?: string;
    /**
    * current amount
    */
    'amount'?: string;
    /**
    * Last wallet amount
    */
    'lastWalletAmount'?: string;
    /**
    * Last lent amount
    */
    'lastLentAmount'?: string;
    /**
    * Last frozen amount
    */
    'lastFrozenAmount'?: string;
    /**
    * Record type: lend - lend, redeem - redeem
    */
    'type'?: string;
    /**
    * Created time
    */
    'createTime'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "string"
        },
        {
            "name": "lastWalletAmount",
            "baseName": "last_wallet_amount",
            "type": "string"
        },
        {
            "name": "lastLentAmount",
            "baseName": "last_lent_amount",
            "type": "string"
        },
        {
            "name": "lastFrozenAmount",
            "baseName": "last_frozen_amount",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "createTime",
            "baseName": "create_time",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return UniLendRecord.attributeTypeMap;
    }
}

