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

export class UnifiedBalance {
    /**
     * Available amount is valid in single currency margin/cross-currency margin/combined margin mode, and the calculation is different in different modes
     */
    'available'?: string;
    /**
     * The locked amount is valid in single currency margin/cross-currency margin/combined margin mode
     */
    'freeze'?: string;
    /**
     * Borrow limit, valid in cross-currency margin/combined margin mode, 0 in other modes such as single-currency margin mode
     */
    'borrowed'?: string;
    /**
     * Negative balance loan is valid in cross-currency margin/combined margin mode, and is 0 in other modes such as single-currency margin mode
     */
    'negativeLiab'?: string;
    /**
     * Contract opening position borrowing currency (abandoned, to be offline field)
     */
    'futuresPosLiab'?: string;
    /**
     * Equity, valid in single currency margin/cross currency margin/combined margin mode
     */
    'equity'?: string;
    /**
     * Total occupancy (discarded, to be offline field)
     */
    'totalFreeze'?: string;
    /**
     * Total borrowing, valid in cross-currency margin/combined margin mode, 0 in other modes such as single-currency margin mode
     */
    'totalLiab'?: string;
    /**
     * The amount of spot hedging is valid in the combined margin mode, and is 0 in other margin modes such as single currency and cross-currency margin modes
     */
    'spotInUse'?: string;
    /**
     * Uniloan financial management amount, effective when Uniloan financial management is turned on as a unified account margin switch
     */
    'funding'?: string;
    /**
     * Funding version
     */
    'fundingVersion'?: string;
    /**
     * Full margin balance is valid in single currency margin mode, and is 0 in other modes such as cross currency margin/combined margin mode
     */
    'crossBalance'?: string;
    /**
     * Isolated margin balance is valid in single-currency margin mode and is 0 in other modes such as cross-currency margin/combined margin mode
     */
    'isoBalance'?: string;
    /**
     * Full-position initial margin is valid in single-currency margin mode and is 0 in other modes such as cross-currency margin/combined margin mode
     */
    'im'?: string;
    /**
     * The full position maintains margin, which is valid in the single currency margin mode, and other cross-currency margin combination margin mode is 0.
     */
    'mm'?: string;
    /**
     * Full-position initial margin rate is valid in single-currency margin mode and is 0 in other modes such as cross-currency margin/combined margin mode
     */
    'imr'?: string;
    /**
     * Full-position maintenance margin rate is valid in single-currency margin mode and is 0 in other modes such as cross-currency margin/combined margin mode
     */
    'mmr'?: string;
    /**
     * Full margin balance is valid in single currency margin mode and is 0 in other modes such as cross currency margin/combined margin mode
     */
    'marginBalance'?: string;
    /**
     * Full margin available for full position is valid in single currency margin mode, and is 0 in other modes such as cross-currency margin/combined margin mode
     */
    'availableMargin'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'available',
            baseName: 'available',
            type: 'string',
        },
        {
            name: 'freeze',
            baseName: 'freeze',
            type: 'string',
        },
        {
            name: 'borrowed',
            baseName: 'borrowed',
            type: 'string',
        },
        {
            name: 'negativeLiab',
            baseName: 'negative_liab',
            type: 'string',
        },
        {
            name: 'futuresPosLiab',
            baseName: 'futures_pos_liab',
            type: 'string',
        },
        {
            name: 'equity',
            baseName: 'equity',
            type: 'string',
        },
        {
            name: 'totalFreeze',
            baseName: 'total_freeze',
            type: 'string',
        },
        {
            name: 'totalLiab',
            baseName: 'total_liab',
            type: 'string',
        },
        {
            name: 'spotInUse',
            baseName: 'spot_in_use',
            type: 'string',
        },
        {
            name: 'funding',
            baseName: 'funding',
            type: 'string',
        },
        {
            name: 'fundingVersion',
            baseName: 'funding_version',
            type: 'string',
        },
        {
            name: 'crossBalance',
            baseName: 'cross_balance',
            type: 'string',
        },
        {
            name: 'isoBalance',
            baseName: 'iso_balance',
            type: 'string',
        },
        {
            name: 'im',
            baseName: 'im',
            type: 'string',
        },
        {
            name: 'mm',
            baseName: 'mm',
            type: 'string',
        },
        {
            name: 'imr',
            baseName: 'imr',
            type: 'string',
        },
        {
            name: 'mmr',
            baseName: 'mmr',
            type: 'string',
        },
        {
            name: 'marginBalance',
            baseName: 'margin_balance',
            type: 'string',
        },
        {
            name: 'availableMargin',
            baseName: 'available_margin',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return UnifiedBalance.attributeTypeMap;
    }
}
