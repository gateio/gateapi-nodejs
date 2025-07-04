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

/**
 * Loan
 */
export class UniLoan {
    /**
     * Currency
     */
    'currency'?: string;
    /**
     * Currency pair
     */
    'currencyPair'?: string;
    /**
     * amount
     */
    'amount'?: string;
    /**
     * Loan type, platform - platform, margin - margin
     */
    'type'?: string;
    /**
     * Created time
     */
    'createTime'?: number;
    /**
     * Updated time
     */
    'updateTime'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'currency',
            baseName: 'currency',
            type: 'string',
        },
        {
            name: 'currencyPair',
            baseName: 'currency_pair',
            type: 'string',
        },
        {
            name: 'amount',
            baseName: 'amount',
            type: 'string',
        },
        {
            name: 'type',
            baseName: 'type',
            type: 'string',
        },
        {
            name: 'createTime',
            baseName: 'create_time',
            type: 'number',
        },
        {
            name: 'updateTime',
            baseName: 'update_time',
            type: 'number',
        },
    ];

    static getAttributeTypeMap() {
        return UniLoan.attributeTypeMap;
    }
}
