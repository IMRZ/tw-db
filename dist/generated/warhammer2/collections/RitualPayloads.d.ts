import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace RitualPayloads {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly humanOnly: boolean;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default RitualPayloads;
