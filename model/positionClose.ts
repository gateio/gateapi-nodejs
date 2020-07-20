/**
 * Gate API v4
 * APIv4 provides spot, margin and futures trading operations. There are public APIs to retrieve the real-time market statistics, and private APIs which needs authentication to trade on user\'s behalf.
 *
 * Contact: support@mail.gate.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class PositionClose {
    /**
    * Position close time
    */
    'time'?: number;
    /**
    * Futures contract
    */
    'contract'?: string;
    /**
    * Position side, long or short
    */
    'side'?: PositionClose.Side;
    /**
    * PNL
    */
    'pnl'?: string;
    /**
    * Text of close order
    */
    'text'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "time",
            "baseName": "time",
            "type": "number"
        },
        {
            "name": "contract",
            "baseName": "contract",
            "type": "string"
        },
        {
            "name": "side",
            "baseName": "side",
            "type": "PositionClose.Side"
        },
        {
            "name": "pnl",
            "baseName": "pnl",
            "type": "string"
        },
        {
            "name": "text",
            "baseName": "text",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PositionClose.attributeTypeMap;
    }
}

export namespace PositionClose {
    export enum Side {
        Long = <any> 'long',
        Short = <any> 'short'
    }
}