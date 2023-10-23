export * from './accountBalance';
export * from './accountDetail';
export * from './accountDetailKey';
export * from './agencyCommission';
export * from './agencyCommissionHistory';
export * from './agencyTransaction';
export * from './agencyTransactionHistory';
export * from './amendOrderResult';
export * from './apiV4KeyPerm';
export * from './autoRepaySetting';
export * from './batchAmendItem';
export * from './batchFuturesOrder';
export * from './batchOrder';
export * from './cancelBatchOrder';
export * from './cancelOrderResult';
export * from './collateralAlign';
export * from './collateralLoanCurrency';
export * from './collateralOrder';
export * from './collateralRecord';
export * from './contract';
export * from './contractStat';
export * from './countdownCancelAllFuturesTask';
export * from './countdownCancelAllSpotTask';
export * from './createCollateralOrder';
export * from './createUniLend';
export * from './createUniLoan';
export * from './crossMarginAccount';
export * from './crossMarginAccountBook';
export * from './crossMarginBalance';
export * from './crossMarginBalance1';
export * from './crossMarginCurrency';
export * from './crossMarginLoan';
export * from './crossMarginRepayRequest';
export * from './crossMarginRepayment';
export * from './crossMarginTransferable';
export * from './currency';
export * from './currencyChain';
export * from './currencyPair';
export * from './deliveryCandlestick';
export * from './deliveryContract';
export * from './deliverySettlement';
export * from './depositAddress';
export * from './flashSwapCurrency';
export * from './flashSwapCurrencyPair';
export * from './flashSwapOrder';
export * from './flashSwapOrderPreview';
export * from './flashSwapOrderRequest';
export * from './flashSwapPreviewRequest';
export * from './fundingAccount';
export * from './fundingBookItem';
export * from './fundingRateRecord';
export * from './futuresAccount';
export * from './futuresAccountBook';
export * from './futuresAccountHistory';
export * from './futuresAutoDeleverage';
export * from './futuresCandlestick';
export * from './futuresFee';
export * from './futuresIndexConstituents';
export * from './futuresInitialOrder';
export * from './futuresLiqOrder';
export * from './futuresLiquidate';
export * from './futuresOrder';
export * from './futuresOrderAmendment';
export * from './futuresOrderBook';
export * from './futuresOrderBookItem';
export * from './futuresPremiumIndex';
export * from './futuresPriceTrigger';
export * from './futuresPriceTriggeredOrder';
export * from './futuresTicker';
export * from './futuresTrade';
export * from './indexConstituent';
export * from './insuranceRecord';
export * from './ledgerRecord';
export * from './liquidateOrder';
export * from './loan';
export * from './loanPatch';
export * from './loanRecord';
export * from './marginAccount';
export * from './marginAccountBook';
export * from './marginAccountCurrency';
export * from './marginBorrowable';
export * from './marginCurrencyPair';
export * from './marginTransferable';
export * from './maxUniBorrowable';
export * from './multiChainAddressItem';
export * from './myFuturesTrade';
export * from './myFuturesTradeTimeRange';
export * from './openOrders';
export * from './optionsAccount';
export * from './optionsAccountBook';
export * from './optionsCandlestick';
export * from './optionsContract';
export * from './optionsMySettlements';
export * from './optionsMyTrade';
export * from './optionsOrder';
export * from './optionsPosition';
export * from './optionsPositionClose';
export * from './optionsPositionCloseOrder';
export * from './optionsSettlement';
export * from './optionsTicker';
export * from './optionsUnderlying';
export * from './optionsUnderlyingTicker';
export * from './order';
export * from './orderBook';
export * from './orderPatch';
export * from './orderResp';
export * from './patchUniLend';
export * from './portfolioAccount';
export * from './portfolioBorrowable';
export * from './portfolioLoan';
export * from './portfolioLoanRecord';
export * from './portfolioMarginBalance';
export * from './portfolioMode';
export * from './portfolioTransferable';
export * from './position';
export * from './positionClose';
export * from './positionCloseOrder';
export * from './repayLoan';
export * from './repayRecord';
export * from './repayRequest';
export * from './repayResp';
export * from './repayment';
export * from './savedAddress';
export * from './spotAccount';
export * from './spotAccountBook';
export * from './spotFee';
export * from './spotPricePutOrder';
export * from './spotPriceTrigger';
export * from './spotPriceTriggeredOrder';
export * from './stpGroup';
export * from './stpGroupUser';
export * from './subAccount';
export * from './subAccountBalance';
export * from './subAccountCrossMarginBalance';
export * from './subAccountFuturesBalance';
export * from './subAccountKey';
export * from './subAccountMarginBalance';
export * from './subAccountToSubAccount';
export * from './subAccountTransfer';
export * from './subCrossMarginAccount';
export * from './systemTime';
export * from './ticker';
export * from './totalBalance';
export * from './trade';
export * from './tradeFee';
export * from './transactionID';
export * from './transfer';
export * from './triggerOrderResponse';
export * from './triggerTime';
export * from './uniCurrency';
export * from './uniCurrencyInterest';
export * from './uniCurrencyPair';
export * from './uniInterestMode';
export * from './uniInterestRecord';
export * from './uniLend';
export * from './uniLendInterest';
export * from './uniLendRecord';
export * from './uniLoan';
export * from './uniLoanInterestRecord';
export * from './uniLoanRecord';
export * from './userLtvInfo';
export * from './userTotalAmount';
export * from './withdrawStatus';

import { AxiosRequestConfig } from 'axios';
import querystring = require('querystring');
import crypto = require('crypto');
import { URL } from 'url';

import { AccountBalance } from './accountBalance';
import { AccountDetail } from './accountDetail';
import { AccountDetailKey } from './accountDetailKey';
import { AgencyCommission } from './agencyCommission';
import { AgencyCommissionHistory } from './agencyCommissionHistory';
import { AgencyTransaction } from './agencyTransaction';
import { AgencyTransactionHistory } from './agencyTransactionHistory';
import { AmendOrderResult } from './amendOrderResult';
import { ApiV4KeyPerm } from './apiV4KeyPerm';
import { AutoRepaySetting } from './autoRepaySetting';
import { BatchAmendItem } from './batchAmendItem';
import { BatchFuturesOrder } from './batchFuturesOrder';
import { BatchOrder } from './batchOrder';
import { CancelBatchOrder } from './cancelBatchOrder';
import { CancelOrderResult } from './cancelOrderResult';
import { CollateralAlign } from './collateralAlign';
import { CollateralLoanCurrency } from './collateralLoanCurrency';
import { CollateralOrder } from './collateralOrder';
import { CollateralRecord } from './collateralRecord';
import { Contract } from './contract';
import { ContractStat } from './contractStat';
import { CountdownCancelAllFuturesTask } from './countdownCancelAllFuturesTask';
import { CountdownCancelAllSpotTask } from './countdownCancelAllSpotTask';
import { CreateCollateralOrder } from './createCollateralOrder';
import { CreateUniLend } from './createUniLend';
import { CreateUniLoan } from './createUniLoan';
import { CrossMarginAccount } from './crossMarginAccount';
import { CrossMarginAccountBook } from './crossMarginAccountBook';
import { CrossMarginBalance } from './crossMarginBalance';
import { CrossMarginBalance1 } from './crossMarginBalance1';
import { CrossMarginCurrency } from './crossMarginCurrency';
import { CrossMarginLoan } from './crossMarginLoan';
import { CrossMarginRepayRequest } from './crossMarginRepayRequest';
import { CrossMarginRepayment } from './crossMarginRepayment';
import { CrossMarginTransferable } from './crossMarginTransferable';
import { Currency } from './currency';
import { CurrencyChain } from './currencyChain';
import { CurrencyPair } from './currencyPair';
import { DeliveryCandlestick } from './deliveryCandlestick';
import { DeliveryContract } from './deliveryContract';
import { DeliverySettlement } from './deliverySettlement';
import { DepositAddress } from './depositAddress';
import { FlashSwapCurrency } from './flashSwapCurrency';
import { FlashSwapCurrencyPair } from './flashSwapCurrencyPair';
import { FlashSwapOrder } from './flashSwapOrder';
import { FlashSwapOrderPreview } from './flashSwapOrderPreview';
import { FlashSwapOrderRequest } from './flashSwapOrderRequest';
import { FlashSwapPreviewRequest } from './flashSwapPreviewRequest';
import { FundingAccount } from './fundingAccount';
import { FundingBookItem } from './fundingBookItem';
import { FundingRateRecord } from './fundingRateRecord';
import { FuturesAccount } from './futuresAccount';
import { FuturesAccountBook } from './futuresAccountBook';
import { FuturesAccountHistory } from './futuresAccountHistory';
import { FuturesAutoDeleverage } from './futuresAutoDeleverage';
import { FuturesCandlestick } from './futuresCandlestick';
import { FuturesFee } from './futuresFee';
import { FuturesIndexConstituents } from './futuresIndexConstituents';
import { FuturesInitialOrder } from './futuresInitialOrder';
import { FuturesLiqOrder } from './futuresLiqOrder';
import { FuturesLiquidate } from './futuresLiquidate';
import { FuturesOrder } from './futuresOrder';
import { FuturesOrderAmendment } from './futuresOrderAmendment';
import { FuturesOrderBook } from './futuresOrderBook';
import { FuturesOrderBookItem } from './futuresOrderBookItem';
import { FuturesPremiumIndex } from './futuresPremiumIndex';
import { FuturesPriceTrigger } from './futuresPriceTrigger';
import { FuturesPriceTriggeredOrder } from './futuresPriceTriggeredOrder';
import { FuturesTicker } from './futuresTicker';
import { FuturesTrade } from './futuresTrade';
import { IndexConstituent } from './indexConstituent';
import { InsuranceRecord } from './insuranceRecord';
import { LedgerRecord } from './ledgerRecord';
import { LiquidateOrder } from './liquidateOrder';
import { Loan } from './loan';
import { LoanPatch } from './loanPatch';
import { LoanRecord } from './loanRecord';
import { MarginAccount } from './marginAccount';
import { MarginAccountBook } from './marginAccountBook';
import { MarginAccountCurrency } from './marginAccountCurrency';
import { MarginBorrowable } from './marginBorrowable';
import { MarginCurrencyPair } from './marginCurrencyPair';
import { MarginTransferable } from './marginTransferable';
import { MaxUniBorrowable } from './maxUniBorrowable';
import { MultiChainAddressItem } from './multiChainAddressItem';
import { MyFuturesTrade } from './myFuturesTrade';
import { MyFuturesTradeTimeRange } from './myFuturesTradeTimeRange';
import { OpenOrders } from './openOrders';
import { OptionsAccount } from './optionsAccount';
import { OptionsAccountBook } from './optionsAccountBook';
import { OptionsCandlestick } from './optionsCandlestick';
import { OptionsContract } from './optionsContract';
import { OptionsMySettlements } from './optionsMySettlements';
import { OptionsMyTrade } from './optionsMyTrade';
import { OptionsOrder } from './optionsOrder';
import { OptionsPosition } from './optionsPosition';
import { OptionsPositionClose } from './optionsPositionClose';
import { OptionsPositionCloseOrder } from './optionsPositionCloseOrder';
import { OptionsSettlement } from './optionsSettlement';
import { OptionsTicker } from './optionsTicker';
import { OptionsUnderlying } from './optionsUnderlying';
import { OptionsUnderlyingTicker } from './optionsUnderlyingTicker';
import { Order } from './order';
import { OrderBook } from './orderBook';
import { OrderPatch } from './orderPatch';
import { OrderResp } from './orderResp';
import { PatchUniLend } from './patchUniLend';
import { PortfolioAccount } from './portfolioAccount';
import { PortfolioBorrowable } from './portfolioBorrowable';
import { PortfolioLoan } from './portfolioLoan';
import { PortfolioLoanRecord } from './portfolioLoanRecord';
import { PortfolioMarginBalance } from './portfolioMarginBalance';
import { PortfolioMode } from './portfolioMode';
import { PortfolioTransferable } from './portfolioTransferable';
import { Position } from './position';
import { PositionClose } from './positionClose';
import { PositionCloseOrder } from './positionCloseOrder';
import { RepayLoan } from './repayLoan';
import { RepayRecord } from './repayRecord';
import { RepayRequest } from './repayRequest';
import { RepayResp } from './repayResp';
import { Repayment } from './repayment';
import { SavedAddress } from './savedAddress';
import { SpotAccount } from './spotAccount';
import { SpotAccountBook } from './spotAccountBook';
import { SpotFee } from './spotFee';
import { SpotPricePutOrder } from './spotPricePutOrder';
import { SpotPriceTrigger } from './spotPriceTrigger';
import { SpotPriceTriggeredOrder } from './spotPriceTriggeredOrder';
import { StpGroup } from './stpGroup';
import { StpGroupUser } from './stpGroupUser';
import { SubAccount } from './subAccount';
import { SubAccountBalance } from './subAccountBalance';
import { SubAccountCrossMarginBalance } from './subAccountCrossMarginBalance';
import { SubAccountFuturesBalance } from './subAccountFuturesBalance';
import { SubAccountKey } from './subAccountKey';
import { SubAccountMarginBalance } from './subAccountMarginBalance';
import { SubAccountToSubAccount } from './subAccountToSubAccount';
import { SubAccountTransfer } from './subAccountTransfer';
import { SubCrossMarginAccount } from './subCrossMarginAccount';
import { SystemTime } from './systemTime';
import { Ticker } from './ticker';
import { TotalBalance } from './totalBalance';
import { Trade } from './trade';
import { TradeFee } from './tradeFee';
import { TransactionID } from './transactionID';
import { Transfer } from './transfer';
import { TriggerOrderResponse } from './triggerOrderResponse';
import { TriggerTime } from './triggerTime';
import { UniCurrency } from './uniCurrency';
import { UniCurrencyInterest } from './uniCurrencyInterest';
import { UniCurrencyPair } from './uniCurrencyPair';
import { UniInterestMode } from './uniInterestMode';
import { UniInterestRecord } from './uniInterestRecord';
import { UniLend } from './uniLend';
import { UniLendInterest } from './uniLendInterest';
import { UniLendRecord } from './uniLendRecord';
import { UniLoan } from './uniLoan';
import { UniLoanInterestRecord } from './uniLoanInterestRecord';
import { UniLoanRecord } from './uniLoanRecord';
import { UserLtvInfo } from './userLtvInfo';
import { UserTotalAmount } from './userTotalAmount';
import { WithdrawStatus } from './withdrawStatus';

/* tslint:disable:no-unused-variable */
const primitives = ['string', 'boolean', 'double', 'integer', 'long', 'float', 'number', 'any'];

const enumsMap: { [index: string]: any } = {
    'AccountBalance.Currency': AccountBalance.Currency,
    'ApiV4KeyPerm.Name': ApiV4KeyPerm.Name,
    'AutoRepaySetting.Status': AutoRepaySetting.Status,
    'BatchFuturesOrder.FinishAs': BatchFuturesOrder.FinishAs,
    'BatchFuturesOrder.Status': BatchFuturesOrder.Status,
    'BatchFuturesOrder.Tif': BatchFuturesOrder.Tif,
    'BatchFuturesOrder.AutoSize': BatchFuturesOrder.AutoSize,
    'BatchFuturesOrder.StpAct': BatchFuturesOrder.StpAct,
    'BatchOrder.Status': BatchOrder.Status,
    'BatchOrder.Type': BatchOrder.Type,
    'BatchOrder.Account': BatchOrder.Account,
    'BatchOrder.Side': BatchOrder.Side,
    'BatchOrder.TimeInForce': BatchOrder.TimeInForce,
    'BatchOrder.StpAct': BatchOrder.StpAct,
    'BatchOrder.FinishAs': BatchOrder.FinishAs,
    'Contract.Type': Contract.Type,
    'Contract.MarkType': Contract.MarkType,
    'CreateUniLend.Type': CreateUniLend.Type,
    'CreateUniLoan.Type': CreateUniLoan.Type,
    'CrossMarginLoan.Status': CrossMarginLoan.Status,
    'CurrencyPair.TradeStatus': CurrencyPair.TradeStatus,
    'DeliveryContract.Cycle': DeliveryContract.Cycle,
    'DeliveryContract.Type': DeliveryContract.Type,
    'DeliveryContract.MarkType': DeliveryContract.MarkType,
    'FuturesAccountBook.Type': FuturesAccountBook.Type,
    'FuturesInitialOrder.Tif': FuturesInitialOrder.Tif,
    'FuturesOrder.FinishAs': FuturesOrder.FinishAs,
    'FuturesOrder.Status': FuturesOrder.Status,
    'FuturesOrder.Tif': FuturesOrder.Tif,
    'FuturesOrder.AutoSize': FuturesOrder.AutoSize,
    'FuturesOrder.StpAct': FuturesOrder.StpAct,
    'FuturesPriceTrigger.StrategyType': FuturesPriceTrigger.StrategyType,
    'FuturesPriceTrigger.PriceType': FuturesPriceTrigger.PriceType,
    'FuturesPriceTrigger.Rule': FuturesPriceTrigger.Rule,
    'FuturesPriceTriggeredOrder.Status': FuturesPriceTriggeredOrder.Status,
    'FuturesPriceTriggeredOrder.FinishAs': FuturesPriceTriggeredOrder.FinishAs,
    'LedgerRecord.Status': LedgerRecord.Status,
    'Loan.Status': Loan.Status,
    'Loan.Side': Loan.Side,
    'LoanPatch.Side': LoanPatch.Side,
    'LoanRecord.Status': LoanRecord.Status,
    'MyFuturesTrade.Role': MyFuturesTrade.Role,
    'MyFuturesTradeTimeRange.Role': MyFuturesTradeTimeRange.Role,
    'OptionsMyTrade.Role': OptionsMyTrade.Role,
    'OptionsOrder.FinishAs': OptionsOrder.FinishAs,
    'OptionsOrder.Status': OptionsOrder.Status,
    'OptionsOrder.Tif': OptionsOrder.Tif,
    'OptionsPositionClose.Side': OptionsPositionClose.Side,
    'Order.Status': Order.Status,
    'Order.Type': Order.Type,
    'Order.Account': Order.Account,
    'Order.Side': Order.Side,
    'Order.TimeInForce': Order.TimeInForce,
    'Order.StpAct': Order.StpAct,
    'Order.FinishAs': Order.FinishAs,
    'PortfolioLoan.Type': PortfolioLoan.Type,
    'Position.Mode': Position.Mode,
    'PositionClose.Side': PositionClose.Side,
    'RepayRequest.Mode': RepayRequest.Mode,
    'SpotPricePutOrder.Side': SpotPricePutOrder.Side,
    'SpotPricePutOrder.Account': SpotPricePutOrder.Account,
    'SpotPricePutOrder.TimeInForce': SpotPricePutOrder.TimeInForce,
    'SpotPriceTrigger.Rule': SpotPriceTrigger.Rule,
    'SubAccountToSubAccount.SubAccountFromType': SubAccountToSubAccount.SubAccountFromType,
    'SubAccountToSubAccount.SubAccountToType': SubAccountToSubAccount.SubAccountToType,
    'SubAccountTransfer.Direction': SubAccountTransfer.Direction,
    'SubAccountTransfer.SubAccountType': SubAccountTransfer.SubAccountType,
    'Trade.Side': Trade.Side,
    'Trade.Role': Trade.Role,
    'Transfer.From': Transfer.From,
    'Transfer.To': Transfer.To,
};

const typeMap: { [index: string]: any } = {
    AccountBalance: AccountBalance,
    AccountDetail: AccountDetail,
    AccountDetailKey: AccountDetailKey,
    AgencyCommission: AgencyCommission,
    AgencyCommissionHistory: AgencyCommissionHistory,
    AgencyTransaction: AgencyTransaction,
    AgencyTransactionHistory: AgencyTransactionHistory,
    AmendOrderResult: AmendOrderResult,
    ApiV4KeyPerm: ApiV4KeyPerm,
    AutoRepaySetting: AutoRepaySetting,
    BatchAmendItem: BatchAmendItem,
    BatchFuturesOrder: BatchFuturesOrder,
    BatchOrder: BatchOrder,
    CancelBatchOrder: CancelBatchOrder,
    CancelOrderResult: CancelOrderResult,
    CollateralAlign: CollateralAlign,
    CollateralLoanCurrency: CollateralLoanCurrency,
    CollateralOrder: CollateralOrder,
    CollateralRecord: CollateralRecord,
    Contract: Contract,
    ContractStat: ContractStat,
    CountdownCancelAllFuturesTask: CountdownCancelAllFuturesTask,
    CountdownCancelAllSpotTask: CountdownCancelAllSpotTask,
    CreateCollateralOrder: CreateCollateralOrder,
    CreateUniLend: CreateUniLend,
    CreateUniLoan: CreateUniLoan,
    CrossMarginAccount: CrossMarginAccount,
    CrossMarginAccountBook: CrossMarginAccountBook,
    CrossMarginBalance: CrossMarginBalance,
    CrossMarginBalance1: CrossMarginBalance1,
    CrossMarginCurrency: CrossMarginCurrency,
    CrossMarginLoan: CrossMarginLoan,
    CrossMarginRepayRequest: CrossMarginRepayRequest,
    CrossMarginRepayment: CrossMarginRepayment,
    CrossMarginTransferable: CrossMarginTransferable,
    Currency: Currency,
    CurrencyChain: CurrencyChain,
    CurrencyPair: CurrencyPair,
    DeliveryCandlestick: DeliveryCandlestick,
    DeliveryContract: DeliveryContract,
    DeliverySettlement: DeliverySettlement,
    DepositAddress: DepositAddress,
    FlashSwapCurrency: FlashSwapCurrency,
    FlashSwapCurrencyPair: FlashSwapCurrencyPair,
    FlashSwapOrder: FlashSwapOrder,
    FlashSwapOrderPreview: FlashSwapOrderPreview,
    FlashSwapOrderRequest: FlashSwapOrderRequest,
    FlashSwapPreviewRequest: FlashSwapPreviewRequest,
    FundingAccount: FundingAccount,
    FundingBookItem: FundingBookItem,
    FundingRateRecord: FundingRateRecord,
    FuturesAccount: FuturesAccount,
    FuturesAccountBook: FuturesAccountBook,
    FuturesAccountHistory: FuturesAccountHistory,
    FuturesAutoDeleverage: FuturesAutoDeleverage,
    FuturesCandlestick: FuturesCandlestick,
    FuturesFee: FuturesFee,
    FuturesIndexConstituents: FuturesIndexConstituents,
    FuturesInitialOrder: FuturesInitialOrder,
    FuturesLiqOrder: FuturesLiqOrder,
    FuturesLiquidate: FuturesLiquidate,
    FuturesOrder: FuturesOrder,
    FuturesOrderAmendment: FuturesOrderAmendment,
    FuturesOrderBook: FuturesOrderBook,
    FuturesOrderBookItem: FuturesOrderBookItem,
    FuturesPremiumIndex: FuturesPremiumIndex,
    FuturesPriceTrigger: FuturesPriceTrigger,
    FuturesPriceTriggeredOrder: FuturesPriceTriggeredOrder,
    FuturesTicker: FuturesTicker,
    FuturesTrade: FuturesTrade,
    IndexConstituent: IndexConstituent,
    InsuranceRecord: InsuranceRecord,
    LedgerRecord: LedgerRecord,
    LiquidateOrder: LiquidateOrder,
    Loan: Loan,
    LoanPatch: LoanPatch,
    LoanRecord: LoanRecord,
    MarginAccount: MarginAccount,
    MarginAccountBook: MarginAccountBook,
    MarginAccountCurrency: MarginAccountCurrency,
    MarginBorrowable: MarginBorrowable,
    MarginCurrencyPair: MarginCurrencyPair,
    MarginTransferable: MarginTransferable,
    MaxUniBorrowable: MaxUniBorrowable,
    MultiChainAddressItem: MultiChainAddressItem,
    MyFuturesTrade: MyFuturesTrade,
    MyFuturesTradeTimeRange: MyFuturesTradeTimeRange,
    OpenOrders: OpenOrders,
    OptionsAccount: OptionsAccount,
    OptionsAccountBook: OptionsAccountBook,
    OptionsCandlestick: OptionsCandlestick,
    OptionsContract: OptionsContract,
    OptionsMySettlements: OptionsMySettlements,
    OptionsMyTrade: OptionsMyTrade,
    OptionsOrder: OptionsOrder,
    OptionsPosition: OptionsPosition,
    OptionsPositionClose: OptionsPositionClose,
    OptionsPositionCloseOrder: OptionsPositionCloseOrder,
    OptionsSettlement: OptionsSettlement,
    OptionsTicker: OptionsTicker,
    OptionsUnderlying: OptionsUnderlying,
    OptionsUnderlyingTicker: OptionsUnderlyingTicker,
    Order: Order,
    OrderBook: OrderBook,
    OrderPatch: OrderPatch,
    OrderResp: OrderResp,
    PatchUniLend: PatchUniLend,
    PortfolioAccount: PortfolioAccount,
    PortfolioBorrowable: PortfolioBorrowable,
    PortfolioLoan: PortfolioLoan,
    PortfolioLoanRecord: PortfolioLoanRecord,
    PortfolioMarginBalance: PortfolioMarginBalance,
    PortfolioMode: PortfolioMode,
    PortfolioTransferable: PortfolioTransferable,
    Position: Position,
    PositionClose: PositionClose,
    PositionCloseOrder: PositionCloseOrder,
    RepayLoan: RepayLoan,
    RepayRecord: RepayRecord,
    RepayRequest: RepayRequest,
    RepayResp: RepayResp,
    Repayment: Repayment,
    SavedAddress: SavedAddress,
    SpotAccount: SpotAccount,
    SpotAccountBook: SpotAccountBook,
    SpotFee: SpotFee,
    SpotPricePutOrder: SpotPricePutOrder,
    SpotPriceTrigger: SpotPriceTrigger,
    SpotPriceTriggeredOrder: SpotPriceTriggeredOrder,
    StpGroup: StpGroup,
    StpGroupUser: StpGroupUser,
    SubAccount: SubAccount,
    SubAccountBalance: SubAccountBalance,
    SubAccountCrossMarginBalance: SubAccountCrossMarginBalance,
    SubAccountFuturesBalance: SubAccountFuturesBalance,
    SubAccountKey: SubAccountKey,
    SubAccountMarginBalance: SubAccountMarginBalance,
    SubAccountToSubAccount: SubAccountToSubAccount,
    SubAccountTransfer: SubAccountTransfer,
    SubCrossMarginAccount: SubCrossMarginAccount,
    SystemTime: SystemTime,
    Ticker: Ticker,
    TotalBalance: TotalBalance,
    Trade: Trade,
    TradeFee: TradeFee,
    TransactionID: TransactionID,
    Transfer: Transfer,
    TriggerOrderResponse: TriggerOrderResponse,
    TriggerTime: TriggerTime,
    UniCurrency: UniCurrency,
    UniCurrencyInterest: UniCurrencyInterest,
    UniCurrencyPair: UniCurrencyPair,
    UniInterestMode: UniInterestMode,
    UniInterestRecord: UniInterestRecord,
    UniLend: UniLend,
    UniLendInterest: UniLendInterest,
    UniLendRecord: UniLendRecord,
    UniLoan: UniLoan,
    UniLoanInterestRecord: UniLoanInterestRecord,
    UniLoanRecord: UniLoanRecord,
    UserLtvInfo: UserLtvInfo,
    UserTotalAmount: UserTotalAmount,
    WithdrawStatus: WithdrawStatus,
};

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === 'Date') {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            const discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    const discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf('Array<', 0) === 0) {
            // string.startsWith pre es6
            let subType: string = type.replace('Array<', ''); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            const transformedData: any[] = [];
            for (const index in data) {
                const date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        } else if (type === 'Date') {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) {
                // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            const attributeTypes = typeMap[type].getAttributeTypeMap();
            const instance: { [index: string]: any } = {};
            for (const index in attributeTypes) {
                const attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(
                    data[attributeType.name],
                    attributeType.type,
                );
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf('Array<', 0) === 0) {
            // string.startsWith pre es6
            let subType: string = type.replace('Array<', ''); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            const transformedData: any[] = [];
            for (const index in data) {
                const date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        } else if (type === 'Date') {
            return new Date(data);
        } else {
            if (enumsMap[type]) {
                // is Enum
                return data;
            }

            if (!typeMap[type]) {
                // dont know the type
                return data;
            }
            const instance = new typeMap[type]();
            const attributeTypes = typeMap[type].getAttributeTypeMap();
            for (const index in attributeTypes) {
                const attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(
                    data[attributeType.baseName],
                    attributeType.type,
                );
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
     * Apply authentication settings to header and query params.
     */
    applyToRequest(config: AxiosRequestConfig): AxiosRequestConfig;
}

export class HttpBasicAuth implements Authentication {
    public username = '';
    public password = '';

    applyToRequest(config: AxiosRequestConfig): AxiosRequestConfig {
        config.auth = {
            username: this.username,
            password: this.password,
        };
        return config;
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(config: AxiosRequestConfig): AxiosRequestConfig {
        if (config && config.headers) {
            const accessToken = typeof this.accessToken === 'function' ? this.accessToken() : this.accessToken;
            config.headers['Authorization'] = 'Bearer ' + accessToken;
        }
        return config;
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey = '';

    constructor(private location: string, private paramName: string) {}

    applyToRequest(config: AxiosRequestConfig): AxiosRequestConfig {
        if (this.location == 'query') {
            config.params[this.paramName] = this.apiKey;
        } else if (this.location == 'header' && config && config.headers) {
            config.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && config && config.headers) {
            if (config.headers['Cookie']) {
                config.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            } else {
                config.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
        return config;
    }
}

export class OAuth implements Authentication {
    public accessToken = '';

    applyToRequest(config: AxiosRequestConfig): AxiosRequestConfig {
        if (config && config.headers) {
            config.headers['Authorization'] = 'Bearer ' + this.accessToken;
        }
        return config;
    }
}

export class GateApiV4Auth implements Authentication {
    public key = '';
    public secret = '';

    applyToRequest(config: AxiosRequestConfig): AxiosRequestConfig {
        config.paramsSerializer = function (params) {
            return querystring.stringify(params);
        };
        const timestamp: string = (new Date().getTime() / 1000).toString();
        const resourcePath: string = new URL(config.url as string).pathname;
        const queryString: string = unescape(querystring.stringify(config.params));
        let bodyParam = '';
        if (config.data) {
            if (typeof config.data == 'string') {
                bodyParam = config.data;
            } else {
                bodyParam = JSON.stringify(config.data);
            }
        }
        const hashedPayload = crypto.createHash('sha512').update(bodyParam).digest('hex');
        const signatureString = [config.method, resourcePath, queryString, hashedPayload, timestamp].join('\n');
        const signature = crypto.createHmac('sha512', this.secret).update(signatureString).digest('hex');
        (<any>Object).assign(config.headers, { KEY: this.key, Timestamp: timestamp, SIGN: signature });
        return config;
    }
}
