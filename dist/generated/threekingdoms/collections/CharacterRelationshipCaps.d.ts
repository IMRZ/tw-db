import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CharacterRelationshipCaps {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly cap: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CharacterRelationshipCaps;
