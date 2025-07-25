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

export class CollateralCurrencyInfo {
    /**
     * Currency.
     */
    'currency'?: string;
    /**
     * Currency Index Price.
     */
    'indexPrice'?: string;
    /**
     * Left Collateral Amount.
     */
    'leftCollateral'?: string;
    /**
     * Value of left collateral amount in USDT.
     */
    'leftCollateralUsdt'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'currency',
            baseName: 'currency',
            type: 'string',
        },
        {
            name: 'indexPrice',
            baseName: 'index_price',
            type: 'string',
        },
        {
            name: 'leftCollateral',
            baseName: 'left_collateral',
            type: 'string',
        },
        {
            name: 'leftCollateralUsdt',
            baseName: 'left_collateral_usdt',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return CollateralCurrencyInfo.attributeTypeMap;
    }
}
