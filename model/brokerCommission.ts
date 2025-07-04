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

import { BrokerCommission1 } from './brokerCommission1';

export class BrokerCommission {
    /**
     * Total
     */
    'total'?: number;
    /**
     * List of comission history
     */
    'list'?: Array<BrokerCommission1>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'total',
            baseName: 'total',
            type: 'number',
        },
        {
            name: 'list',
            baseName: 'list',
            type: 'Array<BrokerCommission1>',
        },
    ];

    static getAttributeTypeMap() {
        return BrokerCommission.attributeTypeMap;
    }
}
