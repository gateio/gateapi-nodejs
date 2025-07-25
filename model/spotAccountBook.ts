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

export class SpotAccountBook {
    /**
     * Balance change record ID.
     */
    'id'?: string;
    /**
     * The timestamp of the change (in milliseconds).
     */
    'time'?: number;
    /**
     * Currency changed.
     */
    'currency'?: string;
    /**
     * Amount changed. Positive value means transferring in, while negative out.
     */
    'change'?: string;
    /**
     * Balance after change.
     */
    'balance'?: string;
    /**
     * Account book type. Please refer to [account book type](#accountbook-type) for more detail
     */
    'type'?: string;
    /**
     * Account change code, see [Asset Record Code] (Asset Record Code).
     */
    'code'?: string;
    /**
     * Additional information.
     */
    'text'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'time',
            baseName: 'time',
            type: 'number',
        },
        {
            name: 'currency',
            baseName: 'currency',
            type: 'string',
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
            type: 'string',
        },
        {
            name: 'code',
            baseName: 'code',
            type: 'string',
        },
        {
            name: 'text',
            baseName: 'text',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return SpotAccountBook.attributeTypeMap;
    }
}
