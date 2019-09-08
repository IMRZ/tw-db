import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace FamilyRelationshipTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly relationshipType: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default FamilyRelationshipTypes;
