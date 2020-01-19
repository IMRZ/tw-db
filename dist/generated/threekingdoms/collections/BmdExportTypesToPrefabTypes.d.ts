import { CollectionCache, CollectionKey } from "../../../common";
import { BmdExportTypesToPrefabTypeGroups } from "./BmdExportTypesToPrefabTypeGroups";
import { PrefabTypes } from "./PrefabTypes";
import { BmdExportTypesToPrefabTypeContexts } from "./BmdExportTypesToPrefabTypeContexts";
export declare namespace BmdExportTypesToPrefabTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _group: string;
        readonly _prefabType: string;
        readonly _context: string;
        constructor(collectionCache: CollectionCache, values: any);
        get group(): BmdExportTypesToPrefabTypeGroups.Entry | undefined;
        get prefabType(): PrefabTypes.Entry | undefined;
        get context(): BmdExportTypesToPrefabTypeContexts.Entry | undefined;
    }
}
export default BmdExportTypesToPrefabTypes;
