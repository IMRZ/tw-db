import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { ResourceTransactions } from "./ResourceTransactions";
export declare namespace CampaignAnnexRegionCosts {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _group: string;
        readonly _resourceTransactionCost: string;
        constructor(collectionCache: CollectionCache, values: any);
        get group(): CampaignGroups.Entry | undefined;
        get resourceTransactionCost(): ResourceTransactions.Entry | undefined;
    }
}
export default CampaignAnnexRegionCosts;
