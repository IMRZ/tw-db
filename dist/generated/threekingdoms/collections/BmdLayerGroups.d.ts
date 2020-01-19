import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace BmdLayerGroups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly isBattle: boolean;
        readonly isCampaign: boolean;
        readonly isExclusive: boolean;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default BmdLayerGroups;
