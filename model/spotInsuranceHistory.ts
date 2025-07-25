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

export class SpotInsuranceHistory {
    /**
     * Currency.
     */
    'currency'?: string;
    /**
     * balance.
     */
    'balance'?: string;
    /**
     * Creation time, timestamp, milliseconds.
     */
    'time'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'currency',
            baseName: 'currency',
            type: 'string',
        },
        {
            name: 'balance',
            baseName: 'balance',
            type: 'string',
        },
        {
            name: 'time',
            baseName: 'time',
            type: 'number',
        },
    ];

    static getAttributeTypeMap() {
        return SpotInsuranceHistory.attributeTypeMap;
    }
}
