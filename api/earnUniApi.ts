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
import { CreateUniLend } from '../model/createUniLend';
import { InlineResponse200 } from '../model/inlineResponse200';
import { InlineResponse2001 } from '../model/inlineResponse2001';
import { PatchUniLend } from '../model/patchUniLend';
import { UniCurrency } from '../model/uniCurrency';
import { UniCurrencyInterest } from '../model/uniCurrencyInterest';
import { UniInterestRecord } from '../model/uniInterestRecord';
import { UniLend } from '../model/uniLend';
import { UniLendInterest } from '../model/uniLendInterest';
import { UniLendRecord } from '../model/uniLendRecord';
import { ObjectSerializer } from '../model/models';
import { ApiClient } from './apiClient';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export class EarnUniApi {
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
     * @summary List currencies for lending
     */
    public async listUniCurrencies(): Promise<{ response: AxiosResponse; body: Array<UniCurrency> }> {
        const localVarPath = this.client.basePath + '/earn/uni/currencies';
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

        const authSettings = [];
        return this.client.request<Array<UniCurrency>>(config, 'Array<UniCurrency>', authSettings);
    }

    /**
     *
     * @summary Get currency detail for lending
     * @param currency Currency
     */
    public async getUniCurrency(currency: string): Promise<{ response: AxiosResponse; body: UniCurrency }> {
        const localVarPath =
            this.client.basePath +
            '/earn/uni/currencies/{currency}'.replace('{' + 'currency' + '}', encodeURIComponent(String(currency)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'currency' is not null or undefined
        if (currency === null || currency === undefined) {
            throw new Error('Required parameter currency was null or undefined when calling getUniCurrency.');
        }

        const config: AxiosRequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = [];
        return this.client.request<UniCurrency>(config, 'UniCurrency', authSettings);
    }

    /**
     *
     * @summary List user\'s lending orders
     * @param opts Optional parameters
     * @param opts.currency Retrieve data of the specified currency
     * @param opts.page Page number
     * @param opts.limit Maximum response items.  Default: 100, minimum: 1, Maximum: 100
     */
    public async listUserUniLends(opts: {
        currency?: string;
        page?: number;
        limit?: number;
    }): Promise<{ response: AxiosResponse; body: Array<UniLend> }> {
        const localVarPath = this.client.basePath + '/earn/uni/lends';
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
            localVarQueryParameters['currency'] = ObjectSerializer.serialize(opts.currency, 'string');
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
        return this.client.request<Array<UniLend>>(config, 'Array<UniLend>', authSettings);
    }

    /**
     * `Lending`:  The minimum interest rate is required in lending. The lending result is updated hourly and the interest profit is paid on the next hour. A high interest rate might lead to unsuccessful lending and no profit will be gained for that hour. If the funds are redeemed before the hourly settlement, no interest can be obtained for that hour. About priority: the orders created or amended first under the same interest rate will be lent out first  `Redemption`:  Funds that failed to be lent can be redeemed immediately.  For the successfully lent funds, enjoy the hourly income, and the redemption will arrive at the next hour  `Note`:  Two minutes before and after the hour is the settlement time, lending and redemption are prohibited.
     * @summary Lend or redeem
     * @param createUniLend
     */
    public async createUniLend(createUniLend: CreateUniLend): Promise<{ response: AxiosResponse; body?: any }> {
        const localVarPath = this.client.basePath + '/earn/uni/lends';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);

        // verify required parameter 'createUniLend' is not null or undefined
        if (createUniLend === null || createUniLend === undefined) {
            throw new Error('Required parameter createUniLend was null or undefined when calling createUniLend.');
        }

        const config: AxiosRequestConfig = {
            method: 'POST',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
            data: ObjectSerializer.serialize(createUniLend, 'CreateUniLend'),
        };

        const authSettings = ['apiv4'];
        return this.client.request<any>(config, '', authSettings);
    }

    /**
     * Currently only supports amending the minimum interest rate (hour)
     * @summary Amend lending order
     * @param patchUniLend
     */
    public async changeUniLend(patchUniLend: PatchUniLend): Promise<{ response: AxiosResponse; body?: any }> {
        const localVarPath = this.client.basePath + '/earn/uni/lends';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);

        // verify required parameter 'patchUniLend' is not null or undefined
        if (patchUniLend === null || patchUniLend === undefined) {
            throw new Error('Required parameter patchUniLend was null or undefined when calling changeUniLend.');
        }

        const config: AxiosRequestConfig = {
            method: 'PATCH',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
            data: ObjectSerializer.serialize(patchUniLend, 'PatchUniLend'),
        };

        const authSettings = ['apiv4'];
        return this.client.request<any>(config, '', authSettings);
    }

    /**
     *
     * @summary List records of lending
     * @param opts Optional parameters
     * @param opts.currency Retrieve data of the specified currency
     * @param opts.page Page number
     * @param opts.limit Maximum response items.  Default: 100, minimum: 1, Maximum: 100
     * @param opts.from Start timestamp
     * @param opts.to End timestamp
     * @param opts.type type: lend - lend, redeem - redeem
     */
    public async listUniLendRecords(opts: {
        currency?: string;
        page?: number;
        limit?: number;
        from?: number;
        to?: number;
        type?: 'lend' | 'redeem';
    }): Promise<{ response: AxiosResponse; body: Array<UniLendRecord> }> {
        const localVarPath = this.client.basePath + '/earn/uni/lend_records';
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
            localVarQueryParameters['currency'] = ObjectSerializer.serialize(opts.currency, 'string');
        }

        if (opts.page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(opts.page, 'number');
        }

        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(opts.limit, 'number');
        }

        if (opts.from !== undefined) {
            localVarQueryParameters['from'] = ObjectSerializer.serialize(opts.from, 'number');
        }

        if (opts.to !== undefined) {
            localVarQueryParameters['to'] = ObjectSerializer.serialize(opts.to, 'number');
        }

        if (opts.type !== undefined) {
            localVarQueryParameters['type'] = ObjectSerializer.serialize(opts.type, "'lend' | 'redeem'");
        }

        const config: AxiosRequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<Array<UniLendRecord>>(config, 'Array<UniLendRecord>', authSettings);
    }

    /**
     *
     * @summary Get the user\'s total interest income of specified currency
     * @param currency Currency
     */
    public async getUniInterest(currency: string): Promise<{ response: AxiosResponse; body: UniLendInterest }> {
        const localVarPath =
            this.client.basePath +
            '/earn/uni/interests/{currency}'.replace('{' + 'currency' + '}', encodeURIComponent(String(currency)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'currency' is not null or undefined
        if (currency === null || currency === undefined) {
            throw new Error('Required parameter currency was null or undefined when calling getUniInterest.');
        }

        const config: AxiosRequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<UniLendInterest>(config, 'UniLendInterest', authSettings);
    }

    /**
     *
     * @summary List interest records
     * @param opts Optional parameters
     * @param opts.currency Retrieve data of the specified currency
     * @param opts.page Page number
     * @param opts.limit Maximum response items.  Default: 100, minimum: 1, Maximum: 100
     * @param opts.from Start timestamp
     * @param opts.to End timestamp
     */
    public async listUniInterestRecords(opts: {
        currency?: string;
        page?: number;
        limit?: number;
        from?: number;
        to?: number;
    }): Promise<{ response: AxiosResponse; body: Array<UniInterestRecord> }> {
        const localVarPath = this.client.basePath + '/earn/uni/interest_records';
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
            localVarQueryParameters['currency'] = ObjectSerializer.serialize(opts.currency, 'string');
        }

        if (opts.page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(opts.page, 'number');
        }

        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(opts.limit, 'number');
        }

        if (opts.from !== undefined) {
            localVarQueryParameters['from'] = ObjectSerializer.serialize(opts.from, 'number');
        }

        if (opts.to !== undefined) {
            localVarQueryParameters['to'] = ObjectSerializer.serialize(opts.to, 'number');
        }

        const config: AxiosRequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<Array<UniInterestRecord>>(config, 'Array<UniInterestRecord>', authSettings);
    }

    /**
     *
     * @summary query currency interest compounding status
     * @param currency Currency
     */
    public async getUniInterestStatus(
        currency: string,
    ): Promise<{ response: AxiosResponse; body: UniCurrencyInterest }> {
        const localVarPath =
            this.client.basePath +
            '/earn/uni/interest_status/{currency}'.replace(
                '{' + 'currency' + '}',
                encodeURIComponent(String(currency)),
            );
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'currency' is not null or undefined
        if (currency === null || currency === undefined) {
            throw new Error('Required parameter currency was null or undefined when calling getUniInterestStatus.');
        }

        const config: AxiosRequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<UniCurrencyInterest>(config, 'UniCurrencyInterest', authSettings);
    }

    /**
     * Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-07-02 10:52+0000 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME <EMAIL@ADDRESS> Language: en Language-Team: en <LL@li.org> Plural-Forms: nplurals=2; plural=(n != 1) MIME-Version: 1.0 Content-Type: text/plain; charset=utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0
     * @summary UniLoan currency annualized trend chart
     * @param from Start timestamp, unit s, maximum span of 30 days
     * @param to End timestamp, unit s, maximum span of 30 days
     * @param asset Currency name
     */
    public async listUniChart(
        from: number,
        to: number,
        asset: string,
    ): Promise<{ response: AxiosResponse; body: Array<InlineResponse200> }> {
        const localVarPath = this.client.basePath + '/earn/uni/chart';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'from' is not null or undefined
        if (from === null || from === undefined) {
            throw new Error('Required parameter from was null or undefined when calling listUniChart.');
        }

        // verify required parameter 'to' is not null or undefined
        if (to === null || to === undefined) {
            throw new Error('Required parameter to was null or undefined when calling listUniChart.');
        }

        // verify required parameter 'asset' is not null or undefined
        if (asset === null || asset === undefined) {
            throw new Error('Required parameter asset was null or undefined when calling listUniChart.');
        }

        localVarQueryParameters['from'] = ObjectSerializer.serialize(from, 'number');

        localVarQueryParameters['to'] = ObjectSerializer.serialize(to, 'number');

        localVarQueryParameters['asset'] = ObjectSerializer.serialize(asset, 'string');

        const config: AxiosRequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<Array<InlineResponse200>>(config, 'Array<InlineResponse200>', authSettings);
    }

    /**
     * Project-Id-Version: GateApiTools 1.0.0 Report-Msgid-Bugs-To: EMAIL@ADDRESS POT-Creation-Date: 2025-07-02 10:52+0000 PO-Revision-Date: 2019-01-02 17:30+0800 Last-Translator: FULL NAME <EMAIL@ADDRESS> Language: en Language-Team: en <LL@li.org> Plural-Forms: nplurals=2; plural=(n != 1) MIME-Version: 1.0 Content-Type: text/plain; charset=utf-8 Content-Transfer-Encoding: 8bit Generated-By: Babel 2.8.0
     * @summary Currency estimate annualized interest rate
     */
    public async listUniRate(): Promise<{ response: AxiosResponse; body: Array<InlineResponse2001> }> {
        const localVarPath = this.client.basePath + '/earn/uni/rate';
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
        return this.client.request<Array<InlineResponse2001>>(config, 'Array<InlineResponse2001>', authSettings);
    }
}
