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

export class SpotPriceTrigger {
    /**
     * Trigger price
     */
    'price': string;
    /**
     * Price trigger condition  - >=: triggered when market price larger than or equal to `price` field - <=: triggered when market price less than or equal to `price` field
     */
    'rule': SpotPriceTrigger.Rule;
    /**
     * How many seconds will the order wait for the condition being triggered. Order will be cancelled on timed out
     */
    'expiration': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'price',
            baseName: 'price',
            type: 'string',
        },
        {
            name: 'rule',
            baseName: 'rule',
            type: 'SpotPriceTrigger.Rule',
        },
        {
            name: 'expiration',
            baseName: 'expiration',
            type: 'number',
        },
    ];

    static getAttributeTypeMap() {
        return SpotPriceTrigger.attributeTypeMap;
    }
}

export namespace SpotPriceTrigger {
    export enum Rule {
        GreaterThanOrEqualTo = <any>'>=',
        LessThanOrEqualTo = <any>'<=',
    }
}