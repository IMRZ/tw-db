import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { EffectBundles } from "./EffectBundles";
import { ResourceTransactions } from "./ResourceTransactions";
import { PooledResourceScopes } from "./PooledResourceScopes";
export declare namespace CampaignGroupSiegeEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignGroup: string;
        readonly _effectBundle: string;
        readonly _roundResourceTransaction: string;
        readonly _roundResourceTransactionScope: string;
        readonly roundResourceTransactionPreventsAttrition: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignGroup(): CampaignGroups.Entry | undefined;
        get effectBundle(): EffectBundles.Entry | undefined;
        get roundResourceTransaction(): ResourceTransactions.Entry | undefined;
        get roundResourceTransactionScope(): PooledResourceScopes.Entry | undefined;
    }
}
export default CampaignGroupSiegeEffects;
