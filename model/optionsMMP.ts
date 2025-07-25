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
 * MMP Settings
 */
export class OptionsMMP {
    /**
     * Underlying.
     */
    'underlying': string;
    /**
     * Time window (milliseconds), between 1-5000, 0 means disabling MMP.
     */
    'window': number;
    /**
     * Freeze duration (milliseconds), 0 means always frozen, need to call reset API to unfreeze
     */
    'frozenPeriod': number;
    /**
     * Trading volume upper limit (positive number, up to 2 decimal places).
     */
    'qtyLimit': string;
    /**
     * Upper limit of net delta value (positive number, up to 2 decimal places).
     */
    'deltaLimit': string;
    /**
     * Trigger freeze time (milliseconds), 0 means no freeze is triggered.
     */
    'triggerTimeMs'?: number;
    /**
     * Unfreeze time (milliseconds). If the freeze duration is not configured, there will be no unfreeze time after the freeze is triggered.
     */
    'frozenUntilMs'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'underlying',
            baseName: 'underlying',
            type: 'string',
        },
        {
            name: 'window',
            baseName: 'window',
            type: 'number',
        },
        {
            name: 'frozenPeriod',
            baseName: 'frozen_period',
            type: 'number',
        },
        {
            name: 'qtyLimit',
            baseName: 'qty_limit',
            type: 'string',
        },
        {
            name: 'deltaLimit',
            baseName: 'delta_limit',
            type: 'string',
        },
        {
            name: 'triggerTimeMs',
            baseName: 'trigger_time_ms',
            type: 'number',
        },
        {
            name: 'frozenUntilMs',
            baseName: 'frozen_until_ms',
            type: 'number',
        },
    ];

    static getAttributeTypeMap() {
        return OptionsMMP.attributeTypeMap;
    }
}
