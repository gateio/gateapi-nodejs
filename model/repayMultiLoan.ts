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

import { MultiLoanRepayItem } from './multiLoanRepayItem';

/**
 * Repay Multi-Collateral Loan
 */
export class RepayMultiLoan {
    /**
     * Order ID
     */
    'orderId': number;
    /**
     * Repay Currency Item
     */
    'repayItems': Array<MultiLoanRepayItem>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'orderId',
            baseName: 'order_id',
            type: 'number',
        },
        {
            name: 'repayItems',
            baseName: 'repay_items',
            type: 'Array<MultiLoanRepayItem>',
        },
    ];

    static getAttributeTypeMap() {
        return RepayMultiLoan.attributeTypeMap;
    }
}
