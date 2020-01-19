import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CaiPersonalityGroups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly turnNumberMultiplier: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CaiPersonalityGroups;
