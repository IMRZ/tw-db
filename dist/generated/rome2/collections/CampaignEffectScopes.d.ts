import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignEffectScopeObjects } from "./CampaignEffectScopeObjects";
import { CampaignEffectScopeOwnerships } from "./CampaignEffectScopeOwnerships";
import { CampaignEffectScopeLocations } from "./CampaignEffectScopeLocations";
export declare namespace CampaignEffectScopes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly localisedText: string;
        readonly order: number;
        readonly _source: string;
        readonly _target: string;
        readonly _ownership: string;
        readonly _location: string;
        constructor(collectionCache: CollectionCache, values: any);
        get source(): CampaignEffectScopeObjects.Entry | undefined;
        get target(): CampaignEffectScopeObjects.Entry | undefined;
        get ownership(): CampaignEffectScopeOwnerships.Entry | undefined;
        get location(): CampaignEffectScopeLocations.Entry | undefined;
    }
}
export default CampaignEffectScopes;
