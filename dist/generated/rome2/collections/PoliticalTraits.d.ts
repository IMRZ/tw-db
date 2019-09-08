import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace PoliticalTraits {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly onscreenName: string;
        readonly description: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default PoliticalTraits;
