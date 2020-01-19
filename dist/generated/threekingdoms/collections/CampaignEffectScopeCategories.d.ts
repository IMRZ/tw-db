import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CampaignEffectScopeCategories {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly nameLocalised: string;
        readonly sortOrder: number;
        readonly categoryIcon: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CampaignEffectScopeCategories;
