import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CeoRarities {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly rarityValue: number;
        readonly rarityName: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CeoRarities;
