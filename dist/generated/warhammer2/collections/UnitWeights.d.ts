import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace UnitWeights {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly onscreenText: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default UnitWeights;
