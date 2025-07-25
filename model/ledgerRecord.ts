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

export class LedgerRecord {
    /**
     * Record ID.
     */
    'id'?: string;
    /**
     * Hash record of the withdrawal.
     */
    'txid'?: string;
    /**
     * User-defined order number when withdrawing. Default is empty. When not empty, the specified user-defined order number record will be queried
     */
    'withdrawOrderId'?: string;
    /**
     * Operation time.
     */
    'timestamp'?: string;
    /**
     * Currency amount.
     */
    'amount': string;
    /**
     * Currency name.
     */
    'currency': string;
    /**
     * Withdrawal address. Required for withdrawals.
     */
    'address'?: string;
    /**
     * Additional remarks with regards to the withdrawal.
     */
    'memo'?: string;
    /**
     * The withdrawal record id starts with w, such as: w1879219868. When withdraw_id is not empty, the value querys this withdrawal record and no longer querys according to time
     */
    'withdrawId'?: string;
    /**
     * The currency type of withdrawal record is empty by default. It supports users to query the withdrawal records in the main and innovation areas on demand. Value range: SPOT, PILOT  SPOT: Main Zone  PILOT: Innovation Zone
     */
    'assetClass'?: string;
    /**
     * Record status.  - DONE: done - CANCEL: cancelled - REQUEST: requesting - MANUAL: pending manual approval - BCODE: GateCode operation - EXTPEND: pending confirm after sending - FAIL: pending confirm when fail - INVALID: invalid order - VERIFY: verifying - PROCES: processing - PEND: pending - DMOVE: required manual approval - REVIEW: Under review
     */
    'status'?: string;
    /**
     * Name of the chain used in withdrawals.
     */
    'chain': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'txid',
            baseName: 'txid',
            type: 'string',
        },
        {
            name: 'withdrawOrderId',
            baseName: 'withdraw_order_id',
            type: 'string',
        },
        {
            name: 'timestamp',
            baseName: 'timestamp',
            type: 'string',
        },
        {
            name: 'amount',
            baseName: 'amount',
            type: 'string',
        },
        {
            name: 'currency',
            baseName: 'currency',
            type: 'string',
        },
        {
            name: 'address',
            baseName: 'address',
            type: 'string',
        },
        {
            name: 'memo',
            baseName: 'memo',
            type: 'string',
        },
        {
            name: 'withdrawId',
            baseName: 'withdraw_id',
            type: 'string',
        },
        {
            name: 'assetClass',
            baseName: 'asset_class',
            type: 'string',
        },
        {
            name: 'status',
            baseName: 'status',
            type: 'string',
        },
        {
            name: 'chain',
            baseName: 'chain',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return LedgerRecord.attributeTypeMap;
    }
}
