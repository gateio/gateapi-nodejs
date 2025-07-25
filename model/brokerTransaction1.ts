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

import { BrokerCommissionSubBrokerInfo } from './brokerCommissionSubBrokerInfo';

export class BrokerTransaction1 {
    /**
     * Transaction Time. (unix timestamp).
     */
    'transactionTime'?: number;
    /**
     * User ID.
     */
    'userId'?: number;
    /**
     * Group name.
     */
    'groupName'?: string;
    /**
     * fee (usdt).
     */
    'fee'?: string;
    /**
     * Currency pair.
     */
    'currencyPair'?: string;
    /**
     * Commission Amount.
     */
    'amount'?: string;
    /**
     * Fee currency.
     */
    'feeAsset'?: string;
    /**
     * Rebate Type: Spot、Futures、Options.、Alpha
     */
    'source'?: string;
    'subBrokerInfo'?: BrokerCommissionSubBrokerInfo;
    /**
     * Alpha token address
     */
    'alphaContractAddr'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'transactionTime',
            baseName: 'transaction_time',
            type: 'number',
        },
        {
            name: 'userId',
            baseName: 'user_id',
            type: 'number',
        },
        {
            name: 'groupName',
            baseName: 'group_name',
            type: 'string',
        },
        {
            name: 'fee',
            baseName: 'fee',
            type: 'string',
        },
        {
            name: 'currencyPair',
            baseName: 'currency_pair',
            type: 'string',
        },
        {
            name: 'amount',
            baseName: 'amount',
            type: 'string',
        },
        {
            name: 'feeAsset',
            baseName: 'fee_asset',
            type: 'string',
        },
        {
            name: 'source',
            baseName: 'source',
            type: 'string',
        },
        {
            name: 'subBrokerInfo',
            baseName: 'sub_broker_info',
            type: 'BrokerCommissionSubBrokerInfo',
        },
        {
            name: 'alphaContractAddr',
            baseName: 'alpha_contract_addr',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return BrokerTransaction1.attributeTypeMap;
    }
}
