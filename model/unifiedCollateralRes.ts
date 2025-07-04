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

/**
 * 统一账户抵押模式设置返回
 */
export class UnifiedCollateralRes {
    /**
     * 是否设置成功
     */
    'isSuccess'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'isSuccess',
            baseName: 'is_success',
            type: 'boolean',
        },
    ];

    static getAttributeTypeMap() {
        return UnifiedCollateralRes.attributeTypeMap;
    }
}
