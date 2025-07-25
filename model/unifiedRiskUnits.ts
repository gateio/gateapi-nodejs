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

import { RiskUnits } from './riskUnits';

export class UnifiedRiskUnits {
    /**
     * User ID.
     */
    'userId'?: number;
    /**
     * Spot hedging status, true - enabled, false - not enabled.
     */
    'spotHedge'?: boolean;
    /**
     * Risk unit.
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
