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

import { MockMarginResult } from './mockMarginResult';

/**
 * 风险单元
 */
export class MockRiskUnit {
    /**
     * 风险单元名称
     */
    'symbol'?: string;
    /**
     * 现货对冲使用量
     */
    'spotInUse'?: string;
    /**
     * 维持保证金
     */
    'maintainMargin'?: string;
    /**
     * 起始保证金
     */
    'initialMargin'?: string;
    /**
     * 保证金结果
     */
    'marginResult'?: Array<MockMarginResult>;
    /**
     * 风险单元的 总 delta
     */
    'delta'?: string;
    /**
     * 风险单元的 总 gamma
     */
    'gamma'?: string;
    /**
     * 风险单元的 总 theta
     */
    'theta'?: string;
    /**
     * 风险单元的 总 vega
     */
    'vega'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'symbol',
            baseName: 'symbol',
            type: 'string',
        },
        {
            name: 'spotInUse',
            baseName: 'spot_in_use',
            type: 'string',
        },
        {
            name: 'maintainMargin',
            baseName: 'maintain_margin',
            type: 'string',
        },
        {
            name: 'initialMargin',
            baseName: 'initial_margin',
            type: 'string',
        },
        {
            name: 'marginResult',
            baseName: 'margin_result',
            type: 'Array<MockMarginResult>',
        },
        {
            name: 'delta',
            baseName: 'delta',
            type: 'string',
        },
        {
            name: 'gamma',
            baseName: 'gamma',
            type: 'string',
        },
        {
            name: 'theta',
            baseName: 'theta',
            type: 'string',
        },
        {
            name: 'vega',
            baseName: 'vega',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return MockRiskUnit.attributeTypeMap;
    }
}
