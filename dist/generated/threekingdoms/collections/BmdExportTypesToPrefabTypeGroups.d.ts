import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace BmdExportTypesToPrefabTypeGroups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly group: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default BmdExportTypesToPrefabTypeGroups;
