import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CampaignBattlePaths {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly path: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CampaignBattlePaths;
