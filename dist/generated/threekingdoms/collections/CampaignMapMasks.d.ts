import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CampaignMapMasks {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly maskName: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CampaignMapMasks;
