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


export class WithdrawalRecord {
    /**
    * Record ID
    */
    'id'?: string;
    /**
    * Hash record of the withdrawal
    */
    'txid'?: string;
    /**
    * 区块编号
    */
    'blockNumber'?: string;
    /**
    * Client order id, up to 32 length and can only include 0-9, A-Z, a-z, underscore(_), hyphen(-) or dot(.) 
    */
    'withdrawOrderId'?: string;
    /**
    * Operation time
    */
    'timestamp'?: string;
    /**
    * Currency amount
    */
    'amount': string;
    /**
    * fee
    */
    'fee'?: string;
    /**
    * Currency name
    */
    'currency': string;
    /**
    * Withdrawal address. Required for withdrawals
    */
    'address'?: string;
    /**
    * Additional remarks with regards to the withdrawal
    */
    'memo'?: string;
    /**
    * Transaction status  - DONE: Completed (block_number > 0 is considered to be truly completed) - CANCEL: Canceled - REQUEST: Requesting - MANUAL: Pending manual review - BCODE: Recharge code operation - EXTPEND: Sent awaiting confirmation - FAIL: Failure on the chain awaiting confirmation - INVALID: Invalid order - VERIFY: Verifying - PROCES: Processing - PEND: Processing - DMOVE: pending manual review - SPLITPEND: cny withdrawal is greater than 50,000, orders will be split automatically
    */
    'status'?: WithdrawalRecord.Status;
    /**
    * Name of the chain used in withdrawals
    */
    'chain': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "txid",
            "baseName": "txid",
            "type": "string"
        },
        {
            "name": "blockNumber",
            "baseName": "block_number",
            "type": "string"
        },
        {
            "name": "withdrawOrderId",
            "baseName": "withdraw_order_id",
            "type": "string"
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "string"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "string"
        },
        {
            "name": "fee",
            "baseName": "fee",
            "type": "string"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "string"
        },
        {
            "name": "memo",
            "baseName": "memo",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "WithdrawalRecord.Status"
        },
        {
            "name": "chain",
            "baseName": "chain",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return WithdrawalRecord.attributeTypeMap;
    }
}

export namespace WithdrawalRecord {
    export enum Status {
        DONE = <any> 'DONE',
        CANCEL = <any> 'CANCEL',
        REQUEST = <any> 'REQUEST',
        MANUAL = <any> 'MANUAL',
        BCODE = <any> 'BCODE',
        EXTPEND = <any> 'EXTPEND',
        FAIL = <any> 'FAIL',
        INVALID = <any> 'INVALID',
        VERIFY = <any> 'VERIFY',
        PROCES = <any> 'PROCES',
        PEND = <any> 'PEND',
        DMOVE = <any> 'DMOVE',
        SPLITPEND = <any> 'SPLITPEND'
    }
}
