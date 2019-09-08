import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { EffectBundles } from "./EffectBundles";
export declare namespace CampaignGroupMoraleEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly name: string;
        readonly _group: string;
        readonly _effectBundle: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly group: CampaignGroups.Entry | undefined;
        readonly effectBundle: EffectBundles.Entry | undefined;
    }
}
export default CampaignGroupMoraleEffects;
