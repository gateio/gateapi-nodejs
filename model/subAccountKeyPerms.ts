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


export class SubAccountKeyPerms {
    /**
    * Permission function name (no value will be cleared) - wallet: wallet - spot: spot/leverage - futures: perpetual contract - delivery: delivery contract - earn: financial management - custody: custody - options: options - account: account information - loan: loan - margin: leverage - unified: unified account - copy: copy
    */
    'name'?: string;
    /**
    * read only
    */
    'readOnly'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "readOnly",
            "baseName": "read_only",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return SubAccountKeyPerms.attributeTypeMap;
    }
}

