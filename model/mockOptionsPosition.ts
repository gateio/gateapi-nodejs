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
 * Options positions.
 */
export class MockOptionsPosition {
    /**
     * Option name, currently only supports options for BTC and ETH with USDT.
     */
    'optionsName': string;
    /**
     * Position size, measured in contract units.
     */
    'size': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'optionsName',
            baseName: 'options_name',
            type: 'string',
        },
        {
            name: 'size',
            baseName: 'size',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return MockOptionsPosition.attributeTypeMap;
    }
}
