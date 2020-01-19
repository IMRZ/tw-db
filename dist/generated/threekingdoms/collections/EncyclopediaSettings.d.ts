import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace EncyclopediaSettings {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly value: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default EncyclopediaSettings;
