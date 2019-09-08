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
        readonly scope: CampaignEffectScopes.Entry | undefined;
        readonly category: CampaignEffectScopeCategories.Entry | undefined;
    }
}
export default CampaignEffectScopeToCategoryJunctions;
