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

/**
 * Loan.
 */
export class UniLoan {
    /**
     * Currency.
     */
    'currency'?: string;
    /**
     * Currency pair.
     */
    'currencyPair'?: string;
    /**
     * amount.
     */
    'amount'?: string;
    /**
     * Loan type, platform - platform, margin - margin.
     */
    'type'?: string;
    /**
     * Created time.
     */
    'createTime'?: number;
    /**
     * Updated time.
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
