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

import { ProfitLossRange } from './profitLossRange';

/**
* Margin result
*/
export class MockMarginResult {
    /**
    * Position combination type `original_position` - Original position `long_delta_original_position` - Positive delta + Original position `short_delta_original_position` - Negative delta + Original position
    */
    'type'?: string;
    /**
    * The results of 33 pressure scenarios for MR1
    */
    'profitLossRanges'?: Array<ProfitLossRange>;
    /**
    * 最大损失
    */
    'maxLoss'?: ProfitLossRange;
    /**
    * Stress testing
    */
    'mr1'?: string;
    /**
    * Basis spread risk
    */
    'mr2'?: string;
    /**
    * Volatility spread risk
    */
    'mr3'?: string;
    /**
    * Option short risk
    */
    'mr4'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "profitLossRanges",
            "baseName": "profit_loss_ranges",
            "type": "Array<ProfitLossRange>"
        },
        {
            "name": "maxLoss",
            "baseName": "max_loss",
            "type": "ProfitLossRange"
        },
        {
            "name": "mr1",
            "baseName": "mr1",
            "type": "string"
        },
        {
            "name": "mr2",
            "baseName": "mr2",
            "type": "string"
        },
        {
            "name": "mr3",
            "baseName": "mr3",
            "type": "string"
        },
        {
            "name": "mr4",
            "baseName": "mr4",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return MockMarginResult.attributeTypeMap;
    }
}

