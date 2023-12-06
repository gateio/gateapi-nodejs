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
 * Structured Products
 */
export class StructuredGetProjectList {
    /**
     * Plan ID
     */
    'id'?: number;
    /**
     * product type:   `SharkFin2.0`-Shark Fin2.0  `BullishSharkFin`-Bullish Shark Fin  `BearishSharkFin`-Bearish Shark Fin `DoubleNoTouch`-Double No-Touch `RangeAccrual`-Range Accrual `SnowBall`-Snow Ball
     */
    'type'?: string;
    /**
     * name
     */
    'nameEn'?: string;
    /**
     * Investment Currency
     */
    'investmentCoin'?: string;
    /**
     * Investment term
     */
    'investmentPeriod'?: string;
    /**
     * Minimum annual rate
     */
    'minAnnualRate'?: string;
    /**
     * Intermediate annual rate
     */
    'midAnnualRate'?: string;
    /**
     * Maximum annual rate
     */
    'maxAnnualRate'?: string;
    /**
     * Watch market
     */
    'watchMarket'?: string;
    /**
     * start time
     */
    'startTime'?: number;
    /**
     * Finished time
     */
    'endTime'?: number;
    /**
     * Status:   `in_process`-in progress  `will_begin`-will begin  `wait_settlement`-waiting for settlement  `done`-done
     */
    'status'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'id',
            baseName: 'id',
            type: 'number',
        },
        {
            name: 'type',
            baseName: 'type',
            type: 'string',
        },
        {
            name: 'nameEn',
            baseName: 'name_en',
            type: 'string',
        },
        {
            name: 'investmentCoin',
            baseName: 'investment_coin',
            type: 'string',
        },
        {
            name: 'investmentPeriod',
            baseName: 'investment_period',
            type: 'string',
        },
        {
            name: 'minAnnualRate',
            baseName: 'min_annual_rate',
            type: 'string',
        },
        {
            name: 'midAnnualRate',
            baseName: 'mid_annual_rate',
            type: 'string',
        },
        {
            name: 'maxAnnualRate',
            baseName: 'max_annual_rate',
            type: 'string',
        },
        {
            name: 'watchMarket',
            baseName: 'watch_market',
            type: 'string',
        },
        {
            name: 'startTime',
            baseName: 'start_time',
            type: 'number',
        },
        {
            name: 'endTime',
            baseName: 'end_time',
            type: 'number',
        },
        {
            name: 'status',
            baseName: 'status',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return StructuredGetProjectList.attributeTypeMap;
    }
}