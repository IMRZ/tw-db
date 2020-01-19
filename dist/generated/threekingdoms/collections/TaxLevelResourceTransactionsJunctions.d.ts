import { CollectionCache, CollectionKey } from "../../../common";
import { TaxesLevels } from "./TaxesLevels";
import { ResourceTransactions } from "./ResourceTransactions";
import { PooledResourceScopes } from "./PooledResourceScopes";
import { Campaigns } from "./Campaigns";
import { PlayerGameDifficultyTypes } from "./PlayerGameDifficultyTypes";
export declare namespace TaxLevelResourceTransactionsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _taxLevel: string;
        readonly _transaction: string;
        readonly _transactionScope: string;
        readonly _optionalCampaignFilter: string;
        readonly _optionalDifficultyOverride: string;
        constructor(collectionCache: CollectionCache, values: any);
        get taxLevel(): TaxesLevels.Entry | undefined;
        get transaction(): ResourceTransactions.Entry | undefined;
        get transactionScope(): PooledResourceScopes.Entry | undefined;
        get optionalCampaignFilter(): Campaigns.Entry | undefined;
        get optionalDifficultyOverride(): PlayerGameDifficultyTypes.Entry | undefined;
    }
}
export default TaxLevelResourceTransactionsJunctions;
