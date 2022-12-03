export * from './apiClient';
export * from './deliveryApi';
import { DeliveryApi } from './deliveryApi';
export * from './flashSwapApi';
import { FlashSwapApi } from './flashSwapApi';
export * from './futuresApi';
import { FuturesApi } from './futuresApi';
export * from './marginApi';
import { MarginApi } from './marginApi';
export * from './optionsApi';
import { OptionsApi } from './optionsApi';
export * from './spotApi';
import { SpotApi } from './spotApi';
export * from './subAccountApi';
import { SubAccountApi } from './subAccountApi';
export * from './walletApi';
import { WalletApi } from './walletApi';
export * from './withdrawalApi';
import { WithdrawalApi } from './withdrawalApi';

export const APIS = [
    DeliveryApi,
    FlashSwapApi,
    FuturesApi,
    MarginApi,
    OptionsApi,
    SpotApi,
    SubAccountApi,
    WalletApi,
    WithdrawalApi,
];
