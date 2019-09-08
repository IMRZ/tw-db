import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace SoundEventNames {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly name: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default SoundEventNames;
