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
* Futures order
*/
export class MockFuturesOrder {
    /**
    * Futures name, currently only supports perpetual futures for BTC and ETH with USDT.
    */
    'contract': string;
    /**
    * Futures quantity, representing the initial order quantity, not involved in actual settlement.
    */
    'size': string;
    /**
    * Unfilled contract quantity, involved in actual calculation
    */
    'left': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "contract",
            "baseName": "contract",
            "type": "string"
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "string"
        },
        {
            "name": "left",
            "baseName": "left",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return MockFuturesOrder.attributeTypeMap;
    }
}

