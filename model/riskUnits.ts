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

export class RiskUnits {
    /**
     * Risk unit flag.
     */
    'symbol'?: string;
    /**
     * Spot hedging utilization.
     */
    'spotInUse'?: string;
    /**
     * Maintenance margin for risk unit.
     */
    'maintainMargin'?: string;
    /**
     * Initial margin for risk unit.
     */
    'initialMargin'?: string;
    /**
     * Total Delta of risk unit.
     */
    'delta'?: string;
    /**
     * Total Gamma of risk unit.
     */
    'gamma'?: string;
    /**
     * Total Theta of risk unit.
     */
    'theta'?: string;
    /**
     * Total Vega of risk unit.
     */
    'vega'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'symbol',
            baseName: 'symbol',
            type: 'string',
        },
        {
            name: 'spotInUse',
            baseName: 'spot_in_use',
            type: 'string',
        },
        {
            name: 'maintainMargin',
            baseName: 'maintain_margin',
            type: 'string',
        },
        {
            name: 'initialMargin',
            baseName: 'initial_margin',
            type: 'string',
        },
        {
            name: 'delta',
            baseName: 'delta',
            type: 'string',
        },
        {
            name: 'gamma',
            baseName: 'gamma',
            type: 'string',
        },
        {
            name: 'theta',
            baseName: 'theta',
            type: 'string',
        },
        {
            name: 'vega',
            baseName: 'vega',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return RiskUnits.attributeTypeMap;
    }
}
