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


export class WithdrawStatus {
    /**
    * Currency
    */
    'currency'?: string;
    /**
    * Currency name
    */
    'name'?: string;
    /**
    * Currency Chinese name
    */
    'nameCn'?: string;
    /**
    * Deposits fee
    */
    'deposit'?: string;
    /**
    * Withdrawal fee rate percentage
    */
    'withdrawPercent'?: string;
    /**
    * Fixed withdrawal fee
    */
    'withdrawFix'?: string;
    /**
    * Daily allowed withdrawal amount
    */
    'withdrawDayLimit'?: string;
    /**
    * Minimum withdrawal amount
    */
    'withdrawAmountMini'?: string;
    /**
    * Daily withdrawal amount left
    */
    'withdrawDayLimitRemain'?: string;
    /**
    * Maximum amount for each withdrawal
    */
    'withdrawEachtimeLimit'?: string;
    /**
    * Fixed withdrawal fee on multiple chains
    */
    'withdrawFixOnChains'?: { [key: string]: string; };
    /**
    * Percentage withdrawal fee on multiple chains
    */
    'withdrawPercentOnChains'?: { [key: string]: string; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "nameCn",
            "baseName": "name_cn",
            "type": "string"
        },
        {
            "name": "deposit",
            "baseName": "deposit",
            "type": "string"
        },
        {
            "name": "withdrawPercent",
            "baseName": "withdraw_percent",
            "type": "string"
        },
        {
            "name": "withdrawFix",
            "baseName": "withdraw_fix",
            "type": "string"
        },
        {
            "name": "withdrawDayLimit",
            "baseName": "withdraw_day_limit",
            "type": "string"
        },
        {
            "name": "withdrawAmountMini",
            "baseName": "withdraw_amount_mini",
            "type": "string"
        },
        {
            "name": "withdrawDayLimitRemain",
            "baseName": "withdraw_day_limit_remain",
            "type": "string"
        },
        {
            "name": "withdrawEachtimeLimit",
            "baseName": "withdraw_eachtime_limit",
            "type": "string"
        },
        {
            "name": "withdrawFixOnChains",
            "baseName": "withdraw_fix_on_chains",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "withdrawPercentOnChains",
            "baseName": "withdraw_percent_on_chains",
            "type": "{ [key: string]: string; }"
        }    ];

    static getAttributeTypeMap() {
        return WithdrawStatus.attributeTypeMap;
    }
}

