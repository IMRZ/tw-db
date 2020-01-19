import { CollectionCache, CollectionKey } from "../../../common";
import { BmdExportTypesToPrefabTypeGroups } from "./BmdExportTypesToPrefabTypeGroups";
import { BmdExportTypes } from "./BmdExportTypes";
import { BmdExportTypesToPrefabTypeCriteriaTypes } from "./BmdExportTypesToPrefabTypeCriteriaTypes";
export declare namespace BmdExportTypesToPrefabTypeJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _group: string;
        readonly _bmdExportType: string;
        readonly _criteria: string;
        constructor(collectionCache: CollectionCache, values: any);
        get group(): BmdExportTypesToPrefabTypeGroups.Entry | undefined;
        get bmdExportType(): BmdExportTypes.Entry | undefined;
        get criteria(): BmdExportTypesToPrefabTypeCriteriaTypes.Entry | undefined;
    }
}
export default BmdExportTypesToPrefabTypeJunctions;
