import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace TraitInfo {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly trait: string;
        readonly applicableTo: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default TraitInfo;
