import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace AudioCultures {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly genericState: string;
        readonly musicState: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default AudioCultures;
