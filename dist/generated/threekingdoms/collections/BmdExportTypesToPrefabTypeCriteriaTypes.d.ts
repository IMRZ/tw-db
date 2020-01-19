import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace BmdExportTypesToPrefabTypeCriteriaTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly criteria: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default BmdExportTypesToPrefabTypeCriteriaTypes;
