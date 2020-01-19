import { CollectionCache, CollectionKey } from "../../../common";
import { BmdExportTypes } from "./BmdExportTypes";
export declare namespace BuildingSlotGroups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly defaultPrefab: string;
        readonly editorXScale: number;
        readonly editorYScale: number;
        readonly editorZScale: number;
        readonly tintColourR: number;
        readonly tintColourG: number;
        readonly tintColourB: number;
        readonly tintColourA: number;
        readonly _districtBmdExportType: string;
        constructor(collectionCache: CollectionCache, values: any);
        get districtBmdExportType(): BmdExportTypes.Entry | undefined;
    }
}
export default BuildingSlotGroups;
