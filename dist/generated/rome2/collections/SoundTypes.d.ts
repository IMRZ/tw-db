import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace SoundTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: number;
        readonly description: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default SoundTypes;
