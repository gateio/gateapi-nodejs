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


export class UnifiedLeverageConfig {
    /**
    * Current leverage ratio
    */
    'currentLeverage'?: string;
    /**
    * Minimum adjustable leverage ratio
    */
    'minLeverage'?: string;
    /**
    * Maximum adjustable leverage ratio
    */
    'maxLeverage'?: string;
    /**
    * Current liabilities
    */
    'debit'?: string;
    /**
    * Available Margin
    */
    'availableMargin'?: string;
    /**
    * The current leverage you can choose is
    */
    'borrowable'?: string;
    /**
    * The maximum amount of margin that can be borrowed and the maximum amount of Uniloan that can be borrowed, whichever is smaller
    */
    'exceptLeverageBorrowable'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "currentLeverage",
            "baseName": "current_leverage",
            "type": "string"
        },
        {
            "name": "minLeverage",
            "baseName": "min_leverage",
            "type": "string"
        },
        {
            "name": "maxLeverage",
            "baseName": "max_leverage",
            "type": "string"
        },
        {
            "name": "debit",
            "baseName": "debit",
            "type": "string"
        },
        {
            "name": "availableMargin",
            "baseName": "available_margin",
            "type": "string"
        },
        {
            "name": "borrowable",
            "baseName": "borrowable",
            "type": "string"
        },
        {
            "name": "exceptLeverageBorrowable",
            "baseName": "except_leverage_borrowable",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return UnifiedLeverageConfig.attributeTypeMap;
    }
}

