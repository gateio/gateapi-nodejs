export * from "./apiClient";
export * from './deliveryApi';
import { DeliveryApi } from './deliveryApi';
export * from './futuresApi';
import { FuturesApi } from './futuresApi';
export * from './marginApi';
import { MarginApi } from './marginApi';
export * from './spotApi';
import { SpotApi } from './spotApi';
export * from './walletApi';
import { WalletApi } from './walletApi';
export * from './withdrawalApi';
import { WithdrawalApi } from './withdrawalApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export const APIS = [DeliveryApi, FuturesApi, MarginApi, SpotApi, WalletApi, WithdrawalApi];
