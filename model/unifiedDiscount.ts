/**
 * Gate API v4
 * Welcome to Gate API  APIv4 provides spot, margin and futures trading operations. There are public APIs to retrieve the real-time market statistics, and private APIs which needs authentication to trade on user\'s behalf.
 *
 * Contact: support@mail.gate.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UnifiedDiscountTiers } from './unifiedDiscountTiers';

/**
 * Currency discount tiers
 */
export class UnifiedDiscount {
    /**
     * Currency name
     */
    'currency'?: string;
    /**
     * Tiered discount
     */
    'discountTiers'?: Array<UnifiedDiscountTiers>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'currency',
            baseName: 'currency',
            type: 'string',
        },
        {
            name: 'discountTiers',
            baseName: 'discount_tiers',
            type: 'Array<UnifiedDiscountTiers>',
        },
    ];

    static getAttributeTypeMap() {
        return UnifiedDiscount.attributeTypeMap;
    }
}
