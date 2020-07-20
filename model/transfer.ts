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


/**
* Accounts available to transfer:  - `spot`: spot account - `margin`: margin account - `futures`: perpetual futures account - `delivery`: delivery futures account
*/
export class Transfer {
    /**
    * Transfer currency. For futures account, `currency` can be set to `POINT` or settle currency
    */
    'currency': string;
    /**
    * Account transferred from
    */
    'from': Transfer.From;
    /**
    * Account transferred to
    */
    'to': Transfer.To;
    /**
    * Transfer amount
    */
    'amount': string;
    /**
    * Margin currency pair. Required if transfer from or to margin account
    */
    'currencyPair'?: string;
    /**
    * Futures settle currency. Required if `currency` is `POINT`
    */
    'settle'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "from",
            "baseName": "from",
            "type": "Transfer.From"
        },
        {
            "name": "to",
            "baseName": "to",
            "type": "Transfer.To"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "string"
        },
        {
            "name": "currencyPair",
            "baseName": "currency_pair",
            "type": "string"
        },
        {
            "name": "settle",
            "baseName": "settle",
            "type": "string"
        }
    ];

    static getAttributeTypeMap() {
        return Transfer.attributeTypeMap;
    }
}

export namespace Transfer {
    export enum From {
        Spot = <any> 'spot',
        Margin = <any> 'margin',
        Futures = <any> 'futures',
        Delivery = <any> 'delivery'
    }
    export enum To {
        Spot = <any> 'spot',
        Margin = <any> 'margin',
        Futures = <any> 'futures',
        Delivery = <any> 'delivery'
    }
}
