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

/* tslint:disable:no-unused-locals */
import { DualGetOrders } from '../model/dualGetOrders';
import { DualGetPlans } from '../model/dualGetPlans';
import { Eth2RateList } from '../model/eth2RateList';
import { Eth2Swap } from '../model/eth2Swap';
import { FindCoin } from '../model/findCoin';
import { PlaceDualInvestmentOrder } from '../model/placeDualInvestmentOrder';
import { StructuredBuy } from '../model/structuredBuy';
import { StructuredGetProjectList } from '../model/structuredGetProjectList';
import { StructuredOrderList } from '../model/structuredOrderList';
import { SwapCoin } from '../model/swapCoin';
import { ObjectSerializer } from '../model/models';
import { ApiClient } from './apiClient';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export class EarnApi {
    protected client: ApiClient;

    constructor(client?: ApiClient) {
        if (client) {
            this.client = client;
        } else {
            this.client = new ApiClient();
        }
    }

    /**
     *
     * @summary ETH2 swap
     * @param eth2Swap
     */
    public async swapETH2(eth2Swap: Eth2Swap): Promise<{ response: AxiosResponse; body?: any }> {
        const localVarPath = this.client.basePath + '/earn/staking/eth2/swap';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);

        // verify required parameter 'eth2Swap' is not null or undefined
        if (eth2Swap === null || eth2Swap === undefined) {
            throw new Error('Required parameter eth2Swap was null or undefined when calling swapETH2.');
        }

        const config: AxiosRequestConfig = {
            method: 'POST',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
            data: ObjectSerializer.serialize(eth2Swap, 'Eth2Swap'),
        };

        const authSettings = ['apiv4'];
        return this.client.request<any>(config, '', authSettings);
    }

    /**
     * Check the ETH earnings rate record for the last 31 days
     * @summary ETH2 historical rate of return query
     */
    public async rateListETH2(): Promise<{ response: AxiosResponse; body: Array<Eth2RateList> }> {
        const localVarPath = this.client.basePath + '/earn/staking/eth2/rate_records';
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
        return this.client.request<Array<Eth2RateList>>(config, 'Array<Eth2RateList>', authSettings);
    }

    /**
     *
     * @summary Dual Investment product list
     * @param opts Optional parameters
     * @param opts.planId Financial project id
     */
    public async listDualInvestmentPlans(opts: {
        planId?: number;
    }): Promise<{ response: AxiosResponse; body: Array<DualGetPlans> }> {
        const localVarPath = this.client.basePath + '/earn/dual/investment_plan';
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
        if (opts.planId !== undefined) {
            localVarQueryParameters['plan_id'] = ObjectSerializer.serialize(opts.planId, 'number');
        }

        const config: AxiosRequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = [];
        return this.client.request<Array<DualGetPlans>>(config, 'Array<DualGetPlans>', authSettings);
    }

    /**
     *
     * @summary Dual Investment order list
     * @param opts Optional parameters
     * @param opts.from Start checkout time
     * @param opts.to End settlement time
     * @param opts.page Page number
     * @param opts.limit Maximum number of records to be returned in a single list
     */
    public async listDualOrders(opts: {
        from?: number;
        to?: number;
        page?: number;
        limit?: number;
    }): Promise<{ response: AxiosResponse; body: Array<DualGetOrders> }> {
        const localVarPath = this.client.basePath + '/earn/dual/orders';
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
        if (opts.from !== undefined) {
            localVarQueryParameters['from'] = ObjectSerializer.serialize(opts.from, 'number');
        }

        if (opts.to !== undefined) {
            localVarQueryParameters['to'] = ObjectSerializer.serialize(opts.to, 'number');
        }

        if (opts.page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(opts.page, 'number');
        }

        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(opts.limit, 'number');
        }

        const config: AxiosRequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<Array<DualGetOrders>>(config, 'Array<DualGetOrders>', authSettings);
    }

    /**
     *
     * @summary Place Dual Investment order
     * @param placeDualInvestmentOrder
     */
    public async placeDualOrder(
        placeDualInvestmentOrder: PlaceDualInvestmentOrder,
    ): Promise<{ response: AxiosResponse; body?: any }> {
        const localVarPath = this.client.basePath + '/earn/dual/orders';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);

        // verify required parameter 'placeDualInvestmentOrder' is not null or undefined
        if (placeDualInvestmentOrder === null || placeDualInvestmentOrder === undefined) {
            throw new Error(
                'Required parameter placeDualInvestmentOrder was null or undefined when calling placeDualOrder.',
            );
        }

        const config: AxiosRequestConfig = {
            method: 'POST',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
            data: ObjectSerializer.serialize(placeDualInvestmentOrder, 'PlaceDualInvestmentOrder'),
        };

        const authSettings = ['apiv4'];
        return this.client.request<any>(config, '', authSettings);
    }

    /**
     *
     * @summary Structured Product List
     * @param status Status (default: all)  &#x60;in_process&#x60;-processing  &#x60;will_begin&#x60;-unstarted  &#x60;wait_settlement&#x60;-unsettled  &#x60;done&#x60;-finish
     * @param opts Optional parameters
     * @param opts.type Product Type (default all)  &#x60;SharkFin2.0&#x60;-SharkFin  &#x60;BullishSharkFin&#x60;-BullishSharkFin  &#x60;BearishSharkFin&#x60;-BearishSharkFin &#x60;DoubleNoTouch&#x60;-DoubleNoTouch &#x60;RangeAccrual&#x60;-RangeAccrual &#x60;SnowBall&#x60;-SnowBall
     * @param opts.page Page number
     * @param opts.limit Maximum number of records to be returned in a single list
     */
    public async listStructuredProducts(
        status: string,
        opts: { type?: string; page?: number; limit?: number },
    ): Promise<{ response: AxiosResponse; body: Array<StructuredGetProjectList> }> {
        const localVarPath = this.client.basePath + '/earn/structured/products';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'status' is not null or undefined
        if (status === null || status === undefined) {
            throw new Error('Required parameter status was null or undefined when calling listStructuredProducts.');
        }

        opts = opts || {};
        if (opts.type !== undefined) {
            localVarQueryParameters['type'] = ObjectSerializer.serialize(opts.type, 'string');
        }

        localVarQueryParameters['status'] = ObjectSerializer.serialize(status, 'string');

        if (opts.page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(opts.page, 'number');
        }

        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(opts.limit, 'number');
        }

        const config: AxiosRequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = [];
        return this.client.request<Array<StructuredGetProjectList>>(
            config,
            'Array<StructuredGetProjectList>',
            authSettings,
        );
    }

    /**
     *
     * @summary Structured Product Order List
     * @param opts Optional parameters
     * @param opts.from Start timestamp
     * @param opts.to End timestamp
     * @param opts.page Page number
     * @param opts.limit Maximum number of records to be returned in a single list
     */
    public async listStructuredOrders(opts: {
        from?: number;
        to?: number;
        page?: number;
        limit?: number;
    }): Promise<{ response: AxiosResponse; body: Array<StructuredOrderList> }> {
        const localVarPath = this.client.basePath + '/earn/structured/orders';
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
        if (opts.from !== undefined) {
            localVarQueryParameters['from'] = ObjectSerializer.serialize(opts.from, 'number');
        }

        if (opts.to !== undefined) {
            localVarQueryParameters['to'] = ObjectSerializer.serialize(opts.to, 'number');
        }

        if (opts.page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(opts.page, 'number');
        }

        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(opts.limit, 'number');
        }

        const config: AxiosRequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<Array<StructuredOrderList>>(config, 'Array<StructuredOrderList>', authSettings);
    }

    /**
     *
     * @summary Place Structured Product Order
     * @param structuredBuy
     */
    public async placeStructuredOrder(structuredBuy: StructuredBuy): Promise<{ response: AxiosResponse; body?: any }> {
        const localVarPath = this.client.basePath + '/earn/structured/orders';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);

        // verify required parameter 'structuredBuy' is not null or undefined
        if (structuredBuy === null || structuredBuy === undefined) {
            throw new Error(
                'Required parameter structuredBuy was null or undefined when calling placeStructuredOrder.',
            );
        }

        const config: AxiosRequestConfig = {
            method: 'POST',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
            data: ObjectSerializer.serialize(structuredBuy, 'StructuredBuy'),
        };

        const authSettings = ['apiv4'];
        return this.client.request<any>(config, '', authSettings);
    }

    /**
     *
     * @summary 链上赚币币种
     * @param findCoin
     */
    public async findCoin(findCoin: FindCoin): Promise<{ response: AxiosResponse; body: Array<string> }> {
        const localVarPath = this.client.basePath + '/earn/staking/coins';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'findCoin' is not null or undefined
        if (findCoin === null || findCoin === undefined) {
            throw new Error('Required parameter findCoin was null or undefined when calling findCoin.');
        }

        const config: AxiosRequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
            data: ObjectSerializer.serialize(findCoin, 'FindCoin'),
        };

        const authSettings = ['apiv4'];
        return this.client.request<Array<string>>(config, 'Array<string>', authSettings);
    }

    /**
     *
     * @summary On-chain Token Swap for Earned Coins
     * @param swapCoin
     */
    public async swapStakingCoin(swapCoin: SwapCoin): Promise<{ response: AxiosResponse; body?: any }> {
        const localVarPath = this.client.basePath + '/earn/staking/swap';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);

        // verify required parameter 'swapCoin' is not null or undefined
        if (swapCoin === null || swapCoin === undefined) {
            throw new Error('Required parameter swapCoin was null or undefined when calling swapStakingCoin.');
        }

        const config: AxiosRequestConfig = {
            method: 'POST',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
            data: ObjectSerializer.serialize(swapCoin, 'SwapCoin'),
        };

        const authSettings = ['apiv4'];
        return this.client.request<any>(config, '', authSettings);
    }
}
