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

import { UnifiedSettings } from './unifiedSettings';

export class UnifiedModeSet {
    /**
     * 统一账户模式：   - `classic`: 经典账户模式   - `multi_currency`: 跨币种保证金模式   - `portfolio`: 组合保证金模式 - `single_currency`: 单币种保证金模式
     */
    'mode': string;
    'settings'?: UnifiedSettings;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'mode',
            baseName: 'mode',
            type: 'string',
        },
        {
            name: 'settings',
            baseName: 'settings',
            type: 'UnifiedSettings',
        },
    ];

    static getAttributeTypeMap() {
        return UnifiedModeSet.attributeTypeMap;
    }
}
