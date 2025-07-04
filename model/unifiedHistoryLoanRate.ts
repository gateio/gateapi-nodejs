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

import { UnifiedHistoryLoanRateRates } from './unifiedHistoryLoanRateRates';

export class UnifiedHistoryLoanRate {
    /**
     * Currency name
     */
    'currency'?: string;
    /**
     * The VIP level of the floating rate required
     */
    'tier'?: string;
    /**
     * VIP level corresponding floating rate
     */
    'tierUpRate'?: string;
    /**
     * Historical interest rate information, one data per hour, the array size is determined by the page and limit parameters provided by the interface request parameters, sorted from recent to far in time
     */
    'rates'?: Array<UnifiedHistoryLoanRateRates>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'currency',
            baseName: 'currency',
            type: 'string',
        },
        {
            name: 'tier',
            baseName: 'tier',
            type: 'string',
        },
        {
            name: 'tierUpRate',
            baseName: 'tier_up_rate',
            type: 'string',
        },
        {
            name: 'rates',
            baseName: 'rates',
            type: 'Array<UnifiedHistoryLoanRateRates>',
        },
    ];

    static getAttributeTypeMap() {
        return UnifiedHistoryLoanRate.attributeTypeMap;
    }
}
