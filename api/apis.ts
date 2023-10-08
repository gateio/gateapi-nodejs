export * from './apiClient';
export * from './accountApi';
import { AccountApi } from './accountApi';
export * from './collateralLoanApi';
import { CollateralLoanApi } from './collateralLoanApi';
export * from './deliveryApi';
import { DeliveryApi } from './deliveryApi';
export * from './earnUniApi';
import { EarnUniApi } from './earnUniApi';
export * from './flashSwapApi';
import { FlashSwapApi } from './flashSwapApi';
export * from './futuresApi';
import { FuturesApi } from './futuresApi';
export * from './marginApi';
import { MarginApi } from './marginApi';
export * from './marginUniApi';
import { MarginUniApi } from './marginUniApi';
export * from './optionsApi';
import { OptionsApi } from './optionsApi';
export * from './portfolioApi';
import { PortfolioApi } from './portfolioApi';
export * from './rebateApi';
import { RebateApi } from './rebateApi';
export * from './spotApi';
import { SpotApi } from './spotApi';
export * from './subAccountApi';
import { SubAccountApi } from './subAccountApi';
export * from './walletApi';
import { WalletApi } from './walletApi';
export * from './withdrawalApi';
import { WithdrawalApi } from './withdrawalApi';

export const APIS = [
    AccountApi,
    CollateralLoanApi,
    DeliveryApi,
    EarnUniApi,
    FlashSwapApi,
    FuturesApi,
    MarginApi,
    MarginUniApi,
    OptionsApi,
    PortfolioApi,
    RebateApi,
    SpotApi,
    SubAccountApi,
    WalletApi,
    WithdrawalApi,
];
