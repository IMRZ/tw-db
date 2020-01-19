import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CharacterAttributeSets {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly setName: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CharacterAttributeSets;
