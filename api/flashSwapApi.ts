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
import { FlashSwapCurrencyPair } from '../model/flashSwapCurrencyPair';
import { FlashSwapOrder } from '../model/flashSwapOrder';
import { FlashSwapOrderPreview } from '../model/flashSwapOrderPreview';
import { FlashSwapOrderRequest } from '../model/flashSwapOrderRequest';
import { FlashSwapPreviewRequest } from '../model/flashSwapPreviewRequest';
import { ObjectSerializer } from '../model/models';
import { ApiClient } from './apiClient';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export class FlashSwapApi {
    protected client: ApiClient;

    constructor(client?: ApiClient) {
        if (client) {
            this.client = client;
        } else {
            this.client = new ApiClient();
        }
    }

    /**
     * `BTC_GT` represents selling BTC and buying GT. The limits for each currency may vary across different currency pairs.  It is not necessary that two currencies that can be swapped instantaneously can be exchanged with each other. For example, it is possible to sell BTC and buy GT, but it does not necessarily mean that GT can be sold to buy BTC.
     * @summary List All Supported Currency Pairs In Flash Swap
     * @param opts Optional parameters
     * @param opts.currency Retrieve data of the specified currency
     * @param opts.page Page number
     * @param opts.limit Maximum response items.  Default: 100, minimum: 1, Maximum: 1000
     */
    public async listFlashSwapCurrencyPair(opts: { currency?: string, page?: number, limit?: number,  } ) : Promise<{ response: AxiosResponse; body: Array<FlashSwapCurrencyPair>; }> {
        const localVarPath = this.client.basePath + '/flash_swap/currency_pairs';
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

        if (opts.page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(opts.page, "number");
        }

        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(opts.limit, "number");
        }


        const config: AxiosRequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = [];
        return this.client.request<Array<FlashSwapCurrencyPair>>(config, "Array<FlashSwapCurrencyPair>", authSettings);
    }

    /**
     * 
     * @summary List all flash swap orders
     * @param opts Optional parameters
     * @param opts.status Flash swap order status  &#x60;1&#x60; - success &#x60;2&#x60; - failure
     * @param opts.sellCurrency Currency to sell which can be retrieved from supported currency list API &#x60;GET /flash_swap/currencies&#x60;
     * @param opts.buyCurrency Currency to buy which can be retrieved from supported currency list API &#x60;GET /flash_swap/currencies&#x60;
     * @param opts.reverse If results are sorted by id in reverse order. Default to &#x60;true&#x60;  - &#x60;true&#x60;: sort by id in descending order(recent first) - &#x60;false&#x60;: sort by id in ascending order(oldest first)
     * @param opts.limit Maximum number of records to be returned in a single list
     * @param opts.page Page number
     */
    public async listFlashSwapOrders(opts: { status?: number, sellCurrency?: string, buyCurrency?: string, reverse?: boolean, limit?: number, page?: number,  } ) : Promise<{ response: AxiosResponse; body: Array<FlashSwapOrder>; }> {
        const localVarPath = this.client.basePath + '/flash_swap/orders';
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
        if (opts.status !== undefined) {
            localVarQueryParameters['status'] = ObjectSerializer.serialize(opts.status, "number");
        }

        if (opts.sellCurrency !== undefined) {
            localVarQueryParameters['sell_currency'] = ObjectSerializer.serialize(opts.sellCurrency, "string");
        }

        if (opts.buyCurrency !== undefined) {
            localVarQueryParameters['buy_currency'] = ObjectSerializer.serialize(opts.buyCurrency, "string");
        }

        if (opts.reverse !== undefined) {
            localVarQueryParameters['reverse'] = ObjectSerializer.serialize(opts.reverse, "boolean");
        }

        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(opts.limit, "number");
        }

        if (opts.page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(opts.page, "number");
        }


        const config: AxiosRequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<Array<FlashSwapOrder>>(config, "Array<FlashSwapOrder>", authSettings);
    }

    /**
     * Initiate a flash swap preview in advance because order creation requires a preview result
     * @summary Create a flash swap order
     * @param flashSwapOrderRequest 
     */
    public async createFlashSwapOrder(flashSwapOrderRequest: FlashSwapOrderRequest) : Promise<{ response: AxiosResponse; body: FlashSwapOrder; }> {
        const localVarPath = this.client.basePath + '/flash_swap/orders';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'flashSwapOrderRequest' is not null or undefined
        if (flashSwapOrderRequest === null || flashSwapOrderRequest === undefined) {
            throw new Error('Required parameter flashSwapOrderRequest was null or undefined when calling createFlashSwapOrder.');
        }


        const config: AxiosRequestConfig = {
            method: 'POST',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
            data: ObjectSerializer.serialize(flashSwapOrderRequest, "FlashSwapOrderRequest")
        };

        const authSettings = ['apiv4'];
        return this.client.request<FlashSwapOrder>(config, "FlashSwapOrder", authSettings);
    }

    /**
     * 
     * @summary Get a single flash swap order\'s detail
     * @param orderId Flash swap order ID
     */
    public async getFlashSwapOrder(orderId: number) : Promise<{ response: AxiosResponse; body: FlashSwapOrder; }> {
        const localVarPath = this.client.basePath + '/flash_swap/orders/{order_id}'
            .replace('{' + 'order_id' + '}', encodeURIComponent(String(orderId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'orderId' is not null or undefined
        if (orderId === null || orderId === undefined) {
            throw new Error('Required parameter orderId was null or undefined when calling getFlashSwapOrder.');
        }


        const config: AxiosRequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<FlashSwapOrder>(config, "FlashSwapOrder", authSettings);
    }

    /**
     * 
     * @summary Initiate a flash swap order preview
     * @param flashSwapPreviewRequest 
     */
    public async previewFlashSwapOrder(flashSwapPreviewRequest: FlashSwapPreviewRequest) : Promise<{ response: AxiosResponse; body: FlashSwapOrderPreview; }> {
        const localVarPath = this.client.basePath + '/flash_swap/orders/preview';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'flashSwapPreviewRequest' is not null or undefined
        if (flashSwapPreviewRequest === null || flashSwapPreviewRequest === undefined) {
            throw new Error('Required parameter flashSwapPreviewRequest was null or undefined when calling previewFlashSwapOrder.');
        }


        const config: AxiosRequestConfig = {
            method: 'POST',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
            data: ObjectSerializer.serialize(flashSwapPreviewRequest, "FlashSwapPreviewRequest")
        };

        const authSettings = ['apiv4'];
        return this.client.request<FlashSwapOrderPreview>(config, "FlashSwapOrderPreview", authSettings);
    }
}
