import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CampaignBonusValueIdsUnitSets {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly notes: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CampaignBonusValueIdsUnitSets;
