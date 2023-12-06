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

import { PortfolioMarginBalance } from './portfolioMarginBalance';

export class PortfolioAccount {
    /**
     * User ID
     */
    'userId'?: number;
    /**
     * Time of the most recent refresh
     */
    'refreshTime'?: number;
    /**
     * Whether account is locked
     */
    'locked'?: boolean;
    'balances'?: { [key: string]: PortfolioMarginBalance };
    /**
     * Total account value in USDT, i.e., the sum of all currencies\'
     */
    'total'?: string;
    /**
     * Total borrowed value in USDT, i.e., the sum of all currencies
     */
    'borrowed'?: string;
    /**
     * Total unpaid interests in USDT, i.e., the sum of all currencies
     */
    'interest'?: string;
    /**
     * Total initial margin
     */
    'totalInitialMargin'?: string;
    /**
     * Total margin balance
     */
    'totalMarginBalance'?: string;
    /**
     * Total maintenance margin
     */
    'totalMaintenanceMargin'?: string;
    /**
     * Total initial margin rate
     */
    'totalInitialMarginRate'?: string;
    /**
     * Total maintenance margin rate
     */
    'totalMaintenanceMarginRate'?: string;
    /**
     * Total available margin
     */
    'totalAvailableMargin'?: string;
    /**
     * Total margin balance of the account
     */
    'portfolioMarginTotal'?: string;
    /**
     * Total liabilities of the account
     */
    'portfolioMarginTotalLiab'?: string;
    /**
     * Total equity of the account
     */
    'portfolioMarginTotalEquity'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'userId',
            baseName: 'user_id',
            type: 'number',
        },
        {
            name: 'refreshTime',
            baseName: 'refresh_time',
            type: 'number',
        },
        {
            name: 'locked',
            baseName: 'locked',
            type: 'boolean',
        },
        {
            name: 'balances',
            baseName: 'balances',
            type: '{ [key: string]: PortfolioMarginBalance; }',
        },
        {
            name: 'total',
            baseName: 'total',
            type: 'string',
        },
        {
            name: 'borrowed',
            baseName: 'borrowed',
            type: 'string',
        },
        {
            name: 'interest',
            baseName: 'interest',
            type: 'string',
        },
        {
            name: 'totalInitialMargin',
            baseName: 'total_initial_margin',
            type: 'string',
        },
        {
            name: 'totalMarginBalance',
            baseName: 'total_margin_balance',
            type: 'string',
        },
        {
            name: 'totalMaintenanceMargin',
            baseName: 'total_maintenance_margin',
            type: 'string',
        },
        {
            name: 'totalInitialMarginRate',
            baseName: 'total_initial_margin_rate',
            type: 'string',
        },
        {
            name: 'totalMaintenanceMarginRate',
            baseName: 'total_maintenance_margin_rate',
            type: 'string',
        },
        {
            name: 'totalAvailableMargin',
            baseName: 'total_available_margin',
            type: 'string',
        },
        {
            name: 'portfolioMarginTotal',
            baseName: 'portfolio_margin_total',
            type: 'string',
        },
        {
            name: 'portfolioMarginTotalLiab',
            baseName: 'portfolio_margin_total_liab',
            type: 'string',
        },
        {
            name: 'portfolioMarginTotalEquity',
            baseName: 'portfolio_margin_total_equity',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return PortfolioAccount.attributeTypeMap;
    }
}