import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignEffectScopeObjects } from "./CampaignEffectScopeObjects";
import { CampaignEffectScopeOwnerships } from "./CampaignEffectScopeOwnerships";
import { CampaignEffectScopeLocations } from "./CampaignEffectScopeLocations";
import { CampaignEffectScopeTerritories } from "./CampaignEffectScopeTerritories";
export declare namespace CampaignEffectScopes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly localisedText: string;
        readonly _source: string;
        readonly _target: string;
        readonly _ownership: string;
        readonly _location: string;
        readonly _territory: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly source: CampaignEffectScopeObjects.Entry | undefined;
        readonly target: CampaignEffectScopeObjects.Entry | undefined;
        readonly ownership: CampaignEffectScopeOwnerships.Entry | undefined;
        readonly location: CampaignEffectScopeLocations.Entry | undefined;
        readonly territory: CampaignEffectScopeTerritories.Entry | undefined;
    }
}
export default CampaignEffectScopes;