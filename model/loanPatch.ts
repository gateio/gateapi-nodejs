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


export class LoanPatch {
    /**
    * Loan currency
    */
    'currency': string;
    /**
    * Loan side. Possible values are `lend` and `borrow`. For `LoanRecord` patching, only `lend` is supported
    */
    'side': LoanPatch.Side;
    /**
    * Auto renew
    */
    'autoRenew': boolean;
    /**
    * Currency pair. Required for borrowing side
    */
    'currencyPair'?: string;
    /**
    * Loan ID. Required for `LoanRecord` patching
    */
    'loanId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "side",
            "baseName": "side",
            "type": "LoanPatch.Side"
        },
        {
            "name": "autoRenew",
            "baseName": "auto_renew",
            "type": "boolean"
        },
        {
            "name": "currencyPair",
            "baseName": "currency_pair",
            "type": "string"
        },
        {
            "name": "loanId",
            "baseName": "loan_id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return LoanPatch.attributeTypeMap;
    }
}

export namespace LoanPatch {
    export enum Side {
        Lend = <any> 'lend',
        Borrow = <any> 'borrow'
    }
}
