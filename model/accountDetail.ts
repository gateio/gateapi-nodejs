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

import { AccountDetailKey } from './accountDetailKey';

/**
 * Account detail
 */
export class AccountDetail {
    /**
     * IP whitelist
     */
    'ipWhitelist'?: Array<string>;
    /**
     * CurrencyPair whitelisting
     */
    'currencyPairs'?: Array<string>;
    /**
     * User ID
     */
    'userId'?: number;
    /**
     * User VIP level
     */
    'tier'?: number;
    'key'?: AccountDetailKey;
    /**
     * 用户角色： 0 - 普通用户  1 - 带单者  2 - 跟单者 3 - 带单者与跟单者
     */
    'copyTradingRole'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'ipWhitelist',
            baseName: 'ip_whitelist',
            type: 'Array<string>',
        },
        {
            name: 'currencyPairs',
            baseName: 'currency_pairs',
            type: 'Array<string>',
        },
        {
            name: 'userId',
            baseName: 'user_id',
            type: 'number',
        },
        {
            name: 'tier',
            baseName: 'tier',
            type: 'number',
        },
        {
            name: 'key',
            baseName: 'key',
            type: 'AccountDetailKey',
        },
        {
            name: 'copyTradingRole',
            baseName: 'copy_trading_role',
            type: 'number',
        },
    ];

    static getAttributeTypeMap() {
        return AccountDetail.attributeTypeMap;
    }
}
