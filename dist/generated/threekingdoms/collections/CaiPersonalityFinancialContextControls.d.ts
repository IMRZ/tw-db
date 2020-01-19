import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CaiPersonalityFinancialContextControls {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly financialContextControlProfile: string;
        readonly goIntoCrisisIfBankruptInXRounds: number;
        readonly allowOverspendIfCanSupportNetIncomeForXRounds: number;
        readonly allowOverspendIfTreasuryIsXMultipleOfRegularIncome: number;
        readonly continueInOverspendIfTreasuryIsXMultipleOfRegularIncome: number;
        readonly allowOverspendIfTreasuryAboveX: number;
        readonly continueInOverspendIfTreasuryAboveX: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CaiPersonalityFinancialContextControls;
