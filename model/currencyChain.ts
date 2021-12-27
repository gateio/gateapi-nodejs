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

export class CurrencyChain {
    /**
     * Chain name
     */
    'chain'?: string;
    /**
     * Chain name in Chinese
     */
    'nameCn'?: string;
    /**
     * Chain name in English
     */
    'nameEn'?: string;
    /**
     * If it is disabled. 0 means NOT being disabled
     */
    'isDisabled'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'chain',
            baseName: 'chain',
            type: 'string',
        },
        {
            name: 'nameCn',
            baseName: 'name_cn',
            type: 'string',
        },
        {
            name: 'nameEn',
            baseName: 'name_en',
            type: 'string',
        },
        {
            name: 'isDisabled',
            baseName: 'is_disabled',
            type: 'number',
        },
    ];

    static getAttributeTypeMap() {
        return CurrencyChain.attributeTypeMap;
    }
}