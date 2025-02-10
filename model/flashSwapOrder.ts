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
* Flash swap order
*/
export class FlashSwapOrder {
    /**
    * Flash swap order ID
    */
    'id'?: number;
    /**
    * Creation time of order (in milliseconds)
    */
    'createTime'?: number;
    /**
    * User ID
    */
    'userId'?: number;
    /**
    * Currency to sell
    */
    'sellCurrency'?: string;
    /**
    * Amount to sell
    */
    'sellAmount'?: string;
    /**
    * Currency to buy
    */
    'buyCurrency'?: string;
    /**
    * Amount to buy
    */
    'buyAmount'?: string;
    /**
    * Price
    */
    'price'?: string;
    /**
    * Flash swap order status  `1` - success `2` - failure
    */
    'status'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "createTime",
            "baseName": "create_time",
            "type": "number"
        },
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "number"
        },
        {
            "name": "sellCurrency",
            "baseName": "sell_currency",
            "type": "string"
        },
        {
            "name": "sellAmount",
            "baseName": "sell_amount",
            "type": "string"
        },
        {
            "name": "buyCurrency",
            "baseName": "buy_currency",
            "type": "string"
        },
        {
            "name": "buyAmount",
            "baseName": "buy_amount",
            "type": "string"
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return FlashSwapOrder.attributeTypeMap;
    }
}

