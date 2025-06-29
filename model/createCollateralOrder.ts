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

export class CreateCollateralOrder {
    /**
     * Collateral amount
     */
    'collateralAmount': string;
    /**
     * Collateral
     */
    'collateralCurrency': string;
    /**
     * Borrowing amount
     */
    'borrowAmount': string;
    /**
     * Borrowed currency
     */
    'borrowCurrency': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'collateralAmount',
            baseName: 'collateral_amount',
            type: 'string',
        },
        {
            name: 'collateralCurrency',
            baseName: 'collateral_currency',
            type: 'string',
        },
        {
            name: 'borrowAmount',
            baseName: 'borrow_amount',
            type: 'string',
        },
        {
            name: 'borrowCurrency',
            baseName: 'borrow_currency',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return CreateCollateralOrder.attributeTypeMap;
    }
}
