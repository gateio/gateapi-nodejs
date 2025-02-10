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


/* tslint:disable:no-unused-locals */
import { AgencyCommissionHistory } from '../model/agencyCommissionHistory';
import { AgencyTransactionHistory } from '../model/agencyTransactionHistory';
import { BrokerCommission } from '../model/brokerCommission';
import { BrokerTransaction } from '../model/brokerTransaction';
import { PartnerCommissionHistory } from '../model/partnerCommissionHistory';
import { PartnerSubList } from '../model/partnerSubList';
import { PartnerTransactionHistory } from '../model/partnerTransactionHistory';
import { RebateUserInfo } from '../model/rebateUserInfo';
import { UserSubRelation } from '../model/userSubRelation';
import { ObjectSerializer } from '../model/models';
import { ApiClient } from './apiClient';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export class RebateApi {
    protected client: ApiClient;

    constructor(client?: ApiClient) {
        if (client) {
            this.client = client;
        } else {
            this.client = new ApiClient();
        }
    }

    /**
     * Record time range cannot exceed 30 days
     * @summary The agency obtains the transaction history of the recommended user
     * @param opts Optional parameters
     * @param opts.currencyPair Specify the currency pair, if not specified, return all currency pairs
     * @param opts.userId User ID. If not specified, all user records will be returned
     * @param opts.from Time range beginning, default to 7 days before current time
     * @param opts.to Time range ending, default to current time
     * @param opts.limit Maximum number of records to be returned in a single list
     * @param opts.offset List offset, starting from 0
     */
    public async agencyTransactionHistory(opts: { currencyPair?: string, userId?: number, from?: number, to?: number, limit?: number, offset?: number,  } ) : Promise<{ response: AxiosResponse; body: Array<AgencyTransactionHistory>; }> {
        const localVarPath = this.client.basePath + '/rebate/agency/transaction_history';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        opts = opts || {};
        if (opts.currencyPair !== undefined) {
            localVarQueryParameters['currency_pair'] = ObjectSerializer.serialize(opts.currencyPair, "string");
        }

        if (opts.userId !== undefined) {
            localVarQueryParameters['user_id'] = ObjectSerializer.serialize(opts.userId, "number");
        }

        if (opts.from !== undefined) {
            localVarQueryParameters['from'] = ObjectSerializer.serialize(opts.from, "number");
        }

        if (opts.to !== undefined) {
            localVarQueryParameters['to'] = ObjectSerializer.serialize(opts.to, "number");
        }

        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(opts.limit, "number");
        }

        if (opts.offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(opts.offset, "number");
        }


        const config: AxiosRequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<Array<AgencyTransactionHistory>>(config, "Array<AgencyTransactionHistory>", authSettings);
    }

    /**
     * Record time range cannot exceed 30 days
     * @summary The agency obtains the commission history of the recommended user
     * @param opts Optional parameters
     * @param opts.currency Filter by currency. Return all currency records if not specified
     * @param opts.userId User ID. If not specified, all user records will be returned
     * @param opts.from Time range beginning, default to 7 days before current time
     * @param opts.to Time range ending, default to current time
     * @param opts.limit Maximum number of records to be returned in a single list
     * @param opts.offset List offset, starting from 0
     */
    public async agencyCommissionsHistory(opts: { currency?: string, userId?: number, from?: number, to?: number, limit?: number, offset?: number,  } ) : Promise<{ response: AxiosResponse; body: Array<AgencyCommissionHistory>; }> {
        const localVarPath = this.client.basePath + '/rebate/agency/commission_history';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        opts = opts || {};
        if (opts.currency !== undefined) {
            localVarQueryParameters['currency'] = ObjectSerializer.serialize(opts.currency, "string");
        }

        if (opts.userId !== undefined) {
            localVarQueryParameters['user_id'] = ObjectSerializer.serialize(opts.userId, "number");
        }

        if (opts.from !== undefined) {
            localVarQueryParameters['from'] = ObjectSerializer.serialize(opts.from, "number");
        }

        if (opts.to !== undefined) {
            localVarQueryParameters['to'] = ObjectSerializer.serialize(opts.to, "number");
        }

        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(opts.limit, "number");
        }

        if (opts.offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(opts.offset, "number");
        }


        const config: AxiosRequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<Array<AgencyCommissionHistory>>(config, "Array<AgencyCommissionHistory>", authSettings);
    }

    /**
     * Record time range cannot exceed 30 days
     * @summary Partner obtains transaction records of recommended users
     * @param opts Optional parameters
     * @param opts.currencyPair Specify the currency pair, if not specified, return all currency pairs
     * @param opts.userId User ID. If not specified, all user records will be returned
     * @param opts.from Time range beginning, default to 7 days before current time
     * @param opts.to Time range ending, default to current time
     * @param opts.limit Maximum number of records to be returned in a single list
     * @param opts.offset List offset, starting from 0
     */
    public async partnerTransactionHistory(opts: { currencyPair?: string, userId?: number, from?: number, to?: number, limit?: number, offset?: number,  } ) : Promise<{ response: AxiosResponse; body: PartnerTransactionHistory; }> {
        const localVarPath = this.client.basePath + '/rebate/partner/transaction_history';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        opts = opts || {};
        if (opts.currencyPair !== undefined) {
            localVarQueryParameters['currency_pair'] = ObjectSerializer.serialize(opts.currencyPair, "string");
        }

        if (opts.userId !== undefined) {
            localVarQueryParameters['user_id'] = ObjectSerializer.serialize(opts.userId, "number");
        }

        if (opts.from !== undefined) {
            localVarQueryParameters['from'] = ObjectSerializer.serialize(opts.from, "number");
        }

        if (opts.to !== undefined) {
            localVarQueryParameters['to'] = ObjectSerializer.serialize(opts.to, "number");
        }

        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(opts.limit, "number");
        }

        if (opts.offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(opts.offset, "number");
        }


        const config: AxiosRequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<PartnerTransactionHistory>(config, "PartnerTransactionHistory", authSettings);
    }

    /**
     * Record time range cannot exceed 30 days
     * @summary Partner obtains commission records of recommended users
     * @param opts Optional parameters
     * @param opts.currency Filter by currency. Return all currency records if not specified
     * @param opts.userId User ID. If not specified, all user records will be returned
     * @param opts.from Time range beginning, default to 7 days before current time
     * @param opts.to Time range ending, default to current time
     * @param opts.limit Maximum number of records to be returned in a single list
     * @param opts.offset List offset, starting from 0
     */
    public async partnerCommissionsHistory(opts: { currency?: string, userId?: number, from?: number, to?: number, limit?: number, offset?: number,  } ) : Promise<{ response: AxiosResponse; body: PartnerCommissionHistory; }> {
        const localVarPath = this.client.basePath + '/rebate/partner/commission_history';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        opts = opts || {};
        if (opts.currency !== undefined) {
            localVarQueryParameters['currency'] = ObjectSerializer.serialize(opts.currency, "string");
        }

        if (opts.userId !== undefined) {
            localVarQueryParameters['user_id'] = ObjectSerializer.serialize(opts.userId, "number");
        }

        if (opts.from !== undefined) {
            localVarQueryParameters['from'] = ObjectSerializer.serialize(opts.from, "number");
        }

        if (opts.to !== undefined) {
            localVarQueryParameters['to'] = ObjectSerializer.serialize(opts.to, "number");
        }

        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(opts.limit, "number");
        }

        if (opts.offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(opts.offset, "number");
        }


        const config: AxiosRequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<PartnerCommissionHistory>(config, "PartnerCommissionHistory", authSettings);
    }

    /**
     * Including sub-agents, direct customers, indirect customers
     * @summary Partner subordinate list
     * @param opts Optional parameters
     * @param opts.userId User ID. If not specified, all user records will be returned
     * @param opts.limit Maximum number of records to be returned in a single list
     * @param opts.offset List offset, starting from 0
     */
    public async partnerSubList(opts: { userId?: number, limit?: number, offset?: number,  } ) : Promise<{ response: AxiosResponse; body: PartnerSubList; }> {
        const localVarPath = this.client.basePath + '/rebate/partner/sub_list';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        opts = opts || {};
        if (opts.userId !== undefined) {
            localVarQueryParameters['user_id'] = ObjectSerializer.serialize(opts.userId, "number");
        }

        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(opts.limit, "number");
        }

        if (opts.offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(opts.offset, "number");
        }


        const config: AxiosRequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<PartnerSubList>(config, "PartnerSubList", authSettings);
    }

    /**
     * Record time range cannot exceed 30 days
     * @summary The broker obtains the user\'s commission rebate records
     * @param opts Optional parameters
     * @param opts.limit Maximum number of records to be returned in a single list
     * @param opts.offset List offset, starting from 0
     * @param opts.userId User ID. If not specified, all user records will be returned
     * @param opts.from The start time of the query record. If not specified, the default is to push forward 30 days from the current time.
     * @param opts.to Time range ending, default to current time
     */
    public async rebateBrokerCommissionHistory(opts: { limit?: number, offset?: number, userId?: number, from?: number, to?: number,  } ) : Promise<{ response: AxiosResponse; body: Array<BrokerCommission>; }> {
        const localVarPath = this.client.basePath + '/rebate/broker/commission_history';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        opts = opts || {};
        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(opts.limit, "number");
        }

        if (opts.offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(opts.offset, "number");
        }

        if (opts.userId !== undefined) {
            localVarQueryParameters['user_id'] = ObjectSerializer.serialize(opts.userId, "number");
        }

        if (opts.from !== undefined) {
            localVarQueryParameters['from'] = ObjectSerializer.serialize(opts.from, "number");
        }

        if (opts.to !== undefined) {
            localVarQueryParameters['to'] = ObjectSerializer.serialize(opts.to, "number");
        }


        const config: AxiosRequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<Array<BrokerCommission>>(config, "Array<BrokerCommission>", authSettings);
    }

    /**
     * Record time range cannot exceed 30 days
     * @summary The broker obtains the user\'s trading history
     * @param opts Optional parameters
     * @param opts.limit Maximum number of records to be returned in a single list
     * @param opts.offset List offset, starting from 0
     * @param opts.userId User ID. If not specified, all user records will be returned
     * @param opts.from The start time of the query record. If not specified, the default is to push forward 30 days from the current time.
     * @param opts.to Time range ending, default to current time
     */
    public async rebateBrokerTransactionHistory(opts: { limit?: number, offset?: number, userId?: number, from?: number, to?: number,  } ) : Promise<{ response: AxiosResponse; body: Array<BrokerTransaction>; }> {
        const localVarPath = this.client.basePath + '/rebate/broker/transaction_history';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        opts = opts || {};
        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(opts.limit, "number");
        }

        if (opts.offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(opts.offset, "number");
        }

        if (opts.userId !== undefined) {
            localVarQueryParameters['user_id'] = ObjectSerializer.serialize(opts.userId, "number");
        }

        if (opts.from !== undefined) {
            localVarQueryParameters['from'] = ObjectSerializer.serialize(opts.from, "number");
        }

        if (opts.to !== undefined) {
            localVarQueryParameters['to'] = ObjectSerializer.serialize(opts.to, "number");
        }


        const config: AxiosRequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<Array<BrokerTransaction>>(config, "Array<BrokerTransaction>", authSettings);
    }

    /**
     * 
     * @summary User retrieves rebate information
     */
    public async rebateUserInfo() : Promise<{ response: AxiosResponse; body: Array<RebateUserInfo>; }> {
        const localVarPath = this.client.basePath + '/rebate/user/info';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }


        const config: AxiosRequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<Array<RebateUserInfo>>(config, "Array<RebateUserInfo>", authSettings);
    }

    /**
     * Query whether the specified user is in the system
     * @summary User-subordinate relationship
     * @param userIdList Query the user\&#39;s ID list, split by,, if there are more than 100, take 100
     */
    public async userSubRelation(userIdList: string) : Promise<{ response: AxiosResponse; body: UserSubRelation; }> {
        const localVarPath = this.client.basePath + '/rebate/user/sub_relation';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'userIdList' is not null or undefined
        if (userIdList === null || userIdList === undefined) {
            throw new Error('Required parameter userIdList was null or undefined when calling userSubRelation.');
        }

        localVarQueryParameters['user_id_list'] = ObjectSerializer.serialize(userIdList, "string");


        const config: AxiosRequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<UserSubRelation>(config, "UserSubRelation", authSettings);
    }
}
