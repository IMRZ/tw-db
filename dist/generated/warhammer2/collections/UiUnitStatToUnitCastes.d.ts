import { CollectionCache, CollectionKey } from "../../../common";
import { UiUnitStats } from "./UiUnitStats";
import { UnitCastes } from "./UnitCastes";
export declare namespace UiUnitStatToUnitCastes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _stat: string;
        readonly _unitCaste: string;
        readonly maxValueOverride: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly stat: UiUnitStats.Entry | undefined;
        readonly unitCaste: UnitCastes.Entry | undefined;
    }
}
export default UiUnitStatToUnitCastes;
