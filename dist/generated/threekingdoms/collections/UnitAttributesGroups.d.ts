import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace UnitAttributesGroups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly groupName: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default UnitAttributesGroups;
