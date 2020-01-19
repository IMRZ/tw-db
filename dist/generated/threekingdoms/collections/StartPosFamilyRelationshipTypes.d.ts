import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace StartPosFamilyRelationshipTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default StartPosFamilyRelationshipTypes;
