import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CampaignMapAttritionDamages {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly percentUnitDamage: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CampaignMapAttritionDamages;
