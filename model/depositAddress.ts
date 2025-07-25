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

import { MultiChainAddressItem } from './multiChainAddressItem';

export class DepositAddress {
    /**
     * Currency detail.
     */
    'currency': string;
    /**
     * Deposit address.
     */
    'address': string;
    'multichainAddresses'?: Array<MultiChainAddressItem>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'currency',
            baseName: 'currency',
            type: 'string',
        },
        {
            name: 'address',
            baseName: 'address',
            type: 'string',
        },
        {
            name: 'multichainAddresses',
            baseName: 'multichain_addresses',
            type: 'Array<MultiChainAddressItem>',
        },
    ];

    static getAttributeTypeMap() {
        return DepositAddress.attributeTypeMap;
    }
}
