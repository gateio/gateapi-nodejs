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


export class MultiLoanItem {
    /**
    * Currency
    */
    'currency'?: string;
    /**
    * Latest price of the currency
    */
    'price'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return MultiLoanItem.attributeTypeMap;
    }
}

