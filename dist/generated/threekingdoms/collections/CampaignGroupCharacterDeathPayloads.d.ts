import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { EffectBundles } from "./EffectBundles";
import { ResourceTransactions } from "./ResourceTransactions";
import { PooledResourceScopes } from "./PooledResourceScopes";
export declare namespace CampaignGroupCharacterDeathPayloads {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignGroup: string;
        readonly _effectBundle: string;
        readonly _resourceTransaction: string;
        readonly _resourceTransactionScope: string;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignGroup(): CampaignGroups.Entry | undefined;
        get effectBundle(): EffectBundles.Entry | undefined;
        get resourceTransaction(): ResourceTransactions.Entry | undefined;
        get resourceTransactionScope(): PooledResourceScopes.Entry | undefined;
    }
}
export default CampaignGroupCharacterDeathPayloads;
