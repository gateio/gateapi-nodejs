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

import { RiskUnits } from './riskUnits';

export class UnifiedRiskUnits {
    /**
     * User ID
     */
    'userId'?: number;
    /**
     * Spot hedging status, true - enabled, false - not enabled.
     */
    'spotHedge'?: boolean;
    /**
     * Risk unit
     */
    'riskUnits'?: Array<RiskUnits>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'userId',
            baseName: 'user_id',
            type: 'number',
        },
        {
            name: 'spotHedge',
            baseName: 'spot_hedge',
            type: 'boolean',
        },
        {
            name: 'riskUnits',
            baseName: 'risk_units',
            type: 'Array<RiskUnits>',
        },
    ];

    static getAttributeTypeMap() {
        return UnifiedRiskUnits.attributeTypeMap;
    }
}
