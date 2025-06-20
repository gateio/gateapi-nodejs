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

export class PartnerSub {
    /**
     * User ID
     */
    'userId'?: number;
    /**
     * The time when the user joined the system, in seconds Unix timestamp
     */
    'userJoinTime'?: number;
    /**
     * Type (1-Sub-agent 2-Indirect Customer 3-Direct Customer)
     */
    'type'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'userId',
            baseName: 'user_id',
            type: 'number',
        },
        {
            name: 'userJoinTime',
            baseName: 'user_join_time',
            type: 'number',
        },
        {
            name: 'type',
            baseName: 'type',
            type: 'number',
        },
    ];

    static getAttributeTypeMap() {
        return PartnerSub.attributeTypeMap;
    }
}
