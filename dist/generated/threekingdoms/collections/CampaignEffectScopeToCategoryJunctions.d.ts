import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignEffectScopes } from "./CampaignEffectScopes";
import { CampaignEffectScopeCategories } from "./CampaignEffectScopeCategories";
export declare namespace CampaignEffectScopeToCategoryJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _scope: string;
        readonly _category: string;
        constructor(collectionCache: CollectionCache, values: any);
        get scope(): CampaignEffectScopes.Entry | undefined;
        get category(): CampaignEffectScopeCategories.Entry | undefined;
    }
}
export default CampaignEffectScopeToCategoryJunctions;
