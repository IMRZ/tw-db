import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CampaignMarkerTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: string;
        readonly notes: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CampaignMarkerTypes;
